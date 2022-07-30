import{useState} from "react";

import {CartContext} from "../context/CartContext";
import {useContext} from "react"
import {useNavigate} from "react-router-dom";


const Login= () =>{
    const [user, setUser]= useState({email: "", password: "",});

    const { login } = useContext(CartContext);
    
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange= ({ target:{name,value}})=> setUser({...user, [name]: value});

    const handleSubmit =async (e) => {
        e.preventDefault();
        setError('');
        try{
            await login(user.email, user.password);
            navigate("/");
        }catch (er){
            setError(er.massage);
        }

        
    }



return(
    <>
    <div> 
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label htmlfor="email">Email</label>
        <input
            type="email"
            name="email"
            placeholder="tuEmail@company.ltd"
            onChange={handleChange}
        />

        <label htmlfor="password">Password</label>
        <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="********"
        />
        <button>Login</button>
    </form>
    </div>
    </>
)
};
export default Login;