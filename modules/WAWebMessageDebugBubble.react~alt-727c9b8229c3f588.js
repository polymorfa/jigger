__d("WAWebMessageDebugBubble.react", [
	"WAWebDebugMsg",
	"WAWebDebugMsgUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.body, n = e.caption, a = "Unknown debug message";
		if (t != null) {
			var i = o("WAWebDebugMsg").asDebugMessage(t);
			a = i ? r("WAWebDebugMsgUtils").debugReadable(i, n) : "Unrecognized debug message: " + t;
		}
		return s.jsx("span", { children: "⚙ " + a });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
