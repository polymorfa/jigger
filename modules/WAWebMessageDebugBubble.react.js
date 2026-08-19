__d("WAWebMessageDebugBubble.react", [
	"WAWebDebugMsg",
	"WAWebDebugMsgUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(5), n = e.body, a = e.caption, i = "Unknown debug message";
		if (n != null) {
			var l;
			if (t[0] !== n || t[1] !== a) {
				var u = o("WAWebDebugMsg").asDebugMessage(n);
				l = u ? r("WAWebDebugMsgUtils").debugReadable(u, a) : "Unrecognized debug message: " + n, t[0] = n, t[1] = a, t[2] = l;
			} else l = t[2];
			i = l;
		}
		var c = "⚙ " + i, d;
		return t[3] !== c ? (d = s.jsx("span", { children: c }), t[3] = c, t[4] = d) : d = t[4], d;
	}
	l.default = u;
}), 98);
