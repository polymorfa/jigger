__d("useWAWebFilteredOutContacts", [
	"WAWebOutContactCollection",
	"WAWebOutContactInviteJourney",
	"react",
	"react-compiler-runtime",
	"useWAWebDebouncedCallback",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef, d = s.useState;
	function m() {
		return o("WAWebOutContactCollection").OutContactCollection.getContacts();
	}
	function p() {
		var e = o("react-compiler-runtime").c(5), t = c(!1), n = d(m), a = n[0], i = n[1], l;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			i(m());
		}, e[0] = l) : l = e[0];
		var s = r("useWAWebDebouncedCallback")(l, 50), p, _;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			t.current || (t.current = !0, o("WAWebOutContactInviteJourney").startOutContactInviteJourney());
		}, _ = [], e[1] = p, e[2] = _) : (p = e[1], _ = e[2]), u(p, _);
		var f;
		return e[3] !== s ? (f = function() {
			s();
		}, e[3] = s, e[4] = f) : f = e[4], o("useWAWebListener").useListener(o("WAWebOutContactCollection").OutContactCollection, "add change remove reset", f), a;
	}
	l.default = p;
}), 98);
