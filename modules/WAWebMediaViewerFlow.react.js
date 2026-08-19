__d("WAWebMediaViewerFlow.react", [
	"Keys",
	"Promise",
	"WALogger",
	"WAWebABProps",
	"WAWebAllMediaCollection",
	"WAWebCarouselMsgUtils",
	"WAWebChatMedia",
	"WAWebFrontendConstants",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMediaIncrementalZoom",
	"WAWebMediaTypes",
	"WAWebMediaViewerModal.react",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebSuspendedGroupUtils",
	"WAWebThumbList.react",
	"WAWebUiActionWamEvent",
	"WAWebVelocityAnimate",
	"WAWebWamEnumUiActionType",
	"WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE",
	"WAWebWamMsgUtils",
	"WAWebWamPrivateStatsUtils",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebPrevious",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback",
	"useWAWebUiIdle",
	"useWAWebUnmountSignal",
	"useWAWebVideoPlaybackRate"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = d.createContext(!1), y = {
		duration: 300,
		delay: 100,
		easing: [
			.1,
			.82,
			.25,
			1
		]
	}, C = function(t) {
		var e = t.direction, n = [1, 0], r = ["0%", "100%"];
		return e === "down" && (n.reverse(), r.reverse()), {
			opacity: n,
			translateY: r
		};
	}, b = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.direction, n = e.el;
			if (n) return r("WAWebVelocityAnimate")(n, C({ direction: t }), y);
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	function v(t) {
		"use no forget";
		var a, i, l, c = t.highlightedMsgIds, m = t.msg, y = t.shouldShowAllMedia, C = r("useWAWebUnmountSignal")(), v = r("useWAWebUiIdle")(), R = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), L = o("WAWebFrontendMsgGetters").getChat(m), E = !!((a = L.groupMetadata) != null && a.isLidAddressingMode), k = o("WAWebWamMsgUtils").msgIsLid(m, L.id, E), I = r("useLazyRef")(function() {
			return m.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.IMAGE_OPEN,
				uiActionPreloaded: m.mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED,
				isLid: k
			}) : null;
		}), T = r("useLazyRef")(function() {
			var e = m;
			if (m.isCarouselCard) {
				var t;
				e = (t = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(m)) != null ? t : m;
			}
			return o("WAWebChatMedia").constructMediaMsgs(o("WAWebFrontendMsgGetters").getChat(e), e);
		});
		_(function() {
			if (o("WAWebABProps").getABPropConfigValue("web_memory_reduction")) {
				var e = T.current;
				return function() {
					e.delete();
				};
			}
		}, [T]);
		var D = y === !0 ? o("WAWebAllMediaCollection").AllMediaCollection : null, x = T.current.length, $ = r("useWAWebPrevious")(x), P = f(null), N = f(), M = f(), w = f(null), A = f(null), F = f(null), O = g(m), B = O[0], W = O[1], q = g(!1), U = q[0], V = q[1], H = g(!1), G = H[0], z = H[1], j = g(S(B)), K = j[0], Q = j[1], X = r("useWAWebPrevious")(B), Y = function(t) {
			t === void 0 && (t = !1);
			var e = A.current, n = F.current, o = w.current;
			if (!(!e || !n || !o)) {
				var a = 0;
				o instanceof HTMLElement && (a = o.clientWidth / 2 - e.clientWidth / 2), r("WAWebVelocityAnimate")(n, "stop");
				var i = 0;
				t && (i = 300), r("WAWebVelocityAnimate")(o, "scroll", {
					duration: i,
					container: n,
					offset: a,
					axis: "x",
					easing: [
						.1,
						.82,
						.25,
						1
					]
				});
			}
		};
		_(function() {
			var e = function(t) {
				t && r("WAWebVelocityAnimate")(t, {
					opacity: [1, 0],
					translateY: ["0%", "100%"]
				}, {
					duration: 300,
					delay: 100,
					easing: [
						.1,
						.82,
						.25,
						1
					]
				}).then(function() {
					C.aborted || Q(!1);
				});
			};
			Y(), S(m) && e(A.current);
		}, []), _(function() {
			x > ($ != null ? $ : 0) && Y();
		}, void 0);
		var J = p(function(e) {
			v(function() {
				T.current.loadMoreAroundIfNeeded(e);
			}), z(!0), W(e);
		}, [T, v]), Z = function() {
			var e = -1;
			if (!c || !B) return e;
			var t = B.id.toString();
			if (!c.has(t)) return e;
			var n = 0;
			return c.forEach(function(r) {
				r === t && (e = n), n++;
			}), e;
		}, ee = function(n) {
			var t, r = D != null ? D : T.current;
			if (n && n.stopPropagation(), !U) {
				var a = B;
				if (a) {
					var i = null;
					if (i = r.getAfter(a), i) {
						J(i);
						return;
					}
					T.current.hasMediaAfter && (N.current || (N.current = (t = T.current.queryMedia({
						chat: o("WAWebFrontendMsgGetters").getChat(m),
						msg: m,
						direction: "after"
					})) == null ? void 0 : t.then(function(e) {
						C.aborted || typeof (e == null ? void 0 : e.length) == "number" && e.length > 0 && B === m && ee();
					}).catch(function(t) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["query media msgs error: "])));
					}).finally(function() {
						N.current = null;
					})));
				}
			}
		}, te = function(t) {
			var e, n = D != null ? D : T.current;
			if (t && t.stopPropagation(), !U) {
				var r = B;
				if (r) {
					var a = null;
					if (a = n.getBefore(r), a) {
						J(a);
						return;
					}
					T.current.hasMediaBefore && (M.current || (M.current = (e = T.current.queryMedia({
						chat: o("WAWebFrontendMsgGetters").getChat(m),
						msg: m,
						direction: "before"
					})) == null ? void 0 : e.then(function(e) {
						C.aborted || typeof (e == null ? void 0 : e.length) == "number" && e.length > 0 && B === m && te();
					}).catch(function(e) {
						o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["query media msgs error: "])));
					}).finally(function() {
						M.current = null;
					})));
				}
			}
		}, ne = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (!e.defaultPrevented && !(B && !S(B))) {
					var t = yield new (u || (u = (n("Promise"))))(function(e) {
						o("WAWebModalManager").ModalManager.exists(e);
					});
					if (!(t && D == null)) {
						var a = r("WAWebL10N").isRTL();
						e.keyCode === r("Keys").LEFT ? a ? ee() : te() : e.keyCode === r("Keys").RIGHT && (a ? te() : ee());
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), re = null;
		m.type === o("WAWebMsgType").MSG_TYPE.IMAGE && (re = function() {
			var e = I.current;
			if (e) {
				var t, n = o("WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE").getGroupCountMetricsFromChatWid((t = o("WAWebFrontendMsgGetters").getChat(m)) == null ? void 0 : t.id);
				n != null && e.set(n), e.markUiActionT(), e.commit(), I.current = null;
			}
			o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
		});
		var oe = function(t) {
			V(t);
		}, ae = function() {
			o("WAWebModalManager").ModalManager.closeMedia();
		}, ie = function() {
			var e = function(t) {
				t && r("WAWebVelocityAnimate")(t, {
					opacity: [0, 1],
					translateY: ["100%", "0%"]
				}, {
					duration: 300,
					easing: [
						.1,
						.82,
						.25,
						1
					]
				});
			};
			S(m) && e(A.current);
		}, le = function() {
			S(m) && b({
				el: A.current,
				direction: "up"
			});
		}, se = function() {
			S(m) && b({
				el: A.current,
				direction: "down"
			});
		}, ue = r("useWAWebVideoPlaybackRate")(null), ce = ue.resetAllPlaybackRates, de = r("useWAWebStableCallback")(function() {
			W(null), ce(), ae();
		});
		_(function() {
			return function() {
				ce();
			};
		}, [ce]), o("useWAWebListener").useListener(S(B) ? null : B, "revoked", de);
		var me = S(B) ? T.current : null;
		o("useWAWebListener").useListener(me, "remove", function(e, t, n) {
			var o = T.current, a = B;
			if (o.includes(e) || a != null && a.id != null && a.id.toString() !== e.id.toString()) {
				R();
				return;
			}
			var i = n.index;
			o.length === 0 ? ae() : o.length === i ? J(r("nullthrows")(o.at(i - 1))) : J(r("nullthrows")(o.at(i)));
		}), o("useWAWebListener").useListener(me, "reset", function() {
			ae();
		}), o("useWAWebListener").useListener(me, "query_media_after", function() {
			R();
		}), o("useWAWebListener").useListener(me, "query_media_before", function() {
			var e = F.current;
			e && (P.current = e.scrollWidth, e instanceof HTMLElement && R());
		}), o("useWAWebListener").useListener(window, "keydown", ne), _(function() {
			v(function() {
				B && T.current.loadMoreAroundIfNeeded(B);
			});
		}, [
			B,
			T,
			v
		]), _(function() {
			if (X !== B) Y(!0);
			else {
				var e = F.current;
				if (!e || P.current == null || P.current === 0) return;
				e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - P.current), P.current = null;
			}
		}, [B, X]);
		var pe = function(t, n, a) {
			if (n.length !== 0 && a != null) {
				if (n.hasMediaBefore && a < t.clientWidth) {
					var e = r("nullthrows")(n.head());
					v(function() {
						n.queryMedia({
							chat: o("WAWebFrontendMsgGetters").getChat(e),
							msg: e
						}), R();
					});
				}
				if (n.hasMediaAfter && a + o("WAWebFrontendConstants").SCROLL_FUDGE > t.scrollWidth - 2 * t.clientWidth) {
					var i = r("nullthrows")(n.last());
					v(function() {
						n.queryMedia({
							chat: o("WAWebFrontendMsgGetters").getChat(i),
							msg: i,
							direction: "after"
						}), R();
					});
				}
			}
		}, _e = r("useWAWebThrottledCallback")(pe, 100), fe = function(t) {
			_e(t.currentTarget, T.current, t.currentTarget.scrollLeft);
		}, ge = p(function(e) {
			w.current = e;
		}, []);
		if (!B) return null;
		if (!o("WAWebMsgGetters").getIsNewsletterMsg(m) && o("WAWebFrontendMsgGetters").getChat(m).isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
			o("WAWebSuspendedGroupUtils").openSuspendedGroupMediaDownloadFailureModal();
			return;
		}
		var he = T.current, ye = D != null ? D : T.current, Ce = ye.last(), be = he.hasMediaAfter || B !== Ce ? ee : null, ve = ye.head(), Se = he.hasMediaBefore || B !== ve ? te : null;
		return d.jsx(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtxProvider, {
			activeMsg: B,
			children: d.jsx(h.Provider, {
				value: U,
				children: d.jsxs("div", {
					className: U ? "img-zoomed-in" : null,
					children: [d.jsx(r("WAWebMediaViewerModal.react"), {
						msg: B,
						mediaData: B.mediaData,
						onBack: ae,
						onExitAnimation: ie,
						onNext: be,
						onPrev: Se,
						onImgZoomIn: oe,
						getZoomNode: t.getZoomNode,
						autoPlayOnOpen: !G,
						startTime: t.startTime,
						isAnimatingThumbs: K,
						onImageLoad: re,
						msgIndexInAlbum: Z(),
						albumSize: ((i = t.highlightedMsgIds) == null ? void 0 : i.size) || 0,
						shouldShowNumberText: (l = t.shouldShowNumberText) != null ? l : !1,
						shouldShowAllMedia: y
					}), o("WAWebMsgGetters").getHasThumbList(B) && d.jsx(r("WAWebThumbList.react"), {
						activeMsg: B,
						mediaMsgs: D != null ? D : T.current,
						highlightedMsgIds: t.highlightedMsgIds,
						onSelectThumb: J,
						onSetActiveThumb: ge,
						onScroll: fe,
						setRefThumbsContainer: function(t) {
							A.current = t;
						},
						setRefThumbs: function(t) {
							F.current = t;
						},
						moveUpAnimation: le,
						moveDownAnimation: se
					})]
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return e ? o("WAWebMsgGetters").getHasThumbList(e) : !0;
	}
	l.MediaViewerFlowZoomContext = h, l.MediaViewerFlow = v;
}), 98);
