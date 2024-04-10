import express from 'express';
import dataRouter from './router/dataRouter.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', dataRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
