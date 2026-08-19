__d("WAFlowsWebPreview.react", [
	"fbt",
	"CurrentLocale",
	"GeoFlexbox.react",
	"GeoSpinner.react",
	"Promise",
	"WAFlowJSONValidationError",
	"WAFlowsBridgeEvents",
	"WAFlowsCalendarPickerDialog.react",
	"WAFlowsErrorOverlay.react",
	"WAFlowsNavbar.react",
	"WAFlowsPreviewData.react",
	"WAFlowsPreviewProvider.react",
	"WAFlowsProvider.react",
	"WAFlowsScreenError.react",
	"WAFlowsSnackbar.react",
	"WAFlowsTemplate.react",
	"WAFlowsTypes",
	"WAFlowsUsePreview",
	"WAFlowsUseRootCSSClassNames",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"WAFlowsWebPreviewActionHandler",
	"WAFlowsWebPreviewNativeComponentsHandler",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsPreview.react",
	"cr:13658",
	"emptyFunction",
	"goURIOnWindow",
	"joinClasses",
	"react",
	"stylex",
	"tryParseJSONMixed",
	"useCounter",
	"uuidv4"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"flow_action",
		"flow_action_payload",
		"flow_id",
		"flow_status"
	], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useMemo, g = p.useRef, h = p.useState, y = {
		androidDarkThemeBottomSheet: {
			backgroundColor: "x14ohck5",
			$$css: !0
		},
		androidLightThemeBottomSheet: {
			backgroundColor: "x12peec7",
			$$css: !0
		},
		container: {
			alignItems: "x6s0dn4",
			flexGrow: "x1iyjqo2",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		iosDarkThemeBottomSheet: {
			backgroundColor: "xy3hdek",
			$$css: !0
		},
		iosLightThemeBottomSheet: {
			backgroundColor: "x1kdfowe",
			$$css: !0
		}
	}, C = {
		dark: n("cr:13658") == null ? void 0 : n("cr:13658").WDSDarkThemeAndroid,
		light: n("cr:13658") == null ? void 0 : n("cr:13658").WDSLightThemeAndroid
	}, b = {
		dark: n("cr:13658") == null ? void 0 : n("cr:13658").WDSDarkThemeIOS,
		light: n("cr:13658") == null ? void 0 : n("cr:13658").WDSLightThemeIOS
	};
	function v(e) {
		var t, n = e.completionMessageCTAType, a = e.completionMessageText, l = e.ctwaImageCreative, s = e.ctwaWelcomeMessage, u = e.endpointURI, c = e.flowCreationSource, d = e.flowEntryPoint, p = e.flowId, _ = e.flowStatus, g = e.hideBorder, h = e.isCompletionMessageEnabled, C = h === void 0 ? !1 : h, b = e.isScaledPreview, v = b === void 0 ? !1 : b, R = e.onEvent, L = e.onFlowClose, E = e.onNavigate, k = e.showOverlayOnFlowPreview, I = k === void 0 ? !1 : k, T = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), D = T.flowAction, x = T.flowActionPayload, $ = T.flowJSON, P = T.flowToken, N = T.isInitialised, M = T.isPreviewInteractive, w = T.phoneNumber, A = T.platform, F = T.theme, O = f(function() {
			return x != null && D === "navigate" ? btoa(new TextEncoder().encode(JSON.stringify(x)).reduce(function(e, t) {
				return e + String.fromCharCode(t);
			}, "")) : "";
		}, [x, D]), B = {
			environment: {
				biz_jid: "",
				biz_logo: "",
				business_name: "",
				flow_action: D != null ? D : "navigate",
				flow_action_payload: O,
				flow_entry_point: d,
				flow_id: p != null ? p : "",
				flow_json: $ != null ? $ : "",
				flow_status: String(_ != null ? _ : "DRAFT"),
				flow_token: P,
				is_flow_interactive: M,
				public_key: (t = w == null ? void 0 : w.publicKey) != null ? t : ""
			},
			logging: {}
		}, W = f(function() {
			var e, t;
			return (e = (t = r("tryParseJSONMixed")($)) == null ? void 0 : t.data_channel_uri) != null ? e : "";
		}, [$]), q = r("useCounter")(), U = q[0], V = q[1].increment, H = f(function() {
			return [
				M,
				JSON.stringify({ phoneNumber: w }),
				P,
				D,
				W,
				_,
				M && u,
				O,
				U
			].join("-");
		}, [
			M,
			w,
			P,
			D,
			W,
			_,
			u,
			O,
			U
		]), G = A === "android" ? F === "light" ? y.androidLightThemeBottomSheet : y.androidDarkThemeBottomSheet : F === "light" ? y.iosLightThemeBottomSheet : y.iosDarkThemeBottomSheet;
		return N ? $ == null ? null : m.jsx(o("WAFlowsPreviewData.react").WAFlowsWebPreviewInitDataContextProvider, {
			initialData: B,
			children: m.jsx(S, {
				completionMessageCTAType: n,
				completionMessageText: a,
				ctwaImageCreative: l,
				ctwaWelcomeMessage: s,
				flowCreationSource: c != null ? c : "UNKNOWN",
				flowId: p,
				flowStatus: _ != null ? _ : "DRAFT",
				hideBorder: g,
				isCompletionMessageEnabled: C,
				isScaledPreview: v,
				onEvent: R,
				onFlowClose: L,
				onHideAnimationEnd: V,
				onNavigate: E,
				showOverlayOnFlowPreview: I
			})
		}, H) : m.jsx(r("GeoFlexbox.react"), {
			alignItems: "center",
			grow: 1,
			justifyContent: "center",
			children: m.jsx(o("WAMFlowsPreview.react").WAMFlowsPreview, {
				completionMessageCTAType: n,
				completionMessageText: a,
				ctwaImageCreative: l,
				ctwaWelcomeMessage: s,
				hideBorder: g,
				isCompletionMessageEnabled: C,
				isScaledPreview: v,
				onFlowPreview: r("emptyFunction"),
				platform: A,
				showOverlayOnFlowPreview: I,
				theme: F,
				children: m.jsx(r("GeoFlexbox.react"), {
					alignItems: "center",
					grow: 1,
					justifyContent: "center",
					xstyle: G,
					children: m.jsx(r("GeoSpinner.react"), { loggingName: i.id })
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var a = t.completionMessageCTAType, i = t.completionMessageText, l = t.ctwaImageCreative, s = t.ctwaWelcomeMessage, d = t.flowCreationSource, p = t.flowId, f = t.flowStatus, g = t.hideBorder, v = g === void 0 ? !1 : g, S = t.isCompletionMessageEnabled, L = S === void 0 ? !1 : S, E = t.isScaledPreview, k = E === void 0 ? !1 : E, I = t.onEvent, T = t.onFlowClose, D = t.onHideAnimationEnd, x = t.onNavigate, $ = t.showOverlayOnFlowPreview, P = $ === void 0 ? !1 : $, N = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), M = N.flowJSON, w = N.interactiveEvents, A = N.isPreviewInteractive, F = N.navigate, O = N.platform, B = N.screens, W = N.setInteractiveEvents, q = N.setIsFlowCompleted, U = N.theme, V = N.validationResult, H = o("WAMFlowsFlowProvider.react").useWAMFlow(), G = H.setIsFlowVisible, z = o("WAFlowsWebPreviewNativeComponentsHandler").useHandleMediaSelect(), j = o("WAFlowsPreviewData.react").useWAFlowsWebPreviewInitData(), K = j.initData, Q = j.setInitData, X = h(), Y = X[0], J = X[1];
		_(function() {
			M !== K.environment.flow_json && Q(babelHelpers.extends({}, K, { environment: babelHelpers.extends({}, K.environment, { flow_json: M != null ? M : "" }) }));
		}, [
			M,
			K,
			Q
		]);
		function Z() {
			var t = function(a) {
				var t = a.eventName, i = a.payload;
				return new (c || (c = (n("Promise"))))(function(n) {
					if (I == null || I(t, i), t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsGetFlowData) {
						var a = K.environment, l = a.flow_action, s = a.flow_action_payload, u = a.flow_id, c = a.flow_status, d = babelHelpers.objectWithoutPropertiesLoose(a, e);
						n(babelHelpers.extends({}, d, {
							extension_id: p,
							extension_status: c,
							flow_action: l,
							flow_action_payload: s,
							is_flow_interactive: A
						}));
					}
					if (t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsLearnMore && window.open("https://faq.whatsapp.com/2107457129437300", "_blank").focus(), t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsGetClientAbProps && n(o("WAFlowsWebNativeBridgeClientABPropsContext.react").abPropsFallBackDataForWeb), t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClose && (T != null ? T() : G(!1)), t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsComplete && (q(!0), G(!1)), t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsMediaSelect) {
						var m = i;
						z(m);
					}
					if (t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsDataExchangeDuringNavigation && (i == null ? void 0 : i.screen) != null && typeof i.screen == "string" && A && (x == null || x(i.screen)), t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsInteractivePreviewEvent && A) {
						var _ = i, f = _.error, g = _.request, h = _.response, y = _.status, C = _.statusCode;
						W([].concat(w, [{
							error: f,
							id: r("uuidv4")(),
							request: g,
							response: h,
							status: y,
							statusCode: C
						}]));
					}
					if (t === o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsOpenURL) {
						var b = i;
						r("goURIOnWindow")(window.open("", "_blank"), b.url);
					}
				});
			}, a = new (o("WAFlowsWebPreviewActionHandler")).WAFlowsWebPreviewActionHandler(t, Y), i = [K, !0], l = new Map([[String(o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER), r("WAFlowsCalendarPickerDialog.react")]]);
			return {
				actionOverrides: a,
				flowInitData: i,
				invoke: t,
				lazyLoadedComponents: l,
				onConfigurationChange: J
			};
		}
		var ee = function() {
			G(!0), B.length > 0 && (F(B[0].id), x == null || x(B[0].id));
		}, te = (V == null ? void 0 : V.isValid) === !1, ne = O === "ios" ? b == null ? void 0 : b[U] : C == null ? void 0 : C[U], re = String(r("CurrentLocale").get()).replace("_", "-");
		return m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(ne, y.container), { children: m.jsx(r("WAFlowsProvider.react"), {
			controller: Z(),
			disableStateRestoration: !0,
			draft: f === "DRAFT",
			flowId: p != null ? p : "",
			flowJSON: te ? null : M,
			hostPlatform: "web_tooling",
			locale: re,
			platform: O === "ctwa" ? "android" : O,
			theme: U,
			useMemoryRouter: !0,
			children: m.jsx(o("WAMFlowsPreview.react").WAMFlowsPreview, {
				completionMessageCTAType: a,
				completionMessageText: i,
				ctwaImageCreative: l,
				ctwaWelcomeMessage: s,
				hideBorder: v,
				isCompletionMessageEnabled: L,
				isScaledPreview: k,
				onFlowPreview: ee,
				onHideAnimationEnd: D,
				platform: O,
				showOverlayOnFlowPreview: P,
				theme: U,
				children: m.jsx(R, {
					flowCreationSource: d,
					flowStatus: f
				})
			})
		}) }));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.flowCreationSource, n = e.flowStatus, a = o("WAFlowsUseRootCSSClassNames").useRootCSSClassNames(), i = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), l = i.screens, s = i.validationResult, u = (s == null ? void 0 : s.isValid) === !1, c = f(function() {
			return new Set(l.map(function(e) {
				var t = e.id;
				return t;
			}));
		}, [l]);
		return m.jsxs(m.Fragment, { children: [m.jsx("div", {
			className: r("joinClasses").apply(void 0, a),
			id: "wae-root",
			style: { borderRadius: "inherit" },
			children: u ? m.jsx(E, {
				errorMessage: o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.INVALID_FLOW_JSON,
				flowCreationSource: t
			}) : c.size > 0 && m.jsx(L, { flowStatus: n })
		}), m.jsx("div", { id: "wae-portal" })] });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.flowStatus, n = g(), a = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), i = a.exampleSelectedScreenData, l = a.flowJSON, s = a.isPreviewInteractive, u = a.screens, c = a.selectedScreenData, d = a.selectedScreenId, p = o("WAFlowsUsePreview").useFlowsWebPreview(), f = p.navigate;
		return _(function() {
			d != null && (!s && u.find(function(e) {
				return e.id === d;
			}) != null && f(d, c != null ? c : i), n.current = d);
		}, [
			i,
			s,
			f,
			u,
			c,
			d
		]), l == null ? null : m.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [
				m.jsx(r("WAFlowsTemplate.react"), {
					draft: t === "DRAFT",
					flowJSON: l
				}),
				m.jsx(r("WAFlowsSnackbar.react"), {}),
				m.jsx(r("WAFlowsErrorOverlay.react"), {})
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.errorMessage, n = e.flowCreationSource;
		return m.jsxs(m.Fragment, { children: [m.jsx(r("WAFlowsNavbar.react"), { isLeadGenAIFlow: n === "GEN_AI_LEAD_GEN" }, "navbar"), m.jsx(r("WAFlowsScreenError.react"), { message: t != null ? t : s._(
			/*BTDS*/
			""
		) })] });
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = v;
}), 226);
