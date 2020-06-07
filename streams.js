const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	// solution 1
	// fs.readFile('test-file.txt', (err, data) => {
	// 	if (err) console.log(err);
	// 	res.end(data);
	// });
	// solution 2: streamd
	// const readable = fs.createReadStream('test-files.txt');
	// readable.on('data', chunk => {
	// 	res.write(chunk);
	// });
	// readable.on('end', () => res.end());
	// readable.on('error', err => {
	// 	console.log(err);
	// 	// res.writeHead(500); or
	// 	res.statusCode = 500;
	// 	res.end('File not found!');
	// });
	// solution 3: fixes problem of back-pressure
	const readable = fs.createReadStream('test-file.txt');
	readable.pipe(res); // readableSource.pipe(writeableDestination)
});

server.listen(8000, '127.0.0.1', () => console.log('Waiting for requests...'));
