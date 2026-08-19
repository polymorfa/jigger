__d("CTXChatBuilderWAFlowsUtils", [
	"fbt",
	"AdsAdvantageAudienceUtils",
	"AdsGetStandardTemplateDefaultJSONForWhatsAppFlows",
	"AdsInterfacesLogger",
	"AdsMessengerPageWelcomeMessageDataManager",
	"AdsMessengerVisualEditorLandingScreenType",
	"AdsMessengerVisualEditorUtils",
	"AdsUEditorHostIDs",
	"AdsUniformValue",
	"CTWAAdsOptimizationStoreUtils",
	"CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation.graphql",
	"ClickToWhatsAppFeatureGating",
	"GeoToast.react",
	"WAMFlowsHSMEditorUtils",
	"XFBWAFlowsTemplateUtils.facebook",
	"adsMessengerDataModelGetWelcomeMessage",
	"adsMessengerDataModelSetInThreadCarouselIsEnabled",
	"adsMessengerDataModelSetInThreadCarouselProducts",
	"adsMessengerDataModelSetLandingScreenType",
	"adsMessengerDataModelSetWelcomeMessage",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"setByPath",
	"tryParseJSONMixed",
	"useGeoToaster"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback;
	function m(e, t, n, a, i, l, s, u, c, d, m, _, f, g, h, y, C, b, v) {
		var S = o("react-compiler-runtime").c(20), R;
		return S[0] !== h || S[1] !== g || S[2] !== i || S[3] !== m || S[4] !== d || S[5] !== y || S[6] !== l || S[7] !== c || S[8] !== _ || S[9] !== s || S[10] !== n || S[11] !== a || S[12] !== t || S[13] !== u || S[14] !== C || S[15] !== f || S[16] !== e || S[17] !== b || S[18] !== v ? (R = function(R, L, E, k, I, T, D, x) {
			var S, $, P;
			((S = e.text_format) == null || (S = S.message) == null || (S = S.automated_greeting_message_cta) == null || (S = S.wa_flow) == null ? void 0 : S.flow_data) != null ? P = e : P = r("adsMessengerDataModelSetLandingScreenType")(r("AdsGetStandardTemplateDefaultJSONForWhatsAppFlows")(t, n, a, i, l, s, b, v), r("AdsMessengerVisualEditorLandingScreenType").CTWA_FLOWS);
			var N = ($ = P.text_format) == null || ($ = $.message) == null || ($ = $.automated_greeting_message_cta) == null || ($ = $.wa_flow) == null || ($ = $.flow_data) == null ? void 0 : $.flow_id;
			u(N);
			var M = R !== c;
			if (!(t == null && v == null) && n != null) if ((M || d === !0) && R != null && L != null) {
				var w = babelHelpers.extends({}, P);
				if (m) {
					var A = o("CTWAAdsOptimizationStoreUtils").getIsWhatsAppNumberCloudAPI(a, t), F = o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(A);
					w = p(w, k, E, R, f, F ? D : null, F ? x : null);
				}
				_(w), r("AdsMessengerPageWelcomeMessageDataManager").createCustomTemplate(g, String(a), JSON.stringify(w), E != null ? E : C, r("AdsUEditorHostIDs").EDITING, h, !1, y);
			} else {
				var O;
				if (((O = P.text_format.message.automated_greeting_message_cta) == null || (O = O.wa_flow) == null ? void 0 : O.flow_data) != null) {
					var B = babelHelpers.extends({}, P);
					if (m && c != null) {
						var W = o("CTWAAdsOptimizationStoreUtils").getIsWhatsAppNumberCloudAPI(a, t), q = o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(W);
						B = p(B, k, E != null ? E : C, c, f, q ? D : null, q ? x : null);
					}
					_(B);
				}
			}
		}, S[0] = h, S[1] = g, S[2] = i, S[3] = m, S[4] = d, S[5] = y, S[6] = l, S[7] = c, S[8] = _, S[9] = s, S[10] = n, S[11] = a, S[12] = t, S[13] = u, S[14] = C, S[15] = f, S[16] = e, S[17] = b, S[18] = v, S[19] = R) : R = S[19], R;
	}
	function p(e, t, n, o, a, i, l) {
		var s, u = e == null || (s = e.text_format) == null || (s = s.message) == null || (s = s.automated_greeting_message_cta) == null || (s = s.wa_flow) == null ? void 0 : s.automated_response_data, c = u === null;
		return r("setByPath")(e, [
			"text_format",
			"message",
			"automated_greeting_message_cta",
			"wa_flow"
		], babelHelpers.extends({
			cta: t,
			flow_data: {
				flow_id: o,
				last_update_time: Date.now(),
				waba_id: a
			},
			title: n
		}, c ? { automated_response_data: null } : i != null ? { automated_response_data: {
			text: i,
			cta_info: l != null ? l : null
		} } : {})), r("setByPath")(e, [
			"text_format",
			"message",
			"automated_greeting_message_cta",
			"type"
		], "flow"), e;
	}
	function _(e) {
		var t, n;
		return (t = (n = e.text_format) == null || (n = n.message.automated_greeting_message_cta) == null || (n = n.wa_flow) == null || (n = n.flow_data) == null ? void 0 : n.last_update_time) != null ? t : 0;
	}
	function f(e, t, n) {
		var a = o("react-compiler-runtime").c(4), i;
		return a[0] !== n || a[1] !== e || a[2] !== t ? (i = function(i) {
			var a = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t), l = r("adsMessengerDataModelGetWelcomeMessage")(a);
			l !== i && (r("setByPath")(a, ["user_edit"], !0), r("setByPath")(a, ["welcome_message_edited"], !0), r("setByPath")(a, ["has_ai_generated_welcome_message"], !1), n(r("adsMessengerDataModelSetWelcomeMessage")(a, new (r("AdsUniformValue"))(i))));
		}, a[0] = n, a[1] = e, a[2] = t, a[3] = i) : i = a[3], i;
	}
	function g(e, t, n) {
		var a = o("react-compiler-runtime").c(4), i;
		return a[0] !== n || a[1] !== e || a[2] !== t ? (i = function(i) {
			var a, l, s = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t), u = (a = s.text_format) == null || (a = a.message) == null || (a = a.automated_greeting_message_cta) == null || (a = a.wa_flow) == null ? void 0 : a.automated_response_data;
			(u == null ? void 0 : u.text) !== i && (r("setByPath")(s, [
				"text_format",
				"message",
				"automated_greeting_message_cta",
				"wa_flow",
				"automated_response_data"
			], {
				text: i,
				cta_info: (l = u == null ? void 0 : u.cta_info) != null ? l : null
			}), n(s));
		}, a[0] = n, a[1] = e, a[2] = t, a[3] = i) : i = a[3], i;
	}
	function h(e, t, n) {
		var a = o("react-compiler-runtime").c(4), i;
		return a[0] !== n || a[1] !== e || a[2] !== t ? (i = function(i) {
			var a, l, s = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t), u = (a = s.text_format) == null || (a = a.message) == null || (a = a.automated_greeting_message_cta) == null || (a = a.wa_flow) == null ? void 0 : a.automated_response_data;
			r("setByPath")(s, [
				"text_format",
				"message",
				"automated_greeting_message_cta",
				"wa_flow",
				"automated_response_data"
			], {
				text: (l = u == null ? void 0 : u.text) != null ? l : null,
				cta_info: i != null ? i : null
			}), n(s);
		}, a[0] = n, a[1] = e, a[2] = t, a[3] = i) : i = a[3], i;
	}
	function y(e, t, n, a, i) {
		var l = o("react-compiler-runtime").c(6), s;
		return l[0] !== i || l[1] !== a || l[2] !== n || l[3] !== e || l[4] !== t ? (s = function(s) {
			var l = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t);
			r("setByPath")(l, [
				"text_format",
				"message",
				"automated_greeting_message_cta",
				"wa_flow",
				"automated_response_data"
			], s ? {
				text: a,
				cta_info: i != null ? i : null
			} : null), n(l);
		}, l[0] = i, l[1] = a, l[2] = n, l[3] = e, l[4] = t, l[5] = s) : s = l[5], s;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = function(n, o) {
			var t = n, a = r("adsMessengerDataModelSetInThreadCarouselIsEnabled")(t, o);
			o || (a = r("adsMessengerDataModelSetInThreadCarouselProducts")(a, [])), e(a);
		}, t[0] = e, t[1] = n) : n = t[1], n;
	}
	function b(e, t) {
		var n = o("react-compiler-runtime").c(3), a;
		return n[0] !== e || n[1] !== t ? (a = function() {
			var n = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t != null ? t : "");
			return r("adsMessengerDataModelGetWelcomeMessage")(n);
		}, n[0] = e, n[1] = t, n[2] = a) : a = n[2], a;
	}
	function v(e) {
		if (e == null) return !1;
		var t = r("tryParseJSONMixed")(e);
		if (t == null || typeof t != "object") return !1;
		var n = t.screens;
		if (!Array.isArray(n)) return !1;
		for (var o of n) if (!(o == null || typeof o != "object")) {
			var a = o.layout;
			if (!(a == null || typeof a != "object")) {
				var i = a.children;
				if (Array.isArray(i)) {
					var l = i[0];
					if (!(l == null || typeof l != "object")) {
						var s = l.children;
						if (Array.isArray(s)) {
							for (var u of s) if (u != null && typeof u == "object" && u.required === !0) return !0;
						}
					}
				}
			}
		}
		return !1;
	}
	function S() {
		return e !== void 0 ? e : e = n("CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation.graphql");
	}
	function R(e, t, n, a, l, u, d, m, p, _, f, g, h, y, C) {
		var b = o("react-compiler-runtime").c(17), S = r("useGeoToaster")(), R = S.add, E;
		return b[0] !== n || b[1] !== R || b[2] !== C || b[3] !== y || b[4] !== d || b[5] !== p || b[6] !== e || b[7] !== a || b[8] !== l || b[9] !== f || b[10] !== h || b[11] !== g || b[12] !== _ || b[13] !== m || b[14] !== (u == null ? void 0 : u.title) || b[15] !== t ? (E = function() {
			var b;
			if (!(a == null || t == null)) {
				if (r("AdsInterfacesLogger").log({
					data: h,
					eventName: "ctwa_flows_am_save_flow_click"
				}), !v(a)) {
					R(c.jsx(r("GeoToast.react"), {
						description: s._(
							/*BTDS*/
							""
						),
						hasIcon: !0,
						heading: s._(
							/*BTDS*/
							""
						),
						status: "error"
					})), r("AdsInterfacesLogger").log({
						data: h,
						eventName: "ctwa_flows_am_save_flow_validation_error"
					});
					return;
				}
				var S = (b = u == null ? void 0 : u.title) != null ? b : s._(
					/*BTDS*/
					""
				).toString();
				d({
					onCompleted: function(t, n) {
						if (n != null && n.length > 0) {
							for (var e of n) R(c.jsx(r("GeoToast.react"), {
								description: e.message,
								hasIcon: !0,
								heading: s._(
									/*BTDS*/
									""
								),
								status: "error"
							}));
							r("AdsInterfacesLogger").log({
								data: babelHelpers.extends({}, h, { message: n.map(L).join("; ") }),
								eventName: "ctwa_flows_am_save_flow_error"
							});
							return;
						}
						m == null || m(t.xfb_wa_flows_hsm_save_flow.id, a, l, S, "NAVIGATE", p, y, C), r("AdsInterfacesLogger").log({
							data: h,
							eventName: "ctwa_flows_am_save_flow_success"
						}), _("transition");
					},
					onError: function(t) {
						var e, n, o;
						r("AdsInterfacesLogger").log({
							data: babelHelpers.extends({}, h, { message: ((e = t.name) != null ? e : "Error") + ": " + t.message + " | description: " + ((n = t.description) != null ? n : "") + " | stack: " + ((o = t.stack) != null ? o : "") }),
							eventName: "ctwa_flows_am_save_flow_error"
						}), R(c.jsx(r("GeoToast.react"), {
							description: t.description,
							hasIcon: !0,
							heading: s._(
								/*BTDS*/
								""
							),
							status: "error"
						}));
					},
					variables: { input: {
						ad_account_id: n,
						ad_objective: o("AdsAdvantageAudienceUtils").convertObjectiveForGraphQL(g),
						creation_source: "ADS_MANAGER_CTWA",
						flow_id: f ? null : e,
						flow_json: o("WAMFlowsHSMEditorUtils").formatFlowjForDisplay(a),
						flow_template_name: r("nullthrows")(o("XFBWAFlowsTemplateUtils.facebook").fromJSEnum("Custom form"), "Unexpected null value [" + i.id + "][#1]"),
						template_category: "MARKETING",
						template_name: l,
						waba_id: t
					} }
				});
			}
		}, b[0] = n, b[1] = R, b[2] = C, b[3] = y, b[4] = d, b[5] = p, b[6] = e, b[7] = a, b[8] = l, b[9] = f, b[10] = h, b[11] = g, b[12] = _, b[13] = m, b[14] = u == null ? void 0 : u.title, b[15] = t, b[16] = E) : E = b[16], u == null || u.title, E;
	}
	function L(e) {
		return e.message;
	}
	l.useOnSaveSuccessCallback = m, l.getFetchKeyFlowData = _, l.useOnGreetingTextChangeCallback = f, l.useOnAutomatedResponseTextChangeCallback = g, l.useOnAutomatedResponseCTAChangeCallback = h, l.useOnCompletionMessageToggleCallback = y, l.useGetOnAdsMessagingDestinationInThreadCarouselChangeCallback = C, l.useGetGreetingTextCallback = b, l.flowHasRequiredField = v, l.getSaveFlowMutation = S, l.useGetCommitFlowMutationCallback = R;
}), 226);
