__d("WAWebBizBroadcastProUpsertAudienceSaveButton.react", [
	"WAWebBizBroadcastProCreateCustomAudienceMutation",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebFlex.react",
	"WAWebNoop",
	"WDSButton.react",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = { button: {
		marginTop: "x98l61r",
		marginInlineEnd: "xviac27",
		marginBottom: "x1ua1l7f",
		marginInlineStart: "xlese2p",
		maxWidth: "x1mvdoyg",
		width: "xh8yej3",
		$$css: !0
	} };
	function p(e) {
		var t = e.broadcastListName, n = e.isDisabled, a = e.onAudienceCreateSuccess, i = e.phoneNumbers, l = e.subscriberPoolID, u = d(!1), p = u[0], _ = u[1], f = r("useWAWebUnmountSignal")(), g = c(function() {
			_(!0), o("WAWebBizBroadcastProCreateCustomAudienceMutation").createCustomAudienceList(l, t, i).then(function(e) {
				f.aborted || a(e);
			}).catch(r("WAWebNoop")).finally(function() {
				f.aborted || _(!1);
			});
		}, [
			t,
			i,
			a,
			l,
			f
		]);
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: s.jsx(o("WAWebFlex.react").FlexRow, {
				align: "end",
				justify: "end",
				xstyle: m.button,
				children: s.jsx(r("WDSButton.react"), {
					disabled: n || p,
					label: o("WAWebBizBroadcastsAudienceSelectionStrings").getSaveAudienceButtonLabel(),
					loading: p,
					onPress: g,
					testid: "biz-broadcast-pro-upsert-audience-save-button",
					variant: "filled"
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
