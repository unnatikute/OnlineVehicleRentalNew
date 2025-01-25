import { User } from "../models/user.models.js";
// import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import validator from "validator";

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        // console.log(userId);

        const user = await User.findById(userId);
        // console.log(user);

        const accessToken = user.generateAccessToken();
        // console.log("Access token generated:", accessToken);
        const refreshToken = user.generateRefreshToken();
        // console.log("Refresh token generated:", refreshToken);

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating access and refresh token"
        );
    }
};

// Register a new user complete
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // console.log("Request Body:", req.body);

    if ([name, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All Fields are required..");
    }

    const isValid = validator.isEmail(email);
    if (!isValid) {
        throw new ApiError(400, "Invalid Email");
    }
    const existedUser = await User.findOne({
        $or: [{ name }, { email }],
    });

    if (existedUser) {
        throw new ApiError(409, "User with Username or email already exists..");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(500, "Failed to create user");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdUser, "User Registered successfully..")
        );
});

// login a user complete
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email) {
        throw new ApiError(400, "Email is required..");
    }

    // check user exist or not
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // check password match
    const isValidPassword = await user.isPasswordCorrect(password);
    if (!isValidPassword) {
        throw new ApiError(401, "Invalid password");
    }
    // console.log(user);

    // Generate and save a new access and refresh token
    const { accessToken, refreshToken } =
        await generateAccessTokenAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    // send cookies to user
    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken,
                },
                "User logged in successfully"
            )
        );
};

const logoutUser = asyncHandler(async (req, res) => {
    // remove cookies from user
    await User.findByIdAndUpdate(
        req.user._id,
        {
            // $set: {
            //     refreshToken: undefined
            // }
            $unset: {
                refreshToken: 1,
                //this removes the field from document
            },
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "LoggedOut Successfully.."));
});

// Update user name and email
const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        user.save();
        return res
            .status(200)
            .json(new ApiResponse(200, user, "User updated successfully."));
    } catch (error) {
        throw new ApiError(500, "Internal server error");
    }
};

// delete user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete({ _id: id });
        return res
            .status(200)
            .json(new ApiResponse(200, user, "User deleted successfully."));
    } catch (error) {
        throw new ApiError(500, "Internal server error");
    }
};

export {
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
    generateAccessTokenAndRefreshToken,
};
