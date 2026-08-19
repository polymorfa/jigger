__d("WAWebCreateUsernameKeyDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebClickable.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebRefreshIcon.react",
	"WAWebSetUsernameKeyAction",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameCreationSuccessDrawer.react",
	"WAWebUsernameKeyDeleteModal.react",
	"WAWebUsernameManagementDrawer.react",
	"WAWebUsernameTypes",
	"WAWebUsernameUtils",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WDSButton.react",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"useWAWebContactValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, _ = {
		keySuggestionContainer: {
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		keySection: {
			width: "xycev2y",
			height: "x1jjfqgs",
			background: "xh5507f",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			rowGap: "x121sasi",
			columnGap: "x1mn2tih",
			paddingTop: "xl7twdi",
			paddingBottom: "xvpt6g3",
			$$css: !0
		},
		descriptionContainer: {
			rowGap: "x1j3ira4",
			columnGap: "xrdqr27",
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		usernameKeyContainer: {
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			rowGap: "x121sasi",
			columnGap: "x1mn2tih",
			$$css: !0
		},
		refreshIcon: {
			color: "xo1mcw5",
			$$css: !0
		}
	};
	function f(e) {
		var t, n = e.contactId, a = e.fromUsernameCreation, i = e.handleBack, l = e.onSuccessNavigate, c = o("useWAWebContactValues").useContactValues(n, [o("WAWebFrontendContactGetters").getUsername, o("WAWebFrontendContactGetters").getUsernameKey]), f = c[0], g = c[1], h = m(g != null ? null : o("WAWebUsernameUtils").generateUsernameKeySuggestion()), y = h[0], C = h[1], b = m(!1), v = b[0], S = b[1], R = r("useWAWebUnmountSignal")();
		if (d(function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
		}, []), f == null) return null;
		var L = g != null, E = y != null, k = (t = y != null ? y : g) == null ? void 0 : t.split("").join(" "), I = s._(
			/*BTDS*/
			""
		), T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		), x = s._(
			/*BTDS*/
			""
		), $ = s._(
			/*BTDS*/
			""
		), P = s._(
			/*BTDS*/
			""
		), N = s._(
			/*BTDS*/
			""
		), M = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_SUGGEST_NEW_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			});
			var e = o("WAWebUsernameUtils").generateUsernameKeySuggestion();
			C(e);
		}, w = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), S(!0), o("WAWebSetUsernameKeyAction").setMyUsernameKey(y).then(function(e) {
				if (!R.aborted && e) {
					if (a) {
						var s;
						y != null && o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
							contactId: n,
							username: (s = o("WAWebUsernameTypes").serializeMaybeUsername(f)) != null ? s : "",
							usernameKey: y
						}));
					} else {
						if (l != null) l();
						else {
							var t;
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
								contactId: n,
								username: (t = o("WAWebUsernameTypes").serializeMaybeUsername(f)) != null ? t : ""
							}));
						}
						var i = L ? P : N;
						o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: i }));
					}
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
						usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_SUCCESS,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
					});
				}
			}).catch(function() {
				R.aborted || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
					usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
					usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_FAILURE,
					usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
				}), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					action: {
						actionText: r("WAWebFbtCommon")("Try again"),
						onAction: w
					}
				})));
			}).finally(function() {
				R.aborted || S(!1);
			});
		}, A = function() {
			var e;
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUsernameKeyDeleteModal.react"), {
				contactId: n,
				onSuccessNavigate: l,
				username: (e = o("WAWebUsernameTypes").serializeMaybeUsername(f)) != null ? e : ""
			}));
		}, F = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT), i();
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "create-username-key"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: I,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: F
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: _.keySuggestionContainer,
					marginTop: 32,
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: _.keySection,
						children: [u.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: _.usernameKeyContainer,
							children: u.jsx(r("WDSText.react"), {
								type: "LargeTitle1",
								colorName: "contentDefault",
								children: k
							})
						}), u.jsx(o("WAWebClickable.react").Clickable, {
							onClick: M,
							"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
							children: u.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								gap: 8,
								children: [u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
									xstyle: _.refreshIcon,
									width: 18,
									height: 18
								}) }), u.jsx(r("WDSText.react"), {
									type: "Body2Emphasized",
									colorName: "contentActionEmphasized",
									children: T
								})]
							})
						})]
					})
				}), u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: _.descriptionContainer,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						children: D
					})
				})]
			}), u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: [u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					xstyle: [L ? p.paddingBottom10 : o("WDSPaddings.stylex").wdsPaddings.paddingBottom40, o("WDSPaddings.stylex").wdsPaddings.paddingHor32],
					children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: w,
						stretch: !0,
						disabled: !E || v,
						spinner: v,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
						children: x
					})
				}), L && u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingBottom16, o("WDSPaddings.stylex").wdsPaddings.paddingHor32],
					children: u.jsx(r("WDSButton.react"), {
						widthMode: "flexible",
						onPress: A,
						size: "medium",
						variant: "borderless",
						type: "destructive",
						label: $,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER
					})
				})]
			})] })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
