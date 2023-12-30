import Express from 'express';

import con from './config/connection.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = Express();

const PORT = process.env.PORT || 8080;

app.use(Express.json());
app.use(Express.urlencoded());

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("App Chal Gai GAND");
})

app.get("*", (req, res) => {
    res.send("Kaha AA Gaye!!!");
})

app.listen(PORT, () => {
    console.log("App is Running At PORT : ", PORT);
})