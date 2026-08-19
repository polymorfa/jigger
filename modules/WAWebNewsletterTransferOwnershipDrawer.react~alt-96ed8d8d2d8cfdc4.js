__d("WAWebNewsletterTransferOwnershipDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCheckBox.react",
	"WAWebCommonNewsletterStrings",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNewsletterDrawerBodyParagraph.react",
	"WAWebNewsletterImageWithAction.react",
	"WAWebNewsletterTransferOwnershipConfirmationModal.react",
	"WAWebPersonArrowIcon.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserShieldIcon.react",
	"WAWebWarningIcon.react",
	"WDSMargins.stylex",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = { marginInlineStart3: {
		marginInlineStart: "x7phf20",
		$$css: !0
	} }, m = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "x1nhvcw1",
			paddingTop: "xijc0j3",
			paddingInlineEnd: "x15zmtp0",
			paddingBottom: "xq1608w",
			paddingInlineStart: "x1oiqv2n",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonContainer: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			overflowWrap: "xj0a0fe",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.contact, u = r("useWAWebToggle")(!1), p = u[0], _ = u[1];
		if (l == null) return null;
		var f = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNewsletterTransferOwnershipConfirmationModal.react"), {
				chat: i,
				contact: l,
				onTransferCompletion: a.onTransferCompletion,
				shouldDismissSelfAsAdmin: p
			}));
		}, g = s._(
			/*BTDS*/
			"",
			[s._param("channel-name", c.jsx(o("WAWebName.react").ContactName, { contact: l }))]
		), h = [{
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebWarningIcon.react").WarningIcon,
			key: "no-longer-owner"
		}, {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
			key: "remain-admin"
		}], y = c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			paddingTop: 16,
			paddingBottom: 16,
			xstyle: d.marginInlineStart3,
			alignSelf: "start",
			align: "center",
			children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
				id: "transfer-ownership-dismiss-self-as-admin-checkbox",
				testid: "transfer-ownership-dismiss-self-as-admin-checkbox",
				checked: p,
				onChange: _
			}), c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
				htmlFor: "transfer-ownership-dismiss-self-as-admin-checkbox",
				testid: "transfer-ownership-dismiss-self-as-admin-label",
				size: "16",
				className: "x1hm9lzh x1sa5p1d",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "newsletter-transfer-ownership-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-transfer"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterStrings").getNewsletterTransferOwnershipText(),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a.onBack,
				onCancel: a.onCancel
			}), c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: m.container,
				children: [
					c.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						children: c.jsx(r("WAWebNewsletterImageWithAction.react"), {
							chat: a.chat,
							actionTheme: "primary",
							Icon: o("WAWebPersonArrowIcon.react").PersonArrowIcon
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						children: c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
							xstyle: [
								m.header,
								o("WDSMargins.stylex").wdsMargins.marginTop16,
								o("WDSMargins.stylex").wdsMargins.marginBottom16
							],
							size: "24",
							color: "dark",
							weight: "medium",
							children: g
						})
					}),
					h.map(function(e) {
						var t = e.Icon, n = e.description, o = e.key, a = e.title;
						return c.jsx(r("WAWebNewsletterDrawerBodyParagraph.react"), {
							icon: c.jsx(t, {
								width: 24,
								height: 24,
								xstyle: m.icon
							}),
							title: a,
							description: n
						}, o);
					}),
					y,
					c.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: [m.buttonContainer, o("WDSMargins.stylex").wdsMargins.marginTop16],
						children: c.jsx(o("WAWebButton.react").Button, {
							testid: "newsletter-transfer-ownership-button",
							type: "primary",
							onClick: f,
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
