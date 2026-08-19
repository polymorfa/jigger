__d("WAWebMoment-sk", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
	function u(e) {
		return e > 1 && e < 5;
	}
	function c(e, t, n, r) {
		var o = e + " ";
		switch (n) {
			case "s": return t || r ? "pár sekúnd" : "pár sekundami";
			case "ss": return t || r ? o + (u(e) ? "sekundy" : "sekúnd") : o + "sekundami";
			case "m": return t ? "minúta" : r ? "minútu" : "minútou";
			case "mm": return t || r ? o + (u(e) ? "minúty" : "minút") : o + "minútami";
			case "h": return t ? "hodina" : r ? "hodinu" : "hodinou";
			case "hh": return t || r ? o + (u(e) ? "hodiny" : "hodín") : o + "hodinami";
			case "d": return t || r ? "deň" : "dňom";
			case "dd": return t || r ? o + (u(e) ? "dni" : "dní") : o + "dňami";
			case "M": return t || r ? "mesiac" : "mesiacom";
			case "MM": return t || r ? o + (u(e) ? "mesiace" : "mesiacov") : o + "mesiacmi";
			case "y": return t || r ? "rok" : "rokom";
			case "yy": return t || r ? o + (u(e) ? "roky" : "rokov") : o + "rokmi";
		}
	}
	var d = r("WAWeb-moment").defineLocale("sk", {
		months: e,
		monthsShort: s,
		weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
		weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
		weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
		longDateFormat: {
			LT: "H:mm",
			LTS: "H:mm:ss",
			L: "DD.MM.YYYY",
			LL: "D. MMMM YYYY",
			LLL: "D. MMMM YYYY H:mm",
			LLLL: "dddd D. MMMM YYYY H:mm"
		},
		calendar: {
			sameDay: "[dnes o] LT",
			nextDay: "[zajtra o] LT",
			nextWeek: function() {
				switch (this.day()) {
					case 0: return "[v nedeľu o] LT";
					case 1:
					case 2: return "[v] dddd [o] LT";
					case 3: return "[v stredu o] LT";
					case 4: return "[vo štvrtok o] LT";
					case 5: return "[v piatok o] LT";
					case 6: return "[v sobotu o] LT";
				}
			},
			lastDay: "[včera o] LT",
			lastWeek: function() {
				switch (this.day()) {
					case 0: return "[minulú nedeľu o] LT";
					case 1:
					case 2: return "[minulý] dddd [o] LT";
					case 3: return "[minulú stredu o] LT";
					case 4:
					case 5: return "[minulý] dddd [o] LT";
					case 6: return "[minulú sobotu o] LT";
				}
			},
			sameElse: "L"
		},
		relativeTime: {
			future: "za %s",
			past: "pred %s",
			s: c,
			ss: c,
			m: c,
			mm: c,
			h: c,
			hh: c,
			d: c,
			dd: c,
			M: c,
			MM: c,
			y: c,
			yy: c
		},
		dayOfMonthOrdinalParse: /\d{1,2}\./,
		ordinal: "%d.",
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
