const SqlSeverLib = require('../lib/sqlserver');

class CardsService {
  constructor() {
    this.collection = 'IdentityCardTypes';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getCards() {
      const cards =  await this.sqlSeverLib.getAll(this.collection);
      return cards || [];
    }
  
}


module.exports = CardsService;