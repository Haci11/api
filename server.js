const express = require('express')
const app = express()
const port = 3000

app.get('/Comments.js', (req, res) => req.send('ree'))
//här skapar man servern med port 3000
app.listen(port, () => console.log(`Listening on port ${port}!`))
