__d("WAWebInitBotGatingHelpers", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebBackendEventBus",
	"WAWebBotBaseGating",
	"WAWebCanonicalHatchLinkedStatusGetQuery",
	"WAWebHatchLinkedStatusManager",
	"WAWebInitializeBots",
	"WAWebPrefetchHatchLinkedStatusOnLogin"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = !1;
	async function c() {
		r("WAWebHatchLinkedStatusManager").registerFetcher(o("WAWebCanonicalHatchLinkedStatusGetQuery").fetchHatchLinkedStatus), u || (u = !0, o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(function() {
			o("WAWebInitializeBots").initializeBots(), o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
		}), o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(function() {
			o("WAWebInitializeBots").initializeBots(), o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
		}), o("WAWebBackendEventBus").BackendEventBus.onPrimaryFeaturesSynced(function(e) {
			e.has("ai_bot_integration_enabled") && o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
		})), o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
		try {
			var t = await o("WAWebBackendApi").frontendSendAndReceive("getLanguage", void 0);
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[bot] initialized bot gating language cache with: ", ""])), t), o("WAWebBotBaseGating").setBonsaiUserLanguage(t);
		} catch (e) {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[bot] lang cache init failed, features may not work"])));
		}
	}
	l.initBotGatingHelpers = c;
}), 98);
