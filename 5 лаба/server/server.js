const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('c:/Users/Lenovo/Desktop/Stud/ВТИП 2 сем/5 лаба/server/config/db');
const flashRoutes = require('c:/Users/Lenovo/Desktop/Stud/ВТИП 2 сем/5 лаба/server/routes/flashRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к базе данных
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/flash', flashRoutes);

// Статические файлы
app.use(express.static('public'));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});