__d("WAMFlowsCTWAEditorModalEditor.react", [
	"fbt",
	"AdsAPIObjectives",
	"AdsInterfacesLogger",
	"AdsWhatsAppNumberUtils",
	"BizMsgPlatformUrlInput.react",
	"CTWAAdsOptimizationStoreUtils",
	"ClickToWhatsAppFeatureGating",
	"GeoAccordionList.react",
	"GeoBaseText.react",
	"GeoDivider.react",
	"GeoFlexbox.react",
	"GeoHeading.react",
	"GeoIcon.react",
	"GeoMediaItem.react",
	"GeoNotice.react",
	"GeoSelector.react",
	"GeoSelectorItem.react",
	"GeoSwitch.react",
	"GeoText.react",
	"GeoTextArea.react",
	"GeoTextInput.react",
	"GeoTextPairing.react",
	"StartConversationsTemplateGreetingSection.react",
	"WAMFlowsCTWAEditorAddComponentButton.react",
	"WAMFlowsCTWAEditorComponentsListItem",
	"WAMFlowsCTWAEditorValidationConfig",
	"WAMFlowsCTWAFormInputTypes",
	"WAMFlowsCTWAUtilsCTALabels.react",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMEditorProvider",
	"geoMargin",
	"geoWidth",
	"gkx",
	"meta-brand-arrow-up-diagonal-right-square-filled-16",
	"meta-brand-circle-slash-outline-16",
	"meta-brand-phone-handset-filled-16",
	"meta-brand-storefront-filled-16",
	"react",
	"stylex",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useState, g = /^https:\/\/[a-zA-Z0-9][-a-zA-Z0-9]*(\.[a-zA-Z0-9][-a-zA-Z0-9]*)+(:\d+)?(\/[^\s]*)?$/, h = {
		container: {
			overflowY: "x1odjw0f",
			$$css: !0
		},
		list: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xmzvs34",
			$$css: !0
		},
		visitWebsiteSection: {
			marginTop: "x14vqqas",
			$$css: !0
		},
		waNumberSection: {
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x1dm3dyd",
			borderEndStartRadius: "x1pv694p",
			marginTop: "x14vqqas",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xe2zdcy",
			paddingTop: "x1y1aw1k",
			$$css: !0
		}
	};
	function y(t) {
		var n = t.account, a = t.accountID, i = t.adgroupIDs, l = t.composerState, u = t.containsInputFields, d = t.ctwaFlowsAutomatedResponseCTAType, g = t.ctwaFlowsAutomatedResponseCTAURL, y = t.ctwaFlowsAutomatedResponseText, v = t.destinationType, S = t.editorTab, R = t.errorSpec, L = t.flowTemplateName, E = t.getGreetingText, k = t.isCompletionMessageEnabled, I = k === void 0 ? !0 : k, T = t.isEditDisabled, D = t.isFlowTemplateInputDisabled, x = D === void 0 ? !1 : D, $ = t.isUnifiedCreation, P = t.isVideoLoading, N = t.objective, M = t.onAdsMessagingDestinationInThreadCarouselChange, w = t.onCompletionMessageToggleChange, A = t.onCtwaFlowsAutomatedResponseCTATypeChange, F = t.onCtwaFlowsAutomatedResponseCTAURLChange, O = t.onCtwaFlowsAutomatedResponseCTAURLValidationChange, B = t.onCtwaFlowsAutomatedResponseTextChange, W = t.onCtwaFlowsAutomatedResponseTextValidationChange, q = t.onGreetingTextChange, U = t.onJSONChange, V = t.optimizationGoal, H = t.page, G = t.pageID, z = t.pageWhatsAppNumberID, j = t.setFlowTemplateName, K = t.shouldShowErrors, Q = t.videoURL, X = t.welcomeMessageJSON, Y = t.whatsAppBusinessPhoneNumberID, J = t.whatsAppBusinessPhoneNumberWabaID, Z = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(), ee = Z.addComponent, te = Z.removeComponent, ne = Z.selectedScreen, re = Z.selectedScreenId, oe = Z.updateComponent, ae = Z.updateScreen, ie = Z.updateScreenTitle, le = o("WAMFlowsFlowProvider.react").useWAMFlow(), se = le.setIsFlowVisible, ue = f(function() {
			var e;
			return ((e = ne == null ? void 0 : ne.components) != null ? e : []).reduce(function(e, t) {
				return e[t.id] = !1, e;
			}, {});
		}), ce = ue[0], de = ue[1], me = m(function(e, t) {
			var n = ne == null ? void 0 : ne.components[e].id;
			if (n != null) {
				var r;
				de(babelHelpers.extends({}, ce, (r = {}, r[n] = t, r))), t && se(!0);
			}
		}, [
			ce,
			ne == null ? void 0 : ne.components,
			se
		]), pe = !1, _e = "is_flows_default: " + String(pe) + ", is_prefill_default: " + String(!pe), fe = m(function(e) {
			var t;
			r("AdsInterfacesLogger").log({
				data: (t = {}, t.status = _e + ", cta_text: " + e, t),
				eventName: "ctwa_flows_am_select_flow_cta"
			});
		}, [_e]), ge = m(function(e) {
			var t;
			r("AdsInterfacesLogger").log({
				data: (t = {}, t.status = _e + ", item_type: " + e, t),
				eventName: "ctwa_flows_am_delete_flow_input_item"
			});
		}, [_e]), he = function(t) {
			q(t), r("AdsInterfacesLogger").log({ eventName: "ctwa_automatic_greeting_message_flows_greeting_text_change" });
		}, ye = m(function(e) {
			var t;
			r("AdsInterfacesLogger").log({
				data: (t = {}, t.status = _e + ", item_type: " + e, t),
				eventName: "ctwa_flows_am_update_flow_input_item"
			});
		}, [_e]), Ce = m(function(e) {
			var t;
			de(babelHelpers.extends({}, ce, (t = {}, t[e.id] = !0, t))), ee(e);
		}, [ce, ee]), be = o("ClickToWhatsAppFeatureGating").enableCTWACategorizedFormInputs(), ve = _(function() {
			if (!(be !== !0 || ne == null)) {
				var e = ne.components.slice(o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.numberOfFixedComponents), t = new Set();
				for (var n of e) {
					var r, a = (r = n.presetType) != null ? r : o("WAMFlowsCTWAFormInputTypes").detectPresetType(typeof n.flowJSON.label == "string" ? n.flowJSON.label : null, n.flowJSON.name);
					a != null && !o("WAMFlowsCTWAFormInputTypes").CUSTOM_INPUT_TYPES.has(a) && t.add(a);
				}
				return t;
			}
		}, [be, ne]), Se = o("CTWAAdsOptimizationStoreUtils").getIsWhatsAppNumberCloudAPI(G, z), Re = o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(Se) && I, Le = f(!1), Ee = Le[0], ke = Le[1], Ie = _(function() {
			if (!Re) return null;
			var e = (y != null ? y : "").trim();
			return e === "" ? String(s._(
				/*BTDS*/
				""
			)) : null;
		}, [Re, y]);
		p(function() {
			W == null || W(Ie == null);
		}, [Ie, W]);
		var Te = m(function() {
			ke(!0);
		}, []), De = Ee || K === !0 ? Ie : null;
		if (!ne) return null;
		var xe = ne.components.slice(0, o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.numberOfFixedComponents), $e = ne.components.slice(o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.numberOfFixedComponents);
		return c.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			shrink: 0,
			xstyle: h.container,
			children: [
				c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("geoMargin").top20), { children: c.jsx(r("StartConversationsTemplateGreetingSection.react"), {
					account: n,
					accountID: a,
					adgroupIDs: i,
					composerState: l,
					destinationType: v,
					editorTab: S,
					errorSpec: R,
					getGreetingText: E,
					isEditDisabled: T,
					isUnifiedCreation: $,
					isVideoLoading: P,
					objective: N,
					onAdsMessagingDestinationInThreadCarouselChange: M,
					onGreetingTextChange: he,
					onJSONChange: U,
					optimizationGoal: V,
					page: H,
					pageID: G,
					pageWhatsAppNumberID: z,
					setIsFlowVisible: se,
					shouldHideAutomatedGreetingMessageCTA: !0,
					videoURL: Q,
					welcomeMessageJSON: X,
					whatsAppBusinessPhoneNumberID: Y,
					whatsAppBusinessPhoneNumberWabaID: J
				}) })),
				c.jsx(r("GeoHeading.react"), {
					level: 2,
					xstyle: r("geoMargin").top20,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(r("GeoBaseText.react"), {
					color: "placeholder",
					size: "value",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(r("GeoSelector.react"), {
					"data-testid": void 0,
					label: s._(
						/*BTDS*/
						""
					),
					onChange: function(t) {
						ie(t.toString()), fe(t.toString());
					},
					onOpen: function() {
						return se(!1);
					},
					value: ne.title,
					xstyle: r("geoMargin").top12,
					children: [].concat(o("WAMFlowsCTWAUtilsCTALabels.react").ctaOptions).sort(function(e, t) {
						return e.label.toString().localeCompare(t.label.toString());
					}).map(function(e) {
						var t = e.label;
						return c.jsx(r("GeoSelectorItem.react"), {
							label: t.toString(),
							value: t.toString()
						}, t.toString());
					})
				}),
				c.jsx(r("GeoDivider.react"), { xstyle: r("geoMargin").vert24 }),
				c.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					shrink: 0,
					children: [
						c.jsx(r("GeoHeading.react"), {
							level: 2,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("GeoBaseText.react"), {
							color: "valueLabel",
							size: "header4",
							weight: "bold",
							xstyle: r("geoMargin").top20,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("GeoBaseText.react"), {
							color: "placeholder",
							size: "value",
							xstyle: r("geoMargin").bottom8,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("GeoFlexbox.react"), {
							grow: 1,
							xstyle: h.list,
							children: c.jsx(r("GeoAccordionList.react"), {
								xstyle: r("geoWidth").fullWidth,
								children: xe.map(function(e, t) {
									return c.jsx(o("WAMFlowsCTWAEditorComponentsListItem").CTWAAccordionListItem, {
										component: e,
										headerTestID: "wam-flows-ctwa-editor-draggable-item-" + t + "-header",
										id: e.id,
										index: t,
										isInitiallyExpanded: !1,
										isRemovable: !1,
										isTypeChangeDisabled: !0,
										onAccordionStateChange: function(n) {
											me(t, n);
										},
										onComponentChange: function(n) {
											return oe(n, t);
										}
									}, e.id);
								})
							})
						}),
						c.jsx(r("GeoBaseText.react"), {
							color: "valueLabel",
							size: "header4",
							weight: "bold",
							xstyle: r("geoMargin").top20,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("GeoBaseText.react"), {
							color: "placeholder",
							size: "value",
							xstyle: r("geoMargin").bottom8,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						!u && c.jsx(r("GeoNotice.react"), {
							status: "warning",
							xstyle: r("geoMargin").top8,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("GeoFlexbox.react"), {
							grow: 1,
							children: c.jsx(o("WAMFlowsCTWAEditorComponentsListItem").CTWADraggableAccordionList, {
								accordionsExpandedById: ce,
								dynamicComponents: $e,
								onAccordionStateChange: me,
								onDeleteContentLog: ge,
								onUpdateContentLog: ye,
								removeComponent: te,
								selectedScreenId: re,
								updateComponent: oe,
								updateScreen: ae
							})
						}),
						c.jsx("hr", {}),
						c.jsx(r("WAMFlowsCTWAEditorAddComponentButton.react"), {
							existingPresetTypes: ve,
							isDisabled: ne.components.length >= o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.maxNumberOfComponents,
							onCreate: Ce
						})
					]
				}),
				c.jsx(r("GeoDivider.react"), { xstyle: r("geoMargin").vert24 }),
				o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(Se) && c.jsxs(c.Fragment, { children: [c.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					gap: 8,
					children: [
						c.jsxs(r("GeoFlexbox.react"), {
							alignItems: "center",
							justifyContent: "space-between",
							children: [c.jsx(r("GeoHeading.react"), {
								level: 2,
								children: s._(
									/*BTDS*/
									""
								)
							}), c.jsx(r("GeoSwitch.react"), {
								isLabelHidden: !0,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: function(t) {
									w == null || w(t);
								},
								value: I
							})]
						}),
						c.jsx(r("GeoText.react"), { children: s._(
							/*BTDS*/
							""
						) }),
						I && c.jsxs(c.Fragment, { children: [c.jsx(r("GeoTextArea.react"), {
							"data-testid": void 0,
							errorMessage: De,
							label: s._(
								/*BTDS*/
								""
							),
							maxLength: 300,
							onBlur: Te,
							onChange: function(t) {
								B == null || B(t);
							},
							onFocus: function() {
								return se(!1);
							},
							rows: 3,
							shouldAutoGrow: !0,
							value: y != null ? y : ""
						}), o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponseCTA(Se) && c.jsx(b, {
							ctwaFlowsAutomatedResponseCTAType: d,
							ctwaFlowsAutomatedResponseCTAURL: g,
							onCtwaFlowsAutomatedResponseCTATypeChange: A,
							onCtwaFlowsAutomatedResponseCTAURLChange: F,
							onCtwaFlowsAutomatedResponseCTAURLValidationChange: O,
							page: H,
							pageWhatsAppNumberID: z,
							shouldShowErrors: K
						})] })
					]
				}), c.jsx(r("GeoDivider.react"), { xstyle: r("geoMargin").vert24 })] }),
				c.jsx(C, { objective: N }),
				c.jsx(r("GeoFlexbox.react"), {
					xstyle: [r("geoMargin").bottom20, r("geoMargin").top8],
					children: c.jsx(r("GeoTextInput.react"), {
						"data-testid": void 0,
						isDisabled: x,
						label: s._(
							/*BTDS*/
							""
						),
						maxLength: 80,
						onChange: j,
						placeholder: s._(
							/*BTDS*/
							""
						),
						value: L
					})
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.objective, n = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(), a = n.selectedScreen, i = n.updatePrivacyPolicyURL, l = f(a == null ? void 0 : a.privacyPolicyURL), u = l[0], d = l[1];
		return r("gkx")("13394") && (t === r("AdsAPIObjectives").OUTCOME_LEADS || t === r("AdsAPIObjectives").LEAD_GENERATION) && c.jsxs(c.Fragment, { children: [c.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			gap: 8,
			children: [c.jsx(r("GeoTextPairing.react"), {
				description: s._(
					/*BTDS*/
					""
				),
				heading: s._(
					/*BTDS*/
					""
				),
				size: "header4"
			}), c.jsx(r("BizMsgPlatformUrlInput.react"), {
				invalidUrlError: s._(
					/*BTDS*/
					""
				),
				isOptional: !0,
				label: s._(
					/*BTDS*/
					""
				),
				onChange: function(t, n) {
					d(t), i(n === !0 ? t : null);
				},
				placeholder: "https://www.pagename.com/privacy-policy",
				value: u
			})]
		}), c.jsx(r("GeoDivider.react"), { xstyle: r("geoMargin").vert24 })] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n, a, i = t.ctwaFlowsAutomatedResponseCTAType, l = t.ctwaFlowsAutomatedResponseCTAURL, u = t.onCtwaFlowsAutomatedResponseCTATypeChange, d = t.onCtwaFlowsAutomatedResponseCTAURLChange, y = t.onCtwaFlowsAutomatedResponseCTAURLValidationChange, C = t.page, b = t.pageWhatsAppNumberID, v = t.shouldShowErrors, S = r("useGeoTheme")(), R = S.selectStaticBackgroundColor, L = C ? (n = o("AdsWhatsAppNumberUtils").getWhatsappInfoForNumber(C, b)) == null ? void 0 : n.is_calling_enabled : !1, E = (a = C == null ? void 0 : C.has_whatsapp_catalog) != null ? a : !1, k = f(!1), I = k[0], T = k[1], D = _(function() {
			var e;
			if (i !== "url") return null;
			var t = (e = l == null ? void 0 : l.trim()) != null ? e : "";
			if (t === "") return String(s._(
				/*BTDS*/
				""
			));
			if (t.startsWith("https://")) {
				if (!g.test(t)) return String(s._(
					/*BTDS*/
					""
				));
			} else return String(s._(
				/*BTDS*/
				""
			));
			return null;
		}, [i, l]);
		p(function() {
			y == null || y(D == null);
		}, [D, y]);
		var x = m(function() {
			T(!0);
		}, []), $ = I || v === !0 ? D : null;
		return c.jsxs(c.Fragment, { children: [
			c.jsxs(r("GeoSelector.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onChange: function(t) {
					u == null || u(t);
				},
				value: i != null ? i : "none",
				children: [
					L === !0 ? c.jsx(r("GeoSelectorItem.react"), {
						description: s._(
							/*BTDS*/
							""
						),
						label: s._(
							/*BTDS*/
							""
						),
						media: c.jsx("div", {
							className: "x1xzm4ny xjwep3j x1t39747 x1wcsgtt x1pczhz8",
							children: c.jsx(r("GeoMediaItem.react"), {
								fit: "contain",
								media: c.jsx(r("GeoIcon.react"), { icon: o("meta-brand-phone-handset-filled-16").metaBrandPhoneHandsetPhoneFilled16 }),
								ratio: "square",
								size: 24
							})
						}),
						value: "call"
					}) : null,
					E === !0 ? c.jsx(r("GeoSelectorItem.react"), {
						description: s._(
							/*BTDS*/
							""
						),
						label: s._(
							/*BTDS*/
							""
						),
						media: c.jsx("div", {
							className: "x1xzm4ny xjwep3j x1t39747 x1wcsgtt x1pczhz8",
							children: c.jsx(r("GeoMediaItem.react"), {
								fit: "contain",
								media: c.jsx(r("GeoIcon.react"), { icon: o("meta-brand-storefront-filled-16").metaBrandStorefrontFilled16 }),
								ratio: "square",
								size: 24
							})
						}),
						value: "catalog"
					}) : null,
					c.jsx(r("GeoSelectorItem.react"), {
						description: s._(
							/*BTDS*/
							""
						),
						label: s._(
							/*BTDS*/
							""
						),
						media: c.jsx("div", {
							className: "x1xzm4ny xjwep3j x1t39747 x1wcsgtt x1pczhz8",
							children: c.jsx(r("GeoMediaItem.react"), {
								fit: "contain",
								media: c.jsx(r("GeoIcon.react"), { icon: o("meta-brand-arrow-up-diagonal-right-square-filled-16").metaBrandArrowUpDiagonalRightSquareShareExternalFilled16 }),
								ratio: "square",
								size: 24
							})
						}),
						value: "url"
					}),
					c.jsx(r("GeoSelectorItem.react"), {
						description: " ",
						label: s._(
							/*BTDS*/
							""
						),
						media: c.jsx("div", {
							className: "x1xzm4ny xjwep3j x1t39747 x1wcsgtt x1pczhz8",
							children: c.jsx(r("GeoMediaItem.react"), {
								fit: "contain",
								media: c.jsx(r("GeoIcon.react"), { icon: o("meta-brand-circle-slash-outline-16").metaBrandCircleSlashQuitOutline16 }),
								ratio: "square",
								size: 24
							})
						}),
						value: "none"
					})
				]
			}),
			i === "call" && C != null && b != null && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(R({ surface: "wash" }), h.waNumberSection), { children: c.jsx(r("GeoTextPairing.react"), {
				description: o("AdsWhatsAppNumberUtils").getWhatsAppNumberFormatted(C, b),
				heading: s._(
					/*BTDS*/
					""
				),
				size: "header4"
			}) })),
			i === "url" && c.jsx(r("GeoTextInput.react"), {
				errorMessage: $,
				label: s._(
					/*BTDS*/
					""
				),
				onBlur: x,
				onChange: function(t) {
					d == null || d(t);
				},
				placeholder: "https://your-website.com/your-page",
				value: l,
				xstyle: h.visitWebsiteSection
			})
		] });
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = y;
}), 226);
