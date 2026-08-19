__d("WAFlowsNavigationList.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsGroupComponentLabel.react",
	"WAFlowsNavigationListOption.react",
	"WAFlowsSchemaValidationUtils",
	"WAFlowsTypes",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"WDNativeImageComponentConstant",
	"WDSNativeNavigationListConstants",
	"WDSNativeSelectListOptionConstant",
	"react",
	"stylex",
	"useDebounced"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["name", "onClick"], s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = d.useState, g = {
		blockContainer: {
			boxSizing: "x9f619",
			$$css: !0
		},
		listContainer: {
			height: "xg7h5cd",
			$$css: !0
		},
		disabledState: {
			opacity: "xkx5w7",
			$$css: !0
		}
	}, h = {
		blockContainerOptions: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		blockContainerOption: {
			position: "x1n2onr6",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_bottom": "x1xrz1ek",
			"::after_right": "xnbfe2x",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_height": "xex3w2j",
			"::after_backgroundColor": "x1dwy1gy",
			":last-child::after_display": "xsrs1j1",
			$$css: !0
		},
		divider: {
			"::after_width": "x1itn6jy",
			$$css: !0
		}
	}, y = { blockContainerOptions: {
		backgroundColor: "xw6alqk",
		$$css: !0
	} }, C = { blockContainerOptions: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function b(t) {
		var n = t.name, a = t.onClick, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = o("WAFlowsEnvContext.react").useWAFlowsEnv(), u = l.env, d = v(u.platform), h = _(null), y = f(!1), C = y[0], b = y[1], S = f(!1), R = S[0], L = S[1], E = p(function() {
			return i.listItems.some(function(e) {
				var t;
				return ((t = e.start) == null ? void 0 : t.image) != null;
			});
		}, [i.listItems]), k = o("WAFlowsFormContext").useWAFlowsForm(), I = k.setValue, T = m(function(e) {
			if (I(n, e), a != null) a();
			else {
				var t = i.listItems.findIndex(function(t) {
					var n = t.id;
					return n === e;
				});
				if (t !== -1) {
					var r = i.listItems[t];
					r.onClick == null || r.onClick();
				}
			}
		}, [
			I,
			n,
			a,
			i.listItems
		]), D = r("useDebounced")(T, o("WAFlowsComponentConstants").WAITING_THRESHOLD, !1), x = p(function() {
			return i.listItems.map(function(e, t) {
				var n;
				return c.jsx("li", babelHelpers.extends({}, (s || (s = r("stylex"))).props([d.blockContainerOption, d.divider]), { children: c.jsx(o("WAFlowsNavigationListOption.react").WAFlowsNavigationListOption, babelHelpers.extends({}, e, {
					mediaSize: (n = i.mediaSize) != null ? n : o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType.REGULAR,
					hasImages: E,
					navigationListRef: h,
					onChange: D,
					hasOneColumn: C,
					setHasOneColumn: b,
					isTopAligned: R,
					setIsTopAligned: L
				})) }), t);
			});
		}, [
			i.listItems,
			i.mediaSize,
			d.blockContainerOption,
			d.divider,
			E,
			D,
			C,
			R
		]);
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAFlowsGroupComponentLabel.react").WAFlowsGroupComponentLabel, {
			label: i.label,
			description: i.description,
			required: !0,
			isNavList: !0
		}), c.jsx("ul", babelHelpers.extends({
			role: "listbox",
			ref: h
		}, (s || (s = r("stylex"))).props([
			i.enabled === !1 && g.disabledState,
			g.blockContainer,
			g.listContainer,
			d.blockContainerOptions
		]), { children: x }))] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = {
			android: y,
			ios: h,
			wa_web: C
		};
		return t[e];
	}
	var S = [{
		prop: "description",
		keyword: "maxLength",
		value: o("WDSNativeSelectListOptionConstant").SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH
	}, {
		prop: "label",
		keyword: "maxLength",
		value: o("WDSNativeSelectListOptionConstant").CBG_RBG_LIST_LABEL_MAX_LENGTH_v400
	}], R = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			name: { type: "string" },
			label: {
				type: "string",
				pattern: o("WAFlowsSchemaValidationUtils").WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN
			},
			description: {
				type: "string",
				pattern: o("WAFlowsSchemaValidationUtils").WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN
			},
			mediaSize: { enum: ["regular", "large"] },
			visible: { type: "boolean" },
			onClick: { instanceof: "Function" },
			listItems: babelHelpers.extends({
				type: "array",
				minItems: o("WDSNativeNavigationListConstants").NAVIGATION_LIST_MIN_ITEMS,
				maxItems: o("WDSNativeNavigationListConstants").NAVIGATION_LIST_MAX_ITEMS,
				items: {
					type: "object",
					properties: {
						onClick: { instanceof: "Function" },
						id: { type: "string" },
						enabled: { type: "boolean" },
						"main-content": {
							type: "object",
							properties: {
								title: {
									type: "string",
									maxLength: 30
								},
								description: {
									type: "string",
									maxLength: 20
								},
								metadata: {
									type: "string",
									maxLength: 80
								}
							},
							required: ["title"],
							additionalProperties: !1
						},
						start: {
							type: "object",
							properties: {
								image: { type: "string" },
								"alt-text": { type: "string" }
							},
							required: ["image"],
							additionalProperties: !1
						},
						end: babelHelpers.extends({
							type: "object",
							properties: {
								title: {
									type: "string",
									maxLength: 10
								},
								description: {
									type: "string",
									maxLength: 10
								},
								metadata: {
									type: "string",
									maxLength: 10
								}
							}
						}, o("WAFlowsWELJUtils").getHardValidationWithSchema([{
							keyword: o("WAFlowsValidationConstants").PROPERTIES_COUNT_VALIDATOR,
							value: {
								minimum: o("WDSNativeNavigationListConstants").NAVIGATION_LIST_END_ADD_ON_MIN_PROP_COUNT,
								maximum: o("WDSNativeNavigationListConstants").NAVIGATION_LIST_END_ADD_ON_MAX_PROP_COUNT
							}
						}]), { additionalProperties: !1 }),
						badge: {
							type: "string",
							maxLength: 15
						},
						tags: {
							type: "array",
							items: {
								type: "string",
								maxLength: 15
							},
							maxItems: o("WDSNativeNavigationListConstants").NAVIGATION_LIST_MAX_TAGS_COUNT
						}
					},
					required: ["id", "main-content"],
					additionalProperties: !1
				}
			}, o("WAFlowsWELJUtils").getHardValidation([
				o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE,
				o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE,
				o("WAFlowsValidationConstants").NAVIGATION_LIST_IMAGE_SIZE_IS_UNDER_100KB,
				o("WAFlowsValidationConstants").NAVIGATION_LIST_INVALID_BADGE_COUNT,
				o("WAFlowsValidationConstants").NAVIGATION_LIST_END_ADD_ON
			]))
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}, o("WAFlowsWELJUtils").getValidationSchema(S, [], []), o("WAFlowsWELJUtils").getHardValidation([
		o("WAFlowsValidationConstants").NAVIGATION_LIST_INVALID_MEDIA_SIZE_AND_ADDON,
		o("WAFlowsValidationConstants").ON_CLICK_ACTION_EXCLUSIVE_VALIDATOR,
		o("WAFlowsValidationConstants").ON_CLICK_ACTION_MISSING_VALIDATOR
	]), {
		required: [
			"listItems",
			"name",
			"isSoftValidationMode"
		],
		additionalProperties: !1
	});
	l.WAFlowsNavigationList = b, l.TYPE = o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST, l.SCHEMA = R;
}), 98);
