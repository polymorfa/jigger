__d("WAWebMediaGallery.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAWebClock",
	"WAWebFrontendConstants",
	"WAWebFrontendMsgGetters",
	"WAWebHistorySyncComponents.react",
	"WAWebMediaGalleryHeader.react",
	"WAWebMediaGalleryMediaCanvas.react",
	"WAWebMediaGalleryView.react",
	"WAWebMediaHubEmptyGalleryEntryPoint.react",
	"WAWebMediaHubFooterEntryPoint.react",
	"WAWebMsgsCollectionFilterer",
	"WAWebStateUtils",
	"WAWebThreadMsgUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"useLazyRef",
	"useMergeRefs",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebMeasure",
	"useWAWebModelValues",
	"useWAWebThrottledCallback",
	"useWAWebUiIdle",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState;
	function g(e) {
		var t = e.isFullCollection, n = e.isRefreshed, r = e.mediaMsgs, o = t === !0 ? r.length : 6;
		return n && (o = 4), [].concat(r).sort(function(e, t) {
			return t.t - e.t;
		}).slice(0, o);
	}
	function h(e) {
		var t = e.chatInfoTheme, n = e.isFullCollection, a = e.isRefreshed, i = a === void 0 ? !1 : a, l = e.isSelectable, s = e.mediaMsgs, u = e.onMessageSelect, d = e.selectedMessages, m = null, p = g({
			mediaMsgs: s,
			isRefreshed: i,
			isFullCollection: n
		});
		return p.flatMap(function(e, a) {
			var s = n !== !0 ? "chatInfo" : void 0, p = n !== !0 && a >= (i ? 4 : 3) && a <= 5, _ = c.jsx(r("WAWebMediaGalleryMediaCanvas.react"), {
				aspectRatio: t ? 1.1 : 1,
				msg: e,
				hoverEvent: n,
				selectable: l,
				selectedMessages: d,
				onMessageSelect: u,
				theme: s,
				hideableSecondRow: p,
				isRefreshed: i
			}, e.id.toString());
			if (n !== !0) return [_];
			var f = o("WAWebClock").Clock.monthStr(e.t);
			if (f !== m) {
				m = f;
				var g = c.jsx(r("WAWebMediaGalleryHeader.react"), { children: f }, "header-" + e.t);
				return [].concat(Array.from({ length: 6 }, function(t, n) {
					return c.jsx(o("WAWebMediaGalleryView.react").EmptyCanvas, {}, "padding-" + e.t + "-" + n);
				}), [g, _]);
			}
			return [_];
		});
	}
	function y(t) {
		"use no forget";
		var n = t.filterText, a = t.fullCollection, i = t.isFilterEnabled, l = i === void 0 ? !1 : i, u = t.isRefresh, d = u === void 0 ? !1 : u, g = t.mediaMsgs, y = t.onMessageSelect, C = t.selectable, b = t.selectedMessages, v = t.theme, S = t.threadId, R = o("useWAWebModelValues").useModelValues(t.chat, [
			"linkCount",
			"docCount",
			"productCount",
			"endOfHistoryTransferType"
		]), L = f(function() {
			return g.toArray();
		}), E = L[0], k = L[1], I = m(function(e) {
			return k(e.filter(function(e) {
				return e.isCarouselCard === !1 && (S == null || o("WAWebThreadMsgUtils").isMsgInThread(e, S));
			}));
		}, [k, S]), T = r("useLazyRef")(function() {
			return new (r("WAWebMsgsCollectionFilterer"))(function(e) {
				return o("WAWebFrontendMsgGetters").getText(e);
			});
		}), D = _(null), x = r("useWAWebUnmountSignal")(), $ = _(), P = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), N = m(async function(e) {
			var t;
			if ((t = $.current) == null || t.abort(), !l) {
				I(g.toArray()), P();
				return;
			}
			$.current = new AbortController();
			var n = $.current.signal;
			try {
				var r = await T.current.filter({
					msgCollection: g,
					searchText: e,
					signal: n
				});
				!n.aborted && !x.aborted && (I(r), P());
			} catch (e) {
				if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
			}
		}, [
			g,
			T,
			l,
			P,
			x
		]);
		o("useWAWebListener").useListener(g, [
			"add",
			"remove",
			"reset",
			"query_media_before"
		], function() {
			return N(n);
		}), p(function() {
			return N(n), function() {
				var e;
				return (e = $.current) == null ? void 0 : e.abort();
			};
		}, [N, n]), o("useWAWebListener").useListener(g, "add", function(e) {
			l && T.current.cacheMessageTokens(e);
		}), o("useWAWebListener").useListener(g, "remove", function(e) {
			b && b.isSelected(e) && b.setVal(e, !1), l && T.current.removeMessageTokensFromCache(e);
		}), o("useWAWebListener").useListener(g, "reset", function() {
			b && b.unsetAll(), l && T.current.clearTokensCache();
		}), p(function() {
			l && g.forEach(function(e) {
				T.current.cacheMessageTokens(e);
			});
		}, [
			g,
			T,
			l
		]);
		var M = h({
			chatInfoTheme: v === "chat-info",
			isFullCollection: a,
			isRefreshed: d,
			isSelectable: C,
			mediaMsgs: E,
			onMessageSelect: y,
			selectedMessages: b
		}), w = r("useWAWebUiIdle")(), A = r("useWAWebThrottledCallback")(function(t) {
			g.hasMediaBefore && w(function() {
				var n;
				(n = g.queryMedia({
					chat: o("WAWebStateUtils").unproxy(R),
					msg: t
				})) == null || n.catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebMediaGallery: failed to load older media"]))).catching(r("getErrorSafe")(t)).sendLogs("media-gallery-load-failed"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				});
			});
		}, 100), F = r("useWAWebThrottledCallback")(function(e) {
			g.hasMediaBefore && e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > e.scrollHeight - e.clientHeight && A(g.head());
		}, 100), O = function(t) {
			F(t.currentTarget);
		}, B = r("useWAWebMeasure")(), W = B[0], q = B[1].height, U = r("useMergeRefs")(W, D);
		return p(function() {
			l && g.hasMediaBefore && !g.queryMediaBefore && D.current != null && D.current.scrollHeight < q + o("WAWebFrontendConstants").SCROLL_FUDGE && A(g.head());
		}, void 0), p(function() {
			g.hasMediaBefore && A();
		}, []), c.jsxs(c.Fragment, { children: [c.jsxs("div", {
			className: "x78zum5 xdt5ytf x1odjw0f x1iyjqo2",
			children: [c.jsx(o("WAWebMediaGalleryView.react").MediaGalleryView, {
				ref: U,
				medias: M,
				mediaCollection: g,
				fullCollection: a,
				chat: o("WAWebStateUtils").unproxy(R),
				onScroll: O,
				theme: v,
				isRefresh: d
			}), v !== "chat-info" && c.jsx(o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
				chat: R,
				theme: E.length > 0 ? "media-gallery-follow" : "media-gallery-footer"
			})]
		}), v !== "chat-info" && E.length > 0 && c.jsx(r("WAWebMediaHubFooterEntryPoint.react"), { tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.MEDIA })] });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
