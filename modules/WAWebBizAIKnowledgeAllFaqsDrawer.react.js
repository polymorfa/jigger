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
		var t = o("react-compiler-runtime").c(28), n = e.deletingFaqIds, a = e.faqs, i = e.onAddFaq, l = e.onBack, m = e.onDeleteFaq, p = e.onEditFaq, _ = e.ref, f = n === void 0 ? d : n, g;
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
		t[4] !== i ? (b = u.jsx("span", { children: u.jsx(r("WDSTooltip.react"), {
			label: y,
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				onPress: i,
				variant: "borderless",
				size: "small",
				"aria-label": C,
				testid: "knowledge-all-faqs-header-add-btn"
			})
		}) }), t[4] = i, t[5] = b) : b = t[5];
		var v;
		t[6] !== l || t[7] !== b ? (v = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: h,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: l,
			rightActionElement: b
		}), t[6] = l, t[7] = b, t[8] = v) : v = t[8];
		var S;
		if (t[9] !== f || t[10] !== a || t[11] !== m || t[12] !== p) {
			var R;
			t[14] !== f || t[15] !== m || t[16] !== p ? (R = function(t, n) {
				var e, o = t.itemType === "faq" ? t.id : "text:" + t.knowledgeType;
				return u.jsx(r("WAWebBizAIKnowledgeFaqItem.react"), {
					answer: t.answer,
					deleting: o != null && f.has(o),
					index: n,
					maxLines: t.maxLines,
					onDelete: m != null ? function() {
						return m(t);
					} : r("WAWebNoop"),
					onEdit: function() {
						return p(t);
					},
					question: t.question
				}, (e = t.id) != null ? e : String(n));
			}, t[14] = f, t[15] = m, t[16] = p, t[17] = R) : R = t[17], S = a.map(R), t[9] = f, t[10] = a, t[11] = m, t[12] = p, t[13] = S;
		} else S = t[13];
		var L;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[18] = L) : L = t[18];
		var E;
		t[19] !== i ? (E = u.jsx(r("WAWebBizAILeadGenAddMoreInfoButton.react"), {
			label: L,
			onPress: i,
			testid: "knowledge-all-faqs-add"
		}), t[19] = i, t[20] = E) : E = t[20];
		var k;
		t[21] !== E || t[22] !== S ? (k = u.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: c.body,
			children: [S, E]
		}), t[21] = E, t[22] = S, t[23] = k) : k = t[23];
		var I;
		return t[24] !== _ || t[25] !== k || t[26] !== v ? (I = u.jsxs("div", babelHelpers.extends({
			ref: _,
			"data-testid": "biz-ai-knowledge-all-faqs-drawer"
		}, g, { children: [v, k] })), t[24] = _, t[25] = k, t[26] = v, t[27] = I) : I = t[27], I;
	}
	l.default = m;
}), 226);
