console.log(require('sqlite3'))

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('/Users/lucas/Documents/freshDistribApp/rpi.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected.');
  });

db.serialize(() => {
    db.each(`SELECT * FROM product`, (err, row) => {
        if (err) console.error(err.message);
        create_card(row);
    });
});

db.close((err) => {
    if (err) console.error(err.message);
    console.log('Close the database connection.');
});


function create_card(row) {
    var div_coll = document.createElement("div");
    div_coll.className = 'col';
    var div_card = document.createElement("div");
    div_card.className = 'card h-100';
    var img = document.createElement("img");
    img.src = 'https://mdbootstrap.com/img/new/standard/city/041.jpg';
    img.class = 'card-img-top';
    img.alt = '...';
    var card_body = document.createElement("div");
    card_body.className = 'card-body';
    var card_title = document.createElement("h5");
    card_body.class = 'card-title';
    card_title.innerHTML = row.LIBELLE;
    var card_text = document.createElement("p");
    card_text.class = 'card-text';
    card_text.innerHTML = row.POIDS + ' kg disponible pour ' + row.prix + '€/kg' ;
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    div_card.appendChild(img);
    div_card.appendChild(card_body);
    div_coll.appendChild(div_card);
    document.getElementById('carts').appendChild(div_coll);
}