__d("WAWebBizBroadcastProUpsertAudienceSaveButton.react", [
	"WAWebBizBroadcastProCreateCustomAudienceMutation",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebFlex.react",
	"WAWebNoop",
	"WDSButton.react",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(11), n = e.broadcastListName, a = e.isDisabled, i = e.onAudienceCreateSuccess, l = e.phoneNumbers, u = e.subscriberPoolID, c = d(!1), p = c[0], _ = c[1], f = r("useWAWebUnmountSignal")(), g;
		t[0] !== n || t[1] !== i || t[2] !== l || t[3] !== u || t[4] !== f ? (g = function() {
			_(!0), o("WAWebBizBroadcastProCreateCustomAudienceMutation").createCustomAudienceList(u, n, l).then(function(e) {
				f.aborted || i(e);
			}).catch(r("WAWebNoop")).finally(function() {
				f.aborted || _(!1);
			});
		}, t[0] = n, t[1] = i, t[2] = l, t[3] = u, t[4] = f, t[5] = g) : g = t[5];
		var h = g, y = a || p, C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebBizBroadcastsAudienceSelectionStrings").getSaveAudienceButtonLabel(), t[6] = C) : C = t[6];
		var b;
		return t[7] !== h || t[8] !== p || t[9] !== y ? (b = s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: s.jsx(o("WAWebFlex.react").FlexRow, {
				align: "end",
				justify: "end",
				xstyle: m.button,
				children: s.jsx(r("WDSButton.react"), {
					disabled: y,
					label: C,
					loading: p,
					onPress: h,
					testid: "biz-broadcast-pro-upsert-audience-save-button",
					variant: "filled"
				})
			})
		}), t[7] = h, t[8] = p, t[9] = y, t[10] = b) : b = t[10], b;
	}
	l.default = p;
}), 98);
