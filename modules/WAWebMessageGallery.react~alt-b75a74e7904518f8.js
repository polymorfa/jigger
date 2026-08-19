__d("WAWebMessageGallery.react", [
	"WAAbortError",
	"WAWebChatEntryPoint",
	"WAWebChatMessageSearch",
	"WAWebCmd",
	"WAWebDisplayType",
	"WAWebEmptyState.react",
	"WAWebFlatListLoadingSpinnerItem.react",
	"WAWebFrontendConstants",
	"WAWebFrontendMsgGetters",
	"WAWebHistorySyncComponents.react",
	"WAWebMediaHubEmptyGalleryEntryPoint.react",
	"WAWebMediaHubFooterEntryPoint.react",
	"WAWebStarredMsg.react",
	"WAWebStateUtils",
	"getErrorSafe",
	"react",
	"useMergeRefs",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebMeasure",
	"useWAWebThrottledCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		"use no forget";
		var t = e.chat, n = e.filterMessages, a = e.getHasBefore, i = e.getQueryBefore, l = e.messageElements, u = e.msgsCollection, _ = e.msgsCollectionUpdateEvents, f = e.onMessageSelect, g = e.onProductDetail, h = e.queryCollection, y = e.scrollOffset, C = y === void 0 ? 0 : y, b = e.selectable, v = e.selectedMessages, S = e.setScrollOffset, R = e.tabName, L = e.testid, E = e.threadId, k = a(), I = i(), T = m(null), D = r("useWAWebUnmountSignal")(), x = r("useWAWebThrottledCallback")(function(e) {
			k && h(e);
		}, 100), $ = p(function() {
			return u.toArray();
		}), P = $[0], N = $[1], M = r("useWAWebThrottledCallback")(function(e) {
			var t = e.scrollHeight - e.clientHeight - e.scrollTop, n = t < o("WAWebFrontendConstants").SCROLL_FUDGE;
			k && n && x(u.head()), S && S(e.scrollTop);
		}, 100), w = function(t) {
			M(t.currentTarget);
		};
		d(function() {
			k && x();
			var e = T.current;
			return e && (e.scrollTop = C), function() {
				M.cancel();
			};
		}, []);
		var A = function(t, n) {
			var e = o("WAWebStateUtils").unproxy(t);
			b === !0 && n !== void 0 ? f(e, n) : o("WAWebCmd").Cmd.openChatAt({
				chat: o("WAWebFrontendMsgGetters").getChat(e),
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MessageGallery,
				msgContext: o("WAWebChatMessageSearch").getSearchContext({
					chat: o("WAWebFrontendMsgGetters").getChat(e),
					msgKey: e.id,
					threadId: E
				}),
				threadId: E
			});
		}, F = m(), O = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), B = c(async function(e) {
			var t;
			if ((t = F.current) == null || t.abort(), e == null) {
				N(u.toArray()), O();
				return;
			}
			F.current = new AbortController();
			var n = F.current.signal;
			try {
				var a = await e(u, n);
				!n.aborted && !D.aborted && (N(a), O());
			} catch (e) {
				var i = r("getErrorSafe")(e);
				if (i.name !== o("WAAbortError").ABORT_ERROR) throw e;
			}
		}, [
			u,
			O,
			D
		]);
		o("useWAWebListener").useListener(u, _, function() {
			return B(n);
		}), d(function() {
			return B(n), function() {
				var e;
				return (e = F.current) == null ? void 0 : e.abort();
			};
		}, [B, n]);
		var W = r("useWAWebMeasure")(), q = W[0], U = W[1].height, V = r("useMergeRefs")(q, T);
		d(function() {
			n != null && a() && !i() && T.current != null && T.current.scrollHeight < U + o("WAWebFrontendConstants").SCROLL_FUDGE && x(u.head());
		}, void 0);
		var H = null;
		if (l ? H = l(P, A) : H = P.map(function(e, t) {
			return s.jsx(r("WAWebStarredMsg.react"), {
				msg: e,
				selectable: b,
				selectedMessages: v,
				onMessageSelect: f,
				displayType: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
				onClickMsg: A,
				onProductClick: g
			}, e.id.toString() + "_" + t);
		}).reverse(), I) {
			if (H.length === 0) return s.jsx(o("WAWebEmptyState.react").Loading, {});
			H.push(s.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}, -1));
		}
		return H.length === 0 && (!I || !k) ? s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebMediaHubEmptyGalleryEntryPoint.react").WAWebMediaHubEmptyGalleryEntryPoint, { tabName: R != null ? R : o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.MEDIA }), s.jsx(o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
			chat: t,
			theme: "media-gallery-footer"
		})] }) : s.jsxs(s.Fragment, { children: [s.jsxs("div", {
			"data-testid": L,
			ref: V,
			onScroll: w,
			className: "x78zum5 xdt5ytf x6ikm8r x1rife3k x1iyjqo2",
			children: [H, s.jsx(o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
				chat: t,
				theme: "media-gallery-follow"
			})]
		}), s.jsx(r("WAWebMediaHubFooterEntryPoint.react"), { tabName: R != null ? R : o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.MEDIA })] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
