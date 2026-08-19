__d("MAWSecurePlaceholderTombstone.react", [
	"MAWUnavailablePlaceholder.react",
	"MAWUnavailableStoryPlaceholder.react",
	"MAWXMAUtils",
	"ReQL",
	"ReQLSuspense",
	"react",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = (e || (e = r("useReStore")))();
		return o("ReQLSuspense").useFirst(function() {
			return o("ReQL").fromTableAscending(n.tables.attachments).getKeyRange(t.threadKey, t.messageId);
		}, [
			n,
			t.threadKey,
			t.messageId
		], i.id + ":25");
	}
	function d(e) {
		var t = e.isOutgoing, n = e.message, a = n, i = c(a);
		if (i == null) return null;
		var l = i.xmaContentType;
		return l != null && o("MAWXMAUtils").isXMAFBStory(l) ? u.jsx(r("MAWUnavailableStoryPlaceholder.react"), { isOutgoing: t }) : u.jsx(r("MAWUnavailablePlaceholder.react"), { isOutgoing: t });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
