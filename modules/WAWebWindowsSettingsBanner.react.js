__d("WAWebWindowsSettingsBanner.react", [
	"WAWebClickableLink.react",
	"WAWebFlex.react",
	"WAWebIcErrorIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(17), n = e.buttonContent, a = e.content, i = e.onClick, l = e.title, c = e.xstyle, d;
		t[0] !== c ? (d = [
			u.wrapper,
			u.error,
			u.containerSpacing,
			c
		], t[0] = c, t[1] = d) : d = t[1];
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(o("WAWebFlex.react").FlexItem, { children: s.jsx(o("WAWebIcErrorIcon.react").IcErrorIcon, { xstyle: u.iconColor }) }), t[2] = m) : m = t[2];
		var p;
		t[3] !== l ? (p = s.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: u.titleMargin,
			children: l
		}), t[3] = l, t[4] = p) : p = t[4];
		var _;
		t[5] !== a ? (_ = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: u.contentMargin,
			children: a
		}), t[5] = a, t[6] = _) : _ = t[6];
		var f;
		t[7] !== n || t[8] !== i ? (f = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: u.buttonMargin,
			children: s.jsx(r("WAWebClickableLink.react"), {
				tabIndex: 0,
				onClick: i,
				children: n
			})
		}), t[7] = n, t[8] = i, t[9] = f) : f = t[9];
		var g;
		t[10] !== p || t[11] !== _ || t[12] !== f ? (g = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.columnSpacing,
			children: [
				p,
				_,
				f
			]
		}), t[10] = p, t[11] = _, t[12] = f, t[13] = g) : g = t[13];
		var h;
		return t[14] !== d || t[15] !== g ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			grow: 0,
			align: "start",
			xstyle: d,
			children: [m, g]
		}), t[14] = d, t[15] = g, t[16] = h) : h = t[16], h;
	}
	l.default = c;
}), 98);
