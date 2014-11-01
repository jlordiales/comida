var db_url = process.env.MONGOHQ_URL

var config = {
  "url": db_url,
  "database": "comida",
  "name": "db",
  "connector": "loopback-connector-mongodb"
}

module.exports = {
  db: config
};
