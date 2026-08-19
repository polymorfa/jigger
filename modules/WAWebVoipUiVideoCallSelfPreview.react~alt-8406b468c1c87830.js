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
		var n, a = t.accentColor, i = t.animateInDelay, l = i === void 0 ? 0 : i, d = t.containerRef, p = t.floating, S = t.height, R = t.isSelfHandRaised, E = R === void 0 ? !1 : R, k = t.isSelfScreenSharing, I = t.isVideoMuted, T = t.nameOverride, D = t.selfMicMuted, x = t.selfReaction, $ = t.shouldAnimate, P = $ === void 0 ? !1 : $, N = t.width, M = f(r("WAWebVoipUiPopoutWindowContext")), w = p && d != null, A = r("useWAWebVoipPeerHasReceivedFrame")(o("WAWebVoipVideoRendererInterface").selfPreviewJid), F = r("useWAWebVoipVideoTileLoadingIndicator")(A, { surface: "self" }), O = I ? Math.min(N, S) : N, B = I ? Math.min(N, S) : S, W = y(O), q = y(B);
		g(function() {
			W.current = O, q.current = B;
		}, [O, B]);
		var U = C(!1), V = U[0], H = U[1], G = C(!1), z = G[0], j = G[1], K = C({
			x: 0,
			y: 0
		}), Q = K[0], X = K[1], Y = C({
			x: 16,
			y: 16
		}), J = Y[0], Z = Y[1], ee = y(!1), te = y(!1), ne = y(null), re = y(null), oe = y(null), ae = r("useWAWebVoipCanvasLifecycle")(oe, { isPortalMode: M.isContextInPopoutWindow || o("WAWebVoipGatingUtils").shouldUsePortalModeForSafari() }, {
			jid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			mirror: !k
		}), ie = ae.canvasCallbackRef, le = ae.isCanvasMounted, se = ae.isCanvasRegistered, ue = "video";
		I && (ue = D ? "avatar-only" : "audio-waveform"), r("useWAWebVoipWatchdogTileDom")({
			lid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			canvasRef: oe,
			popoutWindowEl: M.windowEl,
			renderMode: ue
		});
		var ce = y(null), de = y(!1), me = y(null), pe = y(null), _e = y(null), fe = y(null), ge = _(function(e) {
			if (e) {
				var t = e.parentElement;
				t && (ce.current = t);
			}
		}, []);
		h(function() {
			if (le) {
				var e = oe.current, t = e == null ? void 0 : e.parentElement;
				if (!(!e || !t)) {
					ce.current = t;
					var n = t.clientWidth, a = t.clientHeight, i = 1280, l = 800, s = n || i, u = a || l, c = r("WAWebCallCollection").activeCall, d = c == null ? void 0 : c.selfPreviewCorner, m = d != null ? d : "bottom-right", p = W.current, _ = q.current, f = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(M.isContextInPopoutWindow), g = M.isContextInPopoutWindow ? 16 : 8, h = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(m, s, u, p, _, g, f, f, f);
					ee.current = !0, j(!0), Z(h), c && !d && (c.selfPreviewCorner = m);
				}
			}
		}, [le, M.isContextInPopoutWindow]);
		var he = function(t) {
			return t.preventDefault(), !1;
		}, ye = function(t) {
			if (w) {
				var e = t.currentTarget, n = e.getBoundingClientRect(), r = t.clientX - n.left, o = t.clientY - n.top;
				H(!0), X({
					x: r,
					y: o
				}), t.stopPropagation();
			}
		}, Ce = _(function() {
			if (re.current != null) {
				var e;
				((e = M.windowEl) != null ? e : window).cancelAnimationFrame(re.current), re.current = null;
			}
		}, [M.windowEl]), be = _(function(e) {
			var t = ce.current;
			if (e == null || t == null) return null;
			var n = t.getBoundingClientRect(), r = e.clientX - n.left - Q.x, o = e.clientY - n.top - Q.y, a = n.width - O, i = n.height - B;
			return {
				x: Math.max(0, Math.min(r, a)),
				y: Math.max(0, Math.min(o, i))
			};
		}, [
			Q.x,
			Q.y,
			O,
			B
		]), ve = _(function() {
			if (re.current = null, !!te.current) {
				var e = be(ne.current);
				e != null && Z(e);
			}
		}, [be]), Se = _(function(e) {
			var t;
			if (V && (ne.current = {
				clientX: e.clientX,
				clientY: e.clientY
			}, re.current == null)) {
				var n = (t = M.windowEl) != null ? t : window;
				re.current = n.requestAnimationFrame(ve);
			}
		}, [
			ve,
			V,
			M.windowEl
		]), Re = _(function(e, t) {
			var n = ce.current;
			if (!n) return {
				x: e,
				y: t
			};
			var r = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(M.isContextInPopoutWindow), a = n.getBoundingClientRect(), i = a.width / 2, l = a.height / 2, s = e < i, u = t < l, c = s ? r : a.width - O - r, d = u ? r : a.height - B - r;
			return {
				x: c,
				y: d
			};
		}, [
			B,
			O,
			M.isContextInPopoutWindow
		]), Le = _(function() {
			if (Ce(), V) {
				var e, t = (e = be(ne.current)) != null ? e : J;
				o("WAWebVoipWindowMetrics").recordWindowDragged();
				var n = Re(t.x, t.y);
				Z(n);
				var a = ce.current;
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
			H(!1);
		}, [
			Ce,
			be,
			V,
			J,
			Re
		]), Ee = M.documentEl;
		h(function() {
			var e = function() {
				Ee == null || Ee.removeEventListener("mousemove", Se), Ee == null || Ee.removeEventListener("mouseup", Le), Ce(), ne.current = null;
			};
			if (V) return Ee == null || Ee.addEventListener("mousemove", Se), Ee == null || Ee.addEventListener("mouseup", Le), e;
		}, [
			Ee,
			V,
			Se,
			Le,
			Ce
		]);
		var ke = y(J);
		g(function() {
			ke.current = J;
		}, [J]), g(function() {
			te.current = V;
		}, [V]);
		var Ie = o("useWAWebTimeout").useTimeout(function() {
			ee.current = !1, j(!1);
		}, v), Te = Ie[0], De = Ie[1], xe = (n = M.windowEl) != null ? n : window, $e = M.isContextInPopoutWindow;
		g(function() {
			var e = oe.current, t = function(t) {
				if (!te.current) {
					var e = oe.current;
					for (var n of t) if (e && n.target === e.parentElement) {
						var a = e.parentElement;
						if (!a) return;
						var i = a.clientWidth, l = a.clientHeight, s = r("WAWebCallCollection").activeCall, u = s == null ? void 0 : s.selfPreviewCorner, c = void 0;
						if (u) c = u;
						else {
							var d = ke.current;
							c = o("WAWebVoipSelfPreviewPositionUtils").getCornerFromPosition({
								containerHeight: l,
								containerWidth: i,
								x: d.x,
								y: d.y
							});
						}
						var m = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin($e), p = $e ? 16 : 8, _ = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(c, i, l, W.current, q.current, p, m, m, m), f = _.x, g = _.y, h = i - W.current, y = l - q.current, C = Math.max(0, Math.min(f, h)), b = Math.max(0, Math.min(g, y));
						o("WAWebVoipWindowMetrics").recordWindowResized();
						var v = ke.current;
						(v.x !== C || v.y !== b) && (ee.current = !0, j(!0), Z({
							x: C,
							y: b
						}), Te());
					}
				}
			}, n = new xe.ResizeObserver(t);
			return e != null && e.parentElement && n.observe(e.parentElement), function() {
				n.disconnect(), De();
			};
		}, [
			xe,
			$e,
			Te,
			De
		]);
		var Pe = _(function() {
			var e;
			if (!(!p || !ce.current)) {
				var t = ce.current.clientWidth, n = ce.current.clientHeight;
				if (!(t === 0 || n === 0)) {
					var a = r("WAWebCallCollection").activeCall, i = (e = a == null ? void 0 : a.selfPreviewCorner) != null ? e : "bottom-right", l = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(M.isContextInPopoutWindow), s = M.isContextInPopoutWindow ? 16 : 8, u = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(i, t, n, O, B, s, l, l, l);
					ee.current = !0, j(!0), Z(u);
				}
			}
		}, [
			O,
			B,
			p,
			M.isContextInPopoutWindow
		]);
		return g(function() {
			Pe();
		}, [I, Pe]), g(function() {
			var e = oe.current;
			e && se && o("WAWebVoipCanvasUtils").resizeCanvasBuffer(e, O, B);
		}, [
			O,
			B,
			se
		]), g(function() {
			var e = oe.current;
			e && se && o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.setCoverFit(e, !0);
		}, [se]), r("useWAWebVisibilityAwarePolling")({
			callback: function() {
				var e = oe.current, t = e == null ? void 0 : e.parentElement;
				if (!t) return !1;
				if (te.current) return !0;
				var n = t.clientWidth, a = t.clientHeight;
				if (n > 0 && a > 0) {
					var i, l = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(M.isContextInPopoutWindow), s = M.isContextInPopoutWindow ? 16 : 8, u = r("WAWebCallCollection").activeCall, c = (i = u == null ? void 0 : u.selfPreviewCorner) != null ? i : "bottom-right", d = W.current, m = q.current, p = o("WAWebVoipSelfPreviewPositionUtils").getPositionFromCorner(c, n, a, d, m, s, l, l, l), _ = n - d, f = a - m, g = Math.max(0, Math.min(p.x, _)), h = Math.max(0, Math.min(p.y, f)), y = ke.current;
					return (y.x !== g || y.y !== h) && (ee.current = !0, j(!0), Z({
						x: g,
						y: h
					}), Te()), !1;
				}
				return !0;
			},
			interval: 200,
			enabled: le
		}), g(function() {
			if (z) return Te(), function() {
				return De();
			};
		}, [
			De,
			z,
			J,
			Te
		]), g(function() {
			P && p && oe.current && !de.current && (de.current = !0, window.requestAnimationFrame(function() {
				var e = [];
				oe.current && (oe.current.style.opacity = "0", e.push(oe.current)), me.current && (me.current.style.opacity = "0", e.push(me.current)), pe.current && (pe.current.style.opacity = "0", e.push(pe.current)), _e.current && (_e.current.style.opacity = "0", e.push(_e.current)), fe.current && (fe.current.style.opacity = "0", e.push(fe.current)), e.length > 0 && r("WAWebVelocityAnimate")(e, { opacity: [1, 0] }, {
					duration: 350,
					delay: l,
					easing: "easeInElastic"
				});
			}));
		}, [
			p,
			l,
			P,
			se
		]), g(function() {
			se && (async function() {
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if ((t == null ? void 0 : t.type) !== "web") return;
					var n = "static-call-id", r = "self-preview-jid", a = await t.startVideoPreview(n, r);
					a === 0 || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] videoCall: startVideoPreview failed ", ""])), a);
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: ui: videoCall: startVideoPreview error: ", ""])), e);
				}
			})();
		}, [se]), p ? m.jsxs(m.Fragment, { children: [
			m.jsx("canvas", babelHelpers.extends({
				ref: ie,
				width: O * window.devicePixelRatio,
				height: B * window.devicePixelRatio,
				onContextMenu: he,
				onMouseDown: ye
			}, (c || (c = r("stylex"))).props([
				L.canvas,
				L.canvasFloating,
				L.selfPreviewCanvas,
				w && L.selfPreviewCanvasDraggable,
				L.customWidthHeight(O, B),
				V && L.selfPreviewCanvasDragging,
				z && L.selfPreviewCanvasResizing,
				L.selfPreviewCanvasPosition(J.y, J.x)
			]))),
			!I && F.kind === "spinner" && m.jsx("div", babelHelpers.extends({
				role: "status",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip-self-preview-loading"
			}, (c || (c = r("stylex"))).props([
				L.selfPreviewMutedOverlay,
				L.customWidthHeight(O, B),
				V && L.selfPreviewMutedOverlayDragging,
				z && L.selfPreviewMutedOverlayResizing,
				L.selfPreviewCanvasPosition(J.y, J.x),
				L.loadingOverlayFade,
				F.isFadingOut && L.loadingOverlayFadeHidden
			]), { children: m.jsx(r("WDSSpinner.react"), {
				size: 24,
				testid: "voip-self-preview-loading-spinner"
			}) })),
			I && m.jsx("div", babelHelpers.extends({
				ref: function(t) {
					ge(t), _e.current = t;
				},
				role: "status",
				"aria-label": "Video is paused",
				onMouseDown: ye
			}, (c || (c = r("stylex"))).props([
				L.selfPreviewMutedOverlay,
				L.customWidthHeight(O, B),
				w && L.selfPreviewMutedOverlayDraggable,
				w && L.selfPreviewCanvasDraggable,
				V && L.selfPreviewMutedOverlayDragging,
				z && L.selfPreviewMutedOverlayResizing,
				T != null && L.selfPreviewMutedOverlayWithName,
				L.selfPreviewCanvasPosition(J.y, J.x)
			]), { children: m.jsx(r("WAWebCallParticipantInfo.react"), {
				accentColor: a,
				userId: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
				imageSize: "small",
				nameOverride: T,
				showTextInfo: T != null,
				showAudioWaveform: !D,
				audioLevelType: "self",
				waveformBarCount: 5
			}) })),
			D && m.jsx("div", babelHelpers.extends({
				ref: pe,
				role: "status",
				"aria-label": "Your microphone is muted"
			}, (c || (c = r("stylex"))).props([
				L.selfMicMutedIndicator,
				V && L.selfMicMutedIndicatorDragging,
				z && L.selfMicMutedIndicatorResizing,
				L.selfPreviewCanvasPosition(J.y, J.x)
			]), { children: m.jsx(r("WDSIconIcMicOffFilled.react"), {
				height: 16,
				width: 16
			}) })),
			w && m.jsx("div", babelHelpers.extends({ ref: me }, (c || (c = r("stylex"))).props([
				L.selfPreviewBorderOverlay,
				L.customWidthHeight(O - 2 * b, B - 2 * b),
				V && L.selfPreviewBorderOverlayDragging,
				z && L.selfPreviewBorderOverlayResizing,
				L.selfPreviewCanvasPosition(J.y, J.x)
			]))),
			m.jsx(o("WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay.react").WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay, {
				effectiveHeight: B,
				effectiveWidth: O,
				isDragging: V,
				isResizing: z,
				isSelfHandRaised: E,
				overlayRef: fe,
				previewPosition: J,
				selfReaction: x
			})
		] }) : m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props([L.nonFloatingContainer, L.nonFloatingDimensions(O, B)]), { children: [
			m.jsx("canvas", {
				ref: ie,
				width: O * window.devicePixelRatio,
				height: B * window.devicePixelRatio,
				onContextMenu: he,
				className: "x68pp3s x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x87ps6o x193iq5w xmz0i5r x13vifvy xu96u03 xwukr4l xdd4er5 x11xpdln x1d8287x x9lcvmn xh8yej3 x5yr21d"
			}),
			!I && F.kind === "spinner" && m.jsx("div", babelHelpers.extends({
				role: "status",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip-self-preview-loading"
			}, {
				0: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 xh8yej3 x5yr21d x1hc1fzr x19991ni x13dflua x12w9bfk x9lcvmn" },
				1: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 xh8yej3 x5yr21d x19991ni x13dflua x12w9bfk x9lcvmn xg01cxk" }
			}[!!F.isFadingOut << 0], { children: m.jsx(r("WDSSpinner.react"), {
				size: 24,
				testid: "voip-self-preview-loading-spinner"
			}) })),
			I && m.jsx("div", babelHelpers.extends({
				ref: ge,
				role: "status",
				"aria-label": "Video is paused"
			}, {
				0: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 x11xpdln x1d8287x x9lcvmn xh8yej3 x5yr21d" },
				1: { className: "x10l6tqk x13vifvy xu96u03 x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x9f619 x11xpdln x1d8287x x9lcvmn xh8yej3 x5yr21d x1iorvi4 x11lfxj5 xjkvuk6 x135b78x" }
			}[(T != null) << 0], { children: m.jsx(r("WAWebCallParticipantInfo.react"), {
				accentColor: a,
				userId: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
				imageSize: "small",
				nameOverride: T,
				showTextInfo: T != null,
				showAudioWaveform: !D,
				audioLevelType: "self",
				waveformBarCount: 5
			}) })),
			D && m.jsx("div", {
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
				effectiveHeight: B,
				effectiveWidth: O,
				isSelfHandRaised: E,
				overlayRef: fe,
				selfReaction: x
			})
		] }));
	}
	E.displayName = E.name + " [from " + i.id + "]", l.WAWebVoipUiVideoCallSelfPreview = E, l.WAWebVoipUiVideoCallSelfPreviewFullWidth = o("WAWebVoipUiVideoCallSelfPreviewFullWidth.react").WAWebVoipUiVideoCallSelfPreviewFullWidth;
}), 226);
