__d("useWAWebShouldShowMsgPinnedIcon", ["useWAWebIsNewsletterMsgPinned", "useWAWebIsPinnedMsg"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = r("useWAWebIsNewsletterMsgPinned")(e), n = r("useWAWebIsPinnedMsg")(e.id);
		return t || n;
	}
	l.default = e;
}), 98);
