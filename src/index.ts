import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import * as dotenv from "dotenv";
import { router } from "./router";

if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: '../.env.dev' });
}

const init = async () => {

    const server: Server = new Server({
        port: process.env.PORT || 3005,
        host: 'localhost'
    });

    router(server);

    await server.start();
    
    console.log('Server running on %s', server.info.uri);

};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);

});

init();