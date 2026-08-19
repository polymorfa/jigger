__d("WAWebMessageGifState.react", [
	"WAWebMediaStateControlDownload.react",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.isFailed, n = e.mediaDataFileSize, a = e.mediaStage, i = e.onClick, l = e.shouldPlay;
		switch (a) {
			case o("WAWebMediaTypes").MediaDataStage.INIT:
			case o("WAWebMediaTypes").MediaDataStage.EXISTS: return null;
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED: return l ? s.jsx(o("WAWebMediaStateControls.react").GifIcon, { onClick: i }) : null;
			case o("WAWebMediaTypes").MediaDataStage.FETCHING:
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: return s.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 });
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: return s.jsx(r("WAWebMediaStateControlDownload.react"), { filesize: n });
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: return s.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: n });
			case o("WAWebMediaTypes").MediaDataStage.SENDING: return t ? null : s.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 });
			case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE: return null;
			default: return s.jsx(o("WAWebMediaStateControls.react").Pending, {});
		}
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
