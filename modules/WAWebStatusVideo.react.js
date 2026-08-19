__d("WAWebStatusVideo.react", [
	"fbt",
	"VideoPlayerStateTransitionHelpers",
	"WALogger",
	"WAWebAnnotation.react",
	"WAWebCometVideoPlayerUtils",
	"WAWebEnvironment",
	"WAWebMediaDataUtils",
	"WAWebMediaTypes",
	"WAWebMsgGetters",
	"WAWebMusicGatingUtils",
	"WAWebNormalizeStack",
	"WAWebObjectFit.react",
	"WAWebSNAPLLoggingConfig",
	"WAWebStatusButton.react",
	"WAWebVideoTag.react",
	"WAWebVideoUtils",
	"WAWebWamEnumWebcRmrReasonCode",
	"react",
	"useWAWebCanPlaybackAudio",
	"useWAWebCometVideoPlayerStateMachine",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebOnUnmount",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef;
	function _(t) {
		var n, a, i = t.markRead, l = t.msg, u = t.onMouseDown, d = t.onMouseUp, _ = t.pause, f = t.play, g = t.playbackController, h = t.status, y = p(null), C = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent, o("WAWebMsgGetters").isStatusWithMusic]), b = C[0], v = C[1], S = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(l), R = b == null ? void 0 : b.musicContentMediaId, L = o("WAWebCometVideoPlayerUtils").getStatusSNAPLParams(l, v, R), E = L.mediaId, k = L.mediaIdString, I = L.videoOrigin, T = L.videoTagMediaId, D = {
			isCopyrightMuted: !S,
			mediaId: E,
			mediaIdString: k,
			msg: l,
			videoOrigin: I,
			isStatusWithMusic: v
		}, x = r("useWAWebCometVideoPlayerStateMachine")(D), $ = x.callbacks, P = x.handleReactEffectCleanup, N = x.handleReactEffectInit, M = x.ready, w = x.videoElementRefCallback, A = l.actionLink || {}, F = A.buttonTitle, O = A.url, B = t.cvpApi, W = B == null || (n = B[1]) == null ? void 0 : n.controller, q = !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() || !v, U = o("useWAWebModelValues").useModelValues(t.mediaData, [
			"preview",
			"mediaStage",
			"fullWidth",
			"fullHeight",
			"streamable",
			"fullPreviewData"
		]);
		m(function() {
			o("WAWebVideoUtils").isMsgStreamable(l) || l.downloadMedia({
				downloadEvenIfExpensive: !0,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.STATUS_V3,
				isUserInitiated: !0
			});
		}, []), m(function() {
			N();
		}, [N]), r("useWAWebOnUnmount")(function() {
			_(), P();
		});
		var V = r("useWAWebStableCallback")(function(e) {
			y.current = e.current, w(e.current), g.setMedia(y.current);
		});
		m(function() {
			var t;
			function n() {
				f(), U.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && i(h, l);
			}
			if (q) {
				n();
				return;
			}
			var r = B != null;
			if (!(!M && !r)) {
				if (r && W != null) {
					var a = W.getCurrentState(), s = null;
					return s = W.subscribe(function() {
						var e = W.getCurrentState(), t = o("VideoPlayerStateTransitionHelpers").didStartPlaying(a, e), r = o("VideoPlayerStateTransitionHelpers").didLoadData(a, e);
						if (a = e, r && W.play("product_initiated"), t) {
							var i;
							(i = s) == null || i.remove(), n();
						}
					}), function() {
						var e;
						(e = s) == null || e.remove();
					};
				}
				(t = y.current) == null || t.play().then(n).catch(function(t) {
					var n = o("WAWebNormalizeStack").normalizeError(t);
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to play status video"]))).sendLogs("failed-to-play-status-video: " + n.name, { sendLogsType: o("WALogger").SendLogsType.INVESTIGATION });
				});
			}
		}, [
			q,
			B,
			W,
			i,
			U.mediaStage,
			l,
			f,
			h,
			M
		]);
		var H = r("WAWebEnvironment").isWindows === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), G = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps(D);
		return c.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
			onMouseDown: u,
			onMouseUp: d,
			"data-testid": "status-video",
			children: c.jsx(r("WAWebObjectFit.react"), {
				type: "contain",
				size: {
					width: U.fullWidth,
					height: U.fullHeight
				},
				children: c.jsxs("div", {
					className: "x1n2onr6 xh8yej3 x5yr21d x6ikm8r x10wlt62 xyi3aci xwf5gio x1p453bz x1suzm8a",
					children: [
						c.jsx(r("WAWebVideoTag.react"), {
							cvpApi: t.cvpApi,
							canChangeVolume: S,
							videoCallbacks: $,
							className: "x1n2onr6 x1lliihq xh8yej3 x5yr21d xyi3aci xwf5gio x1p453bz x1suzm8a",
							msg: l,
							mediaData: U,
							autoPlay: q,
							muted: !S,
							refVideo: V,
							poster: (a = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(U)) != null ? a : "",
							disableContextMenu: !0,
							loggingConfig: G.loggingConfig,
							loggingToSNAPLAdditionalData: G.loggingToSNAPLAdditionalData,
							mediaId: T,
							subOrigin: "whatsapp_web_status_viewer",
							children: H
						}),
						l.interactiveAnnotations && l.interactiveAnnotations.length > 0 && c.jsx(r("WAWebAnnotation.react"), {
							annotations: l.interactiveAnnotations,
							onTooltipDisplay: t.onMouseDown,
							onTooltipDismiss: t.onMouseUp
						}),
						F && O && c.jsx("div", {
							className: "x10l6tqk x1kiq0my x78zum5 x6s0dn4 xl56j7k xh8yej3",
							children: c.jsx(r("WAWebStatusButton.react"), {
								text: F,
								url: O
							})
						})
					]
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
