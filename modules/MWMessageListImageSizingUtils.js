__d("MWMessageListImageSizingUtils", ["justknobx", "useGetMediaGroupStyles"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return n === !0 ? {
			maxHeight: t === "Inbox" ? o("useGetMediaGroupStyles").IMAGE_SIZE : o("useGetMediaGroupStyles").IMAGE_SIZE_CHAT_TAB,
			maxWidth: t === "Inbox" ? o("useGetMediaGroupStyles").IMAGE_SIZE : o("useGetMediaGroupStyles").IMAGE_SIZE_CHAT_TAB
		} : t !== "Inbox" && t !== "ChatTab" ? {
			maxHeight: 200,
			maxWidth: 480
		} : {
			maxHeight: t === "Inbox" ? r("justknobx")._("2546") : r("justknobx")._("2547"),
			maxWidth: t === "Inbox" ? r("justknobx")._("2548") : r("justknobx")._("2549")
		};
	}
	l.getMaxPreviewHeightAndWidth = e;
}), 98);
