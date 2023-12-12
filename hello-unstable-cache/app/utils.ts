"use server";

import { unstable_cache } from "next/cache";
import { cache } from "react";

async function getRandomeNumber(){
  const result = ~~(Math.random() * 100);
  return result;
}

// no cache
export const getDataWithoutCache = getRandomeNumber

// stable
export const getDataWithCache = cache(getRandomeNumber);

// unstable
export const getDataWithUnstableCache = unstable_cache(getRandomeNumber)