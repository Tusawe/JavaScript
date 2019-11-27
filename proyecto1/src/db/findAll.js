const client = require('./conexion');
const db = client.db('dbGeografia')

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('geografia');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    // assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
module.exports=findDocuments