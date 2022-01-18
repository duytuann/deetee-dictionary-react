import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wn_pro_mysql",
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database is connected!");
});
