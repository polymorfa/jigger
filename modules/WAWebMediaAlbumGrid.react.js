__d("WAWebMediaAlbumGrid.react", [
	"fbt",
	"WAWebCmd",
	"WAWebDisplayType",
	"WAWebMediaAlbumPosition",
	"WAWebMediaAlbumUtils",
	"WAWebMediaVideo.react",
	"WAWebMessagePicture.react",
	"WAWebMsgType",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"err",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u = ["elRef", "overlayContent"], c, d, m = d || (d = o("react")), p = d, _ = p.useImperativeHandle, f = p.useRef, g = { marginTop3: {
		marginTop: "x7r5mf7",
		$$css: !0
	} }, h = {
		albumTopLeft: {
			marginTop: "xdj266r",
			marginInlineEnd: "x1p8j9ns",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		albumTopRight: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		albumBottomLeft: {
			marginTop: "x7r5mf7",
			marginInlineEnd: "x1p8j9ns",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		albumBottomRight: {
			marginTop: "x7r5mf7",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		}
	}, y = new Map([
		[o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT, h.albumTopLeft],
		[o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT, h.albumTopRight],
		[o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT, h.albumBottomLeft],
		[o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_RIGHT, h.albumBottomRight]
	]);
	function C(t) {
		var n = o("react-compiler-runtime").c(15), a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.albumPosition, s = i.currentAlbumMessageIndex, u = i.displayType, d = i.msg, p = i.numAdditionalMedia, h = f(null), C = f(null), S = o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(i.albumMsgs), R = l === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT && (i.albumMsgs.length === 3 || i.albumMsgs.length === 2 && !S), L = l === o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT && i.albumMsgs.length === 3 || l === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT && i.albumMsgs.length < 4 && !(i.albumMsgs.length === 2 && S), E = [
			[{
				gridColumn: "1 / 3",
				gridRow: "1 / 3"
			}],
			[{
				gridColumn: "1 / 3",
				gridRow: "1 / 2"
			}, {
				gridColumn: "1 / 3",
				gridRow: "2 / 3"
			}],
			[
				{
					gridColumn: "1 / 3",
					gridRow: "1 / 2"
				},
				{
					gridColumn: "1 / 2",
					gridRow: "2 / 3"
				},
				{
					gridColumn: "2 / 3",
					gridRow: "2 / 3"
				}
			],
			[
				{
					gridColumn: "1 / 2",
					gridRow: "1 / 2"
				},
				{
					gridColumn: "2 / 3",
					gridRow: "1 / 2"
				},
				{
					gridColumn: "1 / 2",
					gridRow: "2 / 3"
				},
				{
					gridColumn: "2 / 3",
					gridRow: "2 / 3"
				}
			]
		], k = [{
			gridColumn: "1 / 2",
			gridRow: "1 / 3"
		}, {
			gridColumn: "2 / 3",
			gridRow: "1 / 3"
		}], I = function() {
			d.type === o("WAWebMsgType").MSG_TYPE.REVOKED && o("WAWebCmd").Cmd.refreshMessages();
		};
		o("useWAWebListener").useListener(d, "change:type", I);
		var T;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return C.current;
		}, n[0] = T) : T = n[0];
		var D = T, x;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			return r("nullthrows")(h.current);
		}, n[1] = x) : x = n[1];
		var $ = x, P;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			return {
				getRef: D,
				getContainerElement: $
			};
		}, n[2] = P) : P = n[2], _(a, P);
		var N = function() {
			return i.albumMsgs.length === 2 && S ? k[s] : E[Math.min(i.albumMsgs.length, 4) - 1][s];
		}, M = N(), w = {
			0: "xh8yej3 x1o2hl16 xt7dq6l",
			1: "xh8yej3 xt7dq6l x9c8tz"
		}[!!o("WAWebDisplayType").isWideDisplay(u) << 0], A = (c || (c = r("stylex"))).props(y.get(l), L && o("WDSMargins.stylex").wdsMargins.marginEnd0, R && g.marginTop3), F;
		n[3] !== p ? (F = p != null && p > 0 ? m.jsx(b, { numAdditionalMedia: p }) : null, n[3] = p, n[4] = F) : F = n[4];
		var O;
		n[5] !== i || n[6] !== F ? (O = m.jsx(v, babelHelpers.extends({}, i, {
			elRef: C,
			overlayContent: F
		})), n[5] = i, n[6] = F, n[7] = O) : O = n[7];
		var B;
		n[8] !== A || n[9] !== O ? (B = m.jsx("div", babelHelpers.extends({}, A, { children: O })), n[8] = A, n[9] = O, n[10] = B) : B = n[10];
		var W;
		return n[11] !== M || n[12] !== w || n[13] !== B ? (W = m.jsx("div", {
			ref: h,
			style: M,
			className: w,
			children: B
		}), n[11] = M, n[12] = w, n[13] = B, n[14] = W) : W = n[14], W;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = e.numAdditionalMedia, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = "x10l6tqk x1n327nk xr1yuqi x11t971q x4ii5y1 xvc5jky x1h833of x17t9dm2 x47corl", t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			className: r,
			children: s._(
				/*BTDS*/
				"",
				[s._param("number", n)]
			)
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(23), n, a, i;
		if (t[0] !== e ? (n = e.elRef, a = e.overlayContent, i = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]), i.msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
			var l;
			return t[4] !== n || t[5] !== a || t[6] !== i.albumMsgs || t[7] !== i.albumTheme || t[8] !== i.currentAlbumMessageIndex || t[9] !== i.displayType || t[10] !== i.isMsgVisible || t[11] !== i.msg || t[12] !== i.zoomMsg ? (l = m.jsx(o("WAWebMessagePicture.react").ImageMessage, {
				theme: i.albumTheme,
				albumMsgs: i.albumMsgs,
				msg: i.msg,
				currentAlbumMessageIndex: i.currentAlbumMessageIndex,
				mediaData: i.msg.mediaData,
				ref: n,
				isMsgVisible: i.isMsgVisible,
				zoomMsg: i.zoomMsg,
				overlayContent: a,
				displayAuthor: !1,
				displayType: i.displayType
			}), t[4] = n, t[5] = a, t[6] = i.albumMsgs, t[7] = i.albumTheme, t[8] = i.currentAlbumMessageIndex, t[9] = i.displayType, t[10] = i.isMsgVisible, t[11] = i.msg, t[12] = i.zoomMsg, t[13] = l) : l = t[13], l;
		}
		if (i.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
			var s;
			return t[14] !== n || t[15] !== a || t[16] !== i.albumMsgs || t[17] !== i.albumTheme || t[18] !== i.currentAlbumMessageIndex || t[19] !== i.displayType || t[20] !== i.msg || t[21] !== i.zoomMsg ? (s = m.jsx(r("WAWebMediaVideo.react"), {
				theme: i.albumTheme,
				albumMsgs: i.albumMsgs,
				msg: i.msg,
				currentAlbumMessageIndex: i.currentAlbumMessageIndex,
				ref: n,
				zoomMsg: i.zoomMsg,
				displayAuthor: !1,
				overlayContent: a,
				displayType: i.displayType
			}), t[14] = n, t[15] = a, t[16] = i.albumMsgs, t[17] = i.albumTheme, t[18] = i.currentAlbumMessageIndex, t[19] = i.displayType, t[20] = i.msg, t[21] = i.zoomMsg, t[22] = s) : s = t[22], s;
		}
		throw r("err")("Unexpected Album Type: " + i.msg.type);
	}
	l.default = C;
}), 226);
