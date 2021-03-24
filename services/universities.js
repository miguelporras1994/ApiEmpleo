const SqlSeverLib = require('../lib/sqlserver');

class UniversitiesService {
  constructor() {
    this.collection = 'Universities';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getUniversities() {
      const Universities =  await this.sqlSeverLib.getAll(this.collection);
      return Universities || [];
    }
  
}


module.exports = UniversitiesService;