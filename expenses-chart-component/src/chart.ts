import { createCandle } from "./candle";
import type { DataPoint } from "./types";
import { html } from "./utils";

export function renderChart(data: DataPoint[]) {
  return html`<div
    class="flex h-[254px] items-end border-b-2 border-b-red-100 pb-6">
    <div class="flex w-full items-end justify-between">
      ${data.map(item => createCandle(item, data)).join("")}
    </div>
  </div>`;
}
