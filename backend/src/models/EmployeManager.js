const AbstractManager = require("./AbstractManager");

class EmployeManager extends AbstractManager {
  constructor() {
    super({ table: "employe" });
  }

  insert(employe) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedPassword, role) VALUES (?, ?, ?, ?, ?)`,
      [
        employe.firstname,
        employe.lastname,
        employe.email,
        employe.role,
        employe.hashedPassword,
      ]
    );
  }

  update(employe) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, hashedPassword = ?, role = ? WHERE id = ?`,
      [
        employe.firstname,
        employe.lastname,
        employe.email,
        employe.hashedPassword,
        employe.role,
        employe.id,
      ]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT firstname, lastname, email, role FROM ${this.table} `
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = EmployeManager;
