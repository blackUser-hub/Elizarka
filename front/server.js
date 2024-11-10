const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 4000;

// Миддлвар для обработки CORS
app.use(cors({
    origin: 'http://localhost:3000', // Замените на URL вашего клиентского приложения
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Разрешить учетные данные (куки, заголовки авторизации и т.д.)
}));

// Настраиваем multer для обработки multipart/form-data
const storage = multer.memoryStorage(); // Храним файлы в памяти
const upload = multer({ storage: storage });

// Маршрут для обработки отправки FormData
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file); // Информация о файле
    console.log(req.body); // Остальные поля формы

    res.json({ message: 'Файл успешно загружен!', file: req.file });
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

// const express = require('express');
// const multer = require('multer');
// const axios = require('axios');

// const app = express();
// const PORT = 3000;

// // Настройка multer для обработки FormData
// const upload = multer();

// // Обработка POST-запроса для получения FormData
// app.post('/upload', upload.single('file'), async (req, res) => {
//     try {
//         const { body, file } = req;

//         // Логируем полученные данные
//         console.log('Received data:', body);
//         console.log('Received file:', file);

//         // Создаем FormData для отправки на другой сервер
//         const formData = new FormData();
//         for (const key in body) {
//             formData.append(key, body[key]);
//         }
//         if (file) {
//             formData.append('file', file.buffer, file.originalname);
//         }

//         // Отправляем данные на другой сервер
//         const response = await axios.post('http://example.com/api/endpoint', formData, {
//             headers: {
//                 ...formData.getHeaders(), // Устанавливаем заголовки для FormData
//             },
//         });

//         // Возвращаем ответ от другого сервера
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Ошибка при отправке данных на другой сервер');
//     }
// });

// // Запуск сервера
// app.listen(PORT, () => {
//     console.log(`Сервер запущен на http://localhost:${PORT}`);
// });