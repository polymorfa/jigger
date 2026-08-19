__d("MAWSecureFileAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWChatFile.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWV2AttachmentErrorPlaceholder.react",
	"MWV2SecureFileAttachmentErrorPlaceholder.react",
	"MWXMessageBubble.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(25), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getFileUrl, p = e.mediaRenderQpl, _ = e.outgoing, f = e.shouldDisableAutoTriggerDownload, g, h;
		t[0] !== p ? (g = function() {
			p == null || p.addPoint("render-file-attachment");
		}, h = [p], t[0] = p, t[1] = g, t[2] = h) : (g = t[1], h = t[2]), u(g, h);
		var y;
		t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== p || t[7] !== _ ? (y = function(t, o) {
			return s.jsx(r("MWXMessageBubble.react"), {
				align: _ ? "right" : "left",
				color: "incoming",
				connectBottom: n,
				connectTop: a,
				xstyle: m.bubble,
				children: s.jsx(r("MWV2SecureFileAttachmentErrorPlaceholder.react"), {
					file: i,
					isRetryableError: t,
					mediaRenderQpl: p,
					onRetry: o
				})
			});
		}, t[3] = n, t[4] = a, t[5] = i, t[6] = p, t[7] = _, t[8] = y) : y = t[8];
		var C = y, b;
		t[9] !== n || t[10] !== a || t[11] !== i || t[12] !== l || t[13] !== p || t[14] !== _ ? (b = function(t) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureFileAttachmentContentV2.Suspense", !0),
				name: "MAWSecureFileAttachmentContentV2.Suspense",
				children: s.jsx(r("MWXMessageBubble.react"), {
					align: _ ? "right" : "left",
					color: "incoming",
					connectBottom: n,
					connectTop: a,
					xstyle: m.bubble,
					children: s.jsx(r("MAWChatFile.react"), {
						file: i,
						getFileUrl: l,
						mediaRenderQpl: p,
						renderUnsupportedAttachment: function() {
							return s.jsx(r("MWV2AttachmentErrorPlaceholder.react"), {
								connectBottom: n,
								connectTop: a,
								height: c,
								outgoing: _,
								width: d
							});
						}
					})
				})
			});
		}, t[9] = n, t[10] = a, t[11] = i, t[12] = l, t[13] = p, t[14] = _, t[15] = b) : b = t[15];
		var v = b, S;
		return t[16] !== n || t[17] !== a || t[18] !== i || t[19] !== C || t[20] !== p || t[21] !== _ || t[22] !== f || t[23] !== v ? (S = s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			descriptionForLogging: "MAWSecureFileAttachmentContentV2",
			errorComponentRenderer: C,
			mediaRenderQpl: p,
			outgoing: _,
			placeholderHeight: c,
			placeholderWidth: d,
			shouldDisableAutoTriggerDownload: f,
			successfulComponentRenderer: v
		}), t[16] = n, t[17] = a, t[18] = i, t[19] = C, t[20] = p, t[21] = _, t[22] = f, t[23] = v, t[24] = S) : S = t[24], S;
	}
	l.default = p;
}), 98);
