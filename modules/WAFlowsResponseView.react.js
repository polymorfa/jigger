__d("WAFlowsResponseView.react", [
	"WAFlowsComponentLibrary",
	"WAFlowsCopyIndividualFieldsTooltipNUX.react",
	"WAFlowsDefaultResponseView.react",
	"WAFlowsEnvContext.react",
	"WAFlowsHorizontalDivider.react",
	"WAFlowsStateProvider.react",
	"WDSNativeFocusTrap.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef, d = { root: {
		paddingTop: "x1q57ora",
		paddingBottom: "xsaxbkt",
		$$css: !0
	} }, m = { root: {
		paddingTop: "x12t3zde",
		paddingBottom: "x2yie3v",
		$$css: !0
	} };
	function p(t) {
		var n = t.addDivider, a = n === void 0 ? !1 : n, i = t.componentResponse, l = t.componentType, s = t.isFirstComponent, p = t.onClick, _ = o("WAFlowsStateProvider.react").useWAFlowsMeta(), f = _.getVersion(), g = o("WAFlowsEnvContext.react").useWAFlowsEnv(), h = g.env.platform, y = h === "ios" ? d : m, C = u.createRef(), b = c(null);
		if (f == null) return null;
		var v = o("WAFlowsComponentLibrary").getComponentDefinition(l, f), S = v == null ? void 0 : v.RESPONSE_VIEW, R = S == null ? u.jsx(r("WAFlowsDefaultResponseView.react"), { componentResponse: i }) : u.jsx(S, { componentResponse: i });
		return R == null ? null : u.jsxs("div", {
			"data-root-component-type": "ResponseView",
			children: [
				u.jsx(r("WDSNativeFocusTrap.react"), {
					onFocusOutNext: function() {
						var e;
						(e = b.current) == null || e.focus();
					},
					disableTrap: !0,
					children: u.jsx("div", babelHelpers.extends({ ref: C }, (e || (e = r("stylex"))).props(y.root), p && {
						onClick: p,
						role: "button",
						tabIndex: 0
					}, { children: R }))
				}),
				s && u.jsx(r("WAFlowsCopyIndividualFieldsTooltipNUX.react"), {
					target: C,
					ref: b
				}),
				a && u.jsx(o("WAFlowsHorizontalDivider.react").WAFlowsHorizontalDivider, { isResponseView: !0 })
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.WAFlowsResponseView = p;
}), 98);
