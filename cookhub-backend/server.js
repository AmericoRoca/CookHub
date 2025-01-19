const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('DB Connection Error: ', err));

// Ruta de prueba
app.get('/', (req, res) => res.send('API funcionando'));


const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
