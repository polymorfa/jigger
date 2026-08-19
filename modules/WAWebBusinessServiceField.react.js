__d("WAWebBusinessServiceField.react", [
	"fbt",
	"WAWebBusinessProfileLabels",
	"WAWebFlex.react",
	"WDSChip.react",
	"WDSIconIcBlock.react",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(8), n = e.services, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebBusinessProfileLabels").getServicesEditMobileLabel(), t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebBusinessProfileLabels").getServicesLabel(), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: c.iconContainer,
			children: u.jsx(r("WDSIconIcCheck.react"), { directional: !0 })
		}), t[2] = l) : l = t[2];
		var s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: o("WAWebBusinessProfileLabels").getServicesLabel()
		}), t[3] = s) : s = t[3];
		var d;
		t[4] !== n ? (d = n != null && n.map(m), t[4] = n, t[5] = d) : d = t[5];
		var p;
		return t[6] !== d ? (p = u.jsx(r("WDSTooltip.react"), {
			label: a,
			position: "end",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				role: "group",
				"aria-label": i,
				tabIndex: 0,
				xstyle: c.fieldContainer,
				children: [l, u.jsxs(o("WAWebFlex.react").FlexColumn, {
					justify: "center",
					gap: 8,
					children: [s, u.jsx(o("WAWebFlex.react").FlexRow, {
						gap: 8,
						wrap: "wrap",
						children: d
					})]
				})]
			})
		}), t[6] = d, t[7] = p) : p = t[7], p;
	}
	function m(e) {
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
	}
	m.displayName = m.name + " [from " + i.id + "]", l.WAWebBusinessServiceField = d;
}), 226);
