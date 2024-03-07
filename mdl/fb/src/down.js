module.exports.down = async function(req, res) {
	try {
		{
			const{
				url
			} = req.query
			if (!url) {
				res.status(404).json({
					data: "Thiếu link"
				})
			};
			if (!cookie) return res.status(404).json({
					data: 'Thiếu Cookie'});

				const appState = require("./appstate.json");
					//fs = require('fs-extra');
				const cookie = appState.map(item => item = item.key + "=" + item.value).join(";");

				const h = [
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
				];
				let he = {}
				for (i of h) {
					he[i.name.replace(':', '')] = i.value;
				};
			//const url = 'https://www.facebook.com/100077738764781/posts/pfbid02BR2jwvv9eNvaHT9S5xgrYnMejCQhTwgsF5nTyd2jGxKh6BPj9H6UsfcdR8xuMTY9l/',
				const url2 = (await require('axios').get(url, {
						headers: he
				})).request.res.responseUrl;
			console.log(url2)
				//const axios = ;
				require('axios')({
					method: 'GET',
					url:  url2,
					headers: he
				}).then(async (get) => {
				  const cheerio = require('cheerio');
				  const $ = cheerio.load(get.data);
				  const textElements = $('div[dir="auto"][class="native-text"]').map((index, element) => ({ index, element: element.children[0].data || null })).get();
				  const text2Elements = $('div.fl button').map((index, element) => ({ index, element: element.children[0].children[0].data || null })).get();
				const imgElement = $('div[data-tti-phase="-1"] [data-mcomponent="ServerImageArea"].m img');
				var urlpic = [],  cd = 0,image = [];
				 
imgElement.each((index, element) => {
  const srcAttribute = element.attribs;
  urlpic.push({ url: srcAttribute.src, alt: srcAttribute.alt, index});
});
console.log({textElements}, {text2Elements}, {urlpic})
 for (let i of urlpic) {
  if (!i.url.includes('scontent') || cd != i.index) continue;
  else {
    image.push({index: i.index, url: i.url, alt: i.alt})
  }
  cd++
};
/*for (let i of text2Elements) {
  console.log(i.element.children[0], i.index)
};
return;*/
					let quality = [], img = []
					try {
						const dataV = (get.data.split('data-is-live-streaming="false" data-force-infinite-loop="false" data-is-enable-viewability-logging="false" data-autoplay="true" data-extra="{')[1] || get.data.split('data-type="video" data-is-live-streaming="false" data-focusable="true" data-force-infinite-loop="false" data-is-enable-viewability-logging="false" data-autoplay="true" data-extra="{')[1]).split('}')[0].split('FBQualityLabel=\\&quot;');
						delete dataV[0]
						for (let i in dataV) {
							var idq = dataV[i].split('\\&quot;&gt;&lt;BaseURL&gt;')[0];
							quality.push({
								id: idq,
								url: dataV[i].split(`${idq}\\&quot;&gt;&lt;BaseURL&gt;`)[1].split('\\&quot;')[0].split(';\\/BaseURL&gt;&lt;SegmentBase')[0].split('amp;').join(''),
							})

						};
						quality.push({
							id: 'video/mp4',
							url: get.data.split('data-type="video" data-is-live-streaming="false" data-focusable="true" data-force-infinite-loop="false" data-is-enable-viewability-logging="false" data-autoplay="true" data-extra="{')[1].split('}')[1].split('data-video-url="')[1].split('"')[0].split('amp;').join('')
						})

					} catch (e) { quality.push({ error: 'Hãy chắc chắn link có video' }) };
					var data = {
						quality,
						image: image.slice(1) || null,
						title: (textElements.find(i => i.index == 4).element || textElements.find(i => i.index == 24).element) || null,
						author: (image[0] || null),
						postTime: (textElements.find(i => i.index == 9)).element || null,
						like: (textElements.find(i => i.index == 6) || textElements.find(i => i.index == 5)).element || null,
						comment: (text2Elements.find(i => i.index == 2) || text2Elements.find(i => i.index == 3)).element || null,
						share: text2Elements.find(i => i.index == 3).element || null
					}
					console.log(data)
				})
		}
	} catch (error) {
		console.log(error)
	}
}