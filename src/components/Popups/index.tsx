import React from "react";
import { useVisibility } from "../../provider/contexts/visibilityContext";
import { Loader } from "../index";
export const PopUps: React.FC = () => {
  const { visibility } = useVisibility();
  return <>{visibility.isLoading ? <Loader /> : null}</>;
};
