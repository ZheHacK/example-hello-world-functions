const fetch = require('node-fetch');

const getVideoToken = async () => {
  const tv = prompt('Masukkan ID TV: ');
  const tokke = `https://www.vidio.com/live/${tv}/tokens`;

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'charset': 'utf-8',
  };

  const response = await fetch(tokke, {
    method: 'POST',
    headers: headers,
  });

  const result = await response.json();
  const token = result.token;

  console.log(token);
};

getVideoToken();



// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.


//exports.handler = async event => {
//    const subject = event.queryStringParameters.name || 'World ZheHacK'
//    return {
//        statusCode: 200,
//        body: `Hello ${subject}!`,
//    }
//}
