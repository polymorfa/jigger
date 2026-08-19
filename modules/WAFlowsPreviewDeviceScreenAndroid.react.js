__d("WAFlowsPreviewDeviceScreenAndroid.react", [
	"fbt",
	"ix",
	"GeoFlexbox.react",
	"GeoIcon.react",
	"Image.react",
	"WAFlowsPreviewProvider.react",
	"WAMFlowsFlowProvider.react",
	"bx",
	"fbicon",
	"geoMargin",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c, d = c || (c = o("react")), m = {
		root: {
			position: "x1n2onr6",
			$$css: !0
		},
		header: {
			paddingTop: "x1cnzs8",
			paddingInlineEnd: "x64bnmy",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "x13jy36j",
			columnGap: "x1amjocr",
			$$css: !0
		},
		conversation: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xgws4yx",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xzm8p2n",
			rowGap: "x12a607z",
			$$css: !0
		},
		messageInner: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		messageInnerSent: {
			borderStartStartRadius: "x6nl9eh",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x7vuprf",
			borderEndStartRadius: "x1mg3h75",
			$$css: !0
		},
		messageInnerReceived: {
			borderStartStartRadius: "x15mokao",
			borderStartEndRadius: "x1a5l9x9",
			borderEndEndRadius: "x7vuprf",
			borderEndStartRadius: "x1mg3h75",
			$$css: !0
		},
		nub: {
			position: "x10l6tqk",
			top: "x13vifvy",
			$$css: !0
		},
		nubMessageSent: {
			left: "xl8wat7",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		nubMessageReceived: {
			right: "xjvjlmm",
			insetInlineStart: null,
			insetInlineEnd: null,
			transform: "x1msufx5",
			$$css: !0
		},
		messageTextContainer: {
			rowGap: "x1r0jzty",
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		innerMessageContainer: {
			borderStartStartRadius: "x6nl9eh",
			borderStartEndRadius: "x1a5l9x9",
			borderEndEndRadius: "x7vuprf",
			borderEndStartRadius: "x1mg3h75",
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		verticalDash: {
			borderInlineStartWidth: "x56jcm7",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "x6nl9eh",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "x1mg3h75",
			$$css: !0
		},
		sent: {
			fontSize: "x1pg5gke",
			$$css: !0
		},
		divider: {
			marginTop: "x10wh9bi",
			marginInlineEnd: "xpm28yp",
			marginBottom: "x8viiok",
			marginInlineStart: "x1o7cslx",
			height: "xli02jq",
			$$css: !0
		},
		previewFlowButton: {
			textAlign: "x2b8uid",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			width: "xh8yej3",
			$$css: !0
		},
		placeholderText: {
			height: "xdk7pt",
			width: "x1tucx9d",
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			$$css: !0
		},
		placeholderTextShort: {
			width: "x1d7z9mz",
			$$css: !0
		},
		inputContainer: {
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			$$css: !0
		},
		input: {
			height: "xwvwv9b",
			width: "xh8yej3",
			borderStartStartRadius: "x1sbio9s",
			borderStartEndRadius: "x17s0swo",
			borderEndEndRadius: "x74df3x",
			borderEndStartRadius: "x1xtgrj3",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			boxShadow: "xh3m8ap",
			$$css: !0
		},
		restartPreviewButton: {
			borderStartStartRadius: "x12ol6y4",
			borderStartEndRadius: "x180vkcf",
			borderEndEndRadius: "x1khw62d",
			borderEndStartRadius: "x709u02",
			height: "x1vqgdyp",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		},
		buttonText: {
			fontSize: "x1f6kntn",
			fontFamily: "x2ipbnk",
			fontWeight: "xk50ysn",
			$$css: !0
		}
	}, p = {
		header: {
			backgroundColor: "x1xjtzwt",
			$$css: !0
		},
		body: {
			backgroundColor: "x1uclb7j",
			$$css: !0
		},
		messageInnerSent: {
			backgroundColor: "x1127m0g",
			$$css: !0
		},
		nubMessageSent: {
			fill: "x2q6ctn",
			$$css: !0
		},
		messageInnerReceived: {
			backgroundColor: "x121ewq9",
			$$css: !0
		},
		nubMessageReceived: {
			fill: "xxhw62d",
			$$css: !0
		},
		innerMessageContainer: {
			backgroundColor: "xnjmtv8",
			$$css: !0
		},
		verticalDash: {
			borderInlineStartColor: "x1gi5e1a",
			$$css: !0
		},
		purplePlaceholderText: {
			backgroundColor: "x14ukc99",
			$$css: !0
		},
		sent: {
			color: "x1fc1q4v",
			$$css: !0
		},
		divider: {
			backgroundColor: "xalnziq",
			$$css: !0
		},
		previewFlowButton: {
			backgroundColor: "x121ewq9",
			$$css: !0
		},
		disabledPreviewFlowButton: {
			backgroundColor: "x12peec7",
			$$css: !0
		},
		activeButton: {
			color: "xnd1aei",
			$$css: !0
		},
		placeholderTextHeader: {
			backgroundColor: "xl7mkzw",
			$$css: !0
		},
		placeholderTextMessageSent: {
			backgroundColor: "xmd50f8",
			$$css: !0
		},
		placeholderTextMessageReceived: {
			backgroundColor: "xqzdxrh",
			$$css: !0
		},
		inputContainer: {
			backgroundColor: "x1uclb7j",
			$$css: !0
		},
		input: {
			backgroundColor: "x1dwc43f",
			boxShadow: "xh3m8ap",
			$$css: !0
		},
		activeRestartPreviewButton: {
			backgroundColor: "xl7mkzw",
			color: "x1pptn32",
			$$css: !0
		},
		disabledRestartPreviewButton: {
			backgroundColor: "x2qb7i4",
			color: "xhlfbqu",
			$$css: !0
		}
	}, _ = {
		header: {
			backgroundColor: "x11scj9",
			$$css: !0
		},
		body: {
			backgroundColor: "xf9102v",
			$$css: !0
		},
		messageInnerSent: {
			backgroundColor: "x55o8w2",
			$$css: !0
		},
		nubMessageSent: {
			fill: "x1k95edo",
			$$css: !0
		},
		messageInnerReceived: {
			backgroundColor: "x43wb1z",
			$$css: !0
		},
		nubMessageReceived: {
			fill: "xqfbikx",
			$$css: !0
		},
		innerMessageContainer: {
			backgroundColor: "xmkjtrl",
			$$css: !0
		},
		verticalDash: {
			borderInlineStartColor: "xa1qzlb",
			$$css: !0
		},
		purplePlaceholderText: {
			backgroundColor: "x1n9xu2f",
			$$css: !0
		},
		sent: {
			color: "xto31z9",
			$$css: !0
		},
		divider: {
			backgroundColor: "x1vhlycq",
			$$css: !0
		},
		previewFlowButton: {
			backgroundColor: "x1ddx0sb",
			$$css: !0
		},
		disabledPreviewFlowButton: {
			backgroundColor: "x1ddx0sb",
			color: "x1hytpwd",
			$$css: !0
		},
		activeButton: {
			color: "x118gf6j",
			$$css: !0
		},
		placeholderTextHeader: {
			backgroundColor: "x127mpqm",
			$$css: !0
		},
		placeholderTextMessageSent: {
			backgroundColor: "xmd50f8",
			$$css: !0
		},
		placeholderTextMessageReceived: {
			backgroundColor: "x14biosu",
			$$css: !0
		},
		inputContainer: {
			backgroundColor: "x11scj9",
			$$css: !0
		},
		input: {
			boxShadow: "xh3m8ap",
			backgroundColor: "xypvbxx",
			$$css: !0
		},
		activeRestartPreviewButton: {
			backgroundColor: "x127mpqm",
			color: "x5gx2gb",
			$$css: !0
		},
		disabledRestartPreviewButton: {
			backgroundColor: "x163bvdx",
			color: "x1zj0dx",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.height, a = t.isPreviewButtonDisabled, i = a === void 0 ? !1 : a, l = t.onOpen, c = t.theme, f = t.width, h = o("WAMFlowsFlowProvider.react").useWAMFlow(), y = h.isFlowVisible, C = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), b = C.isFlowCompleted, v = c === "dark" ? _ : p;
		return d.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			xstyle: m.root,
			style: {
				width: f,
				height: n
			},
			children: [
				d.jsxs(r("GeoFlexbox.react"), {
					alignItems: "center",
					xstyle: [m.header, v.header],
					children: [d.jsx(r("Image.react"), {
						src: c === "light" ? r("bx").getURL(r("bx")("14210")) : r("bx").getURL(r("bx")("13614")),
						width: 40,
						height: 40,
						title: s._(
							/*BTDS*/
							""
						)
					}), d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.placeholderText, v.placeholderTextHeader])))]
				}),
				d.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					grow: 1,
					xstyle: v.body,
					children: [
						d.jsxs(r("GeoFlexbox.react"), {
							direction: "column",
							grow: 1,
							xstyle: m.conversation,
							children: [
								d.jsxs("div", {
									className: "x1n2onr6 xs6309a xvc5jky x1hogkm0",
									children: [d.jsx("div", babelHelpers.extends({}, e.props([
										m.messageInner,
										m.messageInnerSent,
										v.messageInnerSent
									]), { children: d.jsx(r("GeoFlexbox.react"), {
										direction: "column",
										xstyle: m.messageTextContainer,
										children: d.jsx("div", babelHelpers.extends({}, e.props([m.placeholderText, v.placeholderTextMessageSent])))
									}) })), d.jsx(g, { xstyle: [m.nubMessageSent, v.nubMessageSent] })]
								}),
								d.jsxs("div", {
									className: "x1n2onr6 xs6309a x11t971q",
									children: [d.jsxs("div", babelHelpers.extends({}, e.props([
										m.messageInner,
										m.messageInnerReceived,
										v.messageInnerReceived
									]), { children: [
										d.jsxs(r("GeoFlexbox.react"), {
											direction: "column",
											xstyle: m.messageTextContainer,
											children: [d.jsx("div", babelHelpers.extends({}, e.props([m.placeholderText, v.placeholderTextMessageReceived]))), d.jsx("div", babelHelpers.extends({}, e.props([
												m.placeholderText,
												m.placeholderTextShort,
												v.placeholderTextMessageReceived
											])))]
										}),
										d.jsx("hr", babelHelpers.extends({}, e.props([m.divider, v.divider]))),
										d.jsx("button", babelHelpers.extends({}, e.props([
											m.previewFlowButton,
											m.buttonText,
											i || b ? [v.disabledPreviewFlowButton] : [v.previewFlowButton, v.activeButton]
										]), {
											disabled: b || i,
											onClick: l,
											"data-testid": void 0,
											children: s._(
												/*BTDS*/
												""
											)
										}))
									] })), d.jsx(g, { xstyle: [m.nubMessageReceived, v.nubMessageReceived] })]
								}),
								b && d.jsxs("div", {
									className: "x1n2onr6 xs6309a xvc5jky",
									children: [d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
										m.messageInner,
										m.messageInnerSent,
										v.messageInnerSent
									]), { children: d.jsxs(r("GeoFlexbox.react"), {
										direction: "column",
										xstyle: r("geoMargin").all4,
										children: [d.jsxs(r("GeoFlexbox.react"), {
											xstyle: [m.innerMessageContainer, v.innerMessageContainer],
											children: [d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.verticalDash, v.verticalDash]))), d.jsxs(r("GeoFlexbox.react"), {
												direction: "column",
												gap: 4,
												xstyle: [r("geoMargin").vert16, r("geoMargin").horiz8],
												children: [d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
													m.placeholderText,
													m.placeholderTextShort,
													v.purplePlaceholderText
												]))), d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.placeholderText, v.placeholderTextMessageSent])))]
											})]
										}), d.jsxs(r("GeoFlexbox.react"), {
											alignItems: "center",
											children: [d.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
												m.sent,
												r("geoMargin").all4,
												v.sent
											]), { children: s._(
												/*BTDS*/
												""
											) })), d.jsx(r("GeoIcon.react"), {
												icon: o("fbicon")._(u("13350"), 12),
												color: c === "dark" ? "inverted" : "default",
												isDisabled: !0
											})]
										})]
									}) })), d.jsx(g, { xstyle: [m.nubMessageSent, v.nubMessageSent] })]
								})
							]
						}),
						b && d.jsx("button", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
							m.buttonText,
							m.restartPreviewButton,
							i ? v.disabledRestartPreviewButton : v.activeRestartPreviewButton,
							r("geoMargin").all8
						]), {
							onClick: l,
							disabled: i,
							children: d.jsxs(r("GeoFlexbox.react"), {
								alignItems: "center",
								justifyContent: "center",
								"data-testid": void 0,
								children: [d.jsx(r("GeoIcon.react"), {
									icon: o("fbicon")._(u("534221"), 16),
									color: "inherit",
									xstyle: r("geoMargin").end4
								}), s._(
									/*BTDS*/
									""
								)]
							})
						})),
						d.jsx("div", babelHelpers.extends({}, e.props([m.inputContainer, v.inputContainer]), { children: d.jsx("input", babelHelpers.extends({ type: "text" }, e.props([m.input, v.input]), { disabled: !0 })) }))
					]
				}),
				d.jsx("div", babelHelpers.extends({ "data-testid": void 0 }, {
					0: { className: "x10l6tqk x5yr21d xh8yej3 xj4c5ne x19991ni x1d8287x x9lcvmn" },
					1: { className: "x10l6tqk x5yr21d xh8yej3 xj4c5ne x19991ni x1d8287x x9lcvmn xg01cxk x47corl" }
				}[!y << 0]))
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.xstyle;
		return d.jsx("svg", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.nub, n]), {
			role: "none",
			width: "6",
			height: "11",
			viewBox: "0 0 6 11",
			xmlns: "http://www.w3.org/2000/svg",
			children: d.jsx("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M-11.29 0C-10.0877 7.82394e-05 1.71573 0.000195598 4.12034 0.000352077C5.96107 0.000471862 6.55198 1.16245 5.45061 2.58222L-1.27598 11.2535"
			})
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
