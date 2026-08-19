__d("WAWebBizBroadcastProEditAudienceSaveButton.react", [
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceSaveButtonMutation.graphql",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebNoop",
	"WDSButton.react",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizBroadcastProEditAudienceSaveButtonMutation.graphql");
	function d(e) {
		var t = e.audienceName, n = e.audienceSize, a = e.isDisabled, i = e.onAudienceEditSuccess, l = e.originalAudience, s = e.phoneNumbersAdded, d = e.phoneNumbersRemoved, m = o("CometRelay").useMutation(c), p = m[0], _ = m[1], f = r("useWAWebUnmountSignal")(), g = function() {
			p({
				variables: { input: {
					custom_audience_id: l.id,
					name: t,
					phone_numbers_added: s,
					phone_numbers_removed: d
				} },
				onCompleted: function(r, o) {
					var e;
					if (!f.aborted && !(o != null && o.length > 0)) {
						var a = r.edit_wa_marketing_messages_custom_audience, s = a == null ? void 0 : a.custom_audience_id;
						s == null || ((e = a == null ? void 0 : a.failed_operations.length) != null ? e : 0) > 0 || i({
							id: s,
							name: t != null ? t : l.name,
							audienceSize: n,
							phoneNumbers: []
						});
					}
				},
				onError: r("WAWebNoop")
			});
		};
		return u.jsx(r("WDSButton.react"), {
			disabled: a || _,
			label: o("WAWebBizBroadcastsAudienceSelectionStrings").getSaveAudienceButtonLabel(),
			loading: _,
			onPress: g,
			testid: "biz-broadcast-pro-edit-audience-save-button",
			variant: "filled"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
