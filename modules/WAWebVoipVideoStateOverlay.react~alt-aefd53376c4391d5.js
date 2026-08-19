__d("WAWebVoipVideoStateOverlay.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebVoipWaCallEnums",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { overlay: {
		position: "x10l6tqk",
		top: "x13vifvy",
		insetInlineStart: "x1o0tod",
		left: null,
		right: null,
		width: "xh8yej3",
		height: "x5yr21d",
		zIndex: "xhtitgo",
		$$css: !0
	} };
	function d() {
		return u.jsx("div", {
			className: "x1od0jb8 x6nvzda x4i4b9w xhl9efl xj65ea0 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "persistentAlwaysWhite",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return u.jsx("div", {
			className: "x1od0jb8 x6nvzda x4i4b9w xhl9efl xj65ea0 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "persistentAlwaysWhite",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.peerReconnectingState, n = e.peerVideoPaused, r = n === void 0 ? !1 : n, a = (t == null ? void 0 : t.isReconnecting) === !0;
		return a ? u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.overlay,
			children: (t == null ? void 0 : t.option) === o("WAWebVoipWaCallEnums").ReconnectingOption.Text && u.jsx(d, {})
		}) : r ? u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.overlay,
			children: u.jsx(m, {})
		}) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.WAWebVoipVideoStateOverlay = p;
}), 226);
