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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(54), n = e.contactId, a = e.contactUsername, i = e.headerText, l = e.onBack, c = e.ref, _ = m(a), g = _[0], y = _[1], C = m(null), b = C[0], v = C[1], S = m(!1), R = S[0], L = S[1], E = m(!1), k = E[0], I = E[1], T = r("useLazyRef")(h), D = m(!1), x = D[0], $ = D[1], P = r("useWAWebUnmountSignal")(), N = r("useWAWebFocusOnMount")(), M = r("isStringNullOrEmpty")(a) ? o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION : o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT, w, A;
		t[0] !== N ? (w = function() {
			N.current != null && N.current.focus();
		}, A = [N], t[0] = N, t[1] = w, t[2] = A) : (w = t[1], A = t[2]), d(w, A);
		var F;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (F = function(t) {
			var e = t.isAvailable, n = t.isPending;
			e != null && L(e), n != null && I(n);
		}, t[3] = F) : F = t[3];
		var O = F, B;
		if (t[4] !== a || t[5] !== T || t[6] !== M) {
			B = function(t) {
				if (y(t), t === a) {
					v(null), O({
						isAvailable: !1,
						isPending: !1
					});
					return;
				}
				if (T.current.abort(), T.current = new AbortController(), v(null), r("isStringNullOrEmpty")(t)) I(!1);
				else {
					I(!0);
					var e = T.current.signal;
					window.setTimeout(function() {
						return void W(t, e);
					}, 750);
				}
			};
			var W = async function(t, n) {
				if (r("isStringNullOrEmpty")(t)) {
					O({
						isAvailable: !1,
						isPending: !1
					});
					return;
				}
				var e = o("WAWebUsernameValidationUtils").validateUsernameLocally(t);
				if (!e.isValid) {
					O({
						isAvailable: !1,
						isPending: !1
					});
					var a = e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_CHARACTER ? o("WAWebUsernameStringUtils").getUsernameInvalidCharacterMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_LENGTH ? o("WAWebUsernameStringUtils").getUsernameInvalidLengthMessage(o("WAWebUsernameTypes").USERNAME_MIN_LENGTH, o("WAWebUsernameTypes").USERNAME_MAX_LENGTH) : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_NO_LETTERS ? o("WAWebUsernameStringUtils").getUsernameInvalidNoLettersMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_PERIODS ? o("WAWebUsernameStringUtils").getUsernameInvalidPeriodsMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_DOMAIN_SUFFIX ? o("WAWebUsernameStringUtils").getUsernameInvalidDomainSuffixMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_WWW_PREFIX ? o("WAWebUsernameStringUtils").getUsernameInvalidWWWPrefixMessage() : e.errorType === o("WAWebUsernameTypes").UsernameValidationErrorType.INVALID_WORD ? o("WAWebUsernameStringUtils").getUsernameUnavailableMessage() : (function() {
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.errorType);
					})();
					v(a);
					return;
				}
				if (!n.aborted) {
					var i = function(t) {
						o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
							usernameCreationCurrentScreen: M,
							usernameCreationActionName: t ? o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_AVAILABILITY_CHECK_SUCCESS : o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_AVAILABILITY_CHECK_FAILURE,
							usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
						});
					};
					try {
						var l = await o("WAWebCheckUsernameAvailabilityJob").getUsernameAvailability(t, o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.getSessionId()), s = l.isUsernameAvailable;
						if (n.aborted) return;
						i(s), O({ isAvailable: s }), s || v(o("WAWebUsernameStringUtils").getUsernameUnavailableMessage());
					} catch (e) {
						i(!1), O({ isAvailable: !1 }), v(o("WAWebUsernameStringUtils").getUsernameUnavailableMessage());
					}
					O({ isPending: !1 });
				}
			};
			t[4] = a, t[5] = T, t[6] = M, t[7] = B;
		} else B = t[7];
		var q;
		t[8] !== n || t[9] !== a || t[10] !== P || t[11] !== M || t[12] !== g ? (q = async function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: M,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_USERNAME,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
			}), $(!0), await o("WAWebSetContactUsernameAction").setMyUsername(g).then(function(e) {
				if (!P.aborted && e) {
					if (I(!1), g == null) return;
					a != null ? o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUsernameChangedModal.react"), {
						username: g,
						contactId: n
					})) : f(g) ? (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
						usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.VIEW,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
					}), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
						contactId: n,
						fromUsernameCreation: !0,
						handleBack: function() {
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
								contactId: n,
								username: g
							}));
						}
					}))) : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
						contactId: n,
						username: g
					}));
				}
			}).catch(function(e) {
				P.aborted || o("WAWebUsernameErrorUtils").handleErrorBasedOnErrorCode(e, q);
			}).finally(function() {
				P.aborted || $(!1);
			});
		}, t[8] = n, t[9] = a, t[10] = P, t[11] = M, t[12] = g, t[13] = q) : q = t[13];
		var U;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), t[14] = U) : U = t[14];
		var V = U, H;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
			/*BTDS*/
			""
		), t[15] = H) : H = t[15];
		var G = H, z = a != null ? G : V, j;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), t[16] = j) : j = t[16];
		var K = g != null ? g : "", Q = b != null && k === !1, X = b != null && k === !1 ? b : null, Y = R === !0 && k === !1 && g !== a ? r("WDSIconIcCheckCircleFilled.react") : void 0, J = k === !0, Z;
		t[17] !== a || t[18] !== R || t[19] !== k || t[20] !== g ? (Z = R === !0 && k === !1 && g !== a ? o("WAWebUsernameStringUtils").getUsernameAvailableMessage() : "", t[17] = a, t[18] = R, t[19] = k, t[20] = g, t[21] = Z) : Z = t[21];
		var ee;
		t[22] !== B || t[23] !== N || t[24] !== Y || t[25] !== J || t[26] !== Z || t[27] !== K || t[28] !== Q || t[29] !== X ? (ee = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: p.marginStart12,
			grow: 1,
			shrink: 1,
			children: u.jsx("div", {
				onCopy: o("WAWebStopEvent").stopPropagation,
				children: u.jsx(r("WDSTextField.react"), {
					label: j,
					testid: "settings_home_username_textfield",
					StartIcon: r("WDSIconIcAlternateEmail.react"),
					defaultValue: K,
					onValueChange: B,
					maxCharacterCount: o("WAWebUsernameTypes").USERNAME_MAX_LENGTH,
					error: Q,
					errorText: X,
					EndIcon: Y,
					loading: J,
					bottomText: Z,
					ref: N
				})
			})
		}), t[22] = B, t[23] = N, t[24] = Y, t[25] = J, t[26] = Z, t[27] = K, t[28] = Q, t[29] = X, t[30] = ee) : ee = t[30];
		var te = ee, ne;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (ne = {
			surface: "unknown",
			viewName: "set-username"
		}, t[31] = ne) : ne = t[31];
		var re;
		t[32] !== i || t[33] !== l ? (re = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: i,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: l
		}), t[32] = i, t[33] = l, t[34] = re) : re = t[34];
		var oe;
		t[35] !== z ? (oe = u.jsx(o("WAWebFlex.react").FlexItem, {
			margin: 32,
			align: "center",
			xstyle: p.description,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: z
			})
		}), t[35] = z, t[36] = oe) : oe = t[36];
		var ae;
		t[37] !== te ? (ae = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.paddingHoriz24,
			children: te
		}), t[37] = te, t[38] = ae) : ae = t[38];
		var ie;
		t[39] !== oe || t[40] !== ae ? (ie = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [oe, ae]
		}), t[39] = oe, t[40] = ae, t[41] = ie) : ie = t[41];
		var le = g == null || (g == null ? void 0 : g.length) === 0 || R !== !0 || k === !0 || g === a || x, se;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (se = s._(
			/*BTDS*/
			""
		), t[42] = se) : se = t[42];
		var ue;
		t[43] !== q || t[44] !== x || t[45] !== le ? (ue = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				xstyle: p.paddingAll32,
				children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
					stretch: !0,
					onClick: q,
					spinner: x,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
					disabled: le,
					children: se
				})
			})
		}), t[43] = q, t[44] = x, t[45] = le, t[46] = ue) : ue = t[46];
		var ce;
		t[47] !== ie || t[48] !== ue ? (ce = u.jsxs(r("WAWebDrawerBody.react"), { children: [ie, ue] }), t[47] = ie, t[48] = ue, t[49] = ce) : ce = t[49];
		var de;
		return t[50] !== c || t[51] !== re || t[52] !== ce ? (de = u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			tsNavigationData: ne,
			children: [re, ce]
		}), t[50] = c, t[51] = re, t[52] = ce, t[53] = de) : de = t[53], de;
	}
	function h() {
		return new AbortController();
	}
	l.default = g;
}), 226);
