__d("MAWLoadingStateSpinnerWithQueueState", [
	"CometDarkModeContext",
	"MAWLoadingSpinner.react",
	"MAWLoadingStateSpinnerUtils",
	"MAWSharedProtocolQueueConst",
	"react",
	"react-compiler-runtime",
	"useMAWOfflineQueueLoadingIndicatorShown",
	"useMAWOfflineQueueState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.shouldDisplayLoadingIndicatorOnMessengerRoute, a = u(r("CometDarkModeContext")).currentSetting === "ENABLED", i = o("useMAWOfflineQueueState").useMAWOfflineQueueState(), l = i.offlineQueueCount, s = i.offlineQueueProgressDownloaded, c = i.offlineQueueProgressProcessed, d = l > 0 && i.offlineQueueSyncState !== o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete, m = d && n, p, _;
		t[0] !== s || t[1] !== l || t[2] !== c ? (p = o("MAWLoadingStateSpinnerUtils").getPercentage(s, c, l), _ = o("MAWLoadingStateSpinnerUtils").getProgressMessage(p), t[0] = s, t[1] = l, t[2] = c, t[3] = p, t[4] = _) : (p = t[3], _ = t[4]);
		var f = _;
		return o("MAWLoadingSpinner.react").useMAWLoadingSpinner("progressRing", a, f, o("MAWLoadingStateSpinnerUtils").completedMessage, m, p), null;
	}
	function d() {
		var e = o("react-compiler-runtime").c(2), t = r("useMAWOfflineQueueLoadingIndicatorShown")(!0), n;
		return e[0] !== t ? (n = t ? s.jsx(c, { shouldDisplayLoadingIndicatorOnMessengerRoute: t }) : null, e[0] = t, e[1] = n) : n = e[1], n;
	}
	l.default = d;
}), 98);
