import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import router from './routes/ToDoRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.port
const url = process.env.MONGO_URL

mongoose.connect(url)
    .then((res) => { console.log(`mongoDb is conected`) })
    .catch((err) => {
        console.log(err);
    })

    
app.use(router)
app.listen(5000, () => {
    console.log(`listening on :${PORT}`);
})