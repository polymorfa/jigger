__d("WAFlowsListSelectionComponentResponseView.react", [
	"WAFlowsDefaultResponseView.react",
	"WAFlowsLabel.react",
	"WAFlowsResponseViewUtils.react",
	"WAFlowsText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { supportingInfo: {
		color: "x1itf3cd",
		$$css: !0
	} };
	function c(e) {
		var t = e.componentResponse, n = e.isMultiSelectList, a = n === void 0 ? !1 : n;
		if (t.componentData == null || t.sensitive === !0 || t.componentData.componentMeta == null) return s.jsx(r("WAFlowsDefaultResponseView.react"), { componentResponse: t });
		var i = a ? o("WAFlowsResponseViewUtils.react").getMultiSelectComponentValues(t.componentData.componentMeta, t.componentData.componentValue) : o("WAFlowsResponseViewUtils.react").getSingleSelectComponentValues(t.componentData.componentMeta, t.componentData.componentValue);
		if (i == null) return s.jsx(r("WAFlowsDefaultResponseView.react"), { componentResponse: t });
		var l = function(t) {
			return Array.isArray(t) ? s.jsx("div", {
				className: "x5qd032 x78zum5 xdt5ytf",
				children: t.map(function(e) {
					return s.jsx(d, { componentValue: e }, e.id);
				})
			}) : s.jsx(d, { componentValue: t }, t.id);
		};
		return s.jsxs("div", {
			className: "x5qd032 x78zum5 xdt5ytf",
			children: [s.jsx(o("WAFlowsText.react").WAFlowsTextCaption, { text: String(t.label) }), l(i)]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.componentValue;
		return s.jsxs("div", {
			className: "x1iul6r4 xyri2b xes99ow x1c1uobl",
			children: [
				s.jsx(o("WAFlowsLabel.react").WAFlowsLabel, { text: t.title }),
				t.description != null && s.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: t.description,
					xstyle: u.supportingInfo
				}),
				t.metadata != null && s.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: t.metadata,
					xstyle: u.supportingInfo
				})
			]
		}, t.id);
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
