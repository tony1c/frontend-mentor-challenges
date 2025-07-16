import "./style.css";
import data from "./data/data.json";
import { html, totalBalance } from "./utils";
import { createCandle } from "./candle";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
  <div
    class="flex h-screen text-brown-950 justify-center bg-red-100 pt-[114px] font-sans text-[18px]">
    <div class="space-y-3">
      <div
        class="flex h-[96px] w-[346px] items-center px-[19px] justify-between rounded-xl bg-red-500">
        <div class="flex flex-col gap-1.5">
          <h1 class="text-red-100 text-sm">My balance</h1>
          <span class="ml-[2.10px] text-2xl text-white">$921.48</span>
        </div>
        <div>
          <image src="/logo.svg" alt="Logo" />
        </div>
      </div>

      <div class="h-[420px] w-[346px] space-y-6 rounded-xl bg-white px-[18px] py-[29px]">
        <div>
        <h1 class="text-brown-950 text-2xl font-bold">
          Spending - Last 7 days
        </h1>

        <div class="flex h-[254px] items-end border-b-2 border-b-red-100 pb-6">
          <div class="flex w-full items-end justify-between">
            ${data.map(item => createCandle(item, data)).join("")}
          </div>
        </div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col gap-[8px]">
            <h2 class="text-sm text-brown-400">Total this month</h1>
            <span class="font-bold text-3xl">$${totalBalance(data)}</span>
          </div>

          <div class="text-end flex flex-col self-end text-sm">
            <span class="font-bold">+2.4%</span>
            <span class="text-brown-400">from last month</span>
          </div>
        </div>
       </div>
    </div>
  </div>
`;
console.log(data);
