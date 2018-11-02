import Dashboard from "../Component/Dashboard";
import Keywords from "../Component/Keywords";
import Transactions from "../Component/Transactions";
import CashFlow from "../Component/CashFlow";

export const locationRoutes = [
    {
        path: "/",
        exact: true,
        component: Dashboard
    },
    {
        path: "/transaction",
        exact: false,
        component: Transactions
    },
    {
        path: "/cashflow",
        exact: false,
        component: CashFlow
    },
    {
        path: "/keyword",
        exact: false,
        component: Keywords
    }
];