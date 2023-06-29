const AbstractManager = require("./AbstractManager");

class EmployeManager extends AbstractManager {
  constructor() {
    super({ table: "patient" });
  }

  insert(employe) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, mail, password) VALUES (?, ?, ?, ?)`,
      [employe.firstname, employe.lastname, employe.mail, employe.password]
    );
  }

  update(employe) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, mail = ?, password = ? WHERE id = ?`,
      [
        employe.firstname,
        employe.lastname,
        employe.mail,
        employe.password,
        employe.id,
      ]
    );
  }
}

module.exports = EmployeManager;
