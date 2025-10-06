import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY
const apiSecret = process.env.STREAM_API_SECRET

if (!apiKey || ! apiSecret) {
    console.error("Stream Api Key or Secret is missing")
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret)

export const upsertStreamUser = async (userData) => {
    try{
        await streamClient.upsertUsers([userData]) //upsert means create or update, sha put the userData in the DB
        return userData
    } catch (error){
        console.error("Error Creating Stream user: ", error)
    }
}


export const generateStreamToken = (userId) => {
    try{
    // ensure user id is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr)
    }catch(error){
           console.error("Error in generateStreamToken controller", error.message)
        res.status(500).json({message: "Internal server Error"})
    }
}