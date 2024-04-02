"use client";

import React, { useState } from 'react';

import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";


const SearchForm = () => {
  const [search, setSearch] = useState("")

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <FaSearch className="text-gray-500 absolute left-8 w-6 h-6 cursor-pointer" />
        <Input
          className="base-regular h-fit border-0 placeholder:text-gray-400 py-4 pl-20 pr-8 text-white bg-blue-900 !ring-0 !ring-offset-0"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
}

export default SearchForm;