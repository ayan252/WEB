
import axios from "axios";

import { useState } from "react";

export default function Login(){

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const login = async()=>{

        const res = await axios.post(

            "http://localhost:5000/login",

            { email,password }

        );

        console.log(res.data);

    }

    return(

        <div>

            <input
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={login}>
                Login
            </button>

        </div>

    )

}