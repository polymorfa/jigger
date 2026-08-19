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
		var n, a = t.accentColor, i = t.callLogMsg, l = t.callState, p = t.canvasContainerRef, f = t.isCompactLayout, S = f === void 0 ? !1 : f, R = t.isDominantSpeaker, E = R === void 0 ? !1 : R, T = t.isGroupCall, D = T === void 0 ? !1 : T, x = t.isHandRaised, $ = x === void 0 ? !1 : x, P = t.isHorizontalLayout, N = P === void 0 ? !1 : P, M = t.isScreenShareBannerVisible, w = M === void 0 ? !1 : M, A = t.isScreenShareTile, F = A === void 0 ? !1 : A, O = t.isSelf, B = O === void 0 ? !1 : O, W = t.isSelfScreenSharing, q = W === void 0 ? !1 : W, U = t.isStripTile, V = U === void 0 ? !1 : U, H = t.onReadyToDisplay, G = t.participantName, z = G === void 0 ? null : G, j = t.peerJid, K = t.peerMicMuted, Q = t.peerReconnectingState, X = t.peerVideoMuted, Y = X === void 0 ? !1 : X, J = t.peerVideoPaused, Z = J === void 0 ? !1 : J, ee = t.reaction, te = t.ref, ne = t.showMicIndicator, re = ne === void 0 ? !0 : ne, oe = t.userId, ae = h(r("WAWebVoipUiPopoutWindowContext")), ie = o("useWAWebABPropConfigValue").useABPropConfigValue("web_voip_av_sync_debug_overlay"), le = r("useWAWebVoipCallVisibility")(), se = r("justknobx")._("5459"), ue = r("useWAWebVoipCanvasLifecycle")(te, {
			isPortalMode: ae.isContextInPopoutWindow || o("WAWebVoipGatingUtils").shouldUsePortalModeForSafari(),
			shouldSetCssDimensionsInPortalMode: !D && ae.isContextInPopoutWindow,
			useDoubleRAF: !0
		}, {
			jid: j,
			mirror: B && !q
		}), ce = ue.canvasCallbackRef, de = ue.isCanvasMounted, me = ue.isCanvasRegistered, pe = v(null), _e = pe[0], fe = pe[1], ge = g(function(e) {
			ce(e), fe(e);
		}, [ce]), he = v(function() {
			if (j) {
				var e = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.getVideoDimensions(j);
				if (e != null && e.height > 0) return e.width / e.height;
			}
			return null;
		}), ye = he[0], Ce = he[1];
		y(function() {
			var e = function(t, n, r) {
				if (j && t === j && r > 0 && n > 0) {
					var e = n / r;
					Ce(e);
				}
			}, t = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addVideoDimensionChangeListener(e);
			return t;
		}, [j]);
		var be = r("useWAWebVoipPeerHasReceivedFrame")(j), ve = v(null), Se = ve[0], Re = ve[1], Le = Se != null && Se === _e, Ee = Le || H == null && be, ke = r("useWAWebVoipVideoTileLoadingIndicator")(Ee, {
			surface: "peer",
			isGroupCall: D,
			isCameraMuted: Y
		});
		y(function() {
			var e;
			if (H != null) {
				if (Y) {
					H();
					return;
				}
				var t = _e;
				if (!(!de || t == null)) {
					if (Z) {
						H();
						return;
					}
					var n = (e = ae.windowEl) != null ? e : window, r = null, a = null, i = function() {
						te.current === t && (Re(t), r = n.requestAnimationFrame(function() {
							a = n.requestAnimationFrame(function() {
								te.current === t && H();
							});
						}));
					}, l;
					return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasRenderedFirstFrameForCanvas(t) ? i() : l = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addFirstFrameRenderedListenerForCanvas(t, i), function() {
						l == null || l(), r != null && n.cancelAnimationFrame(r), a != null && n.cancelAnimationFrame(a);
					};
				}
			}
		}, [
			de,
			_e,
			H,
			Y,
			Z,
			ae.windowEl,
			te
		]);
		var Ie = "video";
		Y && (Ie = K ? "avatar-only" : "audio-waveform"), r("useWAWebVoipWatchdogTileDom")({
			lid: j,
			canvasRef: te,
			popoutWindowEl: ae.windowEl,
			renderMode: Ee ? Ie : "unknown"
		}), y(function() {
			if (!(!se || B || o("WAWebVoipGatingUtils").isGuestViewer() || !j || j === "" || !de)) return le ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] renderer: resuming rendering for peer ", ""])), j), o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resumeRenderingForJid(j)) : (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] renderer: pausing rendering for peer ", ""])), j), o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.pauseRenderingForJid(j)), function() {
				o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resumeRenderingForJid(j);
			};
		}, [
			le,
			j,
			B,
			se,
			de
		]), y(function() {
			if (!(!B || !me)) {
				var e = !1;
				return (async function() {
					try {
						var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
						if (e || (t == null ? void 0 : t.type) !== "web") return;
						var n = "static-call-id", r = "self-preview-jid", a = await t.startVideoPreview(n, r);
						a === 0 || o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip] peerVideo: startVideoPreview failed ", ""])), a);
					} catch (e) {
						o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: ui: peerVideo: startVideoPreview error: ", ""])), e);
					}
				})(), function() {
					e = !0;
				};
			}
		}, [B, me]);
		var Te = b(null), De = b(null), xe = b(null), $e = ye != null && ye < 1, Pe = D === !0 && $e && !E && !F && !V, Ne = g(function(e) {
			Te.current != null && (window.cancelAnimationFrame(Te.current), Te.current = null), window.clearTimeout(De.current), De.current = null;
			var t = function() {
				var t = te.current;
				for (var n of e) if (D === !0 && n.target === xe.current) {
					var r = n.contentRect.width, a = n.contentRect.height;
					r > 0 && a > 0 && t && o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, r, a);
				} else if (ae.isContextInPopoutWindow && D !== !0 && n.target === (p == null ? void 0 : p.current)) {
					var i = Math.ceil(n.contentRect.width), l = Math.ceil(n.contentRect.height);
					i > 0 && l > 0 && t && (t.style.width = i + "px", t.style.height = l + "px", o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, i, l));
				} else if (t && n.target === t) {
					var s = n.contentRect;
					o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, s.width, s.height);
				}
			};
			ae.isContextInPopoutWindow ? t() : (Te.current = window.requestAnimationFrame(t), De.current = window.setTimeout(t, 200));
		}, [
			p,
			D,
			ae.isContextInPopoutWindow,
			te
		]);
		y(function() {
			var e, t;
			if (!Y) {
				var n = te.current, r = xe.current, o = p == null ? void 0 : p.current, a = (e = (t = ae.windowEl) == null ? void 0 : t.ResizeObserver) != null ? e : ResizeObserver, i = new a(Ne);
				return D === !0 && r ? i.observe(r) : ae.isContextInPopoutWindow && o ? i.observe(o) : n && i.observe(n), function() {
					i.disconnect();
				};
			}
		}, [
			p,
			Ne,
			Y,
			te,
			ae.isContextInPopoutWindow,
			ae.windowEl,
			D
		]), y(function() {
			return function() {
				Te.current != null && window.cancelAnimationFrame(Te.current), window.clearTimeout(De.current);
			};
		}, []), y(function() {
			var e = te.current;
			!e || !me || o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.setCoverFit(e, I(D, E, F));
		}, [
			E,
			D,
			F,
			me,
			te
		]), C(function() {
			if (!(D !== !0 || !me)) {
				var e = te.current, t = xe.current;
				if (!(e == null || t == null)) {
					var n = function() {
						var n = t.clientHeight, r = t.clientWidth;
						return r > 0 && n > 0 ? (o("WAWebVoipCanvasUtils").resizeCanvasBuffer(e, r, n), !0) : !1;
					};
					if (!n()) {
						var r, a = (r = ae.windowEl) != null ? r : window, i = a.requestAnimationFrame(function() {
							n();
						});
						return function() {
							return a.cancelAnimationFrame(i);
						};
					}
				}
			}
		}, [
			me,
			D,
			ae.windowEl,
			te
		]);
		var Me = [
			L.canvas,
			Ee && L.canvasVisible,
			H != null && L.canvasWithoutTransition,
			w && L.peerCanvasWithBanner,
			((Q == null ? void 0 : Q.isReconnecting) || Z) && L.canvasBlurred
		], we = D === !0 ? _.jsx("div", babelHelpers.extends({ ref: xe }, {
			0: { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" },
			1: { className: "x10l6tqk x13vifvy x1ey2m1c x1nrll8i xuuh30 x5yr21d x6grhm" }
		}[!!Pe << 0], { children: _.jsx("canvas", {
			ref: ge,
			className: "waweb-canvas-voipui " + (m || (m = r("stylex"))).apply(void 0, Me),
			onContextMenu: k
		}) })) : _.jsx("canvas", {
			ref: ge,
			className: "waweb-canvas-voipui " + (m || (m = r("stylex"))).apply(void 0, Me.concat([
				L.peerCanvas,
				L.peerCanvasBackground,
				ae.isContextInPopoutWindow && L.peerCanvasPopout
			])),
			onContextMenu: k
		});
		return _.jsxs(_.Fragment, { children: [
			_.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: [
					L.peerImageContainer,
					!D && L.peerCanvas,
					w && L.peerCanvasWithBanner,
					ae.isContextInPopoutWindow && L.peerImageContainerPopout,
					!D && L.peerImageContainerSuppressible,
					!D && ke.kind === "avatar" && L.peerImageContainerSuppressibleVisible
				],
				children: (i != null || oe != null) && (Y || !Ee) && _.jsx(r("WAWebCallParticipantInfo.react"), {
					accentColor: a,
					adaptToTileSize: D,
					audioLevelType: D ? "participant" : "peer",
					callStateText: i != null ? o("WAWebCallLogUtils").getCallStateText(l, i) : void 0,
					imageSize: S || V ? "small" : "auto",
					nameOverride: B && D ? s._(
						/*BTDS*/
						""
					) : void 0,
					showAudioWaveform: !K && !Ee,
					showTextInfo: !N && !V,
					textAlign: "center",
					userId: oe != null ? oe : i != null ? (n = o("WAWebFrontendMsgGetters").getChat(i)) == null ? void 0 : n.id : void 0,
					waveformBarCount: ae.isContextInPopoutWindow ? 7 : 5
				})
			}),
			!Y && (ae.isContextInPopoutWindow && D !== !0 ? _.jsx("div", {
				className: "x10l6tqk xugynej x1ey2m1c x4brfc7 x67dgr1 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xyi3aci xwf5gio x1p453bz x1suzm8a",
				children: we
			}) : we),
			K && re && _.jsx(r("WAWebVoipMicOffIndicator.react"), {
				inset: !D,
				size: V ? "small" : "medium"
			}),
			o("WAWebCurrentUser").isEmployee() && ie && _.jsx(r("WAWebVoipAVSyncDebugOverlay.react"), { peerJid: j }),
			_.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
				emojiSize: V ? "default" : "large",
				isHandRaised: $,
				participantName: B ? null : z != null ? z : String(s._(
					/*BTDS*/
					""
				)),
				spacing: "large"
			}),
			ee != null && _.jsx(r("WAWebVoipReactionDisplay.react"), {
				emojiSize: V ? "default" : "large",
				reaction: ee,
				shouldHaveOffset: $,
				spacing: V ? "compact" : "large"
			}),
			!Y && Ee && _.jsx(o("WAWebVoipVideoStateOverlay.react").WAWebVoipVideoStateOverlay, {
				peerReconnectingState: Q,
				peerVideoPaused: Z
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
