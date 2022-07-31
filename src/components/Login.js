import {useState} from "react";
import {CartContext} from "../context/CartContext";
import {useContext} from "react"
import {useNavigate, Link} from "react-router-dom";
import {Form, FormGroup, Label, Input, Card, CardTitle, Button, CardSubtitle}from 'reactstrap';


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
                    Ingres&#225; tu usuario
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
                        <Label 
                            for="email"
                        >
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
                            for="password"
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
                        Ingresar
                    </Button>
                    <CardSubtitle
                        className="m-3 text-muted"
                        tag="h5"
                    >
                        Si aún no se registró, <Link to="/Register">acceda aquí</Link>
                    </CardSubtitle>
                </Form>
    
            </Card>
        </div>
    </div>
    </>
)
};
export default Login;