__d("WAWebBizBroadcastProEditAudienceScreenLoadable", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"WAWebLoadingDrawer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebBizBroadcastProEditAudienceScreen.react").__setRef("WAWebBizBroadcastProEditAudienceScreenLoadable").load();
		return e;
	}, "BizBroadcastProEditAudienceScreen"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
		}
	});
	l.requireBundle = u, l.WAWebBizBroadcastProEditAudienceScreenLoadable = c;
}), 98);
