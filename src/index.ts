import * as express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import * as cookieparser from 'cookie-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import router from './router';
dotenv.config();


const app = express();

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieparser());
app.use(bodyparser.json());
    
    

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server started on port 8080");
});


mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('error', (err) => {console.log(err)});

app.use('/', router());