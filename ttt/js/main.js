const View = require('./ttt-view');// require appropriate file
const Game = require('./game');// require appropriate file
// game = new Game();// Your code here
// view = new View();

$(document).ready(function() {
  // console.log('wtf');
  const figure = $(".ttt");
  const game = new Game();
  const view = new View(game, figure);
});
