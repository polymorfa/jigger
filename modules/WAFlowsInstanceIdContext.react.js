__d("WAFlowsInstanceIdContext.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = u.useMemo, p = c(null);
	function _(e) {
		var t = e.children, n = e.uuid, r = m(function() {
			return { flowInstanceId: function(t) {
				return t != null ? "" + t + (n != null && n.length > 0 ? "-" + n : "") : "";
			} };
		}, [n]);
		return s.jsx(p.Provider, {
			value: r,
			children: t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = d(p), t = m(function() {
			return { flowInstanceId: function(t) {
				return t != null ? t : "";
			} };
		}, []);
		return e == null ? t : e;
	}
	l.InstanceContext = p, l.WAFlowsInstanceContextProvider = _, l.useWAFlowsInstance = f;
}), 98);
