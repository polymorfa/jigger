__d("WAWebMoment-sd", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = [
		"جنوري",
		"فيبروري",
		"مارچ",
		"اپريل",
		"مئي",
		"جون",
		"جولاءِ",
		"آگسٽ",
		"سيپٽمبر",
		"آڪٽوبر",
		"نومبر",
		"ڊسمبر"
	], s = [
		"آچر",
		"سومر",
		"اڱارو",
		"اربع",
		"خميس",
		"جمع",
		"ڇنڇر"
	], u = r("WAWeb-moment").defineLocale("sd", {
		months: e,
		monthsShort: e,
		weekdays: s,
		weekdaysShort: s,
		weekdaysMin: s,
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY HH:mm",
			LLLL: "dddd، D MMMM YYYY HH:mm"
		},
		meridiemParse: /صبح|شام/,
		isPM: function(t) {
			return t === "شام";
		},
		meridiem: function(t, n, r) {
			return t < 12 ? "صبح" : "شام";
		},
		calendar: {
			sameDay: "[اڄ] LT",
			nextDay: "[سڀاڻي] LT",
			nextWeek: "dddd [اڳين هفتي تي] LT",
			lastDay: "[ڪالهه] LT",
			lastWeek: "[گزريل هفتي] dddd [تي] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s پوء",
			past: "%s اڳ",
			s: "چند سيڪنڊ",
			ss: "%d سيڪنڊ",
			m: "هڪ منٽ",
			mm: "%d منٽ",
			h: "هڪ ڪلاڪ",
			hh: "%d ڪلاڪ",
			d: "هڪ ڏينهن",
			dd: "%d ڏينهن",
			M: "هڪ مهينو",
			MM: "%d مهينا",
			y: "هڪ سال",
			yy: "%d سال"
		},
		preparse: function(t) {
			return t.replace(/،/g, ",");
		},
		postformat: function(t) {
			return t.replace(/,/g, "،");
		},
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
