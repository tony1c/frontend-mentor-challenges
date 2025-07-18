import type { DataPoint } from "./types";
import { html } from "./utils";
import { maxAmountSpent } from "./utils";

export function createCandle(data: DataPoint, allData: DataPoint[]) {
  const maxAmount = maxAmountSpent(allData);
  const heightPercentage = (data.amount / maxAmount) * 150;

  return html`<div class="group relative flex flex-col items-center gap-2">
    <div
      class="bg-brown-950 absolute -top-11 z-10 hidden h-[40px] w-[72px] items-center justify-center rounded-md group-hover:flex">
      <span class="text-white">$${data.amount}</span>
    </div>
    <div
      style="height: ${heightPercentage}px"
      id="candle"
      class="${data.amount === maxAmount
        ? "bg-blue-300"
        : "bg-red-500"} w-[32px] cursor-pointer rounded-[6px] hover:opacity-80 lg:w-[52px]"></div>
    <span class="text-brown-400 text-sm">${data.day}</span>
  </div>`;
}
