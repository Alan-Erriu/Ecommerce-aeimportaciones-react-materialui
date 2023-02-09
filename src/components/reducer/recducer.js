export const initialState = {
  products: [
    {
      id: 1,
      product: "Nike Waffle Debut",
      type: "Zapatilla-Hombre",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1dc5b5b1-39d2-474d-988e-1c965fbb9204/waffle-debut-zapatillas-gV9P67.png",
      price: "$ 20.000",
      quantity:0
    },
    {
      id: 2,
      product: "Nike Air Force 1",
      type: "Zapatilla-Hombre",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-GjGXSP.png",
      price: "$ 25.000",
      quantity:0
    },
    {
      id: 3,
      product: "Nike Court Legacy",
      type: "Zapatilla-Hombre",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ece27fc1-1c28-43b2-ae8e-fb39db26c71c/court-legacy-zapatillas-nWgWqC.png",
      price: "$ 17.000",
      quantity:0
    },
    {
      id: 4,
      product: "Nike Blazer Low",
      type: "Zapatilla-Hombre",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/861b306f-bc46-402a-8b4a-0c1aaa97356c/blazer-low-77-jumbo-zapatillas-j0cRKV.png",
      price: "$ 16.000",
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