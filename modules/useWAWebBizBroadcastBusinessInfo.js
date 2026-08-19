__d("useWAWebBizBroadcastBusinessInfo", [
	"Promise",
	"WALogger",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFetchWithAdAccountToken",
	"WAWebGraphQLServerError",
	"WAWebRelayEnvironment",
	"asyncToGeneratorRuntime",
	"err",
	"react-query",
	"react-relay",
	"useWAWebBizBroadcastBusinessInfoMutation.graphql"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g = e !== void 0 ? e : e = n("useWAWebBizBroadcastBusinessInfoMutation.graphql");
	function h() {
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBusinessInfo] Initializing business info query"])));
		var e = o("react-query").useQuery(["WAWebBizBroadcastBusinessInfoMutation"], n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBusinessInfo] Fetching access token"])));
			try {
				var e = yield o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBusinessInfo] Access token fetched successfully, creating Facebook environment"])));
						var t = yield o("WAWebRelayEnvironment").getEnvironment({
							accessToken: e.token,
							actorID: e.bp_id,
							environmentType: "facebook"
						});
						o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBusinessInfo] Facebook environment created, fetching business info from GraphQL"])));
						var r = yield new (f || (f = (n("Promise"))))(function(e, n) {
							o("react-relay").commitMutation(t, {
								mutation: g,
								onCompleted: function(r, a) {
									a ? n(a) : (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBusinessInfo] Business info query completed successfully"]))), e(r));
								},
								onError: function(t) {
									n(t);
								},
								variables: { input: { should_return_ad_account: !0 } }
							});
						});
						return r == null ? void 0 : r.xwa_smb_mm_business_info;
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})());
				return o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBusinessInfo] Business info fetched successfully: ", ""])), JSON.stringify(e)), e;
			} catch (e) {
				if (e instanceof o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError) o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.businessInfoFetchFailed("token_fetch_failed");
				else if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.businessInfoFetchFailed(o("WAWebGraphQLServerError").formatGraphQLServerError(e));
				else {
					var t = e instanceof Error ? e : r("err")(String(e));
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.businessInfoFetchFailed(String(t));
				}
				throw e;
			}
		})), t = e.data, a = e.error, i = e.isLoading, l = e.refetch, h = t != null ? t : null;
		return o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
			"[useWAWebBizBroadcastBusinessInfo] Returning business info with loading=",
			", hasError=",
			""
		])), i, a != null), {
			businessInfo: h,
			error: a instanceof Error ? a : null,
			isLoading: i,
			refetch: l
		};
	}
	l.useWAWebBizBroadcastBusinessInfo = h;
}), 98);
