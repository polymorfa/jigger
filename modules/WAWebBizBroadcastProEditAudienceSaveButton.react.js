__d("WAWebBizBroadcastProEditAudienceSaveButton.react", [
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceSaveButtonMutation.graphql",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebNoop",
	"WDSButton.react",
	"react",
	"react-compiler-runtime",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizBroadcastProEditAudienceSaveButtonMutation.graphql");
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.audienceName, a = e.audienceSize, i = e.isDisabled, l = e.onAudienceEditSuccess, s = e.originalAudience, d = e.phoneNumbersAdded, m = e.phoneNumbersRemoved, p = o("CometRelay").useMutation(c), _ = p[0], f = p[1], g = r("useWAWebUnmountSignal")(), h;
		t[0] !== n || t[1] !== a || t[2] !== _ || t[3] !== l || t[4] !== s.id || t[5] !== s.name || t[6] !== d || t[7] !== m || t[8] !== g ? (h = function() {
			_({
				variables: { input: {
					custom_audience_id: s.id,
					name: n,
					phone_numbers_added: d,
					phone_numbers_removed: m
				} },
				onCompleted: function(t, r) {
					var e;
					if (!g.aborted && !(r != null && r.length > 0)) {
						var o = t.edit_wa_marketing_messages_custom_audience, i = o == null ? void 0 : o.custom_audience_id;
						i == null || ((e = o == null ? void 0 : o.failed_operations.length) != null ? e : 0) > 0 || l({
							id: i,
							name: n != null ? n : s.name,
							audienceSize: a,
							phoneNumbers: []
						});
					}
				},
				onError: r("WAWebNoop")
			});
		}, t[0] = n, t[1] = a, t[2] = _, t[3] = l, t[4] = s.id, t[5] = s.name, t[6] = d, t[7] = m, t[8] = g, t[9] = h) : h = t[9];
		var y = h, C = i || f, b;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebBizBroadcastsAudienceSelectionStrings").getSaveAudienceButtonLabel(), t[10] = b) : b = t[10];
		var v;
		return t[11] !== y || t[12] !== f || t[13] !== C ? (v = u.jsx(r("WDSButton.react"), {
			disabled: C,
			label: b,
			loading: f,
			onPress: y,
			testid: "biz-broadcast-pro-edit-audience-save-button",
			variant: "filled"
		}), t[11] = y, t[12] = f, t[13] = C, t[14] = v) : v = t[14], v;
	}
	l.default = d;
}), 98);
