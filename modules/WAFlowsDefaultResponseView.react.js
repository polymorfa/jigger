__d("WAFlowsDefaultResponseView.react", ["WAFlowsText.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, r = e.componentResponse, a = (t = (n = r.value) == null ? void 0 : n.toString()) != null ? t : "";
		return s.jsxs("div", { children: [s.jsx(o("WAFlowsText.react").WAFlowsTextCaption, { text: String(r.label) }), s.jsx(o("WAFlowsText.react").WAFlowsTextBody, { text: a })] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
