const express = require('express');
const path = require("path")

const app = express();

const PORT = 5000;

app.use(express.static("public"))

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo Name',
    description: 'Photo description',
  };

  res.sendFile(path.resolve(__dirname, "temp/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
