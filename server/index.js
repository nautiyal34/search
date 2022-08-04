const express = require('express')
const searchMockData = require('./data/searchData.json'); 
const constants = require("./constants");
const app = express()
const port = 3001

app.get('/api/search', (req, res) => {
  
  let processedResult = searchMockData.filter((value) => {
      return  value.name.toLowerCase().includes(req.query.search.toLowerCase());
  })
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