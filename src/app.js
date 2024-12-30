import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// common middlewares
// who should be able to talk to your database that is CORS
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);  

// this is built in middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// any image or static file can be use from the public folder
app.use(express.static("public"));
app.use(cookieParser());


// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"



// routes
app.use("/api/v1/healthcheck", healthcheckRouter)


export {app};