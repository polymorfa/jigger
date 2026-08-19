__d("WAWebConsumerPixVisibilitySelect.react", [
	"WAWebConsumerPixStrings",
	"WAWebFlex.react",
	"WAWebNoop",
	"WDSIconIcChevronDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = {
		row: {
			height: "xdd8jsf",
			paddingBottom: "x1l90r2v",
			width: "xh8yej3",
			$$css: !0
		},
		column: {
			width: "xh8yej3",
			$$css: !0
		},
		textField: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p() {
		var e;
		return [
			{
				value: "all",
				label: (e = o("WAWebConsumerPixStrings")).getConsumerPixVisibilityEveryone()
			},
			{
				value: "contacts",
				label: e.getConsumerPixVisibilityMyContacts()
			},
			{
				value: "contact_blacklist",
				label: e.getConsumerPixVisibilityMyContactsExcept()
			},
			{
				value: "none",
				label: e.getConsumerPixVisibilityNobody()
			}
		];
	}
	function _(e) {
		var t, n, a = o("react-compiler-runtime").c(30), i = e.onOpenExcludePicker, l = e.onVisibilityChange, u = e.visibility, _ = d(null), f = d(r("WAWebNoop")), g = d(!1), h = p(), y = (t = h.find(function(e) {
			return e.value === u;
		})) == null ? void 0 : t.label, C = function(t) {
			if (f.current(), g.current = !0, t === "contact_blacklist") {
				i();
				return;
			}
			l(t);
		}, b = s.jsx(r("WDSMenu.react"), { children: h.map(function(e) {
			return s.jsx(r("WDSMenuItem.react"), {
				isToggleable: !0,
				onPress: function() {
					return C(e.value);
				},
				testid: "pix-visibility-" + e.value,
				title: e.label,
				toggled: e.value === u
			}, e.value);
		}) }), v = r("useWDSMenu")({
			targetRef: _,
			menu: b,
			dismissable: !0
		}), S = v.closeMenu, R = v.isMenuOpen, L = v.menuPortal, E = v.openMenu, k, I;
		a[0] !== S ? (k = function() {
			f.current = S;
		}, I = [S], a[0] = S, a[1] = k, a[2] = I) : (k = a[1], I = a[2]), c(k, I);
		var T;
		a[3] !== S || a[4] !== R || a[5] !== E ? (T = function(t) {
			R ? S() : E(), t == null || t.currentTarget.blur();
		}, a[3] = S, a[4] = R, a[5] = E, a[6] = T) : T = a[6];
		var D = T, x;
		a[7] !== D ? (x = function() {
			if (g.current) {
				g.current = !1;
				var e = document.activeElement;
				e instanceof HTMLElement && e.blur();
				return;
			}
			D();
		}, a[7] = D, a[8] = x) : x = a[8];
		var $ = x, P = o("WAWebFlex.react").FlexRow, N = m, M = "start", w = "start", A = o("WAWebFlex.react").FlexColumn, F = m, O = "start", B = "center", W;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "xh8yej3" }, a[9] = W) : W = a[9];
		var q = "pix-visibility-select", U = r("WDSTextField.react"), V;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (V = o("WAWebConsumerPixStrings").getConsumerPixVisibilityLabel(), a[10] = V) : V = a[10];
		var H = r("WDSIconIcChevronDown.react"), G = (n = y == null ? void 0 : y.toString()) != null ? n : "", z;
		a[11] !== U || a[12] !== $ || a[13] !== V || a[14] !== H || a[15] !== G || a[16] !== D ? (z = s.jsx(U, {
			label: V,
			EndIcon: H,
			onEndIconClick: D,
			value: G,
			onFocus: $,
			testid: "pix_visibility_textfield"
		}), a[11] = U, a[12] = $, a[13] = V, a[14] = H, a[15] = G, a[16] = D, a[17] = z) : z = a[17];
		var j;
		a[18] !== L || a[19] !== W || a[20] !== z ? (j = s.jsxs("div", babelHelpers.extends({}, W, {
			ref: _,
			"data-testid": q,
			children: [z, L]
		})), a[18] = L, a[19] = W, a[20] = z, a[21] = j) : j = a[21];
		var K;
		a[22] !== A || a[23] !== j || a[24] !== F.column ? (K = s.jsx(A, {
			xstyle: F.column,
			align: O,
			justify: B,
			children: j
		}), a[22] = A, a[23] = j, a[24] = F.column, a[25] = K) : K = a[25];
		var Q;
		return a[26] !== P || a[27] !== K || a[28] !== N.row ? (Q = s.jsx(P, {
			xstyle: N.row,
			align: M,
			justify: w,
			children: K
		}), a[26] = P, a[27] = K, a[28] = N.row, a[29] = Q) : Q = a[29], Q;
	}
	l.default = _;
}), 98);
