import mongoose from "mongoose";

const connect_DB = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;

        // Check if the variable is loaded
        // console.log('MONGODB_URI:', MONGODB_URI || 'Not set!');

        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI environment variable is not set!');
        }

        const connection = await mongoose.connect(MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connect_DB;
