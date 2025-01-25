const asyncHandler = (reqHandler) => {
    // console.log("Enter in asyncHandler ");

    return (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next))
            .catch((err) => next(err))
    }
}

export { asyncHandler }