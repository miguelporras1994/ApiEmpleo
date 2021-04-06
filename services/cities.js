const SqlSeverLib = require('../lib/sqlserver');

class CitiesService {
  constructor() {
    this.collection = 'Cities';
    this.sqlSeverLib = new SqlSeverLib();
  }
    async getCities() {
      const cities =  await this.sqlSeverLib.getAll(this.collection);
      return cities || [];
    }

    async getCitie(key) {
      const cities =  await this.sqlSeverLib.getId(this.collection, key);
      return cities || [];
    }
  
  
}


module.exports = CitiesService;