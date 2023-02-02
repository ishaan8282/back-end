let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let AddressSchema = require("../Model/address")

//create
router.route("/create-address").post((req,res,next) => {
    AddressSchema.create(req.body,(err,data) => {
        if(error){
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

router.route("/").get((req,res)=> {
    AddressSchema.find((error,data) => {
     if(error){
        return next(error)
     } else {
        res.json(data)
     }
    })
})

router.route("/edit-address/:id").get((req,res) => {
    if(error) {
         return next(error)
    } else {
   res.json(data)
    }
})


router.route("/update-address/:id").put((req,res,next) => {
    AddressSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    }, (error,data) => {
        if(error){
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log("address updated successfully")
        }
    }
    )
})


router.route("/delete-address/:id").delete((req,res,next) => {
    AddressSchema.findByIdAndRemove(req.params.id,(error,data)=> {
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg:data
            })
        }
    })
})

module.exports = router
