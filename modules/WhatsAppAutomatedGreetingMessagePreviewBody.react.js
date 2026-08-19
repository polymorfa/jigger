__d("WhatsAppAutomatedGreetingMessagePreviewBody.react", [
	"fbt",
	"ix",
	"GeoBaseText.react",
	"GeoFlexbox.react",
	"Image.react",
	"WAMFlowsCTWAUtilsCTALabels.react",
	"geoMargin",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c, d = c || (c = o("react")), m = {
		advertiserAutomatedMessage: {
			height: "x1ycjhwn",
			alignItems: "x6s0dn4",
			justifyContent: "x13a6bvl",
			color: "x19c7zk",
			marginTop: "x1rhet7l",
			display: "x78zum5",
			marginBottom: "x12nagc",
			$$css: !0
		},
		AdBoxContainer: {
			backgroundColor: "x1dr8pv1",
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x1dm3dyd",
			borderEndStartRadius: "x1pv694p",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			marginBottom: "x1e56ztr",
			maxHeight: "x18wx58x",
			$$css: !0
		}
	}, p = s._(
		/*BTDS*/
		""
	), _ = s._(
		/*BTDS*/
		""
	), f = s._(
		/*BTDS*/
		""
	);
	function g(t) {
		var n = o("react-compiler-runtime").c(27), a = t.automatedGreetingMessageButton, i = t.automatedGreetingMessageButtonOnClick, l = t.imageCreative, s = t.pageProfileSrc, c = t.welcomeMessage, g = c != null ? c : "", h = a == null ? void 0 : a.label, y = a == null ? void 0 : a.icon, C;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xqui205" }, n[0] = C) : C = n[0];
		var b, v;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (b = d.jsx("div", babelHelpers.extends({}, C, { children: d.jsx(r("GeoFlexbox.react"), { children: d.jsx(r("Image.react"), { src: u("388906") }) }) })), v = { className: "x1q85c4o x15mokao x1a5l9x9 x7vuprf x1mg3h75 xqui205 x1f07zgu x6s0dn4 xqyf9gi" }, n[1] = b, n[2] = v) : (b = n[1], v = n[2]);
		var S;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex"))).props(m.AdBoxContainer, r("geoMargin").all4), n[3] = S) : S = n[3];
		var R;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x1obq294 x5a5i1n xde0f50 x15x8krk x1xegmmw x6s0dn4 x1fns5xo x1ba4aug x18wx58x xo92w5m x1berz8o x6ikm8r x10wlt62" }, n[4] = R) : R = n[4];
		var L;
		n[5] !== s ? (L = d.jsx(r("Image.react"), {
			height: 40,
			src: s
		}), n[5] = s, n[6] = L) : L = n[6];
		var E;
		n[7] !== l || n[8] !== L ? (E = d.jsxs("div", babelHelpers.extends({}, R, { children: [l, L] })), n[7] = l, n[8] = L, n[9] = E) : E = n[9];
		var k;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (k = d.jsxs("div", { children: [d.jsx("div", { children: d.jsx(r("GeoBaseText.react"), {
			color: "valueLabel",
			overflowWrap: "break-word",
			size: "value",
			weight: "bold",
			children: _
		}) }), d.jsx("div", { children: d.jsx(r("GeoBaseText.react"), {
			color: "placeholder",
			overflowWrap: "break-word",
			size: "value",
			children: f
		}) })] }), n[10] = k) : k = n[10];
		var I;
		n[11] !== E ? (I = d.jsx("div", babelHelpers.extends({}, S, { children: d.jsxs(r("GeoFlexbox.react"), {
			direction: "row",
			children: [E, k]
		}) })), n[11] = E, n[12] = I) : I = n[12];
		var T;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x1gslohp x13fj5qh x1sa5p1d" }, n[13] = T) : T = n[13];
		var D;
		n[14] !== g ? (D = d.jsx(r("GeoBaseText.react"), {
			color: "value",
			overflowWrap: "break-word",
			size: "value",
			children: g
		}), n[14] = g, n[15] = D) : D = n[15];
		var x;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (x = d.jsx(r("GeoFlexbox.react"), {
			direction: "row",
			xstyle: m.advertiserAutomatedMessage,
			children: d.jsx(r("GeoBaseText.react"), {
				color: "placeholder",
				overflowWrap: "break-word",
				size: "valueDescription",
				children: p
			})
		}), n[16] = x) : x = n[16];
		var $;
		n[17] !== D ? ($ = d.jsx("div", babelHelpers.extends({}, T, { children: d.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			children: [D, x]
		}) })), n[17] = D, n[18] = $) : $ = n[18];
		var P;
		n[19] !== i || n[20] !== y || n[21] !== h ? (P = h != null && d.jsx("div", {
			className: "x178xt8z x13fuv20 xkh9tda x1anpbxc x6s0dn4 xl56j7k x78zum5 xso508o",
			children: i != null ? d.jsxs("button", {
				className: "x78zum5 xl56j7k x6s0dn4 x1ypdohk x2b8uid x1y1aw1k xf159sx xwib8y2 xmzvs34 x12peec7 x972fbf x10w94by x1qhh985 x14e42zd x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xso508o xm6i5cn",
				"data-testid": void 0,
				onClick: i,
				children: [d.jsx("div", {
					className: "xso508o x6s0dn4 xl56j7k x78zum5 x1xegmmw",
					children: d.jsx(r("Image.react"), {
						height: 16,
						src: o("WAMFlowsCTWAUtilsCTALabels.react").getIconByCTALabel(h.toString()),
						title: h,
						width: 16
					})
				}), d.jsx(r("GeoBaseText.react"), {
					color: "inherit",
					size: "value",
					textAlign: "center",
					children: h
				})]
			}) : d.jsxs(r("GeoFlexbox.react"), {
				alignContent: "center",
				xstyle: r("geoMargin").all8,
				children: [d.jsx("div", {
					className: "xso508o x6s0dn4 xl56j7k x78zum5 x1xegmmw",
					children: y
				}), d.jsx(r("GeoBaseText.react"), {
					color: "inherit",
					size: "value",
					textAlign: "center",
					children: h
				})]
			})
		}), n[19] = i, n[20] = y, n[21] = h, n[22] = P) : P = n[22];
		var N;
		return n[23] !== $ || n[24] !== P || n[25] !== I ? (N = d.jsx("div", {
			"data-testid": void 0,
			children: d.jsx(r("GeoFlexbox.react"), {
				direction: "column",
				children: d.jsxs(r("GeoFlexbox.react"), {
					xstyle: r("geoMargin").start8,
					children: [b, d.jsx("div", babelHelpers.extends({}, v, { children: d.jsxs(r("GeoFlexbox.react"), {
						direction: "column",
						xstyle: r("geoMargin").bottom4,
						children: [
							I,
							$,
							P
						]
					}) }))]
				})
			})
		}), n[23] = $, n[24] = P, n[25] = I, n[26] = N) : N = n[26], N;
	}
	l.default = g;
}), 226);
