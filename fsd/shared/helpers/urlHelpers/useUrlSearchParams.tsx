"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useUrlSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const newParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      newParams[key] = value;
    });
    setParams(newParams);
    console.log(newParams)
  }, [searchParams]);

  const getParam = (param: string) => {
    return searchParams.get(param);
  };

  const deleteAllParams = () => {
    const params = new URLSearchParams(searchParams);
    params.forEach((value, key) => {
      params.delete(key);
    });
    router.replace(`${pathname}?${params.toString()}`);
  };

  const setParam = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.append(param, value);
    router.replace(`${pathname}?${params.toString()}`);
  };


  return {
    params,
    getParam,
    setParam,
    searchParams,
    deleteAllParams,
  };
};

export default useUrlSearchParams;
