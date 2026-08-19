__d("useWAWebPreloadThreadPreviewMessages", [
	"WAWebChatLoadMessages",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e, t) {
		var n = o("react-compiler-runtime").c(8), r;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (r = new Set(), n[0] = r) : r = n[0];
		var a = c(r), i;
		n[1] !== t || n[2] !== e.id || n[3] !== e.msgs ? (i = function() {
			if (!(e.msgs.length > 0)) {
				var n = e.id.toString();
				a.current.has(n) || (a.current.add(n), o("WAWebChatLoadMessages").loadEarlierMsgs({
					chat: t,
					msgCollection: e.msgs,
					threadId: e.id
				}));
			}
		}, n[1] = t, n[2] = e.id, n[3] = e.msgs, n[4] = i) : i = n[4];
		var l;
		n[5] !== t || n[6] !== e ? (l = [e, t], n[5] = t, n[6] = e, n[7] = l) : l = n[7], u(i, l);
	}
	l.default = d;
}), 98);
