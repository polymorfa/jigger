__d("MAWLoadingStateSpinnerWithQueueState", [
	"CometDarkModeContext",
	"MAWLoadingSpinner.react",
	"MAWLoadingStateSpinnerUtils",
	"MAWSharedProtocolQueueConst",
	"react",
	"useMAWOfflineQueueLoadingIndicatorShown",
	"useMAWOfflineQueueState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = e.shouldDisplayLoadingIndicatorOnMessengerRoute, n = u(r("CometDarkModeContext")).currentSetting === "ENABLED", a = o("useMAWOfflineQueueState").useMAWOfflineQueueState(), i = a.offlineQueueCount, l = a.offlineQueueProgressDownloaded, s = a.offlineQueueProgressProcessed, c = i > 0 && a.offlineQueueSyncState !== o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete, d = c && t, m = o("MAWLoadingStateSpinnerUtils").getPercentage(l, s, i), p = o("MAWLoadingStateSpinnerUtils").getProgressMessage(m);
		return o("MAWLoadingSpinner.react").useMAWLoadingSpinner("progressRing", n, p, o("MAWLoadingStateSpinnerUtils").completedMessage, d, m), null;
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		var e = r("useMAWOfflineQueueLoadingIndicatorShown")(!0);
		return e ? s.jsx(c, { shouldDisplayLoadingIndicatorOnMessengerRoute: e }) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
