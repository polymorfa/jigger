__d("WAWebWindowsSettingsBanner.react", [
	"WAWebClickableLink.react",
	"WAWebFlex.react",
	"WAWebIcErrorIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		wrapper: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			$$css: !0
		},
		error: {
			backgroundColor: "xj44v4f",
			$$css: !0
		},
		iconColor: {
			color: "x1f81s73",
			$$css: !0
		},
		titleMargin: {
			marginBottom: "x4tpdpg",
			$$css: !0
		},
		contentMargin: {
			marginBottom: "x4tpdpg",
			$$css: !0
		},
		buttonMargin: {
			marginBottom: "x4tpdpg",
			$$css: !0
		},
		containerSpacing: {
			marginInlineStart: "x6pxu1d",
			marginInlineEnd: "xd6izgl",
			marginLeft: null,
			marginRight: null,
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		columnSpacing: {
			marginInlineStart: "xlese2p",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.buttonContent, n = e.content, a = e.onClick, i = e.title, l = e.xstyle;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			grow: 0,
			align: "start",
			xstyle: [
				u.wrapper,
				u.error,
				u.containerSpacing,
				l
			],
			children: [s.jsx(o("WAWebFlex.react").FlexItem, { children: s.jsx(o("WAWebIcErrorIcon.react").IcErrorIcon, { xstyle: u.iconColor }) }), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.columnSpacing,
				children: [
					s.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						xstyle: u.titleMargin,
						children: i
					}),
					s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						xstyle: u.contentMargin,
						children: n
					}),
					s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						xstyle: u.buttonMargin,
						children: s.jsx(r("WAWebClickableLink.react"), {
							tabIndex: 0,
							onClick: a,
							children: t
						})
					})
				]
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
