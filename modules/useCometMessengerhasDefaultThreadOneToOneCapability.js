__d("useCometMessengerhasDefaultThreadOneToOneCapability", [
	"FBLogger",
	"hasDefaultThreadOneToOneCapabilityDeferred",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e, t) {
		var n = o("react-compiler-runtime").c(7), a = c(!1), i = a[0], l = a[1], s;
		n[0] !== e || n[1] !== t ? (s = function() {
			r("hasDefaultThreadOneToOneCapabilityDeferred").load().then(function(n) {
				t == null ? l(!1) : n(t, e).then(function(e) {
					l(e);
				}).catch(p);
			}).catch(m);
		}, n[0] = e, n[1] = t, n[2] = s) : s = n[2];
		var d;
		return n[3] !== e || n[4] !== i || n[5] !== t ? (d = [
			e,
			i,
			t
		], n[3] = e, n[4] = i, n[5] = t, n[6] = d) : d = n[6], u(s, d), i;
	}
	function m(e) {
		r("FBLogger")("messenger_web").warn("Error loading hasDefaultThreadOneToOneCapability. %s", e);
	}
	function p() {}
	l.default = d;
}), 98);
