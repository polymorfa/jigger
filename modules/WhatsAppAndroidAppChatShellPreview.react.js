__d("WhatsAppAndroidAppChatShellPreview.react", [
	"ix",
	"GeoBaseText.react",
	"GeoDefaultDarkThemeProvider",
	"GeoFlexbox.react",
	"GeoIcon.react",
	"GeoMediaItem.react",
	"GeoScrollableArea.react",
	"GeoThemeProvider",
	"Image.react",
	"fbicon",
	"geoMargin",
	"geoWidth",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		body: {
			backgroundColor: "x1m8ugtq",
			backgroundImage: "x1i2kbx7",
			backgroundSize: "x18d0r48",
			borderBottomLeftRadius: "xabvvm4",
			borderBottomRightRadius: "xeyy32k",
			$$css: !0
		},
		bodyContentWrapper: {
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x1g0dm76",
			$$css: !0
		},
		bodyContentWrapperWithMessageInput: {
			marginBottom: "xk1wuvs",
			$$css: !0
		},
		header: {
			backgroundColor: "x5rjt8t",
			$$css: !0
		},
		headerBase: {
			borderTopLeftRadius: "x1k1lpwg",
			borderTopRightRadius: "x5omr3n",
			minHeight: "x1rj1pf4",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			$$css: !0
		},
		headerLight: {
			backgroundColor: "x12peec7",
			$$css: !0
		},
		messageInput: {
			backgroundColor: "x1q85c4o",
			borderBottomLeftRadius: "x1kmrkhd",
			borderBottomRightRadius: "x7q44ak",
			borderTopLeftRadius: "x1otzmxj",
			borderTopRightRadius: "xhxebqp",
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x1g0dm76",
			position: "x1n2onr6",
			$$css: !0
		},
		messageInputButton: {
			backgroundColor: "xzhd6dx",
			$$css: !0
		},
		messageInputButtonBase: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x1g0dm76",
			$$css: !0
		},
		messageInputButtonLight: {
			backgroundColor: "xyw0k1r",
			$$css: !0
		},
		messageInputSheet: {
			backgroundColor: "x1q85c4o",
			borderBottomColor: "xogclcu",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			borderTopLeftRadius: "x1otzmxj",
			borderTopRightRadius: "xhxebqp",
			bottom: "x10w3d4m",
			left: "xu96u03",
			maxHeight: "x16yv4yi",
			overflowY: "x1odjw0f",
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "xf7dkkf",
			position: "x10l6tqk",
			right: "x3m8u43",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		messageInputWithSheet: {
			borderTopLeftRadius: "x1ia1hqs",
			borderTopRightRadius: "x1a2w583",
			$$css: !0
		},
		messageInputWrapper: {
			bottom: "xqo3gd",
			left: "xncym2f",
			position: "x10l6tqk",
			right: "x19up5dg",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		noBackground: {
			backgroundImage: "x18o3ruo",
			$$css: !0
		},
		root: {
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			boxShadow: "x1qkmp1j",
			position: "x1n2onr6",
			$$css: !0
		}
	}, m = u.jsx(r("Image.react"), { src: "https://graph.facebook.com/4/picture" });
	function p(e) {
		return c(function() {
			return e.isMessageInputShown === !0 || e.messageInputSheetContent != null;
		}, [e.isMessageInputShown, e.messageInputSheetContent]);
	}
	function _(e) {
		return e === "light" ? {
			headerIconColor: "default",
			headerStyles: d.headerLight,
			messageInputButtonStyles: d.messageInputButtonLight,
			messageInputTextIsDisabled: !0
		} : {
			headerIconColor: "inverted",
			headerStyles: d.header,
			messageInputButtonStyles: d.messageInputButton,
			messageInputTextIsDisabled: !1
		};
	}
	function f(e) {
		var t, n = p(e);
		return u.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			style: {
				height: (t = e.height) != null ? t : "auto",
				width: e.width
			},
			xstyle: d.root,
			children: [
				e.isHeaderShown !== !1 && u.jsx(g, babelHelpers.extends({}, e)),
				u.jsx(h, babelHelpers.extends({}, e)),
				n && u.jsx(y, babelHelpers.extends({}, e))
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.hideHeaderIcons, n = e.profileImage, a = e.profileName, i = e.profileSubtext, l = e.theme, c = _(l), p = c.headerIconColor, f = c.headerStyles, g = t != null ? t : !1;
		return u.jsxs(r("GeoFlexbox.react"), {
			alignItems: "center",
			gap: 4,
			xstyle: [d.headerBase, f],
			children: [
				u.jsx(r("GeoIcon.react"), {
					color: p,
					icon: o("fbicon")._(s("512647"), 20)
				}),
				u.jsx(r("GeoMediaItem.react"), {
					fit: "cover",
					media: n != null ? n : m,
					ratio: "circle",
					size: 32
				}),
				u.jsx(r("GeoThemeProvider"), {
					themeProvider: l !== "light" ? r("GeoDefaultDarkThemeProvider") : null,
					children: u.jsxs(r("GeoFlexbox.react"), {
						direction: "column",
						xstyle: r("geoMargin").start4,
						children: [u.jsx(r("GeoBaseText.react"), {
							color: "value",
							display: "truncate",
							maxLines: 1,
							showTruncationTooltip: !1,
							size: "header4",
							weight: "normal",
							children: a
						}), u.jsx(r("GeoBaseText.react"), {
							color: "value",
							display: "truncate",
							maxLines: 1,
							showTruncationTooltip: !1,
							size: "accent",
							children: i
						})]
					})
				}),
				u.jsxs(r("GeoFlexbox.react"), {
					gap: 16,
					grow: 1,
					justifyContent: "end",
					children: [
						!g && u.jsx(r("GeoIcon.react"), {
							color: p,
							icon: o("fbicon")._(s("493174"), 20)
						}),
						!g && u.jsx(r("GeoIcon.react"), {
							color: p,
							icon: o("fbicon")._(s("558161"), 20)
						}),
						!g && u.jsx(r("GeoIcon.react"), {
							color: p,
							icon: o("fbicon")._(s("555282"), 20)
						})
					]
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = p(e);
		return u.jsx(r("GeoFlexbox.react"), {
			grow: 1,
			xstyle: [d.body, e.hideChatBackground === !0 && d.noBackground],
			children: u.jsx(r("GeoScrollableArea.react"), {
				xstyle: [
					r("geoWidth").fullWidth,
					d.bodyContentWrapper,
					t && d.bodyContentWrapperWithMessageInput
				],
				children: e.bodyContent
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.messageInputSheetContent, n = e.messageInputText, a = e.showMessageInputIconWithSheetContent, i = e.theme, l = _(i), c = l.messageInputButtonStyles, m = l.messageInputTextIsDisabled, p = a != null ? a : !1;
		return u.jsx(r("GeoFlexbox.react"), {
			xstyle: d.messageInputWrapper,
			children: u.jsxs(r("GeoFlexbox.react"), {
				alignContent: "center",
				gap: 4,
				xstyle: r("geoWidth").fullWidth,
				children: [u.jsxs(r("GeoFlexbox.react"), {
					gap: 4,
					grow: 1,
					xstyle: [d.messageInput, t != null && d.messageInputWithSheet],
					children: [
						t != null && u.jsx(r("GeoFlexbox.react"), {
							xstyle: d.messageInputSheet,
							children: t
						}),
						u.jsx(r("GeoFlexbox.react"), {
							shrink: 0,
							children: u.jsx(r("Image.react"), { src: s("111540") })
						}),
						n != null && u.jsx(r("GeoFlexbox.react"), {
							shrink: 1,
							children: u.jsx(r("GeoBaseText.react"), {
								color: "value",
								display: "truncate",
								isDisabled: m,
								size: "value",
								children: n
							})
						}),
						u.jsxs(r("GeoFlexbox.react"), {
							gap: 12,
							grow: 1,
							justifyContent: "end",
							shrink: 0,
							children: [u.jsx(r("Image.react"), { src: s("111602") }), u.jsx(r("Image.react"), { src: s("1445282") })]
						})
					]
				}), t == null || p ? u.jsx(r("GeoFlexbox.react"), {
					shrink: 0,
					xstyle: [d.messageInputButtonBase, c],
					children: u.jsx(r("GeoIcon.react"), {
						color: "inverted",
						icon: o("fbicon")._(s("624149"), 20)
					})
				}) : null]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = f;
}), 98);
