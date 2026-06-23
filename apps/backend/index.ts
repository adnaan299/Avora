// user
//     - POST /api/v1/user/signup
//     - POST /api/v1/user/signin
//     - POST /api/v1/user/logout
//     - PUT /api/v1/user/update
//     - GET /api/v1/user/me
//     - GET /api/v1/user/users

// video
//     - POST /api/v1/video 
//     - GET /api/v1/video/videos
//     - GET /api/v1/video/:videoId
    
// avatar

//     - POST /api/v1/avatar 
//     - GET /api/v1/avatar/avatar
//     - GET /api/v1/avatar/:avatar

import express from "express"
import userRouter from './routes/user.routes.js'
import avatarRouter from './routes/avatar.routes.js'
import avatarVideoRouter from './routes/avatarVideo.routes.js'

const app = express()

app.use("/user", userRouter)
app.use('/avatar', avatarRouter)
app.use('/avatarVideo', avatarVideoRouter)


app.listen(3000, ()=> {
    console.log("Backend started at port 3000")
})

