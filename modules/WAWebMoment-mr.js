__d("WAWebMoment-mr", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "१",
		2: "२",
		3: "३",
		4: "४",
		5: "५",
		6: "६",
		7: "७",
		8: "८",
		9: "९",
		0: "०"
	}, s = {
		"१": "1",
		"२": "2",
		"३": "3",
		"४": "4",
		"५": "5",
		"६": "6",
		"७": "7",
		"८": "8",
		"९": "9",
		"०": "0"
	};
	function u(e, t, n, r) {
		var o = "";
		if (t) switch (n) {
			case "s":
				o = "काही सेकंद";
				break;
			case "ss":
				o = "%d सेकंद";
				break;
			case "m":
				o = "एक मिनिट";
				break;
			case "mm":
				o = "%d मिनिटे";
				break;
			case "h":
				o = "एक तास";
				break;
			case "hh":
				o = "%d तास";
				break;
			case "d":
				o = "एक दिवस";
				break;
			case "dd":
				o = "%d दिवस";
				break;
			case "M":
				o = "एक महिना";
				break;
			case "MM":
				o = "%d महिने";
				break;
			case "y":
				o = "एक वर्ष";
				break;
			case "yy":
				o = "%d वर्षे";
				break;
		}
		else switch (n) {
			case "s":
				o = "काही सेकंदां";
				break;
			case "ss":
				o = "%d सेकंदां";
				break;
			case "m":
				o = "एका मिनिटा";
				break;
			case "mm":
				o = "%d मिनिटां";
				break;
			case "h":
				o = "एका तासा";
				break;
			case "hh":
				o = "%d तासां";
				break;
			case "d":
				o = "एका दिवसा";
				break;
			case "dd":
				o = "%d दिवसां";
				break;
			case "M":
				o = "एका महिन्या";
				break;
			case "MM":
				o = "%d महिन्यां";
				break;
			case "y":
				o = "एका वर्षा";
				break;
			case "yy":
				o = "%d वर्षां";
				break;
		}
		return o.replace(/%d/i, e);
	}
	var c = r("WAWeb-moment").defineLocale("mr", {
		months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
		monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
		monthsParseExact: !0,
		weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
		weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
		weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
		longDateFormat: {
			LT: "A h:mm वाजता",
			LTS: "A h:mm:ss वाजता",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY, A h:mm वाजता",
			LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
		},
		calendar: {
			sameDay: "[आज] LT",
			nextDay: "[उद्या] LT",
			nextWeek: "dddd, LT",
			lastDay: "[काल] LT",
			lastWeek: "[मागील] dddd, LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%sमध्ये",
			past: "%sपूर्वी",
			s: u,
			ss: u,
			m: u,
			mm: u,
			h: u,
			hh: u,
			d: u,
			dd: u,
			M: u,
			MM: u,
			y: u,
			yy: u
		},
		preparse: function(t) {
			return t.replace(/[१२३४५६७८९०]/g, function(e) {
				return s[e];
			});
		},
		postformat: function(n) {
			return n.replace(/\d/g, function(t) {
				return e[t];
			});
		},
		meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
		meridiemHour: function(t, n) {
			if (t === 12 && (t = 0), n === "पहाटे" || n === "सकाळी") return t;
			if (n === "दुपारी" || n === "सायंकाळी" || n === "रात्री") return t >= 12 ? t : t + 12;
		},
		meridiem: function(t, n, r) {
			return t >= 0 && t < 6 ? "पहाटे" : t < 12 ? "सकाळी" : t < 17 ? "दुपारी" : t < 20 ? "सायंकाळी" : "रात्री";
		},
		week: {
			dow: 0,
			doy: 6
		}
	});
}), 34);
