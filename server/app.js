import Express from 'express';

const app = Express();

const PORT = process.env.PORT || 8080;

app.get("/", () => {
    console.log("App is Running!!!!");
})

app.listen(PORT, () => {
    console.log("App is Running At PORT : ", PORT);
})

export default app;