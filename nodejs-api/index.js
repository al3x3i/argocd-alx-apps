const express = require('express')
const app = express()

const port = process.env.PORT || 3030

app.get('/', (req, resp) => resp.send('Hello world'))

app.listen(port, (err) => {
    if (err) {
        console.log('Error:', err)
    }
    console.log(`App is listenting on port ${port}`)
})