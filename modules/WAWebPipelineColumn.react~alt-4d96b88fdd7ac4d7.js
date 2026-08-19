__d("WAWebPipelineColumn.react", [
	"fbt",
	"WAWebLeadStageNames",
	"WAWebPipelineColumnHeader.react",
	"WAWebPipelineCustomerCard.react",
	"WAWebPipelineDragAndDrop.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { cardList: {
		flex: "x98rzlu",
		overflowY: "x1odjw0f",
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		$$css: !0
	} };
	function d(e) {
		var t = e.customers, n = e.onCardDrop, a = e.onCustomerClick, i = e.stage, l = o("WAWebLeadStageNames").getLeadStageName(i);
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf x1dz1jew x1okw0bk x5yr21d x1280gxy xyi3aci xwf5gio x1p453bz x1suzm8a",
			role: "group",
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("lead stage name", l)]
			),
			"data-testid": "pipeline-column-" + String(i),
			children: [u.jsx(r("WAWebPipelineColumnHeader.react"), {
				count: t.length,
				stage: i
			}), u.jsx(o("WAWebPipelineDragAndDrop.react").PipelineDroppableColumn, {
				stage: i,
				onCardDrop: n,
				xstyle: c.cardList,
				children: t.map(function(e) {
					return u.jsx(r("WAWebPipelineCustomerCard.react"), {
						customer: e,
						onClick: a,
						stage: i
					}, String(e.id));
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
