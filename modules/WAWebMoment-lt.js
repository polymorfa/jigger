__d("WAWebMoment-lt", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		ss: "sekundė_sekundžių_sekundes",
		m: "minutė_minutės_minutę",
		mm: "minutės_minučių_minutes",
		h: "valanda_valandos_valandą",
		hh: "valandos_valandų_valandas",
		d: "diena_dienos_dieną",
		dd: "dienos_dienų_dienas",
		M: "mėnuo_mėnesio_mėnesį",
		MM: "mėnesiai_mėnesių_mėnesius",
		y: "metai_metų_metus",
		yy: "metai_metų_metus"
	};
	function s(e, t, n, r) {
		return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes";
	}
	function u(e, t, n, r) {
		return t ? d(n)[0] : r ? d(n)[1] : d(n)[2];
	}
	function c(e) {
		return e % 10 === 0 || e > 10 && e < 20;
	}
	function d(t) {
		return e[t].split("_");
	}
	function m(e, t, n, r) {
		var o = e + " ";
		return e === 1 ? o + u(e, t, n[0], r) : t ? o + (c(e) ? d(n)[1] : d(n)[0]) : r ? o + d(n)[1] : o + (c(e) ? d(n)[1] : d(n)[2]);
	}
	var p = r("WAWeb-moment").defineLocale("lt", {
		months: {
			format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
			standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
			isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
		},
		monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
		weekdays: {
			format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
			standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
			isFormat: /dddd HH:mm/
		},
		weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
		weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
		weekdaysParseExact: !0,
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "YYYY-MM-DD",
			LL: "YYYY [m.] MMMM D [d.]",
			LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
			LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
			l: "YYYY-MM-DD",
			ll: "YYYY [m.] MMMM D [d.]",
			lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
			llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
		},
		calendar: {
			sameDay: "[Šiandien] LT",
			nextDay: "[Rytoj] LT",
			nextWeek: "dddd LT",
			lastDay: "[Vakar] LT",
			lastWeek: "[Praėjusį] dddd LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "po %s",
			past: "prieš %s",
			s,
			ss: m,
			m: u,
			mm: m,
			h: u,
			hh: m,
			d: u,
			dd: m,
			M: u,
			MM: m,
			y: u,
			yy: m
		},
		dayOfMonthOrdinalParse: /\d{1,2}-oji/,
		ordinal: function(t) {
			return t + "-oji";
		},
		week: {
			dow: 1,
			doy: 4
		}
	});
}), 34);
