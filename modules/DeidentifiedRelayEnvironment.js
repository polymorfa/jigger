__d("DeidentifiedRelayEnvironment", [
	"DeidentifiedGraphQLFetch",
	"OhaiWebClientSingleton",
	"RelayHooks",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"relay-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e) {
		return o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(e);
	}
	function c(e, t) {
		var r;
		return new (r = (o("relay-runtime"))).Environment({
			configName: e.configName,
			network: r.Network.create(o("DeidentifiedGraphQLFetch").createDeidentifiedOhaiFetch(babelHelpers.extends({}, e, {
				fbApiCallerClass: "DeidentifiedRelayEnvironment",
				getPublicKeyConfig: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						var e = yield o("OhaiWebClientSingleton").initOhaiWebClient(t);
						return e.getConfig();
					});
					function r() {
						return e.apply(this, arguments);
					}
					return r;
				})()
			}))),
			options: { actorID: "0" },
			store: new r.Store(new r.RecordSource())
		});
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.acsProjectName, r = e.configName, a = e.fbLoggerProject, i = e.graphQlFriendlyName, l = o("RelayHooks").useRelayEnvironment(), s;
		return t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l ? (s = c({
			acsProjectName: n,
			configName: r,
			fbLoggerProject: a,
			graphQlFriendlyName: i
		}, l), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l, t[5] = s) : s = t[5], s;
	}
	l.prewarmDeidentifiedTokenCache = u, l.createDeidentifiedRelayEnvironment = c, l.useDeidentifiedRelayEnvironment = d;
}), 98);
