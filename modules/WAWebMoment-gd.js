__d("WAWebMoment-gd", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = [
		"Am Faoilleach",
		"An Gearran",
		"Am Màrt",
		"An Giblean",
		"An Cèitean",
		"An t-Ògmhios",
		"An t-Iuchar",
		"An Lùnastal",
		"An t-Sultain",
		"An Dàmhair",
		"An t-Samhain",
		"An Dùbhlachd"
	], s = [
		"Faoi",
		"Gear",
		"Màrt",
		"Gibl",
		"Cèit",
		"Ògmh",
		"Iuch",
		"Lùn",
		"Sult",
		"Dàmh",
		"Samh",
		"Dùbh"
	], u = [
		"Didòmhnaich",
		"Diluain",
		"Dimàirt",
		"Diciadain",
		"Diardaoin",
		"Dihaoine",
		"Disathairne"
	], c = [
		"Did",
		"Dil",
		"Dim",
		"Dic",
		"Dia",
		"Dih",
		"Dis"
	], d = [
		"Dò",
		"Lu",
		"Mà",
		"Ci",
		"Ar",
		"Ha",
		"Sa"
	], m = r("WAWeb-moment").defineLocale("gd", {
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
			sameDay: "[An-diugh aig] LT",
			nextDay: "[A-màireach aig] LT",
			nextWeek: "dddd [aig] LT",
			lastDay: "[An-dè aig] LT",
			lastWeek: "dddd [seo chaidh] [aig] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "ann an %s",
			past: "bho chionn %s",
			s: "beagan diogan",
			ss: "%d diogan",
			m: "mionaid",
			mm: "%d mionaidean",
			h: "uair",
			hh: "%d uairean",
			d: "latha",
			dd: "%d latha",
			M: "mìos",
			MM: "%d mìosan",
			y: "bliadhna",
			yy: "%d bliadhna"
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
