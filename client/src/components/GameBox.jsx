var React = require('react');
var GuessForm = require('./GuessForm.jsx');
var CharactersBox = require('./CharactersBox.jsx');
var QuestionsForm = require('./QuestionsForm.jsx');
var NationalityForm = require('./NationalityForm.jsx');
var bastards = require('../sample_data.js');


var GameBox = React.createClass({
  getInitialState: function() {
    return { allBastards: bastards, gameVillain: null }
  },
  removeImage: function(image){

  },
  componentDidMount: function() {
  this.setRandomCharacter();
  },
  selectRandomCharacter: function(){
    var villains = this.getVillains();
    console.log(villains);
    var rand = villains[Math.floor(Math.random() * villains.length)];
    console.log(rand);
    return rand;
  },
  setRandomCharacter: function(){
    var gVillain = this.selectRandomCharacter();
    console.log(gVillain);
    this.setState( { gameVillain: gVillain })
  },
  getNationalities: function(){
    var nationalities = []
    for (var item of this.state.allBastards){
      nationalities.push(item.Nationality)
      }
      console.log(nationalities)
      return nationalities;
  },
  setSelectedNationality: function(selectedCountry){
    console.log(selectedCountry);
    console.log(this.state.gameVillain);

  },
  getVillains: function(){
    var villains = []
    for (var item of this.state.allBastards){
      villains.push(item.Name)
    }
    console.log(villains)
    return villains;
  },



  





  render: function() {
    return (
      <div className="GameBox">
        <h1 id="title">Guess The Villain</h1>
        <div className="CharactersBox">
        <CharactersBox data={this.state.allBastards}/>
        </div>

        <div className="QuestionsForm">
        <h1 id="DoesVillainHave">Does The Villain Have?</h1>
        <QuestionsForm 
        data={this.state.allBastards}
        />
        </div>

        <div className="NationalityForm">
        <h1 id="Nationality">Villain Nationality</h1>
        <NationalityForm 
        data={this.state.allBastards}
        nations={this.getNationalities()}
        onSelectCountry = {this.setSelectedNationality}
        />
        </div>


        <div className="GuessForm">
        <h1 id="VillainGuess">Guess The Villain</h1>
        <GuessForm 
        data={this.state.allBastards}
        villains={this.getVillains()}
        />
        </div>

      </div>
    );
  }
});

  module.exports = GameBox;

  

