__d("WAWebDevToolsSection.react", [
	"WAWebCopyPasteSelectable.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { marginTop8: {
		marginTop: "x1380le5",
		$$css: !0
	} }, c = u.marginTop8;
	function d(e) {
		var t = e.children, n = e.isRefresh;
		return n === !0 ? s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
			selectable: !0,
			children: s.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
				xstyle: u.marginTop8,
				children: t
			})
		}) : s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
			selectable: !0,
			children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: c,
				children: t
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
