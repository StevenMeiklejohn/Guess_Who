var React = require('react');



var QuestionsForm = React.createClass({





render: function() {
  return (
    <div className="QuestionsForm">
      <div id="VillainForm1">
        <select id="DoesVillainHave">
        <option>Moustache</option>
        <option>Mask</option>
        <option>Hair</option>
        </select>
        </div>
      </div>
  );
}
});

    module.exports = QuestionsForm;