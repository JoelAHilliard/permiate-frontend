import { signal } from "@preact/signals";

interface ExpenseItem {
  category: string;
  amountSpent: number;
  date: number; //timestamp
  note: string;
  store: string;
}

interface ExpenseData {
  [key: string]: ExpenseItem;
}

export const categories = [
  "Pets 🐕",
  "Transportation 🚙",
  "Housing 🏡",
  "Food 🍞",
  "Grocery 🛒",
  "Utilites ⚡️",
  "Insurance 📋",
  "Medical/Healthcare ⚕️",
  "Savings 💰",
  "Recreation 🎢",
  "Misc",
];

export const expenses = signal<ExpenseData>({"Qm6Lg6":{"category":"Pets 🐕","amountSpent":69,"store":"a","date":1709208682,"note":"d"},"EHEY6L":{"category":"Pets 🐕","amountSpent":11,"store":"a","date":1714361991178,"note":"d"},"EkTLJH":{"category":"Pets 🐕","amountSpent":11,"store":"a","date":1714361991351,"note":"d"},"yI366i":{"category":"Pets 🐕","amountSpent":11,"store":"a","date":1714361991538,"note":"d"},"FiuDJR":{"category":"Utilites ⚡️","amountSpent":70,"store":"Gas","date":1714362286818,"note":""},"ZyRcTw":{"category":"Grocery 🛒","amountSpent":4000,"store":"Aldi","date":1714362830844,"note":"Monthly"},"HzMmLf":{"category":"Housing 🏡","amountSpent":1930,"store":"DesertValley","date":1714363081989,"note":"Rent"}});
export const monthly_expenses = signal<ExpenseData>({});
export const quarterly_expenses = signal<ExpenseData>({});
export const yearly_expenses = signal<ExpenseData>({});
export const weekly_expenses = signal<ExpenseData>({});

export const expense_category_data = signal({
  "Pets 🐕": { amount: 0, total_spent: 0 },
  "Transportation 🚙": { amount: 0, total_spent: 0 },
  "Housing 🏡": { amount: 0, total_spent: 0 },
  "Dining 🍞": { amount: 0, total_spent: 0 },
  "Grocery 🛒": { amount: 0, total_spent: 0 },
  "Utilites ⚡️": { amount: 0, total_spent: 0 },
  "Insurance 📋": { amount: 0, total_spent: 0 },
  "Medical/Healthcare ⚕️": { amount: 0, total_spent: 0 },
  "Savings 💰": { amount: 0, total_spent: 0 },
  "Recreation 🎢": { amount: 0, total_spent: 0 },
  "Misc": { amount: 0, total_spent: 0 }
});

export const loadData = () => {
    const data = JSON.parse(localStorage.getItem("data")!)
    expenses.value = data;
    monthly_expenses.value = generateMonthlyData();
    yearly_expenses.value = generateYearlyData();
    quarterly_expenses.value = generateQuarterlyData();
    weekly_expenses.value = generateWeeklyData();
}


export function addExpense(expense: any) {
  const id = generateId(6);
  expenses.value[id] = expense;

  const category = String(expense.category)

  //@ts-ignore
  expense_category_data.value[category].amount += 1 
  //@ts-ignore
  expense_category_data.value[category].total_spent += expense.amountSpent;

  const expensesData = JSON.stringify(expenses.value);
  localStorage.setItem('data', expensesData);
  weekly_expenses.value = generateWeeklyData();
  monthly_expenses.value = generateMonthlyData();
  return true;
}

export function deleteExpense(id: string) {
  let res = expenses.value[id] ? true : false;
  res ? delete expenses.value[id] : null;
  return res;
}

function generateId(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 1. Generate monthly data
export function generateMonthlyData() {
  const currentDate = new Date();
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const monthlyData: ExpenseData = {};

  for (const key in expenses.value) {
    const expense = expenses.value[key];
    const expenseDate = new Date(expense.date);

    if (expenseDate >= startOfMonth && expenseDate <= endOfMonth) {
      monthlyData[key] = expense;
    }
  }

  return monthlyData;
}
export function generateWeeklyData() {
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
    const monthlyData: ExpenseData = {};
  
    for (const key in expenses.value) {
      const expense = expenses.value[key];
      const expenseDate = new Date(expense.date);
  
      if (expenseDate >= startOfWeek && expenseDate <= endOfWeek) {
        monthlyData[key] = expense;
      }
    }
  
    return monthlyData;
}
// 2. Generate quarterly data
export function generateQuarterlyData() {
  const currentDate = new Date();
  const quarter = Math.floor(currentDate.getMonth() / 3);
  const startOfQuarter = new Date(currentDate.getFullYear(), quarter * 3, 1);
  const endOfQuarter = new Date(currentDate.getFullYear(), quarter * 3 + 3, 0);

  const quarterlyData: ExpenseData = {};

  for (const key in expenses.value) {
    const expense = expenses.value[key];
    const expenseDate = new Date(expense.date);

    if (expenseDate >= startOfQuarter && expenseDate <= endOfQuarter) {
      quarterlyData[key] = expense;
    }
  }
  return quarterlyData;
}

// 3. Generate yearly data
export function generateYearlyData() {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 0);

  const yearlyData: ExpenseData = {};

  for (const key in expenses.value) {
    const expense = expenses.value[key];
    const expenseDate = new Date(expense.date);

    if (expenseDate >= startOfYear && expenseDate <= endOfYear) {
      yearlyData[key] = expense;
    }
  }
  return yearlyData;
}
