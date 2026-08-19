__d("WAFlowsCalendarPickerDialogNavigationWheels.react", [
	"LocalDate",
	"WAFlowsCalendarPickerDialogNavigationUtils",
	"WAFlowsDatePickerUtils",
	"WAFlowsDatePickerWheel.react",
	"WAFlowsEnvContext.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = {
		content: "\"\"",
		position: "absolute",
		zIndex: 1,
		backgroundColor: "var(--WDS-lines-divider)",
		left: 0,
		width: "100%"
	};
	function p(e) {
		var t = e.focusDate, n = e.onFocusDateChange, a = e.restraint, i = o("WAFlowsEnvContext.react").useWAFlowsEnv(), l = i.env, u = d(function() {
			return o("WAFlowsCalendarPickerDialogNavigationUtils").getValidMonthsAndYears(t, a);
		}, [t, a]), m = d(function() {
			return t.getYear();
		}, [t]), p = d(function() {
			return t.getMonth() - 1;
		}, [t]), _ = d(function() {
			return o("WAFlowsCalendarPickerDialogNavigationUtils").getMinDateValueForMonthAndYearSelector(u);
		}, [u]), f = d(function() {
			return o("WAFlowsCalendarPickerDialogNavigationUtils").getMaxDateValueForMonthAndYearSelector(u);
		}, [u]), g = d(function() {
			return o("WAFlowsDatePickerUtils").getYears({
				minDateValue: _,
				maxDateValue: f,
				locale: l.locale
			});
		}, [
			_,
			f,
			l.locale
		]), h = d(function() {
			return o("WAFlowsDatePickerUtils").getMonths({
				year: m,
				minDateValue: _,
				maxDateValue: f
			});
		}, [
			m,
			_,
			f
		]), y = c(function(e, t) {
			var o = r("LocalDate").create(e, t + 1, 1);
			n(o);
		}, [n]), C = c(function(e) {
			return y(e, p);
		}, [p, y]), b = c(function(e) {
			return y(m, e);
		}, [m, y]), v = c(function() {
			var e = o("WAFlowsDatePickerUtils").getDatePartsForLocale(l.locale);
			return e.map(function(e) {
				switch (e) {
					case "month": return s.jsx(r("WAFlowsDatePickerWheel.react"), {
						options: h,
						value: p,
						onChange: b
					}, e);
					case "year": return s.jsx(r("WAFlowsDatePickerWheel.react"), {
						options: g,
						value: m,
						onChange: C
					}, e);
				}
			});
		}, [
			p,
			m,
			h,
			g,
			l.locale,
			b,
			C
		]);
		return s.jsx("div", {
			className: "x78zum5 x1mcfnh7 x183qbbg x17r0vjz x1n4bvi3 x1l1ennw x1n2onr6 x1cpjm7i x1hmns74 x12maryy x9smzgn x1wlytlt x1rmj1tg x191tdue x1knuo7r x1h5t567 x1s928wv x1j6awrg xitxdhh x1dwy1gy x17cx49 x4eaejv xex3w2j x160sa2e x14w1fgk",
			children: v()
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
