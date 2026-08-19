__d("WAWebMoment-mk", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = r("WAWeb-moment").defineLocale("mk", {
		months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
		monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
		weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
		weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
		weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
		longDateFormat: {
			LT: "H:mm",
			LTS: "H:mm:ss",
			L: "D.MM.YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY H:mm",
			LLLL: "dddd, D MMMM YYYY H:mm"
		},
		calendar: {
			sameDay: "[Денес во] LT",
			nextDay: "[Утре во] LT",
			nextWeek: "[Во] dddd [во] LT",
			lastDay: "[Вчера во] LT",
			lastWeek: function() {
				switch (this.day()) {
					case 0:
					case 3:
					case 6: return "[Изминатата] dddd [во] LT";
					case 1:
					case 2:
					case 4:
					case 5: return "[Изминатиот] dddd [во] LT";
				}
			},
			sameElse: "L"
		},
		relativeTime: {
			future: "за %s",
			past: "пред %s",
			s: "неколку секунди",
			ss: "%d секунди",
			m: "една минута",
			mm: "%d минути",
			h: "еден час",
			hh: "%d часа",
			d: "еден ден",
			dd: "%d дена",
			M: "еден месец",
			MM: "%d месеци",
			y: "една година",
			yy: "%d години"
		},
		dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
		ordinal: function(t) {
			var e = t % 10, n = t % 100;
			return t === 0 ? t + "-ев" : n === 0 ? t + "-ен" : n > 10 && n < 20 ? t + "-ти" : e === 1 ? t + "-ви" : e === 2 ? t + "-ри" : e === 7 || e === 8 ? t + "-ми" : t + "-ти";
		},
		week: {
			dow: 1,
			doy: 7
		}
	});
}), 34);
