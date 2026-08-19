__d("groupBy", [], (function(t, n, r, o, a, i) {
	function e(e, t) {
		return e.reduce(function(e, n) {
			return (e[t(n)] = e[t(n)] || []).push(n), e;
		}, {});
	}
	i.default = e;
}), 66);
