__d("WAWebBizAIKnowledgeFaqItem.react", [
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
		row: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		rowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(44), a = t.answer, i = t.deleting, l = t.index, u = t.maxLines, d = t.onDelete, m = t.onEdit, g = t.question, h = i === void 0 ? !1 : i, y = u === void 0 ? 2 : u, C = _(!1), b = C[0], v = C[1], S = _(!1), R = S[0], L = S[1], E = _(null), k = E[0], I = E[1], T = p(null), D = p(null), x = (b || R || k != null) && !h, $;
		n[0] !== l || n[1] !== d || n[2] !== m ? ($ = function(t) {
			var e, n = (e = T.current) != null ? e : D.current;
			n != null && I({
				anchor: n,
				autoFocus: t,
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						m(), I(null);
					},
					icon: c.jsx(r("WDSIconIcEdit.react"), {}),
					testid: "knowledge-faq-item-" + l + "-edit",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						d(), I(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: "knowledge-faq-item-" + l + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, n[0] = l, n[1] = d, n[2] = m, n[3] = $) : $ = n[3];
		var P = $, N;
		n[4] !== P ? (N = function(t) {
			t.stopPropagation(), P();
		}, n[4] = P, n[5] = N) : N = n[5];
		var M = N, w;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (w = function() {
			I(null);
		}, n[6] = w) : w = n[6];
		var A = w, F = "knowledge-faq-item-" + l, O = h ? -1 : 0, B = h ? void 0 : m, W;
		n[7] !== h || n[8] !== m || n[9] !== P ? (W = function(t) {
			h || ((t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), m()) : t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), P(!0)));
		}, n[7] = h, n[8] = m, n[9] = P, n[10] = W) : W = n[10];
		var q, U, V, H, G, z, j;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			return L(!0);
		}, U = function(t) {
			D.current != null && t.relatedTarget instanceof Node && D.current.contains(t.relatedTarget) || L(!1);
		}, V = function() {
			return v(!0);
		}, H = function() {
			return v(!1);
		}, G = (e || (e = r("stylex"))).props(f.row, f.rowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), z = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }, j = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, n[11] = q, n[12] = U, n[13] = V, n[14] = H, n[15] = G, n[16] = z, n[17] = j) : (q = n[11], U = n[12], V = n[13], H = n[14], G = n[15], z = n[16], j = n[17]);
		var K;
		n[18] !== g ? (K = c.jsx("div", babelHelpers.extends({}, j, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			dir: "auto",
			children: g
		}) })), n[18] = g, n[19] = K) : K = n[19];
		var Q;
		n[20] !== a || n[21] !== y ? (Q = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			maxLines: y,
			dir: "auto",
			children: a
		}), n[20] = a, n[21] = y, n[22] = Q) : Q = n[22];
		var X;
		n[23] !== K || n[24] !== Q ? (X = c.jsxs("div", babelHelpers.extends({}, z, { children: [K, Q] })), n[23] = K, n[24] = Q, n[25] = X) : X = n[25];
		var Y;
		n[26] !== h || n[27] !== M || n[28] !== l || n[29] !== x ? (Y = h ? c.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 20,
			stroke: 4
		}) : c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			children: x ? c.jsx("span", {
				ref: T,
				className: "x67bb7w xnpuxes",
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: M,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: "knowledge-faq-item-" + l + "-menu-btn"
				})
			}, "menu-btn") : null
		}), n[26] = h, n[27] = M, n[28] = l, n[29] = x, n[30] = Y) : Y = n[30];
		var J;
		n[31] !== h || n[32] !== X || n[33] !== Y || n[34] !== F || n[35] !== O || n[36] !== B || n[37] !== W ? (J = c.jsxs("div", babelHelpers.extends({
			ref: D,
			"data-testid": F,
			role: "button",
			tabIndex: O,
			"aria-disabled": h,
			onClick: B,
			onKeyDown: W,
			onFocus: q,
			onBlur: U,
			onMouseEnter: V,
			onMouseLeave: H
		}, G, { children: [X, Y] })), n[31] = h, n[32] = X, n[33] = Y, n[34] = F, n[35] = O, n[36] = B, n[37] = W, n[38] = J) : J = n[38];
		var Z;
		n[39] !== k ? (Z = k != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "FaqItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: A,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: k.anchor,
				autoFocus: k.autoFocus,
				menu: k.menu
			} })
		}), n[39] = k, n[40] = Z) : Z = n[40];
		var ee;
		return n[41] !== J || n[42] !== Z ? (ee = c.jsxs(c.Fragment, { children: [J, Z] }), n[41] = J, n[42] = Z, n[43] = ee) : ee = n[43], ee;
	}
	l.default = g;
}), 226);
