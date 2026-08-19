__d("WAWebAudienceDurationFilter.react", [
	"fbt",
	"WDSChip.react",
	"WDSIconIcCalendarMonth.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = [
		{
			days: 7,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "duration-filter-7-days"
		},
		{
			days: 14,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "duration-filter-14-days"
		},
		{
			days: 30,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "duration-filter-30-days"
		},
		{
			days: 90,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "duration-filter-3-months"
		},
		{
			days: 180,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "duration-filter-6-months"
		},
		{
			days: 365,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "duration-filter-last-year"
		}
	], _ = p.slice(0, 4);
	function f(e) {
		return e === "inactive_chats" ? _ : p;
	}
	function g(e) {
		var t = p, n = t.find(function(t) {
			return t.days === e;
		});
		return n != null ? n.label() : t[2].label();
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(27), n = e.audienceCardId, a = e.onSelectDuration, i = e.selectedDays, l = e.testid, s = m(null), c, d;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			var p = f(n);
			c = r("WDSMenu.react");
			var _;
			t[5] !== a || t[6] !== i ? (_ = function(t) {
				return u.jsx(r("WDSMenuItem.react"), {
					isToggleable: !0,
					onPress: function() {
						return a(t.days);
					},
					testid: t.testid,
					title: t.label(),
					toggled: t.days === i
				}, t.days);
			}, t[5] = a, t[6] = i, t[7] = _) : _ = t[7], d = p.map(_), t[0] = n, t[1] = a, t[2] = i, t[3] = c, t[4] = d;
		} else c = t[3], d = t[4];
		var h;
		t[8] !== c || t[9] !== d ? (h = u.jsx(c, { children: d }), t[8] = c, t[9] = d, t[10] = h) : h = t[10];
		var y = h, C;
		t[11] !== y ? (C = {
			dismissable: !0,
			menu: y,
			targetRef: s
		}, t[11] = y, t[12] = C) : C = t[12];
		var b = r("useWDSMenu")(C), v = b.closeMenu, S = b.isMenuOpen, R = b.menuPortal, L = b.openMenu, E;
		t[13] !== v || t[14] !== S || t[15] !== L ? (E = function() {
			S ? v() : L();
		}, t[13] = v, t[14] = S, t[15] = L, t[16] = E) : E = t[16];
		var k = E, I;
		t[17] !== i ? (I = g(i), t[17] = i, t[18] = I) : I = t[18];
		var T = l != null ? l : "business_broadcasts_audience_duration_filter_chip", D;
		t[19] !== k || t[20] !== S || t[21] !== I || t[22] !== T ? (D = u.jsx(r("WDSChip.react"), {
			Icon: r("WDSIconIcCalendarMonth.react"),
			"aria-pressed": S,
			isNeutral: !0,
			label: I,
			onPress: k,
			ref: s,
			showEndDropdownIcon: !0,
			testid: T
		}), t[19] = k, t[20] = S, t[21] = I, t[22] = T, t[23] = D) : D = t[23];
		var x;
		return t[24] !== R || t[25] !== D ? (x = u.jsxs(u.Fragment, { children: [D, R] }), t[24] = R, t[25] = D, t[26] = x) : x = t[26], x;
	}
	l.default = h;
}), 226);
