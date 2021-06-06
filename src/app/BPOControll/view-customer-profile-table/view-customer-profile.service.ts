export class CustomerViewProfileService{

  custUpdateId:string;

   getCustUpdateId(){
     return this.custUpdateId;
   }

   putCustUpdateId(id:string){
     this.custUpdateId = id;

   }
 }
