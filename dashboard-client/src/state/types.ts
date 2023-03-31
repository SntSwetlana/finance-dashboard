export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    services: number;
}
export interface Month {
    id: string;
    _id: string;
    month: string;
    revenue: number;
    expenses: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}

export interface Day {
    id: string;
    _id: string;
    data: string;
    expenses: number;
    revenue: number;
}

export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createAt: string;
    updateAt: string;
}

export interface GetProductsResponse {
    id: string;
    _id: string;
    __v: number;
    price: number;
    expense: number;
    transactions: Array<string>;
    createAt: string;
    updateAt: string;
}

export interface GetTransactionsResponse {
    id: string;
    _id: string;
    __v: number;
    buyer: number;
    amount: number;
    productIds: Array<string>;
    createAt: string;
    updateAt: string;
}