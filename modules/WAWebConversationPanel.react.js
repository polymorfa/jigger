__d("WAWebConversationPanel.react", [
	"WAFilteredCatch",
	"WAPromiseRaceAbort",
	"WAWebAnimationGroupItem.react",
	"WAWebAppContext.react",
	"WAWebAttachmentMenuLogger",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiThreadControlFab.react",
	"WAWebBotUtils",
	"WAWebCappingWarningBannerLoadable",
	"WAWebCaptureMediaDrawerLoadable",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCmd",
	"WAWebComposeBox.react",
	"WAWebConversationBackground.react",
	"WAWebConversationDeprecatedLidChatBanner.react",
	"WAWebConversationDeprecatedLidChatUtils",
	"WAWebConversationMsgs.react",
	"WAWebConversationPanelBanner.react",
	"WAWebConversationSpam.react",
	"WAWebConversationSpamUtils",
	"WAWebDrawerManager",
	"WAWebForwardActionUserJourneyLogger",
	"WAWebFrontendChatGetters",
	"WAWebGetUserMediaErrors",
	"WAWebGroupHistoryBundleInfoContextProvider.react",
	"WAWebGroupType",
	"WAWebGuidePopup.react",
	"WAWebHeader.react",
	"WAWebHeroInteraction.react",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardTabUtils",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMetaAiChatNullStateLoadable",
	"WAWebModalManager",
	"WAWebMultiSelectBar.react",
	"WAWebNewsletterSuspendedConversationPanelBody.react",
	"WAWebPrepareMessageSendingAction",
	"WAWebSideNavButtonsActivityModel",
	"WAWebSignupGating",
	"WAWebSignupLoadingSpinner.react",
	"WAWebStateUtils",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebUimUie.react",
	"WAWebUseMaybeInsertBizBotDisclosure",
	"WAWebUseMaybeRequestWelcomeMessage",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumProductArea",
	"react",
	"react-compiler-runtime",
	"useWAWebAiChatOpenMetrics",
	"useWAWebBotChatOpenMetrics",
	"useWAWebBroadcastThreadOpenMetrics",
	"useWAWebCappingWarningBanner.react",
	"useWAWebChatOpenMetrics",
	"useWAWebChatThreadWallpaperMetrics",
	"useWAWebCommunityNux",
	"useWAWebConversationPanelActionListeners",
	"useWAWebConversationPanelCanCompose",
	"useWAWebConversationPanelChatActionListeners",
	"useWAWebConversationPanelDragHandlers",
	"useWAWebConversationPanelEphemeralNux",
	"useWAWebConversationPanelFiller.react",
	"useWAWebConversationPanelMessageSelection",
	"useWAWebConversationPanelMetrics",
	"useWAWebConversationPanelOpenChat",
	"useWAWebDynamicModesCacheWarmup",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebNewsletterOpenMetrics",
	"useWAWebNewsletterPrivacyBanner",
	"useWAWebShouldShowMetaAiNullState",
	"useWAWebShowCommunitySubjectSyncIssue",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = u.useState;
	function f(e) {
		var t, n, a = o("react-compiler-runtime").c(162), i = e.chat, l = e.chatEntryPoint, u = e.focusCtx, c = e.groupMetadata, m = e.msgCollection, f = e.threadId, C = p(null), b = _(!1), v = b[0], S = b[1], R;
		a[0] !== v ? (R = function(t) {
			t !== v && S(t);
		}, a[0] = v, a[1] = R) : R = a[1];
		var L = R, E;
		a[2] !== i ? (E = o("WAWebConversationDeprecatedLidChatUtils").getLidDeprecatedInfo(i), a[2] = i, a[3] = E) : E = a[3];
		var k = E;
		r("useWAWebShowCommunitySubjectSyncIssue")(i), r("useWAWebConversationPanelOpenChat")(i), r("useWAWebCommunityNux")(i), r("useWAWebConversationPanelEphemeralNux")(i);
		var I = o("WAWebChatGetters").getIsNewsletter(i) ? "channel-thread" : "chat", T = o("WAWebChatGetters").getIsNewsletter(i) ? (t = i.newsletterMetadata) == null ? void 0 : t.size : (n = i.groupMetadata) == null ? void 0 : n.participants.length, D = o("WAWebChatGetters").getIsNewsletter(i) ? i.id : void 0, x;
		a[4] !== i.groupMetadata ? (x = i.groupMetadata == null ? void 0 : o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupType").getGroupTypeFromGroupMetadata(i.groupMetadata)), a[4] = i.groupMetadata, a[5] = x) : x = a[5];
		var $ = o("WAWebBotUtils").isHatchBot(i.id) ? o("WAWebWamEnumProductArea").PRODUCT_AREA.AI_HATCH : void 0, P;
		a[6] !== T || a[7] !== D || a[8] !== x || a[9] !== $ ? (P = {
			groupSize: T,
			channelWid: D,
			typeOfGroup: x,
			navigationDestinationProductArea: $
		}, a[6] = T, a[7] = D, a[8] = x, a[9] = $, a[10] = P) : P = a[10];
		var N;
		a[11] !== I || a[12] !== P ? (N = {
			surface: I,
			extras: P
		}, a[11] = I, a[12] = P, a[13] = N) : N = a[13], o("WAWebTimeSpentLoggingNavigation").useTsNavigation(N);
		var M;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			var e;
			return (e = C.current) == null ? void 0 : e.getRenderedMessageCount();
		}, a[14] = M) : M = a[14], r("useWAWebConversationPanelMetrics")(i, M);
		var w;
		a[15] !== i || a[16] !== l ? (w = {
			chat: i,
			chatEntryPoint: l
		}, a[15] = i, a[16] = l, a[17] = w) : w = a[17], o("useWAWebNewsletterOpenMetrics").useNewsletterOpenMetrics(w);
		var A;
		a[18] !== i || a[19] !== l ? (A = {
			chat: i,
			chatEntryPoint: l
		}, a[18] = i, a[19] = l, a[20] = A) : A = a[20], o("useWAWebBotChatOpenMetrics").useBotChatOpenMetrics(A);
		var F;
		a[21] !== i || a[22] !== l ? (F = {
			chat: i,
			chatEntryPoint: l
		}, a[21] = i, a[22] = l, a[23] = F) : F = a[23], o("useWAWebAiChatOpenMetrics").useWAWebAiChatOpenMetrics(F), o("useWAWebDynamicModesCacheWarmup").useWAWebDynamicModesCacheWarmup(i), o("useWAWebChatOpenMetrics").useChatOpenMetrics(i), o("useWAWebChatThreadWallpaperMetrics").useChatThreadWallpaperMetrics(i), o("useWAWebBroadcastThreadOpenMetrics").useBroadcastThreadOpenMetrics(i), r("useWAWebConversationPanelChatActionListeners")();
		var O;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (O = [
			"isReadOnly",
			"isAnnounceGrpRestrict",
			"newsletterMetadata"
		], a[24] = O) : O = a[24], o("useWAWebModelValues").useModelValues(i, O);
		var B = r("useWAWebNewsletterPrivacyBanner")(i), W = r("useWAWebConversationPanelCanCompose")(i), q = W[0], U = W[1];
		o("WAWebUseMaybeInsertBizBotDisclosure").useMaybeInsertBizBotDisclosure(i);
		var V;
		a[25] !== q || a[26] !== i ? (V = function() {
			return !q && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) && o("WAWebConversationSpamUtils").shouldShowSpamPanel(i);
		}, a[25] = q, a[26] = i, a[27] = V) : V = a[27];
		var H = _(V), G = H[0], z = H[1], j = r("useWAWebConversationPanelMessageSelection")(i.msgs), K = j.handleCancelSelection, Q = j.handleMessageSelect, X = j.handleSelectMessages, Y = j.selectable, J = j.selectedMessages, Z = j.selectionMode, ee;
		a[28] !== q || a[29] !== K || a[30] !== f ? (ee = {
			canCompose: q,
			onDragEnter: K,
			threadId: f
		}, a[28] = q, a[29] = K, a[30] = f, a[31] = ee) : ee = a[31];
		var te = r("useWAWebConversationPanelDragHandlers")(i, ee), ne = te[0], re = te[1], oe, ae, ie;
		a[32] === Symbol.for("react.memo_cache_sentinel") ? (oe = function(t) {
			var e;
			return (e = C.current) == null ? void 0 : e.setScrollBottom(t);
		}, ae = function() {
			var e;
			return (e = C.current) == null ? void 0 : e.getScrollBottom();
		}, ie = function(t) {
			var e;
			return (e = C.current) == null ? void 0 : e.onComposeHeightChange(t);
		}, a[32] = oe, a[33] = ae, a[34] = ie) : (oe = a[32], ae = a[33], ie = a[34]);
		var le;
		a[35] !== q || a[36] !== Y ? (le = {
			canCompose: q,
			selectable: Y,
			setScrollBottom: oe,
			getScrollBottom: ae,
			onComposeHeightChange: ie
		}, a[35] = q, a[36] = Y, a[37] = le) : le = a[37];
		var se = r("useWAWebConversationPanelFiller.react")(le), ue = se.filler, ce = se.handleComposeHeightChange, de = se.msgPanelRef, me;
		a[38] === Symbol.for("react.memo_cache_sentinel") ? (me = function() {
			var e;
			(e = C.current) == null || e.focus();
		}, a[38] = me) : me = a[38];
		var pe = me, _e = p(null), fe = o("WAWebAppContext.react").useAppContext(), ge = fe.rightDrawerOpen, he = r("useWAWebUIM")(), ye = r("useWAWebUnmountSignal")(), Ce, be;
		a[39] === Symbol.for("react.memo_cache_sentinel") ? (Ce = function() {
			return function() {
				_e.current == null || _e.current(), o("WAWebSideNavButtonsActivityModel").getLastActiveButton() == null && o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
			};
		}, be = [], a[39] = Ce, a[40] = be) : (Ce = a[39], be = a[40]), d(Ce, be);
		var ve;
		a[41] === Symbol.for("react.memo_cache_sentinel") ? (ve = { onFocus: pe }, a[41] = ve) : ve = a[41], r("useWAWebConversationPanelActionListeners")(ve), o("WAWebUseMaybeRequestWelcomeMessage").useMaybeRequestWelcomeMessage(i);
		var Se = r("useWAWebShouldShowMetaAiNullState")(i, f), Re = Se[0], Le = Se[1], Ee = r("useWAWebCappingWarningBanner.react")(i), ke = Ee[0], Ie = Ee[1], Te;
		a[42] === Symbol.for("react.memo_cache_sentinel") ? (Te = ["change:suspended"], a[42] = Te) : Te = a[42];
		var De;
		a[43] !== i ? (De = function() {
			var e;
			return o("WAWebChatGetters").getIsNewsletter(i) && ((e = i.newsletterMetadata) == null ? void 0 : e.suspended) === !0;
		}, a[43] = i, a[44] = De) : De = a[44];
		var xe = r("useWAWebEventTargetValue")(i.newsletterMetadata, Te, De), $e;
		a[45] === Symbol.for("react.memo_cache_sentinel") ? ($e = ["change:geosuspended"], a[45] = $e) : $e = a[45];
		var Pe;
		a[46] !== i ? (Pe = function() {
			var e;
			return o("WAWebChatGetters").getIsNewsletter(i) && ((e = i.newsletterMetadata) == null ? void 0 : e.geosuspended) === !0;
		}, a[46] = i, a[47] = Pe) : Pe = a[47];
		var Ne = r("useWAWebEventTargetValue")(i.newsletterMetadata, $e, Pe), Me;
		a[48] === Symbol.for("react.memo_cache_sentinel") ? (Me = function(t) {
			var e;
			(e = C.current) == null || e.onPageUpDown(t);
		}, a[48] = Me) : Me = a[48];
		var we = Me, Ae, Fe;
		if (Y) {
			var Oe = J, Be;
			a[49] !== i || a[50] !== K || a[51] !== Z || a[52] !== Oe ? (Be = s.jsx(o("WAWebMultiSelectBar.react").MultiSelectBar, {
				chat: i,
				selectedMessages: Oe,
				noSortOnForward: !1,
				onCancel: K,
				entryPoint: o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.CONVERSATION_PANEL,
				mode: Z
			}), a[49] = i, a[50] = K, a[51] = Z, a[52] = Oe, a[53] = Be) : Be = a[53];
			var We;
			a[54] !== K || a[55] !== Be ? (We = s.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "MultiSelect",
				escapable: !0,
				requestDismiss: K,
				children: Be
			}), a[54] = K, a[55] = Be, a[56] = We) : We = a[56], Fe = We;
			var qe;
			a[57] !== ge ? (qe = {
				0: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht" },
				1: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht x1lun4ml x18b5jzi xbogo7e" }
			}[!!ge << 0], a[57] = ge, a[58] = qe) : qe = a[58];
			var Ue;
			a[59] !== qe ? (Ue = s.jsx("footer", babelHelpers.extends({}, qe)), a[59] = qe, a[60] = Ue) : Ue = a[60], Ae = Ue;
		} else if (q) {
			var Ve;
			a[61] !== v || a[62] !== i || a[63] !== ne || a[64] !== ce || a[65] !== f ? (Ve = s.jsx(o("WAWebComposeBox.react").ComposeBox, {
				chat: i,
				threadId: f,
				ref: ne,
				canShowSpamPanel: v,
				onComposeHeightChange: ce,
				onPageUpDown: we
			}), a[61] = v, a[62] = i, a[63] = ne, a[64] = ce, a[65] = f, a[66] = Ve) : Ve = a[66], Ae = Ve;
		} else {
			var He = U != null ? U : B, Ge = null;
			if (v && G && o("WAWebFrontendChatGetters").getShouldAppearInList(i) && i.msgs.length > 0) {
				var ze;
				a[67] !== i ? (ze = function() {
					z(!1), o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(i);
				}, a[67] = i, a[68] = ze) : ze = a[68];
				var je;
				a[69] === Symbol.for("react.memo_cache_sentinel") ? (je = function() {
					return z(!1);
				}, a[69] = je) : je = a[69];
				var Ke;
				a[70] !== i || a[71] !== ze ? (Ke = s.jsx(r("WAWebAnimationGroupItem.react"), { children: s.jsx(r("WAWebConversationSpam.react"), {
					chat: i,
					onClickNotSpam: ze,
					onClickDismissSpam: je
				}) }), a[70] = i, a[71] = ze, a[72] = Ke) : Ke = a[72], Ge = Ke;
			}
			var Qe;
			a[73] !== He || a[74] !== ge || a[75] !== Ge ? (Qe = He != null && s.jsxs("footer", babelHelpers.extends({ "data-testid": "compose-box" }, {
				0: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht" },
				1: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht x1lun4ml x18b5jzi xbogo7e" }
			}[!!ge << 0], { children: [Ge, s.jsx("div", {
				"data-testid": "block-message",
				className: "x9f619 x78zum5 x6s0dn4 xl56j7k x122xwht x1f6kntn x1fc57z9 xhslqc4 x2b8uid x1h3rtpe xyinxu5 x1g2khh7 xwn43p0 x1x5flf6",
				children: He
			})] })), a[73] = He, a[74] = ge, a[75] = Ge, a[76] = Qe) : Qe = a[76], Ae = Qe;
		}
		var Xe;
		if (!q) {
			var Ye;
			a[77] === Symbol.for("react.memo_cache_sentinel") ? (Ye = function() {
				var e;
				C == null || (e = C.current) == null || e.focus();
			}, a[77] = Ye) : Ye = a[77];
			var Je;
			a[78] !== i ? (Je = s.jsx(o("WAWebComposeBox.react").PlaceholderComposeBox, {
				chat: i,
				handleFocus: Ye
			}), a[78] = i, a[79] = Je) : Je = a[79], Xe = Je;
		}
		var Ze;
		a[80] !== i || a[81] !== f || a[82] !== he || a[83] !== ye ? (Ze = function(t) {
			var e = t.onMenuComplete, n = t.questionReplyQuotedMessage, a = t.questionType, l = t.threadId, u = o("WAWebMediaCapture").start({
				type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
			}), c = u.asyncStream, d = u.disposeStream;
			_e.current = d, r("WAPromiseRaceAbort")(c, ye).then(function(t) {
				t && (o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerMid(s.jsx(o("WAWebCaptureMediaDrawerLoadable").CaptureMediaDrawerLoadable, {
					chat: o("WAWebStateUtils").unproxy(i),
					stream: t,
					disposeStream: _e.current,
					onCaptureSent: function() {
						e(!0), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(i, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
					},
					onCancel: function() {
						o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(i, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
					},
					onClose: y,
					questionType: a,
					questionReplyQuotedMessage: n,
					threadId: l != null ? l : f
				}), {
					transition: "slide-up",
					uim: he,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				}));
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, h)).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, g)).finally(function() {
				o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(i);
			});
		}, a[80] = i, a[81] = f, a[82] = he, a[83] = ye, a[84] = Ze) : Ze = a[84];
		var et = Ze;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_capture_media", et);
		var tt;
		a[85] !== k.isLidDeprecated || a[86] !== k.latestLid ? (tt = k.isLidDeprecated ? s.jsx(r("WAWebConversationDeprecatedLidChatBanner.react"), { latestLid: k.latestLid }, "deprecated-lid") : null, a[85] = k.isLidDeprecated, a[86] = k.latestLid, a[87] = tt) : tt = a[87];
		var nt = tt, rt;
		a[88] !== X ? (rt = function() {
			o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInContextMenu(), X();
		}, a[88] = X, a[89] = rt) : rt = a[89];
		var ot = rt, at;
		a[90] !== X ? (at = function() {
			o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInMoreMenu(), X();
		}, a[90] = X, a[91] = at) : at = a[91];
		var it = at, lt;
		a[92] !== i ? (lt = o("WAWebSignupGating").isSignupAGMEnabled() ? s.jsx(r("WAWebSignupLoadingSpinner.react"), { chat: i }, "signup-loading") : null, a[92] = i, a[93] = lt) : lt = a[93];
		var st;
		a[94] !== nt || a[95] !== lt ? (st = [nt, lt], a[94] = nt, a[95] = lt, a[96] = st) : st = a[96];
		var ut = st, ct;
		a[97] !== i || a[98] !== ut || a[99] !== u || a[100] !== L || a[101] !== K || a[102] !== Q || a[103] !== ot || a[104] !== m || a[105] !== e.notifyChatRendered || a[106] !== e.updateOpenedChatInfo || a[107] !== Y || a[108] !== J || a[109] !== f ? (ct = {
			ref: C,
			chat: i,
			selectable: Y,
			onMessageSelect: Q,
			onCancelSelectMessages: K,
			msgCollection: m,
			onSelectMessages: ot,
			focusCtx: u,
			threadId: f,
			selectedMessages: J,
			notifyChatRendered: e.notifyChatRendered,
			updateOpenedChatInfo: e.updateOpenedChatInfo,
			updateCanShowSpamPanel: L,
			bottomBanners: ut
		}, a[97] = i, a[98] = ut, a[99] = u, a[100] = L, a[101] = K, a[102] = Q, a[103] = ot, a[104] = m, a[105] = e.notifyChatRendered, a[106] = e.updateOpenedChatInfo, a[107] = Y, a[108] = J, a[109] = f, a[110] = ct) : ct = a[110];
		var dt = ct, mt;
		a[111] !== dt ? (mt = s.jsx(r("WAWebHeroInteraction.react"), {
			description: "ConversationMsgs",
			enableHoldTrigger: !0,
			policy: r("WAWebInteractionTracePolicy").LOAD_MESSAGES,
			children: function(t, n) {
				return s.jsx("div", {
					ref: t,
					className: "x5yr21d",
					children: s.jsx(r("WAWebConversationMsgs.react"), babelHelpers.extends({}, dt, { interaction: n }))
				});
			}
		}), a[111] = dt, a[112] = mt) : mt = a[112];
		var pt = mt, _t;
		if (a[113] !== i.newsletterMetadata || a[114] !== pt || a[115] !== Ne || a[116] !== xe) {
			var ft, gt, ht, yt;
			_t = xe ? s.jsx(r("WAWebNewsletterSuspendedConversationPanelBody.react"), {
				isGeosuspended: Ne,
				isAdminOrOwner: ((ft = (gt = i.newsletterMetadata) == null ? void 0 : gt.iAmOwner()) != null ? ft : !1) || ((ht = (yt = i.newsletterMetadata) == null ? void 0 : yt.iAmAdmin()) != null ? ht : !1)
			}) : pt, a[113] = i.newsletterMetadata, a[114] = pt, a[115] = Ne, a[116] = xe, a[117] = _t;
		} else _t = a[117];
		var Ct = _t, bt;
		a[118] !== q || a[119] !== i ? (bt = q && o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(i) && !o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(i) && o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() && !o("WAWebBizAiAgentGating").isSmartComposerWebEnabled(), a[118] = q, a[119] = i, a[120] = bt) : bt = a[120];
		var vt = bt, St;
		a[121] !== e.showDoodle || a[122] !== e.wallpaper ? (St = s.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: e.wallpaper,
			showDoodle: e.showDoodle
		}), a[121] = e.showDoodle, a[122] = e.wallpaper, a[123] = St) : St = a[123];
		var Rt;
		a[124] !== i || a[125] !== it || a[126] !== Y || a[127] !== f ? (Rt = s.jsx(o("WAWebHeader.react").ConversationHeaderWithErrorBoundary, {
			chat: i,
			onSelectMessages: it,
			selectable: Y,
			threadId: f
		}), a[124] = i, a[125] = it, a[126] = Y, a[127] = f, a[128] = Rt) : Rt = a[128];
		var Lt;
		a[129] !== i || a[130] !== c ? (Lt = s.jsx(r("WAWebConversationPanelBanner.react"), {
			chat: i,
			groupMetadata: c
		}), a[129] = i, a[130] = c, a[131] = Lt) : Lt = a[131];
		var Et;
		a[132] === Symbol.for("react.memo_cache_sentinel") ? (Et = "x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh", a[132] = Et) : Et = a[132];
		var kt;
		a[133] !== i || a[134] !== Ct || a[135] !== Le || a[136] !== Re || a[137] !== f ? (kt = Re ? s.jsx(o("WAWebMetaAiChatNullStateLoadable").WAWebMetaAiChatNullStateLoadable, {
			chat: i,
			onDismiss: Le,
			threadId: f
		}) : Ct, a[133] = i, a[134] = Ct, a[135] = Le, a[136] = Re, a[137] = f, a[138] = kt) : kt = a[138];
		var It;
		a[139] !== re || a[140] !== de || a[141] !== kt ? (It = s.jsx("div", babelHelpers.extends({
			className: Et,
			ref: de
		}, re, {
			"data-testid": "conversation-panel-body",
			children: kt
		})), a[139] = re, a[140] = de, a[141] = kt, a[142] = It) : It = a[142];
		var Tt;
		a[143] !== i || a[144] !== vt ? (Tt = vt && s.jsx(o("WAWebBizAiThreadControlFab.react").WAWebBizAiThreadControlFab, { chat: i }), a[143] = i, a[144] = vt, a[145] = Tt) : Tt = a[145];
		var Dt;
		a[146] !== Ie || a[147] !== ke ? (Dt = ke && s.jsx("div", {
			className: "xo1ph6p x2lah0s",
			children: s.jsx(o("WAWebCappingWarningBannerLoadable").CappingWarningBannerLoadable, { onClose: Ie })
		}), a[146] = Ie, a[147] = ke, a[148] = Dt) : Dt = a[148];
		var xt;
		a[149] !== Fe ? (xt = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-up",
			children: Fe
		}), a[149] = Fe, a[150] = xt) : xt = a[150];
		var $t;
		return a[151] !== Ae || a[152] !== ue || a[153] !== Xe || a[154] !== St || a[155] !== Rt || a[156] !== Lt || a[157] !== It || a[158] !== Tt || a[159] !== Dt || a[160] !== xt ? ($t = s.jsxs(r("WAWebGroupHistoryBundleInfoContextProvider.react"), { children: [
			St,
			Rt,
			Lt,
			It,
			ue,
			Tt,
			Dt,
			Ae,
			Xe,
			xt
		] }), a[151] = Ae, a[152] = ue, a[153] = Xe, a[154] = St, a[155] = Rt, a[156] = Lt, a[157] = It, a[158] = Tt, a[159] = Dt, a[160] = xt, a[161] = $t) : $t = a[161], $t;
	}
	function g() {
		var e;
		o("WAWebModalManager").ModalManager.open(s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
			messaging: e.Messaging.CAMERA_MISSING,
			type: e.GuidePopupType.GUIDE_NONE,
			featureSurface: e.FeatureSurface.PHOTO_CAPTURE
		}));
	}
	function h() {
		var e;
		o("WAWebModalManager").ModalManager.open(s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
			messaging: e.Messaging.CAMERA_FAIL,
			type: e.GuidePopupType.GUIDE_UNBLOCK,
			featureSurface: e.FeatureSurface.PHOTO_CAPTURE
		}));
	}
	function y() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
	}
	l.default = f;
}), 98);
