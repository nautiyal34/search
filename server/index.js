const express = require('express')
const searchMockData = require('./data/searchData.json'); 
const constants = require("./constants");
const app = express()
const port = 3000

let successResponse = {
  "success": true,
  "data": {}
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/search/:key', (req, res) => {
  
  let processedResult = searchMockData.filter(
      response => response.name.includes(req.params.key)
  );
  if (Array.isArray(processedResult) && processedResult.length) {
    res.statusCode = constants.STATUS_OK;
  }else{
    res.statusCode = constants.STATUS_NO_CONTENT;
  }
  
  res.send({
    "success": true,
    "data": processedResult
  });
  
});


app.listen(port, () => {
  console.log(`search service is up at http://localhost:${port}`)
})