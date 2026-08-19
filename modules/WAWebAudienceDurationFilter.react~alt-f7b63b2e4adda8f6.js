__d("WAWebAudienceDurationFilter.react", [
	"fbt",
	"WDSChip.react",
	"WDSIconIcCalendarMonth.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
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
		var t = e.audienceCardId, n = e.onSelectDuration, o = e.selectedDays, a = e.testid, i = m(null), l = f(t), s = u.jsx(r("WDSMenu.react"), { children: l.map(function(e) {
			return u.jsx(r("WDSMenuItem.react"), {
				isToggleable: !0,
				onPress: function() {
					return n(e.days);
				},
				testid: e.testid,
				title: e.label(),
				toggled: e.days === o
			}, e.days);
		}) }), c = r("useWDSMenu")({
			dismissable: !0,
			menu: s,
			targetRef: i
		}), p = c.closeMenu, _ = c.isMenuOpen, h = c.menuPortal, y = c.openMenu, C = d(function() {
			_ ? p() : y();
		}, [
			p,
			_,
			y
		]);
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSChip.react"), {
			Icon: r("WDSIconIcCalendarMonth.react"),
			"aria-pressed": _,
			isNeutral: !0,
			label: g(o),
			onPress: C,
			ref: i,
			showEndDropdownIcon: !0,
			testid: a != null ? a : "business_broadcasts_audience_duration_filter_chip"
		}), h] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
