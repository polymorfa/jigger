__d("useWAWebBizAdCreationSuggestedInterests", [
	"CometRelay",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationSuggestedInterestsQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(t, a, i) {
		var l = o("react-compiler-runtime").c(11), s;
		l[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [], l[0] = s) : s = l[0];
		var u = p(s), c = u[0], _ = u[1], y = p(!1), C = y[0], b = y[1], v = m(null), S;
		l[1] !== t || l[2] !== a || l[3] !== i ? (S = function() {
			if (i.length === 0) {
				_([]), b(!1);
				return;
			}
			var l = i.map(h).filter(Boolean);
			if (l.length === 0) {
				_([]), b(!1);
				return;
			}
			b(!0), v.current != null && v.current.unsubscribe();
			var s = i.map(g).filter(Boolean);
			v.current = o("CometRelay").fetchQuery(a, e !== void 0 ? e : e = n("useWAWebBizAdCreationSuggestedInterestsQuery.graphql"), {
				adAccountID: t,
				count: 10,
				detailedTargetingItems: s
			}).subscribe({
				error: function(t) {
					_([]), b(!1);
				},
				next: function(t) {
					var e, n = t == null || (e = t.ad_account) == null || (e = e.detailed_targeting_suggestions) == null ? void 0 : e.nodes;
					if (n == null) {
						_([]), b(!1);
						return;
					}
					var o = new Set(l), a = n.filter(function(e) {
						return e != null && !r("isStringNullOrEmpty")(e.id) && !o.has(e.id);
					}).map(f);
					_(a), b(!1);
				}
			});
		}, l[1] = t, l[2] = a, l[3] = i, l[4] = S) : S = l[4];
		var R = S, L, E;
		l[5] !== R ? (L = function() {
			return R(), (function() {
				v.current != null && v.current.unsubscribe();
			});
		}, E = [R], l[5] = R, l[6] = L, l[7] = E) : (L = l[6], E = l[7]), d(L, E);
		var k;
		return l[8] !== C || l[9] !== c ? (k = {
			isLoadingSuggestions: C,
			suggestedInterests: c
		}, l[8] = C, l[9] = c, l[10] = k) : k = l[10], k;
	}
	function f(e) {
		return {
			children: [],
			node: {
				id: e.id,
				name: e.name,
				path: e.path,
				raw_name: e.name,
				target_type: e.target_type
			},
			pathName: null
		};
	}
	function g(e) {
		var t, n, o, a = (t = e.node) == null ? void 0 : t.id;
		return r("isStringNullOrEmpty")(a) ? null : {
			id: a,
			name: null,
			type: (n = (o = e.node) == null ? void 0 : o.target_type) != null ? n : "interests"
		};
	}
	function h(e) {
		var t;
		return (t = e.node) == null ? void 0 : t.id;
	}
	l.default = _;
}), 98);
