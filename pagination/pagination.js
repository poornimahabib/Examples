var fs=require('fs');
var http=require('http')
var page=require('./app.js')

var fs=require('fs');

        const box_width=300;
        const line_height=18;

        var lineCounter=0,charCounter=0;
        var lineInBox=[],newText=[];
        var line=[];

        var stringAsciiVal,chunk,val,i;
        var sum=0;
        var box_height=300,box_height_box=0;


var server=http.createServer(function(request,response){
    if(request.url==='/')
        console.log('home page')
    else if(request.url==='/page'){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><head><title>Pagination</title></head><body><h3>Welcome to Pagination</h3></body></html>')
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
                    newText.push(lineInBox)
                    lineInBox = lineInBox.toString();
                    lineInBox = lineInBox.replace (/,/g, "");
                    lineInBox = lineInBox.replace(/\n/g, ""); 
                    box_height_box=lineCounter*line_height;
                    console.log("boxxxxxxx",box_height_box)
                    if((box_height_box>=(box_height-50))&&(box_height_box<=box_height)){
                        newText = newText.toString();
                        newText = newText.replace (/,/g, "");
                        newText = newText.replace(/\n/g, ""); 
                        response.write("<h1>New BOX</h1>")  
                        response.write('<div id="paratext" class="paratext" width="300" height="500">'+newText+'</div>')
                        box_height_box=0
                        lineCounter=0
                        newText=[]
                    }
                    //response.write('<div id="paratext" class="paratext" width="300" height="500">'+lineInBox+'</div>')
                    console.log(lineInBox);
                    lineInBox=[]; 
                }
            }
            lineCounter++;
            lineInBox = lineInBox.toString();
            lineInBox = lineInBox.replace (/,/g, "");
            lineInBox = lineInBox.replace (/\n/g , "");
            newText.push(lineInBox)
            newText = newText.toString();
            newText = newText.replace (/,/g, "");
            newText = newText.replace(/\n/g, ""); 
            console.log(lineInBox);
            box_height=lineCounter*line_height;
            response.write('<div id="paratext" class="paratext" width="300" height="500">'+newText+'</div>')

            
            
        });
       // return newText;
    }
})
server.listen(8001)
console.log("listening in 8000")