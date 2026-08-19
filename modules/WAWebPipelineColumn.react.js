__d("WAWebPipelineColumn.react", [
	"fbt",
	"WAWebLeadStageNames",
	"WAWebPipelineColumnHeader.react",
	"WAWebPipelineCustomerCard.react",
	"WAWebPipelineDragAndDrop.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { cardList: {
		flex: "x98rzlu",
		overflowY: "x1odjw0f",
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(26), n = e.customers, a = e.onCardDrop, i = e.onCustomerClick, l = e.stage, d, m, p;
		if (t[0] !== l) {
			var _ = o("WAWebLeadStageNames").getLeadStageName(l);
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x78zum5 xdt5ytf x1dz1jew x1okw0bk x5yr21d x1280gxy xyi3aci xwf5gio x1p453bz x1suzm8a" }, t[4] = d) : d = t[4], m = "group", p = s._(
				/*BTDS*/
				"",
				[s._param("lead stage name", _)]
			), t[0] = l, t[1] = d, t[2] = m, t[3] = p;
		} else d = t[1], m = t[2], p = t[3];
		var f = "pipeline-column-" + String(l), g;
		t[5] !== n.length || t[6] !== l ? (g = u.jsx(r("WAWebPipelineColumnHeader.react"), {
			count: n.length,
			stage: l
		}), t[5] = n.length, t[6] = l, t[7] = g) : g = t[7];
		var h;
		if (t[8] !== n || t[9] !== i || t[10] !== l) {
			var y;
			t[12] !== i || t[13] !== l ? (y = function(t) {
				return u.jsx(r("WAWebPipelineCustomerCard.react"), {
					customer: t,
					onClick: i,
					stage: l
				}, String(t.id));
			}, t[12] = i, t[13] = l, t[14] = y) : y = t[14], h = n.map(y), t[8] = n, t[9] = i, t[10] = l, t[11] = h;
		} else h = t[11];
		var C;
		t[15] !== a || t[16] !== l || t[17] !== h ? (C = u.jsx(o("WAWebPipelineDragAndDrop.react").PipelineDroppableColumn, {
			stage: l,
			onCardDrop: a,
			xstyle: c.cardList,
			children: h
		}), t[15] = a, t[16] = l, t[17] = h, t[18] = C) : C = t[18];
		var b;
		return t[19] !== d || t[20] !== m || t[21] !== p || t[22] !== f || t[23] !== g || t[24] !== C ? (b = u.jsxs("div", babelHelpers.extends({}, d, {
			role: m,
			"aria-label": p,
			"data-testid": f,
			children: [g, C]
		})), t[19] = d, t[20] = m, t[21] = p, t[22] = f, t[23] = g, t[24] = C, t[25] = b) : b = t[25], b;
	}
	l.default = d;
}), 226);
