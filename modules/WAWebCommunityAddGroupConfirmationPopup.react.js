__d("WAWebCommunityAddGroupConfirmationPopup.react", [
	"fbt",
	"WAWebCellBorder.react",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebPeopleIcon.react",
	"WAWebText.react",
	"WDSIconIcNotifications.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		iconColor: {
			color: "x1v5yvga",
			$$css: !0
		},
		sectionTitle: {
			width: "x1l2rt3b",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(19), n = e.disclaimer, a = e.onCancel, i = e.onOK, l = e.selectedGroups, d = e.title, m;
		t[0] !== l ? (m = l != null ? l : [], t[0] = l, t[1] = m) : m = t[1];
		var p = m, _;
		t[2] !== n || t[3] !== p.length ? (_ = n != null ? n : p.length === 1 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[2] = n, t[3] = p.length, t[4] = _) : _ = t[4];
		var f;
		t[5] !== _ ? (f = {
			text: _,
			Icon: r("WDSIconIcNotifications.react")
		}, t[5] = _, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = {
			text: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebPeopleIcon.react").PeopleIcon
		}, t[7] = g) : g = t[7];
		var h;
		t[8] !== f ? (h = [f, g], t[8] = f, t[9] = h) : h = t[9];
		var y = h, C;
		t[10] !== p.length ? (C = s._(
			/*BTDS*/
			"",
			[s._plural(p.length, "group-count")]
		), t[10] = p.length, t[11] = C) : C = t[11];
		var b = C, v = d != null ? d : b, S;
		t[12] !== y ? (S = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: y.map(function(e, t) {
				var n = e.Icon, a = e.text;
				return u.jsxs("div", { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					className: "x1hmvnq2 x1u7kmwd",
					children: [u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
						children: u.jsx(n, {
							width: 18,
							height: 18,
							iconXstyle: c.iconColor
						})
					}), u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, c.sectionTitle],
						children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: a })
					})]
				}), t !== y.length - 1 && u.jsx(r("WAWebCellBorder.react"), { noMargin: !0 })] }, t);
			})
		}), t[12] = y, t[13] = S) : S = t[13];
		var R;
		return t[14] !== a || t[15] !== i || t[16] !== v || t[17] !== S ? (R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: v,
			onOK: i,
			onCancel: a,
			children: S
		}), t[14] = a, t[15] = i, t[16] = v, t[17] = S, t[18] = R) : R = t[18], R;
	}
	l.default = d;
}), 226);
