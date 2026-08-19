__d("WAWebSetUsernameDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebCheckUsernameAvailabilityJob",
	"WAWebCreateUsernameKeyDrawer.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSetContactUsernameAction",
	"WAWebStopEvent",
	"WAWebTabOrder",
	"WAWebUsernameChangedModal.react",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameCreationSuccessDrawer.react",
	"WAWebUsernameErrorUtils",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameStringUtils",
	"WAWebUsernameTypes",
	"WAWebUsernameValidationUtils",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WDSIconIcAlternateEmail.react",
	"WDSIconIcCheckCircleFilled.react",
	"WDSText.react",
	"WDSTextField.react",
	"isStringNullOrEmpty",
	"react",
	"useLazyRef",
	"useWAWebFocusOnMount",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		description: {
			width: "xthe8de",
			marginInlineStart: "x1olwjlq",
			$$css: !0
		},
		marginStart12: {
			marginInlineStart: "x1uvdrpn",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
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
	function _(e) {
		return e.replace(/[^0-9]/g, "").length;
	}
	function f(e) {
		var t = o("WAWebABProps").getABPropConfigValue("username_key_upsell_mode");
		return t === 0 ? !1 : t === 2 ? !0 : e.length <= o("WAWebUsernameGatingUtils").usernameKeyUpsellMaxCharacters() && _(e) <= o("WAWebUsernameGatingUtils").usernameKeyUpsellMaxNumbers();
	}
	function g(e) {
		var t = e.contactId, n = e.contactUsername, a = e.headerText, i = e.onBack, l = e.ref, c = m(n), _ = c[0], g = c[1], h = m(null), y = h[0], C = h[1], b = m(!1), v = b[0], S = b[1], R = m(!1), L = R[0], E = R[1], k = r("useLazyRef")(function() {
			return new AbortController();
		}), I = m(!1), T = I[0], D = I[1], x = r("useWAWebUnmountSignal")(), $ = r("useWAWebFocusOnMount")(), P = r("isStringNullOrEmpty")(n) ? o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION : o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT;
		d(function() {
			$.current != null && $.current.focus();
		}, [$]);
		var N = function(t) {
			var e = t.isAvailable, n = t.isPending;
			e != null && S(e), n != null && E(n);
		}, M = function(t) {
			if (g(t), t === n) {
				C(null), N({
					isAvailable: !1,
					isPending: !1
				});
				return;
			}
			if (k.current.abort(), k.current = new AbortController(), C(null), r("isStringNullOrEmpty")(t)) E(!1);
			else {
				E(!0);
				var e = k.current.signal;
				window.setTimeout(function() {
					return void w(t, e);
				}, 750);
			}
		}, w = async function(t, n) {
			if (r("isStringNullOrEmpty")(t)) {
				N({
					isAvailable: !1,
					isPending: !1
				});
				return;
			}
			var e = o("WAWebUsernameValidationUtils").validateUsernameLocally(t);
			if (!e.isValid) {
				N({
					isAvailable: !1,
					isPending: !1
				});
				var a = e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_CHARACTER ? o("WAWebUsernameStringUtils").getUsernameInvalidCharacterMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_LENGTH ? o("WAWebUsernameStringUtils").getUsernameInvalidLengthMessage(o("WAWebUsernameTypes").USERNAME_MIN_LENGTH, o("WAWebUsernameTypes").USERNAME_MAX_LENGTH) : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_NO_LETTERS ? o("WAWebUsernameStringUtils").getUsernameInvalidNoLettersMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_PERIODS ? o("WAWebUsernameStringUtils").getUsernameInvalidPeriodsMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_DOMAIN_SUFFIX ? o("WAWebUsernameStringUtils").getUsernameInvalidDomainSuffixMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_WWW_PREFIX ? o("WAWebUsernameStringUtils").getUsernameInvalidWWWPrefixMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_WORD ? o("WAWebUsernameStringUtils").getUsernameUnavailableMessage() : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.errorType);
				})();
				C(a);
				return;
			}
			if (!n.aborted) {
				var i = function(t) {
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: P,
						usernameCreationActionName: t ? o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_AVAILABILITY_CHECK_SUCCESS : o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_AVAILABILITY_CHECK_FAILURE,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
					});
				};
				try {
					var l = await o("WAWebCheckUsernameAvailabilityJob").getUsernameAvailability(t, o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.getSessionId()), s = l.isUsernameAvailable;
					if (n.aborted) return;
					i(s), N({ isAvailable: s }), s || C(o("WAWebUsernameStringUtils").getUsernameUnavailableMessage());
				} catch (e) {
					i(!1), N({ isAvailable: !1 }), C(o("WAWebUsernameStringUtils").getUsernameUnavailableMessage());
				}
				N({ isPending: !1 });
			}
		}, A = async function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: P,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_USERNAME,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
			}), D(!0), await o("WAWebSetContactUsernameAction").setMyUsername(_).then(function(e) {
				if (!x.aborted && e) {
					if (E(!1), _ == null) return;
					n != null ? o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUsernameChangedModal.react"), {
						username: _,
						contactId: t
					})) : f(_) ? (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
						usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.VIEW,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
					}), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
						contactId: t,
						fromUsernameCreation: !0,
						handleBack: function() {
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
								contactId: t,
								username: _
							}));
						}
					}))) : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
						contactId: t,
						username: _
					}));
				}
			}).catch(function(e) {
				x.aborted || o("WAWebUsernameErrorUtils").handleErrorBasedOnErrorCode(e, A);
			}).finally(function() {
				x.aborted || D(!1);
			});
		}, F = s._(
			/*BTDS*/
			""
		), O = s._(
			/*BTDS*/
			""
		), B = n != null ? O : F, W = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: p.marginStart12,
			grow: 1,
			shrink: 1,
			children: u.jsx("div", {
				onCopy: o("WAWebStopEvent").stopPropagation,
				children: u.jsx(r("WDSTextField.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					testid: "settings_home_username_textfield",
					StartIcon: r("WDSIconIcAlternateEmail.react"),
					defaultValue: _ != null ? _ : "",
					onValueChange: M,
					maxCharacterCount: o("WAWebUsernameTypes").USERNAME_MAX_LENGTH,
					error: y != null && L === !1,
					errorText: y != null && L === !1 ? y : null,
					EndIcon: v === !0 && L === !1 && _ !== n ? r("WDSIconIcCheckCircleFilled.react") : void 0,
					loading: L === !0,
					bottomText: v === !0 && L === !1 && _ !== n ? o("WAWebUsernameStringUtils").getUsernameAvailableMessage() : "",
					ref: $
				})
			})
		});
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			tsNavigationData: {
				surface: "unknown",
				viewName: "set-username"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: a,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: i
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [u.jsx(o("WAWebFlex.react").FlexItem, {
					margin: 32,
					align: "center",
					xstyle: p.description,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						children: B
					})
				}), u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: p.paddingHoriz24,
					children: W
				})]
			}), u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					xstyle: p.paddingAll32,
					children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						stretch: !0,
						onClick: A,
						spinner: T,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
						disabled: _ == null || (_ == null ? void 0 : _.length) === 0 || v !== !0 || L === !0 || _ === n || T,
						children: s._(
							/*BTDS*/
							""
						)
					})
				})
			})] })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
