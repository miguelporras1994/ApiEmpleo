const SqlSeverLib = require('../lib/sqlserver');



class ConsultasService {
  constructor() {
    this.collection = 'SELECT COUNT( DISTINCT P.EmailAddress) from [dbo].[Persons] P with (nolock) inner join [dbo].[UserWithoutRoless] UsWR with (nolock) on P.Id = UsWR.Id inner join [dbo].[Resumees] Resu with (nolock) on Resu.Id = P.Id  join [dbo].[Cities] as Cities with (nolock) on P.IdCity = Cities.Id  inner join [dbo].[Departments] as Departments with (nolock) on Departments.Id = Cities.IdDepartment inner join [dbo].[Countries] as Countries with (nolock) on Countries.Id = Departments.IdCountry';
    this.sqlSeverLib = new SqlSeverLib();
    this.where  = 'where (P.ReceiveLocalCommunications=1 or P.ReceiveNewsLetter = 1) and P.Deletedkey is null '

  }

    async getConsultas() {
        var  collection02  = ['formacion', 'Position' ,'Profesion', 'Industry' , 'Sector' , 'WorkArea' , 'Institute'];
    // foreach ( var prueba in collection02 ){
      collection02.forEach(element  => {
        this.collection = this.collection + " " + " inner join [dbo].[Experiences] as Experiences WITH (NOLOCK) on Experiences.IdResumee = P.Id"
        this.collection =  this.collection + " " + "inner join [dbo].[FormalEducations] as FormalEducations WITH (NOLOCK) on FormalEducations.IdResumee = P.Id"
        console.log(element);

        switch(element) {

        case 'formacion':
          this.where  =  this.where  + "and  FormalEducations.IdEducationLevel in (9)"
        break;
        case 'Position':
            this.where  =  this.where + "and Experiences.IdEquivalentPosition in (38189)"
        break;
        case 'Profesion':
          this.where  =  this.where + " " + "and Resu.IdProfession in (1944809967)"
        break;
        case 'Industry':
          this.where  =  this.where + " " +" and Experiences.IdIndustry in (125)"
        break
        case 'Sector':
          this.where  =  this.where + " " + "and Experiences.IdSector in (1160)"
        break;
      
        case 'WorkArea':
              this.where  =  this.where + " and Experiences.idWorkArea in (2)"
        break;
        case 'Institute':
           this.where  =  this.where + " and FormalEducations.IdInstitute in (42) "
        break;
      

        
    };
    }
    );

         var consulta   =  this.collection + " " + this.where

      const Consultas =  await this.sqlSeverLib.getAlls(consulta);
      return Consultas || [];
    }
  
}


module.exports = ConsultasService;