__d("WAWebMoment-ur", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = [
		"جنوری",
		"فروری",
		"مارچ",
		"اپریل",
		"مئی",
		"جون",
		"جولائی",
		"اگست",
		"ستمبر",
		"اکتوبر",
		"نومبر",
		"دسمبر"
	], s = [
		"اتوار",
		"پیر",
		"منگل",
		"بدھ",
		"جمعرات",
		"جمعہ",
		"ہفتہ"
	], u = r("WAWeb-moment").defineLocale("ur", {
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
			sameDay: "[آج بوقت] LT",
			nextDay: "[کل بوقت] LT",
			nextWeek: "dddd [بوقت] LT",
			lastDay: "[گذشتہ روز بوقت] LT",
			lastWeek: "[گذشتہ] dddd [بوقت] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s بعد",
			past: "%s قبل",
			s: "چند سیکنڈ",
			ss: "%d سیکنڈ",
			m: "ایک منٹ",
			mm: "%d منٹ",
			h: "ایک گھنٹہ",
			hh: "%d گھنٹے",
			d: "ایک دن",
			dd: "%d دن",
			M: "ایک ماہ",
			MM: "%d ماہ",
			y: "ایک سال",
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
