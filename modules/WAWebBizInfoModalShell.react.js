__d("WAWebBizInfoModalShell.react", [
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		closeButton: {
			height: "xg7h5cd",
			width: "xeq5yr9",
			$$css: !0
		},
		content: {
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1j3ira4",
			$$css: !0
		},
		header: {
			columnGap: "x1aj3ljl",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			width: "x1n2tayp",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.children, a = e.onClose, i = e.title, l = a != null ? a : o("WAWebModalManager").closeModalManager, c;
		t[0] !== l ? (c = s.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			variant: "borderless",
			size: "medium",
			onPress: l,
			xstyle: u.closeButton
		}), t[0] = l, t[1] = c) : c = t[1];
		var d;
		t[2] !== i ? (d = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: i
		}), t[2] = i, t[3] = d) : d = t[3];
		var m;
		t[4] !== c || t[5] !== d ? (m = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: u.header,
			children: [c, d]
		}), t[4] = c, t[5] = d, t[6] = m) : m = t[6];
		var p;
		t[7] !== n ? (p = s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: u.content,
			children: n
		}), t[7] = n, t[8] = p) : p = t[8];
		var _;
		return t[9] !== m || t[10] !== p ? (_ = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: u.root,
				children: [m, p]
			})
		}), t[9] = m, t[10] = p, t[11] = _) : _ = t[11], _;
	}
	l.default = c;
}), 98);
