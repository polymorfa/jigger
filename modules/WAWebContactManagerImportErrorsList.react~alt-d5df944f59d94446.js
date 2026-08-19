__d("WAWebContactManagerImportErrorsList.react", [
	"fbt",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizCard.react",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebContactManagerImportErrorMessage",
	"WAWebContactManagerImportTemplateUtils",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.errorList, n = e.onDeleteAllErrors, a = e.onDeleteErrorItem;
		return t.length === 0 ? null : u.jsx(r("WAWebBizCard.react"), {
			testid: "cm-import-review-errors-card",
			header: s._(
				/*BTDS*/
				"",
				[s._plural(t.length, "number")]
			),
			ctaButton: u.jsx(r("WDSButton.react"), {
				variant: "tonal",
				size: "small",
				label: s._(
					/*BTDS*/
					""
				),
				onPress: n,
				testid: "cm-import-errors-delete-all-btn"
			}),
			children: u.jsxs("table", {
				className: "x1mwwwfo x1drmoe9 xh8yej3",
				"data-testid": "cm-import-errors-table",
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				children: [u.jsx("thead", { children: u.jsxs("tr", { children: [
					u.jsx("th", {
						scope: "col",
						className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz",
						children: u.jsx(r("WDSText.react"), {
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
						children: u.jsx(r("WDSText.react"), {
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
						children: u.jsx(r("WDSText.react"), {
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
						children: u.jsx(r("WDSText.react"), {
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
						children: u.jsx(r("WDSText.react"), {
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
						children: u.jsx(r("WDSText.react"), {
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
				] }) }), u.jsx("tbody", { children: t.map(function(e, t) {
					var n, i = o("WAWebContactImportTemplateParsingUtils").extractPhone(e.rowData), l = d(e.rowData, o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME, "Username", "username"), c = d(e.rowData, o("WAWebContactManagerImportTemplateUtils").FBT_LEAD_STAGE, "Lead stage", "lead stage"), m = d(e.rowData, o("WAWebContactManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE, "Source", "source", "Acquisition source", "acquisition source");
					return u.jsxs("tr", {
						"data-testid": "cm-import-errors-row-" + t,
						children: [
							u.jsx("td", {
								className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
								children: u.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
									contact: null,
									index: t,
									rowData: e.rowData
								})
							}),
							u.jsx("td", {
								className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
								children: u.jsx(n = r("WDSText.react"), {
									type: "Body1",
									maxLines: 1,
									colorName: "contentDeemphasized",
									children: i
								})
							}),
							u.jsx("td", {
								className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
								children: u.jsx(n, {
									type: "Body1",
									maxLines: 1,
									colorName: "contentDeemphasized",
									children: l
								})
							}),
							u.jsx("td", {
								className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
								children: u.jsx(n, {
									type: "Body1",
									maxLines: 1,
									colorName: "contentDeemphasized",
									children: c
								})
							}),
							u.jsx("td", {
								className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
								children: u.jsx(n, {
									type: "Body1",
									maxLines: 1,
									colorName: "contentDeemphasized",
									children: m
								})
							}),
							u.jsx("td", {
								className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
								"data-testid": "cm-import-errors-row-error-" + t,
								children: u.jsx(n, {
									type: "Body1",
									maxLines: 1,
									colorName: "contentDeemphasized",
									children: o("WAWebContactManagerImportErrorMessage").getContactManagerImportErrorLabel(e.errorType)
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
									).toString(),
									onPress: function() {
										return a(e);
									},
									testid: "cm-import-errors-row-delete-" + t
								})
							})
						]
					}, e.rowIndex + "-" + t);
				}) })]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		for (var o of n) {
			var a = e[o];
			if (typeof a == "string" && a.length > 0) return a;
		}
		return "";
	}
	l.default = c;
}), 226);
