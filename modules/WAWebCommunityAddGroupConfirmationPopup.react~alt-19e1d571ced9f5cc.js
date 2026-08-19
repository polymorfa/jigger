__d("WAWebCommunityAddGroupConfirmationPopup.react", [
	"fbt",
	"WAWebCellBorder.react",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebPeopleIcon.react",
	"WAWebText.react",
	"WDSIconIcNotifications.react",
	"WDSPaddings.stylex",
	"react"
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
		var t = e.disclaimer, n = e.onCancel, a = e.onOK, i = e.selectedGroups, l = e.title, d = i != null ? i : [], m = [{
			text: t != null ? t : d.length === 1 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcNotifications.react")
		}, {
			text: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebPeopleIcon.react").PeopleIcon
		}], p = s._(
			/*BTDS*/
			"",
			[s._plural(d.length, "group-count")]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: l != null ? l : p,
			onOK: a,
			onCancel: n,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: m.map(function(e, t) {
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
					}), t !== m.length - 1 && u.jsx(r("WAWebCellBorder.react"), { noMargin: !0 })] }, t);
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
