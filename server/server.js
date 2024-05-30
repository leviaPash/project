require("dotenv").config()
const cors= require("cors")
const app= require("express")()

const PORT= process.env.PORT || 1111

app.get('/', (req, res)=>{
    res.send("home page")
})

app.listen(PORT, ()=>{
    console.log('server running on port ${PORT}')
})

