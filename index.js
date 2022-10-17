const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));
app.use('/api', router);

app.listen(3004, () => {
    console.log('服务器运行在3004端口上');
});
