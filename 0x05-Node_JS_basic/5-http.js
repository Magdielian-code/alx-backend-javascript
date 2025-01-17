
const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};
      let count = 0;
      for (const i of lines.slice(1)) {
        if (i !== '') {
          count += 1;
          const student = i.split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = { count: 0, students: [] };
          }
          fields[student[3]].count += 1;
          fields[student[3]].students.push(student[0]);
        }
      }
      let response = `Number of students: ${count}\n`;
      for (const field in fields) {
        if (field) {
          response += `Number of students in ${field}: ${fields[field].count}. List: ${fields[field].students.join(', ')}\n`;
        }
      }
      resolve(response.trim());
    }
  });
});

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    try {
      const output = await countStudents(databasePath);
      res.end(`This is the list of our students\n${output}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
