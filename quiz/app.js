const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');
const path = require('path');
const fs = require("fs");
const mysql = require('mysql');
const PORT = 8010;
const cors=require("cors");
const io = socketio(server);
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
app.use(cors());


app.get("/stu",(req,res) => {
    const filePath = path.join(__dirname, '/quiz_stu.html');
    fs.readFile(filePath);
    res.writeHead(200,{'Content-Type':'text/html'});

});

// app.post("/host",(req,res,next)=> {
//     fs.readFile(__dirname+"/quiz_host.html",'utf8',(error,data) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.get("/", (req, res, next) => {

//     var con = mysql.createConnection({

//         host: "localhost",
//         user: "root",
//         password: "1111",
//         database: "test"
//     });
    
//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!"); 
    
//         // var sql = "INSERT INTO student_list (std_id, std_name) VALUES ?";
//         // // var sql= "SHOW FULL COLUMNS FROM student_list";
//         // var values = [
//         // 	["1111", "AAAA"],
//         //     ["2222", "BBBB"],
//         //     ["3333", "CCCC"],
//         //     ["4444", "DDDD"]
//         // ];
//         // con.query(sql,[values], function(err,result) {
//         // 	if(err) throw err;
//         // 	console.log("Number of records inserted: " + result.affectedRows);
//         //     // console.log(result);
//         // });
        
//     });

//     fs.readFile("./quiz_host.html", (error, data) => {
//         if (error) {
//             console.log(error);
//         }
//         con.query("SELECT * FROM student_list", function(err,result) {
//             if(err) throw err;
    
//             res.render(__dirname+'/views/chat',{student_data: result});
//             // console.log(result);
    
//         });
//     });
   
// });

server.listen(PORT, function() {
    console.log(`Server running on ${PORT}`);
});
//이 파일에는 파일 읽는 부분 학생들 파일에는 파일쓰는 부분

//퀴즈목록 받아온거 파일로 빼서 저장
//학생페이지에서는 파일 읽어서 띄우기
// 최종점수나 맞은 개수는 db에 저장? 일단 나중에 고려