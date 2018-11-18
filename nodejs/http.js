var http=require('http');
var express=require('express');
var app=express();
http.get('http://php.com', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

//   let error;
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n' +
//                       `Status Code: ${statusCode}`);
//   } else if (!/^application\/html/.test(contentType)) {
//     error = new Error('Invalid content-type.\n' +
//                       `Expected application/html but received ${contentType}`);
//   }
//   if (error) {
//     console.error(error.message);
//     // consume response data to free up memory
//     res.resume();
//     return;
//   }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
    //   const parsedData = JSON.parse(rawData);
    //   console.log(parsedData);
      console.log(rawData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
app.get('/',function(req,res){
  res.send('hello word!')
})
app.listen('3000',function(){
  console.log('server running ....')
})
