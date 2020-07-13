// scrapes all of the CEOs of prominent corporations worldwide

const request = require("request-promise");
const cheerio = require("cheerio");
const url = "https://en.wikipedia.org/wiki/List_of_chief_executive_officers";

async function main() {
  const result = await request.get(url);
  const $ = cheerio.load(result);
  $(
    "#mw-content-text > div > table.wikitable.sortable.jquery-tablesorter > tbody > tr > td > a"
  ).each((index, element) => {
    console.log($(element).text());
  });
}

main();
