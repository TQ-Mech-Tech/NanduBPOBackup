export class ViewCustomerOrderService{

  custUpdateId:string;

   getCustUpdateId(){
     return this.custUpdateId;
   }

   putCustUpdateId(id:string){
     this.custUpdateId = id;

   }
 }
