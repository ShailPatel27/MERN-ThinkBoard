import ratelimit from "../config/upstash.js";

const rateLimiter = async(req, res, next) => {
    const {success} = await ratelimit.limit("my-limit-key");  // this is just a path
    // You would need to put rate limit on each user and replace "my-limit-key" with user id
    // Or you can change your code a bit to accomodate user IP address

    try {
        if(!success){
            return res.status(429).json({  // 429 is for "Too Many Requests error"
                message: "Too many requests, please try again later"
            });
        }
        
        next();
    } catch (error) {
        console.log("Rate limit error: ", error)
        next();
    }
}

export default rateLimiter;