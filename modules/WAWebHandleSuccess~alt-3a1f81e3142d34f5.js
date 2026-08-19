__d("WAWebHandleSuccess", [
	"WABase64",
	"WACustomError",
	"WADeprecatedWapParser",
	"WALogger",
	"WAPromiseTimeout",
	"WAWebABPropsLocalStorage",
	"WAWebAbPropsSyncJob",
	"WAWebBackendEventBus",
	"WAWebCollectionHandlerActions",
	"WAWebCryptoEncKeyHelper",
	"WAWebDbEncryptionKey",
	"WAWebEnvironment",
	"WAWebMediaHosts",
	"WAWebPageLoadLogging",
	"WAWebPassiveModeManager",
	"WAWebQplFlowWrapper",
	"WAWebSyncdGetActionHandler",
	"WAWebUpdateClockSkewUtils",
	"WAWebUpdateMeLidUtils",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"cr:17219",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = r("qpl")._(891431279, "3267"), m = n("cr:17219") == null ? void 0 : n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebHandleSuccess), p = new (r("WADeprecatedWapParser"))("successParser", function(e) {
		return e.assertTag("success"), {
			ts: e.attrTime("t"),
			companionEncStatic: e.maybeAttrString("companion_enc_static") || "NULL",
			lid: e.maybeAttrString("lid"),
			displayName: e.maybeAttrString("display_name"),
			abpropsRefreshId: e.maybeAttrInt("abprops"),
			groupAbpropsRefreshId: e.maybeAttrInt("group_abprops")
		};
	});
	async function _(t) {
		var n, a, i;
		o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received"), o("WAWebQplFlowWrapper").QPL.markerPoint(d, "SuccessReceived");
		var l = p.parse(t);
		if (l.error) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSuccess: failed to parse ", ""])), l.error), Promise.reject(l.error);
		var s = l.success;
		o("WAWebUpdateClockSkewUtils").updateClockSkew(s.ts), o("WAWebUpdateMeLidUtils").updateMeLid(s.lid != null ? o("WAWebWidFactory").createWid(s.lid) : null), s.displayName != null && o("WAWebUserPrefsMeUser").setMeDisplayName(s.displayName), o("WAWebSyncdGetActionHandler").setActionHandlers(o("WAWebCollectionHandlerActions").ActionHandlers), o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({ banned: !1 }), o("WAWebPassiveModeManager").PassiveTaskManager.executePassiveTasks(), o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1);
		var u = s.companionEncStatic;
		o("WAWebDbEncryptionKey").DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(u), o("WAWebCryptoEncKeyHelper").generateFinalDbEncryptionAndFtsKeyForInvoker(u), r("WAWebEnvironment").isWindows && r("justknobx")._("5257") && f(u), m == null || (n = m.contacts) == null || n.initialize();
		var c = (a = s.abpropsRefreshId) != null ? a : 0, _ = o("WAWebABPropsLocalStorage").getRefreshId(), h = r("justknobx")._("2086"), y = o("WAWebABPropsLocalStorage").getWebRefreshId();
		if (y !== h && o("WAWebABPropsLocalStorage").setWebRefreshId(h), c !== 0 && _ !== c || h !== 0 && y !== h) {
			var C = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
			C && await o("WAWebAbPropsSyncJob").syncABPropsTask({
				localRefreshId: _ !== c ? _ : y,
				shouldSendHash: !1
			});
		}
		var b = (i = s.groupAbpropsRefreshId) != null ? i : 0, v = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
		b !== 0 && b !== v && o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(s.ts), await g(1e3);
	}
	async function f(e) {
		var t = m == null ? void 0 : m.serverEncKeySaltBridge;
		if (t == null) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[saveServerEncKeySalt] bridge unavailable"])));
			return;
		}
		var n = new TextEncoder(), r = o("WABase64").encodeB64(n.encode(e));
		await t.setServerEncKeySalt(r);
	}
	async function g(e) {
		try {
			await o("WAPromiseTimeout").promiseTimeout(o("WAWebMediaHosts").mediaHosts.forceRefresh(new AbortController().signal), e);
		} catch (e) {
			e instanceof o("WACustomError").TimeoutError ? o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["fetching mms4 hosts on startup exceeded timeout"]))).sendLogs("mms4-fetch-host-timeout", { sampling: 0 }) : o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["fetching mms4 hosts on startup failed: ", ""])), e).sendLogs("mms4-fetch-host-failed");
		}
	}
	l.default = _;
}), 98);
