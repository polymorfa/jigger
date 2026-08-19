__d("MAWMessageListRow.react", [
	"I64",
	"Int64Hooks",
	"LSMessagingThreadTypeUtil",
	"MAWMsg",
	"MAWSecureAttachmentRenderer.react",
	"MWMessageRow.react",
	"MWPAttachmentDataContext",
	"MWPVisibleMessageContext.react",
	"MWV2MessageActionsVisibility.react",
	"VultureJSDeadComponent.react",
	"isMWNewSearchUXEnabled",
	"qex",
	"react",
	"react-compiler-runtime",
	"shouldUseImageGrouping",
	"useGetMediaGroupInformation",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react"));
	function c(e) {
		var t, n = o("react-compiler-runtime").c(49), a = e.domElementRef, i = e.entryPoint, l = e.lastEbMessageTime, c = e.latestVisibilityPlaceholderRowId, m = e.latestVisibilityPlaceholderTimestampMs, p = e.messageAssociatedData, _ = e.modal, f = e.row, g = e.rowIndexFromBottom, h = e.thread, y = o("MWV2MessageActionsVisibility.react").useStopHoveringRef(), C;
		n[0] !== h.threadType ? (C = o("LSMessagingThreadTypeUtil").isArmadilloSecure(h.threadType), n[0] = h.threadType, n[1] = C) : C = n[1];
		var b = C, v = o("MWPVisibleMessageContext.react").useMWPVisibleMessageContext(), S = v.visibleMessage, R = f.message, L;
		n[2] !== b || n[3] !== R || n[4] !== h.threadKey ? (L = b ? (s || (s = o("I64"))).equal(h.threadKey, R.threadKey) : !1, n[2] = b, n[3] = R, n[4] = h.threadKey, n[5] = L) : L = n[5];
		var E = L, k = !1;
		if (S != null) {
			var I = S.messageId;
			e: switch (S.source) {
				case "Reply":
				case "Pinned":
				case "Bump":
				case "FullScreenMediaViewer": {
					k = I === R.messageId;
					break e;
				}
				case "Search": {
					var T;
					n[6] !== R.messageId || n[7] !== I ? (T = I === R.messageId && r("isMWNewSearchUXEnabled")(), n[6] = R.messageId, n[7] = I, n[8] = T) : T = n[8], k = T;
					break e;
				}
				default: k = !1;
			}
		}
		var D = o("MAWSecureAttachmentRenderer.react").useRenderAttachment(k), x, $;
		n[9] !== h.threadType ? (x = function() {
			return h.threadType;
		}, $ = [h.threadType], n[9] = h.threadType, n[10] = x, n[11] = $) : (x = n[10], $ = n[11]);
		var P = o("Int64Hooks").useMemoInt64(x, $), N = r("useGetMediaGroupInformation")(R, E);
		if (N != null && N.groupId != null && N.isFirstMediaMessageInGroup === !1) return null;
		var M = N == null ? void 0 : N.isMediaGroupLastMessage, w = _ === R.messageId, A;
		n[12] !== a || n[13] !== i || n[14] !== k || n[15] !== E || n[16] !== l || n[17] !== c || n[18] !== m || n[19] !== R || n[20] !== D || n[21] !== f.nextMessage || n[22] !== f.prevMessage || n[23] !== g || n[24] !== y || n[25] !== M || n[26] !== w || n[27] !== h.threadKey || n[28] !== P ? (A = {
			containerThreadKey: h.threadKey,
			domElementRef: a,
			entryPoint: i,
			hasMessageEmphasisRing: k,
			isMediaGroupLastMessage: M,
			isModal: w,
			isSecureMessage: E,
			lastEbMessageTime: l,
			latestVisibilityPlaceholderRowId: c,
			latestVisibilityPlaceholderTimestampMs: m,
			message: R,
			nextMessage: f.nextMessage,
			prevMessage: f.prevMessage,
			renderAttachment: D,
			rowIndexFromBottom: g,
			stopHoveringRef: y,
			threadType: P
		}, n[12] = a, n[13] = i, n[14] = k, n[15] = E, n[16] = l, n[17] = c, n[18] = m, n[19] = R, n[20] = D, n[21] = f.nextMessage, n[22] = f.prevMessage, n[23] = g, n[24] = y, n[25] = M, n[26] = w, n[27] = h.threadKey, n[28] = P, n[29] = A) : A = n[29];
		var F = A;
		if (!((t = r("qex")._("1599")) != null && t)) {
			var O;
			n[30] !== F ? (O = u.jsx(o("MWMessageRow.react").MWMessageRow, babelHelpers.extends({}, F)), n[30] = F, n[31] = O) : O = n[31];
			var B;
			return n[32] !== E || n[33] !== R || n[34] !== O ? (B = u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProvider, {
				isSecureMessage: E,
				message: R,
				children: O
			}), n[32] = E, n[33] = R, n[34] = O, n[35] = B) : B = n[35], B;
		}
		if (p != null) {
			var W = p.attachmentData, q;
			n[36] !== F ? (q = u.jsx(r("VultureJSDeadComponent.react"), {
				name: "MAWMessageAssociatedDataContextProvider",
				children: u.jsx(o("MWMessageRow.react").MWMessageRow, babelHelpers.extends({}, F))
			}), n[36] = F, n[37] = q) : q = n[37];
			var U = q;
			if (d(R)) {
				var V;
				return n[38] !== W || n[39] !== U ? (V = u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderMAW, {
					attachmentData: W,
					children: U
				}), n[38] = W, n[39] = U, n[40] = V) : V = n[40], V;
			} else {
				var H;
				return n[41] !== U || n[42] !== R ? (H = u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderLS, {
					message: R,
					children: U
				}), n[41] = U, n[42] = R, n[43] = H) : H = n[43], H;
			}
		} else {
			r("vulture")("VqFXCNUYGVK9Zjb6fiSmFuNu7OE=");
			var G;
			n[44] !== F ? (G = u.jsx(r("VultureJSDeadComponent.react"), {
				name: "MAWMessageAssociatedDataContextFetchReactionsLSProvider",
				children: u.jsx(o("MWMessageRow.react").MWMessageRow, babelHelpers.extends({}, F))
			}), n[44] = F, n[45] = G) : G = n[45];
			var z;
			return n[46] !== R || n[47] !== G ? (z = u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderLS, {
				message: R,
				children: G
			}), n[46] = R, n[47] = G, n[48] = z) : z = n[48], z;
		}
	}
	function d(e) {
		var t, n;
		if (o("MAWMsg").isMediaMsg(e) && !((t = r("qex")._("60")) != null && t) || o("MAWMsg").isXMAMsg(e) && !((n = r("qex")._("1595")) != null && n) || o("MAWMsg").isReceiverFetchXMAMsg(e) || !o("MAWMsg").isMediaMsg(e) && !o("MAWMsg").isXMAMsg(e)) return !1;
		var a = r("shouldUseImageGrouping")(e, !0);
		return !a;
	}
	l.default = c;
}), 98);
