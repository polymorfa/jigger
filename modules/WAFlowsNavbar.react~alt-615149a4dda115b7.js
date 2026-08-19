__d("WAFlowsNavbar.react", [
	"fbt",
	"WAFlowsActionHandlerTypes",
	"WAFlowsBridgeEvents",
	"WAFlowsComponentConstants",
	"WAFlowsConfigurationContext.react",
	"WAFlowsContainerElementIDs",
	"WAFlowsContextualMenu.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsGlobalLoader.react",
	"WAFlowsIcon.react",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsNavigationUtils",
	"WAFlowsProgressIndicator.react",
	"WAFlowsProgressIndicatorUtils",
	"WAFlowsResponseHandler",
	"WAFlowsShoppingNavigationUtils",
	"WAFlowsStateParser",
	"WAFlowsStateProvider.react",
	"WAFlowsTestingIds",
	"WAFlowsUtilityConstants",
	"WAFlowsWELJActionCreators",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"WDSFlex.stylex",
	"WDSMargins.stylex",
	"react",
	"stylex",
	"useCurrentScreenMeta",
	"useForceUpdate",
	"usePrevious",
	"useVirtualFocus",
	"useWAFlowsClickOutsideOfExcludedNode.react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useLayoutEffect, g = d.useMemo, h = d.useRef, y = d.useState, C = 38, b = "xekv6nw-B", v = "x17qceat-B", S = {
		positionRelative: {
			position: "x1n2onr6",
			$$css: !0
		},
		fullHeight: {
			height: "x5yr21d",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		headerWithProgressIndicator: {
			borderBottomWidth: "x8mxp1h",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x16stqrj",
			transitionProperty: "x1u8hfhx",
			transitionDuration: "xq7dr57",
			willChange: "x1w79sa",
			$$css: !0
		},
		headerWithProgressIndicatorScrolling: {
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			display: "xrvj5dj",
			gridTemplateColumns: "x1g3yg12",
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			$$css: !0
		},
		containerWithoutProgressIndicator: {
			paddingTop: "x15nm23f",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x740rwh",
			paddingInlineStart: "x8945me",
			borderBottomWidth: "x8mxp1h",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		headerStaticColorResponse: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		leftLabel: {
			color: "xyciedh",
			$$css: !0
		},
		screenTitleLabel: {
			position: "x10l6tqk",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x8945me",
			wordBreak: "x1yn0g08",
			$$css: !0
		},
		customBtn: {
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			position: "x1n2onr6",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			":focus_outline": "x1uvtmcs",
			":disabled_pointerEvents": "xaqnwrm",
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		leadingBtnBackIconWrapper: {
			position: "x10l6tqk",
			$$css: !0
		},
		swappable: {
			opacity: "xg01cxk",
			animationTimingFunction: "xsz6t5k",
			animationFillMode: "x10e4vud",
			animationDuration: "xy9na11",
			willChange: "x1larqbn",
			$$css: !0
		},
		swappableShow: {
			animationName: "x127lhb5",
			$$css: !0
		},
		swappableShowImmediatelly: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		swappableHide: {
			animationName: "xvma63k",
			$$css: !0
		},
		trailingBtnBackIconWrapper: {
			height: "x3igimt",
			$$css: !0
		},
		trailingBtn: {
			transitionProperty: "x19991ni",
			transitionDuration: "xq7dr57",
			display: "x78zum5",
			willChange: "x1larqbn",
			$$css: !0
		},
		trailingBtnAlign: {
			alignItems: "xuk3077",
			$$css: !0
		},
		trailingBtnAlignRefresh: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		backButtonOrientation: {
			transform: "x19jd1h0",
			$$css: !0
		},
		containerWithProgressIndicator: {
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, R = {
		headerStaticColor: {
			backgroundColor: "xs1q97v",
			$$css: !0
		},
		container: {
			height: "x12wf1qt",
			marginTop: "xw10px1",
			$$css: !0
		},
		containerPadding: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		leftLabel: {
			letterSpacing: "x12oo3zp",
			fontSize: "x18hcczt",
			$$css: !0
		},
		leftLabelNew: {
			color: "x1v5yvga",
			$$css: !0
		},
		leadingBtnBackIcon: {
			width: "x1z0he6f",
			height: "xpz6ql4",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		trailingBtnIcon: {
			width: "xmpnr0e",
			height: "x1jvw5fj",
			$$css: !0
		},
		btnIconNew: {
			width: "xnshwm5",
			height: "xfzl79u",
			WebkitMaskSize: "x1gevfki",
			$$css: !0
		},
		btnIconUIRefresh: {
			width: "x51uzbs",
			height: "xaylbqo",
			WebkitMaskSize: "x1gevfki",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		btnIconUIRefreshWrapper: {
			backgroundColor: "x4wrhlh",
			width: "xh29eag",
			height: "xb8l8e1",
			borderStartStartRadius: "x1r3yvgy",
			borderStartEndRadius: "x10qicr6",
			borderEndEndRadius: "x9ro07m",
			borderEndStartRadius: "x1frmzlk",
			justifyContent: "xl56j7k",
			display: "x78zum5",
			$$css: !0
		},
		trailingBtn: {
			marginTop: "x13x2bpi",
			marginRight: "x164x5by",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		trailingBtnAlignRefresh: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		trailingBtnRTL: {
			marginRight: "x1yf7rl7",
			marginTop: "x1bfdfum",
			marginLeft: "x4oap2u",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		trailingBtnNew: {
			marginTop: "xzv6pj1",
			$$css: !0
		},
		trailingBtnNewRTL: {
			marginRight: "x1w0kti9",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		trailingBtnActive: {
			opacity: "x1cvbfqh",
			$$css: !0
		}
	}, L = {
		headerStaticColor: {
			backgroundColor: "xw6alqk",
			$$css: !0
		},
		container: {
			height: "xu15cu9",
			marginTop: "xw10px1",
			$$css: !0
		},
		leadingBtnCloseIcon: {
			width: "x1xvt488",
			marginLeft: "x1spiraj",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		leadingBtnBackIcon: {
			width: "xp8d6y2",
			$$css: !0
		},
		trailingBtnIcon: {
			marginRight: "xqcji2w",
			marginInlineStart: null,
			marginInlineEnd: null,
			marginTop: "x13x2bpi",
			width: "xp8d6y2",
			height: "xam5rvr",
			$$css: !0
		}
	}, E = {
		headerStaticColor: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		container: {
			height: "x1sh0tsm",
			marginTop: "xw10px1",
			transition: "x1ucw4ku",
			willChange: "x1p3jmhc",
			$$css: !0
		},
		leadingBtnCloseIcon: {
			width: "x1xvt488",
			$$css: !0
		},
		leadingBtnBackIcon: {
			width: "xp8d6y2",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		trailingBtnIcon: {
			width: "xp8d6y2",
			height: "xam5rvr",
			$$css: !0
		},
		focusBtnColor: {
			backgroundColor: "xfmgztn",
			$$css: !0
		},
		clickableContainer: {
			borderStartStartRadius: "xvs2etk",
			borderStartEndRadius: "xg3wpu6",
			borderEndEndRadius: "x1jwbhkm",
			borderEndStartRadius: "xgg4q86",
			height: "x1vqgdyp",
			width: "x100vrsf",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			transition: "x50en4l",
			backgroundColor: "xjbqb8w",
			":hover_transition": "x89rsit",
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		screenTitleLabel: {
			paddingRight: "x52dz5p",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		customBtn: {
			cursor: "x1ypdohk",
			":focus-visible_borderStartStartRadius": "xx6kk3i",
			":focus-visible_borderStartEndRadius": "xatvoih",
			":focus-visible_borderEndEndRadius": "xmazq1i",
			":focus-visible_borderEndStartRadius": "xlv4hfq",
			":focus-visible_width": "xi14ebf",
			":focus-visible_height": "x1vr9376",
			":focus-visible_transition": "x179dzl2",
			":focus-visible_backgroundColor": "x1005iyl",
			":focus-visible_display": "x1y756x2",
			":focus-visible_alignItems": "x1pbd8hg",
			":focus-visible_justifyContent": "x17yw2si",
			$$css: !0
		}
	}, k = 24, I = 40;
	function T(t) {
		var n, a, i, l, u, d = t.isLeadGenAIFlow, b = d === void 0 ? !1 : d, v = t.isLoading, R = v === void 0 ? !1 : v, L = t.isShoppingFlow, E = L === void 0 ? !1 : L, I = o("WAFlowsEnvContext.react").useWAFlowsEnv(), T = I.env, N = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), M = N.flowInstanceId, w = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), A = w.flowInitData, F = A[0], O = (n = F == null ? void 0 : F.environment.is_flow_interactive) != null ? n : !0, B = o("WAFlowsConfigurationContext.react").useWAFlowsConfiguration(), W = B.hideContextMenu, q = B.responseNavbarAction, U = (a = F == null ? void 0 : F.environment.business_name) != null ? a : "", V = o("WAFlowsResponseHandler").isResponseFlow(F), H = o("WAFlowsWebNativeBridgeClientABPropsContext.react").useFetchClientABProps(), G = V && (H == null ? void 0 : H.flows_response_close_button_enabled.boolValue) === !0, z = [
			o("WAFlowsLocalization").getNavBarLeadingButtonAriaLabel(),
			G ? o("WAFlowsLocalization").getNavBarCloseResponseButtonAriaLabel() : o("WAFlowsLocalization").getNavBarCloseButtonAriaLabel(),
			o("WAFlowsLocalization").getNavBarTrailingButtonAriaLabel()
		], j = z[0], K = z[1], Q = z[2], X = o("WAFlowsStateProvider.react").useWAFlowsState(), Y = X.internal, J = Y.isOverlayVisible, Z = J === void 0 ? !1 : J, ee = Y.navBarConfig.title, te = Y.scrollConfig, ne = y(!1), re = ne[0], oe = ne[1], ae = y(0), ie = ae[0], le = ae[1], se = r("useVirtualFocus")(), ue = se.focusedButton, ce = se.handleBlur, de = se.handleFocus, me = r("useCurrentScreenMeta")(), pe = h(null), _e = h(null), fe = h(null), ge = h(null), he = h(null), ye = h(null), Ce = h(null), be = h(null), ve = h(0), Se = o("WAFlowsNavigationUtils").useLeadingBtnState(), Re = Se[0], Le = Se[1], Ee = r("useForceUpdate")(), ke, Ie = T.hostPlatform !== "web_tooling" && T.platform === "ios" ? { paddingTop: ((i = H == null || (l = H.flows_ios_native_grabber_height) == null ? void 0 : l.numValue) != null ? i : 15) + "px" } : void 0, Te = y({
			title: null,
			rotatingTitleA: null,
			rotatingTitleB: null
		}), De = Te[0], xe = Te[1], $e = ge.current, Pe = he.current;
		_(function() {
			var e, t = P(E, ee, me, X.external, (e = X.internal) == null ? void 0 : e.shopping);
			xe(function(e) {
				return babelHelpers.extends({}, e, { title: t }, e.title === e.rotatingTitleB && t !== e.title ? { rotatingTitleA: t } : { rotatingTitleB: t });
			});
		}, [
			ee,
			me,
			X.external,
			E,
			(u = X.internal) == null ? void 0 : u.shopping
		]);
		var Ne = o("WAFlowsNavigationUtils").useBackOrCloseNavigationClick(), Me = function() {
			var e = !re;
			oe(e), re || w.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsCloseContextMenu,
				payload: null,
				hasCallback: !1
			});
		}, we = m(async function(e) {
			var t = {
				LEARN_MORE: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsLearnMore,
				HELP: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsContextualHelp,
				REPORT: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsSpamReport
			}, n = t[e];
			if (n != null) {
				await w.invoke({
					eventName: n,
					payload: null,
					fallBackDataForWeb: {},
					hasCallback: !1
				});
				return;
			}
			if (e === "REPORT_ITEM") {
				var r;
				await o("WAFlowsShoppingNavigationUtils").getFlowsShoppingReportItemJSBridge(X.external[(r = me == null ? void 0 : me.id) != null ? r : ""], w.invoke);
			}
		}, [
			w,
			me == null ? void 0 : me.id,
			X.external
		]);
		_(function() {
			(async function() {
				await w.invoke({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsConfigureNavBar,
					payload: {
						title: "",
						is_first_screen: !0,
						is_hidden: !0
					},
					fallBackDataForWeb: {},
					hasCallback: !1
				});
			})();
		}, [w]);
		var Ae = m(function(e) {
			we(e);
		}, [we]), Fe = p(o("WAFlowsStateProvider.react").FlowStateDispatchContext), Oe = m(async function() {
			var e = w.flowInitData, t = e[0];
			(t == null ? void 0 : t.environment.flow_id) != null && Fe(await w.actionOverrides.downloadResponseActionHandler({
				name: o("WAFlowsActionHandlerTypes").WELJActionType.DOWNLOAD_RESPONSES,
				flowId: t.environment.flow_id
			}));
		}, [
			w.actionOverrides,
			w.flowInitData,
			Fe
		]), Be = $(T.platform);
		o("useWAFlowsClickOutsideOfExcludedNode.react").useWAFlowsClickOutsideOfExcludedNode(re, function(e) {
			return oe(!1);
		}, [fe, _e]);
		var We = T.platform === "ios", qe = o("WAFlowsProgressIndicatorUtils").isProgressIndicatorSupported(E, O, V), Ue = m(function() {
			Le(babelHelpers.extends({}, Re, { isLeadingBtnAnimating: !1 }));
		}, [Re, Le]), Ve = function(t) {
			return Re.prevLeadingBtn && Re.prevLeadingBtn !== t ? S.swappableShow : S.swappableShowImmediatelly;
		}, He = function(t) {
			var e = Re.prevLeadingBtn === t;
			return e && (T.platform !== "wa_web" || Re.prevLeadingBtn !== "close") && S.swappableHide;
		}, Ge = function(t, n) {
			return n === !0 || Re.leadingBtn === t ? Ve(t) : He(t);
		}, ze = g(function() {
			return V && (H == null ? void 0 : H.flows_response_flat_list_enabled.boolValue) === !0;
		}, [V, H]);
		_(function() {
			return $e == null || $e.addEventListener("animationend", Ue), Pe == null || Pe.addEventListener("animationend", Ue), function() {
				$e == null || $e.removeEventListener("animationend", Ue), Pe == null || Pe.removeEventListener("animationend", Ue);
			};
		}, [
			$e,
			Pe,
			Ue
		]), _(function() {
			if (Z) {
				var e;
				(e = pe.current) == null || e.focus();
			}
		}, [Z]);
		var je = c.jsx(r("WAFlowsIcon.react"), {
			id: T.platform === "ios" ? "waf_chevron_primary" : "waf_directional_arrow_android",
			altText: s._(
				/*BTDS*/
				""
			),
			xstyle: [
				S.swappable,
				Be.leadingBtnBackIcon,
				Be.btnIconNew,
				T.isRTL ? S.backButtonOrientation : {},
				Ge("back"),
				ue === "back" && Be.focusBtnColor
			],
			responsiveFontContainerXStyle: [
				S.fullHeight,
				S.fullWidth,
				S.leadingBtnBackIconWrapper,
				Be.clickableContainer
			],
			"data-testid": void 0,
			ref: he
		}), Ke = c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
			text: K.toString(),
			xstyle: [
				S.swappable,
				S.leftLabel,
				Be.leftLabel,
				Be.leftLabelNew,
				Ge("close")
			],
			textAlign: "start",
			fontWeight: "italic",
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.NAVBAR_CLOSE,
			responsiveFontContainerXStyle: S.fullHeight,
			dataTestId: "wa-flows-navbar-leading-button-content-cancel",
			ref: ge
		}), Qe = function(t) {
			return c.jsx(r("WAFlowsIcon.react"), {
				id: "waf_cross",
				altText: K.toString(),
				xstyle: [
					S.swappable,
					Be.leadingBtnCloseIcon,
					t === !0 ? S.swappableShowImmediatelly : Ge("close", t),
					ue === "close" && Be.focusBtnColor
				],
				responsiveFontContainerXStyle: [
					S.fullHeight,
					S.fullWidth,
					S.leadingBtnBackIconWrapper,
					Be.clickableContainer
				],
				"data-testid": void 0,
				ref: he
			});
		}, Xe = c.jsx(r("WAFlowsIcon.react"), {
			id: We ? "waf_contextual_menu_ui_refresh" : "waf_more_horiz_circle",
			altText: s._(
				/*BTDS*/
				""
			),
			xstyle: [
				Be.trailingBtnIcon,
				ue === "menu" && Be.focusBtnColor,
				We ? Be.btnIconUIRefresh : Be.btnIconNew
			],
			responsiveFontContainerXStyle: [S.trailingBtnBackIconWrapper, Be.clickableContainer],
			ref: ye
		}), Ye = We ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.btnIconUIRefreshWrapper), { children: Xe })) : Xe, Je = c.jsx(r("WAFlowsIcon.react"), {
			id: q === "download" ? "waf_download_icon" : "waf_share",
			altText: q === "download" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			xstyle: [
				Be.trailingBtnIcon,
				Be.btnIconNew,
				ue === "download" && Be.focusBtnColor
			],
			responsiveFontContainerXStyle: [S.trailingBtnBackIconWrapper],
			ref: ye
		});
		if (Re.leadingBtn === "back" ? Ce = he : Re.leadingBtn === "close" && (Ce = T.platform === "ios" ? ge : he), f(function() {
			var e = null, t = null;
			if (Ce !== null) {
				var n;
				e = (n = Ce.current) == null || (n = n.getBoundingClientRect()) == null ? void 0 : n.width, Ce === ge && (ie === 0 ? le(e != null ? e : C) : e = ie);
			}
			if (ye !== null) {
				var r;
				t = (r = ye.current) == null || (r = r.getBoundingClientRect()) == null ? void 0 : r.width;
			}
			var o = Math.max(e != null ? e : 0, t != null ? t : 0), a;
			o > 0 && (a = o), T.hostPlatform === "web_tooling" && T.platform === "ios" && (a = 60), a != null && ve.current !== a && (ve.current = a, Re.leadingBtn === "close" && Ee());
		}, []), ve.current > 0) {
			var Ze = V && T.platform === "android";
			ke = T.platform === "wa_web" ? x(Re.leadingBtn, V, De.title) : { gridTemplateColumns: Ze ? k + "px auto " + k + "px" : ve.current + "px auto " + ve.current + "px" };
		}
		var et = r("usePrevious")(re), tt = X.internal.navBarConfig, nt = h();
		_(function() {
			re !== et && X.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.READY && (re ? (nt.current = tt, Fe(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: tt.title,
				backButtonAction: o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_NAVBAR_CONTEXT_MENU
			}))) : nt.current && (Fe(o("WAFlowsWELJActionCreators").createConfigNavbarAction(nt.current)), nt.current = null));
		}, [
			Fe,
			re,
			et,
			X.internal.status,
			tt
		]);
		var rt = (!o("WAFlowsUtilityConstants").LEAD_GEN_BOT_BUSINESSES.includes(U) || b) && !V && !W, ot = V && (F == null ? void 0 : F.environment.response_viewer) === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB && T.platform !== "wa_web" && (H == null ? void 0 : H.flows_response_download_button_enabled.boolValue) === !0, at = Re.leadingBtn === "back" || Re.isLeadingBtnAnimating, it = T.platform !== "wa_web" || at, lt = T.platform === "ios" ? Ke : Qe(), st = T.platform === "wa_web" ? Re.leadingBtn === "back" : !0, ut = it && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.fullHeight]), { children: c.jsxs("button", babelHelpers.extends({
			onFocus: function() {
				return de("back");
			},
			onBlur: ce,
			"data-testid": void 0,
			"aria-label": Re.leadingBtn === "back" ? j : K
		}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.customBtn, Be.customBtn, S.fullHeight, S.fullWidth), {
			disabled: Re.leadingBtn === "close" && T.platform === "wa_web",
			onClick: function() {
				ce(), Ne();
			},
			ref: pe,
			children: [(Re.leadingBtn === "back" || Re.isLeadingBtnAnimating) && je, st && (Re.leadingBtn === "close" || Re.isLeadingBtnAnimating) && lt]
		})) })), ct = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.fullHeight]), { children: c.jsx("button", babelHelpers.extends({
			onFocus: function() {
				return de("close");
			},
			onBlur: ce,
			"data-testid": void 0,
			"aria-label": K
		}, e.props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.customBtn, Be.customBtn, S.fullHeight, S.fullWidth), {
			onClick: function() {
				return void w.invoke({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClose,
					payload: null,
					fallBackDataForWeb: {},
					hasCallback: !1
				});
			},
			ref: pe,
			children: Qe(!0)
		})) })), dt = T.platform === "wa_web" && st && (Re.leadingBtn === "close" || Re.isLeadingBtnAnimating), mt = D(T.platform, De, dt, Be.screenTitleLabel), pt = rt && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight, T.platform === "wa_web" && o("WDSMargins.stylex").wdsMargins.marginHor12), { children: R ? c.jsx(r("WAFlowsGlobalLoader.react"), { small: !0 }, "loader") : c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x5yr21d xh8yej3" }
		}[(T.platform !== "wa_web") << 0], {
			ref: _e,
			children: c.jsx("button", babelHelpers.extends({
				onFocus: function() {
					return de("menu");
				},
				onBlur: ce,
				"aria-label": Q,
				"aria-haspopup": "true",
				"aria-expanded": re,
				htmlFor: "contextual_menu"
			}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight, S.fullWidth, S.customBtn, Be.customBtn, S.trailingBtn, We || T.platform === "wa_web" ? S.trailingBtnAlignRefresh : S.trailingBtnAlign, Be.trailingBtn, We && Be.trailingBtnAlignRefresh, T.isRTL && Be.trailingBtnRTL, Be.trailingBtnNew, T.isRTL && Be.trailingBtnNewRTL, re && Be.trailingBtnActive), {
				onClick: function() {
					Me();
				},
				"data-testid": void 0,
				children: Ye
			}))
		})), c.jsx(o("WAFlowsContextualMenu.react").WAFContextualMenu, {
			menuRef: fe,
			isOpen: re,
			onOptionSelect: Ae,
			onVisibilityChange: oe,
			onClose: function() {
				return oe(!1);
			}
		})] }) })), _t = ot && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight), { children: c.jsx("button", babelHelpers.extends({
			onFocus: function() {
				return de("download");
			},
			onBlur: ce,
			"aria-label": Q,
			"aria-haspopup": "true",
			htmlFor: "download_response_button"
		}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight, S.fullWidth, S.customBtn, Be.customBtn, S.trailingBtn, Be.trailingBtn, T.isRTL && Be.trailingBtnRTL, Be.trailingBtnNew, T.isRTL && Be.trailingBtnNewRTL), {
			onClick: Oe,
			"data-testid": void 0,
			children: Je
		})) }));
		return c.jsxs("header", babelHelpers.extends({ id: M(r("WAFlowsContainerElementIDs").NAVBAR_CONTAINER_ID) }, e.props(ze ? S.headerStaticColorResponse : Be.headerStaticColor, qe && S.headerWithProgressIndicator, qe && (te == null ? void 0 : te.isScrolling) === !0 && S.headerWithProgressIndicatorScrolling), {
			ref: be,
			"data-scrollable": "true",
			style: Ie,
			children: [c.jsxs("nav", {
				className: e(o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.fullWidth, S.container, Be.container, qe ? S.containerWithProgressIndicator : S.containerWithoutProgressIndicator, T.hostPlatform !== "web_tooling" && Be.containerPadding),
				style: ke,
				children: [
					ut,
					mt,
					pt,
					T.platform === "wa_web" && ct,
					_t
				]
			}), qe && c.jsx(r("WAFlowsProgressIndicator.react"), {})]
		}));
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(t, n, a, i) {
		var l, s, u = function(t, n) {
			return t != null && t !== n ? S.swappableShow : S.swappableShowImmediatelly;
		}, d = function() {
			return S.swappableHide;
		}, m = function(t, r) {
			return n.title === t ? u(r, n.title) : d();
		};
		return c.jsxs("div", babelHelpers.extends({ dir: "auto" }, (e || (e = r("stylex"))).props(t !== "wa_web" ? o("WDSFlex.stylex").wdsFlex.flexRowCenter : o("WDSFlex.stylex").wdsFlex.alignStart, o("WDSFlex.stylex").wdsFlex.justifyCenter, S.positionRelative, S.fullHeight, a && o("WDSMargins.stylex").wdsMargins.marginHor12), { children: [n.rotatingTitleA !== null && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
			role: "heading",
			dataTestId: "wa-flows-navbar-title",
			ariaLabel: n.rotatingTitleA,
			ariaHidden: n.title !== n.rotatingTitleA,
			text: (l = n.rotatingTitleA) != null ? l : "",
			textAlign: t === "wa_web" ? "start" : "center",
			fontWeight: t === "ios" ? "semibold" : "medium",
			responsiveFontContainerXStyle: [
				S.fullHeight,
				t === "ios" && S.fullWidth,
				S.screenTitleLabel,
				i,
				S.swappable,
				m(n.rotatingTitleA, n.rotatingTitleB)
			],
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.NAVBAR_TITLE
		}, "titleA"), n.rotatingTitleB !== null && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
			role: "heading",
			ariaLabel: n.rotatingTitleB,
			ariaHidden: n.title !== n.rotatingTitleB,
			text: (s = n.rotatingTitleB) != null ? s : "",
			textAlign: t === "wa_web" ? "start" : "center",
			fontWeight: t === "ios" ? "semibold" : "medium",
			responsiveFontContainerXStyle: [
				S.fullHeight,
				t === "ios" && S.fullWidth,
				S.screenTitleLabel,
				i,
				S.swappable,
				m(n.rotatingTitleB, n.rotatingTitleA)
			],
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.NAVBAR_TITLE
		}, "titleB")] }));
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e, t, n) {
		var r = e === "back" ? I + "px" : "0px";
		return t ? { gridTemplateColumns: r + " auto " + I + "px" } : n == null ? { gridTemplateColumns: "auto " + I + "px " + I + "px" } : { gridTemplateColumns: r + " auto " + I + "px " + I + "px" };
	}
	function $(e) {
		var t = {
			android: L,
			ios: R,
			wa_web: E
		};
		return t[e];
	}
	function P(e, t, n, r, a) {
		var i = e ? o("WAFlowsShoppingNavigationUtils").getShoppingFlowTitle(t, n == null ? void 0 : n.layoutType, a) : void 0;
		return i != null ? i : t != null && t !== "" ? t : n != null && n.id != null && n.title != null ? o("WAFlowsStateParser").parsePropertyValue(n.title, r, n.id) : null;
	}
	l.default = T;
}), 226);
