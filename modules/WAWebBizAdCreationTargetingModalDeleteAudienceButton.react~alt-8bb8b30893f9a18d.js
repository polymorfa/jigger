__d("WAWebBizAdCreationTargetingModalDeleteAudienceButton.react", [
	"fbt",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WDSButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext;
	function p(e) {
		var t = e.adAccountID, n = e.audienceID, o = e.onNavigateToDeleteConfirmation, a = m(r("WAWebBizAdCreationLoggerContext")), i = d(function() {
			n != null && (a != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "delete_audience_click",
				extra: { audience_id: n },
				loggerContext: a
			}), o());
		}, [
			t,
			n,
			a,
			o
		]);
		return u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: i,
			size: "medium",
			testid: "biz_native_ads_delete_audience_button",
			type: "destructive",
			variant: "outline"
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
