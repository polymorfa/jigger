__d("WAWebPttAudioMediaState.react", [
	"fbt",
	"WALogger",
	"WAWebAck",
	"WAWebMarkPlayedMsgAction",
	"WAWebMediaMissingModal.react",
	"WAWebMediaTypes",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebPttAudioPlayer.react",
	"WAWebStateUtils",
	"WDSButton.react",
	"WDSIconIcDownload.react",
	"WDSIconIcPlayArrowFilled.react",
	"WDSIconIcUpload.react",
	"react",
	"useWAWebCallbackOnce",
	"useWAWebModelValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useImperativeHandle, _ = m.useRef, f = { button: {
		width: "x1691je0",
		height: "x90ne7k",
		color: "x14ug900",
		$$css: !0
	} };
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.enableKbSeekSpeedChange, l = a.msg, c = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
			o("WAWebMsgGetters").getAck,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getType
		]), m = c[0], g = c[1], h = c[2], y = o("useWAWebModelValues").useModelValues(a.mediaData, ["mediaStage", "size"]), C = _(null), b = function() {
			a.msg.forceDownloadMediaEvenIfExpensive();
		}, v = function() {
			a.msg.resumeUpload();
		}, S = function() {
			a.msg.resumeRemoteUpload();
		}, R = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMediaMissingModal.react"), { msg: a.msg.unsafe() }));
		}, L = function() {
			a.msg.cancelUpload();
		}, E = r("useWAWebCallbackOnce")(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["mediaObject state not covered in AudioMediaState: ", ""])), y.mediaStage);
		}, [y]);
		switch (p(n, function() {
			return { handleKeyActivation: function(t) {
				var e;
				(e = C.current) == null || e.handleKeyActivation(t);
			} };
		}), y.mediaStage) {
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED: return d.jsx(o("WAWebPttAudioPlayer.react").WrappedAudioPlayer, {
				ref: C,
				mediaData: o("WAWebStateUtils").unproxy(a.mediaData),
				outgoingMsg: g,
				played: o("WAWebMarkPlayedMsgAction").canMarkPlayed(l.unsafe()) ? m === o("WAWebAck").ACK.PLAYED : !0,
				displayType: a.displayType,
				msg: o("WAWebStateUtils").unproxy(l),
				enableKbSeekSpeedChange: i
			});
			case o("WAWebMediaTypes").MediaDataStage.INIT:
			case o("WAWebMediaTypes").MediaDataStage.EXISTS:
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
				button: d.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcDownload.react"),
					xstyle: f.button,
					onPress: b,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					size: "large",
					testid: "ptt_audio_download"
				}),
				outgoingMsg: g,
				msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0
			});
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD: return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
				button: d.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcUpload.react"),
					xstyle: f.button,
					onPress: v,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					size: "large",
					testid: "ptt_audio_upload"
				}),
				outgoingMsg: g,
				msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0
			});
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
				button: d.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcUpload.react"),
					xstyle: f.button,
					onPress: S,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					size: "large",
					testid: "ptt_audio_upload"
				}),
				outgoingMsg: g,
				msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0
			});
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
				icon: d.jsx(r("WDSIconIcPlayArrowFilled.react"), {
					directional: !0,
					height: 34,
					width: 34
				}),
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				outgoingMsg: g,
				action: R,
				msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0
			});
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.SENDING: {
				var k = y.mediaStage === o("WAWebMediaTypes").MediaDataStage.UPLOADING;
				return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
					action: k ? L : void 0,
					canCancel: k,
					fileSize: y.size,
					outgoingMsg: g,
					spinner: !0,
					msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0
				});
			}
			default: return E(), d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
				spinner: !0,
				outgoingMsg: g,
				msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0
			});
		}
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
