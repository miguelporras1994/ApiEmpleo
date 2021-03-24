const SqlSeverLib = require('../lib/sqlserver');

class AreasService {
  constructor() {
    this.collection = 'WorkAreas';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getAreas() {
      const areas =  await this.sqlSeverLib.getAll(this.collection);
      return areas || [];
    }
  
}


module.exports = AreasService;