__d("WAFlowsMMDisclosure.react", [
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsLocalization",
	"WAFlowsOldButton.react",
	"WAFlowsOpenExternalURI",
	"WAFlowsReactPortal.react",
	"WAFlowsText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useCallback, d = {
		descriptionText: {
			fontSize: "x197yli1",
			$$css: !0
		},
		embeddedLink: {
			color: "x1rv0e52",
			fontSize: "x197yli1",
			fontWeight: "x10vqnp0",
			lineHeight: "x193rm8m",
			$$css: !0
		},
		rowIconContainer: {
			width: "xp8d6y2",
			height: "xam5rvr",
			marginLeft: "x4aigyd",
			marginRight: "xj17ml3",
			marginInlineStart: null,
			marginInlineEnd: null,
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		mainIconPosition: {
			position: "x10l6tqk",
			width: "x1nlpou6",
			height: "x1u3yi6j",
			top: "xwa60dl",
			left: "x1nrll8i",
			insetInlineStart: null,
			insetInlineEnd: null,
			transform: "x11lhmoz",
			$$css: !0
		},
		mainIconColor: {
			backgroundColor: "x1lwaf7o",
			$$css: !0
		},
		mainIconColorBorder: {
			backgroundColor: "x1rebvgt",
			$$css: !0
		},
		mainIconIndia: {
			backgroundColor: "xfn3atn",
			width: "xtqih38",
			height: "xi07msg",
			$$css: !0
		},
		mainIconSizeNonIndia: {
			width: "x1nlpou6",
			height: "x1u3yi6j",
			$$css: !0
		},
		descriptionIcon: {
			display: "x1rg5ohu",
			width: "x1xvt488",
			height: "xf08kfj",
			$$css: !0
		}
	}, m = {
		mainContainer: {
			marginLeft: "x13zjp5t",
			marginRight: "xpoiemb",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		titleText: {
			fontWeight: "x10vqnp0",
			$$css: !0
		},
		descriptionText: {
			color: "xhslqc4",
			$$css: !0
		}
	}, p = {
		mainContainer: {
			marginLeft: "x4aigyd",
			marginRight: "xj17ml3",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		titleText: {
			fontWeight: "x1xq4eza",
			$$css: !0
		},
		rowListContainer: {
			paddingLeft: "x1vua2ax",
			paddingRight: "xnywu7s",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		}
	};
	function _(t) {
		var n = t.dataRowOneText, a = t.dataRowThreeText, i = t.dataRowTwoText, l = t.disclosureDescription, s = t.disclosureDescriptionTextIcon, m = t.learnMoreUrl, p = t.onBackClick, _ = t.onContinueClick, g = t.region, h = t.titleText, y = o("WAFlowsEnvContext.react").useWAFlowsEnv(), C = y.env, b = f(C.platform), v = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), S = g === "IN", R = l.split(s != null ? s : ""), L = R[0], E = R[R.length - 1], k = c(function() {
			if (m != null) {
				var e = new URL(m);
				o("WAFlowsOpenExternalURI").openExternalURI(e, v.invoke);
			}
		}, [v.invoke, m]);
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([b.mainContainer]), { children: [
			u.jsx("div", {
				className: "xl56j7k x2yie3v x1n2onr6 xh8yej3 x1u3yi6j",
				children: S ? u.jsx(r("WAFlowsIcon.react"), {
					altText: "icon",
					id: "waf_disclosure_double_chevron",
					xstyle: [d.mainIconPosition, d.mainIconIndia]
				}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAFlowsIcon.react"), {
					altText: "icon",
					id: "waf_disclosure_chevron_single",
					xstyle: [
						d.mainIconPosition,
						d.mainIconColor,
						d.mainIconSizeNonIndia
					]
				}), u.jsx(r("WAFlowsIcon.react"), {
					altText: "icon",
					id: "waf_disclosure_chevron_single_outline",
					xstyle: [
						d.mainIconPosition,
						d.mainIconColorBorder,
						d.mainIconSizeNonIndia
					]
				})] })
			}),
			u.jsx(o("WAFlowsText.react").WAFlowsTextHeading, {
				text: h,
				textAlign: "center",
				xstyle: b.titleText
			}),
			s !== null && S ? u.jsxs("div", {
				className: "x2b8uid xj1urod x2yie3v",
				children: [
					u.jsx(o("WAFlowsText.react").WAFlowsTextBody, {
						xstyle: [d.descriptionText, b.descriptionText],
						text: L,
						display: "inline"
					}),
					u.jsx("div", {
						className: "xt0psk2",
						children: u.jsx(r("WAFlowsIcon.react"), {
							altText: "icon",
							id: "waf_disclosure_double_chevron",
							xstyle: d.descriptionIcon,
							displayInline: !0
						})
					}),
					u.jsx(o("WAFlowsText.react").WAFlowsTextBody, {
						xstyle: [d.descriptionText, b.descriptionText],
						text: E,
						display: "inline"
					}),
					u.jsx("span", { children: "\xA0" }),
					u.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
						text: o("WAFlowsLocalization").getNavBarContextualMenuLearnMore().toString(),
						inline: !0,
						xstyle: d.embeddedLink,
						onClick: k
					})
				]
			}) : u.jsxs("div", {
				className: "x2b8uid xj1urod x2yie3v",
				children: [
					u.jsx(o("WAFlowsText.react").WAFlowsTextBody, {
						xstyle: [d.descriptionText, b.descriptionText],
						text: l,
						display: "inline"
					}),
					u.jsx("span", { children: "\xA0" }),
					u.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
						text: o("WAFlowsLocalization").getNavBarContextualMenuLearnMore().toString(),
						inline: !0,
						xstyle: d.embeddedLink,
						onClick: k
					})
				]
			}),
			u.jsxs("div", babelHelpers.extends({}, e.props(b.rowListContainer), { children: [
				u.jsxs("div", {
					className: "x78zum5 x2yie3v",
					children: [u.jsx(r("WAFlowsIcon.react"), {
						altText: "icon",
						id: "waf_disclosure_visibility_off",
						xstyle: d.rowIconContainer
					}), u.jsx("div", {
						className: "xifpjyr xkpwil5",
						children: u.jsx(o("WAFlowsText.react").WAFlowsTextBody, { text: n })
					})]
				}),
				u.jsxs("div", {
					className: "x78zum5 x2yie3v",
					children: [u.jsx(r("WAFlowsIcon.react"), {
						altText: "icon",
						id: S ? "waf_disclosure_import" : "waf_disclosure_chevron_single",
						xstyle: d.rowIconContainer
					}), u.jsx("div", {
						className: "xifpjyr xkpwil5",
						children: u.jsx(o("WAFlowsText.react").WAFlowsTextBody, { text: i })
					})]
				}),
				u.jsxs("div", {
					className: "x78zum5 x2yie3v",
					children: [u.jsx(r("WAFlowsIcon.react"), {
						altText: "icon",
						id: "waf_disclosure_shield",
						xstyle: d.rowIconContainer
					}), u.jsx("div", {
						className: "xifpjyr xkpwil5",
						children: u.jsx(o("WAFlowsText.react").WAFlowsTextBody, { text: a })
					})]
				})
			] })),
			u.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
				targetId: "wae-portal-footer",
				children: u.jsxs("div", {
					className: "xh8yej3 x1q57ora xuax084 xmnamis xirhts3 x9f619",
					children: [u.jsx(r("WAFlowsOldButton.react"), {
						label: o("WAFlowsLocalization").getContinueFbt().toString(),
						onClick: _
					}), u.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
						text: o("WAFlowsLocalization").getGobackFbt().toString(),
						onClick: p
					})]
				})
			})
		] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e === "android" ? m : p;
	}
	l.default = _;
}), 98);
