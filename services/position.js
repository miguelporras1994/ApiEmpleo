const SqlSeverLib = require('../lib/sqlserver');

class PositionService {
  constructor() {
    this.collection = 'PositionStructures';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getPosition() {
      const Position =  await this.sqlSeverLib.getAll(this.collection);
      return Position || [];
    }
  
}


module.exports = PositionService;