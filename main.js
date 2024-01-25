var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 900;
var w = canvas.width;
var h = canvas.height;
var id =  setInterval(draw, 10);
var sking = new Image();
sking.src ="game_img/sakanaking.png"; //さかなキングは"sking"という
var title = new Image();
title.src ="game_img/title.png";


function draw() {

ctx.fillStyle ="#000000";
ctx.fillRect(0, 0, w, h);
ctx.drawImage(title, 0, 0)


ctx.fillStyle="#ff8c00";

ctx.font = "90px serif";
ctx.fillText("さかなディフェンス！",250,250);

ctx.font = "30px Verdana";
ctx.fillText("スタート",750,550);



ctx.drawImage(sking, 20, 50, 300 ,300);

}

canvas.addEventListener("click", e => {
    const rect = canvas.getBoundingClientRect();
    mousePointer_X = e.clientX - rect.left; //お客さん(プレイヤー)の画面の横幅から
    mousePointer_Y = e.clientY - rect.top;

   
    if (mousePointer_X > 600 && mousePointer_X < 600 + 200 && mousePointer_Y > 700 && mousePointer_Y < 700 + 200) {
        
    }
});