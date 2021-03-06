const scraperjs = require("scraperjs");

scraperjs.StaticScraper.create("https://news.ycombinator.com/")
  .scrape(function ($) {
    return $(".title a")
      .map(function () {
        return $(this).text();
      })
      .get();
  })
  .then(function (news) {
    console.log(news);
  });
