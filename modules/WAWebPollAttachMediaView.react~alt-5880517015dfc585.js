__d("WAWebPollAttachMediaView.react", [
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorForChatLoadable.react",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPollOptionsRenderUtils",
	"WAWebPollsCreatePollModal",
	"WAWebPollsGatingUtils",
	"WAWebWamEnumThreadType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(34), n = e.activeOptionIndex, a = e.allowMultipleMedia, i = e.chat, l = e.correctOptionKey, u = e.getComposeBoxEditorRef, c = e.mediaCollection, d = e.onCancel, m = e.onComplete, p = e.onSend, _ = e.options, f = e.pollType, g = e.question, h, y;
		t[0] !== i || t[1] !== l || t[2] !== u || t[3] !== c.mediaPickerStatsLogger || t[4] !== d || t[5] !== m || t[6] !== _ || t[7] !== f || t[8] !== g ? (y = function(t) {
			var e = t === void 0 ? !0 : t;
			e && h(), m == null || m(!1), d == null || d(), c.mediaPickerStatsLogger.logCancel(), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
				chat: i,
				getComposeBoxEditorRef: u,
				initialOptions: _,
				initialQuestion: g,
				initialCheckedKey: l,
				pollType: f
			})), o("WAWebModalManager").ModalManager.closeMedia();
		}, h = function() {
			i && i.setAttachMediaContents(null);
		}, t[0] = i, t[1] = l, t[2] = u, t[3] = c.mediaPickerStatsLogger, t[4] = d, t[5] = m, t[6] = _, t[7] = f, t[8] = g, t[9] = h, t[10] = y) : (h = t[9], y = t[10]);
		var C;
		t[11] !== n || t[12] !== i || t[13] !== h || t[14] !== l || t[15] !== u || t[16] !== c.mediaPickerStatsLogger || t[17] !== p || t[18] !== _ || t[19] !== f || t[20] !== g ? (C = async function(t) {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
				chat: i,
				getComposeBoxEditorRef: u,
				initialOptions: o("WAWebPollOptionsRenderUtils").getNewOptions({
					medias: t,
					originalOptions: _,
					activeOptionIndex: n
				}),
				initialCheckedKey: l,
				initialQuestion: g,
				pollType: f,
				onSend: function() {
					c.mediaPickerStatsLogger.logSend({ isViewOnce: !1 });
				}
			})), o("WAWebModalManager").ModalManager.closeMedia(), h(), p == null || p();
		}, t[11] = n, t[12] = i, t[13] = h, t[14] = l, t[15] = u, t[16] = c.mediaPickerStatsLogger, t[17] = p, t[18] = _, t[19] = f, t[20] = g, t[21] = C) : C = t[21];
		var b = C, v;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebPollsGatingUtils").getMaxPollOptionCount(), t[22] = v) : v = t[22];
		var S = v, R;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn xbpklzw x78zum5" }, t[23] = R) : R = t[23];
		var L;
		t[24] !== i.id ? (L = {
			surface: "channel-producer-media-editor",
			extras: {
				threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
				channelWid: i.id
			}
		}, t[24] = i.id, t[25] = L) : L = t[25];
		var E;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebPollsGatingUtils").getMaxPollOptionLength(), t[26] = E) : E = t[26];
		var k;
		return t[27] !== a || t[28] !== i || t[29] !== y || t[30] !== c || t[31] !== b || t[32] !== L ? (k = s.jsx("div", babelHelpers.extends({}, R, { children: s.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
			theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL,
			chat: i,
			allowMultipleMedia: a,
			onClose: y,
			initCaption: null,
			onSendMedia: b,
			mediaCollection: c,
			sendAsSticker: !1,
			onDropText: r("WAWebNoop"),
			tsNavigationData: L,
			maxNumberOfMedia: S,
			mimes: o("WAWebMimeTypes").IMAGE_MIMES,
			maxCaptionLength: E
		}) })), t[27] = a, t[28] = i, t[29] = y, t[30] = c, t[31] = b, t[32] = L, t[33] = k) : k = t[33], k;
	}
	l.PollAttachMediaView = u;
}), 98);
