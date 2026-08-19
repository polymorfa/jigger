__d("WAWebBizAIKnowledgeProductItem.react", [
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
	"WDSIconIcImage.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		imagePlaceholderIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		row: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		rowHover: {
			backgroundColor: "x1ubxc9n",
			$$css: !0
		}
	};
	function g(t) {
		var n, a, i = o("react-compiler-runtime").c(50), l = t.deleting, u = t.index, d = t.onDelete, m = t.onEdit, g = t.product, h = l === void 0 ? !1 : l, y = _(!1), C = y[0], b = y[1], v = _(!1), S = v[0], R = v[1], L = _(null), E = L[0], k = L[1], I = p(null), T = p(null), D = (C || S || E != null) && !h, x;
		i[0] !== u || i[1] !== d || i[2] !== m ? (x = function(t) {
			var e, n = (e = I.current) != null ? e : T.current;
			n != null && k({
				anchor: n,
				autoFocus: t,
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						m(), k(null);
					},
					icon: c.jsx(r("WDSIconIcEdit.react"), {}),
					testid: "knowledge-product-item-" + u + "-edit",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						d(), k(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: "knowledge-product-item-" + u + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, i[0] = u, i[1] = d, i[2] = m, i[3] = x) : x = i[3];
		var $ = x, P;
		i[4] !== $ ? (P = function(t) {
			t.stopPropagation(), $();
		}, i[4] = $, i[5] = P) : P = i[5];
		var N = P, M;
		i[6] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			k(null);
		}, i[6] = M) : M = i[6];
		var w = M, A = "knowledge-product-item-" + u, F = h ? -1 : 0, O = (n = g.title) != null ? n : "", B = h ? void 0 : m, W;
		i[7] !== h || i[8] !== m || i[9] !== $ ? (W = function(t) {
			h || ((t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), m()) : t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), $(!0)));
		}, i[7] = h, i[8] = m, i[9] = $, i[10] = W) : W = i[10];
		var q, U, V, H, G;
		i[11] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			return R(!0);
		}, U = function(t) {
			T.current != null && t.relatedTarget instanceof Node && T.current.contains(t.relatedTarget) || R(!1);
		}, V = function() {
			return b(!0);
		}, H = function() {
			return b(!1);
		}, G = (e || (e = r("stylex"))).props(f.row, f.rowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), i[11] = q, i[12] = U, i[13] = V, i[14] = H, i[15] = G) : (q = i[11], U = i[12], V = i[13], H = i[14], G = i[15]);
		var z;
		if (i[16] !== g.images[0] || i[17] !== g.images.length || i[18] !== g.title) {
			var j;
			z = g.images.length > 0 && g.images[0].thumbnail_url != null ? c.jsx("img", {
				src: g.images[0].thumbnail_url,
				alt: (j = g.title) != null ? j : "",
				className: "x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1peatla x19kjcj4 x1fu8urw"
			}) : c.jsx("div", {
				className: "x6s0dn4 x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x2lah0s x1peatla xl56j7k x1fu8urw",
				children: c.jsx(r("WDSIconIcImage.react"), { iconXstyle: f.imagePlaceholderIcon })
			}), i[16] = g.images[0], i[17] = g.images.length, i[18] = g.title, i[19] = z;
		} else z = i[19];
		var K, Q;
		i[20] === Symbol.for("react.memo_cache_sentinel") ? (K = { className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62" }, Q = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, i[20] = K, i[21] = Q) : (K = i[20], Q = i[21]);
		var X = (a = g.title) != null ? a : "", Y;
		i[22] !== X ? (Y = c.jsx("div", babelHelpers.extends({}, Q, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			maxLines: 1,
			children: X
		}) })), i[22] = X, i[23] = Y) : Y = i[23];
		var J;
		i[24] !== g.price ? (J = g.price != null ? c.jsx("div", {
			className: "x6s0dn4 xkh2ocl x78zum5 x129bwdz x1trrmfo x1gxa6cn xa0aww2",
			children: c.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: g.price
			})
		}) : null, i[24] = g.price, i[25] = J) : J = i[25];
		var Z;
		i[26] !== Y || i[27] !== J ? (Z = c.jsxs("div", babelHelpers.extends({}, K, { children: [Y, J] })), i[26] = Y, i[27] = J, i[28] = Z) : Z = i[28];
		var ee;
		i[29] === Symbol.for("react.memo_cache_sentinel") ? (ee = { className: "xamitd3" }, i[29] = ee) : ee = i[29];
		var te;
		i[30] !== h || i[31] !== N || i[32] !== u || i[33] !== D ? (te = c.jsx("div", babelHelpers.extends({}, ee, { children: h ? c.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 20,
			stroke: 4
		}) : c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			children: D ? c.jsx("span", {
				ref: I,
				className: "x67bb7w xnpuxes",
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: N,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: "knowledge-product-item-" + u + "-menu-btn"
				})
			}, "menu-btn") : null
		}) })), i[30] = h, i[31] = N, i[32] = u, i[33] = D, i[34] = te) : te = i[34];
		var ne;
		i[35] !== h || i[36] !== z || i[37] !== Z || i[38] !== te || i[39] !== A || i[40] !== F || i[41] !== O || i[42] !== B || i[43] !== W ? (ne = c.jsxs("div", babelHelpers.extends({
			ref: T,
			"data-testid": A,
			role: "button",
			tabIndex: F,
			"aria-disabled": h,
			"aria-label": O,
			onClick: B,
			onKeyDown: W,
			onFocus: q,
			onBlur: U,
			onMouseEnter: V,
			onMouseLeave: H
		}, G, { children: [
			z,
			Z,
			te
		] })), i[35] = h, i[36] = z, i[37] = Z, i[38] = te, i[39] = A, i[40] = F, i[41] = O, i[42] = B, i[43] = W, i[44] = ne) : ne = i[44];
		var re;
		i[45] !== E ? (re = E != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ProductItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: w,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: E.anchor,
				autoFocus: E.autoFocus,
				menu: E.menu
			} })
		}), i[45] = E, i[46] = re) : re = i[46];
		var oe;
		return i[47] !== ne || i[48] !== re ? (oe = c.jsxs(c.Fragment, { children: [ne, re] }), i[47] = ne, i[48] = re, i[49] = oe) : oe = i[49], oe;
	}
	l.default = g;
}), 226);
