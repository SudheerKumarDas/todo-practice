import User from "../models/User.js";

export const registerUsers = async(req,res) => {
    try {
        
    } catch (error) {
        console.error("Error in creating Users ", error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}