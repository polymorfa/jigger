__d("WAWebBizAIAbilityStatusIcon.react", ["WDSIconIcCheckCircleFilled.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		partiallyReady: {
			color: "xhslqc4",
			$$css: !0
		},
		ready: {
			color: "x1r8hjv8",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.status;
		return t === "READY" ? s.jsx(r("WDSIconIcCheckCircleFilled.react"), { iconXstyle: u.ready }) : t === "PARTIALLY_READY" ? s.jsx(r("WDSIconIcCheckCircleFilled.react"), { iconXstyle: u.partiallyReady }) : null;
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
