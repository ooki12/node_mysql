const mysql = require('mysql');
//MySQL モジュール読み込み

const con=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
});

con.connect((err)=>{
    if(err)throw err;
    console.log('connect success!');
});

con.end();