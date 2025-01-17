import { autoType, csvParse } from 'd3-dsv';

import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    newPassengerCars: await fetch('/data/examples/new-passenger-cars.csv').then(async (r) =>
      csvParse(await r.text(), autoType)
    ),
    meta: {
      pageSource,
    },
  };
}
