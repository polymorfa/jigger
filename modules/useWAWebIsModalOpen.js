__d("useWAWebIsModalOpen", [
	"WAWebModalManager",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useState;
	function u() {
		var e = o("react-compiler-runtime").c(2), t = s(c), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			return r(!0);
		}, e[0] = a) : a = e[0], o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_modal", a);
		var i;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			return r(!1);
		}, e[1] = i) : i = e[1], o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", i), n;
	}
	function c() {
		var e = !1;
		return o("WAWebModalManager").ModalManager.exists(function(t) {
			e = t;
		}), e;
	}
	l.default = u;
}), 98);
