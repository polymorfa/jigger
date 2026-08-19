__d("MAWChatLiveLocationDialog.entrypoint", ["JSResourceForInteraction", "MAWChatLiveLocationDialogQuery$Parameters"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		getPreloadProps: function(t) {
			return { queries: { queryReference: {
				parameters: r("MAWChatLiveLocationDialogQuery$Parameters"),
				variables: { data: {
					client_subscription_id: t.clientSubscriptionId,
					thread_key: t.threadKey
				} }
			} } };
		},
		root: r("JSResourceForInteraction")("MAWChatLiveLocationDialog.react").__setRef("MAWChatLiveLocationDialog.entrypoint")
	};
	l.default = e;
}), 98);
