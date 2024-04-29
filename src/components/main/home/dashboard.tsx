import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpenseTable from "./expense-table";
import OverviewCards from "./overview-cards";
import { useEffect, useState } from "react";
import { expenses, monthly_expenses, quarterly_expenses, weekly_expenses, yearly_expenses } from "@/services/app.service";

function Dashboard() {
    const [timeframe, setTimeframe] = useState<any>(null)
    
    useEffect(() => {
        setTimeframe(expenses.value);
    },[expenses.value]);
    
    return ( 
        <div className="w-full flex flex-col gap-2">
            <h1 className='text-xl w-full font-bold'>My Dashboard</h1>
            <Tabs defaultValue="weekly" className="">
                <TabsList>
                    <TabsTrigger value="weekly">Week</TabsTrigger>
                    <TabsTrigger value="monthly">Month</TabsTrigger>
                    <TabsTrigger value="quarterly">Quarter</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="w-full">
                    <OverviewCards />
                    <ExpenseTable data={monthly_expenses.value}/>
                </TabsContent>
                <TabsContent value="weekly" className="w-full">
                    <OverviewCards />
                    <ExpenseTable data={weekly_expenses.value}/>
                </TabsContent>
                <TabsContent value="quarterly">
                    <OverviewCards />
                    <ExpenseTable data={quarterly_expenses.value}/>
                </TabsContent>
                <TabsContent value="yearly">
                    <OverviewCards />
                    <ExpenseTable data={yearly_expenses.value}/>
                </TabsContent>
            </Tabs>
            
        </div>
    )
}

export default Dashboard;