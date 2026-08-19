__d("WAWebForwardedAiBotMessageInfoHeader.react", [
	"WAWebBotUtils",
	"WAWebForwardedBotDisplayName",
	"WAWebForwardedInfoHeaderLink.react",
	"WAWebTeeLockNameRow.react",
	"react",
	"react-compiler-runtime",
	"useWAWebForwardedAiBotMessageClickHandler"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(7), n = e.msg, a = o("useWAWebForwardedAiBotMessageClickHandler").useForwardedAiBotMessageClickHandler(n);
		if (a == null) return null;
		var i = n.forwardedAiBotMessageInfo;
		if (i == null || o("WAWebBotUtils").isHatchBot(i.botId)) return null;
		var l;
		t[0] !== i ? (l = o("WAWebForwardedBotDisplayName").getForwardedBotDisplayName(i), t[0] = i, t[1] = l) : l = t[1];
		var u = l, c;
		t[2] !== a || t[3] !== u ? (c = s.jsx(r("WAWebForwardedInfoHeaderLink.react"), {
			onClick: a,
			testId: "forwarded-ai-bot-info",
			children: u
		}), t[2] = a, t[3] = u, t[4] = c) : c = t[4];
		var d = c;
		if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(i.botId)) {
			var m;
			return t[5] !== d ? (m = s.jsx(r("WAWebTeeLockNameRow.react"), { children: d }), t[5] = d, t[6] = m) : m = t[6], m;
		}
		return d;
	}
	l.default = u;
}), 98);
