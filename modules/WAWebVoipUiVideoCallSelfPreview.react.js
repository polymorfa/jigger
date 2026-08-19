__d("WAWebVoipUiVideoCallSelfPreview.react", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebCallParticipantInfo.react",
	"WAWebUserPrefsMeUser",
	"WAWebVelocityAnimate",
	"WAWebVoipCanvasUtils",
	"WAWebVoipGatingUtils",
	"WAWebVoipSelfPreviewPositionUtils",
	"WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay.react",
	"WAWebVoipStackInterface",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiVideoCallSelfPreviewFullWidth.react",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"WAWebVoipWindowMetrics",
	"WDSIconIcMicOffFilled.react",
	"WDSSpinner.react",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useWAWebTimeout",
	"useWAWebVisibilityAwarePolling",
	"useWAWebVoipCanvasLifecycle",
	"useWAWebVoipPeerHasReceivedFrame",
	"useWAWebVoipVideoTileLoadingIndicator",
	"useWAWebVoipWatchdogTileDom"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useContext, g = p.useEffect, h = p.useLayoutEffect, y = p.useRef, C = p.useState, b = 1, v = 200, S = {
		aspectRatio: "x10y9f9r",
		$$css: !0
	}, R = {
		transform: "xsqj5wx",
		$$css: !0
	}, L = {
		customWidthHeight: function(t, n) {
			return [{
				width: t != null ? "x5lhr3w" : t,
				height: n != null ? "x16ye13r" : n,
				$$css: !0
			}, {
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(n)
			}];
		},
		canvas: {
			backgroundColor: "x1od0jb8",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		canvasFloating: {
			position: "x10l6tqk",
			top: "x13vifvy",
			left: "xu96u03",
			zIndex: "x1ja2u2z",
			$$css: !0
		},
		nonFloatingContainer: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			maxWidth: "x1vxfyie",
			maxHeight: "xsl3clu",
			minWidth: "xeuugli",
			minHeight: "x2lwn1j",
			$$css: !0
		},
		nonFloatingDimensions: function(t, n) {
			return [
				S,
				{
					height: n != null ? "x16ye13r" : n,
					$$css: !0
				},
				{
					"--x-height": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(n),
					"--x-aspectRatio": t + " / " + n != null ? t + " / " + n : void 0
				}
			];
		},
		selfPreviewCanvas: {
			zIndex: "x68pp3s",
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			userSelect: "x87ps6o",
			maxWidth: "x193iq5w",
			maxHeight: "xmz0i5r",
			top: "x13vifvy",
			left: "xu96u03",
			right: "xwukr4l",
			bottom: "xdd4er5",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		selfPreviewCanvasDraggable: {
			cursor: "x1jm3nie",
			$$css: !0
		},
		selfPreviewCanvasDragging: {
			cursor: "xi9pz9s",
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfPreviewCanvasResizing: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfPreviewCanvasPosition: function(t, n) {
			return [R, { "--x-transform": "translate(" + n + "px, " + t + "px)" != null ? "translate(" + n + "px, " + t + "px)" : void 0 }];
		},
		selfPreviewMutedOverlay: {
			position: "x10l6tqk",
			top: "x13vifvy",
			left: "xu96u03",
			zIndex: "x1jeq31z",
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			pointerEvents: "x47corl",
			boxSizing: "x9f619",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		selfPreviewMutedOverlayWithName: {
			paddingTop: "x1iorvi4",
			paddingInlineEnd: "x11lfxj5",
			paddingBottom: "xjkvuk6",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		selfPreviewMutedOverlayDraggable: {
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		selfPreviewBorderOverlay: {
			position: "x10l6tqk",
			top: "x13vifvy",
			left: "xu96u03",
			zIndex: "xw1hff1",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x151ozwh",
			borderInlineEndColor: "xgrtj4e",
			borderBottomColor: "x7cikya",
			borderInlineStartColor: "xiotldb",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			pointerEvents: "x47corl",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		selfPreviewBorderOverlayDragging: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfPreviewBorderOverlayResizing: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfMicMutedIndicator: {
			position: "x10l6tqk",
			top: "xndqk7f",
			left: "xcqyyxr",
			zIndex: "xcegukh",
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			width: "xvy4d1p",
			height: "xxk0z11",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			opacity: "x1us6l5c",
			color: "x17t9dm2",
			pointerEvents: "x47corl",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		selfMicMutedIndicatorDragging: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfMicMutedIndicatorResizing: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfPreviewMutedOverlayDragging: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfPreviewMutedOverlayResizing: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		loadingOverlayFade: {
			opacity: "x1hc1fzr",
			transitionProperty: "x19991ni",
			transitionDuration: "x13dflua x12w9bfk",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		loadingOverlayFadeHidden: {
			opacity: "xg01cxk",
			$$css: !0
		}
	};
	function E(t) {
		var a, i = t.accentColor, l = t.animateInDelay, d = l === void 0 ? 0 : l, p = t.containerRef, S = t.floating, R = t.height, E = t.isSelfHandRaised, k = E === void 0 ? !1 : E, I = t.isSelfScreenSharing, T = t.isVideoMuted, D = t.nameOverride, x = t.selfMicMuted, $ = t.selfReaction, P = t.shouldAnimate, N = P === void 0 ? !1 : P, M = t.width, w = f(r("WAWebVoipUiPopoutWindowContext")), A = S && p != null, F = r("useWAWebVoipPeerHasReceivedFrame")(o("WAWebVoipVideoRendererInterface").selfPreviewJid), O = r("useWAWebVoipVideoTileLoadingIndicator")(F, { surface: "self" }), B = T ? Math.min(M, R) : M, W = T ? Math.min(M, R) : R, q = y(B), U = y(W);
		g(function() {
			q.current = B, U.current = W;
		}, [B, W]);
		var V = C(!1), H = V[0], G = V[1], z = C(!1), j = z[0], K = z[1], Q = C({
			x: 0,
			y: 0
		}), X = Q[0], Y = Q[1], J = C({
			x: 16,
			y: 16
		}), Z = J[0], ee = J[1], te = y(!1), ne = y(!1), re = y(null), oe = y(null), ae = y(null), ie = r("useWAWebVoipCanvasLifecycle")(ae, { isPortalMode: w.isContextInPopoutWindow || o("WAWebVoipGatingUtils").shouldUsePortalModeForSafari() }, {
			jid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			mirror: !I
		}), le = ie.canvasCallbackRef, se = ie.isCanvasMounted, ue = ie.isCanvasRegistered, ce = "video";
		T && (ce = x ? "avatar-only" : "audio-waveform"), r("useWAWebVoipWatchdogTileDom")({
			lid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			canvasRef: ae,
			popoutWindowEl: w.windowEl,
			renderMode: ce
		});
		var de = y(null), me = y(!1), pe = y(null), _e = y(null), fe = y(null), ge = y(null), he = _(function(e) {
			if (e) {
				var t = e.parentElement;
				t && (de.current = t);
			}
		}, []);
		h(function() {
			if (se) {
				var e = ae.current, t = e == null ? void 0 : e.parentElement;
				if (!(!e || !t)) {
					de.current = t;
					var n = t.clientWidth, a = t.clientHeight, i = 1280, l = 800, s = n || i, u = a || l, c = r("WAWebCallCollection").activeCall, d = c == null ? void 0 : c.selfPreviewCorner, m = d != null ? d : "bottom-right", p = q.current, _ = U.current, f = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(w.isContextInPopoutWindow), g = w.isContextInPopoutWindow ? 16 : 8, h = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(m, s, u, p, _, g, f, f, f);
					te.current = !0, K(!0), ee(h), c && !d && (c.selfPreviewCorner = m);
				}
			}
		}, [se, w.isContextInPopoutWindow]);
		var ye = function(t) {
			return t.preventDefault(), !1;
		}, Ce = function(t) {
			if (A) {
				var e = t.currentTarget, n = e.getBoundingClientRect(), r = t.clientX - n.left, o = t.clientY - n.top;
				G(!0), Y({
					x: r,
					y: o
				}), t.stopPropagation();
			}
		}, be = _(function() {
			if (oe.current != null) {
				var e;
				((e = w.windowEl) != null ? e : window).cancelAnimationFrame(oe.current), oe.current = null;
			}
		}, [w.windowEl]), ve = _(function(e) {
			var t = de.current;
			if (e == null || t == null) return null;
			var n = t.getBoundingClientRect(), r = e.clientX - n.left - X.x, o = e.clientY - n.top - X.y, a = n.width - B, i = n.height - W;
			return {
				x: Math.max(0, Math.min(r, a)),
				y: Math.max(0, Math.min(o, i))
			};
		}, [
			X.x,
			X.y,
			B,
			W
		]), Se = _(function() {
			if (oe.current = null, !!ne.current) {
				var e = ve(re.current);
				e != null && ee(e);
			}
		}, [ve]), Re = _(function(e) {
			var t;
			if (H && (re.current = {
				clientX: e.clientX,
				clientY: e.clientY
			}, oe.current == null)) {
				var n = (t = w.windowEl) != null ? t : window;
				oe.current = n.requestAnimationFrame(Se);
			}
		}, [
			Se,
			H,
			w.windowEl
		]), Le = _(function(e, t) {
			var n = de.current;
			if (!n) return {
				x: e,
				y: t
			};
			var r = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(w.isContextInPopoutWindow), a = n.getBoundingClientRect(), i = a.width / 2, l = a.height / 2, s = e < i, u = t < l, c = s ? r : a.width - B - r, d = u ? r : a.height - W - r;
			return {
				x: c,
				y: d
			};
		}, [
			W,
			B,
			w.isContextInPopoutWindow
		]), Ee = _(function() {
			if (be(), H) {
				var e, t = (e = ve(re.current)) != null ? e : Z;
				o("WAWebVoipWindowMetrics").recordWindowDragged();
				var n = Le(t.x, t.y);
				ee(n);
				var a = de.current;
				if (a) {
					var i = a.clientWidth, l = a.clientHeight, s = o("WAWebVoipSelfPreviewPositionUtils").getCornerFromPosition({
						containerHeight: l,
						containerWidth: i,
						x: n.x,
						y: n.y
					}), u = r("WAWebCallCollection").activeCall;
					u && (u.selfPreviewCorner = s);
				}
			}
			G(!1);
		}, [
			be,
			ve,
			H,
			Z,
			Le
		]), ke = w.documentEl;
		h(function() {
			var e = function() {
				ke == null || ke.removeEventListener("mousemove", Re), ke == null || ke.removeEventListener("mouseup", Ee), be(), re.current = null;
			};
			if (H) return ke == null || ke.addEventListener("mousemove", Re), ke == null || ke.addEventListener("mouseup", Ee), e;
		}, [
			ke,
			H,
			Re,
			Ee,
			be
		]);
		var Ie = y(Z);
		g(function() {
			Ie.current = Z;
		}, [Z]), g(function() {
			ne.current = H;
		}, [H]);
		var Te = o("useWAWebTimeout").useTimeout(function() {
			te.current = !1, K(!1);
		}, v), De = Te[0], xe = Te[1], $e = (a = w.windowEl) != null ? a : window, Pe = w.isContextInPopoutWindow;
		g(function() {
			var e = ae.current, t = function(t) {
				if (!ne.current) {
					var e = ae.current;
					for (var n of t) if (e && n.target === e.parentElement) {
						var a = e.parentElement;
						if (!a) return;
						var i = a.clientWidth, l = a.clientHeight, s = r("WAWebCallCollection").activeCall, u = s == null ? void 0 : s.selfPreviewCorner, c = void 0;
						if (u) c = u;
						else {
							var d = Ie.current;
							c = o("WAWebVoipSelfPreviewPositionUtils").getCornerFromPosition({
								containerHeight: l,
								containerWidth: i,
								x: d.x,
								y: d.y
							});
						}
						var m = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(Pe), p = Pe ? 16 : 8, _ = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(c, i, l, q.current, U.current, p, m, m, m), f = _.x, g = _.y, h = i - q.current, y = l - U.current, C = Math.max(0, Math.min(f, h)), b = Math.max(0, Math.min(g, y));
						o("WAWebVoipWindowMetrics").recordWindowResized();
						var v = Ie.current;
						(v.x !== C || v.y !== b) && (te.current = !0, K(!0), ee({
							x: C,
							y: b
						}), De());
					}
				}
			}, n = new $e.ResizeObserver(t);
			return e != null && e.parentElement && n.observe(e.parentElement), function() {
				n.disconnect(), xe();
			};
		}, [
			$e,
			Pe,
			De,
			xe
		]);
		var Ne = _(function() {
			var e;
			if (!(!S || !de.current)) {
				var t = de.current.clientWidth, n = de.current.clientHeight;
				if (!(t === 0 || n === 0)) {
					var a = r("WAWebCallCollection").activeCall, i = (e = a == null ? void 0 : a.selfPreviewCorner) != null ? e : "bottom-right", l = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(w.isContextInPopoutWindow), s = w.isContextInPopoutWindow ? 16 : 8, u = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(i, t, n, B, W, s, l, l, l);
					te.current = !0, K(!0), ee(u);
				}
			}
		}, [
			B,
			W,
			S,
			w.isContextInPopoutWindow
		]);
		return g(function() {
			Ne();
		}, [T, Ne]), g(function() {
			var e = ae.current;
			e && ue && o("WAWebVoipCanvasUtils").resizeCanvasBuffer(e, B, W);
		}, [
			B,
			W,
			ue
		]), g(function() {
			var e = ae.current;
			e && ue && o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.setCoverFit(e, !0);
		}, [ue]), r("useWAWebVisibilityAwarePolling")({
			callback: function() {
				var e = ae.current, t = e == null ? void 0 : e.parentElement;
				if (!t) return !1;
				if (ne.current) return !0;
				var n = t.clientWidth, a = t.clientHeight;
				if (n > 0 && a > 0) {
					var i, l = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(w.isContextInPopoutWindow), s = w.isContextInPopoutWindow ? 16 : 8, u = r("WAWebCallCollection").activeCall, c = (i = u == null ? void 0 : u.selfPreviewCorner) != null ? i : "bottom-right", d = q.current, m = U.current, p = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(c, n, a, d, m, s, l, l, l), _ = n - d, f = a - m, g = Math.max(0, Math.min(p.x, _)), h = Math.max(0, Math.min(p.y, f)), y = Ie.current;
					return (y.x !== g || y.y !== h) && (te.current = !0, K(!0), ee({
						x: g,
						y: h
					}), De()), !1;
				}
				return !0;
			},
			interval: 200,
			enabled: se
		}), g(function() {
			if (j) return De(), function() {
				return xe();
			};
		}, [
			xe,
			j,
			Z,
			De
		]), g(function() {
			N && S && ae.current && !me.current && (me.current = !0, window.requestAnimationFrame(function() {
				var e = [];
				ae.current && (ae.current.style.opacity = "0", e.push(ae.current)), pe.current && (pe.current.style.opacity = "0", e.push(pe.current)), _e.current && (_e.current.style.opacity = "0", e.push(_e.current)), fe.current && (fe.current.style.opacity = "0", e.push(fe.current)), ge.current && (ge.current.style.opacity = "0", e.push(ge.current)), e.length > 0 && r("WAWebVelocityAnimate")(e, { opacity: [1, 0] }, {
					duration: 350,
					delay: d,
					easing: "easeInElastic"
				});
			}));
		}, [
			S,
			d,
			N,
			ue
		]), g(function() {
			ue && n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if ((t == null ? void 0 : t.type) !== "web") return;
					var n = "static-call-id", r = "self-preview-jid", a = yield t.startVideoPreview(n, r);
					a === 0 || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] videoCall: startVideoPreview failed ", ""])), a);
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: ui: videoCall: startVideoPreview error: ", ""])), e);
				}
			})();
		}, [ue]), S ? m.jsxs(m.Fragment, { children: [
			m.jsx("canvas", babelHelpers.extends({
				ref: le,
				width: B * window.devicePixelRatio,
				height: W * window.devicePixelRatio,
				onContextMenu: ye,
				onMouseDown: Ce
			}, (c || (c = r("stylex"))).props([
				L.canvas,
				L.canvasFloating,
				L.selfPreviewCanvas,
				A && L.selfPreviewCanvasDraggable,
				L.customWidthHeight(B, W),
				H && L.selfPreviewCanvasDragging,
				j && L.selfPreviewCanvasResizing,
				L.selfPreviewCanvasPosition(Z.y, Z.x)
			]))),
			!T && O.kind === "spinner" && m.jsx("div", babelHelpers.extends({
				role: "status",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip-self-preview-loading"
			}, (c || (c = r("stylex"))).props([
				L.selfPreviewMutedOverlay,
				L.customWidthHeight(B, W),
				H && L.selfPreviewMutedOverlayDragging,
				j && L.selfPreviewMutedOverlayResizing,
				L.selfPreviewCanvasPosition(Z.y, Z.x),
				L.loadingOverlayFade,
				O.isFadingOut && L.loadingOverlayFadeHidden
			]), { children: m.jsx(r("WDSSpinner.react"), {
				size: 24,
				testid: "voip-self-preview-loading-spinner"
			}) })),
			T && m.jsx("div", babelHelpers.extends({
				ref: function(t) {
					he(t), fe.current = t;
				},
				role: "status",
				"aria-label": "Video is paused",
				onMouseDown: Ce
			}, (c || (c = r("stylex"))).props([
				L.selfPreviewMutedOverlay,
				L.customWidthHeight(B, W),
				A && L.selfPreviewMutedOverlayDraggable,
				A && L.selfPreviewCanvasDraggable,
				H && L.selfPreviewMutedOverlayDragging,
				j && L.selfPreviewMutedOverlayResizing,
				D != null && L.selfPreviewMutedOverlayWithName,
				L.selfPreviewCanvasPosition(Z.y, Z.x)
			]), { children: m.jsx(r("WAWebCallParticipantInfo.react"), {
				accentColor: i,
				userId: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
				imageSize: "small",
				nameOverride: D,
				showTextInfo: D != null,
				showAudioWaveform: !x,
				audioLevelType: "self",
				waveformBarCount: 5
			}) })),
			x && m.jsx("div", babelHelpers.extends({
				ref: _e,
				role: "status",
				"aria-label": "Your microphone is muted"
			}, (c || (c = r("stylex"))).props([
				L.selfMicMutedIndicator,
				H && L.selfMicMutedIndicatorDragging,
				j && L.selfMicMutedIndicatorResizing,
				L.selfPreviewCanvasPosition(Z.y, Z.x)
			]), { children: m.jsx(r("WDSIconIcMicOffFilled.react"), {
				height: 16,
				width: 16
			}) })),
			A && m.jsx("div", babelHelpers.extends({ ref: pe }, (c || (c = r("stylex"))).props([
				L.selfPreviewBorderOverlay,
				L.customWidthHeight(B - 2 * b, W - 2 * b),
				H && L.selfPreviewBorderOverlayDragging,
				j && L.selfPreviewBorderOverlayResizing,
				L.selfPreviewCanvasPosition(Z.y, Z.x)
			]))),
			m.jsx(o("WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay.react").WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay, {
				effectiveHeight: W,
				effectiveWidth: B,
				isDragging: H,
				isResizing: j,
				isSelfHandRaised: k,
				overlayRef: ge,
				previewPosition: Z,
				selfReaction: $
			})
		] }) : m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props([L.nonFloatingContainer, L.nonFloatingDimensions(B, W)]), { children: [
			m.jsx("canvas", {
				ref: le,
				width: B * window.devicePixelRatio,
				height: W * window.devicePixelRatio,
				onContextMenu: ye,
				className: "x68pp3s x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x87ps6o x193iq5w xmz0i5r x13vifvy xu96u03 xwukr4l xdd4er5 x11xpdln x1d8287x x9lcvmn xh8yej3 x5yr21d"
			}),
			!T && O.kind === "spinner" && m.jsx("div", babelHelpers.extends({
				role: "status",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip-self-preview-loading"
			}, {
				0: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 xh8yej3 x5yr21d x1hc1fzr x19991ni x13dflua x12w9bfk x9lcvmn" },
				1: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 xh8yej3 x5yr21d x19991ni x13dflua x12w9bfk x9lcvmn xg01cxk" }
			}[!!O.isFadingOut << 0], { children: m.jsx(r("WDSSpinner.react"), {
				size: 24,
				testid: "voip-self-preview-loading-spinner"
			}) })),
			T && m.jsx("div", babelHelpers.extends({
				ref: he,
				role: "status",
				"aria-label": "Video is paused"
			}, {
				0: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 x11xpdln x1d8287x x9lcvmn xh8yej3 x5yr21d" },
				1: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 x11xpdln x1d8287x x9lcvmn xh8yej3 x5yr21d x1iorvi4 x11lfxj5 xjkvuk6 x135b78x" }
			}[(D != null) << 0], { children: m.jsx(r("WAWebCallParticipantInfo.react"), {
				accentColor: i,
				userId: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
				imageSize: "small",
				nameOverride: D,
				showTextInfo: D != null,
				showAudioWaveform: !x,
				audioLevelType: "self",
				waveformBarCount: 5
			}) })),
			x && m.jsx("div", {
				role: "status",
				"aria-label": "Your microphone is muted",
				className: "x10l6tqk xndqk7f xcqyyxr xcegukh x1od0jb8 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11 x78zum5 x6s0dn4 xl56j7k x1us6l5c x17t9dm2 x47corl x11xpdln x1d8287x x9lcvmn",
				children: m.jsx(r("WDSIconIcMicOffFilled.react"), {
					height: 16,
					width: 16
				})
			}),
			m.jsx("div", { className: "xu96u03 xw1hff1 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x151ozwh xgrtj4e x7cikya xiotldb xyi3aci xwf5gio x1p453bz x1suzm8a x47corl x11xpdln x1d8287x x9lcvmn x10l6tqk xnfr1j x1h1655f x19ip775 x14q0ukc" }),
			m.jsx(o("WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay.react").WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay, {
				effectiveHeight: W,
				effectiveWidth: B,
				isSelfHandRaised: k,
				overlayRef: ge,
				selfReaction: $
			})
		] }));
	}
	E.displayName = E.name + " [from " + i.id + "]", l.WAWebVoipUiVideoCallSelfPreview = E, l.WAWebVoipUiVideoCallSelfPreviewFullWidth = o("WAWebVoipUiVideoCallSelfPreviewFullWidth.react").WAWebVoipUiVideoCallSelfPreviewFullWidth;
}), 226);
