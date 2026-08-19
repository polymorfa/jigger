__d("WAWebBizAIAbilityStatus.react", [
	"CometRelay",
	"WAWebBizAIAbilityStatusIcon.react",
	"WAWebBizAIAbilityStatusQuery.graphql",
	"WAWebErrorBoundary.react",
	"WAWebNullFunc",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.Suspense, d = e !== void 0 ? e : e = n("WAWebBizAIAbilityStatusQuery.graphql");
	function m(e) {
		var t = o("react-compiler-runtime").c(2), n = e.abilityType, r;
		return t[0] !== n ? (r = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-ability-status",
			fallback: o("WAWebNullFunc").returnNull,
			children: u.jsx(c, {
				fallback: null,
				children: u.jsx(p, { abilityType: n })
			})
		}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function p(e) {
		var t, n = o("react-compiler-runtime").c(7), a = e.abilityType, i = o("CometRelay").useLazyLoadQuery(d, {}, { fetchPolicy: "store-and-network" }), l;
		if (n[0] !== a || n[1] !== ((t = i.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : t.abilities)) {
			var s, c;
			l = (s = i.xfb_meta_ai_biz_agent_wa_ai_home) == null || (s = s.abilities) == null || (s = s.find(function(e) {
				return (e == null ? void 0 : e.type) === a;
			})) == null ? void 0 : s.status, n[0] = a, n[1] = (c = i.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : c.abilities, n[2] = l;
		} else l = n[2];
		var m = l, p;
		n[3] !== m ? (p = _(m), n[3] = m, n[4] = p) : p = n[4];
		var f;
		return n[5] !== p ? (f = u.jsx(r("WAWebBizAIAbilityStatusIcon.react"), { status: p }), n[5] = p, n[6] = f) : f = n[6], f;
	}
	function _(e) {
		return e === "READY" || e === "PARTIALLY_READY" || e === "NOT_READY" ? e : null;
	}
	l.default = m;
}), 98);
