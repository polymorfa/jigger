__d("MWXLinkPreviewTruncateText", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {
		body: 100,
		headline: 80,
		subtext: 100
	}, l = {
		body: 30,
		headline: 20,
		subtext: 30
	};
	function s(t) {
		var n = t.isChatTab, r = t.position, o = t.text, a = n ? l : e, i = a[r];
		if (o != null) {
			var s = o.replace(/\r?\n|\r/g, "").trim();
			return s.length <= i ? s : Array.from(s).slice(0, i).join("").trim() + "...";
		}
	}
	i.truncateText = s;
}), 66);
