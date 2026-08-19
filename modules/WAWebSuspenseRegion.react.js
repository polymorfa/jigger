__d("WAWebSuspenseRegion.react", [
	"CometPlaceholder.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.use;
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.children, a = e.fallback, i = e.name, l = e.signal, u;
		t[0] !== n || t[1] !== l ? (u = s.jsx(d, {
			signal: l,
			children: n
		}), t[0] = n, t[1] = l, t[2] = u) : u = t[2];
		var c;
		return t[3] !== a || t[4] !== i || t[5] !== u ? (c = s.jsx(r("CometPlaceholder.react"), {
			name: i,
			fallback: a,
			children: u
		}), t[3] = a, t[4] = i, t[5] = u, t[6] = c) : c = t[6], c;
	}
	function d(e) {
		var t = e.children, n = e.signal;
		return u(n.getPromise()), t;
	}
	l.default = c;
}), 98);
