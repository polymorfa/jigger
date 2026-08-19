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
	"asyncToGeneratorRuntime",
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
		var a = t.filterText, i = t.fullCollection, l = t.isFilterEnabled, u = l === void 0 ? !1 : l, d = t.isRefresh, g = d === void 0 ? !1 : d, y = t.mediaMsgs, C = t.onMessageSelect, b = t.selectable, v = t.selectedMessages, S = t.theme, R = t.threadId, L = o("useWAWebModelValues").useModelValues(t.chat, [
			"linkCount",
			"docCount",
			"productCount",
			"endOfHistoryTransferType"
		]), E = f(function() {
			return y.toArray();
		}), k = E[0], I = E[1], T = m(function(e) {
			return I(e.filter(function(e) {
				return e.isCarouselCard === !1 && (R == null || o("WAWebThreadMsgUtils").isMsgInThread(e, R));
			}));
		}, [I, R]), D = r("useLazyRef")(function() {
			return new (r("WAWebMsgsCollectionFilterer"))(function(e) {
				return o("WAWebFrontendMsgGetters").getText(e);
			});
		}), x = _(null), $ = r("useWAWebUnmountSignal")(), P = _(), N = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), M = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				if ((t = P.current) == null || t.abort(), !u) {
					T(y.toArray()), N();
					return;
				}
				P.current = new AbortController();
				var n = P.current.signal;
				try {
					var r = yield D.current.filter({
						msgCollection: y,
						searchText: e,
						signal: n
					});
					!n.aborted && !$.aborted && (T(r), N());
				} catch (e) {
					if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			y,
			D,
			u,
			N,
			$
		]);
		o("useWAWebListener").useListener(y, [
			"add",
			"remove",
			"reset",
			"query_media_before"
		], function() {
			return M(a);
		}), p(function() {
			return M(a), function() {
				var e;
				return (e = P.current) == null ? void 0 : e.abort();
			};
		}, [M, a]), o("useWAWebListener").useListener(y, "add", function(e) {
			u && D.current.cacheMessageTokens(e);
		}), o("useWAWebListener").useListener(y, "remove", function(e) {
			v && v.isSelected(e) && v.setVal(e, !1), u && D.current.removeMessageTokensFromCache(e);
		}), o("useWAWebListener").useListener(y, "reset", function() {
			v && v.unsetAll(), u && D.current.clearTokensCache();
		}), p(function() {
			u && y.forEach(function(e) {
				D.current.cacheMessageTokens(e);
			});
		}, [
			y,
			D,
			u
		]);
		var w = h({
			chatInfoTheme: S === "chat-info",
			isFullCollection: i,
			isRefreshed: g,
			isSelectable: b,
			mediaMsgs: k,
			onMessageSelect: C,
			selectedMessages: v
		}), A = r("useWAWebUiIdle")(), F = r("useWAWebThrottledCallback")(function(t) {
			y.hasMediaBefore && A(function() {
				var n;
				(n = y.queryMedia({
					chat: o("WAWebStateUtils").unproxy(L),
					msg: t
				})) == null || n.catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebMediaGallery: failed to load older media"]))).catching(r("getErrorSafe")(t)).sendLogs("media-gallery-load-failed"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				});
			});
		}, 100), O = r("useWAWebThrottledCallback")(function(e) {
			y.hasMediaBefore && e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > e.scrollHeight - e.clientHeight && F(y.head());
		}, 100), B = function(t) {
			O(t.currentTarget);
		}, W = r("useWAWebMeasure")(), q = W[0], U = W[1].height, V = r("useMergeRefs")(q, x);
		return p(function() {
			u && y.hasMediaBefore && !y.queryMediaBefore && x.current != null && x.current.scrollHeight < U + o("WAWebFrontendConstants").SCROLL_FUDGE && F(y.head());
		}, void 0), p(function() {
			y.hasMediaBefore && F();
		}, []), c.jsxs(c.Fragment, { children: [c.jsxs("div", {
			className: "x78zum5 xdt5ytf x1odjw0f x1iyjqo2",
			children: [c.jsx(o("WAWebMediaGalleryView.react").MediaGalleryView, {
				ref: V,
				medias: w,
				mediaCollection: y,
				fullCollection: i,
				chat: o("WAWebStateUtils").unproxy(L),
				onScroll: B,
				theme: S,
				isRefresh: g
			}), S !== "chat-info" && c.jsx(o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
				chat: L,
				theme: k.length > 0 ? "media-gallery-follow" : "media-gallery-footer"
			})]
		}), S !== "chat-info" && k.length > 0 && c.jsx(r("WAWebMediaHubFooterEntryPoint.react"), { tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.MEDIA })] });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
