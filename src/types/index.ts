export interface IUser {
  username: string;
  email: string;
}

export enum Categories {
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

export interface Transaction {
  name: string;
  date: string; //?
  price: string;
  category: Categories;
  _id: string;
}

export interface IIncome {
  name: string;
  date: string;
  amount: string;
  category: Categories;
}
