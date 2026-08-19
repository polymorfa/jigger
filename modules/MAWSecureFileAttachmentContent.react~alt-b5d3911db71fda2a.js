__d("MAWSecureFileAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWChatFile.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWV2AttachmentErrorPlaceholder.react",
	"MWV2SecureFileAttachmentErrorPlaceholder.react",
	"MWXMessageBubble.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect, c = 60, d = 250, m = { bubble: {
		paddingTop: "xexx8yu",
		paddingInlineEnd: "xyri2b",
		paddingBottom: "x18d9i69",
		paddingInlineStart: "x1c1uobl",
		$$css: !0
	} };
	function p(e) {
		var t = e.connectBottom, n = e.connectTop, o = e.dbAttachment, a = e.getFileUrl, i = e.mediaRenderQpl, l = e.outgoing, p = e.shouldDisableAutoTriggerDownload;
		u(function() {
			i == null || i.addPoint("render-file-attachment");
		}, [i]);
		var _ = function(a, u) {
			return s.jsx(r("MWXMessageBubble.react"), {
				align: l ? "right" : "left",
				color: "incoming",
				connectBottom: t,
				connectTop: n,
				xstyle: m.bubble,
				children: s.jsx(r("MWV2SecureFileAttachmentErrorPlaceholder.react"), {
					file: o,
					isRetryableError: a,
					mediaRenderQpl: i,
					onRetry: u
				})
			});
		}, f = function(u) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: u("MAWSecureFileAttachmentContentV2.Suspense", !0),
				name: "MAWSecureFileAttachmentContentV2.Suspense",
				children: s.jsx(r("MWXMessageBubble.react"), {
					align: l ? "right" : "left",
					color: "incoming",
					connectBottom: t,
					connectTop: n,
					xstyle: m.bubble,
					children: s.jsx(r("MAWChatFile.react"), {
						file: o,
						getFileUrl: a,
						mediaRenderQpl: i,
						renderUnsupportedAttachment: function() {
							return s.jsx(r("MWV2AttachmentErrorPlaceholder.react"), {
								connectBottom: t,
								connectTop: n,
								height: c,
								outgoing: l,
								width: d
							});
						}
					})
				})
			});
		};
		return s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: t,
			connectTop: n,
			dbAttachment: o,
			descriptionForLogging: "MAWSecureFileAttachmentContentV2",
			errorComponentRenderer: _,
			mediaRenderQpl: i,
			outgoing: l,
			placeholderHeight: c,
			placeholderWidth: d,
			shouldDisableAutoTriggerDownload: p,
			successfulComponentRenderer: f
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
