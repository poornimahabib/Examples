var sanitizer=require('sanitize-html')
var fs=require('fs')


fs.readFile('./lipsi.html','utf8',function(err,data){
    if(err) throw err;
    var clean = sanitizer(data, {
        allowedTags: [ 'text', 'row', 'column', 'image','table'],
        allowedAttributes: {
          'image': [ 'src' ],
          'table':['class'],
          'text':['class']
        },
      });
    console.log(clean)

})
