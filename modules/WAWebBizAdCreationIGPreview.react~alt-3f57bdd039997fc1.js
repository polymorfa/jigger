__d("WAWebBizAdCreationIGPreview.react", [
	"fbt",
	"BizKitNMEMV4BVerifiedBadge.react",
	"FBNucleusBookmarkOutline24Icon.react",
	"FBNucleusCommentOutline24Icon.react",
	"FBNucleusHeartOutline24Icon.react",
	"FBNucleusSendOutline24Icon.react",
	"WAWebBizAdCreationIGCarouselDotIndicator.react",
	"WAWebBizAdCreationIGPreviewMedia.react",
	"WAWebChevronIcon.react",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WDSIconIcMoreHoriz.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = 300, m = {
		chevronIcon: {
			color: "x14ug900",
			$$css: !0
		},
		ctaRow: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			justifyContent: "x1qughib",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x1iw51ew",
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
		interactionButtonsRow: {
			justifyContent: "x1qughib",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		interactionButtonsRowMultiMedia: {
			paddingTop: "xexx8yu",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.businessName, n = e.isVerified, a = e.profilePictureUrl;
		return u.jsx("div", {
			className: "x1xrf6ya xde1mab xscbp6u x1iw51ew",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "start",
				xstyle: m.header,
				children: [
					u.jsx("div", {
						className: "x2lah0s",
						children: a != null ? u.jsx("img", {
							className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp xl1xv1r x100vrsf",
							alt: t,
							src: a
						}) : u.jsx("div", { className: "x4wrhlh x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x100vrsf" })
					}),
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "start",
						xstyle: m.headerContent,
						children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							gap: 4,
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body2Emphasized",
								children: t
							}), n === !0 ? u.jsx(o("BizKitNMEMV4BVerifiedBadge.react").BizKitNMEMV4BVerifiedBadge, {
								size: "small",
								verified: !0
							}) : null]
						}), u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body3",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsx(r("WDSIconIcMoreHoriz.react"), {
						height: 24,
						iconXstyle: m.icon,
						width: 24
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.ctaRow,
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2Emphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				directional: !0,
				height: 20,
				width: 20,
				xstyle: m.chevronIcon
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.hasCarousel, n = e.medias, a = t || n != null && n.length > 1;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [m.interactionButtonsRow, a && m.interactionButtonsRowMultiMedia],
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 20,
				children: [
					u.jsx("div", {
						className: "x6s0dn4 x78zum5 xl56j7k x1552e4s",
						children: u.jsx(r("FBNucleusHeartOutline24Icon.react"), {})
					}),
					u.jsx("div", {
						className: "x6s0dn4 x78zum5 xl56j7k x1552e4s",
						children: u.jsx(r("FBNucleusCommentOutline24Icon.react"), {})
					}),
					u.jsx("div", {
						className: "x6s0dn4 x78zum5 xl56j7k x1552e4s",
						children: u.jsx(r("FBNucleusSendOutline24Icon.react"), {})
					})
				]
			}), u.jsx("div", {
				className: "x6s0dn4 x78zum5 xl56j7k x1552e4s",
				children: u.jsx(r("FBNucleusBookmarkOutline24Icon.react"), {})
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.businessName, n = e.description;
		return u.jsx("div", {
			className: "xscbp6u x1iw51ew xde1mab xexx8yu",
			children: u.jsxs(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				children: [
					u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body2Emphasized",
						children: t
					}),
					" ",
					n
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t, n, a = c(0), i = a[0], l = a[1], s = e.medias != null && e.medias.length > 1, d = (t = (n = e.medias) == null ? void 0 : n.length) != null ? t : 0;
		return u.jsxs("div", {
			className: "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta xdqjdmj xvc5jky x11t971q xdzyupr",
			children: [
				u.jsx(p, {
					businessName: e.businessName,
					isVerified: e.isVerified,
					profilePictureUrl: e.profilePictureUrl
				}),
				u.jsx(o("WAWebBizAdCreationIGPreviewMedia.react").MediaPreviewRow, {
					currentIndex: i,
					medias: e.medias,
					setCurrentIndex: l,
					thumbnailUrl: e.thumbnailUrl,
					videoPosterUrl: e.videoPosterUrl,
					videoUrl: e.videoUrl
				}),
				u.jsx(_, {}),
				u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				s && d > 1 ? u.jsx(r("WAWebBizAdCreationIGCarouselDotIndicator.react"), {
					currentIndex: i,
					totalCount: d
				}) : null,
				u.jsx(f, {
					hasCarousel: s,
					medias: e.medias
				}),
				u.jsx(g, {
					businessName: e.businessName,
					description: e.description
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
