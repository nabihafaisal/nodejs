const router=require('express').Router()

router.get('/',(req,resp)=>{
    resp.send('hello world')
})

module.exports=router