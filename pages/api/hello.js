// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const http = require('http');

export default (req, res) => {
  const {
    query: { id, name },
    method,
  } = req;
  console.log('api')
  // if (method === 'GET') {
  //   console.log('get')
  //   let responce = '';
  //   const req = http.request({
  //     hostname: 'http://jsonplaceholder.typicode.com',
  //     port: '80',
  //     path: '/posts',
  //     method: 'POST',
  //     headers: {}
  //   }, (res) => {
  //     res.setEncoding('utf8');
  //     res.on('data', (chunk) => {
  //       responce+=chunk
  //     })

  //     res.end();
  //   })
  // }
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
