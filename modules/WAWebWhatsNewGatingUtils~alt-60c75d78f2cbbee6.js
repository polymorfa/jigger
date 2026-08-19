__d("WAWebWhatsNewGatingUtils", [
	"WAPromiseDelays",
	"WAWebABProps",
	"WAWebBizAiLargeScreensGateModel",
	"WAWebMobilePlatforms",
	"WAWebWhatsNewContent"
], (function(t, n, r, o, a, i, l) {
	function e() {
		return !(o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") !== !0 || !o("WAWebWhatsNewContent").hasWhatsNewContent() || o("WAWebMobilePlatforms").isSMB() && !o("WAWebWhatsNewContent").hasSmbWhatsNewContent());
	}
	var s = 3e3;
	async function u() {
		return !o("WAWebMobilePlatforms").isSMB() || o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled() ? !0 : (await o("WAPromiseDelays").delayMs(s), o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled());
	}
	var c = 30, d = 15;
	function m() {
		return o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal_short_cooldown") === !0 ? d : c;
	}
	l.isWhatsNewAutoModalEnabled = e, l.resolveWhatsNewBizAgentEligible = u, l.getWhatsNewAutoModalCooldownDays = m;
}), 98);
