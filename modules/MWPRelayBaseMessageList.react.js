__d("MWPRelayBaseMessageList.react", [
	"Box.react",
	"CometHeroHoldTrigger.react",
	"CometHideableComponentExperiment.react",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"MWChatInteraction",
	"MWPMessageAuthor.react",
	"MWPMessageListJumpToMostRecentMessageButton.react",
	"MWPVisibleMessageContext.react",
	"MWXMessageScrollList.react",
	"MessageForIntegrityCheck",
	"emptyFunction",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"useMWPMessageListData",
	"useMWPMessageListOnScrollToBottom",
	"useMWPMessageListScrollVisibleMessageIntoView",
	"useMWPRelayMessageListJumpToMostRecentMessage",
	"useMergeRefs",
	"useObserveMessagePageLoad",
	"useVisibilityObserver"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u, c, d = s || (s = o("react")), m = s, p = m.useEffect, _ = m.useImperativeHandle, f = m.useRef, g = {
		backgroundColor: {
			backgroundColor: "x1eb86dx",
			$$css: !0
		},
		elevated: {
			zIndex: "x1vjfegm",
			$$css: !0
		},
		list: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			zIndex: "x1ja2u2z",
			$$css: !0
		}
	};
	function h(e, t) {
		var n = o("react-compiler-runtime").c(4), r, a;
		n[0] !== e || n[1] !== t ? (r = function() {
			if (t != null) {
				var n = o("MWChatInteraction").get((u || (u = o("I64"))).to_string(e));
				n != null && o("MWChatInteraction").set((u || (u = o("I64"))).to_string(t), n);
			}
		}, a = [e, t], n[0] = e, n[1] = t, n[2] = r, n[3] = a) : (r = n[2], a = n[3]), p(r, a);
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(32), n = e.getRowRef, a = e.item, i = e.nextRow, l = e.onLatestVisibilityPlaceholderPositionChange, s = e.prevRow, c = e.renderRow, m = e.rowIndexFromBottom, _ = e.scrollAreaRef, h = a.message, y = f(null), C;
		t[0] !== n || t[1] !== h.messageId ? (C = n(h.messageId), t[0] = n, t[1] = h.messageId, t[2] = C) : C = t[2];
		var b = C, v;
		t[3] !== l ? (v = function(t) {
			var e = t.entry, n = t.isElementVisible, r = e.rootBounds;
			l == null || l(!n && r != null && e.boundingClientRect.top >= r.bottom);
		}, t[3] = l, t[4] = v) : v = t[4];
		var S;
		t[5] !== _ ? (S = { root: function() {
			var e;
			return (e = _.current) != null ? e : null;
		} }, t[5] = _, t[6] = S) : S = t[6];
		var R;
		t[7] !== v || t[8] !== S ? (R = {
			onIntersection: v,
			options: S
		}, t[7] = v, t[8] = S, t[9] = R) : R = t[9];
		var L = r("useVisibilityObserver")(R), E = r("useMergeRefs")(b, a.isLatestVisibilityPlaceholder === !0 ? L : null), k, I;
		t[10] !== a.isLatestVisibilityPlaceholder || t[11] !== l ? (k = function() {
			if (a.isLatestVisibilityPlaceholder === !0) return (function() {
				l == null || l(!1);
			});
		}, I = [a.isLatestVisibilityPlaceholder, l], t[10] = a.isLatestVisibilityPlaceholder, t[11] = l, t[12] = k, t[13] = I) : (k = t[12], I = t[13]), p(k, I);
		var T;
		t[14] !== h.displayedContentTypes ? (T = {
			0: {},
			1: { className: "x1vjfegm" }
		}[((u || (u = o("I64"))).to_float(h.displayedContentTypes) === 8) << 0], t[14] = h.displayedContentTypes, t[15] = T) : T = t[15];
		var D = r("CometHideableComponentExperiment.react"), x = "thread_view", $ = !0, P;
		t[16] !== _ ? (P = function() {
			return _.current;
		}, t[16] = _, t[17] = P) : P = t[17];
		var N = g, M = o("MWPMessageAuthor.react").MWPMessageAuthor, w = h.senderId, A = h.threadKey, F = c({
			domElementRef: y,
			message: a.message,
			messageAssociatedData: a.messageAssociatedData,
			nextMessage: i == null ? void 0 : i.message,
			prevMessage: s == null ? void 0 : s.message,
			rowIndexFromBottom: m
		}), O;
		t[18] !== M || t[19] !== h.senderId || t[20] !== h.threadKey || t[21] !== F ? (O = d.jsx(M, {
			contactId: w,
			threadKey: A,
			children: F
		}), t[18] = M, t[19] = h.senderId, t[20] = h.threadKey, t[21] = F, t[22] = O) : O = t[22];
		var B;
		t[23] !== D || t[24] !== P || t[25] !== N.backgroundColor || t[26] !== O ? (B = d.jsx(D, {
			callingSurface: x,
			disableHiding: $,
			scrollport: P,
			unmountXStyle: N.backgroundColor,
			children: O
		}), t[23] = D, t[24] = P, t[25] = N.backgroundColor, t[26] = O, t[27] = B) : B = t[27];
		var W;
		return t[28] !== E || t[29] !== B || t[30] !== T ? (W = d.jsx("div", babelHelpers.extends({}, T, {
			ref: E,
			children: B
		})), t[28] = E, t[29] = B, t[30] = T, t[31] = W) : W = t[31], W;
	}
	function C(e) {
		var t, n = o("react-compiler-runtime").c(44), a = e.checkIsThreadManuallySetAsUnread, i = e.entryPoint, l = e.onJumpButtonChange, s = e.onLatestVisibilityPlaceholderPositionChange, c = e.onPageLoaded, m = e.onScrollToBottom, C = e.onUserScroll, S = e.pageSize, R = e.ref, L = e.renderFooter, E = e.renderHeader, k = e.renderJumpToMostRecentMessageButton, I = e.renderLoadingAnimation, T = e.renderRow, D = e.secondaryThread, x = e.shouldPausePageLoadTracking, $ = e.thread, P = e.transformRows, N = a === void 0 ? r("emptyFunction").thatReturnsFalse : a, M = c === void 0 ? r("emptyFunction") : c, w = x === void 0 ? !1 : x, A = f(), F = r("useMWPMessageListData")($, D, S), O = F.hasNext, B = F.hasPrevious, W = F.isLoadingNext, q = F.isLoadingPrevious, U = F.loadNext, V = F.loadPrevious, H = F.messagesAndAssociatedData, G;
		n[0] !== H || n[1] !== P ? (G = P ? P(H) : H.map(v), n[0] = H, n[1] = P, n[2] = G) : G = n[2];
		var z = G, j = r("useMWPMessageListScrollVisibleMessageIntoView")();
		h($.threadKey, D == null ? void 0 : D.threadKey);
		var K = $.threadKey, Q;
		if (n[3] !== H || n[4] !== $.threadKey) {
			var X;
			n[6] !== $.threadKey ? (X = function(t) {
				var e = t.message;
				return (u || (u = o("I64"))).equal(e.threadKey, $.threadKey) ? o("MessageForIntegrityCheck").prepMessageForIntegrityCheck(e) : null;
			}, n[6] = $.threadKey, n[7] = X) : X = n[7], Q = H.map(X).filter(Boolean), n[3] = H, n[4] = $.threadKey, n[5] = Q;
		} else Q = n[5];
		o("useObserveMessagePageLoad").useObserveMessagePageLoadWithAggregation(K, Q, S, M, w, O), r("useMWPMessageListOnScrollToBottom")(N, i, O, m, A, $);
		var Y = r("useMWPRelayMessageListJumpToMostRecentMessage")(A), J, Z;
		n[8] !== Y ? (J = function() {
			return {
				getScrollAreaElement: r("emptyFunction"),
				jumpToMostRecentMessage: function() {
					Y(!0);
				},
				restoreScrollPosition: r("emptyFunction")
			};
		}, Z = [Y], n[8] = Y, n[9] = J, n[10] = Z) : (J = n[9], Z = n[10]), _(R, J, Z);
		var ee, te;
		n[11] !== O || n[12] !== Y || n[13] !== l ? (te = function() {
			if (l != null) return l({
				alwaysShow: O,
				jumpToMostRecentMessage: Y,
				scrollAreaRef: A
			}), (function() {
				l(null);
			});
		}, ee = [
			l,
			O,
			Y
		], n[11] = O, n[12] = Y, n[13] = l, n[14] = ee, n[15] = te) : (ee = n[14], te = n[15]), p(te, ee);
		var ne = l == null, re = (t = o("MWPVisibleMessageContext.react").useMWPVisibleMessageContext().visibleMessage) == null ? void 0 : t.ref, oe;
		n[16] !== j || n[17] !== s || n[18] !== T ? (oe = function(t, n, r, o) {
			return d.jsx(y, {
				getRowRef: j,
				item: t,
				nextRow: r,
				onLatestVisibilityPlaceholderPositionChange: s,
				prevRow: n,
				renderRow: T,
				rowIndexFromBottom: o,
				scrollAreaRef: A
			}, t.key);
		}, n[16] = j, n[17] = s, n[18] = T, n[19] = oe) : oe = n[19];
		var ae;
		n[20] !== I ? (ae = function(t) {
			var e = t > r("justknobx")._("2674");
			return d.jsxs(d.Fragment, { children: [I == null ? void 0 : I(e), d.jsx(r("CometHeroHoldTrigger.react"), {
				description: "MessageListLoadingMoreItems(Base)",
				hold: !e
			})] });
		}, n[20] = I, n[21] = ae) : ae = n[21];
		var ie;
		n[22] !== O || n[23] !== B || n[24] !== W || n[25] !== q || n[26] !== U || n[27] !== V || n[28] !== C || n[29] !== L || n[30] !== E || n[31] !== z || n[32] !== re || n[33] !== oe || n[34] !== ae ? (ie = d.jsx(r("MWXMessageScrollList.react"), {
			anchoredElement: re,
			getKeyForItem: b,
			hasNext: O,
			hasPrevious: B,
			isLoadingNext: W,
			isLoadingPrevious: q,
			items: z,
			loadNext: U,
			loadPrevious: V,
			onUserScroll: C,
			ref: A,
			renderFooter: L,
			renderHeader: E,
			renderItem: oe,
			renderLoadingAnimation: ae,
			role: "none"
		}), n[22] = O, n[23] = B, n[24] = W, n[25] = q, n[26] = U, n[27] = V, n[28] = C, n[29] = L, n[30] = E, n[31] = z, n[32] = re, n[33] = oe, n[34] = ae, n[35] = ie) : ie = n[35];
		var le;
		n[36] !== O || n[37] !== Y || n[38] !== ne || n[39] !== k ? (le = ne ? d.jsx(r("MWPMessageListJumpToMostRecentMessageButton.react"), {
			alwaysShow: O,
			jumpToMostRecentMessage: Y,
			renderButton: k,
			scrollAreaRef: A
		}) : null, n[36] = O, n[37] = Y, n[38] = ne, n[39] = k, n[40] = le) : le = n[40];
		var se;
		return n[41] !== ie || n[42] !== le ? (se = d.jsxs(r("Box.react"), {
			xstyle: g.list,
			children: [ie, le]
		}), n[41] = ie, n[42] = le, n[43] = se) : se = n[43], se;
	}
	function b(e) {
		return e.key;
	}
	function v(e) {
		return {
			key: e.message.offlineThreadingId,
			message: e.message,
			messageAssociatedData: e.associatedData
		};
	}
	function S(t) {
		var n = o("react-compiler-runtime").c(11), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.renderLoadingAnimation, m = l.thread, p = (u || (u = o("I64"))).equal(m.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)) && o("LSMessagingThreadTypeUtil").isCMSubthread(m.threadType);
		if (p) {
			var _;
			n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = d.jsx(r("CometHeroHoldTrigger.react"), {
				description: "MWChatWaitingForDisplayState-optimisticSubThread",
				hold: !0
			}), n[3] = _) : _ = n[3];
			var f;
			n[4] !== s ? (f = s == null ? void 0 : s(!1), n[4] = s, n[5] = f) : f = n[5];
			var g;
			return n[6] !== f ? (g = d.jsxs(d.Fragment, { children: [_, f] }), n[6] = f, n[7] = g) : g = n[7], g;
		}
		var h;
		return n[8] !== a || n[9] !== i ? (h = d.jsx(C, babelHelpers.extends({}, a, { ref: i })), n[8] = a, n[9] = i, n[10] = h) : h = n[10], h;
	}
	l.default = S;
}), 98);
