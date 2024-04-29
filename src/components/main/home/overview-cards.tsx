import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { expenses } from "@/services/app.service";

function OverviewCards(){
    return (
        <div className="flex w-full justify-between">
            <Card className="w-[25%]">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">Monthly Expenses <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-start justify-center mt-2">
                    <p className="font-bold text-lg">$18,269</p>
                </CardContent>
            </Card>
            <Card className="w-[25%]">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">Top spending categories <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2H1.5C1.22386 2 1 2.22386 1 2.5V7H7V2ZM8 2V7H14V2.5C14 2.22386 13.7761 2 13.5 2H8ZM7 8H1V12.5C1 12.7761 1.22386 13 1.5 13H7V8ZM8 13V8H14V12.5C14 12.7761 13.7761 13 13.5 13H8ZM1.5 1C0.671573 1 0 1.67157 0 2.5V12.5C0 13.3284 0.671573 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.67157 14.3284 1 13.5 1H1.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-1 items-center">
                        <div className="rounded-full h-1 w-1 bg-black"></div>
                        <span className="text-sm">Tddest</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="rounded-full h-1 w-1 bg-black"></div>
                        <span className="text-sm">Tddest</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="rounded-full h-1 w-1 bg-black"></div>
                        <span className="text-sm">Tddest</span>
                    </div>
                </CardContent>
            </Card>
            <Card className="w-[25%]">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">Graph <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Test</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default OverviewCards;