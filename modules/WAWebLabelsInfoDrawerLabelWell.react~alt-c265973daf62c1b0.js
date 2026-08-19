__d("WAWebLabelsInfoDrawerLabelWell.react", [
	"WAWebLabels.react",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		paddingInlineEnd5: {
			paddingInlineEnd: "x1gabggj",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		marginInlineEnd10: {
			marginInlineEnd: "x1sa5p1d",
			$$css: !0
		},
		paddingInlineEnd14: {
			paddingInlineEnd: "x1pic42t",
			$$css: !0
		},
		paddingTop1: {
			paddingTop: "x4p5aij",
			$$css: !0
		},
		marginTop3: {
			marginTop: "x7r5mf7",
			$$css: !0
		}
	}, d = {
		labelRow: {
			display: "x1rg5ohu",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		standaloneLabelRow: {
			fontSize: "x1pg5gke",
			lineHeight: "x4ei82o",
			$$css: !0
		},
		standaloneLabelRowIcon: {
			width: "xgd8bvy",
			height: "x17rw0jw",
			$$css: !0
		},
		labelContainer: {
			flexWrap: "x1a02dak",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.isListsFeatureEnabled, a = t.isStandalone, i = t.labelId, l = t.nameOverride;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.labelRow, c.paddingTop5, c.paddingInlineEnd5, c.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingStart0, c.marginInlineEnd10, a && d.standaloneLabelRow, a && o("WDSPaddings.stylex").wdsPaddings.paddingTop8, a && c.paddingInlineEnd14, a && o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, a && o("WDSPaddings.stylex").wdsPaddings.paddingStart0), { children: u.jsx(o("WAWebLabels.react").Labels, {
			theme: "user-profile",
			labels: [i],
			nameOverride: l,
			showName: !0,
			isListsFeatureEnabled: n,
			iconXstyle: [d.standaloneLabelRowIcon, c.paddingTop1]
		}) }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(t) {
		var n = t.labels, a = t.nameOverrideForLabelId, i = t.theme, l = o("WAWebListsGatingUtils").isListsEnabled();
		if (!n || !(o("WAWebListsLabelGatingUtils").canDisplayLabel() || l)) return null;
		var s = i === "standalone";
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.labelContainer, c.marginTop3, s && o("WDSMargins.stylex").wdsMargins.marginTop0), { children: n.map(function(e, t) {
			return u.jsx(m, {
				labelId: e,
				isStandalone: s,
				isListsFeatureEnabled: l,
				nameOverride: a != null && a.labelId === e ? a.name : null
			}, t);
		}) }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
