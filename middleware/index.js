const fs = require('fs');
function logReqRes(filename){
    return (req, res, next)=>{
       fs.appendFile('myfile.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('Data appended to file.');
});
};
};
module.exports ={
    logReqRes,

};