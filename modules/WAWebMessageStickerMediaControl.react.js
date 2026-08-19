__d("WAWebMessageStickerMediaControl.react", [
	"WAWebMediaMissingModal.react",
	"WAWebMediaStateControlDownload.react",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"WAWebModalManager",
	"WDSMargins.stylex",
	"err",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(31), a = t.msg, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["mediaStage", "size"], n[0] = i) : i = n[0];
		var l = o("useWAWebModelValues").useModelValues(t.mediaData, i), s;
		n[1] !== a ? (s = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaMissingModal.react"), { msg: a.unsafe() }));
		}, n[1] = a, n[2] = s) : s = n[2];
		var m = s, p;
		n[3] !== a ? (p = function() {
			a.forceDownloadMediaEvenIfExpensive();
		}, n[3] = a, n[4] = p) : p = n[4];
		var _ = p, f;
		n[5] !== a ? (f = function() {
			a.cancelDownload();
		}, n[5] = a, n[6] = f) : f = n[6];
		var g = f, h;
		n[7] !== a ? (h = function() {
			a.cancelUpload();
		}, n[7] = a, n[8] = h) : h = n[8];
		var y = h, C;
		n[9] !== a ? (C = function() {
			a.resumeUpload();
		}, n[9] = a, n[10] = C) : C = n[10];
		var b = C, v;
		n[11] !== a ? (v = function() {
			a.resumeRemoteUpload();
		}, n[11] = a, n[12] = v) : v = n[12];
		var S = v, R, L, E = l.mediaStage;
		e: switch (E) {
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
				R = null, L = null;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
				R = g;
				var k;
				n[13] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 }), n[13] = k) : k = n[13], L = k;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
				R = _;
				var I;
				n[14] !== l.size ? (I = u.jsx(r("WAWebMediaStateControlDownload.react"), { filesize: l.size }), n[14] = l.size, n[15] = I) : I = n[15], L = I;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING: {
				R = y;
				var T;
				n[16] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(o("WAWebMediaStateControls.react").Pending, { cancelable: !0 }), n[16] = T) : T = n[16], L = T;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD: {
				R = b;
				var D;
				n[17] !== l.size ? (D = u.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: l.size }), n[17] = l.size, n[18] = D) : D = n[18], L = D;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
				R = S;
				var x;
				n[19] !== l.size ? (x = u.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: l.size }), n[19] = l.size, n[20] = x) : x = n[20], L = x;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
				R = m;
				var $;
				n[21] !== l.size ? ($ = u.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: l.size }), n[21] = l.size, n[22] = $) : $ = n[22], L = $;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
				R = m;
				var P;
				n[23] !== l.size ? (P = u.jsx(r("WAWebMediaStateControlDownload.react"), { filesize: l.size }), n[23] = l.size, n[24] = P) : P = n[24], L = P;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN: break e;
			case o("WAWebMediaTypes").MediaDataStage.SENDING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
			case o("WAWebMediaTypes").MediaDataStage.INIT:
			case o("WAWebMediaTypes").MediaDataStage.PREPARING:
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.EXISTS: {
				var N;
				n[25] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(o("WAWebMediaStateControls.react").Pending, {}), n[25] = N) : N = n[25], L = N;
				break e;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
			case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY: throw r("err")("invalid value for sticker mediaStage '" + E + "'");
		}
		var M;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (M = (e || (e = r("stylex"))).props(d.thumb, d.container, o("WDSMargins.stylex").wdsMargins.marginBottom2, c.paddingBottom10), n[26] = M) : M = n[26];
		var w;
		return n[27] !== R || n[28] !== L || n[29] !== t.children ? (w = u.jsxs("div", babelHelpers.extends({}, M, {
			onClick: R,
			children: [L, t.children]
		})), n[27] = R, n[28] = L, n[29] = t.children, n[30] = w) : w = n[30], w;
	}
	l.default = m;
}), 98);
