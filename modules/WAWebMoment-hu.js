__d("WAWebMoment-hu", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
	function s(e, t, n, r) {
		var o = e;
		switch (n) {
			case "s": return r || t ? "néhány másodperc" : "néhány másodperce";
			case "ss": return o + (r || t) ? " másodperc" : " másodperce";
			case "m": return "egy" + (r || t ? " perc" : " perce");
			case "mm": return o + (r || t ? " perc" : " perce");
			case "h": return "egy" + (r || t ? " óra" : " órája");
			case "hh": return o + (r || t ? " óra" : " órája");
			case "d": return "egy" + (r || t ? " nap" : " napja");
			case "dd": return o + (r || t ? " nap" : " napja");
			case "M": return "egy" + (r || t ? " hónap" : " hónapja");
			case "MM": return o + (r || t ? " hónap" : " hónapja");
			case "y": return "egy" + (r || t ? " év" : " éve");
			case "yy": return o + (r || t ? " év" : " éve");
		}
		return "";
	}
	function u(t) {
		return (t ? "" : "[múlt] ") + "[" + e[this.day()] + "] LT[-kor]";
	}
	var c = r("WAWeb-moment").defineLocale("hu", {
		months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
		monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
		monthsParseExact: !0,
		weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
		weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
		weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
		longDateFormat: {
			LT: "H:mm",
			LTS: "H:mm:ss",
			L: "YYYY.MM.DD.",
			LL: "YYYY. MMMM D.",
			LLL: "YYYY. MMMM D. H:mm",
			LLLL: "YYYY. MMMM D., dddd H:mm"
		},
		meridiemParse: /de|du/i,
		isPM: function(t) {
			return t.charAt(1).toLowerCase() === "u";
		},
		meridiem: function(t, n, r) {
			return t < 12 ? r === !0 ? "de" : "DE" : r === !0 ? "du" : "DU";
		},
		calendar: {
			sameDay: "[ma] LT[-kor]",
			nextDay: "[holnap] LT[-kor]",
			nextWeek: function() {
				return u.call(this, !0);
			},
			lastDay: "[tegnap] LT[-kor]",
			lastWeek: function() {
				return u.call(this, !1);
			},
			sameElse: "L"
		},
		relativeTime: {
			future: "%s múlva",
			past: "%s",
			s,
			ss: s,
			m: s,
			mm: s,
			h: s,
			hh: s,
			d: s,
			dd: s,
			M: s,
			MM: s,
			y: s,
			yy: s
		},
		dayOfMonthOrdinalParse: /\d{1,2}\./,
		ordinal: "%d.",
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
