__d("WAWebMoment-pa-in", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "੧",
		2: "੨",
		3: "੩",
		4: "੪",
		5: "੫",
		6: "੬",
		7: "੭",
		8: "੮",
		9: "੯",
		0: "੦"
	}, s = {
		"੧": "1",
		"੨": "2",
		"੩": "3",
		"੪": "4",
		"੫": "5",
		"੬": "6",
		"੭": "7",
		"੮": "8",
		"੯": "9",
		"੦": "0"
	}, u = r("WAWeb-moment").defineLocale("pa-in", {
		months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
		monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
		weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
		weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
		weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
		longDateFormat: {
			LT: "A h:mm ਵਜੇ",
			LTS: "A h:mm:ss ਵਜੇ",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
			LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
		},
		calendar: {
			sameDay: "[ਅਜ] LT",
			nextDay: "[ਕਲ] LT",
			nextWeek: "[ਅਗਲਾ] dddd, LT",
			lastDay: "[ਕਲ] LT",
			lastWeek: "[ਪਿਛਲੇ] dddd, LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s ਵਿੱਚ",
			past: "%s ਪਿਛਲੇ",
			s: "ਕੁਝ ਸਕਿੰਟ",
			ss: "%d ਸਕਿੰਟ",
			m: "ਇਕ ਮਿੰਟ",
			mm: "%d ਮਿੰਟ",
			h: "ਇੱਕ ਘੰਟਾ",
			hh: "%d ਘੰਟੇ",
			d: "ਇੱਕ ਦਿਨ",
			dd: "%d ਦਿਨ",
			M: "ਇੱਕ ਮਹੀਨਾ",
			MM: "%d ਮਹੀਨੇ",
			y: "ਇੱਕ ਸਾਲ",
			yy: "%d ਸਾਲ"
		},
		preparse: function(t) {
			return t.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
				return s[e];
			});
		},
		postformat: function(n) {
			return n.replace(/\d/g, function(t) {
				return e[t];
			});
		},
		meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
		meridiemHour: function(t, n) {
			if (t === 12 && (t = 0), n === "ਰਾਤ") return t < 4 ? t : t + 12;
			if (n === "ਸਵੇਰ") return t;
			if (n === "ਦੁਪਹਿਰ") return t >= 10 ? t : t + 12;
			if (n === "ਸ਼ਾਮ") return t + 12;
		},
		meridiem: function(t, n, r) {
			return t < 4 ? "ਰਾਤ" : t < 10 ? "ਸਵੇਰ" : t < 17 ? "ਦੁਪਹਿਰ" : t < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
		},
		week: {
			dow: 0,
			doy: 6
		}
	});
}), 34);
