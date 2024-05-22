import * as React from "react";
import SplitButton from "./SplitButton";
import RecipeReviewCard from "./ComplexInteraction";

export default function Eleccion({ index }: { index: number }) {
  return (
    <div>
      <h1>Elige un framework</h1>
      <RecipeReviewCard index={index} />
    </div>
  );
}
