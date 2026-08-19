__d("useWAWebCmdChatEvents", [
	"WALogger",
	"WAWebAIHatchIdentitySync",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBlockedParticipantWarning",
	"WAWebBotBaseGating",
	"WAWebBotDisclaimerManager",
	"WAWebBotFeatureNotAvailable.react",
	"WAWebBotFrontendGating",
	"WAWebBotGating",
	"WAWebBotLogging",
	"WAWebBotLoggingUtils",
	"WAWebBotTosIds",
	"WAWebBotUtils",
	"WAWebChatEntryPoint",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatLockCodeModal.react",
	"WAWebChatLockUtils",
	"WAWebChatLockWAMUtils",
	"WAWebChatOpenMetricsStore",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebFrontendMsgGetters",
	"WAWebGetChatLockEntryPoint",
	"WAWebGetOrQueryUsyncInfoContactAction",
	"WAWebHatchFrontendGating",
	"WAWebKeyboardTabUtils",
	"WAWebLimitSharingUIUtils",
	"WAWebLockedChatsDrawer.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebNoop",
	"WAWebPonyfillsIdleCallback",
	"WAWebPttComposerRecordingStopReason",
	"WAWebResetLastActiveSideNavStateAction",
	"WAWebThreadModelResolver",
	"WAWebUpdateEphemeralSettingChatAction",
	"WAWebWamEnumLandingSurface",
	"WAWebWid",
	"asyncToGeneratorRuntime",
	"gkx",
	"react",
	"useWAWebHatchChatOpen",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useMemo, g = p.useRef, h = p.useState;
	function y(t) {
		t === void 0 && (t = void 0);
		var a = g(), i = g(0), l = g(r("WAWebNoop")), d = g(o("WAWebChatEntryPoint").ChatEntryPoint.Initialization), p = g(r("WAWebNoop")), y = h(t), C = y[0], b = y[1], v = h(), S = v[0], R = v[1], L = h(), E = L[0], k = L[1], I = h(), T = I[0], D = I[1], x = f(function() {
			return C != null && T != null ? o("WAWebThreadModelResolver").resolveThreadOrChat(C, T) : null;
		}, [C, T]), $ = _(function(e, t, n, r) {
			b(e), R(t), k(n), D(r);
		}, []), P = _((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n, _ = t.chat, f = t.chatEntryPoint, g = t.msgContext, h = t.onComplete, y = t.threadId;
				if (!o("WAWebChatLockUtils").chatIsAccessible(_)) {
					var b = o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(f), v = o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(f)), S = yield o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
						unlockAppOnSuccess: !0,
						landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.THREAD,
						unlockEntryPoint: v,
						entryPoint: b
					});
					if (!S) return;
					o("WAWebDrawerManager").DrawerManager.openDrawerLeft(m.jsx(r("WAWebLockedChatsDrawer.react"), {
						entryPoint: b,
						unlockEntryPoint: v,
						focusOnMount: !1
					}), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
						transition: "flow-transition-drawer-pop"
					});
				}
				if (!(yield r("WAWebBlockedParticipantWarning")(_))) {
					if (_.id.isBot()) {
						if (!o("WAWebBotBaseGating").isBotEnabled() && !o("WAWebBotFrontendGating").isManusIntegrationEnabled()) {
							o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBotFeatureNotAvailable.react"), {}));
							return;
						}
						var R = o("WAWebBotUtils").isMetaAiBot(_.id), L = o("WAWebBotLogging").getBotEntryPoint(f), E = o("WAWebBotTosIds").getApplicableBotNoticeId(L);
						if (!_.id.isFbidBot() || R) try {
							var k;
							yield o("WAWebBotDisclaimerManager").enterBotTosFlow({
								noticeId: String(E),
								botEntryPoint: L,
								chat: _,
								wamEntryPoint: (k = o("WAWebBotLoggingUtils").getBotEntryPoint(f)) != null ? k : o("WAWebBotLogging").getWamBotEntryPoint(L)
							});
						} catch (e) {
							if (e !== o("WAWebBotDisclaimerManager").TOS_ACCEPTANCE_NOT_SUPPORTED_ERROR) return;
						}
						o("WAWebBotDisclaimerManager").canShowLegacyBotNux(String(E)) || o("WAWebChatGroupUtils").updateCanSend(_), o("WAWebBotUtils").isHatchBot(_.id) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() && o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
							contact: _.contact,
							wid: _.id
						});
					}
					C !== _ && !o("WAWebBotGating").shouldSkipMetaAiChatlistHighlight(_.id, y) && o("WAWebCmd").Cmd.updateChatlistSelection(_);
					var I = a.current, D = {};
					if (a.current = D, p.current = function(e) {
						Object.assign(D, e);
					}, !r("gkx")("26258")) if (g) {
						var x;
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["msgContext.collection length: ", ""])), (x = g.collection) == null ? void 0 : x.length);
					} else o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["chat.msgs length: ", ""])), _.msgs.length);
					var P = g ? g.collection : o("WAWebThreadModelResolver").resolveThreadOrChat(_, y).msgs;
					i.current++;
					var N = i.current, M = function() {
						return N === i.current;
					};
					d.current = f;
					var w = !1, A = function(t, n) {
						var e = n ? n.msg || n.key && o("WAWebMsgCollection").MsgCollection.get(n.key.toString()) : void 0;
						if (n && e && t) {
							var r = t.chat, a = t.renderedMsgsInfo, i = t.visibleMsgOrder;
							if (r && a && i && Object.keys(a).length > 0 && i.length > 0) {
								var l = a[i[0].toString()], s = e.id.toString(), u = Object.entries(a).find(function(e) {
									var t = e[0];
									return t === s;
								}), c = u ? u[1] : null;
								if (c) return {
									wasVisible: !0,
									offset: c.offset
								};
								if (r === o("WAWebFrontendMsgGetters").getChat(e)) return l && e.t < l.t ? {
									wasVisible: !1,
									alignAt: "top"
								} : {
									wasVisible: !1,
									alignAt: "bottom"
								};
							}
						}
						return {
							wasVisible: !1,
							alignAt: "center"
						};
					}, F = function() {
						M() && (w = !0, h(A(I, g)));
					}, O = (g == null || (n = g.msg) == null ? void 0 : n.id) || (g == null ? void 0 : g.key);
					l.current = function(e) {
						if (!(w || !M())) {
							if (!O) {
								F();
								return;
							}
							var t = e.some(function(e) {
								return e.id.equals(O);
							});
							t && F();
						}
					}, _ === C && y !== T && _.pttRecordingSession != null && o("WAWebPttComposerRecordingStopReason").cancelChatRecordingForThreadSwitch(_), o("WAWebChatOpenMetricsStore").startChatOpenMetrics(_), $(_, P, g, y), _.contact.isEnterprise == null && o("WAWebChatGetters").getIsUser(_) && !r("WAWebWid").isPSA(_.contact.id) && !_.id.isBot() && o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
						o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[usync] Getting usync info for contact while opening the chat"]))), o("WAWebGetOrQueryUsyncInfoContactAction").queryUsyncBusiness(_.id);
					}), _.contact.isEnterprise && o("WAWebChatEphemerality").isEphemeralSettingOn(_) && (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[DM] auto-disabling DM due to chat being with CAPI account"]))), o("WAWebUpdateEphemeralSettingChatAction").setChatAsEphemeralityUnsupported(_)), o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(_) && _.setForceDismissAiAgentBlockingBar(!1), o("WAWebLimitSharingUIUtils").maybeOpusProcessChatOnOpen(_);
				}
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), [
			C,
			$,
			T
		]), N = _(function() {
			$(void 0, void 0, void 0, void 0);
		}, [$]), M = _(function(e) {
			o("WAWebResetLastActiveSideNavStateAction").resetLastActiveSideNavStateForChat(e), e === C && (N(), e.setForceDismissAiAgentBlockingBar(!1));
		}, [C, N]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", P), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", M), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", N);
		var w = function(t) {
			var e = t.cmc1, n = t.cmc2, r = t.cmcResult, o = t.newFocusCtx, a = S;
			(a === e || a === n) && (R(r), k(o && (o.msg || o.collection) ? o : E));
		};
		return o("useWAWebListener").useListener(C, "change:cmc:merge", w), o("useWAWebListener").useListener(x !== C ? x : null, "change:cmc:merge", w), r("useWAWebHatchChatOpen")(C), f(function() {
			return {
				chat: C,
				msgCollection: S,
				focusContext: E,
				chatEntryPointRef: d,
				notifyChatRenderedRef: l,
				updateOpenedChatInfoRef: p,
				threadId: T
			};
		}, [
			C,
			S,
			E,
			T
		]);
	}
	l.useCmdChatEvents = y;
}), 98);
