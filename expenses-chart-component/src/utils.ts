import type { DataPoint } from "./types";

export function html(strings: TemplateStringsArray, ...values: unknown[]) {
  return String.raw({ raw: strings }, ...values);
}

export function maxAmountSpent(data: DataPoint[]): number {
  return Math.max(...data.map(item => item.amount));
}
