__d("WAWebMoment-uk", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = e.split("_");
		return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
	}
	function s(t, n, r) {
		var o = {
			ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
			mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
			hh: n ? "година_години_годин" : "годину_години_годин",
			dd: "день_дні_днів",
			MM: "місяць_місяці_місяців",
			yy: "рік_роки_років"
		};
		return r === "m" ? n ? "хвилина" : "хвилину" : r === "h" ? n ? "година" : "годину" : t + " " + e(o[r], +t);
	}
	function u(e, t) {
		var n = {
			nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
			accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
			genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
		}, r;
		return e === !0 ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? (r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative", n[r][e.day()]) : n.nominative;
	}
	function c(e) {
		return function() {
			return e + "о" + (this.hours() === 11 ? "б" : "") + "] LT";
		};
	}
	var d = r("WAWeb-moment").defineLocale("uk", {
		months: {
			format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
			standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
		},
		monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
		weekdays: u,
		weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
		weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD.MM.YYYY",
			LL: "D MMMM YYYY р.",
			LLL: "D MMMM YYYY р., HH:mm",
			LLLL: "dddd, D MMMM YYYY р., HH:mm"
		},
		calendar: {
			sameDay: c("[Сьогодні "),
			nextDay: c("[Завтра "),
			lastDay: c("[Вчора "),
			nextWeek: c("[У] dddd ["),
			lastWeek: function() {
				switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6: return c("[Минулої] dddd [").call(this);
					case 1:
					case 2:
					case 4: return c("[Минулого] dddd [").call(this);
				}
			},
			sameElse: "L"
		},
		relativeTime: {
			future: "за %s",
			past: "%s тому",
			s: "декілька секунд",
			ss: s,
			m: s,
			mm: s,
			h: "годину",
			hh: s,
			d: "день",
			dd: s,
			M: "місяць",
			MM: s,
			y: "рік",
			yy: s
		},
		meridiemParse: /ночі|ранку|дня|вечора/,
		isPM: function(t) {
			return /^(дня|вечора)$/.test(t);
		},
		meridiem: function(t, n, r) {
			return t < 4 ? "ночі" : t < 12 ? "ранку" : t < 17 ? "дня" : "вечора";
		},
		dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
		ordinal: function(t, n) {
			switch (n) {
				case "M":
				case "d":
				case "DDD":
				case "w":
				case "W": return t + "-й";
				case "D": return t + "-го";
				default: return t;
			}
		},
		week: {
			dow: 1,
			doy: 7
		}
	});
}), 34);
