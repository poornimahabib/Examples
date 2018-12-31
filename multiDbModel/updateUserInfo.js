var validator=require('validator')

var fieldValidate=function(data){
    if((validator.isEmail(data.emailId))&&(validator.isMobilePhone(data.phoneNum.toString(),'en-IN'))){
        console.log("information is correct");
    }else{
        console.log("Invalid Information")
    }
}

module.exports={
    verify:function(data){     
        fieldValidate(data)    
        
    }
}
