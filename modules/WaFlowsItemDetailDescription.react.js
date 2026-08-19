__d("WaFlowsItemDetailDescription.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WaFlowsItemDetailComplianceInfo.react",
	"react",
	"useClosingState",
	"useTruncateText"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		seeMoreButton: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			fontSize: "xrv4cvt",
			$$css: !0
		},
		displayInline: {
			display: "xt0psk2",
			$$css: !0
		},
		disabled: {
			color: "x18cpw0e",
			$$css: !0
		}
	};
	function c(e) {
		var t, n = e.complianceInfo, a = e.enabled, i = a === void 0 ? !0 : a, l = e.text, c = e.xstyle, d = o("useClosingState").useClosingState(!1), m = d.isOpen, p = d.toggle, _ = (t = o("useTruncateText").useTruncateText(l, o("WAFlowsComponentConstants").ITEM_DETAIL_DESCRIPTION_MAX_LENGTH)) != null ? t : "", f = l.length > 0, g = !!n && Object.keys(n).length > 0, h = g && (m || !f), y = l.length > o("WAFlowsComponentConstants").ITEM_DETAIL_DESCRIPTION_MAX_LENGTH || f && g;
		return s.jsx("section", { children: s.jsxs("bdi", { children: [
			s.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				xstyle: [
					u.displayInline,
					c,
					!i && u.disabled
				],
				text: m ? l.slice(0, o("WAFlowsComponentConstants").ITEM_DETAIL_DESCRIPTION_MAX_LENGTH) : _
			}),
			y && !m && s.jsxs(s.Fragment, { children: [s.jsx("span", { children: "\xA0" }), s.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
				text: o("WAFlowsLocalization").getSeeMoreFbt(),
				inline: !0,
				onClick: p,
				xstyle: [u.seeMoreButton, !i && u.disabled]
			})] }),
			s.jsx("span", babelHelpers.extends({}, {
				0: { className: "xg01cxk x19991ni x1d8287x xz4gly6" },
				1: { className: "x19991ni x1d8287x xz4gly6 x1hc1fzr" }
			}[!!m << 0], { children: m && s.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: l.slice(o("WAFlowsComponentConstants").ITEM_DETAIL_DESCRIPTION_MAX_LENGTH),
				xstyle: [
					u.displayInline,
					c,
					!i && u.disabled
				]
			}) })),
			s.jsx("div", babelHelpers.extends({}, {
				0: { className: "xg01cxk x19991ni x1d8287x xz4gly6" },
				1: { className: "x19991ni x1d8287x xz4gly6 x1hc1fzr" }
			}[!!h << 0], { children: h && s.jsx(r("WaFlowsItemDetailComplianceInfo.react"), { complianceInfo: n }) }))
		] }) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
