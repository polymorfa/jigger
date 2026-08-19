__d("WAWebMediaMsgPreviewQuotedMsgThumbnailIcon.react", ["WAWebMediaMsgPreview.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.msg, n = t.mediaData, r = n.fullPreviewData, a = n.preview, i = a != null || r != null;
		return i ? s.jsx("div", {
			className: "xi9e97b",
			children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, { mediaData: t.mediaData })
		}) : null;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
