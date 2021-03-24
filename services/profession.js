const SqlSeverLib = require('../lib/sqlserver');

class ProfessionService {
  constructor() {
    this.collection = 'Professions';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getprofessions() {
      const professions =  await this.sqlSeverLib.getAll(this.collection);
      return professions || [];
    }
  
}


module.exports = ProfessionService;