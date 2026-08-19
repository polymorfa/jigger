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
	"shouldUseImageGrouping",
	"useGetMediaGroupInformation",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.domElementRef, a = e.entryPoint, i = e.lastEbMessageTime, l = e.latestVisibilityPlaceholderRowId, c = e.latestVisibilityPlaceholderTimestampMs, m = e.messageAssociatedData, p = e.modal, _ = e.row, f = e.rowIndexFromBottom, g = e.thread, h = o("MWV2MessageActionsVisibility.react").useStopHoveringRef(), y = o("LSMessagingThreadTypeUtil").isArmadilloSecure(g.threadType), C = o("MWPVisibleMessageContext.react").useMWPVisibleMessageContext(), b = C.visibleMessage, v = _.message, S = y ? (s || (s = o("I64"))).equal(g.threadKey, v.threadKey) : !1, R = !1;
		if (b != null) {
			var L = b.messageId;
			switch (b.source) {
				case "Reply":
				case "Pinned":
				case "Bump":
				case "FullScreenMediaViewer":
					R = L === v.messageId;
					break;
				case "Search":
					R = L === v.messageId && r("isMWNewSearchUXEnabled")();
					break;
				default: R = !1;
			}
		}
		var E = o("MAWSecureAttachmentRenderer.react").useRenderAttachment(R), k = o("Int64Hooks").useMemoInt64(function() {
			return g.threadType;
		}, [g.threadType]), I = r("useGetMediaGroupInformation")(v, S);
		if (I != null && I.groupId != null && I.isFirstMediaMessageInGroup === !1) return null;
		var T = {
			containerThreadKey: g.threadKey,
			domElementRef: n,
			entryPoint: a,
			hasMessageEmphasisRing: R,
			isMediaGroupLastMessage: I == null ? void 0 : I.isMediaGroupLastMessage,
			isModal: p === v.messageId,
			isSecureMessage: S,
			lastEbMessageTime: i,
			latestVisibilityPlaceholderRowId: l,
			latestVisibilityPlaceholderTimestampMs: c,
			message: v,
			nextMessage: _.nextMessage,
			prevMessage: _.prevMessage,
			renderAttachment: E,
			rowIndexFromBottom: f,
			stopHoveringRef: h,
			threadType: k
		};
		if (!((t = r("qex")._("1599")) != null && t)) return u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProvider, {
			isSecureMessage: S,
			message: v,
			children: u.jsx(o("MWMessageRow.react").MWMessageRow, babelHelpers.extends({}, T))
		});
		if (m != null) {
			var D = m.attachmentData, x = u.jsx(r("VultureJSDeadComponent.react"), {
				name: "MAWMessageAssociatedDataContextProvider",
				children: u.jsx(o("MWMessageRow.react").MWMessageRow, babelHelpers.extends({}, T))
			});
			return d(v) ? u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderMAW, {
				attachmentData: D,
				children: x
			}) : u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderLS, {
				message: v,
				children: x
			});
		} else return r("vulture")("VqFXCNUYGVK9Zjb6fiSmFuNu7OE="), u.jsx(o("MWPAttachmentDataContext").MWPAttachmentDataContextProviderLS, {
			message: v,
			children: u.jsx(r("VultureJSDeadComponent.react"), {
				name: "MAWMessageAssociatedDataContextFetchReactionsLSProvider",
				children: u.jsx(o("MWMessageRow.react").MWMessageRow, babelHelpers.extends({}, T))
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t, n;
		if (o("MAWMsg").isMediaMsg(e) && !((t = r("qex")._("60")) != null && t) || o("MAWMsg").isXMAMsg(e) && !((n = r("qex")._("1595")) != null && n) || o("MAWMsg").isReceiverFetchXMAMsg(e) || !o("MAWMsg").isMediaMsg(e) && !o("MAWMsg").isXMAMsg(e)) return !1;
		var a = r("shouldUseImageGrouping")(e, !0);
		return !a;
	}
	l.default = c;
}), 98);
