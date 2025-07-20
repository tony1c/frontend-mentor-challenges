import "./style.css";
import data from "./data/data.json";
import { html } from "./utils";
import { renderChart } from "./chart";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
  <main
    role="main"
    class="flex h-screen text-brown-950 justify-center bg-red-100 items-center font-sans text-[18px]">
    <div class="space-y-3">
      <div
        class="flex h-[96px] lg:w-[540px] lg:h-[150px] w-[346px] items-center px-[19px] justify-between rounded-xl bg-red-500">
        <div class="flex flex-col gap-1.5">
          <h1 class="text-red-100 text-sm lg:text-lg">My balance</h1>
          <span class="ml-[2.10px] text-2xl lg:text-3xl text-white">$921.48</span>
        </div>
        <div>
          <image src="/logo.svg" alt="Logo" />
        </div>
      </div>

      <div class="w-[346px] lg:w-[540px] space-y-6 rounded-xl bg-white px-[18px] py-[29px] lg:py-[50px] lg:px-[38px]">
        <div>
        <h1 class="text-brown-950 text-2xl font-bold lg:text-3xl">
          Spending - Last 7 days
        </h1>

        ${renderChart(data)}
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col gap-[8px] lg:gap-[16px]">
            <h2 class="text-sm text-brown-400 lg:text-lg">Total this month</h1>
            <span class="font-bold text-3xl lg:text-5xl">$478.33</span>
          </div>

          <div class="text-end flex flex-col self-end text-sm">
            <span class="font-bold lg:text-xl">+2.4%</span>
            <span class="text-brown-400 lg:text-xl">from last month</span>
          </div>
        </div>
       </div>
    </div>
  </main>
`;
