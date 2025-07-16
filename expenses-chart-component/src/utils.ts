import type { DataPoint } from "./types";

export function html(strings: TemplateStringsArray, ...values: unknown[]) {
  return String.raw({ raw: strings }, ...values);
}

export function maxAmountSpent(data: DataPoint[]): number {
  return Math.max(...data.map(item => item.amount));
}

export function totalBalance(data: DataPoint[]): number {
  return Number(
    data
      .reduce((totalAmount, cur) => {
        totalAmount += cur.amount;
        return totalAmount;
      }, 0)
      .toFixed(2),
  );
}
