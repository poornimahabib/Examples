module.exports.newText;
module.exports={
    paginate:function(){
        var fs=require('fs');

        const box_width=300;
        const line_height=18;

        var lineCounter=0,charCounter=0;
        var lineInBox=[];
        var line=[];

        var stringAsciiVal,chunk,val,i;
        var sum=0;
        var box_height;

        var readable=fs.createReadStream('./paragraph.txt','utf8',{fd:null});
            readable.on('readable',function(){
            while(null!==(chunk=readable.read(1))){
                line.push(chunk);
            }
        }); 

        fs.readFile("./fontMatrix.json",'utf8',function(err,data){
            if(err) throw err;
            for(i=0;i<line.length;i++){
                stringAsciiVal=line[i].charCodeAt(0);
                stringAsciiVal=stringAsciiVal.toString();
                val=JSON.parse(data);
                sum=sum+(val[stringAsciiVal]-0);
                //console.log("sum is",sum); 
                charCounter++;
                lineInBox.push(line[i]);
        
                if(sum===(box_width-1)||sum===(box_width-2)||sum===(box_width-3)||sum===(box_width-4)||sum===(box_width)||line===null){
                    lineCounter++;
                    sum=0;
                    i=charCounter;
                    lineInBox = lineInBox.toString();
                    lineInBox = lineInBox.replace (/,/g, "");
                    lineInBox = lineInBox.replace(/\n/g, ""); 
                    console.log(lineInBox);
                    newText=[]
                    newText.push(lineInBox)
                    lineInBox=[]; 
                    //console.log("Number of characters in line are "+charCounter);           
                }
            }
            lineCounter++;
            lineInBox = lineInBox.toString();
            lineInBox = lineInBox.replace (/,/g, "");
            lineInBox = lineInBox.replace (/\n/g , "");
            newText.push(lineInBox)
            console.log(lineInBox);
            box_height=lineCounter*line_height;
            //console.log("Box Height is "+box_height+"px");
            //console.log("Number of line required to add text to Box is "+lineCounter);
            //console.log("Number of charcter in text are "+charCounter);
            
            
        });
       // return newText;
    }
    
}