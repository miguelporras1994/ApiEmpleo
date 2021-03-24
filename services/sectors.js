const SqlSeverLib = require('../lib/sqlserver');

class SectorsService {
  constructor() {
    this.collection = 'Sectors';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getSectors() {
      const sectors =  await this.sqlSeverLib.getAll(this.collection);
      return sectors || [];
    }
  
}


module.exports = SectorsService;