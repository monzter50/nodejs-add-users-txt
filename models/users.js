const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'users.json'
);

const getUsersFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Users {
    constructor(name,lastanme){
        this.name = name ;
        this.lastanme =  lastanme;
    }
    static fetchAll(cb) {
        getUsersFromFile(cb);
    }
}