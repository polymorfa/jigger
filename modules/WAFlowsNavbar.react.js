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
	"asyncToGeneratorRuntime",
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
		var a, i, l, u, d, b = t.isLeadGenAIFlow, v = b === void 0 ? !1 : b, R = t.isLoading, L = R === void 0 ? !1 : R, E = t.isShoppingFlow, I = E === void 0 ? !1 : E, T = o("WAFlowsEnvContext.react").useWAFlowsEnv(), N = T.env, M = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), w = M.flowInstanceId, A = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), F = A.flowInitData, O = F[0], B = (a = O == null ? void 0 : O.environment.is_flow_interactive) != null ? a : !0, W = o("WAFlowsConfigurationContext.react").useWAFlowsConfiguration(), q = W.hideContextMenu, U = W.responseNavbarAction, V = (i = O == null ? void 0 : O.environment.business_name) != null ? i : "", H = o("WAFlowsResponseHandler").isResponseFlow(O), G = o("WAFlowsWebNativeBridgeClientABPropsContext.react").useFetchClientABProps(), z = H && (G == null ? void 0 : G.flows_response_close_button_enabled.boolValue) === !0, j = [
			o("WAFlowsLocalization").getNavBarLeadingButtonAriaLabel(),
			z ? o("WAFlowsLocalization").getNavBarCloseResponseButtonAriaLabel() : o("WAFlowsLocalization").getNavBarCloseButtonAriaLabel(),
			o("WAFlowsLocalization").getNavBarTrailingButtonAriaLabel()
		], K = j[0], Q = j[1], X = j[2], Y = o("WAFlowsStateProvider.react").useWAFlowsState(), J = Y.internal, Z = J.isOverlayVisible, ee = Z === void 0 ? !1 : Z, te = J.navBarConfig.title, ne = J.scrollConfig, re = y(!1), oe = re[0], ae = re[1], ie = y(0), le = ie[0], se = ie[1], ue = r("useVirtualFocus")(), ce = ue.focusedButton, de = ue.handleBlur, me = ue.handleFocus, pe = r("useCurrentScreenMeta")(), _e = h(null), fe = h(null), ge = h(null), he = h(null), ye = h(null), Ce = h(null), be = h(null), ve = h(null), Se = h(0), Re = o("WAFlowsNavigationUtils").useLeadingBtnState(), Le = Re[0], Ee = Re[1], ke = r("useForceUpdate")(), Ie, Te = N.hostPlatform !== "web_tooling" && N.platform === "ios" ? { paddingTop: ((l = G == null || (u = G.flows_ios_native_grabber_height) == null ? void 0 : u.numValue) != null ? l : 15) + "px" } : void 0, De = y({
			title: null,
			rotatingTitleA: null,
			rotatingTitleB: null
		}), xe = De[0], $e = De[1], Pe = he.current, Ne = ye.current;
		_(function() {
			var e, t = P(I, te, pe, Y.external, (e = Y.internal) == null ? void 0 : e.shopping);
			$e(function(e) {
				return babelHelpers.extends({}, e, { title: t }, e.title === e.rotatingTitleB && t !== e.title ? { rotatingTitleA: t } : { rotatingTitleB: t });
			});
		}, [
			te,
			pe,
			Y.external,
			I,
			(d = Y.internal) == null ? void 0 : d.shopping
		]);
		var Me = o("WAFlowsNavigationUtils").useBackOrCloseNavigationClick(), we = function() {
			var e = !oe;
			ae(e), oe || A.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsCloseContextMenu,
				payload: null,
				hasCallback: !1
			});
		}, Ae = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = {
					LEARN_MORE: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsLearnMore,
					HELP: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsContextualHelp,
					REPORT: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsSpamReport
				}, n = t[e];
				if (n != null) {
					yield A.invoke({
						eventName: n,
						payload: null,
						fallBackDataForWeb: {},
						hasCallback: !1
					});
					return;
				}
				if (e === "REPORT_ITEM") {
					var r;
					yield o("WAFlowsShoppingNavigationUtils").getFlowsShoppingReportItemJSBridge(Y.external[(r = pe == null ? void 0 : pe.id) != null ? r : ""], A.invoke);
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			A,
			pe == null ? void 0 : pe.id,
			Y.external
		]);
		_(function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield A.invoke({
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
		}, [A]);
		var Fe = m(function(e) {
			Ae(e);
		}, [Ae]), Oe = p(o("WAFlowsStateProvider.react").FlowStateDispatchContext), Be = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = A.flowInitData, t = e[0];
			(t == null ? void 0 : t.environment.flow_id) != null && Oe(yield A.actionOverrides.downloadResponseActionHandler({
				name: o("WAFlowsActionHandlerTypes").WELJActionType.DOWNLOAD_RESPONSES,
				flowId: t.environment.flow_id
			}));
		}), [
			A.actionOverrides,
			A.flowInitData,
			Oe
		]), We = $(N.platform);
		o("useWAFlowsClickOutsideOfExcludedNode.react").useWAFlowsClickOutsideOfExcludedNode(oe, function(e) {
			return ae(!1);
		}, [ge, fe]);
		var qe = N.platform === "ios", Ue = o("WAFlowsProgressIndicatorUtils").isProgressIndicatorSupported(I, B, H), Ve = m(function() {
			Ee(babelHelpers.extends({}, Le, { isLeadingBtnAnimating: !1 }));
		}, [Le, Ee]), He = function(t) {
			return Le.prevLeadingBtn && Le.prevLeadingBtn !== t ? S.swappableShow : S.swappableShowImmediatelly;
		}, Ge = function(t) {
			var e = Le.prevLeadingBtn === t;
			return e && (N.platform !== "wa_web" || Le.prevLeadingBtn !== "close") && S.swappableHide;
		}, ze = function(t, n) {
			return n === !0 || Le.leadingBtn === t ? He(t) : Ge(t);
		}, je = g(function() {
			return H && (G == null ? void 0 : G.flows_response_flat_list_enabled.boolValue) === !0;
		}, [H, G]);
		_(function() {
			return Pe == null || Pe.addEventListener("animationend", Ve), Ne == null || Ne.addEventListener("animationend", Ve), function() {
				Pe == null || Pe.removeEventListener("animationend", Ve), Ne == null || Ne.removeEventListener("animationend", Ve);
			};
		}, [
			Pe,
			Ne,
			Ve
		]), _(function() {
			if (ee) {
				var e;
				(e = _e.current) == null || e.focus();
			}
		}, [ee]);
		var Ke = c.jsx(r("WAFlowsIcon.react"), {
			id: N.platform === "ios" ? "waf_chevron_primary" : "waf_directional_arrow_android",
			altText: s._(
				/*BTDS*/
				""
			),
			xstyle: [
				S.swappable,
				We.leadingBtnBackIcon,
				We.btnIconNew,
				N.isRTL ? S.backButtonOrientation : {},
				ze("back"),
				ce === "back" && We.focusBtnColor
			],
			responsiveFontContainerXStyle: [
				S.fullHeight,
				S.fullWidth,
				S.leadingBtnBackIconWrapper,
				We.clickableContainer
			],
			"data-testid": void 0,
			ref: ye
		}), Qe = c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
			text: Q.toString(),
			xstyle: [
				S.swappable,
				S.leftLabel,
				We.leftLabel,
				We.leftLabelNew,
				ze("close")
			],
			textAlign: "start",
			fontWeight: "italic",
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.NAVBAR_CLOSE,
			responsiveFontContainerXStyle: S.fullHeight,
			dataTestId: "wa-flows-navbar-leading-button-content-cancel",
			ref: he
		}), Xe = function(t) {
			return c.jsx(r("WAFlowsIcon.react"), {
				id: "waf_cross",
				altText: Q.toString(),
				xstyle: [
					S.swappable,
					We.leadingBtnCloseIcon,
					t === !0 ? S.swappableShowImmediatelly : ze("close", t),
					ce === "close" && We.focusBtnColor
				],
				responsiveFontContainerXStyle: [
					S.fullHeight,
					S.fullWidth,
					S.leadingBtnBackIconWrapper,
					We.clickableContainer
				],
				"data-testid": void 0,
				ref: ye
			});
		}, Ye = c.jsx(r("WAFlowsIcon.react"), {
			id: qe ? "waf_contextual_menu_ui_refresh" : "waf_more_horiz_circle",
			altText: s._(
				/*BTDS*/
				""
			),
			xstyle: [
				We.trailingBtnIcon,
				ce === "menu" && We.focusBtnColor,
				qe ? We.btnIconUIRefresh : We.btnIconNew
			],
			responsiveFontContainerXStyle: [S.trailingBtnBackIconWrapper, We.clickableContainer],
			ref: Ce
		}), Je = qe ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(We.btnIconUIRefreshWrapper), { children: Ye })) : Ye, Ze = c.jsx(r("WAFlowsIcon.react"), {
			id: U === "download" ? "waf_download_icon" : "waf_share",
			altText: U === "download" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			xstyle: [
				We.trailingBtnIcon,
				We.btnIconNew,
				ce === "download" && We.focusBtnColor
			],
			responsiveFontContainerXStyle: [S.trailingBtnBackIconWrapper],
			ref: Ce
		});
		if (Le.leadingBtn === "back" ? be = ye : Le.leadingBtn === "close" && (be = N.platform === "ios" ? he : ye), f(function() {
			var e = null, t = null;
			if (be !== null) {
				var n;
				e = (n = be.current) == null || (n = n.getBoundingClientRect()) == null ? void 0 : n.width, be === he && (le === 0 ? se(e != null ? e : C) : e = le);
			}
			if (Ce !== null) {
				var r;
				t = (r = Ce.current) == null || (r = r.getBoundingClientRect()) == null ? void 0 : r.width;
			}
			var o = Math.max(e != null ? e : 0, t != null ? t : 0), a;
			o > 0 && (a = o), N.hostPlatform === "web_tooling" && N.platform === "ios" && (a = 60), a != null && Se.current !== a && (Se.current = a, Le.leadingBtn === "close" && ke());
		}, []), Se.current > 0) {
			var et = H && N.platform === "android";
			Ie = N.platform === "wa_web" ? x(Le.leadingBtn, H, xe.title) : { gridTemplateColumns: et ? k + "px auto " + k + "px" : Se.current + "px auto " + Se.current + "px" };
		}
		var tt = r("usePrevious")(oe), nt = Y.internal.navBarConfig, rt = h();
		_(function() {
			oe !== tt && Y.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.READY && (oe ? (rt.current = nt, Oe(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: nt.title,
				backButtonAction: o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_NAVBAR_CONTEXT_MENU
			}))) : rt.current && (Oe(o("WAFlowsWELJActionCreators").createConfigNavbarAction(rt.current)), rt.current = null));
		}, [
			Oe,
			oe,
			tt,
			Y.internal.status,
			nt
		]);
		var ot = (!o("WAFlowsUtilityConstants").LEAD_GEN_BOT_BUSINESSES.includes(V) || v) && !H && !q, at = H && (O == null ? void 0 : O.environment.response_viewer) === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB && N.platform !== "wa_web" && (G == null ? void 0 : G.flows_response_download_button_enabled.boolValue) === !0, it = Le.leadingBtn === "back" || Le.isLeadingBtnAnimating, lt = N.platform !== "wa_web" || it, st = N.platform === "ios" ? Qe : Xe(), ut = N.platform === "wa_web" ? Le.leadingBtn === "back" : !0, ct = lt && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.fullHeight]), { children: c.jsxs("button", babelHelpers.extends({
			onFocus: function() {
				return me("back");
			},
			onBlur: de,
			"data-testid": void 0,
			"aria-label": Le.leadingBtn === "back" ? K : Q
		}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.customBtn, We.customBtn, S.fullHeight, S.fullWidth), {
			disabled: Le.leadingBtn === "close" && N.platform === "wa_web",
			onClick: function() {
				de(), Me();
			},
			ref: _e,
			children: [(Le.leadingBtn === "back" || Le.isLeadingBtnAnimating) && Ke, ut && (Le.leadingBtn === "close" || Le.isLeadingBtnAnimating) && st]
		})) })), dt = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.fullHeight]), { children: c.jsx("button", babelHelpers.extends({
			onFocus: function() {
				return me("close");
			},
			onBlur: de,
			"data-testid": void 0,
			"aria-label": Q
		}, e.props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.customBtn, We.customBtn, S.fullHeight, S.fullWidth), {
			onClick: function() {
				return void A.invoke({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClose,
					payload: null,
					fallBackDataForWeb: {},
					hasCallback: !1
				});
			},
			ref: _e,
			children: Xe(!0)
		})) })), mt = N.platform === "wa_web" && ut && (Le.leadingBtn === "close" || Le.isLeadingBtnAnimating), pt = D(N.platform, xe, mt, We.screenTitleLabel), _t = ot && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight, N.platform === "wa_web" && o("WDSMargins.stylex").wdsMargins.marginHor12), { children: L ? c.jsx(r("WAFlowsGlobalLoader.react"), { small: !0 }, "loader") : c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x5yr21d xh8yej3" }
		}[(N.platform !== "wa_web") << 0], {
			ref: fe,
			children: c.jsx("button", babelHelpers.extends({
				onFocus: function() {
					return me("menu");
				},
				onBlur: de,
				"aria-label": X,
				"aria-haspopup": "true",
				"aria-expanded": oe,
				htmlFor: "contextual_menu"
			}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight, S.fullWidth, S.customBtn, We.customBtn, S.trailingBtn, qe || N.platform === "wa_web" ? S.trailingBtnAlignRefresh : S.trailingBtnAlign, We.trailingBtn, qe && We.trailingBtnAlignRefresh, N.isRTL && We.trailingBtnRTL, We.trailingBtnNew, N.isRTL && We.trailingBtnNewRTL, oe && We.trailingBtnActive), {
				onClick: function() {
					we();
				},
				"data-testid": void 0,
				children: Je
			}))
		})), c.jsx(o("WAFlowsContextualMenu.react").WAFContextualMenu, {
			menuRef: ge,
			isOpen: oe,
			onOptionSelect: Fe,
			onVisibilityChange: ae,
			onClose: function() {
				return ae(!1);
			}
		})] }) })), ft = at && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight), { children: c.jsx("button", babelHelpers.extends({
			onFocus: function() {
				return me("download");
			},
			onBlur: de,
			"aria-label": X,
			"aria-haspopup": "true",
			htmlFor: "download_response_button"
		}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.justifyEnd, S.fullHeight, S.fullWidth, S.customBtn, We.customBtn, S.trailingBtn, We.trailingBtn, N.isRTL && We.trailingBtnRTL, We.trailingBtnNew, N.isRTL && We.trailingBtnNewRTL), {
			onClick: Be,
			"data-testid": void 0,
			children: Ze
		})) }));
		return c.jsxs("header", babelHelpers.extends({ id: w(r("WAFlowsContainerElementIDs").NAVBAR_CONTAINER_ID) }, e.props(je ? S.headerStaticColorResponse : We.headerStaticColor, Ue && S.headerWithProgressIndicator, Ue && (ne == null ? void 0 : ne.isScrolling) === !0 && S.headerWithProgressIndicatorScrolling), {
			ref: ve,
			"data-scrollable": "true",
			style: Te,
			children: [c.jsxs("nav", {
				className: e(o("WDSFlex.stylex").wdsFlex.flexRowCenter, S.fullWidth, S.container, We.container, Ue ? S.containerWithProgressIndicator : S.containerWithoutProgressIndicator, N.hostPlatform !== "web_tooling" && We.containerPadding),
				style: Ie,
				children: [
					ct,
					pt,
					_t,
					N.platform === "wa_web" && dt,
					ft
				]
			}), Ue && c.jsx(r("WAFlowsProgressIndicator.react"), {})]
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
