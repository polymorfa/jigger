__d("WAFlowsDatePickerUtils", ["fbt", "WAFlowsLocalDate"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = "yyyy-MM-dd", u = "YYYY-MM-DD", c = /^\d{4}-\d{2}-\d{2}$/, d = {
		min: 1900,
		max: 2100
	}, m = function(t) {
		var e = t.locale, n = t.maxDateValue, r = t.minDateValue, o = t.month, a = t.year;
		return new Array(new Date(a, o + 1, 0).getDate()).fill(1).reduce(function(t, i, l) {
			return h({
				day: i + l,
				month: o,
				year: a,
				minDateValue: r,
				maxDateValue: n
			}) ? t.concat({
				value: i + l,
				label: (i + l).toLocaleString(e)
			}) : t;
		}, []);
	}, p = function(t) {
		var e = t.maxDateValue, n = t.minDateValue, r = t.year;
		return g().reduce(function(t, o, a) {
			return y({
				month: a,
				year: r,
				minDateValue: n,
				maxDateValue: e
			}) ? t.concat({
				value: a,
				label: s._(
					/*BTDS*/
					"",
					[s._param("month", o)]
				)
			}) : t;
		}, []);
	}, _ = function(t) {
		var e = t.locale, n = t.maxDateValue, r = t.minDateValue, o = f({
			minDateValue: r,
			maxDateValue: n
		}), a = o.maxYear, i = o.minYear;
		return new Array(a - i + 1).fill(i).map(function(t, n) {
			return {
				value: t + n,
				label: new Date(t + n, 0, 1).toLocaleString(e, { year: "numeric" })
			};
		});
	}, f = function(t) {
		var e = t.maxDateValue, n = t.minDateValue, r = {
			minDay: 0,
			minMonth: 0,
			minYear: d.min,
			maxDay: 31,
			maxMonth: 11,
			maxYear: d.max
		};
		if (n !== void 0) {
			var o = new Date(n);
			r.minDay = o.getDate(), r.minMonth = o.getMonth(), r.minYear = o.getFullYear();
		}
		if (e !== void 0) {
			var a = new Date(e);
			r.maxDay = a.getDate(), r.maxMonth = a.getMonth(), r.maxYear = a.getFullYear();
		}
		return r;
	}, g = function() {
		return [
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			)
		];
	}, h = function(t) {
		var e = t.day, n = t.maxDateValue, r = t.minDateValue, o = t.month, a = t.year, i = f({
			minDateValue: r,
			maxDateValue: n
		}), l = i.maxDay, s = i.maxMonth, u = i.maxYear, c = i.minDay, d = i.minMonth, m = i.minYear;
		return (a > m || a === m && (o > d || o === d && e >= c)) && (a < u || a === u && (o < s || o === s && e <= l));
	}, y = function(t) {
		var e = t.maxDateValue, n = t.minDateValue, r = t.month, o = t.year, a = f({
			minDateValue: n,
			maxDateValue: e
		}), i = a.maxMonth, l = a.maxYear, s = a.minMonth, u = a.minYear;
		return (o > u || o === u && r >= s) && (o < l || o === l && r <= i);
	}, C = function(t, n) {
		n === void 0 && (n = [
			"year",
			"month",
			"day"
		]);
		var e = new Intl.DateTimeFormat(t).formatToParts();
		return e.reduce(function(e, t) {
			var r = n.find(function(e) {
				return e === t.type;
			});
			return r != null ? e.concat(r) : e;
		}, []);
	}, b = function(t, n, r) {
		var e = new Date(r, n, t), o = e.getDate();
		return o === t ? o : new Date(r, n + 1, 0).getDate();
	}, v = function(t) {
		return S(t) ? Number(t) : void 0;
	}, S = function(t) {
		return typeof t == "string" && /^-?[0-9]+$/.test(t);
	}, R = function(t) {
		return t == null || t === "" || typeof t != "string" ? void 0 : L(t);
	}, L = function(t) {
		var e = new Date(t), n = e.getTimezoneOffset() * 6e4;
		return new Date(e.getTime() + n).getTime();
	}, E = function(t) {
		try {
			return typeof t == "string" && t.length ? r("WAFlowsLocalDate").fromISOString(t) : void 0;
		} catch (e) {
			return;
		}
	}, k = function(t, n, r) {
		if (typeof t == "string" && t.length) {
			var e = E(t);
			if (e) {
				var o = new Date(e.year, e.month - 1, e.day);
				return T(o, n, r);
			} else return "";
		} else return "";
	}, I = function(t) {
		var e = new Date(t), n = e.getFullYear(), r = (e.getMonth() + 1).toString(10).padStart(2, "0"), o = e.getDate().toString(10).padStart(2, "0");
		return n + "-" + r + "-" + o;
	};
	function T(e, t, n) {
		var r = g(), o = e.getDate().toLocaleString(t), a = String(r.find(function(t, n) {
			return n === e.getMonth();
		})), i = e.toLocaleString(t, { year: "numeric" }), l = C(t, n), s = {
			day: o,
			month: a,
			year: i
		}, u = l.map(function(e) {
			return s[e];
		});
		return "" + u.join(" ");
	}
	var D = function(t) {
		return typeof t == "string" && c.test(t);
	};
	l.DEFAULT_DATE_FORMAT_ANDROID = e, l.DEFAULT_DATE_FORMAT_WEB = u, l.getDays = m, l.getMonths = p, l.getYears = _, l.getMonthLabels = g, l.getDatePartsForLocale = C, l.getClosestValidDay = b, l.getTimestampFromStr = v, l.isValidStrTimestamp = S, l.getTimestampFromDateStr = R, l.getLocalDate = E, l.getDisplayDate = k, l.getFormattedDateFromTimestamp = I, l.formatDisplayDate = T, l.isValidFormattedDateStr = D;
}), 226);
