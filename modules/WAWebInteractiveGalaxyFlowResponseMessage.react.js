__d("WAWebInteractiveGalaxyFlowResponseMessage.react", [
	"fbt",
	"WABidi",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebGetGalaxyFlowCtaButton",
	"WAWebGetGalaxyFlowsActionFromButton",
	"WAWebL10N",
	"WAWebMessageMeta.react",
	"WAWebText.react",
	"WDSIconIcDescription.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		innerBubble: {
			height: "xdiz9cm",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		roundIconContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x14qfxbe",
			height: "xc9qbxq",
			backgroundColor: "x1k43qru",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		titleText: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		iconColor: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a = o("react-compiler-runtime").c(38), i = e.defaultMsg, l = e.msg, c = (t = (n = l.interactivePayload) == null ? void 0 : n.buttonParamsJson) != null ? t : "{}", m;
		a[0] !== c ? (m = JSON.parse(c), a[0] = c, a[1] = m) : m = a[1];
		var p = m, _ = p.wa_flow_response_params;
		if (_ == null || !Object.hasOwn(_, "response_message") || _.response_message == null) return i;
		if (_.title == null) return null;
		var f, g;
		if (a[2] !== c || a[3] !== l) {
			g = Symbol.for("react.early_return_sentinel");
			e: {
				var h = o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowResponseCtaButton(c, 0);
				if (h == null) {
					g = null;
					break e;
				}
				f = o("WAWebGetGalaxyFlowsActionFromButton").getCtaFlowInteractiveAction(h, l);
			}
			a[2] = c, a[3] = l, a[4] = f, a[5] = g;
		} else f = a[4], g = a[5];
		if (g !== Symbol.for("react.early_return_sentinel")) return g;
		var y = f, C;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			0: { className: "x10l6tqk x1n327nk x23vkua xtkvdam" },
			1: { className: "x10l6tqk x1n327nk x23vkua xtkvdam xtrg13t" }
		}[!!r("WAWebL10N").isRTL() << 0], a[6] = C) : C = a[6];
		var b;
		a[7] !== l ? (b = u.jsx(o("WAWebMessageMeta.react").Meta, { msg: l }), a[7] = l, a[8] = b) : b = a[8];
		var v;
		a[9] !== C || a[10] !== b ? (v = u.jsx("div", babelHelpers.extends({}, C, { children: b })), a[9] = C, a[10] = b, a[11] = v) : v = a[11];
		var S = v, R;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), a[12] = R) : R = a[12];
		var L = R, E = _.title, k;
		a[13] !== y ? (k = function() {
			return y == null || y.onClick == null ? void 0 : y.onClick();
		}, a[13] = y, a[14] = k) : k = a[14];
		var I;
		a[15] !== y ? (I = function(t) {
			t.preventDefault(), (t.key === "Enter" || t.key === " ") && (y == null || y.onClick == null || y.onClick());
		}, a[15] = y, a[16] = I) : I = a[16];
		var T;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x9f619 x87ps6o x3orp4s x1lte6z7 x123j3cw xaso8d8 x1gabggj" }, a[17] = T) : T = a[17];
		var D;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (D = [d.innerBubble, o("WDSPaddings.stylex").wdsPaddings.padding8], a[18] = D) : D = a[18];
		var x;
		a[19] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.roundIconContainer,
			padding: 2,
			children: u.jsx(r("WDSIconIcDescription.react"), { xstyle: d.iconColor })
		}), a[19] = x) : x = a[19];
		var $;
		a[20] !== E ? ($ = o("WABidi").bidiDir(E), a[20] = E, a[21] = $) : $ = a[21];
		var P;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (P = r("WAWebL10N").isRTL(), a[22] = P) : P = a[22];
		var N = $ === "rtl" !== P, M;
		a[23] !== E ? (M = o("WABidi").bidiDir(E), a[23] = E, a[24] = M) : M = a[24];
		var w;
		a[25] !== N || a[26] !== M || a[27] !== E ? (w = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			xstyle: d.titleText,
			text: E,
			textLimit: 30,
			dirMismatch: N,
			direction: M,
			inferLinesDirection: !0
		}), a[25] = N, a[26] = M, a[27] = E, a[28] = w) : w = a[28];
		var A;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: L }), a[29] = A) : A = a[29];
		var F;
		a[30] !== S || a[31] !== w ? (F = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: D,
			align: "center",
			children: [x, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart12,
				justify: "evenly",
				rowGap: 4,
				children: [
					w,
					A,
					S
				]
			})]
		}), a[30] = S, a[31] = w, a[32] = F) : F = a[32];
		var O;
		return a[33] !== T || a[34] !== F || a[35] !== k || a[36] !== I ? (O = u.jsx("div", babelHelpers.extends({
			"data-testid": "galaxy-flow-response-bubble",
			role: "button",
			onClick: k,
			tabIndex: 0,
			onKeyDown: I
		}, T, { children: F })), a[33] = T, a[34] = F, a[35] = k, a[36] = I, a[37] = O) : O = a[37], O;
	}
	l.default = m;
}), 226);
