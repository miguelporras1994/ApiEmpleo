const SqlSeverLib = require('../lib/sqlserver');

class EducationLevelsService {
  constructor() {
    this.collection = 'EducationLevels';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getEducationLevels() {
      const EducationLevels =  await this.sqlSeverLib.getAll(this.collection);
      return EducationLevels || [];
    }
  
}


module.exports = EducationLevelsService;