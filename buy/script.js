const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('/Users/lucas/Documents/freshDistribApp/rpi.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected.');
  });

db.serialize(() => {
    db.each(`SELECT * FROM product`, (err, row) => {
        if (err) console.error(err.message);
        console.log(row);
    });
});

db.close((err) => {
    if (err) console.error(err.message);
    console.log('Close the database connection.');
});