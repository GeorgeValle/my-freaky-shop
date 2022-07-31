import{useState} from "react";
//import{useAuth} from "../context/CartContext";
import {CartContext} from "../context/CartContext";
import {useContext} from "react"
import {useNavigate, Link} from "react-router-dom";
import {Form, FormGroup, Label, Input, Card, CardTitle, Button, CardSubtitle}from 'reactstrap';
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

        <div className="p-5">
            <Card
                body
                color="dark"
                inverse
                style={{
                    width: '23rem'
                }}
                    className="mx-auto"
        
                >
                <CardTitle 
                    tag="h5"
                    className="text-center">
                        Registre su usuario
                </CardTitle>
                <Form
                    style={{
                        width: '20rem'
                    }}
                    className="mx-auto p-3 "
                    onSubmit={handleSubmit}
                    >
                    <FormGroup>
                        <CardSubtitle
                            className="m-3 text-muted text-danger"
                            tag="h5"
                        >
                            {error && <p>{error}</p>}
                        </CardSubtitle>
                        <Label for="email">
                            Email
                        </Label>
                        <Input
                            bsSize="lg"
                            id="email"
                            name="email"
                            placeholder="tuEmail@empresa.srl"
                            type="email"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label          
                            for="examplePassword"
                            className="text-color-white"
                        >
                            Password
                        </Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            placeholder="********"
                            bsSize="lg"
                        />
                    </FormGroup>
                    <Button
                        color="primary"           
                    >
                        Registrar
                    </Button>
                    <CardSubtitle
                        className="m-3 text-muted"
                        tag="h5"
                    >
                        Si ya se ha registrado, <Link to="/Login">acceda aquí</Link>
                    </CardSubtitle>
                </Form>
    
            </Card>
        </div>
    </div>
    </>
)
};

export default Register;