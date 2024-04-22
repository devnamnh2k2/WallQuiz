import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/init_mongodb.js';
import morgan from 'morgan';
import { userRouter } from './routes/index.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.send('Hello webisite wallquiz!');
})


app.use("/api/auth", userRouter);
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${port}`);
})