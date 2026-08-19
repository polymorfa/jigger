__d("WAFlowsCalendarPickerDialogNavigationDropdowns.react", [
	"fbt",
	"GeoMenuItem.react",
	"LocalDate",
	"WAFlowsCalendarPickerDialogNavigationSelector.react",
	"WAFlowsCalendarPickerDialogNavigationUtils",
	"WAFlowsEnvContext.react",
	"react",
	"scrollRefIntoView",
	"useBoolean"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = { dateTokenSelectorHeader: {
		width: "xuwzapx",
		$$css: !0
	} };
	function g(e) {
		var t = e.focusDate, n = e.onFocusDateChange, a = e.onSelectMonth, i = e.onSelectYear, l = e.restraint, c = o("WAFlowsEnvContext.react").useWAFlowsEnv(), p = c.env, _ = r("useBoolean")(!1), f = _.setFalse, g = _.toggle, y = _.value, C = r("useBoolean")(!1), b = C.setFalse, v = C.toggle, S = C.value, R = o("WAFlowsCalendarPickerDialogNavigationUtils").getValidMonthsAndYears(t, l), L = t.getYear(), E = t.getMonth(), k = o("WAFlowsCalendarPickerDialogNavigationUtils").getMonthsListByYear(L, R), I = d(function(e) {
			var t = e.format("M", { skipPatternLocalization: !0 });
			return t[0].toUpperCase() + t.slice(1);
		}, []), T = d(function(e) {
			var t = r("LocalDate").create(L, e, 1);
			return I(t);
		}, [L, I]), D = s._(
			/*BTDS*/
			"",
			[s._param("month", I(t))]
		), x = o("WAFlowsCalendarPickerDialogNavigationUtils").getYearsList(R, l), $ = d(function(e) {
			var t = r("LocalDate").create(L, e, 1);
			n(t), a == null || a(e);
		}, [
			L,
			n,
			a
		]), P = d(function(e) {
			var t = r("LocalDate").create(e, E, 1);
			n(t), i == null || i(e);
		}, [
			E,
			n,
			i
		]), N = d(function() {
			g(), b();
		}, [g, b]), M = d(function() {
			v(), f();
		}, [v, f]);
		return m(function() {
			f(), b();
		}, [
			t,
			f,
			b
		]), p.platform === "android" && u.jsxs("div", {
			className: "x78zum5 x1nhvcw1 x19fowf6",
			children: [u.jsx(h, {
				label: D,
				tokens: k,
				selectedToken: E,
				displayValue: T,
				isSelectorExpanded: y,
				onSelect: $,
				onToggleSelector: N
			}), u.jsx(h, {
				label: t.getYear().toString(),
				tokens: x,
				selectedToken: L,
				displayValue: function(t) {
					return t.toString();
				},
				isSelectorExpanded: S,
				onSelect: P,
				onToggleSelector: M
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.displayValue, n = e.isSelectorExpanded, o = e.label, a = e.onSelect, i = e.onToggleSelector, l = e.selectedToken, s = e.tokens;
		return u.jsxs("div", {
			className: "x1n2onr6",
			children: [u.jsx(r("WAFlowsCalendarPickerDialogNavigationSelector.react"), {
				label: o,
				isSelectorExpanded: n,
				onToggleSelector: i,
				xstyle: f.dateTokenSelectorHeader
			}), n && u.jsx("div", {
				className: "x10l6tqk x1vjfegm x1h3rtpe x1acvwf4 xfl7qjt x871njl x1hqevxg x1vbatzu xn2xpo4 x1egrlv5 x1odjw0f x6nt20k x1rajyc1 x1qndgat x1kprl8i x13matbc xz3e5vo xuqbp5a x1l4wb2j xmhn7ti x1vpxxol xinqzp8 x1hn26v xh8looj",
				children: s.map(function(e) {
					return u.jsx(y, {
						token: e,
						selectedToken: l,
						displayValue: t,
						onSelect: a
					}, e);
				})
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.displayValue, n = e.onSelect, a = e.selectedToken, i = e.token, l = _(), c = p(function() {
			return i === a;
		}, [i, a]);
		return m(function() {
			c && o("scrollRefIntoView").scrollRefIntoView(l);
		}, [c]), u.jsx("div", {
			"data-styleid": c ? "token-selector-option-wrapper-selected" : "token-selector-option-wrapper-not-selected",
			ref: l,
			children: u.jsx("div", {
				"data-styleid": "token-selector-option",
				children: u.jsx(r("GeoMenuItem.react"), {
					label: s._(
						/*BTDS*/
						"",
						[s._param("token", t(i))]
					),
					onClick: function() {
						n(i);
					}
				}, i)
			})
		}, i);
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = g;
}), 226);
