String.prototype.count = function(c) {
  var result = 0,
    i = 0;
  for (i; i < this.length; i++) if (this[i] == c) result++;
  return result;
};
module.exports = {
  hkurl: 'http://lambda-cs.herokuapp.com',
  validateCommand: command => {
    const com = command.trim();
    //parse commands and return validated command
    if (com.count(' ') < 1) {
      //one command given
      let tested = module.exports.testDirection(com);
      if (tested) return { direction: tested };
      else return false;
    } else if (com.count(' ') < 2) {
      //add checks here for say and shout
      let tested = module.exports.testDirection(
        com.substring(com.indexOf(' '))
      );
      if (tested) return { direction: tested };
      else return false;
    } else return false; //change this if adding more commands than move
  },
  testDirection: dirStr => {
    const dir = dirStr.toLowerCase();
    if (dir === 'n' || dir === 'north') return 'n';
    else if (dir === 's' || dir === 'south') return 's';
    else if (dir === 'w' || dir === 'west') return 'w';
    else if (dir === 'e' || dir === 'east') return 'e';
    else return false;
  }
};
