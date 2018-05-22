function View(game, $el) {
  this.game = game;
  this.$el = $el;
  this.fromPile = null;
  const towers = this.setupTowers();
  $el.append(towers);
  this.clickTower();
}


View.prototype.setupTowers = function() {
  const $towers = $("<section class='towers'> </section>");
  for (let i = 0; i < 3; i++ ) {
    let $ul = $("<ul class='tower'></ul>");
    $ul.data('index', i);
    let array = this.game.towers[i].slice(0);
    array.reverse().forEach( (size) => {
      let $li = $("<li class='disc animated jello'></li>");
      $li.data('size', size);
      $li.css("width", `${size*35}px`);
      $ul.append($li);
    });
    $towers.append($ul);
  }
  return $towers;
};

View.prototype.render = function(){
  // this.destroyTowers();
  // this.setupTowers();
  this.$el.empty();
  let towers = this.setupTowers();
  this.$el.append(towers);
  this.clickTower();
};

View.prototype.clickTower = function(){
  const $towers = $("ul");
    $towers.on('click', (event) => {
      let currentTarget = event.currentTarget;
      let $currentTarget = $(currentTarget);
      var from_pile = $currentTarget.data("index");
      if (this.fromPile !== null) {
          if (!this.game.move(this.fromPile, from_pile)) alert('what a shitty move');

        this.fromPile = null;
        this.render();
      } else {
        this.fromPile = from_pile;
      }
    });
  // if(from_pile){
  //   $towers.each(tower => {
  //     tower.on('click', (event2) => {
  //       currentTarget = event.currentTarget;
  //       $currentTarget = $(currentTarget);
  //       var to_pile = $currentTarget.data("index");
  //       try{
  //         this.game.move(from_pile, to_pile);
  //       }catch(err){
  //         alert(err.msg);
  //       }
  //     });
  //   });
  // }
};

module.exports = View;
