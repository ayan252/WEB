const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    email:String,

    password:String

});

module.exports = mongoose.model("Admin", AdminSchema);
const jwt = require("jsonwebtoken");

app.post("/login", async(req,res)=>{

    const { email, password } = req.body;

    if(email === "admin@gmail.com" &&
       password === "123456"){

        const token = jwt.sign(

            { email },

            process.env.JWT_SECRET,

            { expiresIn:"7d" }

        );

        res.json({

            success:true,
            token

        });

    }else{

        res.json({

            success:false

        });

    }

});
export default function Dashboard(){

    return(

        <div>

            <h1>
                Admin Dashboard
            </h1>

            <div>

                <h2>Total Projects</h2>

                <h2>Messages</h2>

                <h2>Visitors</h2>

            </div>

        </div>

    )

}