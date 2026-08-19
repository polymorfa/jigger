__d("WAWebBizAdCreationInterestRow.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSBaseCheckbox.react",
	"WDSIconIcChevronRight.react",
	"WDSText.react",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		root: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			width: "xh8yej3",
			$$css: !0
		},
		rootCompact: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function m(e) {
		return e === "interests" ? s._(
			/*BTDS*/
			""
		) : e === "behaviors" ? s._(
			/*BTDS*/
			""
		) : e === "life_events" || e === "education_statuses" || e === "education_schools" || e === "education_majors" || e === "college_years" || e === "work_employers" || e === "work_positions" || e === "relationship_statuses" || e === "interested_in" || e === "industries" || e === "income" || e === "family_statuses" ? s._(
			/*BTDS*/
			""
		) : null;
	}
	function p(e) {
		var t, n, a, i, l = e.interestNode, s = e.isSelected, p = s === void 0 ? !1 : s, _ = e.onCategoryClick, f = e.onInterestToggle, g = e.showTargetType, h = g === void 0 ? !1 : g, y = c(function() {
			_ == null || _(l);
		}, [_, l]), C = c(function() {
			f == null || f(l);
		}, [f, l]), b = (t = l.node) == null ? void 0 : t.id;
		if (!r("isStringNullOrEmpty")(b)) {
			var v, S, R, L;
			return u.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": "Toggle " + ((v = (S = l.node) == null ? void 0 : S.name) != null ? v : "interest"),
				onClick: C,
				testid: "biz_native_ads_interest_item",
				xstyle: [d.root, h ? d.rootCompact : null],
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 12,
					grow: 1,
					justify: "all",
					children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "start",
						gap: 2,
						grow: 1,
						children: [u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							maxLines: 1,
							type: "Body1",
							children: (R = l.node) == null ? void 0 : R.name
						}), h ? u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							testid: "biz_native_ads_interest_item_target_type",
							type: "Body2",
							children: m((L = l.node) == null ? void 0 : L.target_type)
						}) : null]
					}), u.jsx(r("WDSBaseCheckbox.react"), {
						shape: "circle",
						value: p
					})]
				})
			});
		}
		return u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": "View " + ((n = (a = l.node) == null ? void 0 : a.name) != null ? n : "category") + " category",
			onClick: y,
			testid: "biz_native_ads_interest_category_item",
			xstyle: d.root,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 8,
				grow: 1,
				justify: "all",
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					maxLines: 1,
					type: "Body1",
					children: (i = l.node) == null ? void 0 : i.name
				}), u.jsx(r("WDSIconIcChevronRight.react"), {
					height: 20,
					width: 20
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
