__d("WAWebVoipUiVideoCallSelfPreviewFullWidth.react", [
	"fbt",
	"WALogger",
	"WAWebCallParticipantInfo.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipCameraUnavailableBanner.react",
	"WAWebVoipCanvasUtils",
	"WAWebVoipDocPipSelfPreviewNotice.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipMicOffIndicator.react",
	"WAWebVoipStackInterface",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"WDSSpinner.react",
	"react",
	"stylex",
	"useWAWebVoipCanvasLifecycle",
	"useWAWebVoipPeerHasReceivedFrame",
	"useWAWebVoipVideoTileLoadingIndicator"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useContext, g = p.useEffect, h = p.useRef, y = p.useState, C = 16 / 9, b = {
		fullWidthContainer: {
			position: "x1n2onr6",
			width: "x1m22und",
			maxHeight: "x18b36f1",
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		fullWidthContainerAspectRatio: function(t) {
			return [{
				aspectRatio: String(t) != null ? "x10y9f9r" : String(t),
				$$css: !0
			}, { "--x-aspectRatio": String(t) != null ? String(t) : void 0 }];
		}
	};
	function v(t) {
		var n = t.accentColor, a = t.cameraDenied, i = a === void 0 ? !1 : a, l = t.isIncoming, d = l === void 0 ? !1 : l, p = t.isLobbyView, v = p === void 0 ? !1 : p, S = t.isSelfScreenSharing, R = t.isVideoMuted, L = t.nameOverride, E = t.noCameraDevice, k = E === void 0 ? !1 : E, I = t.preserveVideoAspectRatio, T = I === void 0 ? !1 : I, D = t.selfMicMuted, x = f(r("WAWebVoipUiPopoutWindowContext")), $ = r("useWAWebVoipPeerHasReceivedFrame")(o("WAWebVoipVideoRendererInterface").selfPreviewJid), P = r("useWAWebVoipVideoTileLoadingIndicator")($, { surface: "self" }), N = h(null), M = h(null), w = r("useWAWebVoipCanvasLifecycle")(M, { isPortalMode: x.isContextInPopoutWindow || o("WAWebVoipGatingUtils").shouldUsePortalModeForSafari() }, {
			jid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			mirror: !S
		}), A = w.canvasCallbackRef, F = w.isCanvasRegistered, O = y(C), B = O[0], W = O[1], q = _(function(e) {
			if (!(!e || !x.isContextInPopoutWindow)) {
				var t = e.querySelector("img");
				t != null && t.complete && t.style.visibility === "hidden" && (t.style.visibility = "visible");
			}
		}, [x.isContextInPopoutWindow]);
		g(function() {
			var e = function(t, n, r) {
				if (t === o("WAWebVoipVideoRendererInterface").selfPreviewJid && n > 0 && r > 0) {
					var e = n / r;
					W(e);
				}
			}, t = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addVideoDimensionChangeListener(e);
			return t;
		}, []);
		var U = h(null), V = h(null), H = h(null), G = _(function(e) {
			V.current = e;
			var t = H.current;
			e != null && t != null && (e.style.width = t.width + "px", e.style.height = t.height + "px");
		}, []), z = h(null), j = h(null), K = h(B);
		g(function() {
			K.current = B;
		}, [B]);
		var Q = _(function(e) {
			z.current != null && window.cancelAnimationFrame(z.current), z.current = window.requestAnimationFrame(function() {
				z.current = null;
				var t = M.current;
				for (var n of e) if (x.isContextInPopoutWindow && n.target === N.current) {
					var r = n.contentRect.width, a = n.contentRect.height;
					if (r > 0 && a > 0) {
						var i = 56, l = 48, s = Math.max(0, a - i - l), u = K.current, c = r / s, d = void 0, m = void 0;
						c > u ? (m = s, d = s * u) : (d = r, m = r / u, m > s && (m = s, d = s * u));
						var p = Math.floor(d), _ = Math.floor(m);
						if (t) {
							t.style.width = p + "px", t.style.height = _ + "px";
							var f = 4096, g = Math.min(window.devicePixelRatio, f / Math.max(d, m));
							o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, d, m, g);
						}
						var h = U.current;
						h && (h.style.width = p + "px", h.style.height = _ + "px"), H.current = {
							height: _,
							width: p
						};
						var y = V.current;
						y && (y.style.width = p + "px", y.style.height = _ + "px");
					}
				} else if (t && n.target === t) {
					var C = n.contentRect, b = o("WAWebVoipCanvasUtils").computeCanvasBufferSize(C.width, C.height), v = b.height, S = b.width;
					S > 0 && v > 0 && o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, C.width, C.height);
				}
			});
		}, [x.isContextInPopoutWindow]);
		g(function() {
			var e = M.current, t = N.current;
			j.current || (j.current = new ResizeObserver(Q));
			var n = j.current;
			return x.isContextInPopoutWindow && t ? n.observe(t) : e && n.observe(e), function() {
				t && n.unobserve(t), e && n.unobserve(e);
			};
		}, [
			Q,
			F,
			x.isContextInPopoutWindow
		]), g(function() {
			return function() {
				z.current != null && window.cancelAnimationFrame(z.current), j.current && j.current.disconnect();
			};
		}, []), g(function() {
			F && (async function() {
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if ((t == null ? void 0 : t.type) !== "web") return;
					var n = "static-call-id", r = "self-preview-jid", a = await t.startVideoPreview(n, r);
					a === 0 || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] fullWidth: startVideoPreview failed ", ""])), a);
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: ui: fullWidthSelfPreview: startVideoPreview error: ", ""])), e);
				}
			})();
		}, [F]);
		var X = R && !d && !T ? 1 : B, Y = x.isContextInPopoutWindow, J = x.isDocPip;
		return J || Y && !o("WAWebVoipGatingUtils").isGuestViewer() ? m.jsx(o("WAWebVoipDocPipSelfPreviewNotice.react").WAWebVoipDocPipSelfPreviewNotice, {}) : m.jsxs("div", babelHelpers.extends({ ref: N }, (c || (c = r("stylex"))).props([b.fullWidthContainer, b.fullWidthContainerAspectRatio(X)]), { children: [
			m.jsx("canvas", {
				ref: A,
				className: "xh8yej3 x5yr21d xl1xv1r x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a"
			}),
			!R && !i && !k && P.kind === "spinner" && m.jsx("div", babelHelpers.extends({
				ref: G,
				role: "status",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip-self-preview-loading"
			}, {
				0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x1hc1fzr x19991ni x13dflua x12w9bfk x9lcvmn" },
				1: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x19991ni x13dflua x12w9bfk x9lcvmn xg01cxk" }
			}[!!P.isFadingOut << 0], { children: m.jsx(r("WDSSpinner.react"), {
				size: 32,
				testid: "voip-self-preview-loading-spinner"
			}) })),
			R && m.jsx("div", {
				ref: function(t) {
					U.current = t, q(t);
				},
				role: "status",
				"aria-label": "Video is paused",
				className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl",
				children: m.jsx(r("WAWebCallParticipantInfo.react"), {
					accentColor: n,
					userId: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
					imageSize: v ? "auto" : "small",
					nameOverride: L,
					showTextInfo: L != null,
					showAudioWaveform: v && !D,
					audioLevelType: v ? "self" : void 0,
					waveformBarCount: v ? 5 : void 0,
					textAlign: "center"
				})
			}),
			(i || k) && m.jsx(r("WAWebVoipCameraUnavailableBanner.react"), { noCameraDevice: k }),
			D && m.jsx("div", {
				className: "x10l6tqk x13vifvy x1o0tod xcegukh",
				children: m.jsx(r("WAWebVoipMicOffIndicator.react"), {})
			})
		] }));
	}
	v.displayName = v.name + " [from " + i.id + "]", l.WAWebVoipUiVideoCallSelfPreviewFullWidth = v;
}), 226);
