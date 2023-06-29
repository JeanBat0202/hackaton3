const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    return this.database.query(
      `INSERT INTO ${this.table} (brand, model, status, storage, ram, image) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        smartphone.brand,
        smartphone.model,
        smartphone.status,
        smartphone.storage,
        smartphone.ram,
        smartphone.image,
      ]
    );
  }

  update(smartphone) {
    return this.database.query(
      `UPDATE ${this.table} SET brand = ?,
      model =?,
      status = ?,
      storage = ?,
      ram = ?,
      image= ?`,

      [
        smartphone.brand,
        smartphone.model,
        smartphone.status,
        smartphone.storage,
        smartphone.ram,
        smartphone.image,
      ]
    );
  }

  find(id) {
    return this.database.query(
      `select brand, model, status, storage, ram, image from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT id, brand, model, status, storage, ram, image FROM ${this.table}`
    );
  }
}

module.exports = SmartphoneManager;
