var squares=document.querySelectorAll(".square");
var colorSelect=document.querySelector("#colorSelect");
var newColor=document.querySelector("#newColor");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var tryAgain=document.querySelector("#tryAgain");
var h1=document.querySelector("#top");
var colors=[];
var noOfSquares=6;
randomColor();
var pickColor=pick();
colorSelect.textContent=pickColor;
function pick(){
    return colors[Math.floor(Math.random()*noOfSquares)];

}
function randomColor(){
    colors=[];
    for(var i=0;i<noOfSquares;i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        var str=("rgb"+"("+r+", "+g+", "+b+")");
        colors.push(str);
       
    }

}
for(var i=0;i<noOfSquares;i++){
    squares[i].style.backgroundColor=colors[i];
}


for(var i=0;i<noOfSquares;i++){
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickColor){
            for(var i=0;i<noOfSquares;i++){
                squares[i].style.backgroundColor=pickColor;
            }
            tryAgain.textContent="Correct!";
            h1.style.backgroundColor=pickColor;
        }
        else{
            this.style.backgroundColor= "#233223";
            tryAgain.textContent="TRY AGAIN";

        
        }
    });
}
easy.addEventListener("click",function(){
    noOfSquares=3;
    randomColor();
    pickColor=pick();
    for(var i=0;i<noOfSquares;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    for(var i=noOfSquares;i<squares.length;i++){
        squares[i].style.backgroundColor="#233223";
    }
    tryAgain.textContent="";
    h1.style.backgroundColor="steelblue";
});
hard.addEventListener("click",function(){
    noOfSquares=6;
    randomColor();
    pickColor=pick();
    for(var i=0;i<noOfSquares;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    tryAgain.textContent="";
    h1.style.backgroundColor="steelblue";
});
newColor.addEventListener("click",function(){
    randomColor();
    pickColor=pick();
    for(var i=0;i<noOfSquares;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    tryAgain.textContent="";
    h1.style.backgroundColor="steelblue";

});