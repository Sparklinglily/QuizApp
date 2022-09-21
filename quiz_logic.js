


$(document).ready(function() {

  //questions Object

  var questions = [];

  questions[0] = {
    q: 'CSS stands for ..............?',
    a:'Cascading Style Sheet',
    b:'Common Style Sheet',
    c:'None of the above',
    d:'All of the above',

  correct:'a',  
  }
  questions[1] = {
    q: 'What does object-fit property do?',
    a:'For clearfix',
    b:'None of the above',
    c:'To resize images/videos without distorting',
    d:'All of the above',

  correct:'c',  
  }
  questions[2] = {
    q: 'CSS is a back-end language. True/False',
    a:'True',
    b:'False',
    c:'None of the above',
    d:'All of the above',

  correct:'b',  
  }

  var qNum = $('#qNum');
  var question = $('#question');
  var form = $('form');


  //Load questions from Js Object

  var i= 0;
  var currentQ=1;
  for(; i< 4; i++){

//Convert loop onto alpahabets
var qqq= ["a","b","c","d"];

//FETCH QUESTIONS
question.text(questions[0].q);
qNum.text(currentQ + ".")

 
    
    form.prepend(`

    <label for = "${i}">
    <input type="radio" name="o" id= "${i}" value = "${i}">


    ${ questions[0][`${qqq[i]}`]  }
    </label> 

    
    `);

  }
  }

 

);