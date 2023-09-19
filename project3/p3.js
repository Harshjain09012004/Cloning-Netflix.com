const questions = document.getElementsByClassName("question");

var i ;

for(i=0;i<questions.length;i++)
{
    const icon = questions[i].querySelector("i");

    const answer = questions[i].querySelector(".answer");

    questions[i].addEventListener('click',function(){

        icon.classList.toggle('fa-xmark');

        answer.classList.toggle('unactive');
    })
}