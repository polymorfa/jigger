__d("MWV2TombstonedMessage.react", [
	"fbt",
	"BaseTheme.react",
	"I64",
	"MWGhostMessageBubbleWrapper.react",
	"MWPColorUtils",
	"MWXMessageBubble.react",
	"MWXPressable.react",
	"MWXText.react",
	"defaultMWPThreadTheme",
	"react",
	"react-compiler-runtime",
	"react-strict-dom",
	"useMWPThreadTheme"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useEffect, p = d.useMemo, _ = (u || (u = o("I64"))).of_int32(550655), f = .1, g = .5, h = "var(--surface-background)";
	function y(e, t) {
		var n = o("MWPColorUtils").int64ToRGBA(e, t);
		return "linear-gradient(" + n + ", " + n + ")";
	}
	var C = {
		dark: { "chat-message-border-width": "0px" },
		light: { "chat-message-border-width": "0px" },
		type: "VARIABLES"
	}, b = {
		incoming: {
			color: "x18lvrbx",
			$$css: !0
		},
		message: {
			fontStyle: "x1k4tb9n",
			marginBottom: "x12nagc",
			marginTop: "x1gslohp",
			$$css: !0
		},
		messageWithOpacity: {
			opacity: "x1ks1olk",
			$$css: !0
		},
		outgoing: {
			color: "xyk4ms5",
			$$css: !0
		}
	};
	function v(e) {
		var t, n = o("react-compiler-runtime").c(46), a = e.children, i = e.connectBottom, l = e.connectTop, u = e.isOutgoing, d = e.isReply, p = e.isVisibilityPlaceholder, v = e.mediaRenderQpl, S = e.onPress, R = e.xstyle, L = i === void 0 ? !1 : i, E = l === void 0 ? !1 : l, k = p === void 0 ? !1 : p, I = r("useMWPThreadTheme")(), T = I == null || (t = I.threadTheme) == null ? void 0 : t.fbid, D;
		n[0] !== T ? (D = o("defaultMWPThreadTheme").isDefaultTheme(T), n[0] = T, n[1] = D) : D = n[1];
		var x = D, $;
		e: {
			var P, N;
			if (k !== !0) {
				$ = null;
				break e;
			}
			var M = (P = I == null || (N = I.threadTheme) == null ? void 0 : N.fallbackColor) != null ? P : _, w;
			n[2] !== M ? (w = y(M, g), n[2] = M, n[3] = w) : w = n[3];
			var A;
			n[4] !== w ? (A = babelHelpers.extends({}, C.dark, {
				"chat-outgoing-message-background-gradient": w,
				"chat-outgoing-message-bubble-background-color": h
			}), n[4] = w, n[5] = A) : A = n[5];
			var F;
			n[6] !== M ? (F = y(M, f), n[6] = M, n[7] = F) : F = n[7];
			var O;
			n[8] !== F ? (O = babelHelpers.extends({}, C.light, {
				"chat-outgoing-message-background-gradient": F,
				"chat-outgoing-message-bubble-background-color": h
			}), n[8] = F, n[9] = O) : O = n[9];
			var B;
			n[10] !== O || n[11] !== A ? (B = {
				dark: A,
				light: O,
				type: "VARIABLES"
			}, n[10] = O, n[11] = A, n[12] = B) : B = n[12], $ = B;
		}
		var W = $, q, U;
		n[13] !== v ? (q = function() {
			v == null || v.addPoint("render-tombstoned-message", { bool: { has_preview: !1 } }), v == null || v.endSuccessAfterDelay();
		}, U = [v], n[13] = v, n[14] = q, n[15] = U) : (q = n[14], U = n[15]), m(q, U);
		var V = k === !0 ? c.Fragment : x ? r("MWGhostMessageBubbleWrapper.react") : c.Fragment, H;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
			/*BTDS*/
			""
		), n[16] = H) : H = n[16];
		var G = H, z = u ? "right" : "left", j = k === !0 || x ? "secondary" : u ? "white" : "primary", K = !x && k !== !0 && b.messageWithOpacity, Q = k !== !0 && (u ? b.outgoing : b.incoming), X;
		n[17] !== K || n[18] !== Q || n[19] !== R ? (X = [
			b.message,
			K,
			Q,
			R
		], n[17] = K, n[18] = Q, n[19] = R, n[20] = X) : X = n[20];
		var Y;
		n[21] !== a || n[22] !== X ? (Y = c.jsx(o("react-strict-dom").html.div, {
			dir: "auto",
			style: X,
			children: a
		}), n[21] = a, n[22] = X, n[23] = Y) : Y = n[23];
		var J;
		n[24] !== j || n[25] !== Y ? (J = c.jsx(r("MWXText.react"), {
			color: j,
			type: "body3",
			children: Y
		}), n[24] = j, n[25] = Y, n[26] = J) : J = n[26];
		var Z = d === !0 ? "quoted" : u ? "outgoing" : "incoming", ee = k === !0 && u ? "opaque" : x ? "default" : "opaque", te;
		n[27] !== L || n[28] !== E || n[29] !== z || n[30] !== J || n[31] !== Z || n[32] !== ee ? (te = c.jsx(r("MWXMessageBubble.react"), {
			align: z,
			children: J,
			color: Z,
			connectBottom: L,
			connectTop: E,
			testid: void 0,
			variant: ee
		}), n[27] = L, n[28] = E, n[29] = z, n[30] = J, n[31] = Z, n[32] = ee, n[33] = te) : te = n[33];
		var ne = te;
		if (k === !0) {
			var re;
			n[34] !== ne || n[35] !== S ? (re = S != null ? c.jsx(r("MWXPressable.react"), {
				onPress: S,
				overlayDisabled: !0,
				children: ne
			}) : ne, n[34] = ne, n[35] = S, n[36] = re) : re = n[36];
			var oe = re, ae = W != null ? W : C, ie;
			return n[37] !== ae || n[38] !== oe ? (ie = c.jsx(r("BaseTheme.react"), {
				config: ae,
				children: oe
			}), n[37] = ae, n[38] = oe, n[39] = ie) : ie = n[39], ie;
		}
		var le;
		n[40] !== ne || n[41] !== S ? (le = S != null ? c.jsx(r("MWXPressable.react"), {
			label: G,
			onPress: S,
			overlayDisabled: !0,
			children: ne
		}) : ne, n[40] = ne, n[41] = S, n[42] = le) : le = n[42];
		var se;
		return n[43] !== V || n[44] !== le ? (se = c.jsx(V, { children: le }), n[43] = V, n[44] = le, n[45] = se) : se = n[45], se;
	}
	l.default = v;
}), 226);
