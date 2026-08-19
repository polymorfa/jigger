__d("useWAWebAiChatOpenMetrics", [
	"WAWebBizAiChatOpenLogEvents",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.chat, r = e.chatEntryPoint, a = c(!1), i, l;
		t[0] !== n || t[1] !== r ? (i = function() {
			if (!a.current) {
				if (a.current = !0, n.id.isAiHub()) {
					o("WAWebBizAiChatOpenLogEvents").logAiHubChatOpen(r);
					return;
				}
				o("WAWebBizAiChatOpenLogEvents").logAiChatOpen(n, r);
			}
		}, l = [n, r], t[0] = n, t[1] = r, t[2] = i, t[3] = l) : (i = t[2], l = t[3]), u(i, l);
	}
	l.useWAWebAiChatOpenMetrics = d;
}), 98);
