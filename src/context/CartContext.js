import React,{ createContext, useState/*, useEffect*/ } from "react";
import {Button, CardImg, Row,  Col, Card, CardHeader, CardText, CardBody, CardSubtitle, CardTitle, CardFooter} from "reactstrap";


const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  

  const [cartList, setCartList] = useState([]);
  const [addChange, setAddChange] = useState(0);
  // const [itemsTotal, setItemsTotal] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  

  // const addItem = (item, setCantidad) => {
  // console.log(setCantidad);
  // console.log(item)
  // console.log(item.id)

// }, 


const addItem =  ({id, img, price, title, qty}) =>{
        
  setAddChange(addChange + 1)

  //setCartList([...cartList, {id, img, price, title, qty}])
  const found =  cartList.find(el => el.id === id);
  console.log(`id: ${id}img: ${img} Precio: ${price} titulo: ${title} cantidad: ${qty}`);
  

  const findDuplicated = (found, cartList) => {
    cartList.forEach(element => {
          if (found.id === element.id) {
              return element.qty = qty + element.qty
          }
      })
  }
  
  if (found)  { findDuplicated(found, cartList)} else {setCartList([...cartList, {id, img, price, title, qty}])}


  
}



console.log(cartList+"el dentro cartList");

//     setAddChange(addChange + 1)
//     const exist = cartList.find((cartItem) => cartItem.id === item.id);
    
//     if (exist) {
      
//       setCartList(

//         cartList.map((cartItem) =>

//           cartItem.id === item.id

//             ? { ...cartItem, cantidad: cartItem.cantidad + setCantidad }

//             : cartItem

//         )

//       );

//     } else {

//       setCartList([...cartList, { ...item, cantidad: setCantidad }]);

//     }
  
    
//     console.log(cartList+"el cartList"); 
// };



const removeItem = (identify) => {
  let result = cartList.filter(item => item.id !== identify);
  setCartList(result);
}


  // const removeItem = (id) => {

  //   setAddChange(addChange + 1)
  //   const removed =cartList.filter((item) => item.id !== id)
  //   setCartList(removed);
  //   //cartTemp.filter((product)=>product.id !==id);

  // };

  const clear = () => {

    setCartList([]);
    // const $cartListJSON = JSON.stringify([]);      
    // sessionStorage.setItem('cartList', $cartListJSON)

  };

  const calcTotalPerItem = (id) => {
    let index = cartList.map(item => item.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
}

const calcSubTotal = () => {
  let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
  return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const calcTaxes = () => {
  return calcSubTotal() * 0.21;
}

const calcTotal = () => {
  return calcSubTotal()+calcTaxes();
}

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
                {/* <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Se eliminó ${qty} productos del carrito`}
                </Alert> */}
    </Col>
</Row>
</div>
)

}



//   useEffect(()=>{
//     let adding = 0;
//     cartList.forEach(el => adding = adding + el.qty)
//     setItemsTotal(adding)
// }, [addChange,cartList])

// useEffect(()=>{
//     let addingPrice = 0;
//     cartList.forEach(el => addingPrice = addingPrice + (el.qty * el.price))
//     setTotalPrice(addingPrice)
// }, [addChange,cartList])



  return (

    // <CartContext.Provider value={{itemsTotal, totalPrice, cartList,  addItem, removeItem, clear }}>

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
        renderCartlist
        }}>

      {children}

    </CartContext.Provider>

  );

};

export { CartContextProvider, CartContext };