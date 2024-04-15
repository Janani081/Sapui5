sap.ui.define([],function(){
    "use strict";
    return{
        onReturnSupplierName:function(Dwerk){
         var msg="";
         if((Dwerk=="3000") ){
            msg= Dwerk + " in Chennai";
         }else{
            msg= Dwerk + " in Cbe";
         }
       return msg;
        }

    }


}

);