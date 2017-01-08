import express from 'express';

const app = express();

app.get('/', (req, res) =>{
  res.status(200);
})

class Person{
  constructor(name, friends){
    this.name = name;
    this.friends = friends;
  }
  friendsList(){
    var str = `Mis amigos son: ${ this.friends.join(', ') }`;
    return str;
  }
}

app.listen(3000);
