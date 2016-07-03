var React = require('react');



var QuestionsForm = React.createClass({

handleQuestion: function(e){
  e.preventDefault();
  console.log(e.target.value);
  var forDeslection = []
  var selection = e.target.value

  for (var item of this.props.data){
    if(selection ==="0"){
      if(item.Moustache === "No"){
      forDeslection.push(item.Name)
      }
    } 
      if(selection ==="1"){
        if(item.Mask === "No"){
        forDeslection.push(item.Name)
        }
      }
      if(selection ==="2"){
        if(item.Hair === "No"){
        forDeslection.push(item.Name)
        }
      }
    }
   console.log(forDeslection)
   return forDeslection; 
  },




render: function() {
  var array = ["Moustache", "Mask", "Hair"]
  var options = array.map(function(characteristic, index){
    return <option value={index} key={index}> {characteristic} </option>
  })
  return (
    <div className="QuestionsForm">

      <div id="VillainForm1">
        <select id="DoesVillainHave" 
        onChange={this.handleQuestion}>
        {options}
        </select>
      </div>

    </div>
  );
}
});

    module.exports = QuestionsForm;