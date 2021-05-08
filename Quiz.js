class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
  question.hide();
    //write code to change the background color here
  //canvas.shapeColor=("blue")
    //write code to show a heading for showing the result of Quiz
//var Heading1=createTitle('h2')
//Heading1.html("RESULTS")
//Heading1.position(350,180)
    //call getContestantInfo( ) here\
Contestant.getPlayerInfo();
 //write condition to check if contestantInfor is not undefined  
if(allContestants !== undefined){
  fill("blue")
  textSize(20)
  background("yellow")
 //write code to add a note here
 var  display_Answers=300;
  text("NOTE: Contestants who get answer CORRECT wil be highlighted in green.",130,230)
for(var plr in allContestants){


var correctAns="2";
  //write code to highlight contest who answered correctly
  if (correctAns === allContestants[plr].answer)
    fill("green")
  else
   fill("red")
  
  
  display_Answers+=30;
  text(15)
  text(allContestants[plr].name + ": " + allContestants[plr].answer, 200,display_Answers+10)

}

}



   

    
  
    
  }

}
