__d("scrollRefIntoView", [], (function(t, n, r, o, a, i) {
	var e = 100;
	function l(t, n) {
		n === void 0 && (n = !0);
		var r = function() {
			return (t == null ? void 0 : t.current) && t.current.scrollIntoView({ block: "center" });
		};
		n ? window.setTimeout(function() {
			r();
		}, e) : r();
	}
	i.scrollRefIntoView = l;
}), 66);
