__d("WAWebInjectSignupGreetingMessage", [
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebCmd",
	"WAWebCommonMsgSubtypeTypes",
	"WAWebContactSystemMsg",
	"WAWebFindChatAction",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebInAppSignupInfoStore",
	"WAWebMsgKey",
	"WAWebMsgType",
	"WAWebNullFunc",
	"WAWebSendMsgChatAction",
	"WAWebSendSignupResponseAction",
	"WAWebSignupFlowLoggerLazy",
	"WAWebSignupGreetingActionShared",
	"WAWebSignupLoadingState",
	"WAWebSignupMetadataFetcher",
	"WAWebSignupQPLLogger",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebWamEnumSignupEntryPoint",
	"WAWebWidFactory",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	async function m(t, n) {
		var a;
		o("WAWebSignupQPLLogger").deepLinkStart(n);
		var i;
		try {
			i = o("WAWebWidFactory").createWid(t);
		} catch (a) {
			o("WAWebSignupQPLLogger").deepLinkFail(n, "invalid_phone"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[signup:greeting] invalid phone signupId=",
				" phone=",
				""
			])), n, t).catching(r("getErrorSafe")(a)).sendLogs("signup-greeting-invalid-phone");
			return;
		}
		o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(i.toString(), n);
		try {
			o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
				signupId: n,
				businessWid: i
			});
			var l = await Promise.all([o("WAWebFindChatAction").findOrCreateLatestChat(i, "signupAGM"), (async function() {
				o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(n);
				try {
					return await o("WAWebSignupMetadataFetcher").fetchSignupMetadata(n, i.user);
				} finally {
					o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(n);
				}
			})().catch(o("WAWebNullFunc").returnNull)]), m = l[0].chat, p = l[1];
			a = m.id.toString();
			var _ = i.toString();
			a !== _ && (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(_), o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(a, n));
			var f = o("WAWebSignupGreetingActionShared").isChatSafeToDelete(m);
			if (p == null) {
				o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(a), o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"[signup:greeting] metadata null signupId=",
					" phone=",
					""
				])), n, t).sendLogs("signup-greeting-metadata-null"), f && (m.draftMessage == null || m.draftMessage.text === "") && (o("WAWebCmd").Cmd.closeChat(m), o("WAWebSignupGreetingActionShared").deleteSignupChat(m)), o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(), o("WAWebSignupLoadingState").setSignupLoading(a, !1), o("WAWebSignupGreetingActionShared").cancelledSignups.delete(n) || o("WAWebSignupQPLLogger").deepLinkFail(n, "invalid_response");
				return;
			}
			if (o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
				signupId: n,
				businessWid: m.id,
				chatTimestamp: m.t
			}), !o("WAWebSignupGreetingActionShared").signupCardInjectedChats.has(a)) {
				o("WAWebSignupGreetingActionShared").signupCardInjectedChats.add(a);
				try {
					var g = m.msgs.getModelsArray().some(function(e) {
						return e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard;
					});
					if (f && !g) {
						var h = await o("WAWebContactSystemMsg").genContactInfoCardMsg(m.id, {
							isSmb: !1,
							isEnterprise: !1,
							iAmStartingChat: !0,
							isWASupportStartingChat: !1,
							isFromCTWA: !1,
							isFMXCtWA: !1,
							isSignupDeeplink: !0
						});
						h != null && (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
							chatId: m.id,
							newMsg: h,
							handleSingleMsgOrigin: "signupAGM"
						}), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[injectSignupGreetingMessage] contact info card injected"]))));
					}
				} catch (e) {
					throw o("WAWebSignupGreetingActionShared").signupCardInjectedChats.delete(a), e;
				}
			}
			var y = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), C = {
				type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
				kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
				subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
				viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
				ack: o("WAWebAck").ACK.READ,
				from: m.id,
				author: m.id,
				id: new (r("WAWebMsgKey"))({
					fromMe: !1,
					remote: m.id,
					id: await r("WAWebMsgKey").newId(),
					participant: void 0
				}),
				local: !1,
				isNewMsg: !0,
				t: o("WATimeUtils").unixTime(),
				to: y,
				body: p.signupMessage,
				signupContext: {
					signupId: p.signupId,
					privacyPolicyUrl: p.privacyPolicyUrl
				}
			};
			if (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(m, C)[1], o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(a), o("WAWebSignupGreetingActionShared").cancelledSignups.delete(n)) {
				o("WAWebSignupLoadingState").setSignupLoading(a, !1);
				return;
			}
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[injectSignupGreetingMessage] AGM injected id=", ""])), n), o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
				signupId: n,
				businessWid: m.id,
				chatTimestamp: m.t
			}), o("WAWebInAppSignupInfoStore").saveEntryPoint(m.id.toString(), o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT.CHAT_THREAD_BUSINESS), o("WAWebSignupLoadingState").setSignupLoading(a, !1), o("WAWebSignupQPLLogger").deepLinkSuccess(n);
		} catch (e) {
			if (a != null ? o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(a) : o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i.toString()), o("WAWebSignupGreetingActionShared").cancelledSignups.delete(n) || o("WAWebSignupQPLLogger").deepLinkFail(n, "network_error"), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"[signup:greeting] injection failed signupId=",
				" phone=",
				""
			])), n, t).catching(r("getErrorSafe")(e)).sendLogs("signup-greeting-injection-failed"), a != null) o("WAWebSignupLoadingState").setSignupLoading(a, !1);
			else try {
				o("WAWebSignupLoadingState").setSignupLoading(o("WAWebWidFactory").createWid(t).toString(), !1);
			} catch (e) {}
		}
	}
	l.injectSignupGreetingMessage = m;
}), 98);
