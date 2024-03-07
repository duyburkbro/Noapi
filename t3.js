const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://www.facebook.com/forever.abt/videos/1558603341649431/', {
  headers: he
})
  .then(response => {
    const $ = cheerio.load(response.data);
    const imageUrls = $('div img').map((index, element) => $(element).attr('src')).get();

console.log(imageUrls);
  })
  .catch(error => {
    console.error(error);
  });
  let h = [
					{
						'name': "Content-Type",
						'value': 'text/html; charset=utf8'
					},
					{
						"name": ":authority",
						"value": "www.facebook.com"
					},
					{
						"name": ":method",
						"value": "GET"
					},
					{
						"name": ":path",
						"value": "/profile.php/?id=100076965934609"
					},
					{
						"name": ":scheme",
						"value": "https"
					},
					{
						"name": "accept",
						"value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
					},
					{
						"name": "accept-encoding",
						"value": "gzip, deflate, br"
					},
					{
						"name": "accept-language",
						"value": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5"
					},
					{
						"name": "cache-control",
						"value": "max-age=0"
					},
					{
						"name": "cookie",
						"value": cookie
					},
					{
						"name": "dpr",
						"value": "1.75"
					},
					{
						"name": "sec-ch-prefers-color-scheme",
						"value": "dark"
					},
					{
						"name": "sec-ch-ua",
						"value": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\""
					},
					{
						"name": "sec-ch-ua-full-version-list",
						"value": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.116\""
					},
					{
						"name": "sec-ch-ua-mobile",
						"value": "?1"
					},
					{
						"name": "sec-ch-ua-model",
						"value": "\"SM-A115F\""
					},
					{
						"name": "sec-ch-ua-platform",
						"value": "\"Android\""
					},
					{
						"name": "sec-ch-ua-platform-version",
						"value": "\"12.0.0\""
					},
					{
						"name": "sec-fetch-dest",
						"value": "document"
					},
					{
						"name": "sec-fetch-mode",
						"value": "navigate"
					},
					{
						"name": "sec-fetch-site",
						"value": "same-origin"
					},
					{
						"name": "sec-fetch-user",
						"value": "?1"
					},
					{
						"name": "upgrade-insecure-requests",
						"value": "1"
					},
					{
						"name": "user-agent",
						"value": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
					},
					{
						"name": "viewport-width",
						"value": "980"
					}
				],
					decode = (str) => require('he').decode(str || null);
				var he = {}
				for (i of h) {
					he[i.name.replace(':', '')] = i.value;
				};
				const appState = require("./appstate.json");
					//fs = require('fs-extra');
				var cookie = appState.map(item => item = item.key + "=" + item.value).join(";");                