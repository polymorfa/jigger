__d("WAWebBizBroadcastsImportAudienceTable.react", [
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebContactCollection",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.contacts, n = e.onDeleteContact;
		return s.jsx(r("WAWebBizCard.react"), {
			header: o("WAWebBizBroadcastsCreationStrings").getImportedLabel(),
			headerTestid: "biz-broadcasts-import-audience-table-header",
			subtitle: o("WAWebBizBroadcastsCreationStrings").getAudienceRecipientCountLabel(t.length),
			subtitleTestid: "biz-broadcasts-import-audience-table-subtitle",
			children: s.jsx("table", {
				className: "x140o2bo xh8yej3",
				children: s.jsx("tbody", { children: t.map(function(e, t) {
					var a, i;
					return s.jsxs("tr", { children: [
						s.jsx("td", {
							className: "x1m189uc x6ikm8r x10wlt62 xde1mab xxymvpz xz84dc7",
							children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
								contact: (e == null ? void 0 : e.lid) == null ? null : o("WAWebContactCollection").ContactCollection.get(e == null ? void 0 : e.lid),
								index: t,
								rowData: { name: (((a = e.firstName) != null ? a : "") + " " + ((i = e.lastName) != null ? i : "")).trim() }
							})
						}),
						s.jsx("td", {
							className: "x1m189uc x6ikm8r x10wlt62 xlyipyv xxymvpz x14zvdfm",
							children: s.jsx(r("WDSText.react"), {
								testid: "biz-broadcasts-import-audience-table-phone-number-" + t,
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: e.phone
							})
						}),
						s.jsx("td", {
							className: "xxymvpz x17vnrad",
							children: s.jsx("div", {
								className: "x78zum5 x7v6yn8",
								children: s.jsx(r("WDSButton.react"), {
									testid: "biz-broadcasts-import-audience-table-delete-button-" + t,
									size: "medium",
									variant: "borderless",
									Icon: r("WDSIconIcDelete.react"),
									onPress: function() {
										return n(e);
									}
								})
							})
						})
					] }, e.phone + "-" + t);
				}) })
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
