function Snake() {
  this.direction = 'N';
  this.segments = [];
}

Snake.prototype.move = function() {
  let vector;
  switch (this.direction) {
    case ('N'):
      vector = [0,1];
      break;
    case ('W'):
      vector = [-1,0];
      break;
    case ('E'):
      vector = [1,0];
      break;
    case ('S'):
      vector = [0, -1];
      break;
  }
  // we are going to shift, pop
  // this means the tail is near the beginning
  // and the head is near the end
  // for each tick, the tail moves one forward
  this.segments.map(e,idx,arr => {
    if (idx===arr.length) {
      // do nothing
    }else{
      return arr[idx+1];
    }
  });
  let head_pos = this.segments.pop();
  this.segments.shift([head_pos[0] + vector[0], + head_pos[1] + vector[1]]);
};


Snake.prototype.turn = function(direction) {
  this.direction = direction;
};

function Coord() {

}

function Board() {
  this.snake = new Snake();
}

module.exports = Snake;
module.exports = Board;
