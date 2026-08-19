__d("MWMessageRow.react", [
	"BaseView.react",
	"CometErrorBoundary.react",
	"CometHeroInteractionWithDiv.react",
	"CometPageletWithDiv.react",
	"HeroInteractionIgnoreWithDiv.react",
	"I64",
	"Int64Hooks",
	"InteractionTracing",
	"InteractionTracingMetrics",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"MNLSXMALayoutType",
	"MWCMThreadTypes.react",
	"MWGroupBlockingProtectionUtils",
	"MWMediaRenderInteractionIDContext",
	"MWMessageEditContext.react",
	"MWMessageListAttachmentContainer.react",
	"MWMessageListDisplayContext.react",
	"MWMessageRowAdminMessage.react",
	"MWMessageRowAttachment.react",
	"MWMessageRowBody.react",
	"MWMessageRowFooter.react",
	"MWMessageRowGrouping",
	"MWMessageRowHeader.react",
	"MWMessageRowMissingMessagesIndicator.react",
	"MWMessageRowUnreadMessagesIndicator.react",
	"MWPActor.react",
	"MWPAttachmentDataContext",
	"MWPMessageListColumn.react",
	"MWPMessageListRowWithKeyboardInteractions.react",
	"MWPMessageLoggingUtil",
	"MWPMessageRowCalculateStatus.react",
	"MWPThreadCapabilitiesContext",
	"MWShowMessagePromptPopoverContext.react",
	"MWSupportTranslationsContext.react",
	"MWThreadViewAuthoritativeRenderQpl",
	"MWThreadViewMediaRenderQpl",
	"MWThreadViewMediaRenderQplV2",
	"MWV2ChatErrorBubble.react",
	"MWV2MessageRowSimple.react",
	"MWV2MessageStartOfGroupContent.react",
	"MWXMAUtils",
	"getMWMessageRowE2EEPlatform",
	"mwCMIsAnyCMThread",
	"mwpMessageIsReply",
	"react",
	"react-compiler-runtime",
	"useHeroErrorMetadata",
	"useMWMessageRowAddInteractionTracingMetadata",
	"useMWMessageRowTheme",
	"useMWPEditMessageDeemphasizer",
	"useNextNonAdminMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["message", "nextMessage"], s = ["rowIndexFromBottom"], u = ["rowIndexFromBottom"], c, d, m, p = c || (c = o("react")), _ = c, f = _.memo, g = _.startTransition, h = _.useCallback, y = _.useEffect, C = _.useId, b = _.useState, v = { adminMessageAttachment: {
		boxSizing: "x9f619",
		maxWidth: "x4ndzw7",
		minWidth: "xwj5yc2",
		paddingBottom: "xdvlbce",
		paddingInlineStart: "x106a9eq",
		paddingInlineEnd: "x1xnnf8n",
		paddingLeft: null,
		paddingRight: null,
		paddingTop: "x1nn3v0j",
		$$css: !0
	} }, S = p.memo(r("MWPMessageRowCalculateStatus.react"));
	function R(t) {
		var n = o("react-compiler-runtime").c(10), r, a, i;
		n[0] !== t ? (r = t.message, a = t.nextMessage, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a, n[3] = i) : (r = n[1], a = n[2], i = n[3]);
		var l;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"senderId",
			"timestampMs",
			"isAdminMessage"
		], n[4] = l) : l = n[4];
		var s = o("Int64Hooks").usePickInt64(a != null ? a : r, l), u = a == null ? null : s, c;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (c = [
			"senderId",
			"isUnsent",
			"threadKey",
			"primarySortKey",
			"timestampMs",
			"messageId",
			"isAdminMessage",
			"sendStatusV2",
			"groupId",
			"groupIndex",
			"groupSize",
			"displayedContentTypes"
		], n[5] = c) : c = n[5];
		var d = o("Int64Hooks").usePickInt64(r, c), m;
		return n[6] !== u || n[7] !== i || n[8] !== d ? (m = p.jsx(S, babelHelpers.extends({
			message: d,
			nextMessage: u
		}, i)), n[6] = u, n[7] = i, n[8] = d, n[9] = m) : m = n[9], m;
	}
	function L(e) {
		var t = e.containerThreadKey, n = e.domElementRef, a = e.entryPoint, i = e.hasMessageEmphasisRing, l = e.isMediaGroupLastMessage, s = e.isModal, u = e.isSecureMessage, c = e.lastEbMessageTime, _ = e.lastReadWatermarkTimestampMs, f = e.latestVisibilityPlaceholderRowId, S = e.latestVisibilityPlaceholderTimestampMs, L = e.message, E = e.navigateToRouteForMediaViewer, I = e.nextMessage, T = e.onRenderError, D = e.prevMessage, $ = e.renderAttachment, P = e.renderBelowBubbleContent, N = e.shouldRenderUnreadIndicator, M = e.stopHoveringRef, w = e.threadType, A = e.useReactionsV2, F = A === void 0 ? !1 : A, O = o("MWMessageListDisplayContext.react").useMWMessageListDisplayContext(), B = O.isPinnedMessageList, W = O.isStandardMessageList, q = o("MWPActor.react").useActor(), U = L.isVisibilityPlaceholder === !0, V = (I == null ? void 0 : I.isVisibilityPlaceholder) === !0, H = r("MWMessageRowGrouping")(B, L, D, I), G = H.isFirstMessageInGroup, z = H.isLastMessageInGroup, j = r("mwCMIsAnyCMThread")(w), K = o("MWCMThreadTypes.react").isBroadcastThread(w), Q = o("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(w), X = o("LSMessagingThreadTypeUtil").isGroup(w), Y = o("LSMessagingThreadTypeUtil").isOpenGroupFnFThread(w), J = o("LSMessagingThreadTypeUtil").isArmadilloSecure(w), Z = r("mwpMessageIsReply")(L), ee = o("MWPThreadCapabilitiesContext").useMWPThreadCapabilitiesContext(), te = ee.seenCountV2Enabled, ne = !L.isUnsent && te, re = ne && !Q && !o("LSMessagingThreadTypeUtil").isCMSubthread(w) && !o("MWCMThreadTypes.react").isStandardCMThread(w), oe = o("MWGroupBlockingProtectionUtils").useMWIsMessageSentByBlockedContact(L.senderId, L.threadKey), ae = !B && (d || (d = o("I64"))).equal(L.senderId, q), ie = r("useNextNonAdminMessage")(L, I), le = ie == null || l === !0, se = !ae, ue = b(!1), ce = ue[0], de = ue[1], me = b(!1), pe = me[0], _e = me[1], fe = h(function(e) {
			g(function() {
				_e(e);
			});
		}, []), ge = h(function(e) {
			g(function() {
				de(e);
			});
		}, []), he = C(), ye = b(!1), Ce = ye[0], be = ye[1], ve = r("useMWMessageRowTheme")(), Se, Re = o("MWPAttachmentDataContext").useMWPGetAttachments(L), Le = Re.length > 0 && Re[0].xmaLayoutType != null && (d || (d = o("I64"))).equal(Re[0].xmaLayoutType, (m || (m = o("LSIntEnum"))).ofNumber(r("MNLSXMALayoutType").STANDARD_DXMA)), Ee = Re.length > 0 && Re[0].xmaLayoutType != null && (d || (d = o("I64"))).equal(Re[0].xmaLayoutType, (m || (m = o("LSIntEnum"))).ofNumber(r("MNLSXMALayoutType").SHARED_STACK)), ke = Re.length > 0 && o("MWXMAUtils").containsAnyOfXmaTemplateTypes(Re[0].xmaDataclass, ["XMSGXmaWatchPartySoccerEventTemplateData"]), Ie = r("useMWPEditMessageDeemphasizer")(), Te = o("MWThreadViewMediaRenderQpl").useMediaRenderQpl(L, w), De = Te.mediaRenderQpl, xe = Te.messageRowRef, $e = Re.length > 0 ? Re[0] : null, Pe = o("MWThreadViewMediaRenderQplV2").useMediaRenderQplV2(L, w, $e), Ne = Pe.interactionId, Me = o("MWThreadViewAuthoritativeRenderQpl").useAuthoritativeRenderQpl(L, w), we = Me.endSuccess, Ae = Me.qplFlow;
		y(function() {
			De == null || De.addPoint("render-message-row"), Ne != null && r("InteractionTracingMetrics").addMarkerPoint(Ne, "render-message-row", "AppTiming"), Ae == null || Ae.addPoint("render-message-row-text");
			var e = r("getMWMessageRowE2EEPlatform")({
				isSecureMessage: u,
				isVisibilityPlaceholder: U,
				offlineThreadingId: L.offlineThreadingId
			});
			e != null && (De == null || De.addAnnotations({ string: { e2ee_platform: e } }), Ne != null && r("InteractionTracingMetrics").addMetadata(Ne, "e2ee_platform", e), Ae == null || Ae.addAnnotations({ string: { e2ee_platform: e } })), we();
		}, [
			u,
			U,
			De,
			Ne,
			Ae,
			we,
			L.offlineThreadingId
		]), L.isAdminMessage ? Se = p.jsx(r("MWMessageRowAdminMessage.react"), {
			domElementRef: n,
			isDialogOpened: Ce,
			isFirstMessageInGroup: G,
			isFocused: ce,
			isModal: s,
			message: L,
			messageDomID: he,
			nextMessage: I,
			outgoing: ae,
			prevMessage: D,
			setFocusedInTransition: ge,
			setHoveredInTransition: fe,
			setIsDialogOpened: be,
			stopHoveringRef: M
		}) : Le || Ee || ke ? Se = p.jsx(o("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap, {
			centered: !0,
			children: p.jsx(r("MWV2MessageRowSimple.react"), { children: p.jsx(r("BaseView.react"), {
				xstyle: Ie,
				children: ke ? p.jsx("div", {
					"data-testid": void 0,
					role: "none",
					children: p.jsx(r("MWMessageRowAttachment.react"), {
						attachments: Re,
						connectBottom: !1,
						connectTop: !1,
						hasMessageEmphasisRing: i,
						hasText: !1,
						isSearchPluginAttachment: !1,
						isSecureMessage: u,
						mediaRenderQpl: De,
						message: L,
						navigateToRouteForMediaViewer: E,
						nextMessage: I,
						outgoing: ae,
						prevMessage: D,
						renderAttachment: $
					})
				}) : p.jsx(r("MWMessageListAttachmentContainer.react"), {
					connectBottom: !1,
					connectTop: !1,
					mediaRenderQpl: De,
					message: L,
					outgoing: ae,
					xstyle: v.adminMessageAttachment
				})
			}) })
		}) : Se = p.jsx(o("MWShowMessagePromptPopoverContext.react").MWShowMessagePromptPopoverContextProvider, { children: p.jsx(o("MWMessageEditContext.react").MWMessageEditContextProvider, { children: p.jsx(o("MWSupportTranslationsContext.react").MWSupportTranslationsContextProvider, { children: p.jsxs(p.Fragment, { children: [
			N === !0 && p.jsx(r("MWMessageRowUnreadMessagesIndicator.react"), {
				isOpenGroupThread: Y,
				lastReadWatermarkTimestampMs: _,
				threadKey: L.threadKey
			}),
			G && W ? p.jsx(r("MWV2MessageStartOfGroupContent.react"), {
				message: L,
				prevMessage: D
			}) : null,
			p.jsx(R, {
				isBroadcastChannel: Q,
				isBroadcastThread: K,
				isLargeGroup: !1,
				isSecureGroupThread: J && X,
				isSecureThread: J,
				message: L,
				nextMessage: ie,
				children: function(r) {
					return p.jsx(k, {
						containerThreadKey: t,
						domElementRef: n,
						focused: ce,
						hasClickState: re,
						hasMessageEmphasisRing: i,
						hovered: pe,
						incoming: se,
						isBroadcastThread: K,
						isCMThread: j,
						isDialogOpened: Ce,
						isFirstMessageInGroup: G,
						isFromBlockedContact: oe,
						isGroupThread: X,
						isLastMessage: le,
						isLastMessageInGroup: z,
						isMediaGroupLastMessage: l,
						isModal: s,
						isSecureMessage: u,
						isVisibilityPlaceholder: U,
						mediaRenderQpl: De,
						message: L,
						messageDomID: he,
						navigateToRouteForMediaViewer: E,
						nextMessage: I,
						onRenderError: T,
						outgoing: ae,
						prevMessage: D,
						renderAttachment: $,
						renderBelowBubbleContent: P,
						setFocusedInTransition: ge,
						setHoveredInTransition: fe,
						setIsDialogOpened: be,
						shouldUseReactionsV2: F,
						status: r,
						stopHoveringRef: M,
						theme: ve,
						threadType: w
					});
				}
			})
		] }) }) }) });
		var Fe = p.jsx("div", {
			ref: xe,
			role: "none",
			children: p.jsxs(x, {
				isReply: Z,
				message: L,
				offlineAttachmentId: Re.length > 0 ? Re[0].offlineAttachmentId : void 0,
				outgoing: ae,
				children: [Se, J && (U !== !0 || V !== !0) && p.jsx(r("MWMessageRowMissingMessagesIndicator.react"), {
					entryPoint: a,
					isSecureMessage: u,
					isVisibilityPlaceholder: U,
					lastEbMessageTime: c,
					latestVisibilityPlaceholderRowId: f,
					latestVisibilityPlaceholderTimestampMs: S,
					message: L,
					nextIsVisibilityPlaceholder: V,
					nextMessage: I,
					prevMessage: D
				})]
			})
		}), Oe = Fe;
		return Ne != null && (Oe = p.jsx(r("CometHeroInteractionWithDiv.react"), {
			interactionDesc: "MWMessageRow",
			interactionUUID: Ne,
			pageletName: "MessageRow",
			children: Oe
		})), p.jsx(o("MWMediaRenderInteractionIDContext").MWMediaRenderInteractionIDContext.Provider, {
			value: Ne,
			children: Ne != null ? p.jsx(r("HeroInteractionIgnoreWithDiv.react"), { children: Oe }) : Oe
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = o("react-compiler-runtime").c(61), n = e.containerThreadKey, a = e.domElementRef, i = e.focused, l = e.hasClickState, s = e.hasMessageEmphasisRing, u = e.hovered, c = e.incoming, d = e.isBroadcastThread, m = e.isCMThread, _ = e.isDialogOpened, f = e.isFirstMessageInGroup, g = e.isFromBlockedContact, h = e.isGroupThread, y = e.isLastMessage, C = e.isLastMessageInGroup, b = e.isMediaGroupLastMessage, v = e.isModal, S = e.isSecureMessage, R = e.isVisibilityPlaceholder, L = e.mediaRenderQpl, E = e.message, k = e.messageDomID, I = e.navigateToRouteForMediaViewer, T = e.nextMessage, D = e.onRenderError, x = e.outgoing, $ = e.prevMessage, P = e.renderAttachment, N = e.renderBelowBubbleContent, M = e.setFocusedInTransition, w = e.setHoveredInTransition, A = e.setIsDialogOpened, F = e.shouldUseReactionsV2, O = e.status, B = e.stopHoveringRef, W = e.theme, q = e.threadType, U;
		t[0] !== m || t[1] !== f || t[2] !== h || t[3] !== C || t[4] !== R || t[5] !== E || t[6] !== x ? (U = R !== !0 && p.jsx(r("MWMessageRowHeader.react"), {
			isCMThread: m,
			isFirstMessageInGroup: f,
			isGroupThread: h,
			isLastMessageInGroup: C,
			message: E,
			outgoing: x
		}), t[0] = m, t[1] = f, t[2] = h, t[3] = C, t[4] = R, t[5] = E, t[6] = x, t[7] = U) : U = t[7];
		var V;
		t[8] !== n || t[9] !== i || t[10] !== l || t[11] !== s || t[12] !== u || t[13] !== c || t[14] !== _ || t[15] !== f || t[16] !== h || t[17] !== C || t[18] !== v || t[19] !== S || t[20] !== R || t[21] !== L || t[22] !== E || t[23] !== I || t[24] !== T || t[25] !== D || t[26] !== $ || t[27] !== P || t[28] !== N || t[29] !== F || t[30] !== q ? (V = p.jsx(r("MWMessageRowBody.react"), {
			containerThreadKey: n,
			focused: i,
			hasClickState: l,
			hasMessageEmphasisRing: s,
			hovered: u,
			incoming: c,
			isDialogOpened: _,
			isFirstMessageInGroup: f,
			isGroupThread: h,
			isLastMessageInGroup: C,
			isModal: v,
			isSecureMessage: S,
			isVisibilityPlaceholder: R,
			mediaRenderQpl: L,
			message: E,
			navigateToRouteForMediaViewer: I,
			nextMessage: T,
			onRenderError: D,
			prevMessage: $,
			renderAttachment: P,
			renderBelowBubbleContent: N,
			shouldUseReactionsV2: F,
			threadType: q
		}), t[8] = n, t[9] = i, t[10] = l, t[11] = s, t[12] = u, t[13] = c, t[14] = _, t[15] = f, t[16] = h, t[17] = C, t[18] = v, t[19] = S, t[20] = R, t[21] = L, t[22] = E, t[23] = I, t[24] = T, t[25] = D, t[26] = $, t[27] = P, t[28] = N, t[29] = F, t[30] = q, t[31] = V) : V = t[31];
		var H;
		t[32] !== l || t[33] !== c || t[34] !== d || t[35] !== g || t[36] !== y || t[37] !== b || t[38] !== S || t[39] !== R || t[40] !== E || t[41] !== T || t[42] !== x || t[43] !== O ? (H = R !== !0 && p.jsx(r("MWMessageRowFooter.react"), {
			hasClickState: l,
			incoming: c,
			isBroadcastThread: d,
			isFromBlockedContact: g,
			isLastMessage: y,
			isSecureMessage: S,
			message: E,
			nextMessage: b === !0 ? void 0 : T,
			outgoing: x,
			status: O
		}), t[32] = l, t[33] = c, t[34] = d, t[35] = g, t[36] = y, t[37] = b, t[38] = S, t[39] = R, t[40] = E, t[41] = T, t[42] = x, t[43] = O, t[44] = H) : H = t[44];
		var G;
		return t[45] !== a || t[46] !== i || t[47] !== _ || t[48] !== v || t[49] !== E || t[50] !== k || t[51] !== x || t[52] !== M || t[53] !== w || t[54] !== A || t[55] !== B || t[56] !== U || t[57] !== V || t[58] !== H || t[59] !== W ? (G = p.jsxs(r("MWPMessageListRowWithKeyboardInteractions.react"), {
			domElementRef: a,
			isDialogOpened: _,
			isFocused: i,
			isModal: v,
			message: E,
			messageDomID: k,
			outgoing: x,
			setFocused: M,
			setHovered: w,
			setIsDialogOpened: A,
			stopHoveringRef: B,
			theme: W,
			children: [
				U,
				V,
				H
			]
		}), t[45] = a, t[46] = i, t[47] = _, t[48] = v, t[49] = E, t[50] = k, t[51] = x, t[52] = M, t[53] = w, t[54] = A, t[55] = B, t[56] = U, t[57] = V, t[58] = H, t[59] = W, t[60] = G) : G = t[60], G;
	}
	var k = f(E), I = f(function(e) {
		return e.isSecureMessage ? p.jsx(L, babelHelpers.extends({}, e)) : p.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderLS, {
			message: e.message,
			children: p.jsx(L, babelHelpers.extends({}, e))
		});
	});
	function T(e) {
		var t = o("react-compiler-runtime").c(5), n, a;
		t[0] !== e ? (a = e.rowIndexFromBottom, n = babelHelpers.objectWithoutPropertiesLoose(e, s), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]), r("useMWMessageRowAddInteractionTracingMetadata")(n.message, a);
		var i;
		return t[3] !== n ? (i = p.jsx(I, babelHelpers.extends({}, n)), t[3] = n, t[4] = i) : i = t[4], i;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(6), n, r;
		t[0] !== e ? (r = e.rowIndexFromBottom, n = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = n, t[2] = r) : (n = t[1], r = t[2]);
		var a;
		return t[3] !== n || t[4] !== r ? (a = p.jsx(o("CometPageletWithDiv.react").Div, {
			name: "MWMessageRow",
			children: p.jsx(T, babelHelpers.extends({}, n, { rowIndexFromBottom: r }))
		}), t[3] = n, t[4] = r, t[5] = a) : a = t[5], a;
	}
	function x(e) {
		var t = e.children, n = e.isReply, a = e.message, i = e.offlineAttachmentId, l = e.outgoing, s = o("MWPMessageLoggingUtil").getInteractionUUIDForMessage({
			messageId: a.messageId,
			optimisticAttachmentId: i,
			optimisticMessageId: a.offlineThreadingId
		}), u = r("useHeroErrorMetadata")(), c = h(function(e, t) {
			var n = s != null ? r("InteractionTracing").getPendingInteractionById(s) : null;
			if (!(s == null || n == null)) {
				var o = e == null ? void 0 : e.message;
				if ((e == null ? void 0 : e.messageFormat) != null) {
					var a = 0;
					o = e.messageFormat.replace(/%s/g, function(t) {
						return e.messageParams != null ? e.messageParams[a++] : "unknown";
					});
				}
				n.addAnnotation("failType", "failLSSInteraction"), n.failTrace(t + " - " + o, !0);
			}
		}, [s]);
		return p.jsx(r("CometErrorBoundary.react"), {
			augmentError: u,
			description: "MWMessageRow.ErrorBoundary",
			fallback: function() {
				return p.jsx(r("MWV2ChatErrorBubble.react"), {
					isOutgoing: l,
					isReply: n
				});
			},
			onError: c,
			children: t
		});
	}
	x.displayName = x.name + " [from " + i.id + "]", l.MWMessageRow = D;
}), 98);
