__d("WAWebBizAdCreationFBPreview.react", [
	"fbt",
	"BizKitNMEMV4BVerifiedBadge.react",
	"FBNucleusCommentOutline16Icon.react",
	"FBNucleusLikeOutline16Icon.react",
	"FBNucleusShareOutline16Icon.react",
	"WAWebBizAdCreationPreviewMediaRenderers.react",
	"WAWebFlex.react",
	"WDSIconIcMoreHoriz.react",
	"WDSIconIcPublic.react",
	"WDSIconWdsIcWhatsapp.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = 300, m = 250, p = 262, _ = {
		ctaButton: {
			alignItems: "x6s0dn4",
			backgroundColor: "x3x0x6p",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			columnGap: "x1trrmfo",
			flexShrink: "x2lah0s",
			justifyContent: "xl56j7k",
			minWidth: "x6c5l4p",
			paddingTop: "x1yrsyyn",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		ctaRow: {
			backgroundColor: "x4wrhlh",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		ctaTextColumn: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			rowGap: "xm83of2",
			$$css: !0
		},
		header: {
			columnGap: "x1s70e7g",
			$$css: !0
		},
		headerContent: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			rowGap: "xm83of2",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		interactionButton: {
			alignItems: "x6s0dn4",
			columnGap: "x17zd0t2",
			$$css: !0
		},
		interactionRow: {
			columnGap: "xs2akgl",
			justifyContent: "x1l1ennw",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		mediaPreviewCardCarousel: {
			width: "x1rva8in",
			$$css: !0
		},
		mediaPreviewThumbnailContainer: {
			height: "x127qqk8",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		singleMediaPreviewContainer: {
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			flexShrink: "x2lah0s",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		sponsoredRow: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			$$css: !0
		},
		whatsappIcon: {
			color: "x14ug900",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.businessName, n = e.isVerified, a = e.profilePictureUrl;
		return c.jsx("div", {
			className: "x1xrf6ya xde1mab xscbp6u x1iw51ew",
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "start",
				xstyle: _.header,
				children: [
					c.jsx("div", {
						className: "x2lah0s",
						children: a != null ? c.jsx("img", {
							className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp xl1xv1r x100vrsf",
							alt: t,
							src: a
						}) : c.jsx("div", { className: "x4wrhlh x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x100vrsf" })
					}),
					c.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "start",
						xstyle: _.headerContent,
						children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							gap: 4,
							children: [c.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body2Emphasized",
								children: t
							}), n === !0 ? c.jsx(o("BizKitNMEMV4BVerifiedBadge.react").BizKitNMEMV4BVerifiedBadge, {
								size: "small",
								verified: !0
							}) : null]
						}), c.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: _.sponsoredRow,
							children: [
								c.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body3",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								c.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body3",
									children: "·"
								}),
								c.jsx(r("WDSIconIcPublic.react"), {
									height: 12,
									iconXstyle: _.icon,
									width: 12
								})
							]
						})]
					}),
					c.jsx(r("WDSIconIcMoreHoriz.react"), {
						height: 24,
						iconXstyle: _.icon,
						width: 24
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.description;
		return t == null || t.trim() === "" ? null : c.jsx("div", {
			className: "xscbp6u x1iw51ew xde1mab xexx8yu",
			"data-testid": "biz_native_ads_preview_description",
			children: c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				children: t
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.businessName;
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: _.ctaRow,
			children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				xstyle: _.ctaTextColumn,
				children: [c.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body3",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					maxLines: 1,
					type: "Body2Emphasized",
					children: t
				})]
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: _.ctaButton,
				children: [c.jsx(r("WDSIconWdsIcWhatsapp.react"), {
					height: 16,
					iconXstyle: _.whatsappIcon,
					width: 16
				}), c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body3Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e;
		return c.jsxs((e = o("WAWebFlex.react")).FlexRow, {
			xstyle: _.interactionRow,
			children: [
				c.jsxs(e.FlexRow, {
					xstyle: _.interactionButton,
					children: [c.jsx("div", {
						className: "xhslqc4 x78zum5 xlup9mm x1kky2od",
						children: c.jsx(r("FBNucleusLikeOutline16Icon.react"), {})
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body3Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				c.jsxs(e.FlexRow, {
					xstyle: _.interactionButton,
					children: [c.jsx("div", {
						className: "xhslqc4 x78zum5 xlup9mm x1kky2od",
						children: c.jsx(r("FBNucleusCommentOutline16Icon.react"), {})
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body3Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				c.jsxs(e.FlexRow, {
					xstyle: _.interactionButton,
					children: [c.jsx("div", {
						className: "xhslqc4 x78zum5 xlup9mm x1kky2od",
						children: c.jsx(r("FBNucleusShareOutline16Icon.react"), {})
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body3Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.businessName, a = t.cardType, i = t.media, l = a === "single" ? null : _.mediaPreviewCardCarousel;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.singleMediaPreviewContainer, l), { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [c.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").SingleMediaPreview, {
				containerXstyle: _.mediaPreviewThumbnailContainer,
				media: i
			}), c.jsx(h, { businessName: n })]
		}) }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.businessName, n = e.medias;
		return c.jsx("div", {
			className: "x1trrmfo x78zum5 x14aock7 x1iw51ew xde1mab",
			children: n.map(function(e, n) {
				return c.jsx(C, {
					businessName: t,
					cardType: "carousel",
					media: e
				}, n);
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.businessName, n = e.medias, r = e.thumbnailUrl, a = e.videoPosterUrl, i = e.videoUrl;
		if (i != null) return c.jsx("div", {
			className: "x1uvdrpn x14mko6t",
			children: c.jsx("div", {
				className: "xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x2lah0s x6ikm8r x10wlt62",
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					children: [c.jsx("div", {
						className: "x127qqk8 x6ikm8r x10wlt62",
						children: c.jsx("video", {
							className: "x5yr21d x19kjcj4 xh8yej3",
							autoPlay: !0,
							loop: !0,
							muted: !0,
							playsInline: !0,
							poster: a,
							src: i
						})
					}), c.jsx(h, { businessName: t })]
				})
			})
		});
		if (n != null && n.length > 0) {
			if (n.length === 1) {
				var l = n[0];
				return c.jsx("div", {
					className: "x1uvdrpn x14mko6t",
					children: c.jsx("div", {
						className: "xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x2lah0s x6ikm8r x10wlt62",
						children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							children: [typeof l == "string" ? c.jsx("div", {
								className: "x127qqk8 x6ikm8r x10wlt62",
								children: c.jsx("img", {
									className: "x5yr21d xl1xv1r xh8yej3",
									alt: s._(
										/*BTDS*/
										""
									),
									src: l
								})
							}) : c.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").SingleMediaPreview, {
								containerXstyle: _.mediaPreviewThumbnailContainer,
								media: l
							}), c.jsx(h, { businessName: t })]
						})
					})
				});
			}
			var u = n.every(function(e) {
				return typeof e == "string";
			});
			if (u) return c.jsx("div", {
				className: "x1trrmfo x78zum5 x14aock7 x1iw51ew xde1mab",
				children: n.map(function(e, n) {
					return c.jsx("div", {
						className: "xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x2lah0s x6ikm8r x10wlt62 x1rva8in",
						children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							children: [c.jsx("div", {
								className: "x127qqk8 x6ikm8r x10wlt62",
								children: c.jsx("img", {
									className: "x5yr21d xl1xv1r xh8yej3",
									alt: s._(
										/*BTDS*/
										""
									),
									src: typeof e == "string" ? e : ""
								})
							}), c.jsx(h, { businessName: t })]
						})
					}, n);
				})
			});
			var d = n.filter(function(e) {
				return typeof e != "string";
			});
			return c.jsx(b, {
				businessName: t,
				medias: d
			});
		}
		return c.jsx("div", {
			className: "x1uvdrpn x14mko6t",
			children: c.jsx("div", {
				className: "xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x2lah0s x6ikm8r x10wlt62",
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					children: [c.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").PlaceholderMediaPreview, {
						containerXstyle: _.mediaPreviewThumbnailContainer,
						thumbnailUrl: r
					}), c.jsx(h, { businessName: t })]
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return c.jsxs("div", {
			className: "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta xdqjdmj xvc5jky x11t971q xdzyupr",
			children: [
				c.jsx(f, {
					businessName: e.businessName,
					isVerified: e.isVerified,
					profilePictureUrl: e.profilePictureUrl
				}),
				c.jsx(g, { description: e.description }),
				c.jsx(v, {
					businessName: e.businessName,
					medias: e.medias,
					thumbnailUrl: e.thumbnailUrl,
					videoPosterUrl: e.videoPosterUrl,
					videoUrl: e.videoUrl
				}),
				c.jsx(y, {})
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
