__d("useWAWebLogUnknownUserDisplayed", [
	"WAWebUnknownUserDisplayEnricher",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useEffect;
	function u(e, t, n) {
		var r = o("react-compiler-runtime").c(5), a = t == null ? void 0 : t.id, i, l;
		r[0] !== e || r[1] !== n || r[2] !== a ? (i = function() {
			e != null && a != null && n && o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed(e, a);
		}, l = [
			e,
			a,
			n
		], r[0] = e, r[1] = n, r[2] = a, r[3] = i, r[4] = l) : (i = r[3], l = r[4]), s(i, l);
	}
	l.useLogUnknownUserDisplayed = u;
}), 98);
