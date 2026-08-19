__d("WAWebMoment-kn", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = r("WAWeb-moment").defineLocale("kn", {
		months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
		monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
		monthsParseExact: !0,
		weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
		weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
		weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
		longDateFormat: {
			LT: "A h:mm",
			LTS: "A h:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY, A h:mm",
			LLLL: "dddd, D MMMM YYYY, A h:mm"
		},
		calendar: {
			sameDay: "[ಇಂದು] LT",
			nextDay: "[ನಾಳೆ] LT",
			nextWeek: "dddd, LT",
			lastDay: "[ನಿನ್ನೆ] LT",
			lastWeek: "[ಕೊನೆಯ] dddd, LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s ನಂತರ",
			past: "%s ಹಿಂದೆ",
			s: "ಕೆಲವು ಕ್ಷಣಗಳು",
			ss: "%d ಸೆಕೆಂಡುಗಳು",
			m: "ಒಂದು ನಿಮಿಷ",
			mm: "%d ನಿಮಿಷ",
			h: "ಒಂದು ಗಂಟೆ",
			hh: "%d ಗಂಟೆ",
			d: "ಒಂದು ದಿನ",
			dd: "%d ದಿನ",
			M: "ಒಂದು ತಿಂಗಳು",
			MM: "%d ತಿಂಗಳು",
			y: "ಒಂದು ವರ್ಷ",
			yy: "%d ವರ್ಷ"
		},
		meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
		meridiemHour: function(t, n) {
			if (t === 12 && (t = 0), n === "ರಾತ್ರಿ") return t < 4 ? t : t + 12;
			if (n === "ಬೆಳಿಗ್ಗೆ") return t;
			if (n === "ಮಧ್ಯಾಹ್ನ") return t >= 10 ? t : t + 12;
			if (n === "ಸಂಜೆ") return t + 12;
		},
		meridiem: function(t, n, r) {
			return t < 4 ? "ರಾತ್ರಿ" : t < 10 ? "ಬೆಳಿಗ್ಗೆ" : t < 17 ? "ಮಧ್ಯಾಹ್ನ" : t < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
		},
		dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
		ordinal: function(t) {
			return t + "ನೇ";
		},
		week: {
			dow: 0,
			doy: 6
		}
	});
}), 34);
