__d("WAWebBizBroadcastProEditAudienceScreen.entrypoint", ["JSResourceForInteraction", "WAWebBizBroadcastProEditAudienceScreenQuery$Parameters"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		getPreloadProps: function(t) {
			return { queries: { queryReference: {
				options: { fetchPolicy: "network-only" },
				parameters: r("WAWebBizBroadcastProEditAudienceScreenQuery$Parameters"),
				variables: {
					caId: t.caId,
					first: 20
				}
			} } };
		},
		root: r("JSResourceForInteraction")("WAWebBizBroadcastProEditAudienceScreen.react").__setRef("WAWebBizBroadcastProEditAudienceScreen.entrypoint")
	};
	l.default = e;
}), 98);
