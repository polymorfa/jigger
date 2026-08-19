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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(12), n = e.contactId, a = e.isReadOnly, i = e.username, l = e.usernameKey, c;
		t[0] !== n || t[1] !== a || t[2] !== i ? (c = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_USERNAME_PIN,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebContactMeByUsernameDrawer.react"), {
				contactId: n,
				isReadOnly: a,
				username: i
			}));
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = c) : c = t[3];
		var d = c, m;
		t[4] !== l ? (m = l != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[4] = l, t[5] = m) : m = t[5];
		var p = m, f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[6] = f) : f = t[6];
		var g;
		t[7] !== p ? (g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.sidePadding,
			children: [f, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: p
			})]
		}), t[7] = p, t[8] = g) : g = t[8];
		var h = g;
		if (a) return h;
		var y;
		return t[9] !== h || t[10] !== d ? (y = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: d,
			role: "button",
			"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			children: h
		}), t[9] = h, t[10] = d, t[11] = y) : y = t[11], y;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(5), n = e.contactId, a = e.isReadOnly, i = e.username, l = e.usernameKey, s;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (s = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: _.sidePadding,
			children: u.jsx(f, {
				contactId: n,
				isReadOnly: a,
				username: i,
				usernameKey: l
			})
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s) : s = t[4], s;
	}
	function h() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [_.tipContainer, _.sidePadding], e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: _.tipIcon,
			children: u.jsx(r("WDSIconIcLightbulb.react"), {
				height: 32,
				width: 32
			})
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: t,
			children: [n, u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2Emphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[2] = a) : a = e[2], a;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(44), n = e.contactId, a = e.onBack, i = e.ref, l = e.username, c = p(null), f = c[0], y = c[1], v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = [], t[0] = v) : v = t[0], d(b, v);
		var S;
		if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
			var R = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			S = o("WAWebContactCollection").ContactCollection.assertGet(R), t[1] = S;
		} else S = t[1];
		var L = S, E;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (E = [o("WAWebFrontendContactGetters").getUsernameKey], t[2] = E) : E = t[2];
		var k = o("useWAWebContactValues").useContactValues(L.id, E), I = k[0], T = r("useWAWebIsKeyboardUser")(), D = T.isKeyboardUser, x = m(null), $;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? ($ = o("WAWebUserPrefsUsername").getUsernameState(), t[3] = $) : $ = t[3];
		var P = $, N;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (N = P === "RESERVED" || P === "ACTIVE" && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameAccountLinkingEnabled(), t[4] = N) : N = t[4];
		var M = N, w;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[5] = w) : w = t[5];
		var A = w, F = C, O;
		t[6] !== n || t[7] !== D || t[8] !== l ? (O = function() {
			y({
				DirX: o("WAWebDropdown.react").DirX.CENTER,
				DirY: o("WAWebDropdown.react").DirY.BOTTOM,
				menu: u.jsx(r("WAWebUsernameEditDropdown.react"), {
					contactId: n,
					onBack: F,
					username: l
				}),
				anchor: x.current,
				autoFocus: D
			});
		}, t[6] = n, t[7] = D, t[8] = l, t[9] = O) : O = t[9];
		var B = O, W;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			y(null);
		}, t[10] = W) : W = t[10];
		var q = W, U;
		t[11] !== B || t[12] !== f ? (U = M !== !0 && u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebClickableText, {
			color: "green",
			dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_HEADER,
			onClick: B,
			ref: x,
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
				requestDismiss: q,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f })
			})
		})] }), t[11] = B, t[12] = f, t[13] = U) : U = t[13];
		var V = U, H;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
			/*BTDS*/
			""
		), t[14] = H) : H = t[14];
		var G = H, z;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (z = u.jsx(r("WDSTextualLink.react"), {
			href: o("WAWebFaqUrl").getUsernameFaqUrl(),
			textConfig: "Body2",
			children: G
		}), t[15] = z) : z = t[15];
		var j = z, K;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsxs(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			textAlign: "center",
			type: "Body2",
			children: [
				P === "RESERVED" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				" ",
				j
			]
		}) }), t[16] = K) : K = t[16];
		var Q = K, X;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (X = {
			surface: "unknown",
			viewName: "username-management"
		}, t[17] = X) : X = t[17];
		var Y = a != null ? a : F, J;
		t[18] !== V || t[19] !== Y ? (J = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			children: V,
			onBack: Y,
			title: A,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), t[18] = V, t[19] = Y, t[20] = J) : J = t[20];
		var Z;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (Z = M === !0 && u.jsx(h, {}), t[21] = Z) : Z = t[21];
		var ee;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (ee = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: _.badge,
			children: u.jsx(o("WAWebWdsPictoPrivateMentionIcon.react").WdsPictoPrivateMentionIcon, {
				height: 90,
				width: 90
			})
		}), t[22] = ee) : ee = t[22];
		var te;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (te = [_.marginTop8, _.marginBottom8], t[23] = te) : te = t[23];
		var ne;
		t[24] !== l ? (ne = u.jsx(o("WAWebText.react").WAWebTextLarge, {
			textAlign: "center",
			xstyle: te,
			children: l
		}), t[24] = l, t[25] = ne) : ne = t[25];
		var re;
		t[26] !== I ? (re = I != null && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: _.keyLine,
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				textAlign: "center",
				type: "Body1",
				children: s._(
					/*BTDS*/
					"",
					[s._param("key", I)]
				)
			})
		}), t[26] = I, t[27] = re) : re = t[27];
		var oe;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (oe = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [_.usernameDescription, _.sidePadding],
			children: Q
		}), t[28] = oe) : oe = t[28];
		var ae;
		t[29] !== ne || t[30] !== re ? (ae = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					ee,
					ne,
					re,
					oe
				]
			})
		}), t[29] = ne, t[30] = re, t[31] = ae) : ae = t[31];
		var ie;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: _.divider
		}), t[32] = ie) : ie = t[32];
		var le;
		t[33] !== n || t[34] !== l || t[35] !== I ? (le = u.jsx(g, {
			contactId: n,
			isReadOnly: M,
			username: l,
			usernameKey: I
		}), t[33] = n, t[34] = l, t[35] = I, t[36] = le) : le = t[36];
		var se;
		t[37] !== ae || t[38] !== le ? (se = u.jsxs(r("WAWebDrawerBody.react"), { children: [Z, u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [
				ae,
				ie,
				le
			]
		})] }), t[37] = ae, t[38] = le, t[39] = se) : se = t[39];
		var ue;
		return t[40] !== i || t[41] !== J || t[42] !== se ? (ue = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "creating-username-info-drawer",
			tsNavigationData: X,
			children: [J, se]
		}), t[40] = i, t[41] = J, t[42] = se, t[43] = ue) : ue = t[43], ue;
	}
	function C() {
		o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
		var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(e), r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(e), a = o("WAWebContactCollection").ContactCollection.assertGet(e);
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(n("cr:1923"), {
			conn: o("WAWebConnModel").Conn,
			contact: a,
			isInitialStep: !0,
			profilePicThumb: r,
			status: t
		}));
	}
	function b() {
		o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
	}
	l.default = y;
}), 226);
