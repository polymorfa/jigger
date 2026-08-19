__d("WASortedLists", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e() {
		return [];
	}
	function l(e, t) {
		return e.filter(t);
	}
	function s(e, t) {
		return m(e.map(t));
	}
	function u(e, t) {
		for (var n = e.length === t.length, r = 0; n && r < e.length; r++) e[r] !== t[r] && (n = !1);
		return n;
	}
	function c(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n] === t) return e;
		return e.concat([t]).sort();
	}
	function d(e, t) {
		if (e.length < t.length) return !1;
		for (var n = !0, r = 0, o = 0; n && o < t.length; o++) do
			n = e[r] === t[o];
		while (!n && ++r < e.length);
		return n;
	}
	function m(e) {
		return p(e.slice().sort());
	}
	function p(e) {
		for (var t = !1, n = 0; n < e.length - 1; n++) e[n] === e[n + 1] && (t = !0);
		if (!t) return e;
		for (var r = [], o = 0; o < e.length - 1; o++) e[o] !== e[o + 1] && r.push(e[o]);
		return r.push(e[e.length - 1]), r;
	}
	function _(e) {
		return Array.from(e).sort();
	}
	function f(e) {
		return e.slice().sort();
	}
	function g(e, t, n) {
		for (var r = null, o = 0; !r && o < e.length; o++) e[o] === t && (r = e.slice(), r[o] = n, r = p(r.sort()));
		return r || e;
	}
	function h(e) {
		return [e];
	}
	i.emptySet = e, i.filter = l, i.map = s, i.areEqual = u, i.addToSet = c, i.contains = d, i.sortAndDedupe = m, i.asSortedSet = _, i.sort = f, i.swapIn = g, i.singleElement = h;
}), 66);
