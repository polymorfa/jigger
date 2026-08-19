__d("WAWebGroupInfoEventsSection.react", [
	"fbt",
	"WAWebChevronIcon.react",
	"WAWebDrawerSection.react",
	"WAWebEventPreviewBlock.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebSpinner.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebEventFutureEvents"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, g = {
		eventCount: {
			fontSize: "x6prxxf",
			color: "xhslqc4",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		outerContainer: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			position: "x1n2onr6",
			$$css: !0
		},
		withStartFade: {
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_backgroundImage": "xg0bfl6",
			"::before_width": "x1o4m6q",
			"::before_height": "xszcg87",
			$$css: !0
		},
		withStartFadeRtl: {
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_backgroundImage": "xo1xex6",
			"::before_width": "x1o4m6q",
			"::before_height": "xszcg87",
			$$css: !0
		},
		withEndFade: {
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_insetInlineEnd": "x1unh1gc",
			"::after_left": null,
			"::after_right": null,
			"::after_backgroundImage": "x10tw4oa",
			"::after_width": "xk69ee5",
			"::after_height": "x1wsn0xg",
			$$css: !0
		},
		withEndFadeRtl: {
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_insetInlineEnd": "x1unh1gc",
			"::after_left": null,
			"::after_right": null,
			"::after_backgroundImage": "x12nvoqz",
			"::after_width": "xk69ee5",
			"::after_height": "x1wsn0xg",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(33), a = t.chat, i = t.onAllEvents, l = t.onEventInfo, u = o("useWAWebEventFutureEvents").useFutureEvents(a), d = _(!1), h = d[0], C = d[1], b = _(!0), v = b[0], S = b[1], R = p(null), L = p(null), E;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			var e = L.current, t = function() {
				if (e == null) {
					S(!1), C(!1);
					return;
				}
				var t = e.clientWidth, n = e.scrollLeft, r = e.scrollWidth, o = Math.abs(n / (r - t));
				o > .05 ? C(!0) : C(!1), o > .95 ? S(!1) : S(!0);
			};
			return e == null || e.addEventListener("scroll", t), (function() {
				e == null || e.removeEventListener("scroll", t);
			});
		}, n[0] = E) : E = n[0];
		var k;
		if (n[1] !== u.length ? (k = [u.length], n[1] = u.length, n[2] = k) : k = n[2], m(E, k), u.length === 0) return null;
		var I = u.length === 1, T;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), n[3] = T) : T = n[3];
		var D = T, x;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			iconXstyle: g.secondaryColor,
			directional: !0,
			height: 21
		}), n[4] = x) : x = n[4];
		var $ = x, P;
		n[5] !== u ? (P = c.jsx(y, { msgs: u }), n[5] = u, n[6] = P) : P = n[6];
		var N;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx("div", { children: $ }), n[7] = N) : N = n[7];
		var M;
		n[8] !== P ? (M = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [P, N]
		}), n[8] = P, n[9] = M) : M = n[9];
		var w = M, A;
		if (n[10] !== u || n[11] !== l || n[12] !== I) {
			var F;
			n[14] !== l || n[15] !== I ? (F = function(t) {
				return c.jsx(r("WAWebEventPreviewBlock.react"), {
					eventMsg: t,
					fullWidth: I,
					onClick: function() {
						return l(t);
					}
				}, t.id.toString());
			}, n[14] = l, n[15] = I, n[16] = F) : F = n[16], A = u.map(F), n[10] = u, n[11] = l, n[12] = I, n[13] = A;
		} else A = n[13];
		var O = A, B = r("WAWebL10N").isRTL() ? g.withEndFadeRtl : g.withEndFade, W = r("WAWebL10N").isRTL() ? g.withStartFadeRtl : g.withStartFade, q = O.length > 0 && f.paddingBottom10, U;
		n[17] !== I || n[18] !== v || n[19] !== h ? (U = (e || (e = r("stylex"))).props([g.outerContainer, o("WDSPaddings.stylex").wdsPaddings.paddingHor20].concat(v && !I ? [B] : [], h && !I ? [W] : [])), n[17] = I, n[18] = v, n[19] = h, n[20] = U) : U = n[20];
		var V;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "xw2csxc x10wlt62 xuxw1ft" }, n[21] = V) : V = n[21];
		var H;
		n[22] !== O || n[23] !== V ? (H = c.jsx("div", babelHelpers.extends({ ref: L }, V, {
			dir: "auto",
			children: O
		})), n[22] = O, n[23] = V, n[24] = H) : H = n[24];
		var G;
		n[25] !== U || n[26] !== H ? (G = c.jsx("div", babelHelpers.extends({ ref: R }, U, { children: H })), n[25] = U, n[26] = H, n[27] = G) : G = n[27];
		var z;
		return n[28] !== i || n[29] !== w || n[30] !== G || n[31] !== q ? (z = c.jsx(r("WAWebDrawerSection.react"), {
			subtitle: w,
			theme: "chat-info",
			title: D,
			titleOnClick: i,
			titleTestId: "section-events",
			xstyle: q,
			children: G
		}), n[28] = i, n[29] = w, n[30] = G, n[31] = q, n[32] = z) : z = n[32], z;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(3), a = t.msgs, i = a.length, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (e || (e = r("stylex"))).props([g.eventCount, o("WDSMargins.stylex").wdsMargins.marginEnd8]), n[0] = l) : l = n[0];
		var u;
		return n[1] !== i ? (u = c.jsx("div", babelHelpers.extends({}, l, { children: i != null ? s._(
			/*BTDS*/
			"",
			[s._param("number-of-events", i, [0, i])]
		) : c.jsx(o("WAWebSpinner.react").Spinner, {
			size: 16,
			stroke: 6
		}) })), n[1] = i, n[2] = u) : u = n[2], u;
	}
	l.default = h;
}), 226);
