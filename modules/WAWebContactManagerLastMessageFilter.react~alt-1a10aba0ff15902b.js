__d("WAWebContactManagerLastMessageFilter.react", [
	"fbt",
	"WAWebContactManagerDateRangeUtils",
	"WAWebDropdown.react",
	"WAWebUimUie.react",
	"WDSCalendar.react",
	"WDSChip.react",
	"WDSIconIcCalendarMonth.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = 600, f = [
		{
			value: null,
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "last-message-range-all-time"
		},
		{
			value: "last_7_days",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "last-message-range-7-days"
		},
		{
			value: "last_14_days",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "last-message-range-14-days"
		},
		{
			value: "last_30_days",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "last-message-range-30-days"
		},
		{
			value: "last_3_months",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "last-message-range-3-months"
		},
		{
			value: "last_year",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "last-message-range-last-year"
		}
	];
	function g(e) {
		var t = f.find(function(t) {
			return t.value === e;
		});
		return t != null ? t.label() : f[0].label();
	}
	function h(e) {
		var t, n = e.customRange, a = e.dateRangeFilterEnabled, i = e.onSelectCustomRange, l = e.onSelectRange, c = e.selectedRange, _ = e.testid, h = m(null), y = p(null), C = y[0], b = y[1], v = p(null), S = v[0], R = v[1], L = p(!1), E = L[0], k = L[1], I = p({
			x: 0,
			y: 0
		}), T = I[0], D = I[1], x = d(function() {
			k(!1), b(null), R(null);
		}, []), $ = d(function(e) {
			if (C == null || S != null) b(e), R(null);
			else {
				var t = o("WAWebContactManagerDateRangeUtils").normalizeRange(C, e), n = t.end, r = t.start;
				r != null && n != null && i({
					start: r,
					end: n
				}), b(null), R(null), k(!1);
			}
		}, [
			C,
			S,
			i
		]), P = d(function() {
			var e, t, r;
			b((e = n == null ? void 0 : n.start) != null ? e : null), R((t = n == null ? void 0 : n.end) != null ? t : null);
			var o = (r = h.current) == null ? void 0 : r.getBoundingClientRect();
			o != null && D({
				x: o.left + o.width / 2,
				y: o.bottom
			}), k(!0);
		}, [n]), N = u.jsxs(r("WDSMenu.react"), { children: [f.map(function(e) {
			var t;
			return u.jsx(r("WDSMenuItem.react"), {
				isToggleable: !0,
				onPress: function() {
					return l(e.value);
				},
				testid: e.testid,
				title: e.label(),
				toggled: e.value === c && n == null
			}, (t = e.value) != null ? t : "all");
		}), a && u.jsx(r("WDSMenuItem.react"), {
			isToggleable: !0,
			onPress: P,
			testid: "last-message-range-custom",
			title: s._(
				/*BTDS*/
				""
			),
			toggled: n != null
		}, "custom")] }), M = r("useWDSMenu")({
			targetRef: h,
			menu: N,
			dismissable: !0
		}), w = M.closeMenu, A = M.isMenuOpen, F = M.menuPortal, O = M.openMenu, B = d(function() {
			A ? w() : O();
		}, [
			w,
			A,
			O
		]), W = u.jsx("div", {
			className: "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 xvktan5 xppr10f x16ovd2e x12xbjc7 x12w63v0 x1nzty39",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			role: "dialog",
			children: u.jsx(r("WDSCalendar.react"), {
				count: 2,
				disableAfterDate: new Date(),
				initialDate: (t = n == null ? void 0 : n.start) != null ? t : new Date(),
				selectedDates: [C, S].filter(Boolean),
				highlightedDates: o("WAWebContactManagerDateRangeUtils").getRangeHighlightDates(C, S),
				onSelected: $,
				testID: "customer_manager_last_message_custom_calendar"
			})
		}), q = n != null ? o("WAWebContactManagerDateRangeUtils").formatRangeLocalized(n.start, n.end) : g(c);
		return u.jsxs(u.Fragment, { children: [
			u.jsx(r("WDSChip.react"), {
				Icon: r("WDSIconIcCalendarMonth.react"),
				"aria-haspopup": E ? "dialog" : "menu",
				"aria-expanded": A || E,
				"aria-label": n != null ? s._(
					/*BTDS*/
					"",
					[s._param("selected range", o("WAWebContactManagerDateRangeUtils").formatRangeLocalized(n.start, n.end))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("selected range", g(c))]
				),
				label: q,
				onPress: B,
				ref: h,
				showEndDropdownIcon: !0,
				testid: _ != null ? _ : "customer_manager_last_message_filter_chip"
			}),
			F,
			E && u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "DatePicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: x,
				children: u.jsx(o("WAWebDropdown.react").Dropdown, {
					type: o("WAWebDropdown.react").MenuType.DatePicker,
					dirX: o("WAWebDropdown.react").DirX.CENTER,
					dirY: o("WAWebDropdown.react").DirY.BOTTOM,
					origin: T,
					children: W
				})
			})
		] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
