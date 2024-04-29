import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addExpense, categories } from "@/services/app.service";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoadingSpinner = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-45"
        cx="12"
        cy="12"
        r="10"
        stroke="black"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

function AddExpense() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [store, setStore] = useState("");
  const [amountSpent, setAmountSpent] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!category || !store || !amountSpent) return;
    setLoading(true);
    addExpense({
      category: category,
      amountSpent: parseFloat(amountSpent),
      store: store,
      date: Date.now(),
      note: note,
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-xl w-full font-bold">Add Expense</h1>
      <DropdownMenu>
        
            <DropdownMenuTrigger asChild>
            <Button>{category ? "Selected: " + category : "Select Category"}</Button>
            </DropdownMenuTrigger>
        
        <DropdownMenuContent>
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories.map((cat) => {
            return (
              <DropdownMenuItem key={cat} onSelect={() => setCategory(cat)}>
                {cat}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Label>Merchant</Label>
      <Input
        placeholder="Amazon"
        onChange={(e) => setStore(e.target.value)}
      ></Input>
      <Label>Amount spent</Label>
      <Input
        placeholder="$15.99"
        type="number"
        onChange={(e) => setAmountSpent(e.target.value)}
      ></Input>
      <Label>Note (optional)</Label>
      <Input
        placeholder="Dogfood"
        onChange={(e) => setNote(e.target.value)}
      ></Input>
      <Button className="w-full" onClick={() => handleSubmit()}>
        {loading && <LoadingSpinner />}Submit
      </Button>
    </div>
  );
}

export default AddExpense;