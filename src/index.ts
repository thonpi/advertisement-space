import express from 'express';
import router from './router';
const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});