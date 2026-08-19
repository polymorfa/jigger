__d("WAWebBusinessServiceField.react", [
	"fbt",
	"WAWebBusinessProfileLabels",
	"WAWebFlex.react",
	"WDSChip.react",
	"WDSIconIcBlock.react",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.services;
		return u.jsx(r("WDSTooltip.react"), {
			label: o("WAWebBusinessProfileLabels").getServicesEditMobileLabel(),
			position: "end",
			children: u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
				align: "center",
				gap: 12,
				role: "group",
				"aria-label": o("WAWebBusinessProfileLabels").getServicesLabel(),
				tabIndex: 0,
				xstyle: c.fieldContainer,
				children: [u.jsx(t.FlexItem, {
					align: "center",
					justify: "center",
					xstyle: c.iconContainer,
					children: u.jsx(r("WDSIconIcCheck.react"), { directional: !0 })
				}), u.jsxs(t.FlexColumn, {
					justify: "center",
					gap: 8,
					children: [u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: o("WAWebBusinessProfileLabels").getServicesLabel()
					}), u.jsx(t.FlexRow, {
						gap: 8,
						wrap: "wrap",
						children: n != null && n.map(function(e) {
							return u.jsx(r("WDSChip.react"), {
								Icon: e.is_offered ? r("WDSIconIcCheck.react") : r("WDSIconIcBlock.react"),
								label: e.localized_display_name,
								isNeutral: !0,
								testid: "biz_profile_service_chip",
								"aria-label": e.is_offered ? s._(
									/*BTDS*/
									"",
									[s._param("service name", e.localized_display_name)]
								) : s._(
									/*BTDS*/
									"",
									[s._param("service name", e.localized_display_name)]
								)
							}, e.id);
						})
					})]
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WAWebBusinessServiceField = d;
}), 226);
