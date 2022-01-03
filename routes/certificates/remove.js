const path = require('path');
const fs = require("fs");

const remove = async (req,res) => {
    const filename=req.body.filename;

    const filepath="./public/images/"+filename;
    
    try {
        fs.unlinkSync(filepath)
        res.status(200).send("삭제성공")
        //file removed
      } catch(err) {
        console.error(err)
        res.status(400).send(err);
    }
}

module.exports=remove;