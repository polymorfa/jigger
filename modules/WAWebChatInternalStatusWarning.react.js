__d("WAWebChatInternalStatusWarning.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebL10N",
	"WAWebThemeContext",
	"WAWebUimUie.react",
	"WDSIconIcInfo.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatInternalStatusHookWrapper"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = {
		padding5: {
			paddingTop: "x123j3cw",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "xs9asl8",
			paddingInlineStart: "xaso8d8",
			$$css: !0
		},
		paddingInline5: {
			paddingInlineStart: "xaso8d8",
			paddingInlineEnd: "x1gabggj",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginEndQuarter: {
			marginInlineEnd: "x16q7b9a",
			$$css: !0
		}
	}, f = {
		refreshOuterContainer: {
			fontSize: "x1nxh6w3",
			color: "xhslqc4",
			backgroundColor: "xk7ee7b",
			borderStartStartRadius: "x12l2aii",
			borderStartEndRadius: "x1mbk4o",
			boxShadow: "xz16w4b",
			transition: "x1m0b2ad",
			$$css: !0
		},
		internLabelRefresh: {
			display: "x78zum5",
			alignItems: "xuk3077",
			justifyContent: "x1qughib",
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.tz, n = 128336, a = d(function() {
			try {
				var e = new Date().toLocaleString(r("WAWebL10N").getFullLocale(), {
					timeZone: t,
					hour: "2-digit",
					minute: "2-digit",
					hour12: !1
				}), o = e.split(":"), a = o[0], i = o[1], l = o[2], s = parseInt(a, 10), u = parseInt(i, 10), c;
				u > 15 && u < 45 ? c = n + ((s % 12 || 12) - 1) + 12 : u >= 45 ? c = n + s % 12 : c = n + (s % 12 || 12) - 1;
				var d = String.fromCodePoint(c);
				return d + " " + e;
			} catch (e) {
				return null;
			}
		}, [t]), i = p(a()), l = i[0], s = i[1];
		return m(function() {
			var e = window.setInterval(function() {
				s(a());
			}, 1e3);
			return function() {
				window.clearInterval(e);
			};
		}, [a]), l != null && u.jsx("span", babelHelpers.extends({ title: "This is the current time in the timezone(" + t + ") of the user" }, {
			0: { className: "x1x4hbl8 xd0e0f8 x1ey7xld xxl7t6f x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xyqdw3p x1im30kd xg8j3zb x1djpfga xpcyujq" },
			1: { className: "x11emb26 x6182ab x1ey7xld xxl7t6f x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xyqdw3p x1im30kd xg8j3zb x1djpfga xpcyujq" }
		}[!!o("WAWebThemeContext").isDarkTheme() << 0], { children: l }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e.map(function(e, t) {
			switch (e.name) {
				case "tz": return u.jsx(g, { tz: e.params[0] }, t);
				default: return null;
			}
		});
	}
	function y(e) {
		var t, n = o("react-compiler-runtime").c(27), a = e.id, i = e.ref, l = e.renderImmediately, c = (t = r("useWAWebChatInternalStatusHookWrapper")(a)) != null ? t : {}, d = c.addons, m = c.hasStatus, p = c.status;
		if (l !== !0 && m !== !0) return null;
		var g, y, b, v, S;
		if (n[0] !== i) {
			var R = [_.padding5, f.refreshOuterContainer];
			g = o("WAWebUimUie.react").UIE, b = i, v = "ComposeBoxInternalStatus", S = !1, y = { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 x1nxh6w3 xhslqc4 xk7ee7b x12l2aii x1mbk4o xz16w4b x1m0b2ad" }, n[0] = i, n[1] = g, n[2] = y, n[3] = b, n[4] = v, n[5] = S;
		} else g = n[1], y = n[2], b = n[3], v = n[4], S = n[5];
		var L;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x78zum5 x6s0dn4 x14atkfc xyi3aci xwf5gio xhjsbib xaso8d8 x1gabggj x889kno x1a8lsjc" }, n[6] = L) : L = n[6];
		var E;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(r("WAWebFlexItem.react"), { children: u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://www.internalfb.com/intern/wiki/WhatsApp/Eng/Client/Web/Reference/Intern_Only_Away_Status/",
			xstyle: [f.internLabelRefresh, _.paddingInline5],
			children: [u.jsx(r("WDSIconIcInfo.react"), {
				displayInline: !0,
				height: 11,
				width: 11,
				xstyle: _.marginEndQuarter
			}), s._(
				/*BTDS*/
				""
			)]
		}) }), n[7] = E) : E = n[7];
		var k;
		n[8] !== d ? (k = h(d != null ? d : []).map(C), n[8] = d, n[9] = k) : k = n[9];
		var I;
		n[10] !== k ? (I = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			wrap: "wrap",
			children: [E, k]
		}), n[10] = k, n[11] = I) : I = n[11];
		var T;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "xpcyujq" }, n[12] = T) : T = n[12];
		var D;
		n[13] !== p ? (D = u.jsx("span", babelHelpers.extends({}, T, { children: p })), n[13] = p, n[14] = D) : D = n[14];
		var x;
		n[15] !== D || n[16] !== I ? (x = u.jsxs("div", babelHelpers.extends({}, L, { children: [I, D] })), n[15] = D, n[16] = I, n[17] = x) : x = n[17];
		var $;
		n[18] !== y || n[19] !== x ? ($ = u.jsx("div", babelHelpers.extends({}, y, { children: x })), n[18] = y, n[19] = x, n[20] = $) : $ = n[20];
		var P;
		return n[21] !== g || n[22] !== $ || n[23] !== b || n[24] !== v || n[25] !== S ? (P = u.jsx(g, {
			ref: b,
			displayName: v,
			escapable: S,
			children: $
		}), n[21] = g, n[22] = $, n[23] = b, n[24] = v, n[25] = S, n[26] = P) : P = n[26], P;
	}
	function C(e, t) {
		return u.jsx(r("WAWebFlexItem.react"), { children: e }, t);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n = o("react-compiler-runtime").c(4), a = e.id, i = (t = r("useWAWebChatInternalStatusHookWrapper")(a)) != null ? t : {}, l = i.hasOverlay, s = i.overlay;
		if (l !== !0) return null;
		var c;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x10l6tqk x13vifvy x1o0tod xbagc2z x1c9tyrk xeusxvb x1pahc9y x1ertn4p" }, n[0] = c) : c = n[0];
		var d;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1lzn6yi xw6cgo0 x1h227xn" }, n[1] = d) : d = n[1];
		var m;
		return n[2] !== s ? (m = u.jsx("div", babelHelpers.extends({}, c, { children: u.jsx("svg", {
			width: "100%",
			height: "100%",
			viewBox: "0 0 50 50",
			children: u.jsx("text", babelHelpers.extends({}, d, {
				x: "50%",
				y: "50%",
				children: s
			}))
		}) })), n[2] = s, n[3] = m) : m = n[3], m;
	}
	var v = {
		InternalStatusWarningComposeBox: y,
		InternalStatusWarningImageOverlay: b
	};
	l.default = v;
}), 226);
