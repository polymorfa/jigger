__d("WAWebMoment-tlh", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
	function s(e) {
		var t = e;
		return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq", t;
	}
	function u(e) {
		var t = e;
		return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret", t;
	}
	function c(e, t, n, r) {
		var o = d(e);
		switch (n) {
			case "ss": return o + " lup";
			case "mm": return o + " tup";
			case "hh": return o + " rep";
			case "dd": return o + " jaj";
			case "MM": return o + " jar";
			case "yy": return o + " DIS";
		}
	}
	function d(t) {
		var n = Math.floor(t % 1e3 / 100), r = Math.floor(t % 100 / 10), o = t % 10, a = "";
		return n > 0 && (a += e[n] + "vatlh"), r > 0 && (a += (a !== "" ? " " : "") + e[r] + "maH"), o > 0 && (a += (a !== "" ? " " : "") + e[o]), a === "" ? "pagh" : a;
	}
	var m = r("WAWeb-moment").defineLocale("tlh", {
		months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
		monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
		monthsParseExact: !0,
		weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
		weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
		weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD.MM.YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY HH:mm",
			LLLL: "dddd, D MMMM YYYY HH:mm"
		},
		calendar: {
			sameDay: "[DaHjaj] LT",
			nextDay: "[wa’leS] LT",
			nextWeek: "LLL",
			lastDay: "[wa’Hu’] LT",
			lastWeek: "LLL",
			sameElse: "L"
		},
		relativeTime: {
			future: s,
			past: u,
			s: "puS lup",
			ss: c,
			m: "wa’ tup",
			mm: c,
			h: "wa’ rep",
			hh: c,
			d: "wa’ jaj",
			dd: c,
			M: "wa’ jar",
			MM: c,
			y: "wa’ DIS",
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
