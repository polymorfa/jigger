__d("WAWebBizAIKnowledgeAllProductsDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeProductItem.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { body: {
		paddingInlineStart: "x1g0dm76",
		paddingInlineEnd: "xpdmqnj",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, d = new Set();
	function m(e) {
		var t = e.deletingProductIds, n = t === void 0 ? d : t, a = e.onAdd, i = e.onBack, l = e.onDelete, m = e.onEdit, p = e.products, _ = e.ref;
		return u.jsxs("div", {
			ref: _,
			"data-testid": "biz-ai-knowledge-all-products-drawer",
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: i,
				rightActionElement: u.jsx("span", { children: u.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcAdd.react"),
						onPress: a,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "knowledge-all-products-add-btn"
					})
				}) })
			}), u.jsx(r("WAWebDrawerBody.react"), {
				xstyle: c.body,
				children: p.map(function(e, t) {
					return u.jsx(r("WAWebBizAIKnowledgeProductItem.react"), {
						deleting: e.product_id != null && n.has(e.product_id),
						index: t,
						product: e,
						onEdit: function() {
							return m(e);
						},
						onDelete: function() {
							return l(e);
						}
					}, e.product_id);
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
