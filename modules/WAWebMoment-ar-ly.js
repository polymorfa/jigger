__d("WAWebMoment-ar-ly", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "1",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
		7: "7",
		8: "8",
		9: "9",
		0: "0"
	}, s = function(t) {
		return t === 0 ? 0 : t === 1 ? 1 : t === 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5;
	}, u = {
		s: [
			"أقل من ثانية",
			"ثانية واحدة",
			["ثانيتان", "ثانيتين"],
			"%d ثوان",
			"%d ثانية",
			"%d ثانية"
		],
		m: [
			"أقل من دقيقة",
			"دقيقة واحدة",
			["دقيقتان", "دقيقتين"],
			"%d دقائق",
			"%d دقيقة",
			"%d دقيقة"
		],
		h: [
			"أقل من ساعة",
			"ساعة واحدة",
			["ساعتان", "ساعتين"],
			"%d ساعات",
			"%d ساعة",
			"%d ساعة"
		],
		d: [
			"أقل من يوم",
			"يوم واحد",
			["يومان", "يومين"],
			"%d أيام",
			"%d يومًا",
			"%d يوم"
		],
		M: [
			"أقل من شهر",
			"شهر واحد",
			["شهران", "شهرين"],
			"%d أشهر",
			"%d شهرا",
			"%d شهر"
		],
		y: [
			"أقل من عام",
			"عام واحد",
			["عامان", "عامين"],
			"%d أعوام",
			"%d عامًا",
			"%d عام"
		]
	}, c = function(t) {
		return function(e, n, r, o) {
			var a = s(e), i = u[t][s(e)];
			return a === 2 && (i = i[n ? 0 : 1]), i.replace(/%d/i, e);
		};
	}, d = [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	], m = r("WAWeb-moment").defineLocale("ar-ly", {
		months: d,
		monthsShort: d,
		weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
		weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
		weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
		weekdaysParseExact: !0,
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "D/‏M/‏YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY HH:mm",
			LLLL: "dddd D MMMM YYYY HH:mm"
		},
		meridiemParse: /ص|م/,
		isPM: function(t) {
			return t === "م";
		},
		meridiem: function(t, n, r) {
			return t < 12 ? "ص" : "م";
		},
		calendar: {
			sameDay: "[اليوم عند الساعة] LT",
			nextDay: "[غدًا عند الساعة] LT",
			nextWeek: "dddd [عند الساعة] LT",
			lastDay: "[أمس عند الساعة] LT",
			lastWeek: "dddd [عند الساعة] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "بعد %s",
			past: "منذ %s",
			s: c("s"),
			ss: c("s"),
			m: c("m"),
			mm: c("m"),
			h: c("h"),
			hh: c("h"),
			d: c("d"),
			dd: c("d"),
			M: c("M"),
			MM: c("M"),
			y: c("y"),
			yy: c("y")
		},
		preparse: function(t) {
			return t.replace(/،/g, ",");
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
