__d("MAWAttachmentSizeUtils", ["I64", "MWMessageListImageSizingUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 200;
	function u(t) {
		var n = t.previewHeight != null ? (e || (e = o("I64"))).to_float(t.previewHeight) : t.previewHeightLarge != null ? (e || (e = o("I64"))).to_float(t.previewHeightLarge) : void 0, r = t.previewWidth != null ? (e || (e = o("I64"))).to_float(t.previewWidth) : t.previewWidthLarge != null ? (e || (e = o("I64"))).to_float(t.previewWidthLarge) : void 0;
		return {
			height: n,
			width: r
		};
	}
	function c(e, t, n, r) {
		var o = e.height, a = e.width, i = d(n.gifPlayback === !0, r, t != null ? t : "ChatTab", o), l = Math.min(a != null ? a : 480, t === "Inbox" ? 500 : 167);
		return {
			maxHeight: i,
			maxWidth: l
		};
	}
	function d(e, t, n, r) {
		return e ? o("MWMessageListImageSizingUtils").getMaxPreviewHeightAndWidth(t, n, !1).maxHeight : Math.min(r != null ? r : s, s);
	}
	l.getSizeFromAttachment = u, l.getMaxSizeForVideo = c, l.getMaxHeightForVideo = d;
}), 98);
