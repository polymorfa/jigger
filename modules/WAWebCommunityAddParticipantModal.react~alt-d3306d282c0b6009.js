__d("WAWebCommunityAddParticipantModal.react", [
	"fbt",
	"WAWebCommunityGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebPeopleIcon.react",
	"WDSIconIcNotifications.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		paddingBottom15: {
			paddingBottom: "xr1496l",
			$$css: !0
		},
		paddingTop15: {
			paddingTop: "xqy66fx",
			$$css: !0
		}
	}, m = {
		border: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		iconContainer: {
			width: "x1247r65",
			$$css: !0
		},
		tealLighterColor: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.contacts, l = a.onCancel, u = a.onOK, p = s._(
			/*BTDS*/
			"",
			[s._plural(i.length, "number")]
		), _ = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), f = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cancelText: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: l,
			onOK: u,
			ref: n,
			title: p,
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [m.border, d.paddingBottom15],
				children: [c.jsx(o("WAWebFlex.react").FlexContainer, {
					align: "center",
					direction: "horizontal",
					grow: 0,
					justify: "center",
					shrink: 0,
					xstyle: m.iconContainer,
					children: c.jsx(r("WDSIconIcNotifications.react"), {
						height: 18,
						iconXstyle: m.tealLighterColor,
						width: 18
					})
				}), c.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: _
				})]
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: d.paddingTop15,
				children: [c.jsx(o("WAWebFlex.react").FlexContainer, {
					align: "center",
					direction: "horizontal",
					grow: 0,
					justify: "center",
					shrink: 0,
					xstyle: m.iconContainer,
					children: c.jsx(o("WAWebPeopleIcon.react").PeopleIcon, { iconXstyle: m.tealLighterColor })
				}), c.jsx(o("WAWebFlex.react").FlexItem, { children: f })]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = p;
	l.CommunityAddParticipantModal = _;
}), 226);
