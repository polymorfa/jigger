__d("WAWebChatInternalStatusHook", [
	"WAAbortError",
	"WAPromiseRaceAbort",
	"WAWebNoop",
	"WAWebTextStatusCollection",
	"err",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef, d = s.useState, m = {
		brb: "BRB",
		pto: "PTO",
		sick: "SICK"
	}, p = ["status"].concat(Object.keys(m)), _ = "change:status", f = /\{([^}]*)\}/g;
	function g(e) {
		var t = e, n = [], r = e.matchAll(f);
		for (var o of r) {
			var a, i = o == null ? void 0 : o[1], l = (a = i == null ? void 0 : i.split(":")) != null ? a : [], s = l[0], u = l[1];
			switch (s.toLowerCase()) {
				case "tz":
					n.push({
						name: "tz",
						params: [u]
					}), t = t.replace((o == null ? void 0 : o[0]) || "", "");
					break;
				default: break;
			}
		}
		return {
			status: t.trim(),
			addons: n
		};
	}
	function h(e) {
		try {
			var t = e.split("/"), n = new Date(), o = n.getFullYear();
			t.length === 2 && t.push(o.toString());
			var a = new Date(t[0] + "/" + t[1] + "/" + t[2]);
			return a;
		} catch (e) {
			throw r("err")("Invalid date format");
		}
	}
	function y(e) {
		try {
			var t = e == null ? void 0 : e.match(/@(\w+)\s*\{([^}]*)\}/), n = t == null ? void 0 : t[2];
			if (n == null) return !0;
			var r = n.split("-"), o = r[0], a = r[1], i = h(o), l = a === "" ? i : h(a), s = new Date();
			return i <= s && s <= l;
		} catch (e) {
			return !0;
		}
	}
	function C(e) {
		var t = d(""), n = t[0], a = t[1], i = d([]), l = i[0], s = i[1], f = c(), h = r("useWAWebUnmountSignal")();
		u(function() {
			if (a(""), !!e.isRegularUser()) return r("WAPromiseRaceAbort")(o("WAWebTextStatusCollection").TextStatusCollection.find(e), h).then(function(e) {
				if (h.aborted) throw new (o("WAAbortError")).AbortError();
				var t = function() {
					if (!h.aborted) {
						var t = g(e.status), n = t.addons, r = t.status;
						a(r), s(n);
					}
				};
				t(), e.on(_, t), f.current = function() {
					return e.off(_, t);
				};
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))), function() {
				f.current == null || f.current();
			};
		}, [e, h]);
		var C = n == null ? void 0 : n.match(/@(\w*)\b/), b = C == null ? void 0 : C[1].toLowerCase(), v = b != null && p.includes(b), S = v ? y(n) : !1, R = b != null && S ? m[b] : null, L = !!R;
		return {
			status: n,
			hasStatus: v,
			hasActiveStatus: S,
			overlay: R,
			hasOverlay: L,
			addons: l
		};
	}
	l.default = C;
}), 98);
