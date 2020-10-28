import React from "react";

export function meta() {
  return { title: "Shoot..." };
}

export default function FourOhFour() {
  console.error("Check your server terminal output");

  return (
    <div>
      <h1>500</h1>
    </div>
  );
}
