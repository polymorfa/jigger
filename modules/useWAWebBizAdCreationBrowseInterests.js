__d("useWAWebBizAdCreationBrowseInterests", [
	"CometRelay",
	"WAWebBizAdCreationInterestTreeBuilder",
	"asyncToGeneratorRuntime",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebBizAdCreationBrowseInterestsQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = ["Interests"];
	function u(t, a, i, l) {
		var u = o("react-compiler-runtime").c(8), c = i === void 0 ? s : i, d = l === void 0 ? !0 : l, m, p;
		u[0] !== t || u[1] !== c || u[2] !== a ? (m = (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var r, i = yield o("CometRelay").fetchQuery(a, e !== void 0 ? e : e = n("useWAWebBizAdCreationBrowseInterestsQuery.graphql"), {
					adAccountID: t,
					audiencePath: c
				}).toPromise();
				return o("WAWebBizAdCreationInterestTreeBuilder").buildInterestTree((r = i == null ? void 0 : i.detailed_targeting_browse) != null ? r : []);
			});
			return function() {
				return r.apply(this, arguments);
			};
		})(), p = [
			a,
			t,
			c
		], u[0] = t, u[1] = c, u[2] = a, u[3] = m, u[4] = p) : (m = u[3], p = u[4]);
		var _ = r("useWAWebAsync")(m, p, d), f = _.loading, g = _.value, h = d && f, y;
		return u[5] !== h || u[6] !== g ? (y = {
			interestTree: g,
			isLoading: h
		}, u[5] = h, u[6] = g, u[7] = y) : y = u[7], y;
	}
	l.default = u;
}), 98);
