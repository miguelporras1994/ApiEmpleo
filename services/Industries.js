const SqlSeverLib = require('../lib/sqlserver');

class IndustriesService {
  constructor() {
    this.collection = 'Industries';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getIndustries() {
      const Industries =  await this.sqlSeverLib.getAll(this.collection);
      return Industries || [];
    }
  
}


module.exports = IndustriesService;