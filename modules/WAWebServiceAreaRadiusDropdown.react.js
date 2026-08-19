__d("WAWebServiceAreaRadiusDropdown.react", [
	"WAWebBusinessProfileTextField.react",
	"WAWebFlex.react",
	"WAWebServiceAreaRadiusConstants",
	"WDSIconIcArrowDropDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useId, m = u.useRef, p = u.useState, _ = "calc(" + o("WDSVars.stylex").WDSVars.spacingTriple + " + " + o("WDSVars.stylex").WDSVars.spacingSingle + " * 2 + 12px + " + o("WDSVars.stylex").WDSVars.spacingSingle + ")", f = { menuContainer: {
		backgroundColor: "x16w0wmm",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		boxShadow: "x1sr759z",
		color: "x14ug900",
		insetInlineStart: "xxb5yu8",
		left: null,
		right: null,
		marginTop: "x1wgys3m",
		maxHeight: "xuyqlj2",
		overflowX: "x6ikm8r",
		overflowY: "x1odjw0f",
		position: "x10l6tqk",
		top: "xdsb8wn",
		width: "x116kdbm",
		zIndex: "xfo81ep",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(26), n = e.fieldName, a = e.icon, i = e.label, l = e.onChange, u = e.value, c = e.xstyle, _ = n === void 0 ? "serviceAreaRadius" : n, g = m(null), y = p(!1), C = y[0], b = y[1], v = d(), S = Number(u) || 0, R;
		t[0] !== S ? (R = o("WAWebServiceAreaRadiusConstants").radiusMetersToOptionValue(S), t[0] = S, t[1] = R) : R = t[1];
		var L = R, E = o("WAWebServiceAreaRadiusConstants").getServiceAreaRadiusOptions(), k;
		t[2] !== L ? (k = function(t) {
			return t.value === L;
		}, t[2] = L, t[3] = k) : k = t[3];
		var I = E.find(k), T = I != null ? I.label() : E[0].label(), D;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			b(!1);
		}, t[4] = D) : D = t[4];
		var x = D;
		o("useWAWebOnOutsideClick").useOnOutsideClick(g, x);
		var $;
		t[5] !== _ || t[6] !== l ? ($ = function(t) {
			l != null && l(_, String(t)), b(!1);
		}, t[5] = _, t[6] = l, t[7] = $) : $ = t[7];
		var P = $, N;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			b(h);
		}, t[8] = N) : N = t[8];
		var M = N, w;
		t[9] !== M ? (w = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), M());
		}, t[9] = M, t[10] = w) : w = t[10];
		var A = w, F;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x1ypdohk x1n2onr6 xh8yej3" }, t[11] = F) : F = t[11];
		var O = "button", B = 0, W = "listbox", q = C ? v : void 0, U = String(T), V;
		t[12] !== _ || t[13] !== a || t[14] !== i || t[15] !== U || t[16] !== c ? (V = s.jsx(r("WAWebBusinessProfileTextField.react"), {
			EndIcon: r("WDSIconIcArrowDropDown.react"),
			editable: !0,
			fieldName: _,
			icon: a,
			label: i,
			readOnly: !0,
			testid: "biz_profile_service_area_radius_textfield",
			value: U,
			xstyle: c
		}), t[12] = _, t[13] = a, t[14] = i, t[15] = U, t[16] = c, t[17] = V) : V = t[17];
		var H = C && s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: f.menuContainer,
			id: v,
			role: "listbox",
			"aria-label": i,
			children: s.jsx(r("WDSMenu.react"), {
				useMaxWidth: !1,
				children: E.map(function(e) {
					return s.jsx(r("WDSMenuItem.react"), {
						isToggleable: !0,
						onPress: function() {
							return P(e.value);
						},
						title: e.label(),
						toggled: e.value === L
					}, e.value);
				})
			})
		}), G;
		return t[18] !== M || t[19] !== A || t[20] !== C || t[21] !== q || t[22] !== V || t[23] !== H || t[24] !== F ? (G = s.jsxs("div", babelHelpers.extends({}, F, {
			onClick: M,
			onKeyDown: A,
			ref: g,
			role: O,
			tabIndex: B,
			"aria-haspopup": W,
			"aria-expanded": C,
			"aria-controls": q,
			children: [V, H]
		})), t[18] = M, t[19] = A, t[20] = C, t[21] = q, t[22] = V, t[23] = H, t[24] = F, t[25] = G) : G = t[25], G;
	}
	function h(e) {
		return !e;
	}
	l.default = g;
}), 98);
