__d("WAWebBizAIFieldItem.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		fieldRow: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			flexShrink: "x2lah0s",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		fieldRowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(50), a = t.deleting, i = t.field, l = t.hasValue, u = t.onDelete, d = t.onEdit, m = t.value, g = _(!1), h = g[0], y = g[1], C = _(null), b = C[0], v = C[1], S = p(null), R = p(null), L = _(!1), E = L[0], k = L[1], I = l && (h || E || b != null) && !a, T;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			y(!0);
		}, n[0] = T) : T = n[0];
		var D = T, x;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			y(!1);
		}, n[1] = x) : x = n[1];
		var $ = x, P;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			k(!0);
		}, n[2] = P) : P = n[2];
		var N = P, M;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (M = function(t) {
			R.current != null && t.relatedTarget instanceof Node && R.current.contains(t.relatedTarget) || k(!1);
		}, n[3] = M) : M = n[3];
		var w = M, A;
		n[4] !== i.testid || n[5] !== u || n[6] !== d ? (A = function(t) {
			var e, n = (e = S.current) != null ? e : R.current;
			n != null && v({
				anchor: n,
				autoFocus: t,
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						d(), v(null);
					},
					icon: c.jsx(r("WDSIconIcEdit.react"), {}),
					testid: i.testid + "-edit",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						u(), v(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: i.testid + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, n[4] = i.testid, n[5] = u, n[6] = d, n[7] = A) : A = n[7];
		var F = A, O;
		n[8] !== F ? (O = function(t) {
			t.stopPropagation(), F();
		}, n[8] = F, n[9] = O) : O = n[9];
		var B = O, W;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			v(null);
		}, n[10] = W) : W = n[10];
		var q = W, U = null;
		if (a) {
			var V;
			n[11] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 20,
				stroke: 4
			}), n[11] = V) : V = n[11], U = V;
		} else if (l) {
			var H;
			n[12] !== i.testid || n[13] !== B || n[14] !== I ? (H = I ? c.jsx("span", {
				ref: S,
				className: "x67bb7w xnpuxes",
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: B,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: i.testid + "-menu-btn"
				})
			}, "menu-btn") : null, n[12] = i.testid, n[13] = B, n[14] = I, n[15] = H) : H = n[15];
			var G;
			n[16] !== H ? (G = c.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "pop-fast-chat",
				children: H
			}), n[16] = H, n[17] = G) : G = n[17], U = G;
		}
		var z = i.testid, j = a ? -1 : 0, K = a ? void 0 : d, Q;
		n[18] !== a || n[19] !== l || n[20] !== d || n[21] !== F ? (Q = function(t) {
			a || ((t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), d()) : l && t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), F(!0)));
		}, n[18] = a, n[19] = l, n[20] = d, n[21] = F, n[22] = Q) : Q = n[22];
		var X, Y;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (X = (e || (e = r("stylex"))).props(f.fieldRow, f.fieldRowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), Y = { className: "x6s0dn4 x78zum5 x2lah0s xsdox4t xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x100vrsf" }, n[23] = X, n[24] = Y) : (X = n[23], Y = n[24]);
		var J;
		n[25] !== i.icon ? (J = c.jsx("div", babelHelpers.extends({}, Y, { children: i.icon })), n[25] = i.icon, n[26] = J) : J = n[26];
		var Z;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (Z = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }, n[27] = Z) : Z = n[27];
		var ee;
		n[28] !== i.label ? (ee = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: i.label
		}), n[28] = i.label, n[29] = ee) : ee = n[29];
		var te = l ? m : i.hint, ne;
		n[30] !== i.maxLines || n[31] !== te ? (ne = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			maxLines: i.maxLines,
			children: te
		}), n[30] = i.maxLines, n[31] = te, n[32] = ne) : ne = n[32];
		var re;
		n[33] !== ee || n[34] !== ne ? (re = c.jsxs("div", babelHelpers.extends({}, Z, { children: [ee, ne] })), n[33] = ee, n[34] = ne, n[35] = re) : re = n[35];
		var oe;
		n[36] !== a || n[37] !== i.testid || n[38] !== K || n[39] !== Q || n[40] !== J || n[41] !== re || n[42] !== j || n[43] !== U ? (oe = c.jsxs("div", babelHelpers.extends({
			ref: R,
			"data-testid": z,
			role: "button",
			tabIndex: j,
			"aria-disabled": a,
			onClick: K,
			onKeyDown: Q,
			onFocus: N,
			onBlur: w,
			onMouseEnter: D,
			onMouseLeave: $
		}, X, { children: [
			J,
			re,
			U
		] })), n[36] = a, n[37] = i.testid, n[38] = K, n[39] = Q, n[40] = J, n[41] = re, n[42] = j, n[43] = U, n[44] = oe) : oe = n[44];
		var ae;
		n[45] !== b ? (ae = b != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "FieldContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: q,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: b.anchor,
				autoFocus: b.autoFocus,
				menu: b.menu
			} })
		}), n[45] = b, n[46] = ae) : ae = n[46];
		var ie;
		return n[47] !== oe || n[48] !== ae ? (ie = c.jsxs(c.Fragment, { children: [oe, ae] }), n[47] = oe, n[48] = ae, n[49] = ie) : ie = n[49], ie;
	}
	l.WAWebBizAIFieldItem = g;
}), 226);
