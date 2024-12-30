import { v2 as cloudinary } from 'cloudinary';
// fs is file storage method
import fs from "fs";

// configure cloudinary
cloudinary.config({ 
        cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
        api_key:  process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
});
    
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(
            
                localFilePath, {
                resource_type: "auto",
            }
        )
        console.log("file uploaded on cloudinary src : ", response.url)
        // once file is uploaded file should be deleted
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null
    }
}

export {uploadOnCloudinary}