__d("WAWebVoipUiVideoCallPeerVideo.react", [
	"fbt",
	"WALogger",
	"WAWebCallLogUtils",
	"WAWebCallParticipantInfo.react",
	"WAWebCurrentUser",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebVoipAVSyncDebugOverlay.react",
	"WAWebVoipCanvasUtils",
	"WAWebVoipGatingUtils",
	"WAWebVoipMicOffIndicator.react",
	"WAWebVoipRaisedHandDisplay.react",
	"WAWebVoipReactionDisplay.react",
	"WAWebVoipStackInterface",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipVideoRendererRegistry",
	"WAWebVoipVideoStateOverlay.react",
	"asyncToGeneratorRuntime",
	"justknobx",
	"react",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebVoipCallVisibility",
	"useWAWebVoipCanvasLifecycle",
	"useWAWebVoipPeerHasReceivedFrame",
	"useWAWebVoipVideoTileLoadingIndicator",
	"useWAWebVoipWatchdogTileDom"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useCallback, h = f.useContext, y = f.useEffect, C = f.useLayoutEffect, b = f.useRef, v = f.useState, S = 250, R = 250, L = {
		canvas: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			zIndex: "x1ja2u2z",
			width: "xh8yej3",
			height: "x5yr21d",
			opacity: "xg01cxk",
			pointerEvents: "x47corl",
			transitionProperty: "x19991ni",
			transitionDuration: "x1rvut6x x12w9bfk",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		canvasVisible: {
			opacity: "x1hc1fzr",
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		canvasWithoutTransition: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		peerCanvas: {
			width: "x1m22und",
			height: "x17whmu9",
			marginTop: "x1380le5",
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		peerCanvasBackground: {
			backgroundColor: "x1e6sl3u",
			$$css: !0
		},
		peerCanvasPopout: {
			position: "x1n2onr6",
			top: "x80663w",
			insetInlineStart: "xhi6v0a",
			left: null,
			right: null,
			width: "x14atkfc",
			height: "xt7dq6l",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			$$css: !0
		},
		peerImageContainerPopout: {
			width: "x1m22und",
			height: "x17whmu9",
			marginTop: "x1380le5",
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			marginBottom: "xat24cr",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		canvasBlurred: {
			filter: "x1wd8k3y",
			clipPath: "x9dt7sq",
			$$css: !0
		},
		peerImageContainer: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			zIndex: "x1ja2u2z",
			backgroundColor: "x1od0jb8",
			containerType: "xpqogu8",
			$$css: !0
		},
		peerImageContainerSuppressible: {
			opacity: "xg01cxk",
			transitionProperty: "x19991ni",
			transitionDuration: "x1rvut6x x12w9bfk",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		peerImageContainerSuppressibleVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		peerCanvasWithBanner: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			$$css: !0
		}
	};
	function E(t) {
		var a, i = t.accentColor, l = t.callLogMsg, p = t.callState, f = t.canvasContainerRef, S = t.isCompactLayout, R = S === void 0 ? !1 : S, E = t.isDominantSpeaker, T = E === void 0 ? !1 : E, D = t.isGroupCall, x = D === void 0 ? !1 : D, $ = t.isHandRaised, P = $ === void 0 ? !1 : $, N = t.isHorizontalLayout, M = N === void 0 ? !1 : N, w = t.isScreenShareBannerVisible, A = w === void 0 ? !1 : w, F = t.isScreenShareTile, O = F === void 0 ? !1 : F, B = t.isSelf, W = B === void 0 ? !1 : B, q = t.isSelfScreenSharing, U = q === void 0 ? !1 : q, V = t.isStripTile, H = V === void 0 ? !1 : V, G = t.onReadyToDisplay, z = t.participantName, j = z === void 0 ? null : z, K = t.peerJid, Q = t.peerMicMuted, X = t.peerReconnectingState, Y = t.peerVideoMuted, J = Y === void 0 ? !1 : Y, Z = t.peerVideoPaused, ee = Z === void 0 ? !1 : Z, te = t.reaction, ne = t.ref, re = t.showMicIndicator, oe = re === void 0 ? !0 : re, ae = t.userId, ie = h(r("WAWebVoipUiPopoutWindowContext")), le = o("useWAWebABPropConfigValue").useABPropConfigValue("web_voip_av_sync_debug_overlay"), se = r("useWAWebVoipCallVisibility")(), ue = r("justknobx")._("5459"), ce = r("useWAWebVoipCanvasLifecycle")(ne, {
			isPortalMode: ie.isContextInPopoutWindow || o("WAWebVoipGatingUtils").shouldUsePortalModeForSafari(),
			shouldSetCssDimensionsInPortalMode: !x && ie.isContextInPopoutWindow,
			useDoubleRAF: !0
		}, {
			jid: K,
			mirror: W && !U
		}), de = ce.canvasCallbackRef, me = ce.isCanvasMounted, pe = ce.isCanvasRegistered, _e = v(null), fe = _e[0], ge = _e[1], he = g(function(e) {
			de(e), ge(e);
		}, [de]), ye = v(function() {
			if (K) {
				var e = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.getVideoDimensions(K);
				if (e != null && e.height > 0) return e.width / e.height;
			}
			return null;
		}), Ce = ye[0], be = ye[1];
		y(function() {
			var e = function(t, n, r) {
				if (K && t === K && r > 0 && n > 0) {
					var e = n / r;
					be(e);
				}
			}, t = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addVideoDimensionChangeListener(e);
			return t;
		}, [K]);
		var ve = r("useWAWebVoipPeerHasReceivedFrame")(K), Se = v(null), Re = Se[0], Le = Se[1], Ee = Re != null && Re === fe, ke = Ee || G == null && ve, Ie = r("useWAWebVoipVideoTileLoadingIndicator")(ke, {
			surface: "peer",
			isGroupCall: x,
			isCameraMuted: J
		});
		y(function() {
			var e;
			if (G != null) {
				if (J) {
					G();
					return;
				}
				var t = fe;
				if (!(!me || t == null)) {
					if (ee) {
						G();
						return;
					}
					var n = (e = ie.windowEl) != null ? e : window, r = null, a = null, i = function() {
						ne.current === t && (Le(t), r = n.requestAnimationFrame(function() {
							a = n.requestAnimationFrame(function() {
								ne.current === t && G();
							});
						}));
					}, l;
					return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasRenderedFirstFrameForCanvas(t) ? i() : l = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addFirstFrameRenderedListenerForCanvas(t, i), function() {
						l == null || l(), r != null && n.cancelAnimationFrame(r), a != null && n.cancelAnimationFrame(a);
					};
				}
			}
		}, [
			me,
			fe,
			G,
			J,
			ee,
			ie.windowEl,
			ne
		]);
		var Te = "video";
		J && (Te = Q ? "avatar-only" : "audio-waveform"), r("useWAWebVoipWatchdogTileDom")({
			lid: K,
			canvasRef: ne,
			popoutWindowEl: ie.windowEl,
			renderMode: ke ? Te : "unknown"
		}), y(function() {
			if (!(!ue || W || o("WAWebVoipGatingUtils").isGuestViewer() || !K || K === "" || !me)) return se ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] renderer: resuming rendering for peer ", ""])), K), o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resumeRenderingForJid(K)) : (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] renderer: pausing rendering for peer ", ""])), K), o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.pauseRenderingForJid(K)), function() {
				o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resumeRenderingForJid(K);
			};
		}, [
			se,
			K,
			W,
			ue,
			me
		]), y(function() {
			if (!(!W || !pe)) {
				var e = !1;
				return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
						if (e || (t == null ? void 0 : t.type) !== "web") return;
						var n = "static-call-id", r = "self-preview-jid", a = yield t.startVideoPreview(n, r);
						a === 0 || o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip] peerVideo: startVideoPreview failed ", ""])), a);
					} catch (e) {
						o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: ui: peerVideo: startVideoPreview error: ", ""])), e);
					}
				})(), function() {
					e = !0;
				};
			}
		}, [W, pe]);
		var De = b(null), xe = b(null), $e = b(null), Pe = Ce != null && Ce < 1, Ne = x === !0 && Pe && !T && !O && !H, Me = g(function(e) {
			De.current != null && (window.cancelAnimationFrame(De.current), De.current = null), window.clearTimeout(xe.current), xe.current = null;
			var t = function() {
				var t = ne.current;
				for (var n of e) if (x === !0 && n.target === $e.current) {
					var r = n.contentRect.width, a = n.contentRect.height;
					r > 0 && a > 0 && t && o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, r, a);
				} else if (ie.isContextInPopoutWindow && x !== !0 && n.target === (f == null ? void 0 : f.current)) {
					var i = Math.ceil(n.contentRect.width), l = Math.ceil(n.contentRect.height);
					i > 0 && l > 0 && t && (t.style.width = i + "px", t.style.height = l + "px", o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, i, l));
				} else if (t && n.target === t) {
					var s = n.contentRect;
					o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, s.width, s.height);
				}
			};
			ie.isContextInPopoutWindow ? t() : (De.current = window.requestAnimationFrame(t), xe.current = window.setTimeout(t, 200));
		}, [
			f,
			x,
			ie.isContextInPopoutWindow,
			ne
		]);
		y(function() {
			var e, t;
			if (!J) {
				var n = ne.current, r = $e.current, o = f == null ? void 0 : f.current, a = (e = (t = ie.windowEl) == null ? void 0 : t.ResizeObserver) != null ? e : ResizeObserver, i = new a(Me);
				return x === !0 && r ? i.observe(r) : ie.isContextInPopoutWindow && o ? i.observe(o) : n && i.observe(n), function() {
					i.disconnect();
				};
			}
		}, [
			f,
			Me,
			J,
			ne,
			ie.isContextInPopoutWindow,
			ie.windowEl,
			x
		]), y(function() {
			return function() {
				De.current != null && window.cancelAnimationFrame(De.current), window.clearTimeout(xe.current);
			};
		}, []), y(function() {
			var e = ne.current;
			!e || !pe || o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.setCoverFit(e, I(x, T, O));
		}, [
			T,
			x,
			O,
			pe,
			ne
		]), C(function() {
			if (!(x !== !0 || !pe)) {
				var e = ne.current, t = $e.current;
				if (!(e == null || t == null)) {
					var n = function() {
						var n = t.clientHeight, r = t.clientWidth;
						return r > 0 && n > 0 ? (o("WAWebVoipCanvasUtils").resizeCanvasBuffer(e, r, n), !0) : !1;
					};
					if (!n()) {
						var r, a = (r = ie.windowEl) != null ? r : window, i = a.requestAnimationFrame(function() {
							n();
						});
						return function() {
							return a.cancelAnimationFrame(i);
						};
					}
				}
			}
		}, [
			pe,
			x,
			ie.windowEl,
			ne
		]);
		var we = [
			L.canvas,
			ke && L.canvasVisible,
			G != null && L.canvasWithoutTransition,
			A && L.peerCanvasWithBanner,
			((X == null ? void 0 : X.isReconnecting) || ee) && L.canvasBlurred
		], Ae = x === !0 ? _.jsx("div", babelHelpers.extends({ ref: $e }, {
			0: { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" },
			1: { className: "x10l6tqk x13vifvy x1ey2m1c x1nrll8i xuuh30 x5yr21d x6grhm" }
		}[!!Ne << 0], { children: _.jsx("canvas", {
			ref: he,
			className: "waweb-canvas-voipui " + (m || (m = r("stylex"))).apply(void 0, we),
			onContextMenu: k
		}) })) : _.jsx("canvas", {
			ref: he,
			className: "waweb-canvas-voipui " + (m || (m = r("stylex"))).apply(void 0, we.concat([
				L.peerCanvas,
				L.peerCanvasBackground,
				ie.isContextInPopoutWindow && L.peerCanvasPopout
			])),
			onContextMenu: k
		});
		return _.jsxs(_.Fragment, { children: [
			_.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: [
					L.peerImageContainer,
					!x && L.peerCanvas,
					A && L.peerCanvasWithBanner,
					ie.isContextInPopoutWindow && L.peerImageContainerPopout,
					!x && L.peerImageContainerSuppressible,
					!x && Ie.kind === "avatar" && L.peerImageContainerSuppressibleVisible
				],
				children: (l != null || ae != null) && (J || !ke) && _.jsx(r("WAWebCallParticipantInfo.react"), {
					accentColor: i,
					adaptToTileSize: x,
					audioLevelType: x ? "participant" : "peer",
					callStateText: l != null ? o("WAWebCallLogUtils").getCallStateText(p, l) : void 0,
					imageSize: R || H ? "small" : "auto",
					nameOverride: W && x ? s._(
						/*BTDS*/
						""
					) : void 0,
					showAudioWaveform: !Q && !ke,
					showTextInfo: !M && !H,
					textAlign: "center",
					userId: ae != null ? ae : l != null ? (a = o("WAWebFrontendMsgGetters").getChat(l)) == null ? void 0 : a.id : void 0,
					waveformBarCount: ie.isContextInPopoutWindow ? 7 : 5
				})
			}),
			!J && (ie.isContextInPopoutWindow && x !== !0 ? _.jsx("div", {
				className: "x10l6tqk xugynej x1ey2m1c x4brfc7 x67dgr1 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xyi3aci xwf5gio x1p453bz x1suzm8a",
				children: Ae
			}) : Ae),
			Q && oe && _.jsx(r("WAWebVoipMicOffIndicator.react"), {
				inset: !x,
				size: H ? "small" : "medium"
			}),
			o("WAWebCurrentUser").isEmployee() && le && _.jsx(r("WAWebVoipAVSyncDebugOverlay.react"), { peerJid: K }),
			_.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
				emojiSize: H ? "default" : "large",
				isHandRaised: P,
				participantName: W ? null : j != null ? j : String(s._(
					/*BTDS*/
					""
				)),
				spacing: "large"
			}),
			te != null && _.jsx(r("WAWebVoipReactionDisplay.react"), {
				emojiSize: H ? "default" : "large",
				reaction: te,
				shouldHaveOffset: P,
				spacing: H ? "compact" : "large"
			}),
			!J && ke && _.jsx(o("WAWebVoipVideoStateOverlay.react").WAWebVoipVideoStateOverlay, {
				peerReconnectingState: X,
				peerVideoPaused: ee
			})
		] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		return e.preventDefault(), !1;
	}
	function I(e, t, n) {
		return e && !t && !n;
	}
	l.WAWebVoipUiVideoCallPeerVideo = E, l.shouldUseCoverFit = I;
}), 226);
