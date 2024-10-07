import Express,{ Application } from 'express'
import 'dotenv'

class App {
    private server : Application
    
    public constructor(){
        this.server = Express()
    }

    public listen(){
        this.server.listen(process.env.SERVER_PORT,() => console.log(`escuchando el puerto: ${process.env.SERVER_PORT}`))
    }
}

export default App