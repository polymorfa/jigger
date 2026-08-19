__d("WAWebSpoilerMutatorComponent.react", [
	"WAWebSpoiler.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, a = e.interactive, i = e.selectable, l = n === void 0 ? "" : n, u = a != null ? a : i, c;
		return t[0] !== l || t[1] !== u ? (c = s.jsx(r("WAWebSpoiler.react"), {
			interactive: u,
			children: l
		}), t[0] = l, t[1] = u, t[2] = c) : c = t[2], c;
	}
	l.default = u;
}), 98);
