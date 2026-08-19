__d("WAWebDebug", [
	"WAComms",
	"WACryptoPkcs7",
	"WALogger",
	"WAPromiseDelays",
	"WASendPassiveModeProtocol",
	"WATimeUtils",
	"WAWap",
	"WAWapJid",
	"WAWeb-dexie",
	"WAWeb-moment",
	"WAWebACSNetwork",
	"WAWebAccountLinkingDebug",
	"WAWebAccountSyncJob",
	"WAWebAdvDeviceInfoCheckJob",
	"WAWebAlarm",
	"WAWebApiChat",
	"WAWebApiPendingDeviceSync",
	"WAWebBackendEventBus",
	"WAWebBeyondPhoneNumberGatingUtils",
	"WAWebCanonicalTokenExchange",
	"WAWebCanonicalUtils",
	"WAWebChatCollection",
	"WAWebClock",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebDBChatSerialization",
	"WAWebDBPurgeExpiredRecords",
	"WAWebDBReportingTokenUtils",
	"WAWebDebugABProps",
	"WAWebDebugACS",
	"WAWebDebugAds",
	"WAWebDebugAltDeviceLinking",
	"WAWebDebugApi",
	"WAWebDebugBizAi",
	"WAWebDebugBizBroadcast",
	"WAWebDebugBizBroadcastGenAI",
	"WAWebDebugBizVPVOverlay",
	"WAWebDebugBookingConfirmation",
	"WAWebDebugBot",
	"WAWebDebugCallingGroupCalling",
	"WAWebDebugCallingNavNux",
	"WAWebDebugCapping",
	"WAWebDebugCatalog",
	"WAWebDebugChangeNumber",
	"WAWebDebugChatLock",
	"WAWebDebugCollections",
	"WAWebDebugComments",
	"WAWebDebugCommunity",
	"WAWebDebugCommunityNavigation",
	"WAWebDebugConsumerQuickPromotions",
	"WAWebDebugContacts",
	"WAWebDebugDB",
	"WAWebDebugDBCTWA3pdSignals",
	"WAWebDebugDownFunnelSignals",
	"WAWebDebugEphemerality",
	"WAWebDebugEvents",
	"WAWebDebugFavorites",
	"WAWebDebugFlipper",
	"WAWebDebugGDPR",
	"WAWebDebugGK",
	"WAWebDebugGalaxyFlow",
	"WAWebDebugGroup",
	"WAWebDebugHatch",
	"WAWebDebugHybrid",
	"WAWebDebugInAppSignupConfirmation",
	"WAWebDebugL10N",
	"WAWebDebugLabelAssociation",
	"WAWebDebugLabyrinth",
	"WAWebDebugLidMigration",
	"WAWebDebugLists",
	"WAWebDebugLocalStorage",
	"WAWebDebugLogging",
	"WAWebDebugMC",
	"WAWebDebugMedia",
	"WAWebDebugMessageEdit",
	"WAWebDebugMessagingInfra",
	"WAWebDebugMex",
	"WAWebDebugMisc",
	"WAWebDebugMultiStepForm",
	"WAWebDebugNct",
	"WAWebDebugNewsletter",
	"WAWebDebugNewsletterAdminInsights",
	"WAWebDebugNewsletterPolls",
	"WAWebDebugNewsletterReaction",
	"WAWebDebugNewsletterSimilar",
	"WAWebDebugNotifications",
	"WAWebDebugNux",
	"WAWebDebugOutContacts",
	"WAWebDebugPaymentReminders",
	"WAWebDebugPins",
	"WAWebDebugPolls",
	"WAWebDebugPrivacyExperience",
	"WAWebDebugQuickPromotions",
	"WAWebDebugRaTls",
	"WAWebDebugReactions",
	"WAWebDebugRichTextInput",
	"WAWebDebugRoutingToken",
	"WAWebDebugScheduledMessages",
	"WAWebDebugScreenLock",
	"WAWebDebugSendOrderDetailsMessage",
	"WAWebDebugSignupAGM",
	"WAWebDebugSmax",
	"WAWebDebugSmb",
	"WAWebDebugSocket",
	"WAWebDebugStatus",
	"WAWebDebugStickerPack",
	"WAWebDebugSyncd",
	"WAWebDebugTabs",
	"WAWebDebugTee",
	"WAWebDebugTextStatus",
	"WAWebDebugThreads",
	"WAWebDebugToast.react",
	"WAWebDebugUI",
	"WAWebDebugUsername",
	"WAWebDebugUsync",
	"WAWebDomFullscreen",
	"WAWebEstimateFtsStorageApi",
	"WAWebEstimateIndexeddbUsageApi",
	"WAWebFetchResendMissingKeyJob",
	"WAWebFrontendMsgGetters",
	"WAWebFtsClient",
	"WAWebGroupHistoryDebug",
	"WAWebInMemoryLottieStickerCache",
	"WAWebInteractiveBloksWidgetDebug",
	"WAWebJSUsageDebug",
	"WAWebListsIntroPopupLoadable",
	"WAWebManagePhoneNumberMappingJob",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMemberLabelDebug",
	"WAWebMessageSendReporterFrontendDeps",
	"WAWebMimeTypes",
	"WAWebMiscBrowserUtils",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebModelStorage",
	"WAWebModelStorageUtils",
	"WAWebMsgCollection",
	"WAWebMsgHandleDebug",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebNetworkStatus",
	"WAWebNoop",
	"WAWebOffdStorage",
	"WAWebPersistedJobDefinitions",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebProfilePicThumbCollection",
	"WAWebProtobufsE2E.pb",
	"WAWebProtobufsProtocol.pb",
	"WAWebProtobufsWeb.pb",
	"WAWebPttMsgAudioStore",
	"WAWebPttPrefs",
	"WAWebSchemaChat",
	"WAWebSchemaDeviceList",
	"WAWebSchemaMessage",
	"WAWebSchemaPrivacyDisallowedList",
	"WAWebSchemaReportingInfo",
	"WAWebSendMsgJob",
	"WAWebSendMsgMetricReporter",
	"WAWebSendMsgTypes",
	"WAWebSendNonMessageDataRequest",
	"WAWebSendTextMsgChatAction",
	"WAWebSetPrivacyForOneCategoryAction",
	"WAWebSetPrivacyJob",
	"WAWebSetReadReceiptJob",
	"WAWebSignalStorage",
	"WAWebSignalStorageUtils",
	"WAWebSocketConstants",
	"WAWebSocketModel",
	"WAWebStartBackend",
	"WAWebSubscriptions",
	"WAWebSuspendedCommunityUtils",
	"WAWebSyncDeviceAdvDeviceListJob",
	"WAWebTPSharerPreference",
	"WAWebTos",
	"WAWebUim",
	"WAWebUnifiedSession",
	"WAWebUpdateDraftMessageChatAction",
	"WAWebUpdateDraftMessageChatJob",
	"WAWebUpdaterUpdatePoll",
	"WAWebUploadPQPrekeysJob",
	"WAWebUserPrefsDebugMsgs",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsMultiDevice",
	"WAWebUserPrefsMultiDeviceDebug",
	"WAWebWAWCStorage",
	"WAWebWam",
	"WAWebWamCodegenWamEvent",
	"WAWebWidFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"cr:10202",
	"cr:10204",
	"cr:17219",
	"cr:5553",
	"decodeProtobuf",
	"err",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = b || (b = o("react")), S = (e = n("cr:5553")) == null ? void 0 : e.VoipBridgePerfSimulator;
	function R() {
		return Promise.all([
			o("WAWebModelStorage").destroy(),
			o("WAWebSignalStorage").destroy(),
			o("WAWebOffdStorage").destroy()
		]).then(function() {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[reload] resetStorage"]))), location.reload();
		});
	}
	R.doc = "Reset model, signal, offd local storage, and reload";
	function L() {
		return Promise.all([o("WAWebModelStorage").destroy(), o("WAWebOffdStorage").destroy()]).then(function() {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[reload] clearMessages"]))), location.reload();
		});
	}
	L.doc = "Clear all model and offd local storage, and reload";
	async function E() {
		return await o("WAWebUserPrefsMultiDevice").clearRegistrationInfo(), Promise.all([
			o("WAWebModelStorage").destroy(),
			o("WAWebSignalStorage").destroy(),
			o("WAWebOffdStorage").destroy()
		]).then(function() {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[reload] signOut"]))), location.reload();
		});
	}
	E.doc = "Sign out";
	function k(e) {
		return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(e.map(function(e) {
			return o("WAWebWidFactory").createUserWidOrThrow(e);
		}), null, null).then(r("WAWebNoop"));
	}
	k.doc = "Sync device list to a list of user jids";
	function I(e, t) {
		var n, r = o("WAWebChatCollection").ChatCollection.gadd({ id: o("WAWebWidFactory").createWid(t + "@broadcast") }), a = e.map(function(e) {
			return { id: o("WAWebWidFactory").createWid(e + "@s.whatsapp.net") };
		});
		(n = r.groupMetadata) == null || n.set({ participants: a });
	}
	I.doc = "Create a broadcast list with a list of participants";
	function T(e) {
		return r("WAWebSetReadReceiptJob")(e).then(function(e) {
			return e.value !== "error" && o("WAWebUserPrefsMultiDeviceDebug").setDebugReadReceipt(e.value), e;
		});
	}
	T.doc = "Send a debug read receipt";
	function D(e) {
		return o("WASendPassiveModeProtocol").sendPassiveModeProtocol(e);
	}
	D.doc = "Send a passive info query (active|passive)";
	function x() {
		o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(o("WAWebPersistedJobDefinitions").jobSerializers.rotateKey());
	}
	x.doc = "Fire and forget a rotateKey job";
	function $() {
		return o("WAWebAdvDeviceInfoCheckJob").runAdvDeviceInfoCheck();
	}
	$.doc = "run adv check and removal for expired devices";
	async function P(e, t) {
		var n = await o("WAWebSchemaDeviceList").getDeviceListTable().get(e);
		if (n == null) return o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["debug: setDeviceListEntry: no entry for ", ""])), e), !1;
		var r = new Set([
			"timestamp",
			"expectedTs",
			"expectedTsLastDeviceJobTs",
			"expectedTsUpdateTs"
		]);
		for (var a of Object.keys(t)) if (!r.has(a)) return o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["debug: setDeviceListEntry: unsupported key: ", ""])), a), !1;
		return o("WAWebSchemaDeviceList").getDeviceListTable().merge(e, t).then(function() {
			return o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["debug: setDeviceListEntry: update successful"]))), !0;
		});
	}
	P.doc = "set field(s) for an entry in the device table for a given user";
	async function N() {
		var e = await o("WAWebSchemaPrivacyDisallowedList").getPrivacyDisallowedListTable().get("groupadd");
		o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["debug:setPrivacyForOneCategory"])));
		var t = o("WAWebWidFactory").createWid("18475550015@c.us");
		return o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
			name: "groupadd",
			value: "contact_blacklist",
			users: [{
				action: o("WAWebSetPrivacyJob").PrivacyUserAction.Add,
				wid: t,
				username: null
			}],
			dhash: e == null ? void 0 : e.dhash
		}, [t]);
	}
	N.doc = "set privacy setting for one category";
	async function M(e) {
		var t = await o("WAWebSchemaPrivacyDisallowedList").getPrivacyDisallowedListTable().get(e);
		return o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["debug:getPrivacyDisallowedListTableContents"]))), t;
	}
	M.doc = "get privacy list table contents for given category";
	function w(e) {
		r("WAWebDebugRoutingToken").setDebugRoutingToken(e);
	}
	w.doc = "Pin to a specific cdev server, used when your change is canaried on a cdev server";
	function A() {
		return o("WAWebUpdaterUpdatePoll").checkForUpdates();
	}
	A.doc = "Trigger update check polling and install if an update is available";
	function F() {}
	function O() {}
	O.doc = "Toggle Sticker Maker debug mode (DEV only)", O.paramsToExecute = [];
	function B() {
		return r("WAWebMiscBrowserUtils").persistentExpiringId();
	}
	function W(e, t) {
		return o("WAWebDBPurgeExpiredRecords").purgeExpiredOrphanRecords(e, t);
	}
	function q(e) {
		return o("WAWebUserPrefsMultiDeviceDebug").setDebugEnableOfflineMock(e);
	}
	q.doc = "Enable/disable offline simulator.";
	function U(e) {
		return o("WAWebUserPrefsMultiDeviceDebug").setDebugOfflineMockTraffic(e);
	}
	U.doc = "Override incoming mock traffic (traffic.js).";
	function V() {
		return o("WAWebApiChat").pruneExpiredOrphanTcTokens();
	}
	V.doc = "Prunes expired orphan tokens older than 30 days";
	async function H(e, t) {
		var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (n == null) {
			o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["bulkSendMessageWithoutStoreByPn: user has no phone"])));
			return;
		}
		for (var a = o("WAWebWidFactory").createWid(e + "@c.us"), i = 0; i < t; i++) {
			var l = "test-message-" + i, s = new (o("WAWebMsgModel")).Msg({
				id: new (r("WAWebMsgKey"))({
					from: n,
					to: a,
					id: r("WAWebMsgKey").newId_DEPRECATED()
				}),
				body: l,
				type: "chat",
				subtype: null,
				t: o("WATimeUtils").unixTime(),
				from: n,
				to: a,
				isNewMsg: !0,
				local: !0,
				ack: 0
			});
			await o("WAWebSendMsgJob").encryptAndSendMsg({
				type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
				data: s
			}, o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(s, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS));
		}
	}
	H.doc = "Sending multiple messages without store message in DB, which will make the sending faster";
	async function G(e) {
		try {
			var t;
			if (typeof e == "string") {
				var n = await o("WAWebMsgCollection").MsgCollection.getMessagesById([e]), r = n.messages;
				t = r[0];
			} else t = e;
			var a = o("WAWebFrontendMsgGetters").getChat(t);
			await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(a, "testing", { quotedMsg: t });
		} catch (e) {
			o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["sendReplyToMsg: error ", ""])), e);
		}
	}
	G.doc = "Send a quotedMsg to selected msg";
	function z(e) {
		return o("WAWap").decodeStanzaDebug(e);
	}
	z.doc = "Decode a stanza from a buffer and return the WAP node";
	function j(e) {
		var t = o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(r("nullthrows")(e.futureproofBuffer)));
		return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t);
	}
	j.doc = "Returns the decoded message object of the given futureproof message";
	function K(e) {
		return o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW, {
			urls: [e],
			includeHqThumbnail: !0
		});
	}
	K.doc = "requestUrlPreview";
	function Q(e) {
		var t = e.map(function(e) {
			return o("WAWebWidFactory").createWid(e + "@c.us");
		});
		return o("WAWebFetchResendMissingKeyJob").fetchResendMissingKeys(t);
	}
	Q.doc = "send fetch missing key iq for given list of phone number";
	function X(e) {
		var t = o("WAWebWidFactory").createWid(e), n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(t);
		n && (n.timestamp = 0);
	}
	async function Y() {
		r("WAWebNetworkStatus").simulateNetworkStatus(!1), o("WAWebSocketModel").Socket.socket = null, o("WAWebSocketModel").Socket.state = o("WAWebSocketConstants").SOCKET_STATE.OPENING, o("WAWebSocketModel").Socket.stream = o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED, await o("WAComms").stopComms();
	}
	async function J() {
		r("WAWebNetworkStatus").simulateNetworkStatus(!0), await o("WAWebStartBackend").startBackend();
	}
	async function Z() {
		o("WAWebBackendEventBus").BackendEventBus.triggerReconnectSocket();
	}
	function ee(e, t) {
		var n = new AbortController();
		return o("WAWebUpdateDraftMessageChatJob").updateDraftMessageChat({
			chatId: e,
			draftMessage: { text: t },
			abortSignal: n.signal
		});
	}
	ee.doc = "update draft message job to update the text in the chat table";
	function te(e, t) {
		return o("WAWebUpdateDraftMessageChatAction").updateDraftMessageChat(e, { text: t });
	}
	te.doc = "Update draft message to update the text in the chat DB table as well as the Chat model UI.";
	async function ne(e) {
		var t = typeof e == "string" ? e : e.toString(), n = await o("WAWebSchemaChat").getChatTable().get(t);
		if (n == null) throw r("err")("No chat found for id " + t);
		return o("WAWebDBChatSerialization").deserializeChat(n);
	}
	ne.doc = "get chat row deserialized from DB";
	function re(e) {
		o("WAWebUserPrefsMultiDeviceDebug").setDebugDecryptFail(e);
	}
	re.doc = "Set the next N message decryptions to fail";
	function oe() {
		return o("WAWebUserPrefsMultiDeviceDebug").getDebugDecryptFail();
	}
	oe.doc = "Check how many more message decryptions are set to fail";
	function ae(e, t) {
		return o("WAWebUserPrefsMultiDeviceDebug").setDebugEncryptFail(o("WAWebWidFactory").createUserWidOrThrow(e), t);
	}
	ae.doc = "Fails create-session for a given device";
	function ie(e) {
		o("WAWebUserPrefsMultiDeviceDebug").setDebugDoNotSendRetryReceipt(e);
	}
	ie.doc = "Set the next N retry receipts will not be sent";
	function le() {
		return o("WAWebUserPrefsMultiDeviceDebug").getDebugDoNotSendRetryReceipt();
	}
	le.doc = "Check how many more retry receipts will be skipped";
	async function se() {
		var e = Array.from(o("WAWebModelStorageUtils").getStorage().tables.keys()), t = e.map(async function(e) {
			var t = o("WAWebModelStorageUtils").getStorage().table(e), n = await t.all();
			return [e, n];
		});
		return Promise.all(t);
	}
	se.doc = "Dump all model data from IndexedDB";
	async function ue() {
		var e = Array.from(o("WAWebSignalStorageUtils").getStorage().tables.keys()), t = e.map(async function(e) {
			var t = o("WAWebSignalStorageUtils").getStorage().table(e), n = await t.all();
			return [e, n];
		});
		return Promise.all(t);
	}
	ue.doc = "Dump all signal data from IndexedDB";
	async function ce(e) {
		return o("WAWebWam").sendAllLogs(e);
	}
	ce.doc = "Submit all cached metrics for the given WAM buffer type ('regular' or one of Private Stats keys)", ce.paramsToExecute = ["regular"];
	function de(e) {
		o("WAWebUserPrefsGeneral").setDebugFacebookGraphQLEndpointOverride(e);
	}
	de.doc = "Debug method for testing against a specific graphQL Facebook OD endpoint. Pass OD number as a string, e.g. \"0934\"";
	var me = function() {
		o("WAWebModalManager").ModalManager.open(v.createElement(o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable, null));
	};
	me.doc = "Opens the Lists Intro Popup", me.paramsToExecute = [];
	async function pe(e) {
		return o("WAWebSchemaReportingInfo").getReportingInfoTable().equals(["msgKey"], [e]);
	}
	async function _e(e) {
		return e === void 0 && (e = -1), o("WAWebDBReportingTokenUtils").cleanupReportingTokenAndContent(e);
	}
	async function fe(e) {
		return new (o("WAWebWamCodegenWamEvent")).RawWamEvent(JSON.parse(e)).commitAndWaitForFlush(!0);
	}
	fe.doc = "Send a raw wam event (used by UWP Hybrid app)", fe.paramsToExecute = [];
	function ge(e, t) {
		o("WAWebTos").TosManager.setState(e, t, o("WATimeUtils").unixTime());
	}
	ge.doc = "Set the state of a given TOS notice";
	function he(e) {
		o("WAWebTPSharerPreference").setSharerSkipPreference(e);
	}
	he.doc = "Set the WebTP sharer skip confirmation preference (debug override)";
	async function ye(e) {
		var t = 0, n = 0x7048860ddf79, r = await o("WAWebCanonicalTokenExchange").storeCanonicalCredentials({
			userId: n,
			deviceId: t,
			accessToken: e
		}, "recovery");
		return r === o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS ? "success" : "failed";
	}
	ye.doc = "Store canonical credentials directly (for E2E tests)";
	function Ce() {
		return o("WAWebCanonicalUtils").isCanonicalPresent();
	}
	Ce.doc = "Check if canonical token has been stored";
	async function be(e) {
		var t = Array.isArray(e) ? e : [e], n = t.map(function(e) {
			return r("WAWebMsgKey").from(e);
		});
		return o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
			"[debug] firing PLACEHOLDER_MESSAGE_RESEND for ",
			" key(s): ",
			""
		])), t.length, t), await o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, { msgKeys: n }), {
			msgKeys: n.map(function(e) {
				return e.toString();
			}),
			removePnDependenciesEnabled: o("WAWebBeyondPhoneNumberGatingUtils").removePnDependenciesEnabled()
		};
	}
	be.doc = "Fires a real PLACEHOLDER_MESSAGE_RESEND RDU for the given serialized msg key(s).";
	async function ve() {
		try {
			return await o("WAWebUploadPQPrekeysJob").generateAndUploadPQPreKeys(), "PQ key upload complete - check WALogger for details";
		} catch (e) {
			return "PQ key upload failed: " + String(e);
		}
	}
	ve.doc = "Trigger PQ (post-quantum) prekey generation and upload";
	function Se() {
		r("WAWebDebugDownFunnelSignals").dfsInitialize();
	}
	var Re = babelHelpers.extends({
		initialize: Se,
		delayMs: o("WAPromiseDelays").delayMs,
		_: null
	}, r("WAWebDebugL10N"), r("WAWebDebugNewsletter"), r("WAWebDebugABProps"), r("WAWebDebugAltDeviceLinking"), r("WAWebDebugApi"), r("WAWebDebugBizAi"), r("WAWebDebugBizBroadcast"), r("WAWebDebugBizBroadcastGenAI"), r("WAWebDebugCatalog"), r("WAWebDebugChangeNumber"), r("WAWebDebugDownFunnelSignals"), r("WAWebDebugFavorites"), r("WAWebDebugGroup"), r("WAWebDebugGK"), r("WAWebDebugHatch"), r("WAWebDebugLists"), r("WAWebDebugLabelAssociation"), r("WAWebDebugLabyrinth"), r("WAWebDebugLocalStorage"), r("WAWebDebugLogging"), r("WAWebDebugMedia"), r("WAWebDebugMessageEdit"), r("WAWebDebugPins"), r("WAWebDebugDBCTWA3pdSignals"), r("WAWebDebugNewsletterReaction"), r("WAWebDebugNewsletterPolls"), r("WAWebDebugNewsletterAdminInsights"), r("WAWebDebugNewsletterSimilar"), r("WAWebDebugFlipper"), r("WAWebDebugComments"), r("WAWebDebugCommunity"), r("WAWebDebugNux"), r("WAWebDebugPolls"), r("WAWebDebugEvents"), r("WAWebDebugReactions"), r("WAWebDebugScheduledMessages"), r("WAWebDebugScreenLock"), r("WAWebDebugSmb"), r("WAWebDebugSocket"), r("WAWebDebugSyncd"), o("WAWebDebugRichTextInput").WAWebDebugRichTextInput, r("WAWebDebugUI"), r("WAWebDebugHybrid"), r("WAWebDebugEphemerality"), r("WAWebDebugMessagingInfra"), r("WAWebDebugBookingConfirmation"), r("WAWebDebugInAppSignupConfirmation"), r("WAWebDebugMultiStepForm"), r("WAWebDebugSignupAGM"), r("WAWebDebugPaymentReminders"), r("WAWebDebugPrivacyExperience"), r("WAWebDebugDB"), r("WAWebDebugBot"), r("WAWebDebugGDPR"), r("WAWebDebugLidMigration"), r("WAWebDebugContacts"), r("WAWebDebugChatLock"), r("WAWebDebugCommunityNavigation"), r("WAWebDebugMex"), r("WAWebDebugToast.react"), r("WAWebDebugStickerPack"), r("WAWebDebugACS"), r("WAWebDebugNux"), r("WAWebDebugMisc"), r("WAWebDebugNct"), r("WAWebDebugTabs"), r("WAWebAccountLinkingDebug"), r("WAWebDebugGalaxyFlow"), r("WAWebDebugAds"), r("WAWebDebugStatus"), r("WAWebDebugTextStatus"), r("WAWebDebugSmax"), r("WAWebDebugUsername"), r("WAWebDebugUsync"), r("WAWebDebugCallingGroupCalling"), r("WAWebDebugCallingNavNux"), r("WAWebDebugCapping"), r("WAWebDebugConsumerQuickPromotions"), r("WAWebDebugQuickPromotions"), r("WAWebDebugRaTls"), r("WAWebDebugThreads"), r("WAWebDebugNotifications"), r("WAWebDebugMC"), r("WAWebMsgHandleDebug"), r("WAWebDebugCollections"), r("WAWebDebugOutContacts"), {
		getMessageTable: o("WAWebSchemaMessage").getMessageTable,
		resetStorage: R,
		clearMessages: L,
		openListsIntroPopup: me,
		cleanExpiredOrphanTcTokens: V,
		signOut: E,
		syncDeviceList: k,
		ensurePhoneNumberToLidMapping: o("WAWebManagePhoneNumberMappingJob").ensurePhoneNumberToLidMapping,
		createBroadcast: I,
		setReadReceipt: T,
		sendOrderDetailsMessageAsMerchantMD: r("WAWebDebugSendOrderDetailsMessage"),
		sendPassiveModeIq: D,
		fts: { ftsClient: o("WAWebFtsClient").ftsClient },
		tee: r("WAWebDebugTee"),
		requestUrlPreview: K,
		rotateKey: x,
		runAdvDeviceInfoCheck: $,
		setDeviceListEntry: P,
		setPrivacyForOneCategory: N,
		getComms: o("WAComms").getComms,
		forceSocketReconnect: Z,
		pinClientToCdev: w,
		checkForUpdates: A,
		accSync: o("WAWebAccountSyncJob"),
		createWid: o("WAWebWidFactory").createWid,
		createUserWidOrThrow: o("WAWebWidFactory").createUserWidOrThrow,
		ModelStorage: o("WAWebModelStorage"),
		mimetypes: o("WAWebMimeTypes"),
		stats: null,
		pb: {
			e2e: o("WAWebProtobufsE2E.pb"),
			protocol: o("WAWebProtobufsProtocol.pb"),
			web: o("WAWebProtobufsWeb.pb")
		},
		gkUtils: o("WAWebMiscGatingUtils"),
		TosManager: o("WAWebTos").TosManager,
		getEstimatedFTSDbSize: o("WAWebEstimateFtsStorageApi").getEstimatedFTSDbSize,
		getEstimatedIndexedDbUsage: o("WAWebEstimateIndexeddbUsageApi").getEstimatedIndexedDbUsage,
		MsgAudioStore: o("WAWebPttMsgAudioStore").MsgAudioStore,
		PttPrefs: o("WAWebPttPrefs").PttPrefs,
		Alarm: r("WAWebAlarm"),
		Clock: o("WAWebClock").Clock,
		Cmd: o("WAWebCmd").Cmd,
		Conn: o("WAWebConnModel").Conn,
		WAWCDB: r("WAWebWAWCStorage"),
		WAWapJid: o("WAWapJid"),
		Dexie: r("WAWeb-dexie"),
		Fullscreen: r("WAWebDomFullscreen"),
		UIM: o("WAWebUim").UIM,
		makeWapNode: o("WAWap").makeWapNode,
		getMediaEditorDebug: F,
		toggleStickerMakerDebug: O,
		getModelStorage: o("WAWebModelStorageUtils").getStorage,
		dumpModelStorage: se,
		dumpSignalStorage: ue,
		doPendingDeviceSync: o("WAWebApiPendingDeviceSync").doPendingDeviceSync,
		requestPlaceholderResend: be,
		createPersistentExpiringId: B,
		setDebugEnableOfflineMock: q,
		setDebugOfflineMockTraffic: U,
		InMemoryMediaBlobCache: o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache,
		bulkSendMessageWithoutStoreByPn: H,
		purgeOrphanRecords: W,
		userPrefsIdb: o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb,
		sendReplyToMsg: G,
		runSubscriptionsManager: o("WAWebSubscriptions").runSubscriptionsManager,
		getMyPn: o("WAWebUserPrefsMeUser").getMaybeMePnUser,
		decodeFutureproofBuffer: j,
		sendFetchResendMissingKeys: Q,
		setExpiredProfilePicture: X,
		getAllChatsDeserialized: o("WAWebApiChat").getAllChatsDeserialized,
		getChatDeserializedFromDBById: ne,
		updateDraftMessageChatDb: ee,
		updateDraftMessageChatUiAndDb: te,
		sendAllLogs: ce,
		decodeStanza: z,
		voipWinRTBridge: n("cr:17219") == null || (C = n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebDebug)) == null ? void 0 : C.voip,
		VoipBridgePerfSimulator: S,
		rawWamEvent: fe,
		fetchWithACSCredential: o("WAWebACSNetwork").fetchWithACSCredential,
		networkSimulateOffline: Y,
		networkReconnectOnline: J,
		getDebugShownMsgs: o("WAWebUserPrefsDebugMsgs").getDebugShownMsgs,
		setDebugDecryptFail: re,
		getDebugDecryptFail: oe,
		setDebugEncryptFail: ae,
		setDebugDoNotSendRetryReceipt: ie,
		getDebugDoNotSendRetryReceipt: le,
		setDebugIgnoreParticipantAdd: o("WAWebUserPrefsMultiDeviceDebug").setDebugIgnoreParticipantAdd,
		getDebugIgnoreParticipantAdd: o("WAWebUserPrefsMultiDeviceDebug").getDebugIgnoreParticipantAdd,
		InMemoryLottieStickerCache: o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache,
		getReportingInfoRow: pe,
		triggerReportingTokenCleanup: _e,
		Moment: r("WAWeb-moment"),
		UnifiedSessionManager: o("WAWebUnifiedSession").UnifiedSessionManager,
		openSuspendedCommunityModal: o("WAWebSuspendedCommunityUtils").openSuspendedCommunityModal,
		setTosState: ge,
		overrideFacebookGraphQLEndpointForTest: de,
		getPrivacyDisallowedListTableContents: M,
		setSharerSkipPreference: he,
		setCanonicalToken: ye,
		isCanonicalPresent: Ce,
		MemberLabel: r("WAWebMemberLabelDebug"),
		GroupHistory: r("WAWebGroupHistoryDebug"),
		getJSUsageReport: r("WAWebJSUsageDebug").getJSUsageReport,
		getJSUsageReportJSON: r("WAWebJSUsageDebug").getJSUsageReportJSON,
		KMP: { getDeviceJid: o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow },
		toggleVPVOverlay: o("WAWebDebugBizVPVOverlay").toggleVPVOverlay,
		injectRichResponseTestMessage: o("WAWebInteractiveBloksWidgetDebug").injectRichResponseTestMessage,
		injectInteractiveMessageWithBloksWidget: o("WAWebInteractiveBloksWidgetDebug").injectInteractiveMessageWithBloksWidget,
		triggerPQKeyUpload: ve
	});
	l.default = Re;
}), 98);
