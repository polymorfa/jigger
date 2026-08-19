__d("WAWebDebugBot", [
	"WALogger",
	"WAPromiseDelays",
	"WAWebABProps",
	"WAWebBizBot1pLearnMore.react",
	"WAWebBizBotTos.react",
	"WAWebBoolFunc",
	"WAWebBotFeatureNotAvailable.react",
	"WAWebBotGating",
	"WAWebBotLearnMore.react",
	"WAWebBotProductGating",
	"WAWebBotProfileCategory",
	"WAWebBotProfileCollection",
	"WAWebBotProfileDebugUtils",
	"WAWebBotSessionTransparencyNotice",
	"WAWebBotSupportState",
	"WAWebBotSystemMsg",
	"WAWebBotTos",
	"WAWebBotTosIds",
	"WAWebChatEntryPoint",
	"WAWebDataLink",
	"WAWebDebugUtils",
	"WAWebFilenameManager",
	"WAWebFrontendMsgGetters",
	"WAWebHttpExtendedFetch",
	"WAWebInitializeBots",
	"WAWebMediaInMemoryBlobCache",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgModelFromData",
	"WAWebPDFNModal.react",
	"WAWebPersistBotProfiles",
	"WAWebPrimaryFeaturesModel",
	"WAWebRequestBotList",
	"WAWebSchemaBotProfile",
	"WAWebTos",
	"WAWebTosJob",
	"WAWebUpdateForwardedBotValidationStatusAction",
	"WAWebUserPrefsBot",
	"WAWebUserPrefsMultiDeviceDebug",
	"WAWebWidFactory",
	"WaWebPDFNCommonUtils",
	"err",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = { injectBizBotFields: !1 };
	function C() {
		y.injectBizBotFields = !y.injectBizBotFields, o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Inject Biz Bot fields: ", ""])), y.injectBizBotFields ? "enabled" : "disabled");
	}
	function b() {
		o("WAWebTos").TosManager.resetState(o("WAWebBotTosIds").getBizBotTosId()), o("WAWebBotTos").setBizBotTosDismissalTime(null);
	}
	function v() {
		var e, t = [
			(e = o("WAWebBotTosIds")).getBotAgentTosId(),
			e.getBotLegacyShortcutTosId(),
			e.getBotInvokeTosId(),
			e.getBotLegacyInvokeTosId(),
			e.getBotShortcutTosId(),
			e.getUgcAiStudioTosId()
		].concat(o("WAWebBotGating").getInlineBotNoticeIds()), n = o("WAWebBotGating").getMasterBotNoticeId();
		n != null && t.push(String(n.toString()));
		for (var r of t) try {
			o("WAWebTos").TosManager.resetState(r.toString());
		} catch (e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[resetBotTos] ", ""])), e);
		}
	}
	function S() {
		var e = o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotAgentTosId()), t = o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotInvokeTosId()), n = o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotShortcutTosId()), r = o("WAWebBotGating").getMasterBotNoticeId(), a = null;
		return r != null && (a = o("WAWebTos").TosManager.getState(String(r))), {
			botAgentTosState: e,
			botInvokeTosState: t,
			botShortcutTosState: n,
			masterBotNoticeState: a
		};
	}
	async function R(e) {
		e && (await o("WAWebSchemaBotProfile").getBotProfileTable().clear(), o("WAWebUserPrefsBot").setUgcBotListLastBhash(null)), o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(0), o("WAWebUserPrefsBot").setUgcBotListLastRequestedTimestamp(0), window.location.reload();
	}
	function L(e) {
		o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebPDFNModal.react"), {
			pdfnId: e,
			runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
			verifyTosAccepted: o("WAWebBoolFunc").returnFalse
		}));
	}
	function E(e) {
		o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebPDFNModal.react"), {
			noticeType: o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
			pdfnId: e,
			runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
			verifyTosAccepted: o("WAWebBoolFunc").returnFalse
		}));
	}
	var k = function() {
		o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebBizBot1pLearnMore.react"), {}));
	};
	k.doc = "Opens the biz bot 1p learn more modal", k.paramsToExecute = [];
	var I = function() {
		o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebBizBotTos.react"), { chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug }));
	};
	I.doc = "Opens the biz bot consumer consent", I.paramsToExecute = [];
	var T = function() {
		o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebBotFeatureNotAvailable.react"), {}));
	};
	T.doc = "Opens the bot feature not available modal", T.paramsToExecute = [];
	var D = function() {
		o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }));
	};
	D.doc = "Opens the bot learn more modal", D.paramsToExecute = [];
	function x(e) {
		o("WAWebUserPrefsMultiDeviceDebug").setDebugDefaultBotOverride(e);
	}
	x.doc = "Adds a debug default bot for testing invoke against new bot numbers";
	function $() {
		var e = o("WAWebDebugUtils").getSelectedChat(), t = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(e.id, o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType.AiSafetyDisclaimer), n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
		e.msgs.add(n);
	}
	async function P(e, t) {
		var n, a;
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[debugBot] downloadImagineMedia: ", ""])), e);
		var i = new AbortController(), l = await o("WAWebHttpExtendedFetch").extendedFetch(e, { signal: i.signal });
		if (!l.ok) throw r("err")("[debugBot] downloadImagineMedia failed: " + l.status + " " + l.statusText);
		var s = t != null ? t : "image/jpeg", m = await l.arrayBuffer(), p = new Blob([m], { type: s }), _ = await crypto.subtle.digest("SHA-256", m), f = Array.from(new Uint8Array(_)), g = btoa(String.fromCharCode.apply(null, f));
		o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(g, p);
		var h = o("WAWebFilenameManager").getDefaultName({
			t: Math.round(Date.now() / 1e3),
			type: "image",
			mimetype: s,
			isVcardOverMmsDocument: !1,
			filename: "",
			vcardList: []
		}), y = window.URL.createObjectURL(p), C = o("WAWebDataLink").createDataLink(y);
		return C.style.display = "none", C.download = h, (n = document.body) == null || n.appendChild(C), C.click(), (a = document.body) == null || a.removeChild(C), o("WAPromiseDelays").delayMs(100).then(function() {
			window.URL.revokeObjectURL(y);
		}).catch(function(e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[debugBot] downloadImagineMedia: revokeObjectURL failed, ", ""])), e);
		}), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"[debugBot] downloadImagineMedia: saved ",
			" bytes, filehash=",
			""
		])), p.size, g), p;
	}
	P.doc = "Downloads imagine media and caches it. Usage: downloadImagineMedia(url, mimeType?)";
	function N(e, t) {
		var n = r("WAWebMsgKey").fromString(e), a = o("WAWebMsgCollection").MsgCollection.get(n);
		if (a == null) {
			o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[debugBot] Message not found: ", ""])), e);
			return;
		}
		if (a.forwardedAiBotMessageInfo == null) {
			o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[debugBot] Message has no forwardedAiBotMessageInfo"])));
			return;
		}
		var i = o("WAWebFrontendMsgGetters").getAsRichResponse(a);
		if (i == null) {
			o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[debugBot] Message is not a rich response"])));
			return;
		}
		o("WAWebUpdateForwardedBotValidationStatusAction").updateForwardedBotValidationStatusAction(i, t), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
			"[debugBot] Set validationStatus=",
			" on ",
			""
		])), t, e);
	}
	N.doc = "Sets validationStatus on a forwarded bot message by msgId. Usage: updateForwardedBotValidationStatus(msgId, status)";
	function M(e) {
		return e != null && e !== "" ? o("WAWebWidFactory").createWid(e) : o("WAWebDebugUtils").getSelectedChat().id;
	}
	function w(e) {
		return {
			id: e.id,
			name: e.name,
			attrs: e.attrs,
			description: e.description,
			category: e.category,
			isDefault: e.isDefault,
			prompts: e.prompts,
			personaId: e.personaId,
			commands: e.commands,
			commandsDescription: e.commandsDescription,
			isMetaCreated: e.isMetaCreated,
			creatorName: e.creatorName,
			creatorProfileUrl: e.creatorProfileUrl,
			lastUpdateTs: e.lastUpdateTs,
			posingAsProfessional: e.posingAsProfessional,
			product: e.product,
			isDeprecated: e.isDeprecated,
			isDeleted: e.isDeleted,
			lastFetchedTimeMs: e.lastFetchedTimeMs
		};
	}
	function A(e) {
		return {
			id: e,
			name: "",
			attrs: "",
			description: "",
			category: o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
			isDefault: !1,
			prompts: [],
			personaId: "",
			commands: [],
			commandsDescription: "",
			isMetaCreated: null,
			creatorName: null,
			creatorProfileUrl: null,
			lastUpdateTs: null,
			posingAsProfessional: null,
			product: null,
			isDeprecated: !1,
			isDeleted: !1,
			lastFetchedTimeMs: null
		};
	}
	function F(e) {
		var t, n, r = M(e), a = o("WAWebBotProfileCollection").BotProfileCollection.get(r), i = a != null ? {
			product: a.product,
			isDeprecated: a.isDeprecated,
			isDeleted: a.isDeleted
		} : null, l = o("WAWebBotSupportState").evaluateBotSupport(i, function(e) {
			return o("WAWebBotProductGating").isBotProductGateOn(e, o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled);
		});
		return babelHelpers.extends({}, o("WAWebBotProfileDebugUtils").formatProfileDebug(i, l), {
			name: (t = a == null ? void 0 : a.name) != null ? t : null,
			lastFetchedTimeMs: (n = a == null ? void 0 : a.lastFetchedTimeMs) != null ? n : null,
			standardBotProfileAbProp: o("WAWebABProps").getABPropConfigValue("ai_standard_bot_profile_enabled")
		});
	}
	F.doc = "Show a bot's Standard Bot Profile fields + computed support state. Usage: showBotProfile(widStr?) — defaults to the open chat";
	async function O() {
		var e = await o("WAWebSchemaBotProfile").getBotProfileTable().all();
		return e.map(function(e) {
			var t, n = {
				product: e.product,
				isDeprecated: e.isDeprecated,
				isDeleted: e.isDeleted
			}, r = o("WAWebBotSupportState").evaluateBotSupport(n, function(e) {
				return o("WAWebBotProductGating").isBotProductGateOn(e, o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled);
			});
			return babelHelpers.extends({
				id: e.id,
				name: e.name,
				lastFetchedTimeMs: (t = e.lastFetchedTimeMs) != null ? t : null
			}, o("WAWebBotProfileDebugUtils").formatProfileDebug(n, r));
		});
	}
	O.doc = "Show SBP fields + computed support state for all cached bot profiles", O.paramsToExecute = [];
	async function B(e, t) {
		var n = M(e), r = o("WAWebBotProfileCollection").BotProfileCollection.get(n), a = r != null ? w(r) : A(n), i = o("WAWebBotProfileDebugUtils").mergeProfileOverride(a, t);
		await o("WAWebPersistBotProfiles").persistBotProfiles([i]);
		var l = {
			product: i.product,
			isDeprecated: i.isDeprecated,
			isDeleted: i.isDeleted
		}, s = o("WAWebBotSupportState").evaluateBotSupport(l, function(e) {
			return o("WAWebBotProductGating").isBotProductGateOn(e, o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled);
		});
		return o("WAWebBotProfileDebugUtils").formatProfileDebug(l, s);
	}
	B.doc = "Force SBP fields on a bot and persist to IndexedDB. Usage: overrideBotProfile(widStr, {product?, isDeprecated?, isDeleted?})";
	async function W(e) {
		var t = M(e);
		await o("WAWebSchemaBotProfile").getBotProfileTable().remove(t.toString()), o("WAWebBotProfileCollection").BotProfileCollection.remove(t);
	}
	W.doc = "Remove a bot's cached profile row so it refetches on next sync. Usage: clearBotProfileOverride(widStr)";
	var q = {
		toggleInjectBizBotProfileFields: C,
		resetBizBotTos: b,
		resetBotTos: v,
		getBotTosStates: S,
		queryTosState: o("WAWebTosJob").queryTosState,
		TosManager: o("WAWebTos").TosManager,
		fetchBotProfiles: R,
		debugBotConfigs: y,
		getBotAgentTosId: o("WAWebBotTosIds").getBotAgentTosId,
		getBotShortcutTosId: o("WAWebBotTosIds").getBotShortcutTosId,
		getBotInvokeTosId: o("WAWebBotTosIds").getBotInvokeTosId,
		showPdfnModal: L,
		showNonBlockingModal: E,
		openBizBot1pLearnMore: k,
		openBizBotTos: I,
		openBotFeatureNotAvailable: T,
		openBotLearnMore: D,
		overrideDefaultBotForTest: x,
		genSessionTransparencySystemMsg: $,
		updateForwardedBotValidationStatus: N,
		downloadImagineMedia: P,
		showBotProfile: F,
		showAllBotProfiles: O,
		overrideBotProfile: B,
		clearBotProfileOverride: W,
		BotProfileCollection: o("WAWebBotProfileCollection").BotProfileCollection,
		requestBotList: o("WAWebRequestBotList").requestBotList,
		getBotProfilesFromServer: o("WAWebInitializeBots").getBotProfilesFromServer
	};
	l.default = q;
}), 98);
