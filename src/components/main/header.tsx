import { Button } from "../ui/button";

const Header = ({ setLocation, location }: { setLocation: (location: string) => void, location: string }) => {
  return (
    <div className="bg-secondary w-full">
      <div className="flex py-2 max-w-screen-xl mx-auto w-full flex-col items-center justify-start gap-2 px-2">
        <div className="flex items-center justify-between w-full">
          <div className="w-full underline">Permiate</div>
          <div id="links" className="flex gap-1">
            <Button variant="outline" onClick={() => setLocation("Dashboard")}><span className={`${location === "Dashboard" && "border-b border-b-slate-600"}`}>Dashboard</span></Button>
            <Button variant="outline" onClick={() => setLocation("Add")}><span className={`${location === "Add" && "border-b border-b-slate-600"}`}>Add Expense</span></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;