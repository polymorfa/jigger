__d("WAWebPixKeyTypeSelect.react", [
	"fbt",
	"WAWebBizPaymentsBrazilAddPixModal.react",
	"WAWebConsumerPixStrings",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebMobilePlatforms",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsTypes",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcChevronDown.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
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
	function _(e) {
		var t, n, a = o("react-compiler-runtime").c(26), i = e.onSelectChange, l = e.pixKeyType, c = o("WAWebMobilePlatforms").isSMB() ? Array.from(o("WAWebUserPrefsTypes").PixKeyType.members(), f) : o("WAWebConsumerPixStrings").getConsumerPixKeyTypeOptions(), _ = d(null), g = m(null), h = g[0], y = g[1], C = (t = (n = c.find(function(e) {
			return e.keyType === l;
		})) == null ? void 0 : n.label) != null ? t : o("WAWebBizPaymentsBrazilAddPixModal.react").getPixKeyType(l), b = function() {
			y({
				menu: c.map(function(e) {
					var t = e.keyType, n = e.label;
					return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							i(t), y(null);
						},
						testid: String(t),
						children: n
					}, String(t));
				}),
				anchor: _.current,
				type: o("WAWebDropdown.react").MenuType.DropdownMenuPopup
			});
		}, v;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			y(null);
		}, a[0] = v) : v = a[0];
		var S = v, R = function(t) {
			h == null ? b() : S(), t == null || t.currentTarget.blur();
		}, L = o("WAWebFlex.react").FlexRow, E = p, k = "start", I = "start", T = o("WAWebFlex.react").FlexColumn, D = p, x = "start", $ = "center", P;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "xh8yej3" }, a[1] = P) : P = a[1];
		var N = "pix-key-type-select", M = r("WDSTextField.react"), w;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), a[2] = w) : w = a[2];
		var A = o("WAWebMobilePlatforms").isSMB() ? r("WDSIconIcArrowDropDown.react") : r("WDSIconIcChevronDown.react"), F = C.toString(), O;
		a[3] !== M || a[4] !== R || a[5] !== C || a[6] !== w || a[7] !== A || a[8] !== F ? (O = u.jsx(M, {
			label: w,
			defaultValue: C,
			EndIcon: A,
			onEndIconClick: R,
			value: F,
			onFocus: R,
			testid: "chat_thread_pix_key_type_textfield"
		}), a[3] = M, a[4] = R, a[5] = C, a[6] = w, a[7] = A, a[8] = F, a[9] = O) : O = a[9];
		var B;
		a[10] !== S || a[11] !== h ? (B = h && u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: h.toString(),
			escapable: !0,
			popable: !0,
			requestDismiss: S,
			dismissOnWindowResize: !0,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: h })
		}), a[10] = S, a[11] = h, a[12] = B) : B = a[12];
		var W;
		a[13] !== _ || a[14] !== O || a[15] !== B || a[16] !== P ? (W = u.jsxs("div", babelHelpers.extends({}, P, {
			ref: _,
			"data-testid": N,
			children: [O, B]
		})), a[13] = _, a[14] = O, a[15] = B, a[16] = P, a[17] = W) : W = a[17];
		var q;
		a[18] !== T || a[19] !== W || a[20] !== D.column ? (q = u.jsx(T, {
			xstyle: D.column,
			align: x,
			justify: $,
			children: W
		}), a[18] = T, a[19] = W, a[20] = D.column, a[21] = q) : q = a[21];
		var U;
		return a[22] !== L || a[23] !== q || a[24] !== E.row ? (U = u.jsx(L, {
			xstyle: E.row,
			align: k,
			justify: I,
			children: q
		}), a[22] = L, a[23] = q, a[24] = E.row, a[25] = U) : U = a[25], U;
	}
	function f(e) {
		return {
			keyType: e,
			label: o("WAWebBizPaymentsBrazilAddPixModal.react").getPixKeyType(e)
		};
	}
	l.default = _;
}), 226);
