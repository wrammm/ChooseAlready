import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  choices = [];
  randomArray = [];
  addedFields = 0;
  showChoicesSection = false;
  hideChoices = false;
  decisionHasBeenMade = false;
  selectedDecision = "";

  submit(){
    if(this.choices.length < 2) {
      alert("You must enter at least two choices");
    } else {
      //get rid of empty choices
      let filteredArray = this.choices.filter(function (el) {
        return el != null;
      });
      this.randomArray = this.shuffle(filteredArray);
      this.hideChoices = true;
    }
  }

  refresh(){
    location.reload();
  }

  addField(){
    this.addedFields++;
  }

  choiceSelected(seqSelected){
    if(this.decisionHasBeenMade === false) {
      let choicesElems = document.querySelectorAll(".hiddenBox");
      for(let i = 0; i < this.randomArray.length; i++){
        if(i !== seqSelected){
          choicesElems[i].setAttribute('style', 'color:black !important; background-color:lightcoral !important');
        } else{
          choicesElems[i].setAttribute('style', 'color:black !important; background-color:lightgreen !important');
        }
      }
      this.selectedDecision = this.randomArray[seqSelected];
      this.decisionHasBeenMade = true;
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
