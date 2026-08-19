__d("WAWebRelayClient", [
	"WAWebGraphQLServerError",
	"WAWebRelayEnvironment",
	"err",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"accessToken",
		"environmentType",
		"eventLogger",
		"getInlineDataReader"
	], s = [
		"accessToken",
		"environmentType",
		"eventLogger",
		"getInlineDataReader"
	];
	function u(e) {
		throw r("err")("Invariant Violation");
	}
	async function c(t, n, r) {
		var a = r === void 0 ? {} : r, i = a.accessToken, l = a.environmentType, s = a.eventLogger, u = a.getInlineDataReader, c = babelHelpers.objectWithoutPropertiesLoose(a, e), d = await o("WAWebRelayEnvironment").requireRelayRuntime(), p = d.fetchQuery, _ = d.readInlineData, f = m(i), g = f.accessTokenString, h = f.actorID;
		try {
			var y = await o("WAWebRelayEnvironment").getEnvironment({
				environmentType: l,
				accessToken: g,
				actorID: h
			}), C = (await p)(y, t, n, c).toPromise();
			return s == null || s.success(), u == null || u(_), C;
		} catch (e) {
			throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError && (s == null || s.failure(e.source.errors)), e;
		}
	}
	async function d(e, t, n) {
		var r = n === void 0 ? {} : n, a = r.accessToken, i = r.environmentType, l = r.eventLogger, u = r.getInlineDataReader, c = babelHelpers.objectWithoutPropertiesLoose(r, s), d = await o("WAWebRelayEnvironment").requireRelayRuntime(), p = d.commitMutation, _ = d.readInlineData, f = m(a), g = f.accessTokenString, h = f.actorID;
		try {
			var y = await o("WAWebRelayEnvironment").getEnvironment({
				environmentType: i,
				accessToken: g,
				actorID: h
			});
			return new Promise(function(n, r) {
				p(y, babelHelpers.extends({
					mutation: e,
					variables: t
				}, c, {
					onCompleted: function(t) {
						l == null || l.success(), u == null || u(_), n(t);
					},
					onError: function(t) {
						r(t);
					}
				}));
			});
		} catch (e) {
			throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError && (l == null || l.failure(e.source.errors)), e;
		}
	}
	function m(e) {
		return e == null || typeof e == "string" ? {
			accessTokenString: e,
			actorID: null
		} : r("isStringNullOrEmpty")(e.actorID) ? {
			accessTokenString: e.token,
			actorID: e.bp_id
		} : {
			accessTokenString: e.token,
			actorID: e.actorID
		};
	}
	l.graphql = u, l.fetchQuery = c, l.commitMutation = d;
}), 98);
