__d("WAWebBizAIKnowledgeRow.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcDelete.react",
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
			display: "x78zum5",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		rowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		rowInteractive: {
			cursor: "x1ypdohk",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(51), a = t.alt, i = t.deleting, l = t.fallbackIcon, u = t.index, d = t.label, m = t.onDelete, g = t.secondaryLine, h = t.testidPrefix, y = t.thumbnailUrl, C = i === void 0 ? !1 : i, b = _(null), v = b[0], S = b[1], R = _(!1), L = R[0], E = R[1], k = _(!1), I = k[0], T = k[1], D = _(null), x = D[0], $ = D[1], P = p(null), N = p(null), M;
		n[0] !== u || n[1] !== m || n[2] !== h ? (M = function() {
			var e, t = (e = P.current) != null ? e : N.current;
			t != null && $({
				anchor: t,
				menu: c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						m == null || m(), $(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: h + "-" + u + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
		}, n[0] = u, n[1] = m, n[2] = h, n[3] = M) : M = n[3];
		var w = M, A;
		n[4] !== w ? (A = function(t) {
			t.stopPropagation(), w();
		}, n[4] = w, n[5] = A) : A = n[5];
		var F = A, O;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (O = function() {
			$(null);
		}, n[6] = O) : O = n[6];
		var B = O, W = y != null && y !== v, q;
		n[7] !== a || n[8] !== l || n[9] !== u || n[10] !== W || n[11] !== h || n[12] !== y ? (q = W ? c.jsx("img", {
			src: y,
			alt: a,
			onError: function() {
				return S(y);
			},
			"data-testid": h + "-" + u + "-thumbnail",
			className: "x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1peatla x19kjcj4 x1fu8urw"
		}) : c.jsx("div", {
			"data-testid": h + "-" + u + "-icon-placeholder",
			className: "x6s0dn4 x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x2lah0s x1peatla xl56j7k x1fu8urw",
			children: l
		}), n[7] = a, n[8] = l, n[9] = u, n[10] = W, n[11] = h, n[12] = y, n[13] = q) : q = n[13];
		var U = q, V;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }, n[14] = V) : V = n[14];
		var H;
		n[15] !== d ? (H = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			maxLines: 1,
			children: d
		}), n[15] = d, n[16] = H) : H = n[16];
		var G;
		n[17] !== g ? (G = g != null ? c.jsx(r("WDSText.react"), {
			colorName: g.isError ? "secondaryNegative" : "contentDeemphasized",
			type: "Body3",
			maxLines: g.isError ? 2 : 1,
			children: g.node
		}) : null, n[17] = g, n[18] = G) : G = n[18];
		var z;
		n[19] !== H || n[20] !== G ? (z = c.jsxs("div", babelHelpers.extends({}, V, { children: [H, G] })), n[19] = H, n[20] = G, n[21] = z) : z = n[21];
		var j = z;
		if (m == null) {
			var K = h + "-" + u, Q;
			n[22] === Symbol.for("react.memo_cache_sentinel") ? (Q = { className: "x6s0dn4 xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1f0uite xs2akgl x16ovd2e x12xbjc7 xvtqlqk xf7dkkf x1ubxc9n" }, n[22] = Q) : Q = n[22];
			var X;
			return n[23] !== j || n[24] !== U || n[25] !== K ? (X = c.jsxs("div", babelHelpers.extends({ "data-testid": K }, Q, { children: [U, j] })), n[23] = j, n[24] = U, n[25] = K, n[26] = X) : X = n[26], X;
		}
		var Y = (L || I || x != null) && !C, J = h + "-" + u, Z;
		n[27] !== w ? (Z = function(t) {
			t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), w());
		}, n[27] = w, n[28] = Z) : Z = n[28];
		var ee, te, ne, re, oe;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (ee = function() {
			return T(!0);
		}, te = function(t) {
			N.current != null && t.relatedTarget instanceof Node && N.current.contains(t.relatedTarget) || T(!1);
		}, ne = function() {
			return E(!0);
		}, re = function() {
			return E(!1);
		}, oe = (e || (e = r("stylex"))).props(f.row, f.rowInteractive, f.rowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), n[29] = ee, n[30] = te, n[31] = ne, n[32] = re, n[33] = oe) : (ee = n[29], te = n[30], ne = n[31], re = n[32], oe = n[33]);
		var ae;
		n[34] !== C || n[35] !== F || n[36] !== u || n[37] !== Y || n[38] !== h ? (ae = C ? c.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 20,
			stroke: 4,
			testid: h + "-" + u + "-deleting-spinner"
		}) : c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			children: Y ? c.jsx("span", {
				ref: P,
				className: "x67bb7w xnpuxes",
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: F,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: h + "-" + u + "-menu-btn"
				})
			}, "menu-btn") : null
		}), n[34] = C, n[35] = F, n[36] = u, n[37] = Y, n[38] = h, n[39] = ae) : ae = n[39];
		var ie;
		n[40] !== j || n[41] !== U || n[42] !== J || n[43] !== Z || n[44] !== ae ? (ie = c.jsxs("div", babelHelpers.extends({
			ref: N,
			"data-testid": J,
			role: "button",
			tabIndex: 0,
			onKeyDown: Z,
			onFocus: ee,
			onBlur: te,
			onMouseEnter: ne,
			onMouseLeave: re
		}, oe, { children: [
			U,
			j,
			ae
		] })), n[40] = j, n[41] = U, n[42] = J, n[43] = Z, n[44] = ae, n[45] = ie) : ie = n[45];
		var le;
		n[46] !== x ? (le = x != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "KnowledgeItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: B,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: x.anchor,
				menu: x.menu
			} })
		}), n[46] = x, n[47] = le) : le = n[47];
		var se;
		return n[48] !== ie || n[49] !== le ? (se = c.jsxs(c.Fragment, { children: [ie, le] }), n[48] = ie, n[49] = le, n[50] = se) : se = n[50], se;
	}
	l.default = g;
}), 226);
