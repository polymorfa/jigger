__d("WAWebProfileImage.react", [
	"WAWebDefaultContactRefreshedIcon.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebProfilePicThumbCollection",
	"WAWebReleaseToEventLoop",
	"react",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = {
		default: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		icon: {
			flex: "x3psx0u",
			$$css: !0
		},
		circleIconRefreshed: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		iconOutlineRefreshed: {
			outline: "x4u6w88",
			outlineOffset: "x1g40iwv",
			$$css: !0
		},
		image: {
			objectFit: "xl1xv1r",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			zIndex: "x11uqc5h",
			display: "x1rg5ohu",
			flex: "x1okw0bk",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		hasBorder: {
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x16jw5py",
			borderInlineEndColor: "x13dr7gu",
			borderBottomColor: "xd9srri",
			borderInlineStartColor: "x1ia0k5z",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		hasInnerBorder: {
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineEnd": "xtyp5od",
			"::before_bottom": "xhq5o37",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_content": "x1cpjm7i",
			"::before_borderStartStartRadius": "xn4w8fp",
			"::before_borderStartEndRadius": "x17issv1",
			"::before_borderEndEndRadius": "xxslzl9",
			"::before_borderEndStartRadius": "xwjlxly",
			"::before_transition": "xm9zcnd",
			"::before_borderTopWidth": "xw0xpw4",
			"::before_borderInlineEndWidth": "xq6t1ow",
			"::before_borderBottomWidth": "x1ea1ikp",
			"::before_borderInlineStartWidth": "x1lcsdb1",
			"::before_borderTopStyle": "xnvurfn",
			"::before_borderInlineEndStyle": "x1v3rft4",
			"::before_borderBottomStyle": "x1opv7go",
			"::before_borderInlineStartStyle": "x1rovbrg",
			"::before_borderTopColor": "x8hm4yl",
			"::before_borderInlineEndColor": "x1aaveat",
			"::before_borderBottomColor": "xrphwa6",
			"::before_borderInlineStartColor": "x1wildu8",
			$$css: !0
		},
		hasLargeInnerBorder: {
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineEnd": "xtyp5od",
			"::before_bottom": "xhq5o37",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_content": "x1cpjm7i",
			"::before_borderStartStartRadius": "xn4w8fp",
			"::before_borderStartEndRadius": "x17issv1",
			"::before_borderEndEndRadius": "xxslzl9",
			"::before_borderEndStartRadius": "xwjlxly",
			"::before_transition": "xm9zcnd",
			"::before_borderTopWidth": "xm4vf9w",
			"::before_borderInlineEndWidth": "x1ggjbpq",
			"::before_borderBottomWidth": "xu20p9z",
			"::before_borderInlineStartWidth": "x1t6kmxa",
			"::before_borderTopStyle": "xnvurfn",
			"::before_borderInlineEndStyle": "x1v3rft4",
			"::before_borderBottomStyle": "x1opv7go",
			"::before_borderInlineStartStyle": "x1rovbrg",
			"::before_borderTopColor": "x8hm4yl",
			"::before_borderInlineEndColor": "x1aaveat",
			"::before_borderBottomColor": "xrphwa6",
			"::before_borderInlineStartColor": "x1wildu8",
			$$css: !0
		},
		dimmed: {
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineEnd": "xtyp5od",
			"::before_bottom": "xhq5o37",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_content": "x1cpjm7i",
			"::before_borderStartStartRadius": "xn4w8fp",
			"::before_borderStartEndRadius": "x17issv1",
			"::before_borderEndEndRadius": "xxslzl9",
			"::before_borderEndStartRadius": "xwjlxly",
			"::before_transition": "xm9zcnd",
			"::before_backgroundColor": "x1x8b9cq",
			$$css: !0
		},
		square: {
			borderStartStartRadius: "x15mokao",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "xbiv7yw",
			"::before_borderStartStartRadius": "xnh6gb5",
			"::before_borderStartEndRadius": "xi0d610",
			"::before_borderEndEndRadius": "xjd5t2z",
			"::before_borderEndStartRadius": "x1xd7p0v",
			$$css: !0
		},
		rowOrCol: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		rowColChildBase: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1t1x2f9",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		rowChild: {
			marginTop: "xdj266r",
			marginInlineEnd: "xnnr8r",
			marginBottom: "xat24cr",
			marginInlineStart: "xwklpps",
			$$css: !0
		},
		rowChildFirst: {
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		rowChildLast: {
			marginInlineEnd: "x14z9mp",
			$$css: !0
		},
		colChild: {
			marginTop: "xr9ek0c",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xjpr12u",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		colChildFirst: {
			marginTop: "xdj266r",
			$$css: !0
		},
		colChildLast: {
			marginBottom: "xat24cr",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.theme, a = t.wid, i = m(null), l = i[0], s = i[1], c = m(null), _ = c[0], f = c[1], g = function(t) {
			s(t == null ? void 0 : t.img);
		};
		if (d(function() {
			if (a) {
				var e = !1;
				return o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(a).then(function(e) {
					return o("WAWebReleaseToEventLoop").releaseToEventLoop().then(function() {
						return e;
					});
				}).then(function(t) {
					e || (f(t), g(t));
				}).catch(r("WAWebNoop")), function() {
					e = !0;
				};
			}
		}, []), o("useWAWebListener").useListener(_, "change:img", g), a != null && (l != null || a != null && a.isNewsletter())) return u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a,
			quoted: t.quoted,
			size: t.size,
			shape: t.shape,
			border: t.border,
			quality: t.quality
		});
		var h;
		typeof t.size == "number" && t.size !== 0 || typeof t.size != "number" && t.size != null ? h = t.size : h = o("WAWebDetailImage.react").DetailImageSize.Small;
		var y = n === "voip" || n === "voip-dimmed", C = n === "voip-large" || n === "voip-large-dimmed", b = n === "voip-dimmed" || n === "voip-large-dimmed", v = o("WAWebDetailImage.react").getSize(h) || void 0, S = t.thumbs ? t.thumbs : [t.thumb], R = S.length, L = S.map(function(n, a) {
			var i = R === 2 || R >= 3 && a === 0, l = R >= 3 && a >= 1, s = a === 0 || R >= 3 && a === 1, c = R === 2 && a === 1 || R >= 3 && a === 2, d = [
				(i || l) && p.rowColChildBase,
				i && p.rowChild,
				l && p.colChild,
				i && s && p.rowChildFirst,
				i && c && p.rowChildLast,
				l && s && p.colChildFirst,
				l && c && p.colChildLast
			];
			if (n) return u.createElement("img", babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, [p.image].concat(d)), {
				src: n,
				key: a,
				alt: ""
			}));
			var m = v && v / (S.length > 2 && a > 0 ? 2 : 1), _ = {
				width: m,
				height: m,
				xstyle: p.icon
			}, f = u.jsx(o("WAWebDefaultContactRefreshedIcon.react").DefaultContactRefreshedIcon, babelHelpers.extends({}, _, { iconXstyle: t.quoted !== !0 && [p.circleIconRefreshed, p.iconOutlineRefreshed] }));
			return u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [p.default].concat(d),
				justify: "center",
				align: "center",
				children: f
			}, a);
		}), E;
		return L.length === 1 ? E = L[0] : L.length === 2 ? E = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: p.rowOrCol,
			justify: "stretch",
			align: "stretch",
			children: [L[0], L[1]]
		}) : E = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: p.rowOrCol,
			justify: "stretch",
			align: "stretch",
			children: [L[0], u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [
					p.rowOrCol,
					p.rowColChildBase,
					p.rowChild,
					p.rowChildLast
				],
				justify: "stretch",
				align: "stretch",
				children: [L[1], L[2]]
			})]
		}), u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				p.container,
				t.border === !0 && p.hasBorder,
				y && p.hasInnerBorder,
				C && p.hasLargeInnerBorder,
				b && p.dimmed,
				t.shape === o("WAWebDetailImage.react").DetailImageShape.Square && p.square
			],
			isFlexContainer: !1,
			style: {
				width: v,
				height: v
			},
			children: E
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
