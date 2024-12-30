import monggose, { Schema } from "mongoose";

const playlist = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
    ],
    owner: {
        type: String,
        ref: "User",
    },
},
    {timestamps: true}
)

export const Playlist = mongoose.model("Playlist", playlist);