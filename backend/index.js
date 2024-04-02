import app from "./app.js";
import * as mongoose from "mongoose";
import { config } from "dotenv";
import cluster from "node:cluster";
import http from "node:http";
import { availableParallelism } from "node:os";
import process from "node:process";

config();

const server = http.createServer(app);

const bootstrap =async () => {
try {

    // if(mongoose.connections){
    //     server.listen(3000);
    //     return
    // }else{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to db.")
        server.listen(3000);

    // }

} catch (error) {
    console.log(error?.message)
}

};

const numCPUs = availableParallelism();

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   console.log(`Worker ${process.pid} started`);
  bootstrap();
// }

server.on("listening",()=>
{
    console.log("server is up.")
})
