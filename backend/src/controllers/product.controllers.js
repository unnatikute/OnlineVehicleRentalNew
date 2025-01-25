import { Product } from "../models/product.models.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";

//add vehicle details like name, category,available, rentalPricePerDay,location, image, owner, etc
const addProduct = asyncHandler(async (req, res) => {
    const { name, category, available, rentalPricePerDay } = req.body;
    // console.log('User id ', req.user._id);
    let location = req.body.location.toLowerCase().trim(); // Ensure no trailing spaces

    if (!req.user._id) {
        throw new ApiError(401, "User not authenticated");
    }

    const productLocalPath = req.file?.path;
    if (!productLocalPath) {
        throw new ApiError(400, "Please upload a product image");
    }
    // console.log(productLocalPath);

    let productUrl;
    try {
        productUrl = await uploadOnCloudinary(productLocalPath);
        // console.log(productUrl);

        if (!productUrl) {
            throw new ApiError(400, "Product image upload failed");
        }
    } catch (error) {
        fs.unlinkSync(productLocalPath);
        console.log(error);

        throw new ApiError(
            400,
            "Error while uploading product image on cloudinary"
        );
    }

    const product = await Product.create({
        name,
        vehicleImage: productUrl.url,
        category,
        available,
        rentalPricePerDay,
        location,
        owner: req.user._id,
    });

    const createdProduct = await Product.findById(product._id);

    return res
        .status(200)
        .json(
            new ApiResponse(200, createdProduct, "Vehicle Add successfully.")
        );
});

//update vehicle details like name, category,available, rentalPricePerDay,location, image, owner, etc
const updateProduct = asyncHandler(async (req, res) => {
    // get product ID 
    // fetch product from database
    // check if the product is owned by the user
    // update the product details you want remaining fields are same
    // save the product
    // return the updated product

    const { name, category, available, rentalPricePerDay, location } = req.body;
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    // console.log('ProductID----->', productId);
    // console.log('Product------->', product);


    const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        {
            $set: {
                ...product._doc, // Spread the existing product details
                ...(name && { name }), // Only update fields if they exist in the request body
                ...(category && { category }),
                ...(available !== undefined && { available }), // Allow boolean updates
                ...(rentalPricePerDay && { rentalPricePerDay }),
                ...(location && { location })
            }
        },
        { new: true }
    )

    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedProduct, "Vehicle updated successfully.")
        )

});

//delete vehicle details like name, category,available, rentalPricePerDay,location, image, owner, etc
const deleteProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    const deletedProduct = await Product.findByIdAndDelete(productId);

    return res
        .status(200)
        .json(
            new ApiResponse(200, deletedProduct, "Vehicle deleted successfully.")
        )
});

//get all vehicle details like name, category,available, rentalPricePerDay,location, image, owner, etc
const getAllProduct = asyncHandler(async (req, res) => {
    const products = await Product.find();
    return res
        .status(200)
        .json(new ApiResponse(200, products, "All vehicles fetched successfully."));
});

// get all product of a user
const getAllProductOfUser = asyncHandler(async (req, res) => {
    const products = await Product.find({ owner: req.user._id });
    return res
        .status(200)
        .json(new ApiResponse(200, products, "All vehicles fetched successfully."));
})

// get product by location
const getByLocation = asyncHandler(async (req, res) => {
    let { location } = req.query;
    // console.log('Products by location:', location);
    location = location.toLowerCase().trim(); // Ensure no trailing spaces

    try {
        const products = await Product.find({ location }); // Fetch all matching products
        // console.log('Products by location:', products);

        if (!products || products.length === 0) {
            return res.status(404).json(new ApiResponse(404, [], "No vehicles found for the given location."));
        }

        return res
            .status(200)
            .json(new ApiResponse(200, products, "All vehicles fetched successfully."));
    } catch (error) {
        console.error("Error fetching products by location:", error);
        return res
            .status(500)
            .json(new ApiResponse(500, null, "Failed to fetch vehicles."));
    }
})

export { addProduct, updateProduct, deleteProduct, getAllProduct, getAllProductOfUser, getByLocation };
