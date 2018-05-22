class View {
  constructor(game, $el) {
    this.el = $el;
    this.game = game;
    const board = this.setupBoard();
    $el.append(board);
    this.bindEvents();
  }

  bindEvents() {
    const $squares = $('.square');
    $squares.on("click", event => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      this.makeMove($currentTarget);
      const winner = this.game.winner();
      if (winner) alert(`${winner} is the winner!`);
    });
  }

  makeMove($square) {
    const currentMark = this.game.currentPlayer;
    try{
      this.game.playMove($square.data("pos"));
    }catch(err){
      alert(err.msg);
      return;
    }
    const p = $("<p> </p>");
    p.text(currentMark);
    $square.append(p);
    $square.css("background-color", "white");

  }

  setupBoard() {
    const grid = $('<ul class="grid"> </ul>');
    grid.css({
      "display": "flex",
      "flex-wrap": "wrap",
      "width": "300px",
    });

    for(let i = 0; i < 9; i++){
      let $li = $('<li class="square"> </li>');
      $li.data("pos", [Math.floor(i / 3),i % 3]);
      grid.append($li);
    }
    // const body = $('body');
    return grid;
  }
}

module.exports = View;
