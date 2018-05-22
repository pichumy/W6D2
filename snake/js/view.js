const Board = require('./snake.js');

function View($el) {
  this.$el = $el;
  this.board = new Board();
  this.binding();
  this.render();
  // setInterval( this.step.bind(this), 200);
}

View.prototype.binding = function() {
  $(window).on('keydown', event => {
    let move = null;
    switch ( event.key) {
      case('ArrowUp'):
        move = 'N';
        break;
      case('ArrowDown'):
        move = 'S';
        break;
      case('ArrowLeft'):
        move = 'W';
        break;
      case('ArrowRight'):
        move = 'E';
        break;
      default:
        break;
    }
    if (move) this.board.snake.turn(move);
    console.log(this.board.snake);
  });
};


View.prototype.step = function() {
  this.snake.move();
  // this.render();
};


View.prototype.render = function() {
  const $snakeGame = $('.snake-game');
  for (let i = 0; i < 10; i++ ) {
    let $row = $('<ul class="row"></ul>');
    for (let j = 0; j < 10; j++) {
      let $cell = $('<li class="cell"></li>');
      $cell.data("pos", [i,j]);
      $row.append($cell);
    }
    $snakeGame.append($row);
  }
};
module.exports = View;
