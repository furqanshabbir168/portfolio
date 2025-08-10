import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/contactRoute.js";


dotenv.config();

const app = express();

app.use(cors({
    origin: [
    "https://furqandev-ruby.vercel.app",
  ],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});


// Routes
app.use('/api',router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
