const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.resolve(__dirname, '../../public')
  })
})

app.listen(3000, () => console.log('server listen'))
