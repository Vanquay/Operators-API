const express = require('express' );
const { seed } = require('./db');
const { operatorsRouter } = require('./routes');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use( express.json() )
app.use( '/operators', operatorsRouter );

app.listen( PORT, () => {

  console.log(`App listening at http://localhost:${PORT}`);
  seed();

} );