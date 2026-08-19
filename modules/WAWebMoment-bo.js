__d("WAWebMoment-bo", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "༡",
		2: "༢",
		3: "༣",
		4: "༤",
		5: "༥",
		6: "༦",
		7: "༧",
		8: "༨",
		9: "༩",
		0: "༠"
	}, s = {
		"༡": "1",
		"༢": "2",
		"༣": "3",
		"༤": "4",
		"༥": "5",
		"༦": "6",
		"༧": "7",
		"༨": "8",
		"༩": "9",
		"༠": "0"
	}, u = r("WAWeb-moment").defineLocale("bo", {
		months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
		monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
		monthsShortRegex: /^(ཟླ་\d{1,2})/,
		monthsParseExact: !0,
		weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
		weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
		weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
		longDateFormat: {
			LT: "A h:mm",
			LTS: "A h:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY, A h:mm",
			LLLL: "dddd, D MMMM YYYY, A h:mm"
		},
		calendar: {
			sameDay: "[དི་རིང] LT",
			nextDay: "[སང་ཉིན] LT",
			nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
			lastDay: "[ཁ་སང] LT",
			lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s ལ་",
			past: "%s སྔན་ལ",
			s: "ལམ་སང",
			ss: "%d སྐར་ཆ།",
			m: "སྐར་མ་གཅིག",
			mm: "%d སྐར་མ",
			h: "ཆུ་ཚོད་གཅིག",
			hh: "%d ཆུ་ཚོད",
			d: "ཉིན་གཅིག",
			dd: "%d ཉིན་",
			M: "ཟླ་བ་གཅིག",
			MM: "%d ཟླ་བ",
			y: "ལོ་གཅིག",
			yy: "%d ལོ"
		},
		preparse: function(t) {
			return t.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
				return s[e];
			});
		},
		postformat: function(n) {
			return n.replace(/\d/g, function(t) {
				return e[t];
			});
		},
		meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
		meridiemHour: function(t, n) {
			return t === 12 && (t = 0), n === "མཚན་མོ" && t >= 4 || n === "ཉིན་གུང" && t < 5 || n === "དགོང་དག" ? t + 12 : t;
		},
		meridiem: function(t, n, r) {
			return t < 4 ? "མཚན་མོ" : t < 10 ? "ཞོགས་ཀས" : t < 17 ? "ཉིན་གུང" : t < 20 ? "དགོང་དག" : "མཚན་མོ";
		},
		week: {
			dow: 0,
			doy: 6
		}
	});
}), 34);
