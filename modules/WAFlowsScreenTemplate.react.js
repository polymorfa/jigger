__d("WAFlowsScreenTemplate.react", [
	"WAFlowsInstanceIdContext.react",
	"WAFlowsScreenError.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = e.id, a = e.isOverlayVisible, i = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), l = i.flowInstanceId;
		return n == null ? s.jsx(r("WAFlowsScreenError.react"), { message: "Screen should have an id" }) : s.jsx("div", babelHelpers.extends({ id: l("wa_flows_screen_" + n) }, {
			0: { className: "x5yr21d" },
			1: { className: "x5yr21d xni5xb" }
		}[!!a << 0], { children: t }));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
