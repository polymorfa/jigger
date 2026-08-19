__d("WAWebHatchApprovalTitle.react", [
	"fbt",
	"WAWebHatchApprovalArtifact",
	"WAWebHatchBotName.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "connector";
	function d(e) {
		var t = e.approval, n = e.compact, r = n === void 0 ? !1 : n;
		if (t.spaceReaderGrantEligible === !0) return r ? _(t) : m(t);
		var o = r ? f(t) : p(t);
		if (o != null) return o;
		var a = y(t.reason);
		return a != null ? a : s._(
			/*BTDS*/
			""
		);
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = u.jsx(r("WAWebHatchBotName.react"), {}), n = r("WAWebHatchApprovalArtifact")(e);
		if (n == null) return s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		);
		var o = h(n);
		return s._(
			/*BTDS*/
			"",
			[s._param("name", t), s._param("artifact", o)]
		);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.actionLabel, n = e.displayName, o = e.host, a = e.scheme, i = u.jsx(r("WAWebHatchBotName.react"), {});
		if (a === c) {
			var l = y(n), d = y(t);
			if (l == null || d == null) return null;
			var m = h(d.toLocaleLowerCase());
			return s._(
				/*BTDS*/
				"",
				[
					s._param("name", i),
					s._param("action", m),
					s._param("service", l)
				]
			);
		}
		var p = y(o);
		if (p == null) return null;
		var _ = h(p);
		return s._(
			/*BTDS*/
			"",
			[s._param("name", i), s._param("target", _)]
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = r("WAWebHatchApprovalArtifact")(e);
		if (t == null) return s._(
			/*BTDS*/
			""
		);
		var n = h(t);
		return s._(
			/*BTDS*/
			"",
			[s._param("artifact", n)]
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.actionLabel, n = e.displayName, r = e.host, o = e.scheme;
		if (o === c) {
			var a = y(n), i = y(t);
			if (a == null || i == null) return null;
			var l = h(g(i.toLocaleLowerCase()));
			return s._(
				/*BTDS*/
				"",
				[s._param("action", l), s._param("service", a)]
			);
		}
		var u = y(r);
		if (u == null) return null;
		var d = h(u);
		return s._(
			/*BTDS*/
			"",
			[s._param("target", d)]
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = Array.from(e), n = t[0], r = babelHelpers.arrayLikeToArray(t).slice(1);
		return n == null ? e : n.toLocaleUpperCase() + r.join("");
	}
	function h(e) {
		return u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: e
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		if (e == null) return null;
		var t = e.trim();
		return t === "" ? null : t;
	}
	l.default = d;
}), 226);
