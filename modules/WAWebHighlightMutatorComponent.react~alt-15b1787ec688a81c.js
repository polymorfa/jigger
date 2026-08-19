__d("WAWebHighlightMutatorComponent.react", ["WAWebCopyPasteSelectable.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = t === void 0 ? "" : t, r = e.selectable;
		return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
			className: "x1r8hjv8 x117nqv4",
			"data-testid": "text-highlight",
			selectable: r,
			children: n
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
