__d("WAWebSpoilerMutatorComponent.react", ["WAWebSpoiler.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = t === void 0 ? "" : t, o = e.interactive, a = e.selectable;
		return s.jsx(r("WAWebSpoiler.react"), {
			interactive: o != null ? o : a,
			children: n
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
