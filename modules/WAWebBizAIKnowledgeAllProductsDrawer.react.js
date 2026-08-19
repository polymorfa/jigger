__d("WAWebBizAIKnowledgeAllProductsDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeProductItem.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { body: {
		paddingInlineStart: "x1g0dm76",
		paddingInlineEnd: "xpdmqnj",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, d = new Set();
	function m(e) {
		var t = o("react-compiler-runtime").c(24), n = e.deletingProductIds, a = e.onAdd, i = e.onBack, l = e.onDelete, m = e.onEdit, p = e.products, _ = e.ref, f = n === void 0 ? d : n, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62" }, t[0] = g) : g = t[0];
		var h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[1] = h) : h = t[1];
		var y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[2] = y) : y = t[2];
		var C;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		).toString(), t[3] = C) : C = t[3];
		var b;
		t[4] !== a ? (b = u.jsx("span", { children: u.jsx(r("WDSTooltip.react"), {
			label: y,
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				onPress: a,
				variant: "borderless",
				size: "small",
				"aria-label": C,
				testid: "knowledge-all-products-add-btn"
			})
		}) }), t[4] = a, t[5] = b) : b = t[5];
		var v;
		t[6] !== i || t[7] !== b ? (v = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: h,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: i,
			rightActionElement: b
		}), t[6] = i, t[7] = b, t[8] = v) : v = t[8];
		var S;
		if (t[9] !== f || t[10] !== l || t[11] !== m || t[12] !== p) {
			var R;
			t[14] !== f || t[15] !== l || t[16] !== m ? (R = function(t, n) {
				return u.jsx(r("WAWebBizAIKnowledgeProductItem.react"), {
					deleting: t.product_id != null && f.has(t.product_id),
					index: n,
					product: t,
					onEdit: function() {
						return m(t);
					},
					onDelete: function() {
						return l(t);
					}
				}, t.product_id);
			}, t[14] = f, t[15] = l, t[16] = m, t[17] = R) : R = t[17], S = p.map(R), t[9] = f, t[10] = l, t[11] = m, t[12] = p, t[13] = S;
		} else S = t[13];
		var L;
		t[18] !== S ? (L = u.jsx(r("WAWebDrawerBody.react"), {
			xstyle: c.body,
			children: S
		}), t[18] = S, t[19] = L) : L = t[19];
		var E;
		return t[20] !== _ || t[21] !== v || t[22] !== L ? (E = u.jsxs("div", babelHelpers.extends({
			ref: _,
			"data-testid": "biz-ai-knowledge-all-products-drawer"
		}, g, { children: [v, L] })), t[20] = _, t[21] = v, t[22] = L, t[23] = E) : E = t[23], E;
	}
	l.default = m;
}), 226);
