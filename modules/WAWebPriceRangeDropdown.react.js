__d("WAWebPriceRangeDropdown.react", [
	"fbt",
	"WAWebBusinessProfileTextField.react",
	"WAWebFlex.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcSell.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useId, p = c.useMemo, _ = c.useRef, f = c.useState, g = "calc(" + o("WDSVars.stylex").WDSVars.spacingTriple + " + " + o("WDSVars.stylex").WDSVars.spacingSingle + " * 2 + 12px + " + o("WDSVars.stylex").WDSVars.spacingSingle + ")", h = { menuContainer: {
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
	} }, y = [
		{
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			value: "0"
		},
		{
			label: function() {
				return "$";
			},
			value: "1"
		},
		{
			label: function() {
				return "$$";
			},
			value: "2"
		},
		{
			label: function() {
				return "$$$";
			},
			value: "3"
		},
		{
			label: function() {
				return "$$$$";
			},
			value: "4"
		}
	];
	function C(e) {
		var t = o("react-compiler-runtime").c(37), n = e.dynamicOptions, a = e.fieldName, i = e.label, l = e.onChange, s = e.onOpen, c = e.value, d = a === void 0 ? "priceTier" : a, p = _(null), g = f(!1), C = g[0], v = g[1], S = m(), R;
		e: {
			if (n != null && n.length > 0) {
				var L;
				t[0] !== n ? (L = [y[0]].concat(n.map(b)), t[0] = n, t[1] = L) : L = t[1], R = L;
				break e;
			}
			R = y;
		}
		var E = R, k;
		if (t[2] !== E || t[3] !== c) {
			var I;
			t[5] !== c ? (I = function(t) {
				return t.value === c;
			}, t[5] = c, t[6] = I) : I = t[6];
			var T = E.find(I), D = T != null ? T.subtitle : null;
			if (T == null) {
				var x;
				t[7] !== E[0] ? (x = E[0].label(), t[7] = E[0], t[8] = x) : x = t[8], k = x;
			} else D != null ? k = String(T.label()) + " (" + D() + ")" : k = T.label();
			t[2] = E, t[3] = c, t[4] = k;
		} else k = t[4];
		var $;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			v(!1);
		}, t[9] = $) : $ = t[9];
		var P = $;
		o("useWAWebOnOutsideClick").useOnOutsideClick(p, P);
		var N;
		t[10] !== d || t[11] !== l ? (N = function(t) {
			l != null && l(d, t), v(!1);
		}, t[10] = d, t[11] = l, t[12] = N) : N = t[12];
		var M = N, w;
		t[13] !== s ? (w = function() {
			v(function(e) {
				return e || s == null || s(), !e;
			});
		}, t[13] = s, t[14] = w) : w = t[14];
		var A = w, F;
		t[15] !== A ? (F = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), A());
		}, t[15] = A, t[16] = F) : F = t[16];
		var O = F, B;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1ypdohk x1n2onr6 xh8yej3" }, t[17] = B) : B = t[17];
		var W = C ? S : void 0, q;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(r("WDSIconIcSell.react"), {}), t[18] = q) : q = t[18];
		var U = String(k), V;
		t[19] !== d || t[20] !== i || t[21] !== U ? (V = u.jsx(r("WAWebBusinessProfileTextField.react"), {
			EndIcon: r("WDSIconIcArrowDropDown.react"),
			editable: !0,
			fieldName: d,
			icon: q,
			label: i,
			readOnly: !0,
			testid: "biz_profile_price_range_textfield",
			value: U
		}), t[19] = d, t[20] = i, t[21] = U, t[22] = V) : V = t[22];
		var H;
		t[23] !== M || t[24] !== C || t[25] !== i || t[26] !== S || t[27] !== E || t[28] !== c ? (H = C && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: h.menuContainer,
			id: S,
			role: "listbox",
			"aria-label": i,
			children: u.jsx(r("WDSMenu.react"), {
				useMaxWidth: !1,
				children: E.map(function(e) {
					return u.jsx(r("WDSMenuItem.react"), {
						isToggleable: !0,
						onPress: function() {
							return M(e.value);
						},
						subtitle: e.subtitle != null ? e.subtitle() : void 0,
						title: e.label(),
						toggled: e.value === c
					}, e.value);
				})
			})
		}), t[23] = M, t[24] = C, t[25] = i, t[26] = S, t[27] = E, t[28] = c, t[29] = H) : H = t[29];
		var G;
		return t[30] !== A || t[31] !== O || t[32] !== C || t[33] !== V || t[34] !== H || t[35] !== W ? (G = u.jsxs("div", babelHelpers.extends({}, B, {
			onClick: A,
			onKeyDown: O,
			ref: p,
			role: "button",
			tabIndex: 0,
			"aria-haspopup": "listbox",
			"aria-expanded": C,
			"aria-controls": W,
			children: [V, H]
		})), t[30] = A, t[31] = O, t[32] = C, t[33] = V, t[34] = H, t[35] = W, t[36] = G) : G = t[36], G;
	}
	function b(e) {
		return {
			label: function() {
				return e.description !== "" ? e.description : e.symbol;
			},
			subtitle: e.description !== "" ? function() {
				return e.symbol;
			} : void 0,
			value: e.id
		};
	}
	l.default = C;
}), 226);
