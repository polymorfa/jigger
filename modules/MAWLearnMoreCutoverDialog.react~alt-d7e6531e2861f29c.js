__d("MAWLearnMoreCutoverDialog.react", [
	"fbt",
	"ix",
	"CometColumn.react",
	"CometColumnItem.react",
	"CometImage.react",
	"ConstUriUtils",
	"CurrentEnvironment",
	"FDSDialog.react",
	"FDSDialogHeader.react",
	"MWXButton.react",
	"MWXIconForListCell.react",
	"MWXIconInfoCircle",
	"MWXIconMenuItemSparkles",
	"MWXLink.react",
	"MWXListCell.react",
	"MWXText.react",
	"MWXTextPairing.react",
	"XInstagramHelpDotComContentControllerRouteBuilder",
	"XMessengerDotComHelpContentControllerRouteBuilder",
	"fbs",
	"react"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c = e || (e = o("react")), d = {
		image: {
			height: "x16d3s56",
			width: "x2i0jwv",
			$$css: !0
		},
		imageContainer: {
			marginTop: "x1cm6mvd",
			$$css: !0
		},
		text: {
			marginInlineEnd: "x11t971q",
			marginInlineStart: "xvc5jky",
			$$css: !0
		}
	};
	function m(e) {
		var t, n = e.onClose;
		return c.jsx(r("FDSDialog.react"), {
			footer: null,
			header: c.jsx(r("FDSDialogHeader.react"), {
				onClose: n,
				withoutDivider: !0
			}),
			children: c.jsxs(r("CometColumn.react"), {
				align: "center",
				paddingHorizontal: 20,
				paddingVertical: 20,
				spacing: 8,
				children: [
					c.jsx(t = r("CometColumnItem.react"), {
						xstyle: d.imageContainer,
						children: c.jsx(r("CometImage.react"), {
							src: u("913296"),
							xstyle: d.image
						})
					}),
					c.jsx(t, {
						xstyle: d.text,
						children: c.jsx(r("MWXText.react"), {
							align: "center",
							isSemanticHeading: !1,
							type: "headlineEmphasized2",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsxs(t, {
						align: "start",
						paddingTop: 20,
						xstyle: d.text,
						children: [c.jsx(r("MWXListCell.react"), {
							addOnStart: c.jsx(r("MWXIconForListCell.react"), {
								hasBackground: !1,
								icon: r("MWXIconMenuItemSparkles"),
								size: "large"
							}),
							addOnStartVerticalAlign: "top",
							content: c.jsx(r("MWXTextPairing.react"), {
								body: s._(
									/*BTDS*/
									""
								),
								bodyColor: "secondary",
								headline: s._(
									/*BTDS*/
									""
								),
								level: 4
							})
						}, "1"), c.jsx(r("MWXListCell.react"), {
							addOnStart: c.jsx(r("MWXIconForListCell.react"), {
								hasBackground: !1,
								icon: r("MWXIconInfoCircle"),
								size: "large"
							}),
							addOnStartVerticalAlign: "top",
							content: c.jsx(r("MWXTextPairing.react"), {
								body: c.jsx(r("MWXText.react"), {
									align: "center",
									color: "secondary",
									type: "body4",
									children: s._(
										/*BTDS*/
										"",
										[s._implicitParam("=m1", c.jsx(r("MWXText.react"), {
											color: "blueLink",
											type: "bodyLink4",
											children: s._(
												/*BTDS*/
												"",
												[s._implicitParam("=m1", c.jsx(r("MWXLink.react"), {
													"aria-label": s._(
														/*BTDS*/
														""
													),
													href: p(),
													target: "_blank",
													children: s._(
														/*BTDS*/
														""
													)
												}))]
											)
										}))]
									)
								}),
								bodyColor: "secondary",
								headline: s._(
									/*BTDS*/
									""
								),
								level: 4
							})
						}, "2")]
					}),
					c.jsx(t, {
						paddingTop: 20,
						children: c.jsx(r("MWXButton.react"), {
							label: r("fbs")._(
								/*BTDS*/
								""
							),
							onPress: n,
							type: "primary"
						})
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e;
		return o("CurrentEnvironment").instagramdotcom ? (e = r("XInstagramHelpDotComContentControllerRouteBuilder").buildUri({ cms_id: "491565145294150" }).qualifyDomain(o("ConstUriUtils").getUri("https://help.instagram.com/"))) == null ? void 0 : e.toString() : r("XMessengerDotComHelpContentControllerRouteBuilder").buildUri({ cms_id: "786613221989782" }).toString();
	}
	l.default = m;
}), 226);
