__d("WAWebBizBroadcastsImportAudienceTable.react", [
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebContactCollection",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(14), n = e.contacts, a = e.onDeleteContact, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebBizBroadcastsCreationStrings").getImportedLabel(), t[0] = i) : i = t[0];
		var l;
		t[1] !== n.length ? (l = o("WAWebBizBroadcastsCreationStrings").getAudienceRecipientCountLabel(n.length), t[1] = n.length, t[2] = l) : l = t[2];
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x140o2bo xh8yej3" }, t[3] = u) : u = t[3];
		var c;
		if (t[4] !== n || t[5] !== a) {
			var d;
			t[7] !== a ? (d = function(t, n) {
				var e, i;
				return s.jsxs("tr", { children: [
					s.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 xde1mab xxymvpz xz84dc7",
						children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
							contact: (t == null ? void 0 : t.lid) == null ? null : o("WAWebContactCollection").ContactCollection.get(t == null ? void 0 : t.lid),
							index: n,
							rowData: { name: (((e = t.firstName) != null ? e : "") + " " + ((i = t.lastName) != null ? i : "")).trim() }
						})
					}),
					s.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 xlyipyv xxymvpz x14zvdfm",
						children: s.jsx(r("WDSText.react"), {
							testid: "biz-broadcasts-import-audience-table-phone-number-" + n,
							type: "Body1",
							maxLines: 1,
							colorName: "contentDeemphasized",
							children: t.phone
						})
					}),
					s.jsx("td", {
						className: "xxymvpz x17vnrad",
						children: s.jsx("div", {
							className: "x78zum5 x7v6yn8",
							children: s.jsx(r("WDSButton.react"), {
								testid: "biz-broadcasts-import-audience-table-delete-button-" + n,
								size: "medium",
								variant: "borderless",
								Icon: r("WDSIconIcDelete.react"),
								onPress: function() {
									return a(t);
								}
							})
						})
					})
				] }, t.phone + "-" + n);
			}, t[7] = a, t[8] = d) : d = t[8], c = n.map(d), t[4] = n, t[5] = a, t[6] = c;
		} else c = t[6];
		var m;
		t[9] !== c ? (m = s.jsx("table", babelHelpers.extends({}, u, { children: s.jsx("tbody", { children: c }) })), t[9] = c, t[10] = m) : m = t[10];
		var p;
		return t[11] !== l || t[12] !== m ? (p = s.jsx(r("WAWebBizCard.react"), {
			header: i,
			headerTestid: "biz-broadcasts-import-audience-table-header",
			subtitle: l,
			subtitleTestid: "biz-broadcasts-import-audience-table-subtitle",
			children: m
		}), t[11] = l, t[12] = m, t[13] = p) : p = t[13], p;
	}
	l.default = u;
}), 98);
