__d("useWAWebPinnedMessages", [
	"WAWebMsgCollection",
	"WAWebPinInChatCollection",
	"WAWebWidFactory",
	"react-compiler-runtime",
	"useWAWebAggregatedView"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("react-compiler-runtime").c(4), n;
		t[0] !== e.id ? (n = o("WAWebWidFactory").asChatWid(e.id), t[0] = e.id, t[1] = n) : n = t[1];
		var r = o("useWAWebAggregatedView").useAggregatedView(o("WAWebPinInChatCollection").PinInChatCollection.byChatId, n), a;
		return t[2] !== r ? (a = r.filter(o("WAWebPinInChatCollection").isPinValid).sort(s), t[2] = r, t[3] = a) : a = t[3], a;
	}
	function s(e, t) {
		var n = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey), r = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
		return n == null || r == null ? -1 : n.t - r.t;
	}
	l.default = e;
}), 98);
