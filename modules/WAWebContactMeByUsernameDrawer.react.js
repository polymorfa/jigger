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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(59), n = e.contactId, a = e.isReadOnly, i = e.ref, l = e.username, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [o("WAWebFrontendContactGetters").getUsernameKey], t[0] = s) : s = t[0];
		var v = o("useWAWebContactValues").useContactValues(n, s), S = v[0], R;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = [], t[1] = R) : R = t[1], c(b, R);
		var L;
		t[2] !== n || t[3] !== l ? (L = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
				contactId: n,
				username: l
			}));
		}, t[2] = n, t[3] = l, t[4] = L) : L = t[4];
		var E = L, k;
		t[5] !== n || t[6] !== a || t[7] !== l ? (k = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(C, {
				contactId: n,
				isReadOnly: a,
				username: l
			}));
		}, t[5] = n, t[6] = a, t[7] = l, t[8] = k) : k = t[8];
		var I = k, T;
		t[9] !== n || t[10] !== I ? (T = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
				contactId: n,
				handleBack: I,
				onSuccessNavigate: I
			}));
		}, t[9] = n, t[10] = I, t[11] = T) : T = t[11];
		var D = T, x;
		t[12] !== n || t[13] !== a || t[14] !== I || t[15] !== l || t[16] !== S ? (x = function() {
			a || S == null || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUsernameKeyDeleteModal.react"), {
				contactId: n,
				onSuccessNavigate: I,
				username: l
			})));
		}, t[12] = n, t[13] = a, t[14] = I, t[15] = l, t[16] = S, t[17] = x) : x = t[17];
		var $ = x, P;
		t[18] !== a || t[19] !== D || t[20] !== S ? (P = function() {
			a || S != null || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_ADD_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), D());
		}, t[18] = a, t[19] = D, t[20] = S, t[21] = P) : P = t[21];
		var N = P, M;
		t[22] !== a || t[23] !== D ? (M = function() {
			a || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_CHANGE_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), D());
		}, t[22] = a, t[23] = D, t[24] = M) : M = t[24];
		var w = M, A = S != null, F;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: g()
		}), t[25] = F) : F = t[25];
		var O;
		t[26] !== S ? (O = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.keyRow,
			testid: "contact-me-by-username-key-row",
			children: [F, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body1",
				children: S
			})]
		}), t[26] = S, t[27] = O) : O = t[27];
		var B = O, W;
		t[28] !== w || t[29] !== A || t[30] !== a || t[31] !== B ? (W = A ? u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "padding-no-vertical",
			xstyle: d.sidePadding,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.keyRowContainer,
				children: [a ? B : u.jsx(o("WAWebClickable.react").Clickable, {
					onClick: w,
					role: "button",
					"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
					xstyle: d.keyRowClickable,
					children: B
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
		}) : null, t[28] = w, t[29] = A, t[30] = a, t[31] = B, t[32] = W) : W = t[32];
		var q = W, U;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (U = {
			surface: "unknown",
			viewName: "contact-me-by-username"
		}, t[33] = U) : U = t[33];
		var V;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (V = m(), t[34] = V) : V = t[34];
		var H;
		t[35] !== E ? (H = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			onBack: E,
			title: V,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), t[35] = E, t[36] = H) : H = t[36];
		var G;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (G = [20, 0], t[37] = G) : G = t[37];
		var z;
		t[38] === Symbol.for("react.memo_cache_sentinel") ? (z = u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
			margin: G,
			color: "wdsContentDeemphasized",
			weight: "bold",
			children: p()
		}), t[38] = z) : z = t[38];
		var j;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (j = _(), t[39] = j) : j = t[39];
		var K = !A, Q;
		t[40] !== $ || t[41] !== a || t[42] !== K ? (Q = u.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: j,
			selected: K,
			disabled: a,
			testid: "contact-me-by-username-everyone",
			onClick: $
		}), t[40] = $, t[41] = a, t[42] = K, t[43] = Q) : Q = t[43];
		var X;
		t[44] === Symbol.for("react.memo_cache_sentinel") ? (X = f(), t[44] = X) : X = t[44];
		var Y;
		t[45] !== N || t[46] !== A || t[47] !== a ? (Y = u.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: X,
			selected: A,
			disabled: a,
			testid: "contact-me-by-username-people-who-know-my-key",
			onClick: N
		}), t[45] = N, t[46] = A, t[47] = a, t[48] = Y) : Y = t[48];
		var J;
		t[49] !== Q || t[50] !== Y ? (J = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "padding-no-vertical",
			xstyle: d.sidePadding,
			children: [
				z,
				Q,
				Y
			]
		}), t[49] = Q, t[50] = Y, t[51] = J) : J = t[51];
		var Z;
		t[52] !== q || t[53] !== J ? (Z = u.jsxs(r("WAWebDrawerBody.react"), { children: [J, q] }), t[52] = q, t[53] = J, t[54] = Z) : Z = t[54];
		var ee;
		return t[55] !== i || t[56] !== H || t[57] !== Z ? (ee = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "contact-me-by-username-drawer",
			tsNavigationData: U,
			children: [H, Z]
		}), t[55] = i, t[56] = H, t[57] = Z, t[58] = ee) : ee = t[58], ee;
	}
	function b() {
		o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
	}
	l.default = C;
}), 226);
