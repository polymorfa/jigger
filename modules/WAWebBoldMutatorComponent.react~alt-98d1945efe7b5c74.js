__d("WAWebBoldMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.children, a = n === void 0 ? "" : n, i = t.selectable, l = t.xstyle;
		return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableStrong, {
			selectable: i,
			appTextTemplate: "*${appText}*",
			className: l != null ? (e || (e = r("stylex")))(l) : void 0,
			children: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
