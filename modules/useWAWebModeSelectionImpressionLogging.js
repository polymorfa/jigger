__d("useWAWebModeSelectionImpressionLogging", [
	"WAWebBotJourneyLogger",
	"react",
	"react-compiler-runtime",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useRef;
	function u() {
		var e = o("react-compiler-runtime").c(1), t = s(!1), n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = { onVisible: function() {
			t.current || (o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(), t.current = !0);
		} }, e[0] = n) : n = e[0];
		var a = r("useVisibility")(n), i = a[0];
		return i;
	}
	l.useWAWebModeSelectionImpressionLogging = u;
}), 98);
