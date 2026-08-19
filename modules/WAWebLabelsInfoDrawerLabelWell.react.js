__d("WAWebLabelsInfoDrawerLabelWell.react", [
	"WAWebLabels.react",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(12), a = t.isListsFeatureEnabled, i = t.isStandalone, l = t.labelId, s = t.nameOverride, m;
		n[0] !== i ? (m = (e || (e = r("stylex"))).props(d.labelRow, c.paddingTop5, c.paddingInlineEnd5, c.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingStart0, c.marginInlineEnd10, i && d.standaloneLabelRow, i && o("WDSPaddings.stylex").wdsPaddings.paddingTop8, i && c.paddingInlineEnd14, i && o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, i && o("WDSPaddings.stylex").wdsPaddings.paddingStart0), n[0] = i, n[1] = m) : m = n[1];
		var p;
		n[2] !== l ? (p = [l], n[2] = l, n[3] = p) : p = n[3];
		var _;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = [d.standaloneLabelRowIcon, c.paddingTop1], n[4] = _) : _ = n[4];
		var f;
		n[5] !== a || n[6] !== s || n[7] !== p ? (f = u.jsx(o("WAWebLabels.react").Labels, {
			theme: "user-profile",
			labels: p,
			nameOverride: s,
			showName: !0,
			isListsFeatureEnabled: a,
			iconXstyle: _
		}), n[5] = a, n[6] = s, n[7] = p, n[8] = f) : f = n[8];
		var g;
		return n[9] !== m || n[10] !== f ? (g = u.jsx("div", babelHelpers.extends({}, m, { children: f })), n[9] = m, n[10] = f, n[11] = g) : g = n[11], g;
	}
	function p(t) {
		var n = o("react-compiler-runtime").c(13), a = t.labels, i = t.nameOverrideForLabelId, l = t.theme, s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = o("WAWebListsGatingUtils").isListsEnabled(), n[0] = s) : s = n[0];
		var p = s;
		if (!a || !(o("WAWebListsLabelGatingUtils").canDisplayLabel() || p)) return null;
		var _ = l === "standalone", f;
		n[1] !== _ ? (f = (e || (e = r("stylex"))).props(d.labelContainer, c.marginTop3, _ && o("WDSMargins.stylex").wdsMargins.marginTop0), n[1] = _, n[2] = f) : f = n[2];
		var g;
		if (n[3] !== _ || n[4] !== a || n[5] !== i) {
			var h;
			n[7] !== _ || n[8] !== i ? (h = function(t, n) {
				return u.jsx(m, {
					labelId: t,
					isStandalone: _,
					isListsFeatureEnabled: p,
					nameOverride: i != null && i.labelId === t ? i.name : null
				}, n);
			}, n[7] = _, n[8] = i, n[9] = h) : h = n[9], g = a.map(h), n[3] = _, n[4] = a, n[5] = i, n[6] = g;
		} else g = n[6];
		var y;
		return n[10] !== f || n[11] !== g ? (y = u.jsx("div", babelHelpers.extends({}, f, { children: g })), n[10] = f, n[11] = g, n[12] = y) : y = n[12], y;
	}
	l.default = p;
}), 98);
