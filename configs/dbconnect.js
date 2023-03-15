const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://tanaka:FD1MAuwsrOn1fKWr@cluster0.upfaxvh.mongodb.net/test';
const client = new MongoClient(url);

const dbName = 'Flow';

async function connect() {
  await client.connect();
  return client.db(dbName);
}

async function agents(){
    var db =  await connect();
    return db.collection('Agents');
}

async function organisations(){
    var db =  await connect();
    return db.collection('Organisations');
}

async function properties(){
    var db =  await connect();
    return db.collection('Properties');
}


module.exports = {
    agents,
    organisations,
    properties
}