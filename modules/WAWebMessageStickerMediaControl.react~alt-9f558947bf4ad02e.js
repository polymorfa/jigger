__d("WAWebMessageStickerMediaControl.react", [
	"WAWebMediaMissingModal.react",
	"WAWebMediaStateControlDownload.react",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"WAWebModalManager",
	"WDSMargins.stylex",
	"err",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, d = {
		thumb: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			cursor: "x1ypdohk",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		container: {
			cursor: "x1sqbtui",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.msg, a = o("useWAWebModelValues").useModelValues(t.mediaData, ["mediaStage", "size"]), i = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaMissingModal.react"), { msg: n.unsafe() }));
		}, l = function() {
			n.forceDownloadMediaEvenIfExpensive();
		}, s = function() {
			n.cancelDownload();
		}, m = function() {
			n.cancelUpload();
		}, p = function() {
			n.resumeUpload();
		}, _ = function() {
			n.resumeRemoteUpload();
		}, f, g, h = a.mediaStage;
		switch (h) {
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
				f = null, g = null;
				break;
			case o("WAWebMediaTypes").MediaDataStage.FETCHING:
				f = s, g = u.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 });
				break;
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
				f = l, g = u.jsx(r("WAWebMediaStateControlDownload.react"), { filesize: a.size });
				break;
			case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
				f = m, g = u.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 });
				break;
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
				f = p, g = u.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: a.size });
				break;
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
				f = _, g = u.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: a.size });
				break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
				f = i, g = u.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: a.size });
				break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
				f = i, g = u.jsx(r("WAWebMediaStateControlDownload.react"), { filesize: a.size });
				break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN: break;
			case o("WAWebMediaTypes").MediaDataStage.SENDING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
			case o("WAWebMediaTypes").MediaDataStage.INIT:
			case o("WAWebMediaTypes").MediaDataStage.PREPARING:
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.EXISTS:
				g = u.jsx(o("WAWebMediaStateControls.react").Pending, {});
				break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
			case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY: throw r("err")("invalid value for sticker mediaStage '" + h + "'");
		}
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.thumb, d.container, o("WDSMargins.stylex").wdsMargins.marginBottom2, c.paddingBottom10), {
			onClick: f,
			children: [g, t.children]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
