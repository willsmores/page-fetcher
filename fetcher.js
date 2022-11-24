const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

const url = args[0];
const localFilePath = args[1];

console.log('url:', url);
console.log('local file path:', localFilePath);

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  // Write the url data to the file
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
  });

  // Calculate number of bytes (1 per character) and print to terminal
  console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`)




});









