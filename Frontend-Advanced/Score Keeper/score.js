var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var firstScore = document.querySelector("#firstScore");
var input=document.querySelector("input");
var max=document.querySelector("#maxScore");
var resetButton= document.querySelector("#reset");
var winner=false;
var p1Score=0;
var p2Score=0;
var maxScore=5;
p1Button.addEventListener("click",function() {
	if(!winner){
		

		p1Score++;
		firstScore.textContent=p1Score;
		if(p1Score==maxScore){
			winner=true;
			firstScore.classList.add("winner");
		}

	}
});
p2Button.addEventListener("click",function() {
	if(!winner){
		p2Score++;
	    secondScore.textContent=p2Score;
	    if(p2Score==maxScore){
	    	winner=true;
	    	secondScore.classList.add("winner");
	    }
	}

});
resetButton.addEventListener("click",function(){
	reset();
	
});
	
input.addEventListener("change",function(){
	maxScore=Number(input.value);
	p1Score=0;
	p2Score=0;
	firstScore.classList.remove("winner");
	secondScore.classList.remove("winner");
	max.textContent=maxScore;
	winner=false;
	firstScore.textContent=0;
	secondScore.textContent=0;
})
function reset(){
	winner=0;
	p1Score=0;
	p2Score=0;
	firstScore.textContent=p1Score;
	secondScore.textContent=p2Score;
	firstScore.classList.remove("winner");
	secondScore.classList.remove("winner");

}