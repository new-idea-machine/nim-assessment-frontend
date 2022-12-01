export const testMenuItems = [
  {
    id: 1,
    name: "Burger",
    price: 5.99,
    description: "A delicious burger",
    image: "https://i.imgur.com/3g7nmJC.png"
  },
  {
    id: 2,
    name: "Pizza",
    price: 4.99,
    description: "A delicious pizza",
    image: "https://i.imgur.com/3g7nmJC.png"
  }
];

export const testOrder = {
  id: 12345,
  name: "example",
  phone: "123-456-7890",
  address: "123 Main St",
  email: "example@email.com",
  items: [
    {
      item: {
        name: "Burger",
        id: 1,
        price: 5.99,
        description: "A delicious burger",
        image: "https://i.imgur.com/3g7nmJC.png"
      },
      quantity: 1
    }
  ]
};
