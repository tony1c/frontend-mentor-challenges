declare module "*.json" {
  const value: any;
  export default value;
}

export interface DataPoint {
  day: string;
  amount: number;
}
