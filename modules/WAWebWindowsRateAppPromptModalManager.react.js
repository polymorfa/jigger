__d("WAWebWindowsRateAppPromptModalManager.react", [
	"WAWebHybridUtils",
	"WAWebModalManager",
	"WAWebWindowsHybridBridgeCommon",
	"WAWebWindowsRateAppPromptModal.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = !1, c = function(t) {
		u !== t && (u = t, !t && o("WAWebHybridUtils") != null && o("WAWebHybridUtils").shouldShowHybridRateTheAppPrompt() && o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebWindowsRateAppPromptModal.react"), {})));
	};
	function d() {
		var e;
		return o("useWAWebListener").useListener((e = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) == null || (e = e.nativeAppStateBridge) == null ? void 0 : e.getEvents(), "appStateChanged", c), null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
