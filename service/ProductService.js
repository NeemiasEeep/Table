export const ProductService = {
  getProductsData() {
    return [
      {
        room: "0101",
        1:'Ocupado',
        2:'Ocupado',
        3:'Ocupado'
        
      },
      {
        room: "0102",
        10:'Ocupado'
      },
      {
        room: "0103",
        3:'Ocupado'
      },
      {
        room: "0104",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
