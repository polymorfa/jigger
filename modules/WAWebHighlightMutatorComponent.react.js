__d("WAWebHighlightMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, r = e.selectable, a = n === void 0 ? "" : n, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = "x1r8hjv8 x117nqv4", t[0] = i) : i = t[0];
		var l;
		return t[1] !== a || t[2] !== r ? (l = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
			className: i,
			"data-testid": "text-highlight",
			selectable: r,
			children: a
		}), t[1] = a, t[2] = r, t[3] = l) : l = t[3], l;
	}
	l.default = u;
}), 98);
