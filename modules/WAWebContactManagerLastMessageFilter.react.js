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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(61), n = e.customRange, a = e.dateRangeFilterEnabled, i = e.onSelectCustomRange, l = e.onSelectRange, c = e.selectedRange, d = e.testid, _ = m(null), h = p(null), y = h[0], C = h[1], b = p(null), v = b[0], S = b[1], R = p(!1), L = R[0], E = R[1], k;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (k = {
			x: 0,
			y: 0
		}, t[0] = k) : k = t[0];
		var I = p(k), T = I[0], D = I[1], x;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			E(!1), C(null), S(null);
		}, t[1] = x) : x = t[1];
		var $ = x, P;
		t[2] !== i || t[3] !== v || t[4] !== y ? (P = function(t) {
			if (y == null || v != null) C(t), S(null);
			else {
				var e = o("WAWebContactManagerDateRangeUtils").normalizeRange(y, t), n = e.end, r = e.start;
				r != null && n != null && i({
					start: r,
					end: n
				}), C(null), S(null), E(!1);
			}
		}, t[2] = i, t[3] = v, t[4] = y, t[5] = P) : P = t[5];
		var N = P, M;
		t[6] !== (n == null ? void 0 : n.end) || t[7] !== (n == null ? void 0 : n.start) ? (M = function() {
			var e, t, r;
			C((e = n == null ? void 0 : n.start) != null ? e : null), S((t = n == null ? void 0 : n.end) != null ? t : null);
			var o = (r = _.current) == null ? void 0 : r.getBoundingClientRect();
			o != null && D({
				x: o.left + o.width / 2,
				y: o.bottom
			}), E(!0);
		}, t[6] = n == null ? void 0 : n.end, t[7] = n == null ? void 0 : n.start, t[8] = M) : M = t[8];
		var w = M, A;
		t[9] !== n || t[10] !== l || t[11] !== c ? (A = f.map(function(e) {
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
		}), t[9] = n, t[10] = l, t[11] = c, t[12] = A) : A = t[12];
		var F;
		t[13] !== n || t[14] !== a || t[15] !== w ? (F = a && u.jsx(r("WDSMenuItem.react"), {
			isToggleable: !0,
			onPress: w,
			testid: "last-message-range-custom",
			title: s._(
				/*BTDS*/
				""
			),
			toggled: n != null
		}, "custom"), t[13] = n, t[14] = a, t[15] = w, t[16] = F) : F = t[16];
		var O;
		t[17] !== A || t[18] !== F ? (O = u.jsxs(r("WDSMenu.react"), { children: [A, F] }), t[17] = A, t[18] = F, t[19] = O) : O = t[19];
		var B = O, W;
		t[20] !== B ? (W = {
			targetRef: _,
			menu: B,
			dismissable: !0
		}, t[20] = B, t[21] = W) : W = t[21];
		var q = r("useWDSMenu")(W), U = q.closeMenu, V = q.isMenuOpen, H = q.menuPortal, G = q.openMenu, z;
		t[22] !== U || t[23] !== V || t[24] !== G ? (z = function() {
			V ? U() : G();
		}, t[22] = U, t[23] = V, t[24] = G, t[25] = z) : z = t[25];
		var j = z, K, Q;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (K = { className: "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 xvktan5 xppr10f x16ovd2e x12xbjc7 x12w63v0 x1nzty39" }, Q = s._(
			/*BTDS*/
			""
		), t[26] = K, t[27] = Q) : (K = t[26], Q = t[27]);
		var X;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (X = new Date(), t[28] = X) : X = t[28];
		var Y;
		if (t[29] !== (n == null ? void 0 : n.start)) {
			var J;
			Y = (J = n == null ? void 0 : n.start) != null ? J : new Date(), t[29] = n == null ? void 0 : n.start, t[30] = Y;
		} else Y = t[30];
		var Z, ee;
		t[31] !== v || t[32] !== y ? (Z = [y, v].filter(Boolean), ee = o("WAWebContactManagerDateRangeUtils").getRangeHighlightDates(y, v), t[31] = v, t[32] = y, t[33] = Z, t[34] = ee) : (Z = t[33], ee = t[34]);
		var te;
		t[35] !== N || t[36] !== Y || t[37] !== Z || t[38] !== ee ? (te = u.jsx("div", babelHelpers.extends({}, K, {
			"aria-label": Q,
			role: "dialog",
			children: u.jsx(r("WDSCalendar.react"), {
				count: 2,
				disableAfterDate: X,
				initialDate: Y,
				selectedDates: Z,
				highlightedDates: ee,
				onSelected: N,
				testID: "customer_manager_last_message_custom_calendar"
			})
		})), t[35] = N, t[36] = Y, t[37] = Z, t[38] = ee, t[39] = te) : te = t[39];
		var ne = te, re;
		t[40] !== n || t[41] !== c ? (re = n != null ? o("WAWebContactManagerDateRangeUtils").formatRangeLocalized(n.start, n.end) : g(c), t[40] = n, t[41] = c, t[42] = re) : re = t[42];
		var oe = re, ae = L ? "dialog" : "menu", ie = V || L, le;
		t[43] !== n || t[44] !== c ? (le = n != null ? s._(
			/*BTDS*/
			"",
			[s._param("selected range", o("WAWebContactManagerDateRangeUtils").formatRangeLocalized(n.start, n.end))]
		) : s._(
			/*BTDS*/
			"",
			[s._param("selected range", g(c))]
		), t[43] = n, t[44] = c, t[45] = le) : le = t[45];
		var se = d != null ? d : "customer_manager_last_message_filter_chip", ue;
		t[46] !== j || t[47] !== oe || t[48] !== ae || t[49] !== ie || t[50] !== le || t[51] !== se ? (ue = u.jsx(r("WDSChip.react"), {
			Icon: r("WDSIconIcCalendarMonth.react"),
			"aria-haspopup": ae,
			"aria-expanded": ie,
			"aria-label": le,
			label: oe,
			onPress: j,
			ref: _,
			showEndDropdownIcon: !0,
			testid: se
		}), t[46] = j, t[47] = oe, t[48] = ae, t[49] = ie, t[50] = le, t[51] = se, t[52] = ue) : ue = t[52];
		var ce;
		t[53] !== ne || t[54] !== L || t[55] !== T ? (ce = L && u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "DatePicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: $,
			children: u.jsx(o("WAWebDropdown.react").Dropdown, {
				type: o("WAWebDropdown.react").MenuType.DatePicker,
				dirX: o("WAWebDropdown.react").DirX.CENTER,
				dirY: o("WAWebDropdown.react").DirY.BOTTOM,
				origin: T,
				children: ne
			})
		}), t[53] = ne, t[54] = L, t[55] = T, t[56] = ce) : ce = t[56];
		var de;
		return t[57] !== H || t[58] !== ue || t[59] !== ce ? (de = u.jsxs(u.Fragment, { children: [
			ue,
			H,
			ce
		] }), t[57] = H, t[58] = ue, t[59] = ce, t[60] = de) : de = t[60], de;
	}
	l.default = h;
}), 226);
