__d("useWAWebArchivedChatsActivityIndicator", [
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatUnreadConstants",
	"WAWebFrontendChatGetters",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d() {
		var e = o("react-compiler-runtime").c(7), t = c(0), n = t[0], r = t[1], a = c(!1), i = a[0], l = a[1], s;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = function() {
			var e = _, t = o("WAWebChatCollection").ChatCollection.filter(e).length;
			r(t);
		}, e[0] = s) : s = e[0];
		var d = s, f;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			var e = o("WAWebChatCollection").ChatCollection.filter(p), t = e.some(m);
			l(t);
		}, e[1] = f) : f = e[1];
		var g = f;
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "add remove reset change:archive change:unreadCount change:pendingSeenCount change:muteExpiration", d), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive change:hasUnreadMention change:archiveAtMentionViewedInDrawer", g);
		var h, y;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			d(), g();
		}, y = [], e[2] = h, e[3] = y) : (h = e[2], y = e[3]), u(h, y);
		var C;
		return e[4] !== n || e[5] !== i ? (C = {
			unreadCount: n,
			showUnreadMentionIcon: i
		}, e[4] = n, e[5] = i, e[6] = C) : C = e[6], C;
	}
	function m(e) {
		var t, n, r = (t = (n = e.groupMetadata) == null ? void 0 : n.unreadMentionMetadata.getUnreadMentionCount()) != null ? t : 0, o = !e.archiveAtMentionViewedInDrawer;
		return r > 0 && o;
	}
	function p(e) {
		return e.archive && o("WAWebChatGetters").getIsGroup(e) && (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) > 0 || o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD);
	}
	function _(e) {
		return e.archive && (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) > 0 || o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD);
	}
	l.useArchivedChatsActivityIndicator = d;
}), 98);
