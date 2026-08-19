__d("MWAnimatedImageThumbnailWithPlayButton.react", [
	"fbt",
	"$InternalEnum",
	"CometHeroHoldTrigger.react",
	"CometPlaceholder.react",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MAWAttachmentBlob.react",
	"MAWImageUtils",
	"MAWThreadCutover",
	"MWAnimatedImageControlsUtil",
	"MWLSThreadDisplayContext",
	"MWMessageListImageSizingUtils",
	"MWPMessageListImage.react",
	"MWV2AttachmentLoadingPlaceholder.react",
	"MWV2LogMessageClick",
	"MWVideoPlayerPlayButton.react",
	"MWXAspectRatioContainer.react",
	"MWXImage.react",
	"MWXMessageBubbleCornerStyles.react",
	"MWXPressable.react",
	"appendParamToUrl",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useAsyncReStore",
	"useMWMediaViewerOpenQPLLogger",
	"useMWV2FocusRowAfterClosingPushView",
	"useMWV2MediaViewerShowDialog",
	"useMWV2MediaViewerURL"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = e || (e = o("react")), m = e, p = m.useCallback, _ = m.useEffect, f = m.useState, g = 25, h = {
		imageWithAppAttribution: {
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "xbiv7yw",
			bottom: "x1ey2m1c",
			position: "x1n2onr6",
			$$css: !0
		},
		wrapper: {
			display: "x1lliihq",
			$$css: !0
		},
		wrapperForAppAttribution: {
			marginBottom: "x1ibc7va",
			$$css: !0
		},
		wrapperReplyImage: {
			cursor: "x1ypdohk",
			$$css: !0
		}
	}, y = n("$InternalEnum").Mirrored([
		"Composer",
		"GIFPicker",
		"MediaViewer",
		"Thread"
	]);
	function C(e) {
		var t = o("react-compiler-runtime").c(18), n = e.altText, a = e.connectBottom, i = e.connectTop, l = e.dbAttachment, s = e.entryPoint, u = e.gifPreviewUrl, c = e.isReplyImage, m = e.isSecure, p = e.mediaRenderQpl, _ = e.message, f = e.onPlay, g = e.onPress, h = e.outgoing, y = e.previewHeight, C = e.previewWidth, v = e.sourceURL, S = e.testid, R;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== s || t[5] !== u || t[6] !== c || t[7] !== m || t[8] !== p || t[9] !== _ || t[10] !== f || t[11] !== g || t[12] !== h || t[13] !== y || t[14] !== C || t[15] !== v || t[16] !== S ? (R = d.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MWAnimatedImageThumbnailWithPlayButton",
			children: d.jsx(b, {
				altText: n,
				connectBottom: a,
				connectTop: i,
				dbAttachment: l,
				entryPoint: s,
				gifPreviewUrl: u,
				isReplyImage: c,
				isSecure: m,
				mediaRenderQpl: p,
				message: _,
				onPlay: f,
				onPress: g,
				outgoing: h,
				previewHeight: y,
				previewWidth: C,
				sourceURL: v,
				testid: void 0
			})
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s, t[5] = u, t[6] = c, t[7] = m, t[8] = p, t[9] = _, t[10] = f, t[11] = g, t[12] = h, t[13] = y, t[14] = C, t[15] = v, t[16] = S, t[17] = R) : R = t[17], R;
	}
	function b(e) {
		var t, a, i = e.altText, l = e.connectBottom, m = e.connectTop, g = e.dbAttachment, C = e.entryPoint, b = e.gifPreviewUrl, v = e.isReplyImage, S = v === void 0 ? !1 : v, R = e.isSecure, L = e.mediaRenderQpl, E = e.message, k = e.onPlay, I = e.onPress, T = e.outgoing, D = e.previewHeight, x = e.previewWidth, $ = e.sourceURL, P = e.testid, N = r("useAsyncReStore")(), M = o("MWAnimatedImageControlsUtil").useGetMessengerAutoplaySetting(), w = f(null), A = w[0], F = w[1], O = r("useMWV2MediaViewerURL")(g), B = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), W = o("MWMessageListImageSizingUtils").getMaxPreviewHeightAndWidth(R != null ? R : !0, B != null ? B : void 0, !1), q = W.maxHeight, U = W.maxWidth, V = p(function() {
			L == null || L.endSuccessAfterDelay({ bool: { thumbnail_generated_for_gif: !0 } });
		}, [L]), H = p(function() {
			L == null || L.endFailAfterDelay("gif-thumbnail-render-failed");
		}, [L]), G = g != null && g.previewUrl == null && R !== !1 ? o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense(g, "gifToBlob", L) : void 0, z = r("useMWV2FocusRowAfterClosingPushView")(), j = r("useMWV2MediaViewerShowDialog")(!1), K = j[0], Q = o("useMWMediaViewerOpenQPLLogger").useMWMediaViewerOpenQPLLogger(), X = Q.startFlow, Y = C === y.Thread, J = C === y.Composer, Z = C === y.MediaViewer, ee = C === y.GIFPicker;
		_(function() {
			var e = null;
			function t() {
				return a.apply(this, arguments);
			}
			function a() {
				return a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					L == null || L.addPoint("gif-thumbnail-generation-started");
					var t = b;
					if (t == null) if (g == null && $ != null) t = $;
					else try {
						(g == null ? void 0 : g.previewUrl) != null ? t = g == null ? void 0 : g.previewUrl : G != null && (t = G);
					} catch (e) {
						return null;
					}
					if (t == null) return null;
					var n = /^(?:data|blob):/.test(t);
					n || (t = r("appendParamToUrl")(t, "not-from-cache-please", ""));
					var a = yield o("MAWImageUtils").generateGIFThumbnail(t, D, x);
					if (L == null || L.addPoint("gif-thumbnail-generation-completed"), a != null) {
						L == null || L.addPoint("gif-thumbnail-generation-completed-successfully");
						var i = new Blob([a.jpegThumbnail]);
						e = URL.createObjectURL(i), F(e);
					}
				}), a.apply(this, arguments);
			}
			return t().catch(function() {
				L == null || L.endFailAfterDelay("gif-thumbnail-generation-failed"), F(null);
			}), function() {
				e != null && URL.revokeObjectURL(e);
			};
		}, [
			g,
			b,
			L,
			D,
			x,
			$,
			G
		]);
		var te = o("MAWThreadCutover").useIsCutoverOpenThread(E == null ? void 0 : E.threadKey), ne = R === !1 && !te && Y && E != null && (u || (u = o("I64"))).gt(E.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").CLIENT_PARTIAL)) ? {
			passthroughProps: { origSrc: g == null ? void 0 : g.previewUrl },
			url: O
		} : void 0, re = function() {
			if (E != null && r("promiseDone")(N, function(e) {
				o("MWV2LogMessageClick").log(e, E, 28);
			}), X({
				attachmentType: "IMAGE",
				entryPoint: "thread_view",
				isSecure: R
			}), z(function() {
				return !0;
			}), g != null && (R === !0 || te)) return K({ attachment: g }, function() {});
		}, oe = (g == null ? void 0 : g.attributionAppName) != null, ae = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: T === !0 ? "right" : "left",
			connectBottom: l,
			connectTop: m
		});
		if (D == null || x == null) return null;
		var ie = (t = g == null ? void 0 : g.accessibilitySummaryText) != null ? t : i, le = s._(
			/*BTDS*/
			"",
			[s._param("gif_alt_text", (a = g == null ? void 0 : g.accessibilitySummaryText) != null ? a : i)]
		);
		if (Y) {
			var se;
			ie = s._(
				/*BTDS*/
				"",
				[s._param("gif_alt_text", (se = g == null ? void 0 : g.accessibilitySummaryText) != null ? se : i)]
			);
		} else if (ee) {
			var ue;
			ie = s._(
				/*BTDS*/
				"",
				[s._param("gif_alt_text", (ue = g == null ? void 0 : g.accessibilitySummaryText) != null ? ue : i)]
			);
		} else if (Z) {
			var ce, de;
			ie = (ce = (de = g == null ? void 0 : g.accessibilitySummaryText) != null ? de : i) != null ? ce : s._(
				/*BTDS*/
				""
			);
		}
		var me = S || Z;
		return d.jsx(r("MWXPressable.react"), {
			"aria-label": ie,
			cursorDisabled: me,
			disabled: me,
			display: "block",
			linkProps: ne,
			onPress: me ? void 0 : Y ? re : I,
			testid: void 0,
			xstyle: [
				h.wrapper,
				oe && h.wrapperForAppAttribution,
				S && h.wrapperReplyImage
			],
			children: d.jsx(r("MWXAspectRatioContainer.react"), {
				height: D,
				maxHeight: Y ? q : D,
				maxWidth: Y ? U : x,
				width: x,
				children: function(t) {
					var e;
					return d.jsxs(d.Fragment, { children: [
						A == null ? d.jsxs(d.Fragment, { children: [d.jsx(r("MWV2AttachmentLoadingPlaceholder.react"), {
							connectBottom: l,
							connectTop: m,
							descriptionForLogging: "MAWSecureGIFAttachment.NoGIFThumbnail",
							hasAppAttribution: oe,
							hasCornerStyles: Y,
							height: D,
							maxHeight: Y ? q : D,
							maxWidth: Y ? U : x,
							mediaRenderQpl: L,
							outgoing: T,
							width: x,
							xstyle: [
								t,
								Y && ae,
								oe && h.imageWithAppAttribution
							]
						}), d.jsx(r("CometHeroHoldTrigger.react"), {
							description: "MAWSecureGIFAttachment.NoGIFThumbnail",
							hold: !0
						})] }) : d.jsx(r("MWXImage.react"), {
							alt: (e = g == null ? void 0 : g.accessibilitySummaryText) != null ? e : i,
							height: D,
							onError: H,
							onLoad: V,
							src: A,
							width: x,
							xstyle: [
								t,
								Y && ae,
								oe && h.imageWithAppAttribution
							]
						}),
						g != null && oe && Y && d.jsx("div", {
							className: "x1f1lzrh x10l6tqk xh8yej3",
							children: d.jsx(o("MWPMessageListImage.react").MWPMessageListImageAppAttribution, {
								attachment: g,
								connectBottom: l,
								connectTop: m,
								outgoing: T
							})
						}),
						M === o("MWAnimatedImageControlsUtil").MWAutoplayAnimationsSetting.OFF && d.jsx(r("MWVideoPlayerPlayButton.react"), {
							alt: le,
							isVisible: !0,
							onClick: S ? void 0 : k,
							size: S || J ? "SMALL" : "LARGE"
						})
					] });
				}
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.AnimatedImageEntryPoint = y, l.MWAnimatedImageThumbnailWithPlayButton = C;
}), 226);
