const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const config = require('./config/config')

//Подключаем body-parser с настройками
app.use(bodyParser.urlencoded({
    extended: true
}));

//Обработка главной страницы
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/html/index.html');
    console.log('Open start page');
});

//Обработка GET и POST запросов страницы с формой   
//???Необходимо установить npm body-parser и подключить его с помощью app.use() с параметрами
app.route('/formPage')
    .get((req, res) => {
        res.sendFile(__dirname + '/client/html/formPage.html');
    })
    .post((req, res) => {
        console.log('Произошла отправка POST запроса');
        console.log('Получение POST запроса в виде обьекта:');
        console.log(req.body);
        console.log('Получение элемента POST запроса inputText:');
        console.log(req.body.inputText);
    });

//Прослушиваем порт из файла с параметрами
app.listen(config.PORT, () => {
    console.log(`server start on port ${config.PORT}`);
})