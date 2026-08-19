__d("WAWebMoment-ug-cn", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = r("WAWeb-moment").defineLocale("ug-cn", {
		months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
		monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
		weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
		weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
		weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "YYYY-MM-DD",
			LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
			LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
			LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
		},
		meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
		meridiemHour: function(t, n) {
			return t === 12 && (t = 0), n === "يېرىم كېچە" || n === "سەھەر" || n === "چۈشتىن بۇرۇن" ? t : n === "چۈشتىن كېيىن" || n === "كەچ" ? t + 12 : t >= 11 ? t : t + 12;
		},
		meridiem: function(t, n, r) {
			var e = t * 100 + n;
			return e < 600 ? "يېرىم كېچە" : e < 900 ? "سەھەر" : e < 1130 ? "چۈشتىن بۇرۇن" : e < 1230 ? "چۈش" : e < 1800 ? "چۈشتىن كېيىن" : "كەچ";
		},
		calendar: {
			sameDay: "[بۈگۈن سائەت] LT",
			nextDay: "[ئەتە سائەت] LT",
			nextWeek: "[كېلەركى] dddd [سائەت] LT",
			lastDay: "[تۆنۈگۈن] LT",
			lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s كېيىن",
			past: "%s بۇرۇن",
			s: "نەچچە سېكونت",
			ss: "%d سېكونت",
			m: "بىر مىنۇت",
			mm: "%d مىنۇت",
			h: "بىر سائەت",
			hh: "%d سائەت",
			d: "بىر كۈن",
			dd: "%d كۈن",
			M: "بىر ئاي",
			MM: "%d ئاي",
			y: "بىر يىل",
			yy: "%d يىل"
		},
		dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
		ordinal: function(t, n) {
			switch (n) {
				case "d":
				case "D":
				case "DDD": return t + "-كۈنى";
				case "w":
				case "W": return t + "-ھەپتە";
				default: return t;
			}
		},
		preparse: function(t) {
			return t.replace(/،/g, ",");
		},
		postformat: function(t) {
			return t.replace(/,/g, "،");
		},
		week: {
			dow: 1,
			doy: 7
		}
	});
}), 34);
