import express from 'express'
import path from 'path'
const app = express()
const ASSETS_FOLDER=path.join(process.cwd(),'assets')
const PORT = 8888
app.use(express.static(ASSETS_FOLDER));

app.listen(PORT, ()=>{
    console.log('listening on port: '+PORT)
})