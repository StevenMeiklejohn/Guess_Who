var React = require('react');



var CharactersBox = React.createClass({

  switchImage: function(){
    console.log("vader Clicked");
  },

  changeImage: function(e){
    console.log("clicked");
    e.target.src ="http://www.clker.com/cliparts/5/9/5/4/12456868161725760927raemi_Cross_Out.svg.hi.png"
  },





  render: function() {
    return (
      <div className="CharactersBox">
        <h1 id="CharactersHeader">Villains</h1>

        <div id="Vader">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://www.sideshowtoy.com/photo.php?sku=1000763" 
        id="Vader" 
        width="200px" 
        length="300px" 
        />
        </div>

        <div id="Ming">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="https://pbs.twimg.com/profile_images/3576260859/8031c96317a7ffb8cefa7d3578918e20.jpeg"
        width="200px" 
        length="300px"/>
        </div>

        <div id="Skeletor">
        <img
        onClick={this.changeImage}
        alt ="" 
        src="http://www.tshirtvortex.net/wp-content/uploads/2016/04/drinkingproblems.jpg" 
        width="200px" 
        length="300px"/>
        </div>

        <div id="Hitler">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://f.tqn.com/y/history1900s/1/W/v/Q/1/Hitlerseated2.jpg" 
        width="200px" 
        height="200px"/>
        </div>

        <div id="Stalin">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://i.dailymail.co.uk/i/pix/2015/06/18/21/29C1CD9A00000578-3130307-image-m-5_1434660552551.jpg" 
        width="200px" 
        height="200px"/>
        </div>

        <div id="CharacterSeparator">
        </div>

        <div id="Trump">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="https://pixel.nymag.com/imgs/daily/following/2016/01/27/27-trump-cowboy.w190.h190.2x.jpg" 
        width="200px" 
        height="200px"/>
        </div>

        <div id="Joffrey">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://vignette2.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/8/89/Promo_(Joffrey)_Saison_4_(3).jpg/revision/latest/top-crop/width/240/height/240?cb=20160424205916&path-prefix=fr" 
        width="200px" 
        height="200px"/>
        </div>

        <div id="DrDoom">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://static.comicvine.com/uploads/original/6/60680/1152344-dr._doom.jpg" 
        width="200px" 
        height="200px"/>
        </div>

        <div id="Beiber">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://cdn4.thr.com/sites/default/files/2014/01/justin_bieber_mugshot.jpg" 
        width="200px" 
        height="200px"/>
        </div>

        <div id="MummRa">
        <img 
        onClick={this.changeImage}
        alt ="" 
        src="http://65.media.tumblr.com/tumblr_m6vp4wwwHi1rawb5do1_500.jpg" 
        width="200px" 
        height="200px"/>
        </div>

      </div>
    );
  }
});

    module.exports = CharactersBox;


    


