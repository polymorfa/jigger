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
	"asyncToGeneratorRuntime",
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
		var a = t.accentColor, i = t.cameraDenied, l = i === void 0 ? !1 : i, d = t.isIncoming, p = d === void 0 ? !1 : d, v = t.isLobbyView, S = v === void 0 ? !1 : v, R = t.isSelfScreenSharing, L = t.isVideoMuted, E = t.nameOverride, k = t.noCameraDevice, I = k === void 0 ? !1 : k, T = t.preserveVideoAspectRatio, D = T === void 0 ? !1 : T, x = t.selfMicMuted, $ = f(r("WAWebVoipUiPopoutWindowContext")), P = r("useWAWebVoipPeerHasReceivedFrame")(o("WAWebVoipVideoRendererInterface").selfPreviewJid), N = r("useWAWebVoipVideoTileLoadingIndicator")(P, { surface: "self" }), M = h(null), w = h(null), A = r("useWAWebVoipCanvasLifecycle")(w, { isPortalMode: $.isContextInPopoutWindow || o("WAWebVoipGatingUtils").shouldUsePortalModeForSafari() }, {
			jid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			mirror: !R
		}), F = A.canvasCallbackRef, O = A.isCanvasRegistered, B = y(C), W = B[0], q = B[1], U = _(function(e) {
			if (!(!e || !$.isContextInPopoutWindow)) {
				var t = e.querySelector("img");
				t != null && t.complete && t.style.visibility === "hidden" && (t.style.visibility = "visible");
			}
		}, [$.isContextInPopoutWindow]);
		g(function() {
			var e = function(t, n, r) {
				if (t === o("WAWebVoipVideoRendererInterface").selfPreviewJid && n > 0 && r > 0) {
					var e = n / r;
					q(e);
				}
			}, t = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addVideoDimensionChangeListener(e);
			return t;
		}, []);
		var V = h(null), H = h(null), G = h(null), z = _(function(e) {
			H.current = e;
			var t = G.current;
			e != null && t != null && (e.style.width = t.width + "px", e.style.height = t.height + "px");
		}, []), j = h(null), K = h(null), Q = h(W);
		g(function() {
			Q.current = W;
		}, [W]);
		var X = _(function(e) {
			j.current != null && window.cancelAnimationFrame(j.current), j.current = window.requestAnimationFrame(function() {
				j.current = null;
				var t = w.current;
				for (var n of e) if ($.isContextInPopoutWindow && n.target === M.current) {
					var r = n.contentRect.width, a = n.contentRect.height;
					if (r > 0 && a > 0) {
						var i = 56, l = 48, s = Math.max(0, a - i - l), u = Q.current, c = r / s, d = void 0, m = void 0;
						c > u ? (m = s, d = s * u) : (d = r, m = r / u, m > s && (m = s, d = s * u));
						var p = Math.floor(d), _ = Math.floor(m);
						if (t) {
							t.style.width = p + "px", t.style.height = _ + "px";
							var f = 4096, g = Math.min(window.devicePixelRatio, f / Math.max(d, m));
							o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, d, m, g);
						}
						var h = V.current;
						h && (h.style.width = p + "px", h.style.height = _ + "px"), G.current = {
							height: _,
							width: p
						};
						var y = H.current;
						y && (y.style.width = p + "px", y.style.height = _ + "px");
					}
				} else if (t && n.target === t) {
					var C = n.contentRect, b = o("WAWebVoipCanvasUtils").computeCanvasBufferSize(C.width, C.height), v = b.height, S = b.width;
					S > 0 && v > 0 && o("WAWebVoipCanvasUtils").resizeCanvasBuffer(t, C.width, C.height);
				}
			});
		}, [$.isContextInPopoutWindow]);
		g(function() {
			var e = w.current, t = M.current;
			K.current || (K.current = new ResizeObserver(X));
			var n = K.current;
			return $.isContextInPopoutWindow && t ? n.observe(t) : e && n.observe(e), function() {
				t && n.unobserve(t), e && n.unobserve(e);
			};
		}, [
			X,
			O,
			$.isContextInPopoutWindow
		]), g(function() {
			return function() {
				j.current != null && window.cancelAnimationFrame(j.current), K.current && K.current.disconnect();
			};
		}, []), g(function() {
			O && n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if ((t == null ? void 0 : t.type) !== "web") return;
					var n = "static-call-id", r = "self-preview-jid", a = yield t.startVideoPreview(n, r);
					a === 0 || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] fullWidth: startVideoPreview failed ", ""])), a);
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: ui: fullWidthSelfPreview: startVideoPreview error: ", ""])), e);
				}
			})();
		}, [O]);
		var Y = L && !p && !D ? 1 : W, J = $.isContextInPopoutWindow, Z = $.isDocPip;
		return Z || J && !o("WAWebVoipGatingUtils").isGuestViewer() ? m.jsx(o("WAWebVoipDocPipSelfPreviewNotice.react").WAWebVoipDocPipSelfPreviewNotice, {}) : m.jsxs("div", babelHelpers.extends({ ref: M }, (c || (c = r("stylex"))).props([b.fullWidthContainer, b.fullWidthContainerAspectRatio(Y)]), { children: [
			m.jsx("canvas", {
				ref: F,
				className: "xh8yej3 x5yr21d xl1xv1r x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a"
			}),
			!L && !l && !I && N.kind === "spinner" && m.jsx("div", babelHelpers.extends({
				ref: z,
				role: "status",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip-self-preview-loading"
			}, {
				0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x1hc1fzr x19991ni x13dflua x12w9bfk x9lcvmn" },
				1: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl x19991ni x13dflua x12w9bfk x9lcvmn xg01cxk" }
			}[!!N.isFadingOut << 0], { children: m.jsx(r("WDSSpinner.react"), {
				size: 32,
				testid: "voip-self-preview-loading-spinner"
			}) })),
			L && m.jsx("div", {
				ref: function(t) {
					V.current = t, U(t);
				},
				role: "status",
				"aria-label": "Video is paused",
				className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl",
				children: m.jsx(r("WAWebCallParticipantInfo.react"), {
					accentColor: a,
					userId: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
					imageSize: S ? "auto" : "small",
					nameOverride: E,
					showTextInfo: E != null,
					showAudioWaveform: S && !x,
					audioLevelType: S ? "self" : void 0,
					waveformBarCount: S ? 5 : void 0,
					textAlign: "center"
				})
			}),
			(l || I) && m.jsx(r("WAWebVoipCameraUnavailableBanner.react"), { noCameraDevice: I }),
			x && m.jsx("div", {
				className: "x10l6tqk x13vifvy x1o0tod xcegukh",
				children: m.jsx(r("WAWebVoipMicOffIndicator.react"), {})
			})
		] }));
	}
	v.displayName = v.name + " [from " + i.id + "]", l.WAWebVoipUiVideoCallSelfPreviewFullWidth = v;
}), 226);
