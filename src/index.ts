import express from 'express';
import dotenv from 'dotenv';
import songRoutes from './route.js';
import redis from 'redis';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

export const redisClient = redis.createClient({
    password : process.env.REDIS_PASSWORD as string,
    socket : {
        host: process.env.REDIS_HOST as string,
        port : 12080,
    },
});

redisClient.connect().then(() => console.log("Connected to Redis Client successfully")).catch((err) => console.log(err));

app.use("/api/v1", songRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})