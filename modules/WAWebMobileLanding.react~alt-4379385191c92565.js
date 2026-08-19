__d("WAWebMobileLanding.react", [
	"fbt",
	"WALogger",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebMobileLandingAcquisition.react",
	"WAWebMobileLandingAcquisitionGating",
	"WAWebQplFlowWrapper",
	"WAWebWaLogoIcon.react",
	"WAWebWaWordmarkIcon.react",
	"WAWebXAltIcon.react",
	"WDSIconIcShare.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"bx",
	"getErrorSafe",
	"qpl",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = {
		marginTop15: {
			marginTop: "xcxhlts",
			$$css: !0
		},
		paddingInlineEnd6: {
			paddingInlineEnd: "x1icxu4v",
			$$css: !0
		},
		marginTop36: {
			marginTop: "xseo6mj",
			$$css: !0
		},
		padding15: {
			paddingTop: "xqy66fx",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xr1496l",
			paddingInlineStart: "x1gx403c",
			$$css: !0
		}
	}, p = {
		container: {
			height: "x5yr21d",
			boxSizing: "x9f619",
			maxWidth: "x1j9u4d2",
			minWidth: "x18n5i07",
			minHeight: "x1xoerdy",
			$$css: !0
		},
		brandColor: {
			color: "x1y4xi8",
			$$css: !0
		},
		infoText: {
			color: "x1hql6x6",
			textAlign: "x2b8uid",
			justifyContent: "xl56j7k",
			lineHeight: "x1u5lrna",
			fontWeight: "xk50ysn",
			$$css: !0
		},
		shareButton: {
			color: "x1hql6x6",
			fontWeight: "x1s688f",
			fontSize: "x1c3i2sq",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xsrozwr",
			borderInlineEndColor: "x1w32m0z",
			borderBottomColor: "xmigjs0",
			borderInlineStartColor: "xrolgzk",
			borderStartStartRadius: "x17m9png",
			borderStartEndRadius: "x91sizk",
			borderEndEndRadius: "x1vva9xg",
			borderEndStartRadius: "x1jfkl46",
			lineHeight: "x1d3mw78",
			width: "xh8yej3",
			whiteSpace: "x126k92a",
			backgroundColor: "x12peec7",
			$$css: !0
		},
		shareContainer: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function _() {
		return {
			title: s._(
				/*BTDS*/
				""
			).toString(),
			text: s._(
				/*BTDS*/
				""
			).toString(),
			url: "https://web.whatsapp.com"
		};
	}
	var f = r("qpl")._(891428886, "3264");
	async function g(e, t) {
		try {
			var n = o("WAWebQplFlowWrapper").QPL.markerStart(f, { annotations: { string: {
				context: e,
				result: String(t)
			} } });
			n.end(2);
		} catch (e) {}
	}
	function h() {
		var t = o("WAWebMobileLandingAcquisitionGating").getMobileLandingAcquisitionExperiment();
		if (t !== o("WAWebMobileLandingAcquisitionGating").MobileLandingAcquisitionExperiment.None) return d.jsx(r("WAWebMobileLandingAcquisition.react"), { experiment: t });
		var n = _(), a = async function() {
			await g("dismiss"), o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/", { target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB });
		}, i = async function() {
			try {
				await (navigator.share == null ? void 0 : navigator.share(n)), await g("click", "success");
			} catch (t) {
				await g("click", t), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error while sharing"]))).catching(r("getErrorSafe")(t));
			}
		};
		return d.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			className: "xvmahel x1uus05e x5yr21d xh8yej3",
			children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [
					p.container,
					o("WDSPaddings.stylex").wdsPaddings.padding20,
					o("WDSMargins.stylex").wdsMargins.marginAuto
				],
				align: "center",
				justify: "center",
				grow: 1,
				children: [
					d.jsx(o("WAWebFlex.react").FlexItem, {
						align: "end",
						children: d.jsx("button", {
							onClick: a,
							className: "x1hql6x6 x10l6tqk xo2ifbc x1eu8d0j",
							"aria-label": s._(
								/*BTDS*/
								""
							),
							children: d.jsx(o("WAWebXAltIcon.react").XAltIcon, {
								width: 30,
								height: 30
							})
						})
					}),
					d.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: m.marginTop15,
						children: [d.jsx(o("WAWebFlex.react").FlexItem, {
							grow: 0,
							xstyle: m.paddingInlineEnd6,
							children: d.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
								height: 35,
								iconXstyle: p.brandColor
							})
						}), d.jsx(o("WAWebFlex.react").FlexItem, {
							grow: 1,
							xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
							children: d.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
								height: 25,
								iconXstyle: p.brandColor
							})
						})]
					}),
					d.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: [m.marginTop36, m.padding15],
						children: d.jsx("img", {
							className: "xh8yej3",
							alt: s._(
								/*BTDS*/
								""
							),
							src: r("bx").getURL(r("bx")("15023"))
						})
					}),
					d.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: [p.infoText, o("WDSMargins.stylex").wdsMargins.marginTop24],
						children: d.jsx("p", {
							className: "x1hql6x6 x2b8uid xl56j7k x1u5lrna xk50ysn",
							children: s._(
								/*BTDS*/
								"",
								[s._implicitParam("=m2", d.jsx("span", {
									className: "x1xlr1w8",
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})
					}),
					d.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: [
							p.shareContainer,
							o("WDSMargins.stylex").wdsMargins.marginTop40,
							o("WDSPaddings.stylex").wdsPaddings.paddingHor16
						],
						align: "center",
						grow: 1,
						children: (navigator.canShare == null ? void 0 : navigator.canShare(n)) && d.jsx("button", babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.shareButton, o("WDSPaddings.stylex").wdsPaddings.paddingVer16), {
							onClick: i,
							children: d.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								grow: 0,
								children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: s._(
									/*BTDS*/
									""
								) }), d.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
									children: d.jsx(r("WDSIconIcShare.react"), {
										width: 22,
										height: 22
									})
								})]
							})
						}))
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
