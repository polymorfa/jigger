__d("WAWebMoment-he", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = r("WAWeb-moment").defineLocale("he", {
		months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
		monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
		weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
		weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
		weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D [ב]MMMM YYYY",
			LLL: "D [ב]MMMM YYYY HH:mm",
			LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
			l: "D/M/YYYY",
			ll: "D MMM YYYY",
			lll: "D MMM YYYY HH:mm",
			llll: "ddd, D MMM YYYY HH:mm"
		},
		calendar: {
			sameDay: "[היום ב־]LT",
			nextDay: "[מחר ב־]LT",
			nextWeek: "dddd [בשעה] LT",
			lastDay: "[אתמול ב־]LT",
			lastWeek: "[ביום] dddd [האחרון בשעה] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "בעוד %s",
			past: "לפני %s",
			s: "מספר שניות",
			ss: "%d שניות",
			m: "דקה",
			mm: "%d דקות",
			h: "שעה",
			hh: function(t) {
				return t === 2 ? "שעתיים" : t + " שעות";
			},
			d: "יום",
			dd: function(t) {
				return t === 2 ? "יומיים" : t + " ימים";
			},
			M: "חודש",
			MM: function(t) {
				return t === 2 ? "חודשיים" : t + " חודשים";
			},
			y: "שנה",
			yy: function(t) {
				return t === 2 ? "שנתיים" : t % 10 === 0 && t !== 10 ? t + " שנה" : t + " שנים";
			}
		},
		meridiemParse: /אחה\"צ|לפנה\"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
		isPM: function(t) {
			return /^(אחה\"צ|אחרי הצהריים|בערב)$/.test(t);
		},
		meridiem: function(t, n, r) {
			return t < 5 ? "לפנות בוקר" : t < 10 ? "בבוקר" : t < 12 ? r ? "לפנה\"צ" : "לפני הצהריים" : t < 18 ? r ? "אחה\"צ" : "אחרי הצהריים" : "בערב";
		}
	});
}), 34);
