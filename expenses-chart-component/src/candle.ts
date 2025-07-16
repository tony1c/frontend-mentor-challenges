import type { DataPoint } from "./types";
import { html } from "./utils";
import { maxAmount } from "./utils";

export function createCandle(data: DataPoint, allData: DataPoint[]) {
  const maxAmm = maxAmount(allData);
  const heightPercentage = (data.amount / maxAmm) * 150;

  return html`<div class="group relative flex flex-col items-center gap-2">
    <div
      class="bg-brown-950 absolute -top-11 z-10 hidden h-[40px] w-[72px] items-center justify-center rounded-md group-hover:flex">
      <span class="text-white">$${data.amount}</span>
    </div>
    <div
      style="height: ${heightPercentage}px"
      id="candle"
      class="${data.amount === maxAmm
        ? "bg-blue-300"
        : "bg-red-500"} h-[20px] w-[32px] cursor-pointer rounded-[3px] hover:opacity-80"></div>
    <span class="text-brown-400 text-sm">${data.day}</span>
  </div>`;
}
