__d("WAWebPipMsgVideoPlayer.react", [
	"WAWebMediaMissingModal.react",
	"WAWebMediaNeedPokeModal.react",
	"WAWebMediaTypes",
	"WAWebMediaUnsupportedModal.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebPipController",
	"WAWebPipSharedVideoPlayer.react",
	"WAWebStateUtils",
	"react",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebSendViewCount",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.msg, l = a.onClose, s = a.onMissingMedia, c = a.onNeedPokeMedia, _ = a.onOpenVideoFloater, f = a.onUnsupportedMedia, g = p(null), h = o("useWAWebMsgValues").useMsgValues(a.msg.id, [o("WAWebMsgGetters").getId]), y = h[0], C = o("useWAWebModelValues").useModelValues(a.mediaData, [
			"mediaStage",
			"preview",
			"streamable"
		]), b = o("useWAWebSendViewCount").usePlaybackSendViewCount(a.msg.id, { mediaData: C }), v = function() {
			return g.current ? g.current.getCurrentTimeFromVideo() : 0;
		}, S = function() {
			_ && _(), r("WAWebPipController").openPiP(o("WAWebStateUtils").unproxy(i), v(), null);
		}, R = r("useWAWebStableCallback")(function() {
			s && s(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaMissingModal.react"), { msg: i })), l();
		}), L = r("useWAWebStableCallback")(function() {
			f && f(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaUnsupportedModal.react"), { msg: i })), l();
		}), E = r("useWAWebStableCallback")(function() {
			c && c(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaNeedPokeModal.react"), { msg: i })), l();
		}), k = function() {
			var e;
			return (e = g.current) == null ? void 0 : e.getContainerElement();
		};
		m(n, function() {
			return { getContainerElement: k };
		}), d(function() {
			switch (C.mediaStage) {
				case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
					R();
					break;
				case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
					L();
					break;
				case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
					E();
					break;
				default:
			}
		}, [
			R,
			E,
			L,
			C.mediaStage
		]);
		var I = {
			msg: i,
			mediaData: C
		};
		return u.jsx(o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer, {
			ref: g,
			type: a.type,
			msgVideoInfo: I,
			startTime: a.startTime,
			onClose: a.onClose,
			onVideoEnded: a.onVideoEnded,
			onError: a.onError,
			onOpenVideoFloater: S,
			onTimeUpdate: b,
			onLoadedData: a.onLoadedData,
			onFullscreenToggle: a.onFullscreenToggle,
			autoPlay: a.autoPlay,
			overlays: a.overlays,
			noPip: a.noPip,
			disablePiPControls: a.disablePiPControls,
			onRefSet: a.onRefSet,
			onVideoMetadataChange: a.onVideoMetadataChange,
			onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = _;
	l.WrappedMsgVideoPlayer = f;
}), 98);
