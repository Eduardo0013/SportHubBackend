import 'dotenv/config'
import Express, { Application } from 'express'
import authRoutes from "../modules/auth/infraestructure/routes/auth"

class App {
    private server: Application

    public constructor() {
        this.server = Express()
        this.config()
        this.routes()
    }

    private config() {
        this.server.use(Express.json({ limit: "2mb" }))
    }

    private routes() {
        this.server.use("/", authRoutes)
    }

    public listen() {
        this.server.listen(process.env.SERVER_PORT, () => console.log(`escuchando el puerto: ${process.env.SERVER_PORT}`))
    }
}

export default App