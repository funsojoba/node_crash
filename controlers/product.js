

const getAllProducts = async (req, res) =>{
    res.status(200).json({msg:"testing route"})
}

const getAllStaticProduct = async(req, res) => {
    res.status(200).json(
        {msg:"product static route"}
    )
}

const productControllers = {
    getAllProducts,
    getAllStaticProduct
};

// Export the object as the default export
export default productControllers;