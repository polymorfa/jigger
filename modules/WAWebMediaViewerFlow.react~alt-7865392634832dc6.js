__d("WAWebMediaViewerFlow.react", [
	"Keys",
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
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = c.createContext(!1), h = {
		duration: 300,
		delay: 100,
		easing: [
			.1,
			.82,
			.25,
			1
		]
	}, y = function(t) {
		var e = t.direction, n = [1, 0], r = ["0%", "100%"];
		return e === "down" && (n.reverse(), r.reverse()), {
			opacity: n,
			translateY: r
		};
	}, C = async function(t) {
		var e = t.direction, n = t.el;
		if (n) return r("WAWebVelocityAnimate")(n, y({ direction: e }), h);
	};
	function b(t) {
		"use no forget";
		var n, a, i, l = t.highlightedMsgIds, u = t.msg, d = t.shouldShowAllMedia, h = r("useWAWebUnmountSignal")(), y = r("useWAWebUiIdle")(), b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), S = o("WAWebFrontendMsgGetters").getChat(u), R = !!((n = S.groupMetadata) != null && n.isLidAddressingMode), L = o("WAWebWamMsgUtils").msgIsLid(u, S.id, R), E = r("useLazyRef")(function() {
			return u.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.IMAGE_OPEN,
				uiActionPreloaded: u.mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED,
				isLid: L
			}) : null;
		}), k = r("useLazyRef")(function() {
			var e = u;
			if (u.isCarouselCard) {
				var t;
				e = (t = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(u)) != null ? t : u;
			}
			return o("WAWebChatMedia").constructMediaMsgs(o("WAWebFrontendMsgGetters").getChat(e), e);
		});
		p(function() {
			if (o("WAWebABProps").getABPropConfigValue("web_memory_reduction")) {
				var e = k.current;
				return function() {
					e.delete();
				};
			}
		}, [k]);
		var I = d === !0 ? o("WAWebAllMediaCollection").AllMediaCollection : null, T = k.current.length, D = r("useWAWebPrevious")(T), x = _(null), $ = _(), P = _(), N = _(null), M = _(null), w = _(null), A = f(u), F = A[0], O = A[1], B = f(!1), W = B[0], q = B[1], U = f(!1), V = U[0], H = U[1], G = f(v(F)), z = G[0], j = G[1], K = r("useWAWebPrevious")(F), Q = function(t) {
			t === void 0 && (t = !1);
			var e = M.current, n = w.current, o = N.current;
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
		p(function() {
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
					h.aborted || j(!1);
				});
			};
			Q(), v(u) && e(M.current);
		}, []), p(function() {
			T > (D != null ? D : 0) && Q();
		}, void 0);
		var X = m(function(e) {
			y(function() {
				k.current.loadMoreAroundIfNeeded(e);
			}), H(!0), O(e);
		}, [k, y]), Y = function() {
			var e = -1;
			if (!l || !F) return e;
			var t = F.id.toString();
			if (!l.has(t)) return e;
			var n = 0;
			return l.forEach(function(r) {
				r === t && (e = n), n++;
			}), e;
		}, J = function(n) {
			var t, r = I != null ? I : k.current;
			if (n && n.stopPropagation(), !W) {
				var a = F;
				if (a) {
					var i = null;
					if (i = r.getAfter(a), i) {
						X(i);
						return;
					}
					k.current.hasMediaAfter && ($.current || ($.current = (t = k.current.queryMedia({
						chat: o("WAWebFrontendMsgGetters").getChat(u),
						msg: u,
						direction: "after"
					})) == null ? void 0 : t.then(function(e) {
						h.aborted || typeof (e == null ? void 0 : e.length) == "number" && e.length > 0 && F === u && J();
					}).catch(function(t) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["query media msgs error: "])));
					}).finally(function() {
						$.current = null;
					})));
				}
			}
		}, Z = function(t) {
			var e, n = I != null ? I : k.current;
			if (t && t.stopPropagation(), !W) {
				var r = F;
				if (r) {
					var a = null;
					if (a = n.getBefore(r), a) {
						X(a);
						return;
					}
					k.current.hasMediaBefore && (P.current || (P.current = (e = k.current.queryMedia({
						chat: o("WAWebFrontendMsgGetters").getChat(u),
						msg: u,
						direction: "before"
					})) == null ? void 0 : e.then(function(e) {
						h.aborted || typeof (e == null ? void 0 : e.length) == "number" && e.length > 0 && F === u && Z();
					}).catch(function(e) {
						o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["query media msgs error: "])));
					}).finally(function() {
						P.current = null;
					})));
				}
			}
		}, ee = async function(t) {
			if (!t.defaultPrevented && !(F && !v(F))) {
				var e = await new Promise(function(e) {
					o("WAWebModalManager").ModalManager.exists(e);
				});
				if (!(e && I == null)) {
					var n = r("WAWebL10N").isRTL();
					t.keyCode === r("Keys").LEFT ? n ? J() : Z() : t.keyCode === r("Keys").RIGHT && (n ? Z() : J());
				}
			}
		}, te = null;
		u.type === o("WAWebMsgType").MSG_TYPE.IMAGE && (te = function() {
			var e = E.current;
			if (e) {
				var t, n = o("WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE").getGroupCountMetricsFromChatWid((t = o("WAWebFrontendMsgGetters").getChat(u)) == null ? void 0 : t.id);
				n != null && e.set(n), e.markUiActionT(), e.commit(), E.current = null;
			}
			o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
		});
		var ne = function(t) {
			q(t);
		}, re = function() {
			o("WAWebModalManager").ModalManager.closeMedia();
		}, oe = function() {
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
			v(u) && e(M.current);
		}, ae = function() {
			v(u) && C({
				el: M.current,
				direction: "up"
			});
		}, ie = function() {
			v(u) && C({
				el: M.current,
				direction: "down"
			});
		}, le = r("useWAWebVideoPlaybackRate")(null), se = le.resetAllPlaybackRates, ue = r("useWAWebStableCallback")(function() {
			O(null), se(), re();
		});
		p(function() {
			return function() {
				se();
			};
		}, [se]), o("useWAWebListener").useListener(v(F) ? null : F, "revoked", ue);
		var ce = v(F) ? k.current : null;
		o("useWAWebListener").useListener(ce, "remove", function(e, t, n) {
			var o = k.current, a = F;
			if (o.includes(e) || a != null && a.id != null && a.id.toString() !== e.id.toString()) {
				b();
				return;
			}
			var i = n.index;
			o.length === 0 ? re() : o.length === i ? X(r("nullthrows")(o.at(i - 1))) : X(r("nullthrows")(o.at(i)));
		}), o("useWAWebListener").useListener(ce, "reset", function() {
			re();
		}), o("useWAWebListener").useListener(ce, "query_media_after", function() {
			b();
		}), o("useWAWebListener").useListener(ce, "query_media_before", function() {
			var e = w.current;
			e && (x.current = e.scrollWidth, e instanceof HTMLElement && b());
		}), o("useWAWebListener").useListener(window, "keydown", ee), p(function() {
			y(function() {
				F && k.current.loadMoreAroundIfNeeded(F);
			});
		}, [
			F,
			k,
			y
		]), p(function() {
			if (K !== F) Q(!0);
			else {
				var e = w.current;
				if (!e || x.current == null || x.current === 0) return;
				e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - x.current), x.current = null;
			}
		}, [F, K]);
		var de = function(t, n, a) {
			if (n.length !== 0 && a != null) {
				if (n.hasMediaBefore && a < t.clientWidth) {
					var e = r("nullthrows")(n.head());
					y(function() {
						n.queryMedia({
							chat: o("WAWebFrontendMsgGetters").getChat(e),
							msg: e
						}), b();
					});
				}
				if (n.hasMediaAfter && a + o("WAWebFrontendConstants").SCROLL_FUDGE > t.scrollWidth - 2 * t.clientWidth) {
					var i = r("nullthrows")(n.last());
					y(function() {
						n.queryMedia({
							chat: o("WAWebFrontendMsgGetters").getChat(i),
							msg: i,
							direction: "after"
						}), b();
					});
				}
			}
		}, me = r("useWAWebThrottledCallback")(de, 100), pe = function(t) {
			me(t.currentTarget, k.current, t.currentTarget.scrollLeft);
		}, _e = m(function(e) {
			N.current = e;
		}, []);
		if (!F) return null;
		if (!o("WAWebMsgGetters").getIsNewsletterMsg(u) && o("WAWebFrontendMsgGetters").getChat(u).isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
			o("WAWebSuspendedGroupUtils").openSuspendedGroupMediaDownloadFailureModal();
			return;
		}
		var fe = k.current, ge = I != null ? I : k.current, he = ge.last(), ye = fe.hasMediaAfter || F !== he ? J : null, Ce = ge.head(), be = fe.hasMediaBefore || F !== Ce ? Z : null;
		return c.jsx(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtxProvider, {
			activeMsg: F,
			children: c.jsx(g.Provider, {
				value: W,
				children: c.jsxs("div", {
					className: W ? "img-zoomed-in" : null,
					children: [c.jsx(r("WAWebMediaViewerModal.react"), {
						msg: F,
						mediaData: F.mediaData,
						onBack: re,
						onExitAnimation: oe,
						onNext: ye,
						onPrev: be,
						onImgZoomIn: ne,
						getZoomNode: t.getZoomNode,
						autoPlayOnOpen: !V,
						startTime: t.startTime,
						isAnimatingThumbs: z,
						onImageLoad: te,
						msgIndexInAlbum: Y(),
						albumSize: ((a = t.highlightedMsgIds) == null ? void 0 : a.size) || 0,
						shouldShowNumberText: (i = t.shouldShowNumberText) != null ? i : !1,
						shouldShowAllMedia: d
					}), o("WAWebMsgGetters").getHasThumbList(F) && c.jsx(r("WAWebThumbList.react"), {
						activeMsg: F,
						mediaMsgs: I != null ? I : k.current,
						highlightedMsgIds: t.highlightedMsgIds,
						onSelectThumb: X,
						onSetActiveThumb: _e,
						onScroll: pe,
						setRefThumbsContainer: function(t) {
							M.current = t;
						},
						setRefThumbs: function(t) {
							w.current = t;
						},
						moveUpAnimation: ae,
						moveDownAnimation: ie
					})]
				})
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return e ? o("WAWebMsgGetters").getHasThumbList(e) : !0;
	}
	l.MediaViewerFlowZoomContext = g, l.MediaViewerFlow = b;
}), 98);
