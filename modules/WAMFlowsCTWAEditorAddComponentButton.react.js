__d("WAMFlowsCTWAEditorAddComponentButton.react", [
	"fbt",
	"AdsInterfacesLogger",
	"ClickToWhatsAppFeatureGating",
	"GeoDropdownMenu.react",
	"GeoMenuGroup.react",
	"GeoMenuItem.react",
	"GeoMenuSeparator.react",
	"GeoMenuSubmenu.react",
	"GeoTooltip.react",
	"WAFlowsComponentsCommon",
	"WAMFlowsCTWAEditorValidationConfig",
	"WAMFlowsCTWAFormInputTypes",
	"WAMFlowsCTWAInputValidation",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMComponentLabels",
	"WAMFlowsHSMEditorAddComponentButton.react",
	"WAMFlowsHSMEditorUtils",
	"WAMFlowsHSMFbt",
	"WhatsAppFlowsStringUtils",
	"meta-brand-a-a-rectangle-filled-16",
	"meta-brand-big-a-little-a-outline-16",
	"meta-brand-globe-americas-filled-16",
	"meta-brand-map-dropper-filled-16",
	"meta-brand-person-circle-filled-16",
	"meta-brand-plus-outline-16",
	"meta-brand-rectangle-handle-filled-16",
	"meta-brand-speech-bubble-stacked-filled-16",
	"meta-brand-wrench-screwdriver-filled-16",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = [
		"TextHeading",
		"TextBody",
		"TextCaption"
	], m = [
		"text",
		"number",
		"email",
		"password",
		"phone"
	], p = [
		"TextArea",
		"DatePicker",
		"RadioButtonsGroup",
		"CheckboxGroup"
	], _ = [
		"CONTACT_INFORMATION",
		"ADDRESS",
		"DEMOGRAPHIC",
		"WORK_INFORMATION",
		"NATIONAL_ID",
		"CUSTOM"
	], f = {
		ADDRESS: o("meta-brand-map-dropper-filled-16").metaBrandMapDropperPinLocationFilled16,
		CONTACT_INFORMATION: o("meta-brand-speech-bubble-stacked-filled-16").metaBrandSpeechBubbleStackedMessagesFilled16,
		CUSTOM: o("meta-brand-wrench-screwdriver-filled-16").metaBrandWrenchScrewdriverToolsFilled16,
		DEMOGRAPHIC: o("meta-brand-person-circle-filled-16").metaBrandPersonCircleFilled16,
		NATIONAL_ID: o("meta-brand-globe-americas-filled-16").metaBrandGlobeAmericasGlobeAmericasStandFilled16,
		WORK_INFORMATION: o("meta-brand-rectangle-handle-filled-16").metaBrandRectangleHandleBriefcaseFilled16
	};
	function g(e) {
		switch (e) {
			case "paragraph": return { componentType: "TextArea" };
			case "date_picker": return { componentType: "CalendarPicker" };
			case "single_choice": return { componentType: "RadioButtonsGroup" };
			case "multiple_choice": return { componentType: "CheckboxGroup" };
			case "full_name":
			case "first_name":
			case "last_name":
			case "street_address":
			case "city":
			case "state":
			case "province":
			case "country":
			case "job_title":
			case "company_name":
			case "text": return {
				componentType: "TextInput",
				inputType: "text"
			};
			case "phone_number":
			case "whatsapp_number": return {
				componentType: "TextInput",
				inputType: "phone"
			};
			case "email": return {
				componentType: "TextInput",
				inputType: "email"
			};
			case "post_code":
			case "zip_code":
			case "number": return {
				componentType: "TextInput",
				inputType: "number"
			};
			case "date_of_birth": return { componentType: "CalendarPicker" };
			case "gender": return { componentType: "RadioButtonsGroup" };
			case "dni_argentina":
			case "cpf_brazil":
			case "rut_chile":
			case "cc_colombia":
			case "ci_ecuador":
			case "rfc_mexico":
			case "dni_peru": return {
				componentType: "TextInput",
				inputType: "text"
			};
			default: return {
				componentType: "TextInput",
				inputType: "text"
			};
		}
	}
	function h(e, t) {
		return t == null ? !1 : e === "first_name" || e === "last_name" ? t.has("full_name") : e === "full_name" ? t.has("first_name") || t.has("last_name") : !1;
	}
	function y(e) {
		var t = e.existingPresetTypes, n = e.isDisabled, a = n === void 0 ? !1 : n, i = e.onCreate, l = o("WAMFlowsFlowProvider.react").useWAMFlow(), y = l.setIsFlowVisible, C = o("ClickToWhatsAppFeatureGating").enableCTWACategorizedFormInputs(), b = c(function(e, t) {
			var n, r = o("WAMFlowsHSMEditorAddComponentButton.react").generateComponentByType(e);
			r.type === "TextInput" && t && (r["input-type"] = t), i({
				flowJSON: r,
				id: (n = r.name) != null ? n : o("WAMFlowsHSMEditorUtils").generateComponentId(e)
			}), y(!0);
		}, [i, y]), v = c(function(e) {
			var t, n = g(e), r;
			n.componentType === "CalendarPicker" ? r = {
				label: "Label",
				mode: "single",
				name: o("WAMFlowsHSMEditorUtils").generateComponentId("Label"),
				required: !0,
				type: "CalendarPicker"
			} : r = o("WAMFlowsHSMEditorAddComponentButton.react").generateComponentByType(n.componentType), r.type === "TextInput" && n.inputType && (r["input-type"] = n.inputType);
			var a = o("WAMFlowsHSMComponentLabels").CTWA_FORM_INPUT_TYPE_LABELS[e];
			a != null && (r.type === "TextInput" || r.type === "TextArea" || r.type === "DatePicker" || r.type === "CalendarPicker" || r.type === "RadioButtonsGroup" || r.type === "CheckboxGroup") && (r.label = String(a)), (r.type === "TextInput" || r.type === "TextArea") && (r["label-variant"] = o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE);
			var l = o("WAMFlowsCTWAFormInputTypes").PRESET_DATA_SOURCE_OPTIONS[e];
			if (l != null && (r.type === "RadioButtonsGroup" || r.type === "CheckboxGroup") && (r["data-source"] = l.map(function(e) {
				var t;
				return {
					id: e.id,
					title: String((t = o("WAMFlowsHSMComponentLabels").CTWA_PRESET_OPTION_FBT_TITLES[e.id]) != null ? t : e.title)
				};
			})), !o("WAMFlowsCTWAFormInputTypes").CUSTOM_INPUT_TYPES.has(e) && "name" in r && (r.name = e), o("WAMFlowsCTWAFormInputTypes").isNationalIdInputType(e) && r.type === "TextInput") {
				var s = o("WAMFlowsCTWAInputValidation").getNationalIdPatternString(e);
				s != null && (r.pattern = s);
				var u = o("WAMFlowsHSMComponentLabels").CTWA_NATIONAL_ID_HELPER_TEXT[e];
				u != null && (r["helper-text"] = String(u));
			}
			i({
				flowJSON: r,
				id: (t = r.name) != null ? t : o("WAMFlowsHSMEditorUtils").generateComponentId(n.componentType),
				presetType: e
			}), y(!0);
		}, [i, y]), S = !1, R = c(function(e) {
			var t;
			r("AdsInterfacesLogger").log({
				data: (t = {}, t.status = "is_flows_default: " + String(S) + ", is_prefill_default: " + String(!S) + ", item_type: " + e, t),
				eventName: "ctwa_flows_am_add_flow_input_item"
			});
		}, [S]), L = function(t) {
			var e;
			return (e = o("WAMFlowsHSMComponentLabels").CTWA_FORM_INPUT_CATEGORY_LABELS[t]) != null ? e : o("WhatsAppFlowsStringUtils").capitalize(t);
		};
		return u.jsx("div", { children: u.jsx(r("GeoDropdownMenu.react"), {
			dropdownWidth: 280,
			icon: o("meta-brand-plus-outline-16").metaBrandPlusPlusOutline16,
			isDisabled: a,
			label: s._(
				/*BTDS*/
				""
			),
			tooltip: a ? u.jsx(r("GeoTooltip.react"), { content: o("WAMFlowsHSMFbt").MAX_OPTIONS_LIMIT_REACHED_TOOLTIP(o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.maxNumberOfComponents - o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT.numberOfFixedComponents) }) : null,
			children: C === !0 ? u.jsxs(u.Fragment, { children: [u.jsx(r("GeoMenuSubmenu.react"), {
				icon: o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16,
				label: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("GeoMenuGroup.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: d.map(function(e) {
						return u.jsx(r("GeoMenuItem.react"), {
							label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
							onClick: function() {
								b(e), R(e);
							}
						}, e);
					})
				})
			}), _.map(function(e) {
				var n = o("WAMFlowsCTWAFormInputTypes").CTWAFormInputCategories[e];
				return n == null || n.length === 0 ? null : u.jsxs(u.Fragment, { children: [e === "CUSTOM" && u.jsx(r("GeoMenuSeparator.react"), {}), u.jsx(r("GeoMenuSubmenu.react"), {
					"data-testid": void 0,
					icon: f[e],
					label: L(e),
					children: u.jsx(r("GeoMenuGroup.react"), {
						label: L(e),
						children: n.map(function(e) {
							var n;
							return u.jsx(r("GeoMenuItem.react"), {
								isDisabled: h(e, t) || t != null && !o("WAMFlowsCTWAFormInputTypes").CUSTOM_INPUT_TYPES.has(e) && t.has(e),
								label: (n = o("WAMFlowsHSMComponentLabels").CTWA_FORM_INPUT_TYPE_LABELS[e]) != null ? n : o("WhatsAppFlowsStringUtils").capitalize(e),
								onClick: function() {
									v(e), R("categorized_" + e);
								}
							}, e);
						})
					})
				})] }, e);
			})] }) : u.jsxs(u.Fragment, { children: [u.jsx(r("GeoMenuGroup.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("GeoMenuSubmenu.react"), {
					icon: o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16,
					label: s._(
						/*BTDS*/
						""
					),
					children: d.map(function(e) {
						return u.jsx(r("GeoMenuItem.react"), {
							label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
							onClick: function() {
								b(e), R(e);
							}
						}, e);
					})
				})
			}), u.jsxs(r("GeoMenuGroup.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				children: [u.jsx(r("GeoMenuSubmenu.react"), {
					"data-testid": void 0,
					icon: o("meta-brand-a-a-rectangle-filled-16").metaBrandAARectangleTextSquareFilled16,
					label: s._(
						/*BTDS*/
						""
					),
					children: m.map(function(e) {
						var t;
						return u.jsx(r("GeoMenuItem.react"), {
							label: (t = o("WAMFlowsHSMComponentLabels").TEXT_INPUT_COMPONENT_TYPE_LABELS[e]) != null ? t : o("WhatsAppFlowsStringUtils").capitalize(e),
							onClick: function() {
								b("TextInput", e), R(e);
							}
						}, e);
					})
				}), p.map(function(e) {
					return u.jsx(r("GeoMenuItem.react"), {
						icon: o("WAMFlowsHSMEditorAddComponentButton.react").iconByType[e],
						isDisabled: a,
						label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
						onClick: function() {
							b(e), R(e);
						}
					}, e);
				})]
			})] })
		}) });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
