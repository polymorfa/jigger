__d("MWChatBubbleEmphasisRing.react", [
	"BaseThemeProvider.react",
	"MWInboxMessageSearchJumpToResultQPL",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useEffect, d = {
		borderRadius: 22,
		borderStyle: "solid",
		borderWidth: 2,
		content: "''",
		display: "block",
		pointerEvents: "none",
		position: "absolute",
		zIndex: 1
	}, m = "xyt3z58-B", p = {
		emphasis_animation: {
			animationDelay: "x1t83zlg",
			animationDuration: "xxkxylk",
			animationIterationCount: "x1v7wizp",
			animationName: "x1yrix95",
			animationTimingFunction: "x4hg4is",
			$$css: !0
		},
		emphasis_ring: {
			backgroundColor: "xjbqb8w",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1gp4ovq",
			borderInlineEndWidth: "x9p2oo0",
			borderBottomWidth: "x1h2mt7u",
			borderInlineStartWidth: "x56jcm7",
			display: "x78zum5",
			maxWidth: "x1hvl878",
			position: "x1n2onr6",
			"::after_borderStartStartRadius": "x11xhja1",
			"::after_borderStartEndRadius": "x1intklx",
			"::after_borderEndEndRadius": "xl8y6zb",
			"::after_borderEndStartRadius": "xa6mvtn",
			"::after_borderTopStyle": "xynf4tj",
			"::after_borderInlineEndStyle": "xdjs2zz",
			"::after_borderBottomStyle": "x1r9ni5o",
			"::after_borderInlineStartStyle": "xvsnedh",
			"::after_borderTopWidth": "x31ga2r",
			"::after_borderInlineEndWidth": "xbpqnmr",
			"::after_borderBottomWidth": "x13afdcp",
			"::after_borderInlineStartWidth": "xvpsmcx",
			"::after_content": "x100rkj9",
			"::after_display": "xhkezso",
			"::after_pointerEvents": "x2q1x1w",
			"::after_position": "x1j6awrg",
			"::after_zIndex": "xitxdhh",
			"::after_borderTopColor": "x1yzler7",
			"::after_borderInlineEndColor": "xqezphk",
			"::after_borderBottomColor": "xxqiif8",
			"::after_borderInlineStartColor": "x1hju3cp",
			"::after_bottom": "xdb1ctf",
			"::after_insetInlineEnd": "x195fuvl",
			"::after_insetInlineStart": "x2b3t2v",
			"::after_left": null,
			"::after_right": null,
			"::after_top": "x7kqs8i",
			"::before_borderStartStartRadius": "x1xcpn08",
			"::before_borderStartEndRadius": "xuusd66",
			"::before_borderEndEndRadius": "xzgxq3h",
			"::before_borderEndStartRadius": "xr6sqsc",
			"::before_borderTopStyle": "xnvurfn",
			"::before_borderInlineEndStyle": "x1v3rft4",
			"::before_borderBottomStyle": "x1opv7go",
			"::before_borderInlineStartStyle": "x1rovbrg",
			"::before_borderTopWidth": "x1b8stmw",
			"::before_borderInlineEndWidth": "x1p3pj1f",
			"::before_borderBottomWidth": "xmbliey",
			"::before_borderInlineStartWidth": "xdgx9oq",
			"::before_content": "x10tli2e",
			"::before_display": "x1fgarty",
			"::before_pointerEvents": "xkk1bqk",
			"::before_position": "x1hmns74",
			"::before_zIndex": "x12maryy",
			"::before_borderTopColor": "xtei6gu",
			"::before_borderInlineEndColor": "x1qsbhhb",
			"::before_borderBottomColor": "xxs4umj",
			"::before_borderInlineStartColor": "xbo42tm",
			"::before_bottom": "xe80sof",
			"::before_insetInlineEnd": "xekda60",
			"::before_insetInlineStart": "xvw6utc",
			"::before_left": null,
			"::before_right": null,
			"::before_opacity": "x1u3qutx",
			"::before_top": "x51xajf",
			$$css: !0
		},
		emphasis_ring_connect_bottom_incoming: {
			"::after_borderEndStartRadius": "x1rrhjjp",
			"::before_borderEndStartRadius": "x1tnjvmn",
			$$css: !0
		},
		emphasis_ring_connect_bottom_outgoing: {
			"::after_borderEndEndRadius": "x12o4cpz",
			"::before_borderEndEndRadius": "x199sca6",
			$$css: !0
		},
		emphasis_ring_connect_top_incoming: {
			"::after_borderStartStartRadius": "x1wdn0qd",
			"::before_borderStartStartRadius": "x1m0m31w",
			$$css: !0
		},
		emphasis_ring_connect_top_outgoing: {
			"::after_borderStartEndRadius": "x1cm9i5h",
			"::before_borderStartEndRadius": "xpzouej",
			$$css: !0
		},
		emphasis_ring_flatten_top: {
			borderTop: "xj754qj",
			"::after_borderStartEndRadius": "x15rne4o",
			"::after_borderStartStartRadius": "x1yspkhg",
			"::after_borderTop": "x12mb4m8",
			"::before_borderStartEndRadius": "xi0d610",
			"::before_borderStartStartRadius": "xnh6gb5",
			"::before_borderTop": "x12h067n",
			$$css: !0
		},
		emphasis_ring_precedes_xma: {
			borderBottom: "x6074qk",
			width: "xh8yej3",
			"::after_borderBottom": "x8kkiyc",
			"::after_borderEndEndRadius": "xcrig1f",
			"::after_borderEndStartRadius": "x7oczbe",
			"::before_borderBottom": "x1uddva6",
			"::before_borderEndEndRadius": "xjd5t2z",
			"::before_borderEndStartRadius": "x1xd7p0v",
			$$css: !0
		}
	}, _ = {
		"chat-outgoing-message-background-gradient": "none",
		"chat-outgoing-message-bubble-background-color": "var(--mwp-primary-theme-color)"
	}, f = {
		dark: _,
		light: _,
		type: "VARIABLES"
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(14), a = t.flattenTop, i = t.message, l = t.children, s = t.connectBottom, d = t.connectTop, m = t.outgoing, _ = t.precedesXMA, g = m ? p.emphasis_ring_connect_top_outgoing : p.emphasis_ring_connect_top_incoming, h = m ? p.emphasis_ring_connect_bottom_outgoing : p.emphasis_ring_connect_bottom_incoming, y = !_ && s && h, C = d && g, b = _ && p.emphasis_ring_precedes_xma, v = a && p.emphasis_ring_flatten_top, S;
		n[0] !== y || n[1] !== C || n[2] !== b || n[3] !== v ? (S = [
			p.emphasis_animation,
			p.emphasis_ring,
			y,
			C,
			b,
			v
		], n[0] = y, n[1] = C, n[2] = b, n[3] = v, n[4] = S) : S = n[4];
		var R = S, L;
		n[5] !== (i == null ? void 0 : i.messageId) || n[6] !== (i == null ? void 0 : i.offlineThreadingId) ? (L = function() {
			o("MWInboxMessageSearchJumpToResultQPL").endSuccessIfJumpedToMessage({
				messageId: i == null ? void 0 : i.messageId,
				offlineThreadingId: i == null ? void 0 : i.offlineThreadingId
			});
		}, n[5] = i == null ? void 0 : i.messageId, n[6] = i == null ? void 0 : i.offlineThreadingId, n[7] = L) : L = n[7];
		var E = i == null ? void 0 : i.messageId, k = i == null ? void 0 : i.offlineThreadingId, I;
		n[8] !== E || n[9] !== k ? (I = [E, k], n[8] = E, n[9] = k, n[10] = I) : I = n[10], c(L, I);
		var T;
		return n[11] !== l || n[12] !== R ? (T = u.jsx(r("BaseThemeProvider.react"), {
			config: f,
			children: function(n, o) {
				return u.jsx("div", {
					className: (e || (e = r("stylex")))(R, n),
					"data-testid": void 0,
					style: o,
					children: l
				});
			}
		}), n[11] = l, n[12] = R, n[13] = T) : T = n[13], T;
	}
	l.default = g;
}), 98);
