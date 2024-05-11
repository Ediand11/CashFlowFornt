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
  date: Date; //?
  price: string;
  category: Categories;
  _id: string;
}
