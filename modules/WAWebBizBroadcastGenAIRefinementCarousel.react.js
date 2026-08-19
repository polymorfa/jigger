__d("WAWebBizBroadcastGenAIRefinementCarousel.react", [
	"fbt",
	"WAWebBizBroadcastGenAIRecommendationModel",
	"WAWebBizBroadcastTextFormatUtils",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"WDSSpinner.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n = o("react-compiler-runtime").c(38), a = t.history, i = t.isLoading, l = t.isRTL, u = t.onNavigate, d = i === void 0 ? !1 : i, m;
		n[0] !== a ? (m = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(a, "prev"), n[0] = a, n[1] = m) : m = n[1];
		var _ = m, f;
		n[2] !== a ? (f = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(a, "next"), n[2] = a, n[3] = f) : f = n[3];
		var h = f, y;
		n[4] !== a.currentIndex || n[5] !== u ? (y = function() {
			u(a.currentIndex - 1);
		}, n[4] = a.currentIndex, n[5] = u, n[6] = y) : y = n[6];
		var C = y, b;
		n[7] !== a.currentIndex || n[8] !== u ? (b = function() {
			u(a.currentIndex + 1);
		}, n[7] = a.currentIndex, n[8] = u, n[9] = b) : b = n[9];
		var v = b, S = l ? a.currentIndex * 100 : -(a.currentIndex * 100), R;
		n[10] !== C || n[11] !== d || n[12] !== _ ? (R = _ && c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcChevronLeft.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			disabled: d,
			onPress: C,
			size: "small",
			variant: "borderless",
			xstyle: g.chevronButton
		}), n[10] = C, n[11] = d, n[12] = _, n[13] = R) : R = n[13];
		var L;
		n[14] !== R ? (L = c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			xstyle: g.chevronSlot,
			children: R
		}), n[14] = R, n[15] = L) : L = n[15];
		var E;
		n[16] !== S ? (E = (e || (e = r("stylex"))).props(g.track, g.trackOffset(S)), n[16] = S, n[17] = E) : E = n[17];
		var k;
		n[18] !== a.entries ? (k = a.entries.map(p), n[18] = a.entries, n[19] = k) : k = n[19];
		var I;
		n[20] !== E || n[21] !== k ? (I = c.jsx("div", babelHelpers.extends({}, E, { children: k })), n[20] = E, n[21] = k, n[22] = I) : I = n[22];
		var T;
		n[23] !== d ? (T = d && c.jsxs(c.Fragment, { children: [c.jsx("div", { className: "x1280gxy x1ey2m1c xtijo5x x1o0tod x1us6l5c x10l6tqk x13vifvy" }), c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: g.spinnerContent,
			children: c.jsx(r("WDSSpinner.react"), { size: 32 })
		})] }), n[23] = d, n[24] = T) : T = n[24];
		var D;
		n[25] !== T || n[26] !== I ? (D = c.jsxs(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			xstyle: g.messageArea,
			children: [I, T]
		}), n[25] = T, n[26] = I, n[27] = D) : D = n[27];
		var x;
		n[28] !== v || n[29] !== d || n[30] !== h ? (x = h && c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcChevronRight.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			disabled: d,
			onPress: v,
			size: "small",
			variant: "borderless",
			xstyle: g.chevronButton
		}), n[28] = v, n[29] = d, n[30] = h, n[31] = x) : x = n[31];
		var $;
		n[32] !== x ? ($ = c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			xstyle: g.chevronSlot,
			children: x
		}), n[32] = x, n[33] = $) : $ = n[33];
		var P;
		return n[34] !== D || n[35] !== $ || n[36] !== L ? (P = c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			grow: 1,
			justify: "center",
			xstyle: g.carouselContainer,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				grow: 1,
				xstyle: g.messageRow,
				children: [
					L,
					D,
					$
				]
			})
		}), n[34] = D, n[35] = $, n[36] = L, n[37] = P) : P = n[37], P;
	}
	function p(e, t) {
		return c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			xstyle: g.card,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: g.cardContent,
				children: c.jsx("div", {
					className: "x1pyc6se x1mlb2bo x16pkwpw xqe4bef xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1f6kntn x37zpob xmz0i5r x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe",
					children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: e.message,
						formatters: o("WAWebBizBroadcastTextFormatUtils").AI_TEXT_FORMATTERS
					})
				})
			})
		}, t);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = 200, f = {
		transform: "xsqj5wx",
		$$css: !0
	}, g = {
		card: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		cardContent: {
			boxSizing: "x9f619",
			height: "x5yr21d",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		carouselContainer: {
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			width: "xh8yej3",
			$$css: !0
		},
		chevronButton: {
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			color: "x14ug900",
			$$css: !0
		},
		chevronSlot: {
			width: "x14qfxbe",
			$$css: !0
		},
		messageArea: {
			alignSelf: "xkh2ocl",
			height: "x5yr21d",
			minHeight: "xz65tgg",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		messageRow: {
			boxSizing: "x9f619",
			minHeight: "x2lwn1j",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		spinnerContent: {
			bottom: "x1ey2m1c",
			insetInlineEnd: "xtijo5x",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x13vifvy",
			$$css: !0
		},
		track: {
			display: "x78zum5",
			height: "x5yr21d",
			transitionDuration: "x1d8287x",
			transitionProperty: "x11xpdln",
			transitionTimingFunction: "xz4gly6",
			width: "xh8yej3",
			$$css: !0
		},
		trackOffset: function(t) {
			return [f, { "--x-transform": "translateX(" + t + "%)" != null ? "translateX(" + t + "%)" : void 0 }];
		}
	};
	l.default = m;
}), 226);
