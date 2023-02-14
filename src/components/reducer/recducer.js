export const initialState = {
  products: [
    {
      id: 1,
      product: "Teclado genius",
      type: "Teclados Genericos",
      img: "https://www.computershopping.com.ar/Images/Productos/Grandes/Genius-Smart-KB-102_Foto0g.jpg",
      price: "$ 2.000",
      quantity:0
    },
    {
      id: 2,
      product: "Teclado Razer Mecanico",
      type: "Teclados Mecanicos",
      img: "https://hard-digital.com.ar/public/files/Teclado%20Razer%20Blackwidow%20V3%20Mecanico%20Black%20Switch%20Green/2.webp",
      price: "$ 8.000",
      quantity:0
    },
    {
      id: 3,
      product: "Mouse Gamer Redragon",
      type: "Mouse Gamer",
      img: "https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/m/9/m908-impact_ok.jpg",
      price: "$ 5.000",
      quantity:0
    },
    {
      id: 4,
      product: "Pad Gamer Genius",
      type: "Mouse Pad",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      price: "$ 2.000",
      quantity:0
    },
    {
      id: 4,
      product: "Pad Gamer Genius",
      type: "Mouse Pad",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      price: "$ 2.000",
      quantity:0
    },
    {
      id: 4,
      product: "Pad Gamer Genius",
      type: "Mouse Pad",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      price: "$ 2.000",
      quantity:0
    },
    {
      id: 4,
      product: "Pad Gamer Genius",
      type: "Mouse Pad",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      price: "$ 2.000",
      quantity:0
    },
    {
      id: 4,
      product: "Pad Gamer Genius",
      type: "Mouse Pad",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      price: "$ 2.000",
      quantity:0
    },
  ],
  cart: [],
};

export const TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  quantity:0
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:{
      let newItem = state.products.find(product => product.id === action.payload);

      let itemInCart = state.cart.find((item) => item.id === newItem.id)
      return itemInCart
          ? {
              ...state,
              cart: state.cart.map((item) => item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
          }
          : {
              ...state,
              cart: [...state.cart, { ...newItem, quantity: 1 }],
          }
  }
      case TYPES.REMOVE_ONE_FROM_CART:{
            
        let itemToDelete = state.cart.find((item) => item.id === action.payload);
        
        return itemToDelete.quantity > 1 ? {
            ...state,
            cart: state.cart.map(item => item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item)
        } 
        : {
            ...state,
            cart:state.cart.filter((item)=>item.id!== action.payload)

        }

    }
        
        default:
          return state;
        }
      };
      
      export default reducer;
      
      // return {
      //   ...state,
      //   cart: [...state.cart, action.item],
      // };
      // const index=state.cart.findIndex((cartItem =>cartItem.id  ===action.id))
      // let NewCart=[...state.cart]
      // if(index>=0){
      //   NewCart.splice(index,1)
      // }else {console.log(action.id)}
      
      // return{
      //   ...state,
      //   cart:NewCart,
      // }