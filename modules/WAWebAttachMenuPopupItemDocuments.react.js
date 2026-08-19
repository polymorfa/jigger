__d("WAWebAttachMenuPopupItemDocuments.react", [
	"Promise",
	"WAWebAttachMenuFilePicker",
	"WAWebAttachMenuStrings",
	"WAWebAttachmentMenuLogger",
	"WAWebBotMultiModalUtils",
	"WAWebChatGetters",
	"WAWebFileUtils",
	"WAWebImagineActionLogger",
	"WAWebPrepareMessageSendingAction",
	"WAWebStateUtils",
	"WDSIconIcDescriptionFilled.react",
	"WDSMenuItem.react",
	"cr:8711",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { refreshedIcon: {
		color: "x1xy43o6",
		$$css: !0
	} };
	function d(t) {
		var r = t.chat, a = t.dismissMenu, i = t.multiple, l = t.onDocumentPick;
		n("cr:8711") == null || n("cr:8711").preloadWebTPThumbnailRendererIfEnabled("documentAttachClick"), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(r), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(r, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
		var s = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(r));
		s && o("WAWebImagineActionLogger").logMetaAiDocumentClick(r);
		var u = s ? o("WAWebBotMultiModalUtils").getMetaAiFilePickerAcceptOverride() : null;
		o("WAWebAttachMenuFilePicker").createFilePicker({
			accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.DOCUMENT,
			acceptOverride: u,
			multiple: i,
			transformAttachment: function(t) {
				return {
					file: t,
					type: o("WAWebFileUtils").FILETYPE.DOCUMENT
				};
			}
		}, function(t) {
			if (s) {
				(e || (e = n("Promise"))).all(t).then(function(e) {
					var t = o("WAWebBotMultiModalUtils").getSupportedMetaAiAttachments(e);
					o("WAWebBotMultiModalUtils").maybeShowUnsupportedFileToast(t.length, e.length), t.length > 0 && l(t.map(function(e) {
						return e;
					}));
				});
				return;
			}
			l(t);
		}, a);
	}
	function m(e) {
		var t = e.chat, n = e.dismissMenu, a = e.multiple, i = e.onDocumentPick, l = function() {
			d({
				chat: t,
				dismissMenu: n,
				multiple: a,
				onDocumentPick: i
			});
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-document",
			onPress: l,
			Icon: r("WDSIconIcDescriptionFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: o("WAWebAttachMenuStrings").DocumentText()
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
