__d("WAWebMessageGifState.react", [
	"WAWebMediaStateControlDownload.react",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.isFailed, a = e.mediaDataFileSize, i = e.mediaStage, l = e.onClick, u = e.shouldPlay;
		switch (i) {
			case o("WAWebMediaTypes").MediaDataStage.INIT:
			case o("WAWebMediaTypes").MediaDataStage.EXISTS: return null;
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
				if (u) {
					var c;
					return t[0] !== l ? (c = s.jsx(o("WAWebMediaStateControls.react").GifIcon, { onClick: l }), t[0] = l, t[1] = c) : c = t[1], c;
				}
				return null;
			}
			case o("WAWebMediaTypes").MediaDataStage.FETCHING:
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
				var d;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 }), t[2] = d) : d = t[2], d;
			}
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
				var m;
				return t[3] !== a ? (m = s.jsx(r("WAWebMediaStateControlDownload.react"), { filesize: a }), t[3] = a, t[4] = m) : m = t[4], m;
			}
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
				var p;
				return t[5] !== a ? (p = s.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: a }), t[5] = a, t[6] = p) : p = t[6], p;
			}
			case o("WAWebMediaTypes").MediaDataStage.SENDING: {
				if (n) return null;
				var _;
				return t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 }), t[7] = _) : _ = t[7], _;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE: return null;
			default: {
				var f;
				return t[8] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(o("WAWebMediaStateControls.react").Pending, {}), t[8] = f) : f = t[8], f;
			}
		}
	}
	l.default = u;
}), 98);
