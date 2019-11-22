const client = require('./conexion');
const db = client.db('dbGeografia')
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('geografia');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  findDocuments(db, docs)