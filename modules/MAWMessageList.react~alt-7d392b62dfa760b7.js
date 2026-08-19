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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(11), n = e.theme, a = e.threadKey, i = e.threadType, l = n === void 0 ? o("MWBaseTheme").empty : n, s = o("MWPTypingIndicators.react").useTypingParticipants(a), u = o("MWPTypingIndicators.react").useAccessibilityText(s);
		if (s.length > 0) {
			var c;
			t[0] !== u ? (c = d.jsx("div", {
				"aria-live": "polite",
				children: d.jsx(r("ScreenReaderText.react"), { text: u })
			}), t[0] = u, t[1] = c) : c = t[1];
			var m;
			t[2] !== a || t[3] !== i ? (m = d.jsx(o("MWPTypingIndicators.react").MWPTypingIndicators, {
				threadKey: a,
				threadType: i
			}), t[2] = a, t[3] = i, t[4] = m) : m = t[4];
			var p;
			t[5] !== c || t[6] !== m ? (p = d.jsx(r("MWV2MessageRowSimple.react"), { children: d.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnGrow, { children: [c, m] }) }), t[5] = c, t[6] = m, t[7] = p) : p = t[7];
			var _;
			return t[8] !== p || t[9] !== l ? (_ = d.jsx(r("BaseTheme.react"), {
				config: l,
				children: p
			}), t[8] = p, t[9] = l, t[10] = _) : _ = t[10], _;
		} else return null;
	}
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
		var t = o("react-compiler-runtime").c(35), n = e.checkMessageIntegrity, a = e.cutoverOpenThread, i = e.entryPoint, l = e.isAboveLatestVisibilityPlaceholder, s = e.isSecureThread, u = e.lastEbMessageTime, m = e.modal, p = e.onLatestVisibilityPlaceholderPositionChange, _ = e.onScrollToBottom, f = e.outstandingOfflineQueue, h = e.pageSize, C = e.ref, b = e.theme, v = e.thread, E = o("MWPActor.react").useActor(), I = o("MWMessageListJumpButtonContext.react").useMWMessageListJumpButtonChange(), T = r("justknobx")._("2100"), D;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (D = { entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_GAP_UI }, t[0] = D) : D = t[0];
		var x = r("useMWEBBackupState")(D), $ = r("useMWEBGetUpsellState")(), P = $.isRestoreUpsellsDismissed, N = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), M = r("gkx")("1706") === !0, w = l && r("shouldHideMAWJumpToMostRecentMessageButton")(M, x, a, P, N), A = g(-1), F = g(null), O;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (O = M ? function(e) {
			var t = L(e);
			return A.current = R(e), F.current = t, e.map(function(e) {
				return {
					isLatestVisibilityPlaceholder: t != null && e.message.messageId === t,
					key: e.message.offlineThreadingId,
					message: e.message,
					messageAssociatedData: e.associatedData
				};
			});
		} : void 0, t[1] = O) : O = t[1];
		var B = O, W;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			return A.current === -1 ? null : A.current;
		}, t[2] = W) : W = t[2];
		var q = W, U = T && !w && I != null ? I : void 0, V;
		t[3] !== n || t[4] !== s || t[5] !== v.threadKey ? (V = function(t, r, a, i) {
			s && n(t, r, a, i);
			var e = o("MWChatInteraction").getInteractionTraceForThreadKey((c || (c = o("I64"))).to_string(v.threadKey));
			e != null && e.addMarkerPoint("page_loaded", "AppTiming", void 0, {
				page_index: i,
				page_size: a,
				total_number_of_messages: r.length
			});
		}, t[3] = n, t[4] = s, t[5] = v.threadKey, t[6] = V) : V = t[6];
		var H;
		t[7] !== b || t[8] !== v.threadKey || t[9] !== v.threadType ? (H = function() {
			return d.jsx(S, {
				theme: b,
				threadKey: v.threadKey,
				threadType: v.threadType
			});
		}, t[7] = b, t[8] = v.threadKey, t[9] = v.threadType, t[10] = H) : H = t[10];
		var G;
		t[11] !== v.threadKey || t[12] !== v.threadType ? (G = function() {
			return d.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnGrowJustified, { children: [d.jsx(o("MWPMessageListColumn.react").MWPMessageListColumnVerticalRhythm, { height: 20 }), d.jsx(r("MWContextBannerWithKeyboardFocus.react"), {
				threadKey: v.threadKey,
				threadType: v.threadType
			})] });
		}, t[11] = v.threadKey, t[12] = v.threadType, t[13] = G) : G = t[13];
		var z = w ? void 0 : y, j;
		t[14] !== E || t[15] !== i || t[16] !== u || t[17] !== m || t[18] !== v ? (j = function(t) {
			var e = t.domElementRef, n = t.message, a = t.messageAssociatedData, l = t.nextMessage, s = t.prevMessage, p = t.rowIndexFromBottom, _ = r("mwpMessageIsReply")(n), f = (c || (c = o("I64"))).equal(n.senderId, E);
			return d.jsx(r("CometErrorBoundary.react"), {
				fallback: function() {
					return d.jsx(r("MWV2ChatErrorBubble.react"), {
						isOutgoing: f,
						isReply: _
					});
				},
				children: d.jsx(r("MAWMessageListRow.react"), {
					domElementRef: e,
					entryPoint: i,
					lastEbMessageTime: u,
					latestVisibilityPlaceholderRowId: F.current,
					latestVisibilityPlaceholderTimestampMs: q(),
					messageAssociatedData: a,
					modal: m,
					row: {
						message: n,
						nextMessage: l,
						prevMessage: s
					},
					rowIndexFromBottom: p,
					thread: v
				})
			});
		}, t[14] = E, t[15] = i, t[16] = u, t[17] = m, t[18] = v, t[19] = j) : j = t[19];
		var K;
		return t[20] !== a || t[21] !== i || t[22] !== p || t[23] !== _ || t[24] !== f || t[25] !== h || t[26] !== C || t[27] !== U || t[28] !== V || t[29] !== H || t[30] !== G || t[31] !== z || t[32] !== j || t[33] !== v ? (K = d.jsx(r("MWPRelayBaseMessageList.react"), {
			entryPoint: i,
			onJumpButtonChange: U,
			onLatestVisibilityPlaceholderPositionChange: p,
			onPageLoaded: V,
			onScrollToBottom: _,
			pageSize: h,
			ref: C,
			renderFooter: H,
			renderHeader: G,
			renderJumpToMostRecentMessageButton: z,
			renderLoadingAnimation: k,
			renderRow: j,
			secondaryThread: a,
			shouldPausePageLoadTracking: f,
			thread: v,
			transformRows: B
		}), t[20] = a, t[21] = i, t[22] = p, t[23] = _, t[24] = f, t[25] = h, t[26] = C, t[27] = U, t[28] = V, t[29] = H, t[30] = G, t[31] = z, t[32] = j, t[33] = v, t[34] = K) : K = t[34], K;
	}
	function k(e) {
		return d.jsx(r("MWInboxThreadMessagesSpinner.react"), { vcIgnore: e });
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(t) {
		var a = o("react-compiler-runtime").c(44), i = t.cutoverOpenThread, l = t.entryPoint, s = t.isAboveLatestVisibilityPlaceholder, m = t.onLatestVisibilityPlaceholderPositionChange, f = t.onScrollToBottom, g = t.ref, y = t.thread, C = (e || (e = r("useReStore")))(), v = r("useAsyncReStore")(), S = r("useMWPAriaLabelForMessageListGrid")(y), R = r("useMWMessageRowTheme")(), L = h(""), k = L[0], I = L[1], T = _(), D;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (D = [], a[0] = D) : D = a[0];
		var x = h(D), $ = x[0], P = x[1], N, M;
		a[1] !== v || a[2] !== y.authorityLevel || a[3] !== y.threadKey ? (N = function() {
			if (!(c || (c = o("I64"))).equal(y.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC))) {
				var e = !1;
				return b(v, y.threadKey).then(function(t) {
					e || P(t);
				}).catch(function(t) {
					if (!e) {
						var n = r("FBLogger")("messenger_web");
						if (t instanceof Error) {
							n.catching(t).warn("Unable to get last EB message timestamp");
							return;
						}
						n.warn("Unable to get last EB message timestamp");
					}
				}), (function() {
					e = !0;
				});
			}
		}, M = [
			v,
			y.authorityLevel,
			y.threadKey
		], a[1] = v, a[2] = y.authorityLevel, a[3] = y.threadKey, a[4] = N, a[5] = M) : (N = a[4], M = a[5]), p(N, M);
		var w;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (w = { entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_GAP_UI }, a[6] = w) : w = a[6];
		var A = r("useMWEBBackupState")(w), F;
		e: {
			if (A === 2) {
				F = null;
				break e;
			} else if ($.length > 0 && $[0].sortOrderMs != null) {
				var O;
				a[7] !== $[0].sortOrderMs ? (O = (c || (c = o("I64"))).of_string($[0].sortOrderMs), a[7] = $[0].sortOrderMs, a[8] = O) : O = a[8], F = O;
				break e;
			}
			F = (c || (c = o("I64"))).zero;
		}
		var B = F, W = r("useCheckMessageIntegrityForSecureThread")(C, y.threadKey, y.threadType), q = r("useMAWOfflineQueueLoadingIndicatorV2")(!1, y), U;
		a[9] !== y.threadType ? (U = o("LSMessagingThreadTypeUtil").isArmadilloSecure(y.threadType), a[9] = y.threadType, a[10] = U) : U = a[10];
		var V = U, H = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), G = H === "ChatTab", z;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (z = r("justknobx")._("2575"), a[11] = z) : z = a[11];
		var j = z, K;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (K = r("gkx")("14315") ? 8 : r("justknobx")._("2038"), a[12] = K) : K = a[12];
		var Q = K, X = G ? Q : j, Y;
		a[13] !== W || a[14] !== i || a[15] !== l || a[16] !== s || a[17] !== V || a[18] !== B || a[19] !== k || a[20] !== m || a[21] !== f || a[22] !== q || a[23] !== X || a[24] !== g || a[25] !== R || a[26] !== y ? (Y = d.jsx(E, {
			checkMessageIntegrity: W,
			cutoverOpenThread: i,
			entryPoint: l,
			isAboveLatestVisibilityPlaceholder: s,
			isSecureThread: V,
			lastEbMessageTime: B,
			modal: k,
			onLatestVisibilityPlaceholderPositionChange: m,
			onScrollToBottom: f,
			outstandingOfflineQueue: q,
			pageSize: X,
			ref: g,
			theme: R,
			thread: y
		}), a[13] = W, a[14] = i, a[15] = l, a[16] = s, a[17] = V, a[18] = B, a[19] = k, a[20] = m, a[21] = f, a[22] = q, a[23] = X, a[24] = g, a[25] = R, a[26] = y, a[27] = Y) : Y = a[27];
		var J = Y, Z;
		a[28] !== J || a[29] !== y.threadKey ? (Z = n("cr:517") == null ? J : d.jsx(n("cr:517"), {
			threadKey: y.threadKey,
			children: J
		}), a[28] = J, a[29] = y.threadKey, a[30] = Z) : Z = a[30];
		var ee = Z, te;
		a[31] === Symbol.for("react.memo_cache_sentinel") ? (te = { className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d" }, a[31] = te) : te = a[31];
		var ne;
		a[32] === Symbol.for("react.memo_cache_sentinel") ? (ne = "x78zum5 xdt5ytf x1iyjqo2 x5yr21d", a[32] = ne) : ne = a[32];
		var re;
		a[33] !== T || a[34] !== ee ? (re = d.jsx(r("MWMessageListKeyboardCommandContext.react"), {
			id: T,
			children: ee
		}), a[33] = T, a[34] = ee, a[35] = re) : re = a[35];
		var oe;
		a[36] !== S || a[37] !== T || a[38] !== k || a[39] !== re ? (oe = d.jsx(r("MWBlockingProtectionContext.react").Provider, { children: d.jsx(r("MWPMessageListFocusTable.react"), {
			ariaLabel: S,
			id: T,
			modal: k,
			setModal: I,
			children: re
		}) }), a[36] = S, a[37] = T, a[38] = k, a[39] = re, a[40] = oe) : oe = a[40];
		var ae;
		return a[41] !== oe || a[42] !== y ? (ae = d.jsx("div", babelHelpers.extends({}, te, { children: d.jsx(o("CometPageletWithDiv.react").Placeholder, {
			className: ne,
			fallback: null,
			name: "MWV2MessageList",
			children: d.jsx(o("MWPThreadCapabilitiesContext").Provider, {
				thread: y,
				children: oe
			})
		}) })), a[41] = oe, a[42] = y, a[43] = ae) : ae = a[43], ae;
	}
	l.default = I;
}), 98);
