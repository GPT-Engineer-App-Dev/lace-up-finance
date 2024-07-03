import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    // Fetch transaction details by id and set state
    // Placeholder data for now
    const transaction = { date: "2023-10-01", amount: 100, type: "Income", brand: "Nike" };
    setDate(transaction.date);
    setAmount(transaction.amount);
    setType(transaction.type);
    setBrand(transaction.brand);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update transaction logic here
    navigate("/transactions");
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amount</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Type</label>
          <Select value={type} onValueChange={setType} required>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Income">Income</SelectItem>
              <SelectItem value="Expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Brand</label>
          <Select value={brand} onValueChange={setBrand} required>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="Adidas">Adidas</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditTransaction;