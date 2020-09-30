const http = require('http');

export default (req, res) => {
 if (req.method === 'POST') {
  const postData = JSON.stringify(req.body);

  const options = {
   hostname: 'jsonplaceholder.typicode.com',
   port: 80,
   path: '/posts',
   method: 'POST',
   headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'x-token-access': 'random'
   }
  };

  const request = http.request(options);

  request.write(postData);
  request.end();

   res.status(201).json({ result: true });
 } else {
  res.status(404).json({ message: 'Not found' });
 }
}