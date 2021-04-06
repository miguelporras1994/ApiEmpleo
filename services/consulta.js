const SqlSeverLib = require('../lib/sqlserver');



class ConsultasService {
  constructor() {
    this.collection = 'SELECT COUNT( DISTINCT P.EmailAddress) from [dbo].[Persons] P with (nolock) inner join [dbo].[userWithoutRoless] UsWR with (nolock) on P.Id = UsWR.Id inner join [dbo].[Resumees] Resu with (nolock) on Resu.Id = P.Id  join [dbo].[Cities] as Cities with (nolock) on P.IdCity = Cities.Id  inner join [dbo].[Departments] as Departments with (nolock) on Departments.Id = Cities.IdDepartment inner join [dbo].[Countries] as Countries with (nolock) on Countries.Id = Departments.IdCountry';
    this.sqlSeverLib = new SqlSeverLib();
    this.where  = 'where (P.ReceiveLocalCommunications=1 or P.ReceiveNewsLetter = 1) and P.Deletedkey is null '
    this.collection = this.collection + " " + " inner join [dbo].[Experiences] as Experiences WITH (NOLOCK) on Experiences.IdResumee = P.Id"
    this.collection =  this.collection + " " + "inner join [dbo].[FormalEducations] as FormalEducations WITH (NOLOCK) on FormalEducations.IdResumee = P.Id"

  }

    async getConsultas(body) {

      console.log(body);

    
      
      for (const property in body) {
        console.log(`${property}: ${body[property]}`);
        switch(property) {

        case 'formacion':
          this.where  =  this.where  +  ` and  FormalEducations.IdEducationLevel in (${body[property]})`;
        break;

        case 'position':
            this.where  =  this.where + ` and Experiences.IdEquivalentPosition in (${body[property]})`
        break;

        case 'professions':
          this.where  =  this.where + ` and Resu.IdProfession in (${body[property]})`
        break;

        case 'industry':
          this.where  =  this.where + ` and Experiences.IdIndustry in (${body[property]})`
        break;

        case 'sector':
          this.where  =  this.where + ` and Experiences.IdSector in (${body[property]})`
        break;

        case 'workArea':
          this.where  =  this.where + ` and Experiences.idWorkArea  in (${body[property]})` 
        break;

        case 'university':
          this.where  =  this.where + ` and FormalEducations.IdInstitute in (${body[property]})` 
        break;  

        case 'countries':
          this.where  =  this.where + ` and Countries.Id in (${body[property]})` 
        break;   

        case 'cities':
          this.where  =  this.where + ` and P.IdCity in (${body[property]})` 
        break;   

        case 'salary':
          this.where  =  this.where + ` and Resu.IdSalaryInfo in (${body[property]})` 
        break; 

        case 'gender':
          this.where  =  this.where + ` and  P.Gender = '${body[property]}'` 
        break; 

        case 'practicante':
        
          if(body[property] == false){
          this.where  =  this.where + ` and Resu.ResumeeType = 'WithStudiesAndExperience'` 
          }else {  
            this.where  =  this.where + ` and Resu.ResumeeType = 'WithStudiesAndWithoutExperience'` 
            
          }
          break; 

        case 'language':
          this.where  =  this.where + ` and LanguageKnowledges.IdLanguage = ${body[property]}` 
        break; 

        case 'experienceYears':  
          this.where  =  this.where + ` and (Resu.ExperienceYears between ${body[property][0]}  and  ${body[property][1]})` 
        break; 

        case 'birthDate':
          this.where  =  this.where + ` and (YEAR(UsWR.BirthDate) between ${body[property][0]} and ${body[property][1]})`  
        break; 

        case 'update':
          this.where  =  this.where + `and (Resu.LastUpdate between ${body[property][0]}  AND ${body[property][1]})` 
        break; 

        case 'PeronProduct':
          this.where  =  this.where + ` and (P.ReceiveLocalCommunications=1 or P.ReceiveNewsLetter = 1) and ( P.ReceiveAffiliatesEmail = 1}`  
        break; 
        case 'Complete':
          this.where  =  this.where + `  and (Resu.ResumeeState='Complete' or Resu.ResumeeState='OutDated' or Resu.ResumeeState='PendingOptionalForms') ` 
        break; 

        case 'active':
          this.where  =  this.where + ` and UsWR.ActivationState = 'Active' ` 
        break; 





       




     
    };
    }
    
      var consulta   =  this.collection + " " + this.where

      const Consultas =  await this.sqlSeverLib.getAlls(consulta);
      var Response = {
         result: Consultas,
         query :  consulta 
      };
      // consulta = " ";
      // this.collection = " ";
       this.where = " "
       
      return Response || [];
    }
  
}


module.exports = ConsultasService;