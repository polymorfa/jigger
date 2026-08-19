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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(61), n = e.contactId, a = e.fromUsernameCreation, i = e.handleBack, l = e.onSuccessNavigate, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [o("WAWebFrontendContactGetters").getUsername, o("WAWebFrontendContactGetters").getUsernameKey], t[0] = c) : c = t[0];
		var f = o("useWAWebContactValues").useContactValues(n, c), h = f[0], y = f[1], C;
		t[1] !== y ? (C = y != null ? null : o("WAWebUsernameUtils").generateUsernameKeySuggestion(), t[1] = y, t[2] = C) : C = t[2];
		var b = m(C), v = b[0], S = b[1], R = m(!1), L = R[0], E = R[1], k = r("useWAWebUnmountSignal")(), I;
		if (t[3] === Symbol.for("react.memo_cache_sentinel") ? (I = [], t[3] = I) : I = t[3], d(g, I), h == null) return null;
		var T = y != null, D = v != null, x;
		if (t[4] !== v || t[5] !== y) {
			var $;
			x = ($ = v != null ? v : y) == null ? void 0 : $.split("").join(" "), t[4] = v, t[5] = y, t[6] = x;
		} else x = t[6];
		var P = x, N;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[7] = N) : N = t[7];
		var M = N, w;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[8] = w) : w = t[8];
		var A = w, F;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), t[9] = F) : F = t[9];
		var O = F, B;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[10] = B) : B = t[10];
		var W = B, q;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		), t[11] = q) : q = t[11];
		var U = q, V;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), t[12] = V) : V = t[12];
		var H = V, G;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
			/*BTDS*/
			""
		), t[13] = G) : G = t[13];
		var z = G, j;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (j = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_SUGGEST_NEW_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			});
			var e = o("WAWebUsernameUtils").generateUsernameKeySuggestion();
			S(e);
		}, t[14] = j) : j = t[14];
		var K = j, Q;
		t[15] !== n || t[16] !== a || t[17] !== T || t[18] !== l || t[19] !== v || t[20] !== k || t[21] !== h ? (Q = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), E(!0), o("WAWebSetUsernameKeyAction").setMyUsernameKey(v).then(function(e) {
				if (!k.aborted && e) {
					if (a) {
						var s;
						v != null && o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
							contactId: n,
							username: (s = o("WAWebUsernameTypes").serializeMaybeUsername(h)) != null ? s : "",
							usernameKey: v
						}));
					} else {
						if (l != null) l();
						else {
							var t;
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
								contactId: n,
								username: (t = o("WAWebUsernameTypes").serializeMaybeUsername(h)) != null ? t : ""
							}));
						}
						var i = T ? H : z;
						o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: i }));
					}
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
						usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_SUCCESS,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
					});
				}
			}).catch(function() {
				k.aborted || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
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
						onAction: Q
					}
				})));
			}).finally(function() {
				k.aborted || E(!1);
			});
		}, t[15] = n, t[16] = a, t[17] = T, t[18] = l, t[19] = v, t[20] = k, t[21] = h, t[22] = Q) : Q = t[22];
		var X;
		t[23] !== n || t[24] !== l || t[25] !== h ? (X = function() {
			var e;
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUsernameKeyDeleteModal.react"), {
				contactId: n,
				onSuccessNavigate: l,
				username: (e = o("WAWebUsernameTypes").serializeMaybeUsername(h)) != null ? e : ""
			}));
		}, t[23] = n, t[24] = l, t[25] = h, t[26] = X) : X = t[26];
		var Y = X, J;
		t[27] !== i ? (J = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT), i();
		}, t[27] = i, t[28] = J) : J = t[28];
		var Z = J, ee;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (ee = {
			surface: "unknown",
			viewName: "create-username-key"
		}, t[29] = ee) : ee = t[29];
		var te;
		t[30] !== Z ? (te = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: M,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: Z
		}), t[30] = Z, t[31] = te) : te = t[31];
		var ne;
		t[32] !== P ? (ne = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: _.usernameKeyContainer,
			children: u.jsx(r("WDSText.react"), {
				type: "LargeTitle1",
				colorName: "contentDefault",
				children: P
			})
		}), t[32] = P, t[33] = ne) : ne = t[33];
		var re;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (re = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: K,
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
					children: A
				})]
			})
		}), t[34] = re) : re = t[34];
		var oe;
		t[35] !== ne ? (oe = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: _.keySuggestionContainer,
			marginTop: 32,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: _.keySection,
				children: [ne, re]
			})
		}), t[35] = ne, t[36] = oe) : oe = t[36];
		var ae;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: _.descriptionContainer,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: O
			})
		}), t[37] = ae) : ae = t[37];
		var ie;
		t[38] !== oe ? (ie = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [oe, ae]
		}), t[38] = oe, t[39] = ie) : ie = t[39];
		var le = T ? p.paddingBottom10 : o("WDSPaddings.stylex").wdsPaddings.paddingBottom40, se;
		t[40] !== le ? (se = [le, o("WDSPaddings.stylex").wdsPaddings.paddingHor32], t[40] = le, t[41] = se) : se = t[41];
		var ue = !D || L, ce;
		t[42] !== Q || t[43] !== L || t[44] !== ue ? (ce = u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: Q,
			stretch: !0,
			disabled: ue,
			spinner: L,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
			children: W
		}), t[42] = Q, t[43] = L, t[44] = ue, t[45] = ce) : ce = t[45];
		var de;
		t[46] !== se || t[47] !== ce ? (de = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: se,
			children: ce
		}), t[46] = se, t[47] = ce, t[48] = de) : de = t[48];
		var me;
		t[49] !== Y || t[50] !== T ? (me = T && u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingBottom16, o("WDSPaddings.stylex").wdsPaddings.paddingHor32],
			children: u.jsx(r("WDSButton.react"), {
				widthMode: "flexible",
				onPress: Y,
				size: "medium",
				variant: "borderless",
				type: "destructive",
				label: U,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER
			})
		}), t[49] = Y, t[50] = T, t[51] = me) : me = t[51];
		var pe;
		t[52] !== de || t[53] !== me ? (pe = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: [de, me]
		}), t[52] = de, t[53] = me, t[54] = pe) : pe = t[54];
		var _e;
		t[55] !== ie || t[56] !== pe ? (_e = u.jsxs(r("WAWebDrawerBody.react"), { children: [ie, pe] }), t[55] = ie, t[56] = pe, t[57] = _e) : _e = t[57];
		var fe;
		return t[58] !== te || t[59] !== _e ? (fe = u.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: ee,
			children: [te, _e]
		}), t[58] = te, t[59] = _e, t[60] = fe) : fe = t[60], fe;
	}
	function g() {
		o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_GENERATOR, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
	}
	l.default = f;
}), 226);
