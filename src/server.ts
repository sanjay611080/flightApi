import express from 'express';
import cors from 'cors';
import flightRoutes from '../routes/flightRoutes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', flightRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
