const SqlSeverLib = require('../lib/sqlserver');

class SalariesService {
  constructor() {
    this.collection = 'SalariesInfo';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getSalaries() {
      const Salaries =  await this.sqlSeverLib.getAll(this.collection);
      return Salaries || [];
    }
  
}


module.exports = SalariesService;