import httpServer from "#Config/http.js";
import '#Config/env.js';
import connectDB from "#Config/db.js";

const bootstrap = async ()=>{
    await connectDB(process.env.MONGODB_URL);
    httpServer.listen(process.env.PORT, ()=>{
        console.log(`Servidor a la escucha en el puerto ${process.env.PORT}`);
    });
};
bootstrap();