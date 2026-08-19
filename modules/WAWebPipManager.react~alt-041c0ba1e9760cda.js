__d("WAWebPipManager.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAWebCallCollection",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFloatingMsgVideoPlayerRenderer.react",
	"WAWebFloatingVoipRenderer.react",
	"WAWebFrontendMsgGetters",
	"WAWebInlineVideoPlaybackClosedWamEvent",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebMediaGatingUtils",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebPipCloseButton.react",
	"WAWebPipConst",
	"WAWebPipController",
	"WAWebPipVideoRefControls.react",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumInlineVideoType",
	"WAWebWamEnumWebcRmrReasonCode",
	"WAWebWamMsgUtils",
	"WAWebWid",
	"WAWebYoutubeVideoPlayerRenderer.react",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback",
	"useWAWebVideoPlaybackRate"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useImperativeHandle, f = d.useRef, g = d.useState, h = {
		msg: null,
		startTime: null,
		zoomRect: null,
		videoMetadata: null,
		videoRef: null,
		isVideoPlaying: !1,
		videoType: o("WAWebPipConst").PiPVideoType.MSG,
		previewUrl: null,
		videoSrc: null,
		counterAbuseData: null
	}, y = { playerWrapper: {
		position: "xixxii4",
		zIndex: "xtsfpqs",
		width: "xnalus7",
		height: "xqtp20y",
		overflowX: "x1plvlek",
		overflowY: "xryxfnj",
		$$css: !0
	} };
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return a.videoType === o("WAWebPipConst").PiPVideoType.MSG ? c.jsx(r("WAWebFloatingMsgVideoPlayerRenderer.react"), babelHelpers.extends({ ref: n }, a)) : a.videoType === o("WAWebPipConst").PiPVideoType.YOUTUBE ? c.jsx(r("WAWebYoutubeVideoPlayerRenderer.react"), babelHelpers.extends({ ref: n }, a)) : a.videoType === o("WAWebPipConst").PiPVideoType.OG ? c.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebFloatingOgVideoPlayerRenderer" }) : a.videoType === o("WAWebPipConst").PiPVideoType.VOIP ? c.jsx(r("WAWebFloatingVoipRenderer.react"), babelHelpers.extends({ ref: n }, a)) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + a.videoType);
		})();
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = v(e);
		return t == null ? null : new (o("WAWebInlineVideoPlaybackClosedWamEvent")).InlineVideoPlaybackClosedWamEvent({
			inlineVideoPlayed: !1,
			inlineVideoType: t
		});
	}
	function v(e) {
		return e === o("WAWebPipConst").PiPVideoType.YOUTUBE ? o("WAWebWamEnumInlineVideoType").INLINE_VIDEO_TYPE.YOUTUBE : null;
	}
	function S(e, t) {
		return r("WAWebWid").isNewsletter(e.id.remote) ? t != null && t.counterAbuseToken != null : t != null && t.counterAbuseToken != null && t.nonce != null;
	}
	function R(e) {
		var t, n, a, i = e.ref, l = f(null), u = g(h.msg), d = u[0], v = u[1], R = g(h.startTime), L = R[0], E = R[1], k = g(h.zoomRect), I = k[0], T = k[1], D = f(null), x = g(h.videoMetadata), $ = x[0], P = x[1], N = g(h.videoRef), M = N[0], w = N[1], A = g(h.isVideoPlaying), F = A[0], O = A[1], B = g(h.videoType), W = B[0], q = B[1], U = g(h.previewUrl), V = U[0], H = U[1], G = g(h.videoSrc), z = G[0], j = G[1], K = g(null), Q = K[0], X = K[1], Y = g(h.counterAbuseData), J = Y[0], Z = Y[1], ee = o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled(), te = (t = d == null || (n = d.id) == null ? void 0 : n.toString()) != null ? t : null, ne = r("useWAWebVideoPlaybackRate")(te), re = ne.advancePlaybackRate, oe = ne.playbackRate, ae = ne.resetAllPlaybackRates;
		p(function() {
			ee && (M == null || M.setPlaybackRate(oe));
		}, [
			ee,
			oe,
			M
		]), p(function() {
			var e = function() {
				var t;
				(t = l.current) == null || t.commit(), window.removeEventListener("unload", e);
			};
			return window.addEventListener("unload", e), e;
		}, []);
		var ie = function(t) {
			X(function() {
				return t;
			});
		}, le = r("useWAWebStableCallback")(function(e, t) {
			var n = l.current;
			n != null && ((e == null ? void 0 : e.duration) != null && (n.inlineVideoDurationT = Math.floor(e == null ? void 0 : e.duration)), !n.inlineVideoPlayed && t && (n.markInlineVideoPlayStartT(), n.inlineVideoPlayed = t)), P(e), O(t);
		}), se = r("useWAWebStableCallback")(function() {
			var e;
			d && r("WAWebPipController").didClose(d), (e = l.current) == null || e.commit(), ae(), v(h.msg), E(h.startTime), T(h.zoomRect), P(h.videoMetadata), w(h.videoRef), O(h.isVideoPlaying), q(h.videoType), H(h.previewUrl), j(h.videoSrc), Z(h.counterAbuseData);
		}), ue = function(t) {
			t.id.equals(d == null ? void 0 : d.id) && (W !== o("WAWebPipConst").PiPVideoType.VOIP || r("WAWebCallCollection").activeCall == null) && se();
		};
		p(function() {
			return function() {
				d && r("WAWebPipController").didClose(d);
			};
		}, [d]);
		var ce = function(t, n) {
			if (t !== o("WAWebPipConst").PiPVideoType.VOIP && r("WAWebCallCollection").activeCall != null) {
				o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "pip-manager"
					},
					onOK: o("WAWebModalManager").closeModalManager,
					title: s._(
						/*BTDS*/
						""
					),
					children: s._(
						/*BTDS*/
						""
					)
				}));
				return;
			}
			var e = n.msg;
			if (e != null) {
				var a;
				r("WAWebPipController").didOpen(e), (a = l.current) == null || a.commit();
				var i = b(t);
				l.current = i, i != null && (i.messageType = o("WAWebWamMsgUtils").getWamMessageType(e), i.inlineVideoHasRcat = S(e, n.counterAbuseData), i.startInlineVideoPlayStartT()), t === o("WAWebPipConst").PiPVideoType.MSG && e.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.PIP,
					isUserInitiated: !0
				});
			}
			v(e), E(n.startTime), T(n.zoomRect), P(h.videoMetadata), w(h.videoRef), O(h.isVideoPlaying), q(t), H(n.preview != null ? "data:image/jpeg;base64," + n.preview : null), j(n.videoSrc), Z(n.counterAbuseData);
		}, de = function() {
			M == null || M.pause();
		}, me = function(t) {
			de();
		}, pe = function(t) {
			var e;
			return (e = d == null ? void 0 : d.id.equals(t.id)) != null ? e : !1;
		}, _e = function() {
			d && r("WAWebPipController").didError(d);
		}, fe = function() {
			var e = (M == null ? void 0 : M.getAudioDisabled()) === !0;
			return {
				enableDragBar: !0,
				bottomContent: $ != null && M != null ? c.jsx(o("WAWebPipVideoRefControls.react").VideoRefControls, {
					disableAudioControls: e,
					refVideo: M,
					videoMetadata: $,
					isFullscreenMode: !1,
					isVideoPlaying: F,
					newPiPStyle: !0,
					onFullscreenToggle: Q != null ? Q : void 0,
					playbackRate: ee ? oe : void 0,
					onPlaybackRateChange: ee ? re : void 0
				}) : null,
				topContent: c.jsx(r("WAWebPipCloseButton.react"), {
					isFullscreenMode: !1,
					onClick: se
				})
			};
		}, ge = function() {
			return I ? {
				height: I.bottom - I.top,
				width: I.right - I.left,
				left: I.left,
				bottom: window.innerHeight - I.bottom
			} : null;
		}, he = function() {
			return babelHelpers.extends({
				msg: d,
				startTime: L,
				zoomRect: I,
				videoMetadata: $,
				videoRef: M,
				isVideoPlaying: F,
				videoType: W,
				previewUrl: V,
				videoSrc: z,
				counterAbuseData: J
			}, fe(), {
				animationStartStyle: ge(),
				onClose: se,
				onError: _e,
				autoPlay: !0,
				onRefSet: w,
				onVideoMetadataChange: le,
				onSetFullscreenToggleCallback: ie
			});
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ["media_viewer_modal"], me), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, ["remove"], function(e) {
			ue(e);
		});
		var ye = d != null ? o("WAWebFrontendMsgGetters").getChat(d) : null;
		o("useWAWebListener").useListener((a = ye == null ? void 0 : ye.msgs) != null ? a : o("WAWebMsgCollection").MsgCollection, "remove_msgs", function(e) {
			e.forEach(ue);
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, ["change:type"], function(e) {
			e.type === o("WAWebMsgType").MSG_TYPE.REVOKED && (!o("WAWebMsgGetters").getIsSentByMe(e) && d != null && d.id.equals(e.id) && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), ue(e));
		});
		var Ce = {
			isOpened: pe,
			pausePiP: de,
			openPiP: ce,
			closePiP: se
		};
		_(i, function() {
			return Ce;
		}), p(function() {
			return r("WAWebPipController").register(Ce), function() {
				r("WAWebPipController").unregister();
			};
		}, []);
		var be = he(), ve = d != null || z != null || W === o("WAWebPipConst").PiPVideoType.VOIP, Se = m(function() {
			var e, t = "[tabindex=\"0\"]", n = (e = D.current) == null ? void 0 : e.querySelector(t);
			n instanceof HTMLElement && n.focus();
		}, []), Re = m(function(e) {
			var t;
			e.relatedTarget instanceof Node && (t = D.current) != null && t.contains(e.relatedTarget) || Se();
		}, [Se]), Le = m(function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), Se());
		}, [Se]);
		return c.jsxs(c.Fragment, { children: [ve && c.jsx("div", {
			className: "xixxii4 x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xg01cxk x47corl",
			"data-tab": o("WAWebTabOrder").TAB_ORDER.PIP_PLAYER,
			"data-testid": "pip_focus_sentinel_button",
			tabIndex: 0,
			role: "button",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onFocus: Re,
			onKeyDown: Le
		}), c.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
			focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
			allowEscape: ve,
			style: ve ? void 0 : { pointerEvents: "none" },
			children: c.jsx(r("WAWebVelocityTransitionGroup"), {
				ref: D,
				transitionName: "pip",
				xstyle: y.playerWrapper,
				component: "div",
				children: c.jsx(C, babelHelpers.extends({}, be))
			})
		})] });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = R;
	l.PiPManager = L;
}), 226);
