__d("WAWebPipYoutubeVideoPlayer.react", [
	"WADeepEquals",
	"WAWebDomFullscreen",
	"WAWebPipCloseButton.react",
	"WAWebPipFullscreenToggleButton.react",
	"WAWebPipShade.react",
	"WAWebPipSharedVideoPlayer.react",
	"WAWebPipVideoRefControls.react",
	"WAWebPipYoutubeVideoTag.react",
	"WAWebUA",
	"WAWebVelocityTransitionGroup",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebListener",
	"useWAWebPrevious",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState;
	function p(e) {
		var t = e.onClose, n = e.onRefSet, a = e.onSetFullscreenToggleCallback, i = e.onVideoEnded, l = e.onVideoMetadataChange, u = e.startTime, p = d(null), f = d(null), g = d(!1), h = d(null), y = m(void 0), C = y[0], b = y[1], v = m(!1), S = v[0], R = v[1], L = m(!1), E = L[0], k = L[1], I = m(!1), T = I[0], D = I[1], x = m(!1), $ = x[0], P = x[1], N = m(!1), M = N[0], w = N[1], A = r("useWAWebPrevious")(S), F = r("useWAWebPrevious")(C);
		o("useWAWebListener").useListener(r("WAWebDomFullscreen"), "fullscreen_change", function() {
			r("WAWebDomFullscreen").isFullscreenMode() && r("WAWebDomFullscreen").getFullscreenElement() === p.current ? P(!0) : r("WAWebDomFullscreen").isFullscreenMode() || P(!1);
		});
		var O = function(t) {
			t.stopPropagation(), $ ? r("WAWebDomFullscreen").exitFullscreen() : r("WAWebDomFullscreen").requestFullscreen(p.current);
		}, B = r("useWAWebDebouncedCallback")(function() {
			D(!1);
		}, o("WAWebPipSharedVideoPlayer.react").FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT);
		c(function() {
			a == null || a(O);
		}, []);
		var W = r("useWAWebStableCallback")(function(e) {
			f.current = e, e != null && (n == null || n(e));
		}), q = function() {
			i && i(), R(!1);
		}, U = function() {
			var e, t, n = (e = (t = f.current) == null ? void 0 : t.getCurrentTime()) != null ? e : null;
			b(function(e) {
				return e && n != null ? babelHelpers.extends({}, e, { currentTime: n }) : e;
			}), R(!1), g.current = !0;
		}, V = function() {
			var e, t, n = (e = (t = f.current) == null ? void 0 : t.getCurrentTime()) != null ? e : null;
			b(function(e) {
				return e && n != null ? babelHelpers.extends({}, e, { currentTime: n }) : e;
			}), R(!0), g.current = !0;
		}, H = function(t) {
			var e = u != null ? u : 0;
			b({
				duration: t.duration,
				currentTime: e,
				volume: t.volume,
				muted: t.muted,
				bufferedTime: 0
			});
		}, G = function(t) {
			b(function(e) {
				return e && babelHelpers.extends({}, e, {
					volume: t.volume,
					muted: t.muted
				});
			});
		}, z = function(t) {
			if (g.current) {
				g.current = !1;
				return;
			}
			b(function(e) {
				return e && babelHelpers.extends({}, e, { currentTime: t });
			});
		}, j = function(t) {
			var e = t[0], n = e[1];
			b(function(e) {
				return e && babelHelpers.extends({}, e, { bufferedTime: n });
			});
		};
		c(function() {
			(A !== S || !o("WADeepEquals").deepEqual(F, C)) && (l == null || l(C, S));
		}, [
			S,
			A,
			l,
			C,
			F
		]);
		var K = e.exposeIframeInPiP || M || $ ? null : s.jsx("div", { className: "x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x166i9x0 x1gex1yb x1n7ce0x xqz8djb x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3" }), Q = s.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" },
			1: { className: "x10l6tqk x13vifvy xtijo5x x1o0tod xj9fbq8" }
		}[!!$ << 0], { children: [K, s.jsx(r("WAWebPipYoutubeVideoTag.react"), {
			ref: W,
			youtubeVideoId: e.youtubeVideoId,
			startTime: e.startTime,
			onEnded: q,
			onLoadedMetadata: H,
			onPause: U,
			onPlaying: V,
			onProgress: j,
			onTimeUpdate: z,
			onVolumeChange: G,
			autoPlay: e.autoPlay,
			counterAbuseData: e.counterAbuseData
		})] })), X = e.disablePiPControls !== !0 || $ ? s.jsx(_, {
			videoMetadata: C,
			videoRef: f,
			mouseDownCoorRef: h,
			mouseMoveRecently: T,
			isVideoPlaying: S,
			isFullscreenMode: $,
			onFullScreenToggle: O,
			onClose: t,
			onExposeIframeInPiP: w
		}) : null, Y;
		o("WAWebUA").UA.isSafari || (Y = s.jsx(r("WAWebPipFullscreenToggleButton.react"), {
			isFullscreenMode: $,
			onClick: O
		}));
		var J = s.jsx(r("WAWebPipShade.react"), { theme: "full-rounded" }), Z = $ ? s.jsxs(s.Fragment, { children: [Q, X] }) : s.jsxs(s.Fragment, { children: [Q, s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "fade-fast",
			children: E && T && !M && e.disablePiPControls !== !0 ? [
				J,
				X,
				Y,
				s.jsx(r("WAWebPipCloseButton.react"), {
					isFullscreenMode: $,
					onClick: function(n) {
						n.stopPropagation(), e.onClose();
					}
				}, "close")
			] : null
		})] });
		return s.jsx("div", babelHelpers.extends({ ref: p }, {
			0: { className: "xums3t4 x5yr21d xh8yej3" },
			1: { className: "xums3t4 x5yr21d xh8yej3 xt0e3qv" }
		}[!!$ << 0], {
			onMouseEnter: function(t) {
				if (M) {
					if (o("WAWebUA").UA.isGecko && E) return;
					w(!1);
				}
				k(!0);
			},
			onMouseLeave: function(t) {
				k(!1);
			},
			onMouseDown: function(t) {
				$ && t.stopPropagation();
			},
			onMouseMove: function(t) {
				E || k(!0), T || D(!0), B();
			},
			children: Z
		}), "elementsWrapped");
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.isFullscreenMode, n = e.isVideoPlaying, r = e.mouseDownCoorRef, a = e.mouseMoveRecently, i = e.onClose, l = e.onExposeIframeInPiP, u = e.onFullScreenToggle, c = e.ref, d = e.videoMetadata, m = e.videoRef, p = function(t) {
			if (m.current) {
				var e = t;
				d && t >= d.duration - 1 && d.duration > 1 && (e = d.duration - 1), m.current.setCurrentTime(e);
			}
		}, _ = null;
		if (d) {
			var f = "x1ey2m1c x78zum5 xvt47uu xbudbmw xexx8yu x5zjp28 x18d9i69 x162tt16 x10l6tqk xtijo5x x1hc1fzr x13dflua x19991ni xwji4o3";
			_ = s.jsx("div", babelHelpers.extends({ ref: c }, {
				0: { className: "x1hc1fzr x13dflua x19991ni xwji4o3" },
				1: { className: "x19991ni xwji4o3 x1ptxcow x1labep9" }
			}[!a << 0], { children: s.jsx(o("WAWebPipVideoRefControls.react").VideoRefControls, {
				refVideo: m.current,
				videoMetadata: d,
				isFullscreenMode: t,
				isVideoPlaying: n,
				handleSetCurrentTimeByControls: p,
				controlsClassName: t ? f : void 0,
				onFullscreenToggle: u,
				onClose: i,
				newPiPStyle: !0
			}) })), t || (_ = s.jsx("div", {
				ref: c,
				className: "x5yr21d x10l6tqk xh8yej3",
				onMouseDown: function(t) {
					r.current = {
						x: t.clientX,
						y: t.clientY
					};
				},
				onMouseUp: function(t) {
					var e = t.clientX, n = t.clientY, o = r.current, a = o ? o.x : void 0, i = o ? o.y : void 0;
					a != null && i != null && Math.abs(e - a) + Math.abs(n - i) < 4 && l(!0);
				},
				children: _
			}));
		}
		return _;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 98);
