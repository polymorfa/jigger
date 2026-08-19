__d("WAWebMoment-ar-dz", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = function(t) {
		return t === 0 ? 0 : t === 1 ? 1 : t === 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5;
	}, s = {
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
	}, u = function(n) {
		return function(t, r, o, a) {
			var i = e(t), l = s[n][e(t)];
			return i === 2 && (l = l[r ? 0 : 1]), l.replace(/%d/i, t);
		};
	}, c = [
		"جانفي",
		"فيفري",
		"مارس",
		"أفريل",
		"ماي",
		"جوان",
		"جويلية",
		"أوت",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	], d = r("WAWeb-moment").defineLocale("ar-dz", {
		months: c,
		monthsShort: c,
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
			s: u("s"),
			ss: u("s"),
			m: u("m"),
			mm: u("m"),
			h: u("h"),
			hh: u("h"),
			d: u("d"),
			dd: u("d"),
			M: u("M"),
			MM: u("M"),
			y: u("y"),
			yy: u("y")
		},
		postformat: function(t) {
			return t.replace(/,/g, "،");
		},
		week: {
			dow: 0,
			doy: 4
		}
	});
}), 34);
