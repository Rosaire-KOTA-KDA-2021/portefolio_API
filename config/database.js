let mysql = require("mysql");

const MYSQL_ADDON_HOST = "b2jmllrpsninoi3cdodt-mysql.services.clever-cloud.com";
const MYSQL_ADDON_DB = "b2jmllrpsninoi3cdodt";
const MYSQL_ADDON_USER = "uisafgk0fzbgeyhu";
const MYSQL_ADDON_PASSWORD = "iMyug0IoFZzKVmLEQgdq";

let connection = mysql.createConnection({
  host: MYSQL_ADDON_HOST,
  user: MYSQL_ADDON_USER,
  password: MYSQL_ADDON_PASSWORD,
  database: MYSQL_ADDON_DB,
});

module.exports = {
  db: connection,
};
