__d("WAWebMoment-ga", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = [
		"Eanáir",
		"Feabhra",
		"Márta",
		"Aibreán",
		"Bealtaine",
		"Meitheamh",
		"Iúil",
		"Lúnasa",
		"Meán Fómhair",
		"Deireadh Fómhair",
		"Samhain",
		"Nollaig"
	], s = [
		"Ean",
		"Feabh",
		"Márt",
		"Aib",
		"Beal",
		"Meith",
		"Iúil",
		"Lún",
		"M.F.",
		"D.F.",
		"Samh",
		"Noll"
	], u = [
		"Dé Domhnaigh",
		"Dé Luain",
		"Dé Máirt",
		"Dé Céadaoin",
		"Déardaoin",
		"Dé hAoine",
		"Dé Sathairn"
	], c = [
		"Domh",
		"Luan",
		"Máirt",
		"Céad",
		"Déar",
		"Aoine",
		"Sath"
	], d = [
		"Do",
		"Lu",
		"Má",
		"Cé",
		"Dé",
		"A",
		"Sa"
	], m = r("WAWeb-moment").defineLocale("ga", {
		months: e,
		monthsShort: s,
		monthsParseExact: !0,
		weekdays: u,
		weekdaysShort: c,
		weekdaysMin: d,
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY HH:mm",
			LLLL: "dddd, D MMMM YYYY HH:mm"
		},
		calendar: {
			sameDay: "[Inniu ag] LT",
			nextDay: "[Amárach ag] LT",
			nextWeek: "dddd [ag] LT",
			lastDay: "[Inné ag] LT",
			lastWeek: "dddd [seo caite] [ag] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "i %s",
			past: "%s ó shin",
			s: "cúpla soicind",
			ss: "%d soicind",
			m: "nóiméad",
			mm: "%d nóiméad",
			h: "uair an chloig",
			hh: "%d uair an chloig",
			d: "lá",
			dd: "%d lá",
			M: "mí",
			MM: "%d míonna",
			y: "bliain",
			yy: "%d bliain"
		},
		dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
		ordinal: function(t) {
			var e = t === 1 ? "d" : t % 10 === 2 ? "na" : "mh";
			return t + e;
		},
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
