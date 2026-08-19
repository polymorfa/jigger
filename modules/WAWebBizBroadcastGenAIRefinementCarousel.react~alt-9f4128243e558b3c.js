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
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n = t.history, a = t.isLoading, i = a === void 0 ? !1 : a, l = t.isRTL, u = t.onNavigate, m = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(n, "prev"), p = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(n, "next"), _ = d(function() {
			u(n.currentIndex - 1);
		}, [n.currentIndex, u]), g = d(function() {
			u(n.currentIndex + 1);
		}, [n.currentIndex, u]), h = l ? n.currentIndex * 100 : -(n.currentIndex * 100);
		return c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			grow: 1,
			justify: "center",
			xstyle: f.carouselContainer,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				grow: 1,
				xstyle: f.messageRow,
				children: [
					c.jsx(o("WAWebFlex.react").FlexItem, {
						shrink: 0,
						xstyle: f.chevronSlot,
						children: m && c.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcChevronLeft.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							disabled: i,
							onPress: _,
							size: "small",
							variant: "borderless",
							xstyle: f.chevronButton
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: f.messageArea,
						children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.track, f.trackOffset(h)), { children: n.entries.map(function(e, t) {
							return c.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								xstyle: f.card,
								children: c.jsx(o("WAWebFlex.react").FlexRow, {
									align: "center",
									xstyle: f.cardContent,
									children: c.jsx("div", {
										className: "x1pyc6se x1mlb2bo x16pkwpw xqe4bef xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1f6kntn x37zpob xmz0i5r x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe",
										children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
											text: e.message,
											formatters: o("WAWebBizBroadcastTextFormatUtils").AI_TEXT_FORMATTERS
										})
									})
								})
							}, t);
						}) })), i && c.jsxs(c.Fragment, { children: [c.jsx("div", { className: "x1280gxy x1ey2m1c xtijo5x x1o0tod x1us6l5c x10l6tqk x13vifvy" }), c.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							xstyle: f.spinnerContent,
							children: c.jsx(r("WDSSpinner.react"), { size: 32 })
						})] })]
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						shrink: 0,
						xstyle: f.chevronSlot,
						children: p && c.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcChevronRight.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							disabled: i,
							onPress: g,
							size: "small",
							variant: "borderless",
							xstyle: f.chevronButton
						})
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = 200, _ = {
		transform: "xsqj5wx",
		$$css: !0
	}, f = {
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
			return [_, { "--x-transform": "translateX(" + t + "%)" != null ? "translateX(" + t + "%)" : void 0 }];
		}
	};
	l.default = m;
}), 226);
