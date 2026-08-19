__d("WAFlowsPreviewDeviceScreeniOS.react", [
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
		conversation: {
			paddingTop: "x1miatn0",
			paddingInlineEnd: "x1ekh9h2",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xsdj86q",
			rowGap: "x1kb72lq",
			$$css: !0
		},
		messageSentInner: {
			borderStartStartRadius: "x6nl9eh",
			borderStartEndRadius: "x1a5l9x9",
			borderEndEndRadius: "x7vuprf",
			borderEndStartRadius: "x1mg3h75",
			width: "xfa7iah",
			paddingTop: "xyinxu5",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1g2khh7",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		messageReceivedInner: {
			borderStartStartRadius: "x6nl9eh",
			borderStartEndRadius: "x1a5l9x9",
			borderEndEndRadius: "x7vuprf",
			borderEndStartRadius: "x1mg3h75",
			width: "x3ougt2",
			$$css: !0
		},
		messageInner: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
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
		nub: {
			position: "x10l6tqk",
			bottom: "xkm6oy0",
			marginInlineStart: "xf643tr",
			marginInlineEnd: "x1rtkifo",
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
		messageTextContainerReceived: {
			rowGap: "x1r0jzty",
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xet51cg",
			paddingBottom: "x1g2khh7",
			paddingInlineStart: "x1g0dm76",
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
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			height: "xli02jq",
			$$css: !0
		},
		previewFlowButton: {
			textAlign: "x2b8uid",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			fontSize: "x6prxxf",
			fontFamily: "x1pfn5d5",
			fontWeight: "xo1l8bm",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			width: "xh8yej3",
			height: "xwnhm4w",
			$$css: !0
		},
		placeholderTextLong: {
			height: "xdk7pt",
			width: "xq1dxzn",
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			$$css: !0
		},
		placeholderTextMedium: {
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
		inputContainer: {
			paddingTop: "xqy66fx",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xr1496l",
			paddingInlineStart: "x1gx403c",
			$$css: !0
		},
		input: {
			height: "xwvwv9b",
			width: "xh8yej3",
			borderStartStartRadius: "x1sbio9s",
			borderStartEndRadius: "x17s0swo",
			borderEndEndRadius: "x74df3x",
			borderEndStartRadius: "x1xtgrj3",
			borderTopWidth: "xt8cgyo",
			borderInlineEndWidth: "x128c8uf",
			borderBottomWidth: "x1co6499",
			borderInlineStartWidth: "xc5fred",
			boxShadow: "xh3m8ap",
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
		placeholderTextMessageSent: {
			backgroundColor: "xmd50f8",
			$$css: !0
		},
		buttonText: {
			fontSize: "x6prxxf",
			fontFamily: "x1atq58o",
			fontWeight: "xk50ysn",
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
		}
	}, p = {
		messageSentInner: {
			backgroundColor: "xdkl6vm",
			$$css: !0
		},
		messageReceivedInner: {
			backgroundColor: "x1iufa0j",
			$$css: !0
		},
		header: {
			backgroundColor: "xuqojyl",
			$$css: !0
		},
		body: {
			backgroundColor: "x15shcwa",
			$$css: !0
		},
		nubMessageSent: {
			fill: "xd4219p",
			$$css: !0
		},
		nubMessageReceived: {
			fill: "xnja6en",
			$$css: !0
		},
		divider: {
			backgroundColor: "xd9uhot",
			$$css: !0
		},
		previewFlowButton: {
			color: "xpuh68u",
			backgroundColor: "x1iufa0j",
			$$css: !0
		},
		disabledPreviewFlowButton: {
			backgroundColor: "x1iufa0j",
			color: "xlf92e9",
			$$css: !0
		},
		placeholderTextHeader: {
			backgroundColor: "x1vl5ipk",
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
		sent: {
			color: "x1fc1q4v",
			$$css: !0
		},
		verticalDash: {
			borderInlineStartColor: "x1eeq86s",
			$$css: !0
		},
		orangePlaceholderText: {
			backgroundColor: "xdcnpd",
			$$css: !0
		},
		innerMessageContainer: {
			mixBlendMode: "xtv2irb",
			backgroundColor: "x1ymkhp9",
			$$css: !0
		},
		inputContainer: {
			backgroundColor: "xuqojyl",
			$$css: !0
		},
		input: {
			borderTopColor: "xov0iuo",
			borderInlineEndColor: "x1hc84xl",
			borderBottomColor: "x18jh0bd",
			borderInlineStartColor: "xh2ark8",
			$$css: !0
		},
		activeRestartPreviewButton: {
			backgroundColor: "xyw0k1r",
			color: "x8yag65",
			$$css: !0
		},
		disabledRestartPreviewButton: {
			backgroundColor: "xfbu81w",
			color: "x93kga4",
			$$css: !0
		}
	}, _ = {
		messageSentInner: {
			backgroundColor: "x1zaezt",
			$$css: !0
		},
		messageReceivedInner: {
			backgroundColor: "x10117se",
			$$css: !0
		},
		header: {
			backgroundColor: "x1p0sgdj",
			$$css: !0
		},
		body: {
			backgroundColor: "x7m50xa",
			$$css: !0
		},
		nubMessageSent: {
			fill: "xejwsgv",
			$$css: !0
		},
		nubMessageReceived: {
			fill: "xt0m2qs",
			$$css: !0
		},
		divider: {
			backgroundColor: "xi0b1yh",
			$$css: !0
		},
		previewFlowButton: {
			color: "x1bnersf",
			backgroundColor: "x10117se",
			$$css: !0
		},
		disabledPreviewFlowButton: {
			color: "x1dbdeqy",
			backgroundColor: "x10117se",
			$$css: !0
		},
		placeholderTextHeader: {
			backgroundColor: "x1vl5ipk",
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
			backgroundColor: "x9wos9t",
			$$css: !0
		},
		orangePlaceholderText: {
			backgroundColor: "x1tk6srg",
			$$css: !0
		},
		sent: {
			color: "xto31z9",
			$$css: !0
		},
		verticalDash: {
			borderInlineStartColor: "x162no72",
			$$css: !0
		},
		innerMessageContainer: {
			backgroundColor: "xuyjvxn",
			$$css: !0
		},
		input: {
			borderTopColor: "x1coy991",
			borderInlineEndColor: "x1gcv666",
			borderBottomColor: "xrck7ff",
			borderInlineStartColor: "x1c7jnjo",
			backgroundColor: "x1klzh4d",
			$$css: !0
		},
		activeRestartPreviewButton: {
			backgroundColor: "xyw0k1r",
			color: "x1618xya",
			$$css: !0
		},
		disabledRestartPreviewButton: {
			backgroundColor: "x1ty3w4h",
			color: "x1sicv1u",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.height, a = t.isPreviewButtonDisabled, i = t.onOpen, l = t.theme, c = t.width, f = o("WAMFlowsFlowProvider.react").useWAMFlow(), h = f.isFlowVisible, y = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), C = y.isFlowCompleted, b = l === "light" ? p : _;
		return d.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			xstyle: m.root,
			style: {
				width: c,
				height: n
			},
			children: [
				d.jsxs(r("GeoFlexbox.react"), {
					alignItems: "center",
					xstyle: [m.header, b.header],
					children: [d.jsx(r("Image.react"), {
						src: r("bx").getURL(r("bx")("14211")),
						width: 40,
						height: 40,
						title: s._(
							/*BTDS*/
							""
						)
					}), d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.placeholderTextMedium, b.placeholderTextHeader])))]
				}),
				d.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					grow: 1,
					xstyle: b.body,
					children: [
						d.jsxs(r("GeoFlexbox.react"), {
							direction: "column",
							grow: 1,
							xstyle: m.conversation,
							children: [
								d.jsxs("div", {
									className: "x1n2onr6 xvc5jky",
									children: [d.jsx(r("GeoFlexbox.react"), {
										alignItems: "center",
										xstyle: [
											m.messageInner,
											m.messageSentInner,
											b.messageSentInner
										],
										children: d.jsx("div", babelHelpers.extends({}, e.props([m.placeholderTextLong, b.placeholderTextMessageSent])))
									}), d.jsx(g, { xstyle: [m.nubMessageSent, b.nubMessageSent] })]
								}),
								d.jsxs("div", {
									className: "x1n2onr6 x11t971q",
									children: [d.jsxs(r("GeoFlexbox.react"), {
										direction: "column",
										xstyle: [
											m.messageInner,
											m.messageReceivedInner,
											b.messageReceivedInner
										],
										children: [
											d.jsxs(r("GeoFlexbox.react"), {
												direction: "column",
												xstyle: m.messageTextContainerReceived,
												children: [d.jsx("div", babelHelpers.extends({}, e.props([m.placeholderTextMedium, b.placeholderTextMessageReceived]))), d.jsx("div", babelHelpers.extends({}, e.props([
													m.placeholderTextMedium,
													m.placeholderTextShort,
													b.placeholderTextMessageReceived
												])))]
											}),
											d.jsx("hr", babelHelpers.extends({}, e.props([m.divider, b.divider]))),
											d.jsx("button", babelHelpers.extends({}, e.props([m.previewFlowButton, C || a ? b.disabledPreviewFlowButton : b.previewFlowButton]), {
												disabled: C || a,
												onClick: i,
												"data-testid": void 0,
												children: s._(
													/*BTDS*/
													""
												)
											}))
										]
									}), d.jsx(g, { xstyle: [m.nubMessageReceived, b.nubMessageReceived] })]
								}),
								C && d.jsxs("div", {
									className: "x1n2onr6 xvc5jky",
									children: [d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
										m.messageInner,
										m.messageReceivedInner,
										b.messageSentInner
									]), { children: d.jsxs(r("GeoFlexbox.react"), {
										direction: "column",
										xstyle: r("geoMargin").all4,
										children: [d.jsxs(r("GeoFlexbox.react"), {
											xstyle: [m.innerMessageContainer, b.innerMessageContainer],
											children: [d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.verticalDash, b.verticalDash]))), d.jsxs(r("GeoFlexbox.react"), {
												direction: "column",
												gap: 4,
												xstyle: [r("geoMargin").vert16, r("geoMargin").horiz8],
												children: [d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
													m.placeholderText,
													m.placeholderTextMessageSent,
													m.placeholderTextShort,
													b.orangePlaceholderText
												]))), d.jsx("div", { className: "xdk7pt x1tucx9d x1obq294 x5a5i1n xde0f50 x15x8krk xmd50f8" })]
											})]
										}), d.jsxs(r("GeoFlexbox.react"), {
											alignItems: "center",
											gap: 4,
											children: [d.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
												m.sent,
												r("geoMargin").all4,
												b.sent
											]), { children: s._(
												/*BTDS*/
												""
											) })), d.jsx(r("GeoIcon.react"), {
												icon: o("fbicon")._(u("13350"), 12),
												color: l === "dark" ? "inverted" : "default",
												isDisabled: !0
											})]
										})]
									}) })), d.jsx(g, { xstyle: [m.nubMessageSent, b.nubMessageSent] })]
								})
							]
						}),
						C && d.jsx("button", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
							m.buttonText,
							m.restartPreviewButton,
							a ? b.disabledRestartPreviewButton : b.activeRestartPreviewButton,
							r("geoMargin").all8
						]), {
							onClick: i,
							disabled: a,
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
						d.jsx("div", babelHelpers.extends({}, e.props([m.inputContainer, b.inputContainer]), { children: d.jsx("input", babelHelpers.extends({ type: "text" }, e.props([m.input, b.input]), { disabled: !0 })) }))
					]
				}),
				d.jsx("div", babelHelpers.extends({}, {
					0: { className: "xj4c5ne x10l6tqk x5yr21d xh8yej3 x19991ni x1d8287x x9lcvmn" },
					1: { className: "xj4c5ne x10l6tqk x5yr21d xh8yej3 x19991ni x1d8287x x9lcvmn xg01cxk x47corl" }
				}[!h << 0]))
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.xstyle;
		return d.jsx("svg", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.nub, n]), {
			role: "none",
			width: "16",
			height: "14",
			viewBox: "0 0 16 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: d.jsx("path", { d: "M6.99679 0C7.06179 2.725 7.99679 8.005 14.0218 10.045C14.0218 10.045 14.9018 10.285 15.2468 10.715C15.4968 11.02 15.3518 11.415 15.1618 11.6C15.0618 11.7 14.5268 12.055 13.9268 12.24C10.0768 13.5 5.37679 14.49 0.496791 13.485L6.99679 0Z" })
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
