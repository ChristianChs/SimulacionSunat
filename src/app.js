import express from "express"
import morgan from "morgan"
import loginRoutes from "./routes/login.route.js"

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use("/api",loginRoutes)

export default app