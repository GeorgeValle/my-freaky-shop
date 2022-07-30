import{useState} from "react";
//import{useAuth} from "../context/CartContext";
import {CartContext} from "../context/CartContext";
import {useContext} from "react"
import {useNavigate} from "react-router-dom";
//import{createUserWhithEmailAndPassword} from "firebase/auth";
//import{auth} from "..utils/FirebaseConfig"

const Register= ()=>{
    const [user, setUser]= useState({email: "", password: "",});

    const { signup } = useContext(CartContext);
    //const {login} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    //const signup = (email, password) =>{ createUserWhithEmailAndPassword(auth,email,password)

    const handleChange= ({ target:{name,value}})=> setUser({...user, [name]: value});

    const handleSubmit =async (e) => {
        e.preventDefault();
        setError('');
        try{
            await signup(user.email, user.password);
            //createUserWithEmailAndPassword(auth, user.email, user.password)
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
        <button>Registrarse</button>
    </form>
    </div>
    </>
)
};

export default Register;