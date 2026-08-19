__d("MAWMessageList.react", [
	"BaseTheme.react",
	"CometErrorBoundary.react",
	"CometPageletWithDiv.react",
	"EBMessageMetadataQuery",
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"MAWMessageListRow.react",
	"MAWMiActOnActThreadReady",
	"MAWThreadMappingUtils",
	"MWBaseTheme",
	"MWBlockingProtectionContext.react",
	"MWChatInteraction",
	"MWContextBannerWithKeyboardFocus.react",
	"MWEBEntrypointsKillswitch.enum",
	"MWInboxThreadMessagesSpinner.react",
	"MWJumpToMostRecentMessageButton.react",
	"MWLSThreadDisplayContext",
	"MWMessageListJumpButtonContext.react",
	"MWMessageListKeyboardCommandContext.react",
	"MWPActor.react",
	"MWPMessageListColumn.react",
	"MWPMessageListFocusTable.react",
	"MWPRelayBaseMessageList.react",
	"MWPThreadCapabilitiesContext",
	"MWPTypingIndicators.react",
	"MWV2ChatErrorBubble.react",
	"MWV2MessageRowSimple.react",
	"ScreenReaderText.react",
	"WAJids",
	"cr:517",
	"gkx",
	"justknobx",
	"mwpMessageIsReply",
	"qex",
	"react",
	"shouldHideMAWJumpToMostRecentMessageButton",
	"useAsyncReStore",
	"useCheckMessageIntegrityForSecureThread",
	"useMAWOfflineQueueLoadingIndicatorV2",
	"useMWEBBackupState",
	"useMWEBGetUpsellState",
	"useMWMessageRowTheme",
	"useMWPAriaLabelForMessageListGrid",
	"useReStore",
	"withCometPlaceholder"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = s || (s = o("react")), m = s, p = m.useEffect, _ = m.useId, f = m.useMemo, g = m.useRef, h = m.useState;
	function y(e) {
		return d.jsx(r("MWJumpToMostRecentMessageButton.react"), { onPress: e });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t) {
		var n = r("qex")._("1419") === !0;
		return n ? o("MAWThreadMappingUtils").getIntJidOnceInThreadMappingTable(e, t, "MAWMessageList").then(function(e) {
			return (c || (c = o("I64"))).to_string(e);
		}) : o("MAWMiActOnActThreadReady").waitForACTThreadReady(e.tables, t, "MAWMessageList").then(function(e) {
			var t = e.chatJid;
			return o("WAJids").threadIdForChatJid(t);
		});
	}
	async function b(e, t) {
		var n = await e, r = await o("EBMessageMetadataQuery").messageMetadataQueryForMainThreadMAWDeanon({
			direction: "before",
			fetchPolicy: "store-or-network",
			numberOfMessages: 1,
			referenceTimestamp: null,
			threadId: await C(n, t)
		});
		return r.value ? r.value.messages : [];
	}
	function v(e) {
		var t = e.theme, n = t === void 0 ? o("MWBaseTheme").empty : t, a = e.threadKey, i = e.threadType, l = o("MWPTypingIndicators.react").useTypingParticipants(a), s = o("MWPTypingIndicators.react").useAccessibilityText(l);
		return l.length > 0 ? d.jsx(r("BaseTheme.react"), {
			config: n,
			children: d.jsx(r("MWV2MessageRowSimple.react"), { children: d.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnGrow, { children: [d.jsx("div", {
				"aria-live": "polite",
				children: d.jsx(r("ScreenReaderText.react"), { text: s })
			}), d.jsx(o("MWPTypingIndicators.react").MWPTypingIndicators, {
				threadKey: a,
				threadType: i
			})] }) })
		}) : null;
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = o("withCometPlaceholder").withCometPlaceholder(v, null, "MAWTypingIndicators");
	function R(e) {
		var t = -1;
		for (var n of e) if (n.message.isVisibilityPlaceholder === !0) {
			var r = Number((c || (c = o("I64"))).to_string(n.message.timestampMs));
			r > t && (t = r);
		}
		return t;
	}
	function L(e) {
		for (var t = e.length - 1; t >= 0; t--) {
			var n = e[t];
			if (n.message.isVisibilityPlaceholder === !0) return n.message.messageId;
		}
		return null;
	}
	function E(e) {
		var t = e.checkMessageIntegrity, n = e.cutoverOpenThread, a = e.entryPoint, i = e.isAboveLatestVisibilityPlaceholder, l = e.isSecureThread, s = e.lastEbMessageTime, u = e.modal, m = e.onLatestVisibilityPlaceholderPositionChange, p = e.onScrollToBottom, _ = e.outstandingOfflineQueue, h = e.pageSize, C = e.ref, b = e.theme, v = e.thread, E = o("MWPActor.react").useActor(), k = o("MWMessageListJumpButtonContext.react").useMWMessageListJumpButtonChange(), I = r("justknobx")._("2100"), T = r("useMWEBBackupState")({ entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_GAP_UI }), D = r("useMWEBGetUpsellState")(), x = D.isRestoreUpsellsDismissed, $ = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), P = r("gkx")("1706") === !0, N = i && r("shouldHideMAWJumpToMostRecentMessageButton")(P, T, n, x, $), M = g(-1), w = g(null), A = f(function() {
			return P ? function(e) {
				var t = L(e);
				return M.current = R(e), w.current = t, e.map(function(e) {
					return {
						isLatestVisibilityPlaceholder: t != null && e.message.messageId === t,
						key: e.message.offlineThreadingId,
						message: e.message,
						messageAssociatedData: e.associatedData
					};
				});
			} : void 0;
		}, [P]), F = function() {
			return M.current === -1 ? null : M.current;
		};
		return d.jsx(r("MWPRelayBaseMessageList.react"), {
			entryPoint: a,
			onJumpButtonChange: I && !N && k != null ? k : void 0,
			onLatestVisibilityPlaceholderPositionChange: m,
			onPageLoaded: function(n, r, a, i) {
				l && t(n, r, a, i);
				var e = o("MWChatInteraction").getInteractionTraceForThreadKey((c || (c = o("I64"))).to_string(v.threadKey));
				e != null && e.addMarkerPoint("page_loaded", "AppTiming", void 0, {
					page_index: i,
					page_size: a,
					total_number_of_messages: r.length
				});
			},
			onScrollToBottom: p,
			pageSize: h,
			ref: C,
			renderFooter: function() {
				return d.jsx(S, {
					theme: b,
					threadKey: v.threadKey,
					threadType: v.threadType
				});
			},
			renderHeader: function() {
				return d.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnGrowJustified, { children: [d.jsx(o("MWPMessageListColumn.react").MWPMessageListColumnVerticalRhythm, { height: 20 }), d.jsx(r("MWContextBannerWithKeyboardFocus.react"), {
					threadKey: v.threadKey,
					threadType: v.threadType
				})] });
			},
			renderJumpToMostRecentMessageButton: N ? void 0 : y,
			renderLoadingAnimation: function(t) {
				return d.jsx(r("MWInboxThreadMessagesSpinner.react"), { vcIgnore: t });
			},
			renderRow: function(t) {
				var e = t.domElementRef, n = t.message, i = t.messageAssociatedData, l = t.nextMessage, m = t.prevMessage, p = t.rowIndexFromBottom, _ = r("mwpMessageIsReply")(n), f = (c || (c = o("I64"))).equal(n.senderId, E);
				return d.jsx(r("CometErrorBoundary.react"), {
					fallback: function() {
						return d.jsx(r("MWV2ChatErrorBubble.react"), {
							isOutgoing: f,
							isReply: _
						});
					},
					children: d.jsx(r("MAWMessageListRow.react"), {
						domElementRef: e,
						entryPoint: a,
						lastEbMessageTime: s,
						latestVisibilityPlaceholderRowId: w.current,
						latestVisibilityPlaceholderTimestampMs: F(),
						messageAssociatedData: i,
						modal: u,
						row: {
							message: n,
							nextMessage: l,
							prevMessage: m
						},
						rowIndexFromBottom: p,
						thread: v
					})
				});
			},
			secondaryThread: n,
			shouldPausePageLoadTracking: _,
			thread: v,
			transformRows: A
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(t) {
		var a = t.cutoverOpenThread, i = t.entryPoint, l = t.isAboveLatestVisibilityPlaceholder, s = t.onLatestVisibilityPlaceholderPositionChange, m = t.onScrollToBottom, g = t.ref, y = t.thread, C = (e || (e = r("useReStore")))(), v = r("useAsyncReStore")(), S = r("useMWPAriaLabelForMessageListGrid")(y), R = r("useMWMessageRowTheme")(), L = h(""), k = L[0], I = L[1], T = _(), D = h([]), x = D[0], $ = D[1];
		p(function() {
			if (!(c || (c = o("I64"))).equal(y.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC))) {
				var e = !1;
				return b(v, y.threadKey).then(function(t) {
					e || $(t);
				}).catch(function(t) {
					if (!e) {
						var n = r("FBLogger")("messenger_web");
						if (t instanceof Error) {
							n.catching(t).warn("Unable to get last EB message timestamp");
							return;
						}
						n.warn("Unable to get last EB message timestamp");
					}
				}), function() {
					e = !0;
				};
			}
		}, [
			v,
			y.authorityLevel,
			y.threadKey
		]);
		var P = r("useMWEBBackupState")({ entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_GAP_UI }), N = f(function() {
			return P === 2 ? null : x.length > 0 && x[0].sortOrderMs != null ? (c || (c = o("I64"))).of_string(x[0].sortOrderMs) : (c || (c = o("I64"))).zero;
		}, [P, x]), M = r("useCheckMessageIntegrityForSecureThread")(C, y.threadKey, y.threadType), w = r("useMAWOfflineQueueLoadingIndicatorV2")(!1, y), A = o("LSMessagingThreadTypeUtil").isArmadilloSecure(y.threadType), F = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), O = F === "ChatTab", B = r("justknobx")._("2575"), W = r("gkx")("14315") ? 8 : r("justknobx")._("2038"), q = O ? W : B, U = d.jsx(E, {
			checkMessageIntegrity: M,
			cutoverOpenThread: a,
			entryPoint: i,
			isAboveLatestVisibilityPlaceholder: l,
			isSecureThread: A,
			lastEbMessageTime: N,
			modal: k,
			onLatestVisibilityPlaceholderPositionChange: s,
			onScrollToBottom: m,
			outstandingOfflineQueue: w,
			pageSize: q,
			ref: g,
			theme: R,
			thread: y
		}), V = n("cr:517") == null ? U : d.jsx(n("cr:517"), {
			threadKey: y.threadKey,
			children: U
		});
		return d.jsx("div", {
			className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d",
			children: d.jsx(o("CometPageletWithDiv.react").Placeholder, {
				className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d",
				fallback: null,
				name: "MWV2MessageList",
				children: d.jsx(o("MWPThreadCapabilitiesContext").Provider, {
					thread: y,
					children: d.jsx(r("MWBlockingProtectionContext.react").Provider, { children: d.jsx(r("MWPMessageListFocusTable.react"), {
						ariaLabel: S,
						id: T,
						modal: k,
						setModal: I,
						children: d.jsx(r("MWMessageListKeyboardCommandContext.react"), {
							id: T,
							children: V
						})
					}) })
				})
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = k;
}), 98);
