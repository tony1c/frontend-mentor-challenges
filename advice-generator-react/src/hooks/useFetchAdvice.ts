import { useState } from "react";
import { Slip } from "../types/slip.interface";

const initialAdvice: Slip = {
  id: 117,
  advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
};

const apiUrl = "https://api.adviceslip.com/advice";

export const useFetchAdvice = () => {
  const [slip, setSlip] = useState<Slip>(initialAdvice);

  const fetchAdvice = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch advice");

      const data = await response.json();
      setSlip(data.slip);
    } catch (err) {
      console.log("err", err);
    }
  };

  return { slip, fetchAdvice };
};
