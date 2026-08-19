__d("WAWebCommunityExistingGroupsConfirmationDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebCommunityAddGroupConfirmationPopup.react",
	"WAWebCommunityExistingGroupConfirmationPopup.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebSettingsIcon.react",
	"WAWebText.react",
	"WAWebToastbar.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		paddingBottom30: {
			paddingBottom: "xbaz6xv",
			$$css: !0
		},
		paddingTop10: {
			paddingTop: "x889kno",
			$$css: !0
		},
		marginTop30: {
			marginTop: "x11fxgd9",
			$$css: !0
		}
	}, m = {
		header: {
			maxWidth: "x55n99s",
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		section: {
			maxWidth: "x13qrzjo",
			$$css: !0
		},
		disclaimerText: {
			textAlign: "x2b8uid",
			lineHeight: "x16h55sf",
			$$css: !0
		},
		toastbar: {
			position: "xixxii4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		row: {
			width: "xh8yej3",
			justifyContent: "x1qughib",
			$$css: !0
		},
		column: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.onClick;
		return c.jsx(r("WAWebToastbar.react"), {
			dismissible: !1,
			wrapperXstyle: m.toastbar,
			children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				onClick: t,
				testid: "add-to-community-button",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.isCommunityAdmin, n = e.selectedGroups, a = null;
		return t ? a = n.length === 1 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : a = n.length === 1 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), c.jsx(r("WAWebFlexItem.react"), {
			align: "center",
			xstyle: [
				m.section,
				o("WDSMargins.stylex").wdsMargins.marginTop8,
				d.paddingBottom30,
				d.paddingTop10
			],
			children: c.jsxs(o("WAWebText.react").WAWebTextSmall, {
				color: "secondary",
				xstyle: m.disclaimerText,
				children: [a, " "]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.communityName, u = i.isCommunityAdmin, f = i.isParentGroupClosed, g = i.onBack, h = i.onGroupPermissions, y = i.onSubmit, C = i.parentGroupId, b = i.selectedGroups, v = function() {
			return c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, m.column],
				children: b.map(function(e) {
					return c.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: m.row,
						align: "center",
						children: [c.jsx(r("WAWebFlexItem.react"), {
							grow: 0,
							children: c.jsx(o("WAWebChat.react").ChatOrContact, {
								theme: "plain",
								chat: o("WAWebChatCollection").ChatCollection.assertGet(e.id),
								mode: o("WAWebChat.react").Mode.INFO,
								noContext: !0,
								doNotBoldUnread: !0
							})
						}), c.jsx(o("WAWebButton.react").WAWebButtonPlainWhite, {
							icon: o("WAWebSettingsIcon.react").SettingsIcon,
							onClick: function() {
								return h(e.id);
							},
							ariaLabel: s._(
								/*BTDS*/
								""
							)
						})]
					}, e.id.toString());
				})
			});
		}, S = function() {
			y(b);
		}, R = function() {
			u ? f ? S() : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunityExistingGroupConfirmationPopup.react"), {
				onContinue: S,
				communityName: l,
				groupCount: b.length
			})) : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
				selectedGroups: b,
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), S();
				},
				onCancel: o("WAWebModalManager").closeModalManager
			}));
		}, L = s._(
			/*BTDS*/
			"",
			[s._plural(b.length, "group-count"), s._param("community-name", l)]
		);
		return c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-existing-groups-confirmation"
			},
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: g
				}),
				c.jsx(r("WAWebDrawerBody.react"), {
					ref: a,
					children: c.jsx(r("WAWebDrawerSection.react"), {
						animation: !1,
						theme: "full-height",
						children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: [(n = o("WDSMargins.stylex")).wdsMargins.marginHor40, n.wdsMargins.marginBottom40],
							children: [
								c.jsx(r("WAWebFlexItem.react"), {
									align: "center",
									xstyle: d.marginTop30,
									children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
										id: C,
										size: 104,
										quality: o("WAWebDetailImage.react").DetailImageQuality.High,
										shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
									})
								}),
								c.jsx(o("WAWebText.react").WAWebTextLarge, {
									xstyle: [
										n.wdsMargins.marginTop20,
										n.wdsMargins.marginHorAuto,
										n.wdsMargins.marginBottom0,
										m.header
									],
									children: L
								}),
								c.jsx(_, {
									isCommunityAdmin: u,
									selectedGroups: b
								}),
								v()
							]
						})
					})
				}),
				c.jsx(p, { onClick: R })
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
