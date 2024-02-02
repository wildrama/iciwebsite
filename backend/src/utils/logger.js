import winston from 'winston'
import 'winston-mongodb'
import { MONGODBURL, NODEENV } from '../config.js';

const logLevels = {
    debug: 0,
    http: 1,
    info: 2,
    warning: 3,
    error: 4,
    fatal: 5
};

let logConfig = undefined

if(NODEENV === 'production'){
    logConfig ={
        levels: logLevels,
        transports: [
            new winston.transports.MongoDB({
                options:{ useUnifiedTopology: true },
                db: MONGODBURL,
                collection: "logs",
                tryReconnect: true,
                level: "error"
            }),
            new winston.transports.File({
                filename: "./logs/logs.log",
                level: "info", 
            }),
        ]
    };
}
if(NODEENV === 'development'){
    logConfig ={
        levels: logLevels,
        transports: [
            new winston.transports.Console({level:'error'}),
        ]
    };
}
if(NODEENV !== 'development' && NODEENV !== 'production'){
    logConfig ={
        levels: logLevels,
        transports: [
            new winston.transports.Console(),
        ]
    };
}

const logger = winston.createLogger(logConfig)
export default logger;
