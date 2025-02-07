interface address {
  city: string;
  country: string;
}

interface user {
  name: string;
  age: number;
  email: string;
  address?: address;
}

const mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
