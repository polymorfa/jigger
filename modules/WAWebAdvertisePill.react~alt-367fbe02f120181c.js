__d("WAWebAdvertisePill.react", [
	"fbt",
	"WAWebBizNativeAdsWamLogger",
	"WAWebChatlistUtils",
	"WAWebListFilterButton.react",
	"WDSIconIcCampaignMegaphone.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.adCreationUrlInput, n = e.ctaText, a = e.disabled, i = e.lwiEntryPoint, l = t.activeAccountInfo;
		c(function() {
			o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(i, l !== "not-linked" && l.hasFacebookPage);
		}, [l, i]);
		var d = u.jsx(r("WDSIconIcCampaignMegaphone.react"), {}), m = n != null ? n : s._(
			/*BTDS*/
			""
		), p = function() {
			o("WAWebChatlistUtils").handleAdCreation({
				adCreationUrlInput: t,
				lwiEntryPoint: i
			});
		};
		return u.jsx(r("WAWebListFilterButton.react"), {
			disabled: a,
			label: m,
			onClick: p,
			selected: !1,
			startIcon: d,
			startWDSIcon: r("WDSIconIcCampaignMegaphone.react"),
			theme: "drawer-header"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
