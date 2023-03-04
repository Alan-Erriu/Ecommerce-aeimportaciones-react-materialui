export const initialState = {
  //-------------------------- Product Card-----------------------------------------------------------------
  products: [
    //-------------------------- Keyboards---------------------------------------------------------------------
    {
      id: 1,
      product: "Teclado Genius",
      type: "Teclados",
      img: "https://www.computershopping.com.ar/Images/Productos/Grandes/Genius-Smart-KB-102_Foto0g.jpg",
      model: "KB-116",
      material: "Membrana",
      connect: "USB 2.0",
      leds: "No",
      price: 2.392,
      quantity: 0,
    },
    {
      id: 2,
      product: "Teclado Razer",
      type: "Teclados",
      img: "http://cdn.shopify.com/s/files/1/0577/6238/1867/products/1644619412.jpg?v=1667890315",
      model: "BLACKWIDOW V3 ",
      material: "Mecanico",
      connect: "USB 2.0",
      leds: "Si",
      price: 49.999,
      quantity: 0,
    },
    {
      id: 3,
      product: "Teclado HyperX",
      type: "Teclados",
      img: "https://mexx-img-2019.s3.amazonaws.com/40716_6.jpeg",
      model: "HyperX Alloy Origins",
      material: "Mecanico",
      connect: "USB 2.0",
      leds: "Si",
      price: 47.999,
      quantity: 0,
    },
    {
      id: 4,
      product: "Teclado RedDragon",
      type: "Teclados",
      img: "https://spacegamer.com.ar/img/Public/1058-producto-teclado-mecanico-inalambrico-redragon-draconic-white-6359.jpg",
      model: "Draconic",
      material: "Mecanico",
      connect: "USB 2.0",
      leds: "Si",
      price: 16.892,
      quantity: 0,
    },
    {
      id: 5,
      product: "Mouse Redragon",
      type: "Mouses",
      img: "https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/m/9/m908-impact_ok.jpg",
      model: "Impact M908",
      material: "Óptico",
      connect: "USB 2.0",
      leds: "Si",
      price: 11.253,
      quantity: 0,
    },
    {
      id: 6,
      product: "Mouse G5",
      type: "Mouses",
      img: "https://tienda.starware.com.ar/wp-content/uploads/2021/07/mouse-gamer-profesional-g5-6d-usb-pro-gamer-3200dpi-led-7-colores-2324-3906.jpg",
      model: "Yindiao",
      material: "Óptico",
      connect: "USB 2.0",
      leds: "Si",
      price: 2.212,
      quantity: 0,
    },
    {
      id: 7,
      product: "Mouse SteelSeries",
      type: "Mouses",
      img: "https://media.steelseriescdn.com/catalog/items/62612/f707609b4f0942168066704ab69c820a.png",
      model: "Rival 650",
      material: "Óptico",
      connect: "USB 2.0",
      leds: "Si",
      price: 2.212,
      quantity: 0,
    },
    {
      id: 8,
      product: "Mouse Redragon",
      type: "Mouses",
      img: "https://mauricomputacion.com.ar/images/productos/24066.webp",
      model: "Griffin M607",
      material: "Óptico",
      connect: "USB 2.0",
      leds: "Si",
      price: 6.557,
      quantity: 0,
    },

    {
      id: 9,
      product: "Pad Genius",
      type: "Accesorios",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      model: "GX-PAD 500S",
      material: "Goma Antideslizante",
      connect: "USB 2.0",
      leds: "Si",
      price: 5.399,
      quantity: 0,
    },
    {
      id: 10,
      product: "Soporte Auriculares Asus",
      type: "Accesorios",
      img: "https://cdn.shopify.com/s/files/1/0081/6024/7888/products/DAD_1024x1024@2x.webp?v=1647846959",
      model: "ROG Throne",
      material: "Soporte Auriculares",
      connect: "USB 2.0",
      leds: "Si",
      price: 7.999,
      quantity: 0,
    },
    {
      id: 11,
      product: "Pad Noga",
      type: "Accesorios",
      img: "https://www.soscomputacion.com.ar/17793/mouse-pad-gamer-noga-g13-flexible-goma-antideslizante-pc-ps4-23x20cm.jpg",
      model: "G13",
      material: "Goma Antideslizante",
      connect: "Sin",
      leds: "No",
      price: 1.458,
      quantity: 0,
    },
    {
      id: 12,
      product: "Tira Luces Led 5050",
      type: "Accesorios",
      img: "https://www.mayoristaenonce.com.ar/wp-content/uploads/2021/09/CD29075-46-1-1200x1200-1-600x600.jpg",
      model: "Rgb",
      material: "Cable 5 Metros ",
      connect: "220V",
      leds: "Si",
      price: 2.783,
      quantity: 0,
    },
  ],
  //-------------------------- Cart-----------------------------------------------------------------
  cart: [],
  //-------------------------- offers-----------------------------------------------------------------
  offers: [
    {
      id: 92,
      product: "Mouses",
      img: "https://tienda.starware.com.ar/wp-content/uploads/2021/07/mouse-gamer-profesional-g5-6d-usb-pro-gamer-3200dpi-led-7-colores-2324-3906.jpg",
      price: "2.000",
      link: "/mouses",
    },
    {
      id: 93,
      product: "Teclados",
      img: "https://mexx-img-2019.s3.amazonaws.com/40716_6.jpeg",
      price: "3.000",
      link: "/teclados",
    },
    {
      id: 91,
      product: "Accesorios",
      img: "https://i0.wp.com/noaweb.com.ar/wp-content/uploads/2021/05/1616513651dc787e32dc096ea2f18a13b767409408.jpg?fit=1024%2C1024&ssl=1",
      price: "2.000",
      link: "/accesorios",
    },
  ],
};
//-------------------------- Object TYPES-----------------------------------------------------------------
export const TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  quantity: 0,
};
//-------------------------- REDUCER-----------------------------------------------------------------
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    default:
      return state;
  }
};

export default reducer;
