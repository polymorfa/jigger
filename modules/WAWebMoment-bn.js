__d("WAWebMoment-bn", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "১",
		2: "২",
		3: "৩",
		4: "৪",
		5: "৫",
		6: "৬",
		7: "৭",
		8: "৮",
		9: "৯",
		0: "০"
	}, s = {
		"১": "1",
		"২": "2",
		"৩": "3",
		"৪": "4",
		"৫": "5",
		"৬": "6",
		"৭": "7",
		"৮": "8",
		"৯": "9",
		"০": "0"
	}, u = r("WAWeb-moment").defineLocale("bn", {
		months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
		monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
		weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
		weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
		weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
		longDateFormat: {
			LT: "A h:mm সময়",
			LTS: "A h:mm:ss সময়",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY, A h:mm সময়",
			LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
		},
		calendar: {
			sameDay: "[আজ] LT",
			nextDay: "[আগামীকাল] LT",
			nextWeek: "dddd, LT",
			lastDay: "[গতকাল] LT",
			lastWeek: "[গত] dddd, LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s পরে",
			past: "%s আগে",
			s: "কয়েক সেকেন্ড",
			ss: "%d সেকেন্ড",
			m: "এক মিনিট",
			mm: "%d মিনিট",
			h: "এক ঘন্টা",
			hh: "%d ঘন্টা",
			d: "এক দিন",
			dd: "%d দিন",
			M: "এক মাস",
			MM: "%d মাস",
			y: "এক বছর",
			yy: "%d বছর"
		},
		preparse: function(t) {
			return t.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
				return s[e];
			});
		},
		postformat: function(n) {
			return n.replace(/\d/g, function(t) {
				return e[t];
			});
		},
		meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
		meridiemHour: function(t, n) {
			return t === 12 && (t = 0), n === "রাত" && t >= 4 || n === "দুপুর" && t < 5 || n === "বিকাল" ? t + 12 : t;
		},
		meridiem: function(t, n, r) {
			return t < 4 ? "রাত" : t < 10 ? "সকাল" : t < 17 ? "দুপুর" : t < 20 ? "বিকাল" : "রাত";
		},
		week: {
			dow: 0,
			doy: 6
		}
	});
}), 34);
