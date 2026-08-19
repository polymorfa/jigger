__d("WAWebMoment-is", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		return e % 100 === 11 ? !0 : e % 10 !== 1;
	}
	function s(t, n, r, o) {
		var a = t + " ";
		switch (r) {
			case "s": return n || o ? "nokkrar sekúndur" : "nokkrum sekúndum";
			case "ss": return e(t) ? a + (n || o ? "sekúndur" : "sekúndum") : a + "sekúnda";
			case "m": return n ? "mínúta" : "mínútu";
			case "mm": return e(t) ? a + (n || o ? "mínútur" : "mínútum") : n ? a + "mínúta" : a + "mínútu";
			case "hh": return e(t) ? a + (n || o ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
			case "d": return n ? "dagur" : o ? "dag" : "degi";
			case "dd": return e(t) ? n ? a + "dagar" : a + (o ? "daga" : "dögum") : n ? a + "dagur" : a + (o ? "dag" : "degi");
			case "M": return n ? "mánuður" : o ? "mánuð" : "mánuði";
			case "MM": return e(t) ? n ? a + "mánuðir" : a + (o ? "mánuði" : "mánuðum") : n ? a + "mánuður" : a + (o ? "mánuð" : "mánuði");
			case "y": return n || o ? "ár" : "ári";
			case "yy": return e(t) ? a + (n || o ? "ár" : "árum") : a + (n || o ? "ár" : "ári");
		}
	}
	var u = r("WAWeb-moment").defineLocale("is", {
		months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
		monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
		weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
		weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
		weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
		longDateFormat: {
			LT: "H:mm",
			LTS: "H:mm:ss",
			L: "DD.MM.YYYY",
			LL: "D. MMMM YYYY",
			LLL: "D. MMMM YYYY [kl.] H:mm",
			LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
		},
		calendar: {
			sameDay: "[í dag kl.] LT",
			nextDay: "[á morgun kl.] LT",
			nextWeek: "dddd [kl.] LT",
			lastDay: "[í gær kl.] LT",
			lastWeek: "[síðasta] dddd [kl.] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "eftir %s",
			past: "fyrir %s síðan",
			s,
			ss: s,
			m: s,
			mm: s,
			h: "klukkustund",
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
