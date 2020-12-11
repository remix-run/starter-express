import type { Loader } from "@remix-run/data";

export let loader: Loader = async () => {
  return {
    message: "this is awesome 😎",
  };
};
