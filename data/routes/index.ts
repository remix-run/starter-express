import type { DataLoader } from "@remix-run/core";

export let loader: DataLoader = async () => {
  return {
    message: "this is awesome 😎"
  };
};
