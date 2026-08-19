__d("WAWebUsernameCreationInfoDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebShareIcon.react",
	"WAWebTabOrder",
	"WAWebWdsPictoPrivateMentionIcon.react",
	"WDSButton.react",
	"WDSIconIcPerson.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			width: "xktia5q",
			marginInlineStart: "x1315kfy",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		paddingAll32: {
			paddingTop: "x1sk1jro",
			paddingInlineEnd: "x1evaxtz",
			paddingBottom: "x1ci70gm",
			paddingInlineStart: "x1m4z3lf",
			$$css: !0
		}
	};
	function d() {
		var e = s._(
			/*BTDS*/
			""
		), t = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getFaqUrl(),
			"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			children: e
		});
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			marginBottom: 20,
			marginTop: 32,
			children: u.jsxs(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				textAlign: "center",
				type: "Body2",
				children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					t
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.description, n = e.icon;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 24,
			marginTop: 20,
			children: [n, u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: t
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.onBack, a = e.onContinue, i = e.ref, l = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		), f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), h = 30, y = [[f, u.jsx(o("WAWebShareIcon.react").ShareIcon, {
			iconXstyle: c.secondaryColor,
			height: h,
			width: h
		}, 1)], [g, u.jsx(r("WDSIconIcPerson.react"), {
			iconXstyle: c.secondaryColor,
			height: h,
			width: h
		}, 2)]];
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "creating-username-info-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "username-creation-info"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				onBack: n,
				title: l,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
					align: "center",
					xstyle: c.container,
					children: [
						u.jsx(t.FlexItem, {
							marginTop: 40,
							children: u.jsx(o("WAWebWdsPictoPrivateMentionIcon.react").WdsPictoPrivateMentionIcon, {
								height: 87.01,
								width: 87.36
							})
						}),
						u.jsx(t.FlexItem, {
							marginTop: 40,
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								textAlign: "center",
								type: "LargeTitle2",
								children: p
							})
						}),
						u.jsx(d, {}),
						y.map(function(e, t) {
							var n = e[0], r = e[1];
							return u.jsx(m, {
								description: n,
								icon: r
							}, t);
						})
					]
				})
			}), u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: u.jsx(t.FlexRow, {
					justify: "center",
					xstyle: c.paddingAll32,
					children: u.jsx(r("WDSButton.react"), {
						label: _,
						onPress: a,
						size: "medium",
						type: "default",
						variant: "filled",
						widthMode: "flexible",
						tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER
					})
				})
			})] })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
