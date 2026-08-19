__d("useWAWebFrequentlyContactedContacts", [
	"WALogger",
	"WAWebABProps",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebQueryFrequentlyContactedMsgCount",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"react",
	"useWAWebAsync",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = (s || (s = o("react"))).useReducer, c = 5, d = 100;
	function m() {
		"use no forget";
		var t = u(function(e) {
			return e + 1;
		}, 0), n = t[1];
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "add remove change:archive", n), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:isContactBlocked", n);
		var a = o("WAWebABProps").getABPropConfigValue("web_frequently_contacted_enabled") >= 1, i = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts(), l = [];
		if (a) for (var s of o("WAWebChatCollection").ChatCollection.getModelsArray()) {
			var m = p(s, i);
			if (m != null && (l.push({
				chatId: s.id.toString(),
				contact: m
			}), l.length >= d)) break;
		}
		var _ = l.map(function(e) {
			return e.chatId;
		}), f = r("useWAWebAsync")(function() {
			return o("WAWebQueryFrequentlyContactedMsgCount").queryFrequentlyContactedMsgCountJob(_);
		}, [[].concat(_).sort().join(",")], a), g = f.error, h = f.value;
		if (g != null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["frequently-contacted: failed to query message counts"]))).catching(g).sendLogs("frequently-contacted-query-error"), [];
		if (!a || h == null) return [];
		var y = [];
		for (var C of l) {
			var b, v = C.chatId, S = C.contact, R = (b = h.get(v)) != null ? b : 0;
			R > 0 && y.push({
				contact: S,
				count: R
			});
		}
		return y.sort(function(e, t) {
			return t.count - e.count;
		}), y.slice(0, c).map(function(e) {
			return e.contact;
		});
	}
	function p(e, t) {
		if (e.archive || e.t == null) return null;
		var n = e.contact;
		return n == null || !n.id.isRegularUser() || n.isContactBlocked || t !== e.id.isLid() ? null : n;
	}
	l.default = m;
}), 98);
