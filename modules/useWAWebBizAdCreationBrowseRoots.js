__d("useWAWebBizAdCreationBrowseRoots", [
	"CometRelay",
	"WAWebBizAdCreationDetailedTargetingTabConfig",
	"asyncToGeneratorRuntime",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebBizAdCreationBrowseRootsQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a, i) {
		var l = o("react-compiler-runtime").c(9), s, u;
		l[0] !== t || l[1] !== a ? (s = (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var r, i = yield o("CometRelay").fetchQuery(a, e !== void 0 ? e : e = n("useWAWebBizAdCreationBrowseRootsQuery.graphql"), { adAccountID: t }).toPromise(), l = (r = i == null ? void 0 : i.detailed_targeting_browse) != null ? r : [];
				return o("WAWebBizAdCreationDetailedTargetingTabConfig").DETAILED_TARGETING_ROOT_RAW_NAMES.map(function(e) {
					var t = l.find(function(t) {
						return (t == null ? void 0 : t.raw_name) === e;
					}), n = t == null ? void 0 : t.name;
					return n == null || n === "" ? null : {
						children: [],
						node: {
							id: "",
							name: n,
							path: [],
							raw_name: e,
							target_type: ""
						},
						pathName: n
					};
				}).filter(Boolean);
			});
			return function() {
				return r.apply(this, arguments);
			};
		})(), u = [a, t], l[0] = t, l[1] = a, l[2] = s, l[3] = u) : (s = l[2], u = l[3]);
		var c = r("useWAWebAsync")(s, u, i), d = c.loading, m = c.value, p = i && d, _;
		l[4] !== m ? (_ = m != null ? m : [], l[4] = m, l[5] = _) : _ = l[5];
		var f;
		return l[6] !== p || l[7] !== _ ? (f = {
			isLoading: p,
			rootRows: _
		}, l[6] = p, l[7] = _, l[8] = f) : f = l[8], f;
	}
	l.default = s;
}), 98);
