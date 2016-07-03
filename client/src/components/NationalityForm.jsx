var React = require('react');



var NationalityForm = React.createClass({

  // handleChange: function(e){
  //   e.preventDefault();
  //   var newIndex = e.target.value;
  //   this.setState({selectedIndex: newIndex});
  //   var selectedCountry = this.props.nations[newIndex];
  //   this.props.onSelectCountry( selectedCountry );
  // },


  render: function() {
    var nation = this.props.nations.map(function(country, index){
      return <option value={index} key={country}> {country} </option>
    });
    console.log(nation);
    return (
      <div className="NationalityForm">
        <div id="Nationality">
          <select id="Nationalities" onChange={this.handleChange}>
          {nation}
          </select>
        </div>
      </div>
      )
    }
  })

module.exports = NationalityForm;

