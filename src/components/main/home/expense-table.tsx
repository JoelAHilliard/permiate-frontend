import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { expenses, monthly_expenses } from "@/services/app.service";
import { effect } from "@preact/signals";
import moment from "moment"
import { useEffect, useState } from "react";
function ExpenseTable({data}:any){

    const [expensesData, setExpensesData] = useState(expenses.value);

    useEffect(() => {
        setExpensesData(expenses.value);
    },[expenses.value]);

    return (
        <div className="w-full">
           <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Store</TableHead>
                    <TableHead>Note</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount Spent</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.keys(data).map((expenseId:any)=>{
                    return (
                        <TableRow key={expenseId}>
                            <TableCell>{data[expenseId].category}</TableCell>
                            <TableCell>{data[expenseId].store}</TableCell>
                            <TableCell>{data[expenseId].note ? data[expenseId].note : "N/A"}</TableCell>
                            <TableCell>{moment(data[expenseId].date).format("MM/DD h:mm A")}</TableCell>
                            <TableCell className="text-right">${data[expenseId].amountSpent}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>

            <TableFooter>
                <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
            
            </Table>
        </div>
    )
}   
export default ExpenseTable;