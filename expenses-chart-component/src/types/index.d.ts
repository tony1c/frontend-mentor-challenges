declare module "*.json" {
  const value: {
    day: string;
    amount: number;
  }[];
  export default value;
}

export interface DataPoint {
  day: string;
  amount: number;
}
