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
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.activeOptionIndex, n = e.allowMultipleMedia, a = e.chat, i = e.correctOptionKey, l = e.getComposeBoxEditorRef, u = e.mediaCollection, c = e.onCancel, d = e.onComplete, m = e.onSend, p = e.options, _ = e.pollType, f = e.question, g = function(t) {
			t === void 0 && (t = !0), t && h(), d == null || d(!1), c == null || c(), u.mediaPickerStatsLogger.logCancel(), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
				chat: a,
				getComposeBoxEditorRef: l,
				initialOptions: p,
				initialQuestion: f,
				initialCheckedKey: i,
				pollType: _
			})), o("WAWebModalManager").ModalManager.closeMedia();
		}, h = function() {
			a && a.setAttachMediaContents(null);
		}, y = async function(n) {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
				chat: a,
				getComposeBoxEditorRef: l,
				initialOptions: o("WAWebPollOptionsRenderUtils").getNewOptions({
					medias: n,
					originalOptions: p,
					activeOptionIndex: t
				}),
				initialCheckedKey: i,
				initialQuestion: f,
				pollType: _,
				onSend: function() {
					u.mediaPickerStatsLogger.logSend({ isViewOnce: !1 });
				}
			})), o("WAWebModalManager").ModalManager.closeMedia(), h(), m == null || m();
		}, C = o("WAWebPollsGatingUtils").getMaxPollOptionCount();
		return s.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn xbpklzw x78zum5",
			children: s.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL,
				chat: a,
				allowMultipleMedia: n,
				onClose: g,
				initCaption: null,
				onSendMedia: y,
				mediaCollection: u,
				sendAsSticker: !1,
				onDropText: r("WAWebNoop"),
				tsNavigationData: {
					surface: "channel-producer-media-editor",
					extras: {
						threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
						channelWid: a.id
					}
				},
				maxNumberOfMedia: C,
				mimes: o("WAWebMimeTypes").IMAGE_MIMES,
				maxCaptionLength: o("WAWebPollsGatingUtils").getMaxPollOptionLength()
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.PollAttachMediaView = u;
}), 98);
