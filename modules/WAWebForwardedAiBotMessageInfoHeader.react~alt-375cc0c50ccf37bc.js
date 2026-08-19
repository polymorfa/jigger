__d("WAWebForwardedAiBotMessageInfoHeader.react", [
	"WAWebBotUtils",
	"WAWebForwardedBotDisplayName",
	"WAWebForwardedInfoHeaderLink.react",
	"WAWebTeeLockNameRow.react",
	"react",
	"useWAWebForwardedAiBotMessageClickHandler"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.msg, n = o("useWAWebForwardedAiBotMessageClickHandler").useForwardedAiBotMessageClickHandler(t);
		if (n == null) return null;
		var a = t.forwardedAiBotMessageInfo;
		if (a == null || o("WAWebBotUtils").isHatchBot(a.botId)) return null;
		var i = o("WAWebForwardedBotDisplayName").getForwardedBotDisplayName(a), l = s.jsx(r("WAWebForwardedInfoHeaderLink.react"), {
			onClick: n,
			testId: "forwarded-ai-bot-info",
			children: i
		});
		return o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(a.botId) ? s.jsx(r("WAWebTeeLockNameRow.react"), { children: l }) : l;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
