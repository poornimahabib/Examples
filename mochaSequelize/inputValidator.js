module.exports={
    isData:function(info){
        return new Promise(function(resolve,reject){
            console.log("info",info)
            if(info===''){
                reject("No information",info);
            }else{
                resolve(info)
            }
        })
    },
    isLearningFormat:function(info){
        return new Promise(function(resolve,reject){
            var regexp=/^(self|Online|self-online|Self|Online|Self-Online)$/
            if(regexp.test(info)){
                if(info==='self'||info==='Self'){
                    val=1;    
                    resolve(val)
                }else if(info==='Online'||info==='online'){
                    val=2;    
                    resolve(val)
                }else if(info==='self-online'||info==='Self-Online'){
                    val=3;    
                    resolve(val)
                }  
            }else{
                reject(info)
            }
        })
    },
    isCourseStatus:function(info){
        var val;
        return new Promise(function(resolve,reject){
            var regexp=/^(Draft|Published|Retired|draft|published|retired)$/
            if(regexp.test(info)){
                if(info==='Draft'||info==='draft'){
                    val=1;    
                    resolve(val)
                }else if(info==='Published'||info==='published'){
                    val=2;    
                    resolve(val)
                }else if(info==='Retired'||info==='retired'){
                    val=3;    
                    resolve(val)
                }    
            }else{
                reject(info)
            }
        })
    },
    isNarration:function(info){
        return new Promise(function(resolve,reject){
            var regexp = /^[0-9a-zA-z&*(),.?":'' ]+$/
            if(regexp.test(info)){
                resolve(info)
            }else{
                reject(info)
            }
        })
    },
    isString:function(info){
        return new Promise(function(resolve,reject){
            var regexp = /^[0-9a-zA-z@#$%^&*(),.?":{}|<>'' ]+$/
            if(regexp.test(info)){
                resolve(info)
            }else{
                reject(info)
            }
        })
    },
    isPath:function(info){
        return new Promise(function(resolve,reject){
            var regexp=/^\/([A-Za-z0-9-_+]+\/)*([A-z0-9]+\.(txt|pdf|json|mp3|mp4|doc))$/
            if(regexp.test(info)){
                resolve(info)
            }else{
                reject(info)
            }
        })
    }, 
    isEmail:function(info){
        return new Promise(function(resolve,reject){
            var regexp=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            if(regexp.test(info)){
                resolve(info)
            }else{
                reject(info)
            }
        })
    },
    isTitle:function(info){
        return new Promise(function(resolve,reject){
            var regexp=/^[a-zA-Z0-9_()IVX. ]+$/
            if(regexp.test(info)){
                resolve(info)
            }else{
                reject(info)
            }
        })
    }
}