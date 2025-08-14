const express = require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
        .then(()=> console.log("mongodb 연결 성공"))
        .catch((err)=> console.log('연결 실패',err))



const characterRouter = require('./routes/character')
app.use('/api/char',characterRouter)

router.post('/',async(req,res)=>{
    try {
        const {name, level, isOnline}=req.body

        if(!name || typeof level !=='number'){
            return res.status(400).json({message:'name과 level은 필수 입니다.'})
        }
        const newChar =new Character({
            name, 
            level,
            isOnline:isOnline ?? false
        })

        const saveChar = await newChar.save()

        res.status(200).json({message:'캐릭터 추가하기 성공',character:saveChar})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'서버오류',error})
    }
})




app.get("/", (req, res) => {
    res.send("Hello Express!")
})
app.listen(PORT, () => {
    console.log("Server is running!")
})