__d("WAMFlowsHSMEditorAddComponentButton.react", [
	"fbt",
	"CometPlaceholder.react",
	"GeoDropdownMenu.react",
	"GeoGlimmer.react",
	"GeoMenuItem.react",
	"GeoMenuSubmenu.react",
	"GeoTooltip.react",
	"WAMFlowsHSMComponentLabels",
	"WAMFlowsHSMEditorUtils",
	"WAMFlowsHSMFbt",
	"WAMFlowsHSMValidationConfig",
	"meta-brand-a-a-rectangle-filled-16",
	"meta-brand-big-a-little-a-outline-16",
	"meta-brand-bullet-list-outline-16",
	"meta-brand-checkmark-square-filled-16",
	"meta-brand-circle-inside-circle-filled-16",
	"meta-brand-grid-calendar-filled-16",
	"meta-brand-mountain-square-outline-16",
	"meta-brand-plus-outline-16",
	"meta-brand-three-lines-left-outline-16",
	"meta-brand-toggle-filled-16",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = [
		"TextHeading",
		"TextSubheading",
		"TextCaption",
		"TextBody"
	], p = [
		"TextInput",
		"TextArea",
		"DatePicker"
	], _ = [
		"RadioButtonsGroup",
		"CheckboxGroup",
		"Dropdown",
		"OptIn"
	], f = ["Image"], g = (e = {}, e.TextHeading = o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16, e.TextSubheading = o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16, e.TextCaption = o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16, e.TextBody = o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16, e.TextArea = o("meta-brand-three-lines-left-outline-16").metaBrandThreeLinesLeftTextAlignLeftOutline16, e.TextInput = o("meta-brand-a-a-rectangle-filled-16").metaBrandAARectangleTextSquareFilled16, e.CheckboxGroup = o("meta-brand-checkmark-square-filled-16").metaBrandCheckmarkSquareCheckmarkSquareFilled16, e.RadioButtonsGroup = o("meta-brand-circle-inside-circle-filled-16").metaBrandCircleInsideCircleCircle2Filled16, e.Dropdown = o("meta-brand-bullet-list-outline-16").metaBrandBulletListListBulletOutline16, e.DatePicker = o("meta-brand-grid-calendar-filled-16").metaBrandGridCalendarCalendarFilled16, e.OptIn = o("meta-brand-toggle-filled-16").metaBrandToggleToggleFilled16, e.Image = o("meta-brand-mountain-square-outline-16").metaBrandMountainSquarePhotoSquareOutline16, e), h = "Label";
	function y(e, t) {
		switch (t === void 0 && (t = o("WAMFlowsHSMEditorUtils").generateComponentId(h)), e) {
			case "TextHeading": return {
				text: s._(
					/*BTDS*/
					""
				).toString(),
				type: e
			};
			case "TextSubheading": return {
				text: s._(
					/*BTDS*/
					""
				).toString(),
				type: e
			};
			case "TextCaption": return {
				text: s._(
					/*BTDS*/
					""
				).toString(),
				type: e
			};
			case "TextBody": return {
				text: s._(
					/*BTDS*/
					""
				).toString(),
				type: e
			};
			case "TextArea": return {
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "TextInput": return {
				"input-type": "text",
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "CheckboxGroup": return {
				"data-source": [{
					id: "0",
					title: "Option 1"
				}, {
					id: "1",
					title: "Option 2"
				}],
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "RadioButtonsGroup": return {
				"data-source": [{
					id: "0",
					title: "Option 1"
				}, {
					id: "1",
					title: "Option 2"
				}],
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "Dropdown": return {
				"data-source": [{
					id: "0",
					title: "Option 1"
				}, {
					id: "1",
					title: "Option 2"
				}],
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "DatePicker": return {
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "OptIn": return {
				label: h,
				name: t,
				required: !0,
				type: e
			};
			case "Image": return {
				height: 400,
				"scale-type": "contain",
				src: o("WAMFlowsHSMEditorUtils").getBlankBase64Image(),
				type: e
			};
		}
	}
	function C(e) {
		var t = e.disableComponentsWithInput, n = t === void 0 ? !1 : t, a = e.isDisabled, i = a === void 0 ? !1 : a, l = e.onCreate, u = d(function(e) {
			var t, n = y(e);
			l({
				flowJSON: n,
				id: (t = n.name) != null ? t : o("WAMFlowsHSMEditorUtils").generateComponentId(e)
			});
		}, [l]), h = o("WAMFlowsHSMEditorUtils").useNumberOfImagesOnScreen(), C = o("WAMFlowsHSMEditorUtils").useNumberOfOptinsOnScreen(), b = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.OptIn.maxNumberOfComponentsPerScreen, v = C >= b;
		return c.jsx("div", { children: c.jsxs(r("GeoDropdownMenu.react"), {
			icon: o("meta-brand-plus-outline-16").metaBrandPlusPlusOutline16,
			isDisabled: i,
			label: s._(
				/*BTDS*/
				""
			),
			tooltip: i ? c.jsx(r("GeoTooltip.react"), { content: o("WAMFlowsHSMFbt").MAX_OPTIONS_LIMIT_REACHED_TOOLTIP(o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.COMPONENT.maxNumberOfComponents) }) : null,
			children: [
				c.jsx(r("GeoMenuSubmenu.react"), {
					"data-testid": void 0,
					icon: o("meta-brand-big-a-little-a-outline-16").metaBrandBigALittleATextOutline16,
					label: s._(
						/*BTDS*/
						""
					),
					children: m.map(function(e) {
						var t = e === "Image" && h != null && h >= o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.Image.maxImagesPerScreen;
						return c.jsx(r("GeoMenuItem.react"), {
							"data-testid": void 0,
							icon: g[e],
							isDisabled: t,
							label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
							onClick: function() {
								return u(e);
							}
						}, e);
					})
				}),
				c.jsx(r("GeoMenuSubmenu.react"), {
					"data-testid": void 0,
					icon: o("meta-brand-mountain-square-outline-16").metaBrandMountainSquarePhotoSquareOutline16,
					label: s._(
						/*BTDS*/
						""
					),
					children: f.map(function(e) {
						return c.jsx(r("GeoMenuItem.react"), {
							"data-testid": void 0,
							icon: g[e],
							label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
							onClick: function() {
								return u(e);
							}
						}, e);
					})
				}),
				n ? null : c.jsx(r("GeoMenuSubmenu.react"), {
					"data-testid": void 0,
					icon: o("meta-brand-a-a-rectangle-filled-16").metaBrandAARectangleTextSquareFilled16,
					label: s._(
						/*BTDS*/
						""
					),
					children: p.map(function(e) {
						return c.jsx(r("GeoMenuItem.react"), {
							"data-testid": void 0,
							icon: g[e],
							label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
							onClick: function() {
								return u(e);
							}
						}, e);
					})
				}),
				n ? null : c.jsx(r("GeoMenuSubmenu.react"), {
					"data-testid": void 0,
					icon: o("meta-brand-bullet-list-outline-16").metaBrandBulletListListBulletOutline16,
					label: s._(
						/*BTDS*/
						""
					),
					children: _.map(function(e) {
						var t = e === "OptIn", n = t && v ? s._(
							/*BTDS*/
							"",
							[s._param("Max number of optins component", b)]
						) : void 0;
						return c.jsx(r("GeoMenuItem.react"), {
							"data-testid": void 0,
							disabledMessage: n,
							icon: g[e],
							isDisabled: t && v,
							label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
							onClick: function() {
								return u(e);
							}
						}, e);
					})
				})
			]
		}) });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.disableComponentsWithInput, n = t === void 0 ? !1 : t, o = e.isDisabled, a = o === void 0 ? !1 : o, l = e.onCreate;
		return c.jsx(r("CometPlaceholder.react"), {
			fallback: c.jsx(r("GeoGlimmer.react"), {
				height: 36,
				width: 144,
				loggingName: i.id
			}),
			name: i.id,
			children: c.jsx(C, {
				disableComponentsWithInput: n,
				isDisabled: a,
				onCreate: l
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.iconByType = g, l.generateComponentByType = y, l.WAMFlowsHSMEditorAddComponentButtonContainer = b;
}), 226);
