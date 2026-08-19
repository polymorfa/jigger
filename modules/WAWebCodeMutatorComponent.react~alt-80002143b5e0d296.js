__d("WAWebCodeMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { code: {
		fontFamily: "xgfl6pn",
		$$css: !0
	} };
	function d(t) {
		var n = t.children, a = n === void 0 ? "" : n, i = t.selectable, l = t.xstyle;
		return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
			selectable: i,
			appTextTemplate: "```${appText}```",
			className: (e || (e = r("stylex")))(c.code, l),
			children: a
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
