__d("WAWebUsernameManagementDrawer.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebContactMeByUsernameDrawer.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebDropdown.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebProfilePicThumbCollection",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebTextStatusCollection",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsUsername",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameEditDropdown.react",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WAWebWdsPictoPrivateMentionIcon.react",
	"WDSIconIcLightbulb.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"cr:1923",
	"react",
	"useWAWebContactValues",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		badge: {
			marginTop: "x9u28bd",
			marginBottom: "x14mdic9",
			$$css: !0
		},
		editText: {
			fontSize: "x1f6kntn",
			$$css: !0
		},
		sidePadding: {
			marginInlineStart: "xlese2p",
			marginInlineEnd: "xviac27",
			$$css: !0
		},
		divider: {
			marginTop: "x9u28bd",
			marginBottom: "x14mdic9",
			marginInlineStart: "x6pxu1d",
			marginInlineEnd: "xd6izgl",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		tipContainer: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		tipIcon: {
			marginInlineEnd: "xviac27",
			color: "xhslqc4",
			$$css: !0
		},
		usernameDescription: {
			marginTop: "x98l61r",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		marginTop8: {
			marginTop: "x1380le5",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		keyLine: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.contactId, n = e.isReadOnly, a = e.username, i = e.usernameKey, l = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_USERNAME_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebContactMeByUsernameDrawer.react"), {
				contactId: t,
				isReadOnly: n,
				username: a
			}));
		}, c = i != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), d = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.sidePadding,
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: c
			})]
		});
		return n ? d : u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: l,
			role: "button",
			"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			children: d
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.contactId, n = e.isReadOnly, o = e.username, a = e.usernameKey;
		return u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: _.sidePadding,
			children: u.jsx(f, {
				contactId: t,
				isReadOnly: n,
				username: o,
				usernameKey: a
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [_.tipContainer, _.sidePadding],
			children: [u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: _.tipIcon,
				children: u.jsx(r("WDSIconIcLightbulb.react"), {
					height: 32,
					width: 32
				})
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2Emphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.contactId, a = e.onBack, i = e.ref, l = e.username, c = p(null), f = c[0], y = c[1];
		d(function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
		}, []);
		var C = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), b = o("WAWebContactCollection").ContactCollection.assertGet(C), v = o("useWAWebContactValues").useContactValues(b.id, [o("WAWebFrontendContactGetters").getUsernameKey]), S = v[0], R = r("useWAWebIsKeyboardUser")(), L = R.isKeyboardUser, E = m(null), k = o("WAWebUserPrefsUsername").getUsernameState(), I = k === "RESERVED" || k === "ACTIVE" && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameAccountLinkingEnabled(), T = s._(
			/*BTDS*/
			""
		), D = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(e), r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(e), a = o("WAWebContactCollection").ContactCollection.assertGet(e);
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(n("cr:1923"), {
				conn: o("WAWebConnModel").Conn,
				contact: a,
				isInitialStep: !0,
				profilePicThumb: r,
				status: t
			}));
		}, x = function() {
			y({
				DirX: o("WAWebDropdown.react").DirX.CENTER,
				DirY: o("WAWebDropdown.react").DirY.BOTTOM,
				menu: u.jsx(r("WAWebUsernameEditDropdown.react"), {
					contactId: t,
					onBack: D,
					username: l
				}),
				anchor: E.current,
				autoFocus: L
			});
		}, $ = function() {
			y(null);
		}, P = I !== !0 && u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebClickableText, {
			color: "green",
			dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_HEADER,
			onClick: x,
			ref: E,
			xstyle: [_.editText, _.sidePadding],
			children: s._(
				/*BTDS*/
				""
			)
		}), u.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast",
			children: f == null ? null : u.jsx(o("WAWebUimUie.react").UIE, {
				dismissOnWindowResize: !0,
				displayName: "ContextMenu",
				escapable: !0,
				popable: !0,
				requestDismiss: $,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f })
			})
		})] }), N = s._(
			/*BTDS*/
			""
		), M = u.jsx(r("WDSTextualLink.react"), {
			href: o("WAWebFaqUrl").getUsernameFaqUrl(),
			textConfig: "Body2",
			children: N
		}), w = u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsxs(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			textAlign: "center",
			type: "Body2",
			children: [
				k === "RESERVED" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				" ",
				M
			]
		}) });
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "creating-username-info-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "username-management"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				children: P,
				onBack: a != null ? a : D,
				title: T,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [I === !0 && u.jsx(h, {}), u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "center",
							children: [
								u.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: _.badge,
									children: u.jsx(o("WAWebWdsPictoPrivateMentionIcon.react").WdsPictoPrivateMentionIcon, {
										height: 90,
										width: 90
									})
								}),
								u.jsx(o("WAWebText.react").WAWebTextLarge, {
									textAlign: "center",
									xstyle: [_.marginTop8, _.marginBottom8],
									children: l
								}),
								S != null && u.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: _.keyLine,
									children: u.jsx(r("WDSText.react"), {
										colorName: "contentDeemphasized",
										textAlign: "center",
										type: "Body1",
										children: s._(
											/*BTDS*/
											"",
											[s._param("key", S)]
										)
									})
								}),
								u.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: [_.usernameDescription, _.sidePadding],
									children: w
								})
							]
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: _.divider
					}),
					u.jsx(g, {
						contactId: t,
						isReadOnly: I,
						username: l,
						usernameKey: S
					})
				]
			})] })]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
