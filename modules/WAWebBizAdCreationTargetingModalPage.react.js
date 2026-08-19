__d("WAWebBizAdCreationTargetingModalPage.react", [
	"WAWebConfirmPopup.react",
	"WAWebFlexBox.react",
	"WAWebModal.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		header: {
			columnGap: "x1aj3ljl",
			flexShrink: "x2lah0s",
			marginInlineStart: "x1ho36z8",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			height: "x1d9x2de",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1xrf6ya",
			width: "x1czfd9k",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.children, r = e.headerContent, a = e.xstyle, i = a === void 0 ? null : a, l;
		t[0] !== i ? (l = [i, u.root], t[0] = i, t[1] = l) : l = t[1];
		var c;
		t[2] !== r ? (c = s.jsx(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			xstyle: u.header,
			children: r
		}), t[2] = r, t[3] = c) : c = t[3];
		var d;
		return t[4] !== n || t[5] !== l || t[6] !== c ? (d = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
				align: "stretch",
				xstyle: l,
				children: [c, n]
			})
		}), t[4] = n, t[5] = l, t[6] = c, t[7] = d) : d = t[7], d;
	}
	l.default = c;
}), 98);
