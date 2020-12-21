//カスタムモジュール読み込み
const db = require('./lib/db');

const con =db.connect();

let sql = 'UPDATE users SET ? WHERE ?;'
let params = [
    { email : 'test@yokohama.com' },
    { id: 1 },
]


con.query(sql,params,(err,results)=>{
        console.log(sql);
        console.log(results)
});

con.end();