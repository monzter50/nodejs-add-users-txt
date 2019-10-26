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
    constructor(name,lastname,imageUrl){
        this.name = name ;
        this.lastname =  lastname;
        this.imageUrl = imageUrl;
    }
    save(){
      getUsersFromFile(users => {
        users.push(this);
        fs.writeFile(p, JSON.stringify(users), err => {
          console.log(err);
        });
      });
    }
    static fetchAll(cb) {
        getUsersFromFile(cb);
    }
}