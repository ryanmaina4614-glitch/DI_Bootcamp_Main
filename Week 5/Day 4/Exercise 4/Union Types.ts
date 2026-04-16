// Define types

type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

// Union type
type Data = User | Product | Order;


// Function with type guards

function handleData(dataArray: Data[]): string[] {
  return dataArray.map((item) => {
    switch (item.type) {

      case 'user':
        return `User: Hello ${item.name}, you are ${item.age} years old.`;

      case 'product':
        return `Product: ID ${item.id} costs $${item.price}.`;

      case 'order':
        return `Order: ID ${item.orderId} has an amount of $${item.amount}.`;

      default:
        // Graceful handling (should never happen with strict typing)
        return "Unknown data type encountered.";
    }
  });
}


// Test data

const mixedData: Data[] = [
  { type: 'user', name: 'Ryan', age: 25 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'ORD123', amount: 150 },
];


// Run function

const results = handleData(mixedData);

console.log(results);