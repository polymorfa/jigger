__d("WAWebBizAIAbilityStatus.react", [
	"CometRelay",
	"WAWebBizAIAbilityStatusIcon.react",
	"WAWebBizAIAbilityStatusQuery.graphql",
	"WAWebErrorBoundary.react",
	"WAWebNullFunc",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.Suspense, d = e !== void 0 ? e : e = n("WAWebBizAIAbilityStatusQuery.graphql");
	function m(e) {
		var t = e.abilityType;
		return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-ability-status",
			fallback: o("WAWebNullFunc").returnNull,
			children: u.jsx(c, {
				fallback: null,
				children: u.jsx(p, { abilityType: t })
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.abilityType, a = o("CometRelay").useLazyLoadQuery(d, {}, { fetchPolicy: "store-and-network" }), i = (t = a.xfb_meta_ai_biz_agent_wa_ai_home) == null || (t = t.abilities) == null || (t = t.find(function(e) {
			return (e == null ? void 0 : e.type) === n;
		})) == null ? void 0 : t.status;
		return u.jsx(r("WAWebBizAIAbilityStatusIcon.react"), { status: _(i) });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return e === "READY" || e === "PARTIALLY_READY" || e === "NOT_READY" ? e : null;
	}
	l.default = m;
}), 98);
