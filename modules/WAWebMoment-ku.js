__d("WAWebMoment-ku", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "١",
		2: "٢",
		3: "٣",
		4: "٤",
		5: "٥",
		6: "٦",
		7: "٧",
		8: "٨",
		9: "٩",
		0: "٠"
	}, s = {
		"١": "1",
		"٢": "2",
		"٣": "3",
		"٤": "4",
		"٥": "5",
		"٦": "6",
		"٧": "7",
		"٨": "8",
		"٩": "9",
		"٠": "0"
	}, u = [
		"کانونی دووەم",
		"شوبات",
		"ئازار",
		"نیسان",
		"ئایار",
		"حوزەیران",
		"تەمموز",
		"ئاب",
		"ئەیلوول",
		"تشرینی یەكەم",
		"تشرینی دووەم",
		"كانونی یەکەم"
	], c = r("WAWeb-moment").defineLocale("ku", {
		months: u,
		monthsShort: u,
		weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
		weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
		weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
		weekdaysParseExact: !0,
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY HH:mm",
			LLLL: "dddd, D MMMM YYYY HH:mm"
		},
		meridiemParse: /ئێواره‌|به‌یانی/,
		isPM: function(t) {
			return /ئێواره‌/.test(t);
		},
		meridiem: function(t, n, r) {
			return t < 12 ? "به‌یانی" : "ئێواره‌";
		},
		calendar: {
			sameDay: "[ئه‌مرۆ كاتژمێر] LT",
			nextDay: "[به‌یانی كاتژمێر] LT",
			nextWeek: "dddd [كاتژمێر] LT",
			lastDay: "[دوێنێ كاتژمێر] LT",
			lastWeek: "dddd [كاتژمێر] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "له‌ %s",
			past: "%s",
			s: "چه‌ند چركه‌یه‌ك",
			ss: "چركه‌ %d",
			m: "یه‌ك خوله‌ك",
			mm: "%d خوله‌ك",
			h: "یه‌ك كاتژمێر",
			hh: "%d كاتژمێر",
			d: "یه‌ك ڕۆژ",
			dd: "%d ڕۆژ",
			M: "یه‌ك مانگ",
			MM: "%d مانگ",
			y: "یه‌ك ساڵ",
			yy: "%d ساڵ"
		},
		preparse: function(t) {
			return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
				return s[e];
			}).replace(/،/g, ",");
		},
		postformat: function(n) {
			return n.replace(/\d/g, function(t) {
				return e[t];
			}).replace(/,/g, "،");
		},
		week: {
			dow: 6,
			doy: 12
		}
	});
}), 34);
