__d("useWAWebActiveChat", [
	"WAWebChatCollection",
	"WAWebCmd",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useState;
	function u() {
		var e = o("react-compiler-runtime").c(3), t = s(c), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function(t) {
			var e = t.chat;
			return r(e);
		}, e[0] = a) : a = e[0], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", a);
		var i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			return r(null);
		}, e[1] = i) : i = e[1], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", i);
		var l;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			return r(null);
		}, e[2] = l) : l = e[2], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", l), n;
	}
	function c() {
		return o("WAWebChatCollection").ChatCollection.getActive();
	}
	l.default = u;
}), 98);
