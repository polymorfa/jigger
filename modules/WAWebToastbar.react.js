__d("WAWebToastbar.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebTabOrder",
	"WAWebVelocityTransitionGroup",
	"WDSFocusStateStyles",
	"WDSIconIcClose.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useHoverState",
	"useWAWebFocusState"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInlineStart13: {
			marginInlineStart: "x2kejxg",
			$$css: !0
		}
	}, m = 24, p = {
		container: {
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			zIndex: "xoz0ns6",
			width: "xh8yej3",
			backgroundColor: "x1280gxy",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		childrenContainer: {
			display: "x3nfvp2",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(35), n = e.alwaysShowDismissBtn, a = e.children, i = e.childrenXStyle, l = e.dismissible, _ = e.dismissXstyle, f = e.hidden, g = e.onClick, h = e.onDismiss, y = e.wrapperXstyle, C = f === void 0 ? !1 : f, b = c(!1), v = b[0], S = b[1], R = r("useHoverState")(), L = R.isHovered, E = R.onMouseEnter, k = R.onMouseLeave, I = r("useWAWebFocusState")(), T = I[0], D = I[1], x = r("useWAWebFocusState")(), $ = x[0], P = x[1], N;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[0] = N) : N = t[0];
		var M = N, w;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsx(r("WDSTooltip.react"), {
			label: M,
			children: u.jsx(r("WDSIconIcClose.react"), {
				height: m,
				"aria-label": M,
				xstyle: p.icon
			})
		}), t[1] = w) : w = t[1];
		var A = w, F = null;
		if (!v && !C) {
			var O;
			t[2] !== n || t[3] !== $ || t[4] !== P || t[5] !== L || t[6] !== D || t[7] !== h ? (O = !n && !L && !D && !P ? null : u.jsx(o("WAWebClickable.react").Clickable, {
				ref: $,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				onClick: function(t) {
					t == null || t.preventDefault(), t == null || t.stopPropagation(), S(!0), h == null || h();
				},
				children: A
			}), t[2] = n, t[3] = $, t[4] = P, t[5] = L, t[6] = D, t[7] = h, t[8] = O) : O = t[8];
			var B = O, W;
			t[9] !== y ? (W = [
				o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
				d.paddingBottom10,
				p.container,
				y
			], t[9] = y, t[10] = W) : W = t[10];
			var q = D && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, U;
			t[11] !== i || t[12] !== q ? (U = [
				d.marginInlineStart13,
				p.childrenContainer,
				q,
				i
			], t[11] = i, t[12] = q, t[13] = U) : U = t[13];
			var V;
			t[14] !== a || t[15] !== U ? (V = u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: U,
				align: "center",
				justify: "center",
				grow: 1,
				children: a
			}), t[14] = a, t[15] = U, t[16] = V) : V = t[16];
			var H;
			t[17] !== B || t[18] !== _ || t[19] !== l ? (H = l === !0 && u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd20, _],
				grow: 0,
				shrink: 0,
				basis: m,
				children: u.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "noop",
					children: B
				})
			}), t[17] = B, t[18] = _, t[19] = l, t[20] = H) : H = t[20];
			var G;
			t[21] !== W || t[22] !== V || t[23] !== H ? (G = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				xstyle: W,
				children: [V, H]
			}), t[21] = W, t[22] = V, t[23] = H, t[24] = G) : G = t[24], F = G;
		}
		var z;
		t[25] !== F ? (z = u.jsx(r("WAWebVelocityTransitionGroup"), {
			component: "div",
			transitionName: "toast-transition",
			children: F
		}), t[25] = F, t[26] = z) : z = t[26];
		var j;
		t[27] !== E || t[28] !== k || t[29] !== z ? (j = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onMouseEnter: E,
			onMouseLeave: k,
			children: z
		}), t[27] = E, t[28] = k, t[29] = z, t[30] = j) : j = t[30];
		var K = j;
		if (F != null) {
			var Q;
			return t[31] !== K || t[32] !== T || t[33] !== g ? (Q = u.jsx(o("WAWebClickable.react").Clickable, {
				ref: T,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				onClick: g,
				children: K
			}), t[31] = K, t[32] = T, t[33] = g, t[34] = Q) : Q = t[34], Q;
		}
		return K;
	}
	l.default = _;
}), 226);
