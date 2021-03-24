const SqlSeverLib = require('../lib/sqlserver');

class CountrysService {
  constructor() {
    this.collection = 'Countries';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getCountrys() {
      const countrys =  await this.sqlSeverLib.getAll(this.collection);
      return countrys || [];
    }
  
}


module.exports = CountrysService;