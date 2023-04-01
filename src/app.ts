import { env } from "./env";
import { Application } from "express";
import express = require("express");
import mongoose = require("mongoose");

export class App {
    // public -> it is accessible publicly -> we can access it outside class
    // private -> it is not accessible publicly -> we can access it inside class only

    public app: Application;
    private apiPath: string = env().apiPath || '/api';
    private staticPath: string = env().staticPath || "/public";

    /**
     * @param port Port Application listens on
     * @param middleware Array of middleware to be applied to app 
     * @param routes Array of express.Router objects for application routes
     */
    constructor(
        private port: number,
        middleware: Array<any>,
        routes: Array<any>
    ) {
        this.app = express();
        this.middleware(middleware);
        // this.routes(routes);
        this.assets(this.staticPath);
    }

    /**
     * @param _middleware Array of middleware to be loaded into express app
    */
    private middleware(_middleware: any[]) {
        _middleware.forEach((m) => {
            this.app.use(m);
        });
    }

    public addMiddleWare(middleWare: any) {
        this.app.use(middleWare);
    }

    /**
     * Attaches route objects to app, appending routes to `apiPath`
     * @param routes Array of router objects to be attached to the app
     */


    /* Enable express to serve up static assets*/
    private assets(path: string) {
        this.app.use(express.static(path));
    }

    /**
     * Creates a connection to a MongoDB instance using mongoose
     * @param uri MongoDB connection string
    */
    public mongoDB(uri: string) {
        const connect = () => {
            const options: mongoose.ConnectOptions = { keepAlive: true };
            mongoose.connect(uri, options).then(() => {
                console.log('DB connected successfully');
            }).catch((error) => {
                console.log("DB connection failed. \n", error);
                return process.exit(1);
            });
        };
        
        connect();

        mongoose.connection.on("disconnected", connect);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`[${env().stage}] - Server started at http://localhost:${this.port}${this.apiPath}`);
        });
    }
}
