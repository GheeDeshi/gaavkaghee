"use client";

import { Search, UserRound } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";


type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const Searchbar = ({ value, setValue }: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for products..."
      />
      <Search size={16} className="absolute top-1/2 -translate-y-1/2 right-4" />
     
    </div>
  );
};

export default Searchbar;
