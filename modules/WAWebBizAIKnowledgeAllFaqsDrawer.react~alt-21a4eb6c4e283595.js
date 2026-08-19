__d("WAWebBizAIKnowledgeAllFaqsDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeFaqItem.react",
	"WAWebBizAILeadGenAddMoreInfoButton.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebNoop",
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
		var t = e.deletingFaqIds, n = t === void 0 ? d : t, a = e.faqs, i = e.onAddFaq, l = e.onBack, m = e.onDeleteFaq, p = e.onEditFaq, _ = e.ref;
		return u.jsxs("div", {
			ref: _,
			"data-testid": "biz-ai-knowledge-all-faqs-drawer",
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l,
				rightActionElement: u.jsx("span", { children: u.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcAdd.react"),
						onPress: i,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "knowledge-all-faqs-header-add-btn"
					})
				}) })
			}), u.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: c.body,
				children: [a.map(function(e, t) {
					var o, a = e.itemType === "faq" ? e.id : "text:" + e.knowledgeType;
					return u.jsx(r("WAWebBizAIKnowledgeFaqItem.react"), {
						answer: e.answer,
						deleting: a != null && n.has(a),
						index: t,
						maxLines: e.maxLines,
						onDelete: m != null ? function() {
							return m(e);
						} : r("WAWebNoop"),
						onEdit: function() {
							return p(e);
						},
						question: e.question
					}, (o = e.id) != null ? o : String(t));
				}), u.jsx(r("WAWebBizAILeadGenAddMoreInfoButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: i,
					testid: "knowledge-all-faqs-add"
				})]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
