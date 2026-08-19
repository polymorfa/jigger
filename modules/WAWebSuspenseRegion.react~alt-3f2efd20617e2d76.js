__d("WAWebSuspenseRegion.react", ["CometPlaceholder.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.use;
	function c(e) {
		var t = e.children, n = e.fallback, o = e.name, a = e.signal;
		return s.jsx(r("CometPlaceholder.react"), {
			name: o,
			fallback: n,
			children: s.jsx(d, {
				signal: a,
				children: t
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.children, n = e.signal;
		return u(n.getPromise()), t;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
