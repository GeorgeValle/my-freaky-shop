import React,{ createContext, useState, useEffect} from "react";
import {Button, CardImg, Row,  Col, Card, CardHeader, CardText, CardBody, CardSubtitle, CardTitle, CardFooter} from "reactstrap";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/FirebaseConfig";



const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  
  const [user,setUser]=useState(null);
  const [loading, setLoading]=useState(true);
  const [status , setStatus]=useState(false);
  const [cartList, setCartList] = useState([]);
  


const addItem =  ({id, img, price, title, qty}) =>{
        


  const found =  cartList.find(el => el.id === id);
  
  

  const findDuplicated = (found, cartList) => {
    cartList.forEach(element => {
          if (found.id === element.id) {
              return element.qty = qty + element.qty
          }
      })
  }
  
  if (found)  { findDuplicated(found, cartList)} else {setCartList([...cartList, {id, img, price, title, qty}])}


  
}






const removeItem = (identify) => {
  let result = cartList.filter(item => item.id !== identify);
  setCartList(result);
}


  

  const clear = () => {

    setCartList([]);
    
  };

  const calcTotalPerItem = (id) => {
    let index = cartList.map(item => item.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
}

const calcSubTotal = () => {
  let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
  return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
}

//calcula el iva del 21% de Argentina
const calcTaxes = () => {
  return calcSubTotal() * 0.21;
}

//calcula el totol
const calcTotal = () => {
  return calcSubTotal()+calcTaxes();
}

//calcula la cantidad total de items en el carrito
const calcItemsQty = () => {
  let qtys = cartList.map(item => item.qty);
  return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
}

//muesta los detalles de los productos del carrito
const renderCartlist= () =>{
  
  return cartList.map((item) =>  
  <div key={item.id}>
  <Row >
                <Col sm="10" md="8" lg="6">
                <Card 
                    body
                    color="dark"
                    inverse
                    >
        
                    <CardHeader>
                        <CardTitle 
                        tag="h5"
                        >
                            
                            {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardImg
                    alt={item.title}
                    src={item.img}
                    top
                    width="10%"
                    />
                    <Button color="primary" onClick={() => removeItem(item.id)}>Remover producto</Button>
                    </Card>
                </Col>
                <Col sm="10" md="8" lg="6">
                    <Card 
                        body
                        color="dark"
                        inverse
                    >
        
                    <CardHeader>
                        <CardText>
                            Cantidad: {item.qty}
                        </CardText>
                    </CardHeader>
            <CardBody>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                    
                >
                    Precio unitario ${item.price}
                </CardSubtitle>
                
            </CardBody>
            <CardFooter>
            
                
            </CardFooter>
        </Card>
    </Col>
</Row>
</div>
)

}

//funcion para registrar en la base de datos
  const signup = (email, password) =>{ createUserWithEmailAndPassword(auth,email,password)
    
  };

//funcion para acceder a usuario de la base de datos
  const login= (email, password) =>signInWithEmailAndPassword(auth,email,password);

//funcion para desconectar el usuario
const logout = () => signOut(auth);

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser=>{
  setUser(currentUser);
  setLoading(false);
});
return ()=>unsubscribe();
},[])



  return (



    <CartContext.Provider value={{
      cartList,
      addItem,
      removeItem,
        clear,
        calcTotalPerItem,
        calcSubTotal,
        calcItemsQty,
        calcTotal,
        calcTaxes,
        renderCartlist,
        signup,
        login,
        logout,
        user,
        loading,
        status,
        setStatus
        }}>

      {children}

    </CartContext.Provider>

  );

};

export { CartContextProvider, CartContext };