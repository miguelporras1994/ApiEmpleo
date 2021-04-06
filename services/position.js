const SqlSeverLib = require('../lib/sqlserver');

class PositionService {
  constructor() {
    this.collection = 'PositionStructures';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getPositions() {
      const Position =  await this.sqlSeverLib.getAll(this.collection);
      return Position || [];
    }


    async getPosition(key) {
      
      const   Position =  await this.sqlSeverLib.getId(this.collection, key , 'IdWorkArea');
      return  Position || [];
    }
  
}


module.exports = PositionService;