__d("WAWebMoment-pl", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), u = [
		/^sty/i,
		/^lut/i,
		/^mar/i,
		/^kwi/i,
		/^maj/i,
		/^cze/i,
		/^lip/i,
		/^sie/i,
		/^wrz/i,
		/^paź/i,
		/^lis/i,
		/^gru/i
	];
	function c(e) {
		return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1;
	}
	function d(e, t, n) {
		var r = e + " ";
		switch (n) {
			case "ss": return r + (c(e) ? "sekundy" : "sekund");
			case "m": return t ? "minuta" : "minutę";
			case "mm": return r + (c(e) ? "minuty" : "minut");
			case "h": return t ? "godzina" : "godzinę";
			case "hh": return r + (c(e) ? "godziny" : "godzin");
			case "ww": return r + (c(e) ? "tygodnie" : "tygodni");
			case "MM": return r + (c(e) ? "miesiące" : "miesięcy");
			case "yy": return r + (c(e) ? "lata" : "lat");
		}
	}
	var m = r("WAWeb-moment").defineLocale("pl", {
		months: function(n, r) {
			return n ? /D MMMM/.test(r) ? s[n.month()] : e[n.month()] : e;
		},
		monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
		monthsParse: u,
		longMonthsParse: u,
		shortMonthsParse: u,
		weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
		weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
		weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD.MM.YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY HH:mm",
			LLLL: "dddd, D MMMM YYYY HH:mm"
		},
		calendar: {
			sameDay: "[Dziś o] LT",
			nextDay: "[Jutro o] LT",
			nextWeek: function() {
				switch (this.day()) {
					case 0: return "[W niedzielę o] LT";
					case 2: return "[We wtorek o] LT";
					case 3: return "[W środę o] LT";
					case 6: return "[W sobotę o] LT";
					default: return "[W] dddd [o] LT";
				}
			},
			lastDay: "[Wczoraj o] LT",
			lastWeek: function() {
				switch (this.day()) {
					case 0: return "[W zeszłą niedzielę o] LT";
					case 3: return "[W zeszłą środę o] LT";
					case 6: return "[W zeszłą sobotę o] LT";
					default: return "[W zeszły] dddd [o] LT";
				}
			},
			sameElse: "L"
		},
		relativeTime: {
			future: "za %s",
			past: "%s temu",
			s: "kilka sekund",
			ss: d,
			m: d,
			mm: d,
			h: d,
			hh: d,
			d: "1 dzień",
			dd: "%d dni",
			w: "tydzień",
			ww: d,
			M: "miesiąc",
			MM: d,
			y: "rok",
			yy: d
		},
		dayOfMonthOrdinalParse: /\d{1,2}\./,
		ordinal: "%d.",
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
