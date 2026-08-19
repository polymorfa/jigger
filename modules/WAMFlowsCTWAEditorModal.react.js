__d("WAMFlowsCTWAEditorModal.react", [
	"fbt",
	"AdsAPIObjectives",
	"AdsAdvantageAudienceUtils",
	"AdsInterfacesLogger",
	"CTWAAdsOptimizationStoreUtils",
	"CTXChatBuilderWAFlowsConstants",
	"CTXChatBuilderWAFlowsUtils",
	"ClickToWhatsAppFeatureGating",
	"CometPlaceholder.react",
	"CometRelay",
	"GeoBaseText.react",
	"GeoButton.react",
	"GeoCancelButton.react",
	"GeoFlexbox.react",
	"GeoIcon.react",
	"GeoModal.react",
	"GeoModalFooter.react",
	"GeoModalHeader.react",
	"GeoTab.react",
	"GeoTabGroup.react",
	"GeoTooltip.react",
	"GeoVStack.react",
	"MessagingCTWACreativeImageContainer.react",
	"RelayHooks",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsPreviewDeviceScreen.react",
	"WAFlowsPreviewProvider.react",
	"WAFlowsWebPreview.react",
	"WAMFlowsCTWAEditorModalEditor.react",
	"WAMFlowsCTWAEditorModalQuery.graphql",
	"WAMFlowsCTWAEditorValidationConfig",
	"WAMFlowsCTWAFormLabelTransform",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMEditorProvider",
	"WAMFlowsHSMEditorTypes.react",
	"XFBWhatsAppExtensionStatusUtils.facebook",
	"geoHeight",
	"geoMargin",
	"gkx",
	"isStringNotNullAndNotWhitespaceOnly",
	"isValidHttpURL",
	"meta-brand-light-bulb-filled-16",
	"react",
	"stylex",
	"useGeoTheme",
	"useJSON"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["flowJSONString", "flowRecord"], u = [
		"fetchKey",
		"pageName",
		"profileImageSrc"
	], c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useMemo, y = _.useState, C = {
		form: {
			overflowX: "x6ikm8r",
			overflowY: "x1rife3k",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xf7dkkf",
			width: "x14rvwrp",
			$$css: !0
		},
		noticeContainer: {
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x1g0dm76",
			$$css: !0
		},
		noticeIcon: {
			paddingTop: "x4p5aij",
			$$css: !0
		},
		preview: {
			marginTop: "xr1yuqi",
			marginInlineEnd: "x11t971q",
			marginBottom: "x4ii5y1",
			marginInlineStart: "xvc5jky",
			paddingTop: "x1iorvi4",
			rowGap: "x1ra7mdn",
			"@media (max-height: 1024px)_rowGap": "x13h84su",
			$$css: !0
		},
		previewCntr: {
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			overflowY: "x1odjw0f",
			paddingBottom: "xwib8y2",
			position: "x1n2onr6",
			$$css: !0
		},
		previewContainer: {
			position: "x1n2onr6",
			transform: "x13kth0o",
			$$css: !0
		},
		previewSection: {
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartWidth: "xpilrb4",
			height: "x5yr21d",
			width: "xvue9z",
			$$css: !0
		},
		previewWrapper: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, b = o("CTXChatBuilderWAFlowsUtils").getSaveFlowMutation(), v = c !== void 0 ? c : c = n("WAMFlowsCTWAEditorModalQuery.graphql");
	function S(e) {
		var t, n = e.account, a = e.accountID, l = e.adgroupIDs, u = e.composerState, c = e.destinationType, d = e.editorTab, m = e.errorSpec, _ = e.flowId, g = e.flowStatus, C = e.getGreetingText, v = e.isAutomatedGreetingMessageEnabled, S = e.isDuplicate, L = e.isEditDisabled, E = e.isUnifiedCreation, k = e.isVideoLoading, I = e.objective, T = e.onAdsMessagingDestinationInThreadCarouselChange, D = e.onGreetingTextChange, x = e.onHide, $ = e.onJSONChange, P = e.onSaveSuccess, N = e.optimizationGoal, M = e.page, w = e.pageID, A = e.pageWhatsAppNumberID, F = e.templateName, O = e.videoURL, B = e.wabaId, W = e.welcomeMessage, q = e.welcomeMessageJSON, U = e.whatsAppBusinessPhoneNumberID, V = e.whatsAppBusinessPhoneNumberWabaID, H = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), G = H.flowJSON, z = o("CometRelay").useMutation(b), j = z[0], K = z[1], Q = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(), X = Q.areAllScreensValid, Y = Q.firstScreenId, J = Q.selectedScreen, Z = y(F), ee = Z[0], te = Z[1], ne = y(!0), re = ne[0], oe = ne[1], ae = y(!0), ie = ae[0], le = ae[1], se = J == null ? void 0 : J.privacyPolicyURL, ue = g === "DRAFT", ce = !1, de = h(function() {
			var e;
			return e = {}, e.status = "is_flows_default: " + String(ce) + ", is_prefill_default: " + String(!ce), e;
		}, [ce]), me = f(function() {
			r("AdsInterfacesLogger").log({ eventName: "ctwa_flows_am_edit_cancel_click" });
		}, []), pe = f(function() {
			r("AdsInterfacesLogger").log({
				data: de,
				eventName: "ctwa_flows_am_edit_cancel_click"
			}), x("transition");
		}, [x, de]), _e = o("CTXChatBuilderWAFlowsUtils").useGetCommitFlowMutationCallback(_, B, a, G, ee, J, j, P, Y, x, S, I, de, null, null), fe = ((t = J == null ? void 0 : J.components) != null ? t : []).slice(o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.numberOfFixedComponents), ge = fe.some(function(e) {
			return [
				"CalendarPicker",
				"CheckboxGroup",
				"DatePicker",
				"Dropdown",
				"Image",
				"OptIn",
				"RadioButtonsGroup",
				"TextArea",
				"TextInput"
			].includes(e.flowJSON.type);
		});
		return p.jsx(r("GeoModal.react"), {
			footer: p.jsx(r("GeoModalFooter.react"), {
				primaryButton: p.jsx(r("GeoButton.react"), {
					"data-testid": void 0,
					isDisabled: m !== null || !X || K || !ue && !S || !ge || r("isStringNotNullAndNotWhitespaceOnly")(se) && !r("isValidHttpURL")(se) || !re || !ie,
					isLoading: K,
					label: s._(
						/*BTDS*/
						""
					),
					onClick: _e,
					tooltip: X ? null : p.jsx(r("GeoTooltip.react"), { content: s._(
						/*BTDS*/
						""
					) }),
					variant: "primary"
				}),
				secondaryButton: p.jsx(r("GeoCancelButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					onClick: me
				})
			}),
			header: p.jsx(r("GeoModalHeader.react"), { heading: s._(
				/*BTDS*/
				""
			) }),
			height: 810,
			hideOnBlur: !1,
			hideOnEscape: !1,
			onHide: pe,
			width: 1135,
			children: p.jsx(r("GeoFlexbox.react"), {
				direction: "column",
				xstyle: r("geoHeight").fullHeight,
				children: p.jsx(r("CometPlaceholder.react"), {
					fallback: p.jsx("div", { children: s._(
						/*BTDS*/
						""
					) }),
					name: i.id,
					children: p.jsx(R, {
						account: n,
						accountID: a,
						adgroupIDs: l,
						composerState: u,
						destinationType: c,
						editorTab: d,
						errorSpec: m,
						flowStatus: g != null ? g : "DRAFT",
						flowTemplateName: ee,
						getGreetingText: C,
						isAutomatedGreetingMessageEnabled: v,
						isDuplicate: S,
						isEditDisabled: L,
						isUnifiedCreation: E,
						isVideoLoading: k,
						objective: I,
						onAdsMessagingDestinationInThreadCarouselChange: T,
						onCtwaFlowsAutomatedResponseCTAURLValidationChange: oe,
						onCtwaFlowsAutomatedResponseTextValidationChange: le,
						onGreetingTextChange: D,
						onJSONChange: $,
						optimizationGoal: N,
						page: M,
						pageID: w,
						pageWhatsAppNumberID: A,
						setFlowTemplateName: te,
						shouldShowErrors: !1,
						videoURL: O,
						welcomeMessage: W,
						welcomeMessageJSON: q,
						whatsAppBusinessPhoneNumberID: U,
						whatsAppBusinessPhoneNumberWabaID: V
					})
				})
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n = e.account, a = e.accountID, l = e.adgroupIDs, u = e.composerState, c = e.destinationType, d = e.editorTab, m = e.errorSpec, _ = e.flowId, f = e.flowStatus, g = e.flowTemplateName, h = e.getGreetingText, y = e.isAutomatedGreetingMessageEnabled, C = e.isDuplicate, b = e.isEditDisabled, v = e.isUnifiedCreation, S = e.isVideoLoading, R = e.objective, L = e.onAdsMessagingDestinationInThreadCarouselChange, E = e.onCtwaFlowsAutomatedResponseCTAChange, k = e.onCtwaFlowsAutomatedResponseCTAURLValidationChange, T = e.onCtwaFlowsAutomatedResponseTextChange, D = e.onCtwaFlowsAutomatedResponseTextValidationChange, x = e.onGreetingTextChange, $ = e.onJSONChange, P = e.optimizationGoal, N = e.page, M = e.pageID, w = e.pageWhatsAppNumberID, A = e.setFlowTemplateName, F = e.shouldShowErrors, O = e.videoURL, B = e.welcomeMessage, W = e.welcomeMessageJSON, q = e.whatsAppBusinessPhoneNumberID, U = e.whatsAppBusinessPhoneNumberWabaID, V = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(), H = V.selectedScreen, G = ((t = H == null ? void 0 : H.components) != null ? t : []).slice(o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.numberOfFixedComponents), z = G.some(function(e) {
			return [
				"CalendarPicker",
				"CheckboxGroup",
				"DatePicker",
				"Dropdown",
				"Image",
				"OptIn",
				"RadioButtonsGroup",
				"TextArea",
				"TextInput"
			].includes(e.flowJSON.type);
		});
		return p.jsx(r("GeoFlexbox.react"), {
			direction: "column",
			xstyle: r("geoHeight").fullHeight,
			children: p.jsx(r("CometPlaceholder.react"), {
				fallback: p.jsx("div", { children: s._(
					/*BTDS*/
					""
				) }),
				name: i.id,
				children: p.jsx(I, {
					account: n,
					accountID: a,
					adgroupIDs: l,
					composerState: u,
					containsInputFields: z,
					destinationType: c,
					editorTab: d,
					errorSpec: m,
					flowStatus: f != null ? f : "DRAFT",
					flowTemplateName: g,
					getGreetingText: h,
					isAutomatedGreetingMessageEnabled: y,
					isEditDisabled: b,
					isFlowTemplateInputDisabled: _ != null && !C,
					isUnifiedCreation: v,
					isVideoLoading: S,
					objective: R,
					onAdsMessagingDestinationInThreadCarouselChange: L,
					onCtwaFlowsAutomatedResponseCTAChange: E,
					onCtwaFlowsAutomatedResponseCTAURLValidationChange: k,
					onCtwaFlowsAutomatedResponseTextChange: T,
					onCtwaFlowsAutomatedResponseTextValidationChange: D,
					onGreetingTextChange: x,
					onJSONChange: $,
					optimizationGoal: P,
					page: N,
					pageID: M,
					pageWhatsAppNumberID: w,
					setFlowTemplateName: A,
					shouldShowErrors: F,
					videoURL: O,
					welcomeMessage: B,
					welcomeMessageJSON: W,
					whatsAppBusinessPhoneNumberID: q,
					whatsAppBusinessPhoneNumberWabaID: U
				})
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n, a = t.flowJSONString, i = t.flowRecord, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), u = s.setFlowJSON, c = s.setPlatform, d = r("useJSON")(i != null ? i : "{}"), m = r("useJSON")(a != null ? a : "{}"), _ = i != null ? d : m;
		return g(function() {
			c(o("WAFlowsPreviewDeviceScreen.react").PLATFORM_CTWA), u(JSON.stringify(_));
		}, [
			_,
			u,
			c
		]), p.jsx(o("WAMFlowsHSMEditorProvider").WAMFlowsHSMEditorProvider, {
			businessName: (n = l.page) == null ? void 0 : n.name,
			initialFlowJSON: _,
			isLeadGenFlow: r("gkx")("13394") && (l.objective === r("AdsAPIObjectives").LEAD_GENERATION || l.objective === r("AdsAPIObjectives").OUTCOME_LEADS),
			onFlowJSONChange: u,
			surface: o("WAMFlowsHSMEditorTypes.react").WAFlowTemplatesSurface.CTWA,
			validationConfig: o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG,
			wabaID: l.wabaId,
			children: p.jsx(S, babelHelpers.extends({}, l))
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		return p.jsx(R, {
			account: e.account,
			accountID: e.accountID,
			adgroupIDs: e.adgroupIDs,
			composerState: e.composerState,
			destinationType: e.destinationType,
			editorTab: e.editorTab,
			errorSpec: e.errorSpec,
			flowTemplateName: e.templateName,
			getGreetingText: e.getGreetingText,
			isAutomatedGreetingMessageEnabled: e.isAutomatedGreetingMessageEnabled,
			isDuplicate: e.isDuplicate,
			isUnifiedCreation: e.isUnifiedCreation,
			isVideoLoading: e.isVideoLoading,
			objective: e.objective,
			onAdsMessagingDestinationInThreadCarouselChange: e.onAdsMessagingDestinationInThreadCarouselChange,
			onCtwaFlowsAutomatedResponseCTAChange: e.onCtwaFlowsAutomatedResponseCTAChange,
			onCtwaFlowsAutomatedResponseCTAURLValidationChange: e.onCtwaFlowsAutomatedResponseCTAURLValidationChange,
			onCtwaFlowsAutomatedResponseTextChange: e.onCtwaFlowsAutomatedResponseTextChange,
			onCtwaFlowsAutomatedResponseTextValidationChange: e.onCtwaFlowsAutomatedResponseTextValidationChange,
			onGreetingTextChange: e.onGreetingTextChange,
			onJSONChange: e.onJSONChange,
			optimizationGoal: e.optimizationGoal,
			page: e.page,
			pageID: e.pageID,
			pageWhatsAppNumberID: e.pageWhatsAppNumberID,
			setFlowTemplateName: e.onTemplateNameChange,
			videoURL: e.videoURL,
			welcomeMessage: e.welcomeMessage,
			welcomeMessageJSON: e.welcomeMessageJSON,
			whatsAppBusinessPhoneNumberID: e.whatsAppBusinessPhoneNumberID,
			whatsAppBusinessPhoneNumberWabaID: e.whatsAppBusinessPhoneNumberWabaID
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t, n, r, a, i, l, s = e.fetchKey, c = e.pageName, d = e.profileImageSrc, m = babelHelpers.objectWithoutPropertiesLoose(e, u), _ = o("RelayHooks").useLazyLoadQuery(v, {
			adObjective: o("AdsAdvantageAudienceUtils").convertObjectiveForGraphQL(m.objective),
			businessName: c,
			flowId: (t = m.flowId) != null ? t : "",
			pageId: o("ClickToWhatsAppFeatureGating").enableVerticalBasedDefaultFormTemplates() && (n = (r = m.page) == null ? void 0 : r.id) != null ? n : null,
			skipRequest: m.flowId == null
		}, {
			fetchKey: s,
			fetchPolicy: "store-and-network"
		}), f = _ == null ? void 0 : _.flowJSON, g = _.flow, y = (a = (i = g == null ? void 0 : g.welj) != null ? i : f) != null ? a : "", C = g == null ? void 0 : g.status, b = h(function() {
			return o("WAMFlowsCTWAFormLabelTransform").transformFlowJSONStringLabels(y);
		}, [y]);
		return p.jsx(o("WAFlowsPreviewProvider.react").WAFlowsPreviewProvider, {
			businessName: c,
			businessProfilePicture: d,
			initialFlowJSONString: b,
			shouldSkipValidation: !0,
			wabaID: m.wabaId,
			children: p.jsx(o("WAMFlowsFlowProvider.react").WAMFlowProvider, {
				initialIsFlowVisible: !0,
				children: p.jsx(L, babelHelpers.extends({}, m, {
					flowJSONString: b,
					flowStatus: (l = o("XFBWhatsAppExtensionStatusUtils.facebook").toJSEnum(C)) != null ? l : "DRAFT"
				}))
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t, n, a, i, l, s, u = e.account, c = e.accountID, d = e.adgroupIDs, m = e.composerState, _ = e.containsInputFields, g = e.destinationType, h = e.editorTab, b = e.errorSpec, v = e.flowStatus, S = e.flowTemplateName, R = e.getGreetingText, L = e.isAutomatedGreetingMessageEnabled, E = e.isEditDisabled, k = e.isFlowTemplateInputDisabled, I = k === void 0 ? !1 : k, D = e.isUnifiedCreation, x = e.isVideoLoading, $ = e.objective, P = e.onAdsMessagingDestinationInThreadCarouselChange, N = e.onCtwaFlowsAutomatedResponseCTAChange, M = e.onCtwaFlowsAutomatedResponseCTAURLValidationChange, w = e.onCtwaFlowsAutomatedResponseTextChange, A = e.onCtwaFlowsAutomatedResponseTextValidationChange, F = e.onGreetingTextChange, O = e.onJSONChange, B = e.optimizationGoal, W = e.page, q = e.pageID, U = e.pageWhatsAppNumberID, V = e.setFlowTemplateName, H = e.shouldShowErrors, G = e.videoURL, z = e.welcomeMessage, j = e.welcomeMessageJSON, K = e.whatsAppBusinessPhoneNumberID, Q = e.whatsAppBusinessPhoneNumberWabaID, X = r("useGeoTheme")(), Y = X.selectBorderColor, J = X.selectBorderWidth, Z = o("CTWAAdsOptimizationStoreUtils").getIsWhatsAppNumberCloudAPI(q, U), ee = (W == null ? void 0 : W.ctwa_flows_vertical) === "health", te = j == null || (t = j.text_format) == null || (t = t.message) == null || (t = t.automated_greeting_message_cta) == null || (t = t.wa_flow) == null ? void 0 : t.automated_response_data, ne = y(o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(Z) && te != null && !o("ClickToWhatsAppFeatureGating").disableCTWAHealthcareDefaulting(ee) && !o("ClickToWhatsAppFeatureGating").disableCTWAHighSpendDefaulting()), re = ne[0], oe = ne[1], ae = y((n = j == null || (a = j.text_format) == null || (a = a.message) == null || (a = a.automated_greeting_message_cta) == null || (a = a.wa_flow) == null || (a = a.automated_response_data) == null ? void 0 : a.text) != null ? n : o("CTXChatBuilderWAFlowsConstants").DEFAULT_CTWA_AUTOMATED_RESPONSE_TEXT), ie = ae[0], le = ae[1], se = f(function(e) {
			le(e), w == null || w(e);
		}, [w]), ue = j == null || (i = j.text_format) == null || (i = i.message) == null || (i = i.automated_greeting_message_cta) == null || (i = i.wa_flow) == null || (i = i.automated_response_data) == null ? void 0 : i.cta_info, ce = y((l = ue == null ? void 0 : ue.type) != null ? l : "none"), de = ce[0], me = ce[1], pe = y((s = ue == null ? void 0 : ue.url) != null ? s : ""), _e = pe[0], fe = pe[1], ge = f(function(e) {
			me(e), fe(""), N == null || N(e === "none" ? null : {
				type: e,
				url: ""
			});
		}, [N]), he = f(function(e) {
			fe(e), N == null || N({
				type: de,
				url: e
			});
		}, [de, N]), ye = de === "none" ? null : {
			type: de,
			url: _e != null ? _e : ""
		}, Ce = o("CTXChatBuilderWAFlowsUtils").useOnCompletionMessageToggleCallback(q, JSON.stringify(j), O, ie, ye), be = f(function(e) {
			oe(e), Ce(e), e || M == null || M(!0);
		}, [Ce, M]);
		return p.jsxs(r("GeoFlexbox.react"), {
			xstyle: [Y({ color: "element" }), J({ context: "divider" })],
			children: [p.jsx(r("GeoVStack.react"), {
				"data-testid": void 0,
				xstyle: C.form,
				children: p.jsx(r("WAMFlowsCTWAEditorModalEditor.react"), {
					account: u,
					accountID: c,
					adgroupIDs: d,
					composerState: m,
					containsInputFields: _,
					ctwaFlowsAutomatedResponseCTAType: de,
					ctwaFlowsAutomatedResponseCTAURL: _e,
					ctwaFlowsAutomatedResponseText: ie,
					destinationType: g,
					editorTab: h,
					errorSpec: b,
					flowTemplateName: S,
					getGreetingText: R,
					isCompletionMessageEnabled: re,
					isEditDisabled: E,
					isFlowTemplateInputDisabled: I,
					isUnifiedCreation: D,
					isVideoLoading: x,
					objective: $,
					onAdsMessagingDestinationInThreadCarouselChange: P,
					onCompletionMessageToggleChange: be,
					onCtwaFlowsAutomatedResponseCTATypeChange: ge,
					onCtwaFlowsAutomatedResponseCTAURLChange: he,
					onCtwaFlowsAutomatedResponseCTAURLValidationChange: M,
					onCtwaFlowsAutomatedResponseTextChange: se,
					onCtwaFlowsAutomatedResponseTextValidationChange: A,
					onGreetingTextChange: F,
					onJSONChange: O,
					optimizationGoal: B,
					page: W,
					pageID: q,
					pageWhatsAppNumberID: U,
					setFlowTemplateName: V,
					shouldShowErrors: H,
					videoURL: G,
					welcomeMessageJSON: j,
					whatsAppBusinessPhoneNumberID: K,
					whatsAppBusinessPhoneNumberWabaID: Q
				})
			}), p.jsx(T, {
				completionMessageCTAType: de,
				completionMessageText: ie,
				flowStatus: v,
				isAutomatedGreetingMessageEnabled: L,
				isCompletionMessageEnabled: o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(Z) && re,
				welcomeMessage: z
			})]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.completionMessageCTAType, n = e.completionMessageText, a = e.flowStatus, i = e.isAutomatedGreetingMessageEnabled, l = e.isCompletionMessageEnabled, u = l === void 0 ? !1 : l, c = e.welcomeMessage, m = o("WAMFlowsFlowProvider.react").useWAMFlow(), _ = m.isFlowVisible, f = m.setIsFlowVisible, g = r("useGeoTheme")(), h = g.selectBorderColor, y = g.selectBorderRadius, b = g.selectStaticBackgroundColor, v = function(t) {
			f(t !== "chat");
		};
		return p.jsxs(r("GeoFlexbox.react"), {
			alignContent: "center",
			alignItems: "stretch",
			"data-testid": void 0,
			direction: "column",
			grow: 1,
			xstyle: [C.previewSection, h({ color: "element" })],
			children: [
				p.jsx(r("GeoFlexbox.react"), {
					justifyContent: "center",
					shrink: 0,
					xstyle: r("geoMargin").vert8,
					children: p.jsxs(r("GeoTabGroup.react"), {
						onChange: v,
						value: _ ? "flow" : "chat",
						children: [p.jsx(r("GeoTab.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							value: "chat"
						}), p.jsx(r("GeoTab.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							value: "flow"
						})]
					})
				}),
				p.jsx(r("GeoFlexbox.react"), {
					direction: "column",
					xstyle: [
						C.previewCntr,
						h({ color: "element" }),
						b({ surface: "wash" })
					],
					children: p.jsx(r("GeoFlexbox.react"), {
						xstyle: [C.previewContainer, r("geoHeight").fullHeight],
						children: p.jsx(r("GeoFlexbox.react"), {
							alignItems: "center",
							direction: "column",
							xstyle: C.preview,
							children: p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(C.previewWrapper, y({ context: "container" })), { children: p.jsx(r("WAFlowsWebPreview.react"), {
								completionMessageCTAType: t,
								completionMessageText: n,
								ctwaImageCreative: p.jsx(r("MessagingCTWACreativeImageContainer.react"), {}),
								ctwaWelcomeMessage: i ? c : null,
								flowEntryPoint: o("WAFlowsInitEnvironmentTypes").FlowEntryPoint.BIZ_CARD_CTA,
								flowStatus: a,
								hideBorder: !0,
								isCompletionMessageEnabled: u,
								showOverlayOnFlowPreview: !0
							}) }))
						})
					})
				}),
				p.jsxs(r("GeoFlexbox.react"), {
					gap: 8,
					grow: 1,
					shrink: 0,
					xstyle: [C.noticeContainer, b({ surface: "wash" })],
					children: [p.jsx(r("GeoFlexbox.react"), {
						xstyle: C.noticeIcon,
						children: p.jsx(r("GeoIcon.react"), { icon: o("meta-brand-light-bulb-filled-16").metaBrandLightBulbBulbFilled16 })
					}), p.jsx(r("GeoBaseText.react"), {
						color: "valueLabel",
						size: "value",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.WAMFlowsCTWAEditorModalBodyContainer = E, l.WAMFlowsCTWAEditorModalContainer = k;
}), 226);
