__d("WAWebEventPreviewBlock.react", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebEventDateBlock.react",
	"WAWebEventsGatingUtils",
	"WAWebFlex.react",
	"WAWebFormatEventDateString",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebProtobufsE2E.pb",
	"WAWebTag.react",
	"WAWebTextSizeUtils",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebEventMyRSVPStatus",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		eventPreviewBlock: {
			display: "x1rg5ohu",
			$$css: !0
		},
		container: {
			boxSizing: "x9f619",
			height: "xlo07zb",
			width: "xtlo18s",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			fontSize: "x1f6kntn",
			fontWeight: "x1iikomf",
			$$css: !0
		},
		containerFullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		eventDetailColumn: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		eventNameContainer: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		eventNameText: {
			fontWeight: "x1s688f",
			fontSize: "x1jchvi3",
			$$css: !0
		},
		tag: {
			alignSelf: "xamitd3",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = o("react-compiler-runtime").c(53), a = e.eventMsg, i = e.fullWidth, l = e.onClick, d = i === void 0 ? !1 : i, m;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var p;
			m = [
				(p = o("WAWebMsgGetters")).getEventName,
				p.getEventStartTime,
				p.getEventEndTime,
				p.getEventLocation,
				p.getIsSentByMe
			], n[0] = m;
		} else m = n[0];
		var _ = o("useWAWebMsgValues").useMsgValues(a.id, m), f = _[0], g = _[1], h = _[2], y = _[3], C = _[4], b = o("useWAWebEventMyRSVPStatus").useEventMyRSVPStatus(a), v;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(), n[1] = v) : v = n[1];
		var S = v.pollQuestionTextSize, R;
		if (n[2] !== f) {
			var L;
			R = f.slice(0, (L = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? L : 100), n[2] = f, n[3] = R;
		} else R = n[3];
		var E = R, k;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (k = [c.eventNameContainer, o("WDSPaddings.stylex").wdsPaddings.paddingVer2], n[4] = k) : k = n[4];
		var I;
		n[5] !== a ? (I = o("WAWebFrontendMsgGetters").getRtl(a), n[5] = a, n[6] = I) : I = n[6];
		var T;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (T = r("WAWebL10N").isRTL(), n[7] = T) : T = n[7];
		var D = I !== T, x;
		n[8] !== a ? (x = o("WAWebFrontendMsgGetters").getDir(a), n[8] = a, n[9] = x) : x = n[9];
		var $;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? ($ = [c.eventNameText, S], n[10] = $) : $ = n[10];
		var P;
		n[11] !== D || n[12] !== x || n[13] !== E ? (P = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: k,
			grow: 0,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: E,
				dirMismatch: D,
				direction: x,
				inferLinesDirection: !0,
				selectable: !0,
				xstyle: $,
				ellipsify: !0
			})
		}), n[11] = D, n[12] = x, n[13] = E, n[14] = P) : P = n[14];
		var N = P, M;
		n[15] !== h || n[16] !== g ? (M = o("WAWebFormatEventDateString").getEventDateStringFor(g, h), n[15] = h, n[16] = g, n[17] = M) : M = n[17];
		var w = M, A;
		n[18] !== w || n[19] !== g ? (A = g != null ? u.jsx("div", {
			className: "x1rg5ohu x193iq5w xhslqc4 x6ikm8r x10wlt62 xlyipyv xvijh9v x1ty9z65",
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-starttime-string", w)]
			)
		}) : null, n[18] = w, n[19] = g, n[20] = A) : A = n[20];
		var F = A, O, B = (t = y == null ? void 0 : y.name) != null ? t : y == null ? void 0 : y.address;
		if (B != null) {
			var W;
			n[21] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x1rg5ohu x193iq5w xhslqc4 x6ikm8r x10wlt62 xlyipyv xvijh9v x1ty9z65" }, n[21] = W) : W = n[21];
			var q;
			n[22] !== B ? (q = s._(
				/*BTDS*/
				"",
				[s._param("event-location", B)]
			), n[22] = B, n[23] = q) : q = n[23];
			var U;
			n[24] !== W || n[25] !== q ? (U = u.jsx("div", babelHelpers.extends({}, W, { children: q })), n[24] = W, n[25] = q, n[26] = U) : U = n[26], O = U;
		}
		var V = null;
		if (C) {
			var H;
			n[27] === Symbol.for("react.memo_cache_sentinel") ? (H = [c.tag, o("WDSMargins.stylex").wdsMargins.marginStartAuto], n[27] = H) : H = n[27];
			var G;
			n[28] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(o("WAWebTag.react").Tag, {
				theme: o("WAWebTag.react").TagTheme.Primary,
				xstyle: H,
				testid: "event-creator-label",
				children: s._(
					/*BTDS*/
					""
				)
			}), n[28] = G) : G = n[28], V = G;
		} else if (b === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
			var z;
			n[29] === Symbol.for("react.memo_cache_sentinel") ? (z = [c.tag, o("WDSMargins.stylex").wdsMargins.marginStartAuto], n[29] = z) : z = n[29];
			var j;
			n[30] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(o("WAWebTag.react").Tag, {
				theme: o("WAWebTag.react").TagTheme.Primary,
				xstyle: z,
				testid: "event-attending-label",
				children: s._(
					/*BTDS*/
					""
				)
			}), n[30] = j) : j = n[30], V = j;
		} else if (b === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
			var K;
			n[31] === Symbol.for("react.memo_cache_sentinel") ? (K = [c.tag, o("WDSMargins.stylex").wdsMargins.marginStartAuto], n[31] = K) : K = n[31];
			var Q;
			n[32] === Symbol.for("react.memo_cache_sentinel") ? (Q = u.jsx(o("WAWebTag.react").Tag, {
				theme: o("WAWebTag.react").TagTheme.Secondary,
				xstyle: K,
				testid: "event-maybe-label",
				children: s._(
					/*BTDS*/
					""
				)
			}), n[32] = Q) : Q = n[32], V = Q;
		}
		var X;
		n[33] !== d ? (X = [c.eventPreviewBlock].concat(d ? [c.containerFullWidth] : [o("WDSMargins.stylex").wdsMargins.margin2, o("WDSMargins.stylex").wdsMargins.marginEnd12]), n[33] = d, n[34] = X) : X = n[34];
		var Y;
		n[35] !== d ? (Y = [c.container].concat(d ? [c.containerFullWidth] : []), n[35] = d, n[36] = Y) : Y = n[36];
		var J;
		n[37] !== g ? (J = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			padding: 2,
			shrink: 0,
			children: u.jsx(r("WAWebEventDateBlock.react"), { eventStartTime: g })
		}), n[37] = g, n[38] = J) : J = n[38];
		var Z;
		n[39] === Symbol.for("react.memo_cache_sentinel") ? (Z = [c.eventDetailColumn, o("WDSPaddings.stylex").wdsPaddings.paddingStart8], n[39] = Z) : Z = n[39];
		var ee;
		n[40] !== O || n[41] !== N || n[42] !== F ? (ee = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: Z,
			padding: 2,
			children: [
				N,
				F,
				O
			]
		}), n[40] = O, n[41] = N, n[42] = F, n[43] = ee) : ee = n[43];
		var te;
		n[44] !== Y || n[45] !== J || n[46] !== ee || n[47] !== V ? (te = u.jsxs(o("WAWebFlex.react").FlexContainer, {
			xstyle: Y,
			direction: "horizontal",
			padding: 12,
			children: [
				J,
				ee,
				V
			]
		}), n[44] = Y, n[45] = J, n[46] = ee, n[47] = V, n[48] = te) : te = n[48];
		var ne;
		return n[49] !== l || n[50] !== X || n[51] !== te ? (ne = u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: X,
			onClick: l,
			tabIndex: 0,
			children: te
		}), n[49] = l, n[50] = X, n[51] = te, n[52] = ne) : ne = n[52], ne;
	}
	l.default = d;
}), 226);
