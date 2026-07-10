let positive = 0;
let neutral = 0;
let negative = 0;

function analyzeSentiment() {

const text = document
.getElementById("comment")
.value
.toLowerCase()
.trim();

const result = document.getElementById("result");

if(text===""){
result.innerHTML="Please enter a comment.";
result.style.color="red";
return;
}

const positiveWords=[
"good",
"great",
"excellent",
"nice",
"love",
"happy",
"best",
"awesome",
"amazing",
"helpful",
"fast",
"success",
"wonderful",
"perfect",
"easy"
];

const negativeWords=[
"bad",
"worst",
"poor",
"hate",
"terrible",
"problem",
"issue",
"slow",
"bug",
"error",
"angry",
"disappointed",
"useless",
"fail",
"difficult"
];

let score=0;

positiveWords.forEach(word=>{
if(text.includes(word)){
score++;
}
});

negativeWords.forEach(word=>{
if(text.includes(word)){
score--;
}
});

if(score>0){

positive++;

result.innerHTML="😊 Positive Sentiment";

result.style.color="green";

result.style.background="#d4edda";

}

else if(score<0){

negative++;

result.innerHTML="😠 Negative Sentiment";

result.style.color="red";

result.style.background="#f8d7da";

}

else{

neutral++;

result.innerHTML="😐 Neutral Sentiment";

result.style.color="#1565c0";

result.style.background="#fff3cd";

}

document.getElementById("positiveCount").innerHTML=positive;

document.getElementById("neutralCount").innerHTML=neutral;

document.getElementById("negativeCount").innerHTML=negative;

result.animate(

[
{transform:"scale(.8)",opacity:0},

{transform:"scale(1.05)",opacity:1},

{transform:"scale(1)",opacity:1}

],

{

duration:500

}

);

}

window.onload=function(){

setTimeout(function(){

alert(
"👋 Welcome!\n\nPaste any comment in the text box and click 'Analyze' to detect whether the sentiment is Positive, Neutral, or Negative."
);

},800);

};