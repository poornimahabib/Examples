var validator=require('validator')

var fieldValidate=function(data){
    if((validator.isNumeric(data.productNum.toString()))&&(validator.isNumeric(data.userId.toString()))&&(validator.isNumeric(data.status.toString()))){
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
