__d("WAWebContactMeByUsernameDrawer.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebCreateUsernameKeyDrawer.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameKeyDeleteModal.react",
	"WAWebUsernameManagementDrawer.react",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		sidePadding: {
			marginInlineStart: "xlese2p",
			marginInlineEnd: "xviac27",
			$$css: !0
		},
		keyRowContainer: {
			marginInlineStart: "x45gse5",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			$$css: !0
		},
		keyRow: {
			justifyContent: "x1qughib",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			$$css: !0
		},
		keyRowClickable: {
			display: "x1lliihq",
			width: "xh8yej3",
			$$css: !0
		},
		keyDescription: {
			marginTop: "x1380le5",
			$$css: !0
		}
	}, m = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, p = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, _ = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, f = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, g = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, h = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, y = function() {
		return s._(
			/*BTDS*/
			""
		);
	};
	function C(e) {
		var t = e.contactId, n = e.isReadOnly, a = e.ref, i = e.username, l = o("useWAWebContactValues").useContactValues(t, [o("WAWebFrontendContactGetters").getUsernameKey]), s = l[0];
		c(function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
		}, []);
		var b = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
				contactId: t,
				username: i
			}));
		}, v = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(C, {
				contactId: t,
				isReadOnly: n,
				username: i
			}));
		}, S = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
				contactId: t,
				handleBack: v,
				onSuccessNavigate: v
			}));
		}, R = function() {
			n || s == null || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUsernameKeyDeleteModal.react"), {
				contactId: t,
				onSuccessNavigate: v,
				username: i
			})));
		}, L = function() {
			n || s != null || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_ADD_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), S());
		}, E = function() {
			n || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_CHANGE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), S());
		}, k = s != null, I = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.keyRow,
			testid: "contact-me-by-username-key-row",
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: g()
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body1",
				children: s
			})]
		}), T = k ? u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "padding-no-vertical",
			xstyle: d.sidePadding,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.keyRowContainer,
				children: [n ? I : u.jsx(o("WAWebClickable.react").Clickable, {
					onClick: E,
					role: "button",
					"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
					xstyle: d.keyRowClickable,
					children: I
				}), u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: d.keyDescription,
					children: u.jsxs(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: [
							y(),
							" ",
							u.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebFaqUrl").getUsernameKeyFaqUrl(),
								textConfig: "Body2",
								children: h()
							})
						]
					})
				})]
			})
		}) : null;
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "contact-me-by-username-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "contact-me-by-username"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				onBack: b,
				title: m(),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "padding-no-vertical",
				xstyle: d.sidePadding,
				children: [
					u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: p()
					}),
					u.jsx(r("WAWebPrivacyVisibilityOption.react"), {
						text: _(),
						selected: !k,
						disabled: n,
						testid: "contact-me-by-username-everyone",
						onClick: R
					}),
					u.jsx(r("WAWebPrivacyVisibilityOption.react"), {
						text: f(),
						selected: k,
						disabled: n,
						testid: "contact-me-by-username-people-who-know-my-key",
						onClick: L
					})
				]
			}), T] })]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
