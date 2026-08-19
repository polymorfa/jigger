__d("useWAWebBotChatOpenMetrics", [
	"WAWebBotJourneyLogger",
	"WAWebBotLoggingUtils",
	"WAWebBotProfileCollection",
	"WAWebBotUtils",
	"WAWebPonyfillsCryptoRandomUUID",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useEffect;
	function u(e) {
		var t = e.chat, n = e.chatEntryPoint;
		s(function() {
			var e = t.id, a = o("WAWebBotUtils").isMetaAiBot(e);
			if (!(!a && !o("WAWebBotUtils").isHatchBot(e))) {
				var i = o("WAWebBotLoggingUtils").getBotEntryPoint(n), l = i != null ? i : o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
				if (l != null) {
					if (a) {
						var s, u = (s = o("WAWebBotProfileCollection").BotProfileCollection.get(e)) == null ? void 0 : s.personaId;
						if (u == null) return;
						i != null && o("WAWebBotJourneyLogger").BotJourneyLogger.setDestinationId(r("WAWebPonyfillsCryptoRandomUUID")()), o("WAWebBotJourneyLogger").BotJourneyLogger.setBotPersonaId(u);
					}
					o("WAWebBotJourneyLogger").BotJourneyLogger.setEntryPoint(l);
					var c = o("WAWebBotLoggingUtils").getBotMetricsEntryPointFromChatEntryPoint(n);
					c != null && o("WAWebBotJourneyLogger").BotJourneyLogger.setBotMetricsEntryPoint(c), a && o("WAWebBotJourneyLogger").BotJourneyLogger.logAiChatClick();
				}
			}
		}, []);
	}
	l.useBotChatOpenMetrics = u;
}), 98);
