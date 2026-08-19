__d("WAWebContactManagerImportContactsTable.react", [
	"fbt",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebContactCollection",
	"WAWebContactManagerImportTemplateUtils",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n;
		return (((t = e.firstName) != null ? t : "") + " " + ((n = e.lastName) != null ? n : "")).trim();
	}
	function d(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		for (var o of n) {
			var a = e[o];
			if (typeof a == "string" && a.length > 0) return a;
		}
		return "";
	}
	function m(e) {
		var t, n = e.contacts, a = e.onDeleteContact;
		return u.jsxs("table", {
			className: "x1mwwwfo x1drmoe9 xh8yej3",
			"data-testid": "cm-import-imported-table",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [u.jsx("thead", { children: u.jsxs("tr", { children: [
				u.jsx("th", {
					scope: "col",
					className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
					children: u.jsx(t = r("WDSText.react"), {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("th", {
					scope: "col",
					className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
					children: u.jsx(t, {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("th", {
					scope: "col",
					className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
					children: u.jsx(t, {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("th", {
					scope: "col",
					className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
					children: u.jsx(t, {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("th", {
					scope: "col",
					className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
					children: u.jsx(t, {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("th", {
					scope: "col",
					className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
					children: u.jsx(t, {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("th", {
					scope: "col",
					className: "x1nzty39 xp4054r xxymvpz x1useyqa"
				})
			] }) }), u.jsx("tbody", { children: n.map(function(e, t) {
				var n, i = (n = e.rawRow) != null ? n : {}, l = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME, "Username", "username"), m = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_LEAD_STAGE, "Lead stage", "lead stage"), p = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE, "Source", "source", "Acquisition source", "acquisition source"), _ = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_NOTES, "Notes", "notes");
				return u.jsxs("tr", {
					"data-testid": "cm-import-imported-row-" + t,
					children: [
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
								contact: (e == null ? void 0 : e.lid) == null ? null : o("WAWebContactCollection").ContactCollection.get(e.lid),
								index: t,
								rowData: { name: c(e) }
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: e.phone
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: l
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: m
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: p
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: _
							})
						}),
						u.jsx("td", {
							className: "x1nzty39 xp4054r xxymvpz x1useyqa",
							children: u.jsx(r("WDSButton.react"), {
								size: "medium",
								variant: "borderless",
								Icon: r("WDSIconIcDelete.react"),
								"aria-label": s._(
									/*BTDS*/
									""
								),
								onPress: function() {
									return a(e);
								},
								testid: "cm-import-imported-row-delete-" + t
							})
						})
					]
				}, e.rowIndex);
			}) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
