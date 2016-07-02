var React = require('react');
var GuessForm = require('./GuessForm.jsx');
var CharactersBox = require('./CharactersBox.jsx');
var QuestionsForm = require('./QuestionsForm.jsx');
var NationalityForm = require('./NationalityForm.jsx');
var bastards = require('../sample_data.js');

var GameBox = React.createClass({
  getInitialState: function() {
    return {allBastards: bastards};
    },


  componentDidMount: function() {
    // console.log(this.state.allBastards);
      // this.selectRandomCharacter(); 
  },

  getNationalities: function(){
    var nationalities = []
    for (var item of this.state.allBastards){
      nationalities.push(item.Nationality)
      }
      console.log(nationalities)
      return nationalities;
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


  // <div className="CharactersBox">
  // <h1>Characters Go Here</h1>
  // </div>

  // <div className="QuestionsForm">
  // <h1> QuestionsForm Goes Here</h1>
  // </div>

  // <div className="GuessForm">
  // <h1> GuessForm Goes Here</h1>
  // </div>
  

