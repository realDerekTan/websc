// scrapes all of the CEOs of prominent corporations worldwide

const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://en.wikipedia.org/wiki/List_of_chief_executive_officers";

rp(url)
  .then(function (html) {
    console.log(html);
  })
  .catch(function (err) {});
