"use client";

import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { formUrlQuery } from "@/sanity/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <FaSearch className="text-gray-500 absolute left-8 w-6 h-6" />
        <Input
          className="base-regular h-fit border-0 placeholder:text-gray-400 py-4 pl-20 pr-8 text-white bg-dark-1 !ring-0 !ring-offset-0"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
