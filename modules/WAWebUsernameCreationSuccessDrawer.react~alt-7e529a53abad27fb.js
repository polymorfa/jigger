__d("WAWebUsernameCreationSuccessDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebTabOrder",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameManagementDrawer.react",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WAWebWdsPictoSucessCelebrationTickIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			width: "x1rfehsz",
			paddingInlineStart: "xjwn8et",
			$$css: !0
		},
		content: {
			marginTop: "xevwqry",
			$$css: !0
		},
		successColor: {
			color: "x1du590y",
			$$css: !0
		},
		buttonContainer: {
			marginBottom: "xg6s713",
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.contactId, n = e.username, a = e.usernameKey, i = s._(
			/*BTDS*/
			""
		), l = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			textAlign: "center",
			type: "LargeTitle2",
			children: s._(
				/*BTDS*/
				"",
				[s._param("username", n)]
			)
		}), d = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			textAlign: "center",
			type: "Headline1",
			children: s._(
				/*BTDS*/
				"",
				[s._param("username", n), s._param("username-key", a)]
			)
		}), p = a != null, _ = p ? d : l, f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), y = s._(
			/*BTDS*/
			""
		), C = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
				contactId: t,
				username: n
			}));
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "username-creation-success"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				onBack: function() {
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_COMPLETE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION), C();
				},
				title: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				xstyle: c.container,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					alignSelf: "center",
					children: [
						u.jsx(o("WAWebFlex.react").FlexItem, {
							align: "center",
							marginTop: 40,
							children: u.jsx(o("WAWebWdsPictoSucessCelebrationTickIcon.react").WdsPictoSucessCelebrationTickIcon, { iconXstyle: c.successColor })
						}),
						u.jsx(o("WAWebFlex.react").FlexItem, {
							align: "center",
							marginTop: 40,
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								textAlign: "center",
								type: "LargeTitle2",
								children: _
							})
						}),
						p ? u.jsx(m, { description: f }) : u.jsxs(o("WAWebFlex.react").FlexItem, {
							align: "center",
							children: [u.jsx(m, { description: g }), u.jsx(m, { description: h })]
						})
					]
				})
			}), u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					xstyle: c.buttonContainer,
					children: u.jsx(r("WDSButton.react"), {
						label: y,
						onPress: function() {
							o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
								usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_COMPLETE,
								usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_USERNAME_COMPLETE_CONTINUE,
								usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
							}), C();
						},
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
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.description;
		return u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			textAlign: "center",
			type: "Body2",
			xstyle: c.content,
			children: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
