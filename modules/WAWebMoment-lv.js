__d("WAWebMoment-lv", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
		m: "minūtes_minūtēm_minūte_minūtes".split("_"),
		mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
		h: "stundas_stundām_stunda_stundas".split("_"),
		hh: "stundas_stundām_stunda_stundas".split("_"),
		d: "dienas_dienām_diena_dienas".split("_"),
		dd: "dienas_dienām_diena_dienas".split("_"),
		M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
		MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
		y: "gada_gadiem_gads_gadi".split("_"),
		yy: "gada_gadiem_gads_gadi".split("_")
	};
	function s(e, t, n) {
		return n ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1];
	}
	function u(t, n, r) {
		return t + " " + s(e[r], t, n);
	}
	function c(t, n, r) {
		return s(e[r], t, n);
	}
	function d(e, t) {
		return t ? "dažas sekundes" : "dažām sekundēm";
	}
	var m = r("WAWeb-moment").defineLocale("lv", {
		months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
		monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
		weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
		weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
		weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
		weekdaysParseExact: !0,
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD.MM.YYYY.",
			LL: "YYYY. [gada] D. MMMM",
			LLL: "YYYY. [gada] D. MMMM, HH:mm",
			LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
		},
		calendar: {
			sameDay: "[Šodien pulksten] LT",
			nextDay: "[Rīt pulksten] LT",
			nextWeek: "dddd [pulksten] LT",
			lastDay: "[Vakar pulksten] LT",
			lastWeek: "[Pagājušā] dddd [pulksten] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "pēc %s",
			past: "pirms %s",
			s: d,
			ss: u,
			m: c,
			mm: u,
			h: c,
			hh: u,
			d: c,
			dd: u,
			M: c,
			MM: u,
			y: c,
			yy: u
		},
		dayOfMonthOrdinalParse: /\d{1,2}\./,
		ordinal: "%d.",
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
