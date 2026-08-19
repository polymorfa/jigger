__d("WAWebMoment-sr-cyrl", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		words: {
			ss: [
				"секунда",
				"секунде",
				"секунди"
			],
			m: ["један минут", "једног минута"],
			mm: [
				"минут",
				"минута",
				"минута"
			],
			h: ["један сат", "једног сата"],
			hh: [
				"сат",
				"сата",
				"сати"
			],
			d: ["један дан", "једног дана"],
			dd: [
				"дан",
				"дана",
				"дана"
			],
			M: ["један месец", "једног месеца"],
			MM: [
				"месец",
				"месеца",
				"месеци"
			],
			y: ["једну годину", "једне године"],
			yy: [
				"годину",
				"године",
				"година"
			]
		},
		correctGrammaticalCase: function(t, n) {
			return t % 10 >= 1 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? t % 10 === 1 ? n[0] : n[1] : n[2];
		},
		translate: function(n, r, o, a) {
			var t = e.words[o], i;
			return o.length === 1 ? o === "y" && r ? "једна година" : a || r ? t[0] : t[1] : (i = e.correctGrammaticalCase(n, t), o === "yy" && r && i === "годину" ? n + " година" : n + " " + i);
		}
	}, s = r("WAWeb-moment").defineLocale("sr-cyrl", {
		months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
		monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
		monthsParseExact: !0,
		weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
		weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
		weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
		weekdaysParseExact: !0,
		longDateFormat: {
			LT: "H:mm",
			LTS: "H:mm:ss",
			L: "D. M. YYYY.",
			LL: "D. MMMM YYYY.",
			LLL: "D. MMMM YYYY. H:mm",
			LLLL: "dddd, D. MMMM YYYY. H:mm"
		},
		calendar: {
			sameDay: "[данас у] LT",
			nextDay: "[сутра у] LT",
			nextWeek: function() {
				switch (this.day()) {
					case 0: return "[у] [недељу] [у] LT";
					case 3: return "[у] [среду] [у] LT";
					case 6: return "[у] [суботу] [у] LT";
					case 1:
					case 2:
					case 4:
					case 5: return "[у] dddd [у] LT";
				}
			},
			lastDay: "[јуче у] LT",
			lastWeek: function() {
				var e = [
					"[прошле] [недеље] [у] LT",
					"[прошлог] [понедељка] [у] LT",
					"[прошлог] [уторка] [у] LT",
					"[прошле] [среде] [у] LT",
					"[прошлог] [четвртка] [у] LT",
					"[прошлог] [петка] [у] LT",
					"[прошле] [суботе] [у] LT"
				];
				return e[this.day()];
			},
			sameElse: "L"
		},
		relativeTime: {
			future: "за %s",
			past: "пре %s",
			s: "неколико секунди",
			ss: e.translate,
			m: e.translate,
			mm: e.translate,
			h: e.translate,
			hh: e.translate,
			d: e.translate,
			dd: e.translate,
			M: e.translate,
			MM: e.translate,
			y: e.translate,
			yy: e.translate
		},
		dayOfMonthOrdinalParse: /\d{1,2}\./,
		ordinal: "%d.",
		week: {
			dow: 1,
			doy: 7
		}
	});
}), 34);
