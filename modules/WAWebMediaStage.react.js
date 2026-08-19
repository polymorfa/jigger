__d("WAWebMediaStage.react", [
	"WAWebMediaStateControlDownload.react",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"WAWebMediaUnsupportedModal.react",
	"WAWebModalManager",
	"WAWebStateUtils",
	"WAWebVideoUtils",
	"WAWebWamEnumWebcRmrReasonCode",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e, t) {
		e.stopPropagation(), t.downloadMedia({
			downloadEvenIfExpensive: !0,
			rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
			isUserInitiated: !0
		});
	}
	function c(e, t) {
		e.stopPropagation(), t.cancelDownload();
	}
	function d(e, t) {
		e.stopPropagation(), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaUnsupportedModal.react"), { msg: o("WAWebStateUtils").unproxy(t) }));
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.mediaData, a = e.msg, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"mediaStage",
			"size",
			"streamable"
		], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(n, i), m = l.mediaStage, p = l.size;
		if (o("WAWebVideoUtils").isMsgStreamable(a)) return null;
		switch (m) {
			case o("WAWebMediaTypes").MediaDataStage.INIT:
			case o("WAWebMediaTypes").MediaDataStage.EXISTS:
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
			case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE: return null;
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
				var _;
				t[1] !== a ? (_ = function(t) {
					return u(t, a);
				}, t[1] = a, t[2] = _) : _ = t[2];
				var f;
				return t[3] !== p || t[4] !== _ ? (f = s.jsx(r("WAWebMediaStateControlDownload.react"), {
					filesize: p,
					onClick: _
				}), t[3] = p, t[4] = _, t[5] = f) : f = t[5], f;
			}
			case o("WAWebMediaTypes").MediaDataStage.FETCHING:
			case o("WAWebMediaTypes").MediaDataStage.PREPARING:
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
			case o("WAWebMediaTypes").MediaDataStage.SENDING:
			case o("WAWebMediaTypes").MediaDataStage.FINALIZING: {
				var g;
				t[6] !== a ? (g = function(t) {
					return c(t, a);
				}, t[6] = a, t[7] = g) : g = t[7];
				var h;
				t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 }), t[8] = h) : h = t[8];
				var y;
				return t[9] !== g ? (y = s.jsx("div", {
					onClick: g,
					children: h
				}), t[9] = g, t[10] = y) : y = t[10], y;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
				var C;
				t[11] !== a ? (C = function(t) {
					return d(t, a);
				}, t[11] = a, t[12] = C) : C = t[12];
				var b;
				return t[13] !== p || t[14] !== C ? (b = s.jsx(r("WAWebMediaStateControlDownload.react"), {
					filesize: p,
					onClick: C
				}), t[13] = p, t[14] = C, t[15] = b) : b = t[15], b;
			}
		}
	}
	l.default = m;
}), 98);
