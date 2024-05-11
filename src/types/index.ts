type Id = string | number;

export interface IUser {
  username: string;
  email: string;
}

enum Categories {
  Food = "Food",
  Transportation = "Transportation",
  Housing = "Housing",
  Utilities = "Utilities",
  Entertainment = "Entertainment",
  Healthcare = "Healthcare",
  Insurance = "Insurance",
  Investments = "Investments",
  Savings = "Savings",
  Debt = "Debt",
  Education = "Education",
  Gifts = "Gifts",
  Charity = "Charity",
  Travel = "Travel",
  PersonalCare = "Personal Care",
  Miscellaneous = "Miscellaneous",
}

interface Transaction {
  id: Id;
  date: Date; //?
  price: string;
  category: Categories;
}

export interface IUserTransitions {
  id: Id;
  userId: Id;
  transitions: Transaction[];
}

const mockTransactions: Transaction[] = [
  {
    id: 1,
    date: new Date("2024-05-01"),
    price: "50.00",
    category: Categories.Food,
  },
  {
    id: 2,
    date: new Date("2024-05-02"),
    price: "30.00",
    category: Categories.Transportation,
  },
  {
    id: 3,
    date: new Date("2024-05-03"),
    price: "100.00",
    category: Categories.Entertainment,
  },
];
