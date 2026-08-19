__d("WAFlowsCalendarPicker.react", [
	"fbt",
	"WAFlowsCalendarPickerNativeBridge",
	"WAFlowsCalendarPickerUtils",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsDatePickerUtils",
	"WAFlowsDefaultResponseView.react",
	"WAFlowsDomainUtils",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsGroupComponentLabel.react",
	"WAFlowsIcon.react",
	"WAFlowsPressable.react",
	"WAFlowsStateProvider.react",
	"WAFlowsTextInput.react",
	"WAFlowsTypes",
	"WAFlowsValidationConstants",
	"WAFlowsWELJActionCreators",
	"WAFlowsWELJUtils",
	"react",
	"stylex",
	"unsafeCast"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = {
		instanceWrapper: {
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		instanceContainer: {
			position: "x1n2onr6",
			":not(:last-child)::after_position": "x10bgm7d",
			":not(:last-child)::after_content": "xuqu9et",
			":not(:last-child)::after_height": "x1i98km4",
			":not(:last-child)::after_left": "x17iwzm3",
			":not(:last-child)::after_right": "x1314b1f",
			":not(:last-child)::after_insetInlineStart": null,
			":not(:last-child)::after_insetInlineEnd": null,
			":not(:last-child)::after_bottom": "xaf9lo4",
			":not(:last-child)::after_zIndex": "x13daubi",
			":not(:last-child)::after_backgroundColor": "x1rjjoi9",
			$$css: !0
		},
		label: {
			fontWeight: "x1xq4eza",
			fontSize: "x174ylx0",
			$$css: !0
		},
		helperTextWrapper: {
			marginTop: "xdj266r",
			marginBottom: "x1gr9t9r",
			$$css: !0
		},
		icon: {
			width: "xoden9",
			marginRight: "x7g78ez",
			marginLeft: "xuqiktq",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		iconRTL: {
			transform: "x19jd1h0",
			marginRight: "xdh7pzt",
			marginLeft: "xu21n7h",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		inputLabelNotGrowing: {
			width: "x18itk1x",
			$$css: !0
		}
	}, C = {
		instanceContainer: {
			":not(:last-child)_marginBottom": "xf76kyx",
			$$css: !0
		},
		label: {
			color: "xhslqc4",
			$$css: !0
		},
		icon: {
			marginTop: "xdj266r",
			marginInlineEnd: "xpntml2",
			marginBottom: "xat24cr",
			marginInlineStart: "x1mpj02h",
			$$css: !0
		}
	}, b = 16, v = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	];
	function S(e, t, n, r) {
		var a = !!e, i = t === "web_tooling", l = parseInt(n, 10), s = t === "ios" && !isNaN(l) && l < b;
		return a && (i || r === "wa_web") || s || o("WAFlowsDomainUtils").isOndemandFlowsInDesktopBrowser() || o("WAFlowsDomainUtils").isWAWebDevUrl();
	}
	function R(e, t, n) {
		if (e == null) return [t, t];
		var r = o("WAFlowsCalendarPickerUtils").getRangeKeys();
		if (n) {
			var a, i;
			return [(a = e[r.start]) != null ? a : t, (i = e[r.end]) != null ? i : t];
		}
		return [e != null ? e : t, t];
	}
	function L(e, t, n, r, o, a, i, l) {
		e || t || (n && !o && i(!0), r && !a && l(!0));
	}
	function E(t) {
		var n = t.description, a = t.enabled, i = t.helperText, l = t.includeDays, s = l === void 0 ? v : l, u = t.label, d = t.maxDate, g = d === void 0 ? o("WAFlowsCalendarPickerUtils").getDefaultMaxDate() : d, y = t.maxDays, C = t.minDate, b = C === void 0 ? o("WAFlowsCalendarPickerUtils").getDefaultMinDate() : C, E = t.minDays, T = t.mode, D = T === void 0 ? "single" : T, x = t.name, $ = t.onSelect, P = t.required, N = t.title, M = t.unavailableDates, w = h(null), A = w[0], F = w[1], O = h(!1), B = O[0], W = O[1], q = h(!1), U = q[0], V = q[1], H = h(!1), G = H[0], z = H[1], j = h(!1), K = j[0], Q = j[1], X = f(function() {
			return A != null;
		}, [A]), Y = o("WAFlowsFormContext").useWAFlowsForm(), J = o("WAFlowsEnvContext.react").useWAFlowsEnv(), Z = J.env, ee = p(o("WAFlowsStateProvider.react").FlowStateDispatchContext), te = I(Z.platform), ne = D === "range", re = Y.getError, oe = Y.getValue, ae = Y.setBlur, ie = Y.setFocus, le = Y.setValue, se = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), ue = se.actionOverrides.invoke, ce = se.lazyLoadedComponents, de = ce == null ? void 0 : ce.get(o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER), me = f(function() {
			return S(de, Z.hostPlatform, Z.userAgentVersion, Z.platform);
		}, [
			de,
			Z.hostPlatform,
			Z.userAgentVersion,
			Z.platform
		]), pe = m(function(e, t) {
			return R(e, t, ne);
		}, [ne]), _e = m(function(e, t) {
			var n = pe(e, t), r = n[0], o = n[1];
			return [String(r), String(o)];
		}, [pe]), fe = m(function(e, t) {
			var n = pe(e, t), r = n[0], o = n[1];
			return [!!r, !!o];
		}, [pe]), ge = _e(r("unsafeCast")(oe(x)), ""), he = ge[0], ye = ge[1], Ce = _e(r("unsafeCast")(u), ""), be = Ce[0], ve = Ce[1], Se = _e(r("unsafeCast")(i), ""), Re = Se[0], Le = Se[1], Ee = fe(r("unsafeCast")(P), !1), ke = Ee[0], Ie = Ee[1], Te = _e(r("unsafeCast")(re(x, !0)), ""), De = Te[0], xe = Te[1], $e = m(function(e) {
			return ne ? x + "_" + e : x;
		}, [x, ne]), Pe = m(function(e) {
			e && ae(x), F(null);
		}, [x, ae]), Ne = m(function() {
			Pe(A), o("WAFlowsCalendarPickerNativeBridge").hideNativeOverlay(ue), ee(o("WAFlowsWELJActionCreators").createTogglCalendarPickerAction(!1));
		}, [
			A,
			Pe,
			ue,
			ee
		]), Me = m(function(e) {
			e === "end" ? V(!0) : W(!0);
		}, []), we = m(function(e) {
			F(e), ie($e(e)), me ? (o("WAFlowsCalendarPickerNativeBridge").showNativeOverlay(ue), ee(o("WAFlowsWELJActionCreators").createTogglCalendarPickerAction(!0))) : o("WAFlowsCalendarPickerNativeBridge").openNativeCalendar(ue, Y, Z.platform, {
				name: x,
				label: be,
				endDateLabel: ve,
				dateValue: he,
				endDateValue: ye,
				source: e,
				minDate: b,
				maxDate: g,
				minDays: E,
				maxDays: y,
				unavailableDates: M,
				includeDays: s,
				isRange: ne,
				onClose: function() {
					Me(e), $ == null || $(), Pe(e);
				}
			});
		}, [
			Z.platform,
			ue,
			Y,
			me,
			$e,
			ie,
			Pe,
			he,
			ve,
			ye,
			s,
			be,
			g,
			y,
			b,
			E,
			x,
			M,
			ne,
			$,
			Me,
			ee
		]), Ae = m(function(e, t) {
			le(x, o("WAFlowsCalendarPickerUtils").getFormattedDate(e, he, ye, t, ne)), Me(t);
		}, [
			x,
			he,
			ye,
			ne,
			le,
			Me
		]), Fe = m(function(e) {
			var t = A === "end" ? ye : he;
			e !== t && (Ae(e, A), $ == null || $()), Ne();
		}, [
			he,
			ye,
			Ae,
			Ne,
			$,
			A
		]), Oe = m(function(e) {
			Ae("", e), ae(x), $ == null || $();
		}, [
			Ae,
			ae,
			x,
			$
		]), Be = m(function(e, t, n) {
			return n || t ? e : "";
		}, []);
		_(function() {
			L(B, U, De, xe, G, K, z, Q);
		}, [
			De,
			xe,
			G,
			K,
			B,
			U
		]);
		var We = { enabled: a };
		return c.jsxs("div", { children: [
			me && de && c.jsx(de, {
				isOpen: X,
				date: he,
				endDate: ye,
				label: be,
				endDateLabel: ve,
				source: A,
				minDate: b,
				maxDate: g,
				unavailableDates: M,
				includeDays: s,
				minDays: E,
				maxDays: y,
				onClose: Ne,
				onSelect: Fe
			}),
			c.jsx(o("WAFlowsGroupComponentLabel.react").WAFlowsGroupComponentLabel, {
				label: N,
				description: n,
				required: ke === !0 || Ie === !0,
				enabled: a
			}),
			c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(te.instanceWrapper), { children: [c.jsx(k, babelHelpers.extends({}, We, {
				displayDate: o("WAFlowsDatePickerUtils").getDisplayDate(he, Z.locale),
				name: $e("start"),
				label: be,
				helperText: Re,
				required: ke,
				error: Be(De, B, G),
				isDialogOpenOnSource: X && A === "start",
				onClick: function() {
					return we("start");
				},
				onClear: function() {
					return Oe("start");
				}
			})), ne && c.jsx(k, babelHelpers.extends({}, We, {
				displayDate: o("WAFlowsDatePickerUtils").getDisplayDate(ye, Z.locale),
				name: $e("end"),
				label: ve != null ? ve : "",
				helperText: Le,
				required: Ie,
				error: Be(xe, U, K),
				isDialogOpenOnSource: X && A === "end",
				onClick: function() {
					return we("end");
				},
				onClear: function() {
					return Oe("end");
				}
			}))] }))
		] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(t) {
		var n = t.displayDate, a = t.enabled, i = t.error, l = t.helperText, u = t.isDialogOpenOnSource, d = t.label, m = t.name, p = t.onClear, _ = t.onClick, f = t.required, h = g(null), y = o("WAFlowsEnvContext.react").useWAFlowsEnv(), C = y.env, b = I(C.platform), v = c.jsx(r("WAFlowsPressable.react"), {
			enabled: a,
			pressableRef: h,
			manualPressedState: u,
			children: c.jsx(r("WAFlowsIcon.react"), {
				id: "waf_calendar",
				onClick: _,
				altText: s._(
					/*BTDS*/
					""
				),
				xstyle: [b.icon, C.isRTL && b.iconRTL]
			})
		});
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(b.instanceContainer), {
			ref: h,
			children: c.jsx(o("WAFlowsTextInput.react").WAFlowsTextInput, {
				name: m,
				label: d,
				helperText: l,
				value: n,
				readOnly: !0,
				enabled: a,
				required: f,
				error: i,
				onClick: _,
				onClear: p,
				useFormContext: !0,
				useCustomBlur: !0,
				showClearButtonOnBlur: !0,
				inputType: "date",
				inputLabelXstyle: n ? b.inputLabelNotGrowing : null,
				helperTextWrapperXstyle: b.helperTextWrapper,
				leadIcon: C.platform === "android" ? v : void 0,
				trailIcon: C.platform === "ios" ? v : void 0
			})
		}));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		return e === "ios" ? y : C;
	}
	var T = [
		{
			prop: "title",
			keyword: "maxLength",
			value: o("WAFlowsComponentConstants").CALENDAR_PICKER_MAX_LENGTH_TITLE
		},
		{
			prop: "description",
			keyword: "maxLength",
			value: o("WAFlowsComponentConstants").CALENDAR_PICKER_MAX_LENGTH_DESCRIPTION
		},
		{
			prop: "label",
			keyword: o("WAFlowsValidationConstants").CALENDAR_PICKER_MAX_LENGTH_LABEL,
			value: o("WAFlowsComponentConstants").CALENDAR_PICKER_MAX_LENGTH_LABEL
		},
		{
			prop: "helperText",
			keyword: o("WAFlowsValidationConstants").CALENDAR_PICKER_MAX_LENGTH_HELPER_TEXT,
			value: o("WAFlowsComponentConstants").CALENDAR_PICKER_MAX_LENGTH_HELPER_TEXT
		}
	], D = [
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE,
		o("WAFlowsValidationConstants").FORMATTED_DATE_STRING_ARRAY
	], x = function(t) {
		return { oneOf: [{ type: t }, {
			type: "object",
			properties: {
				startDate: { type: t },
				endDate: { type: t }
			}
		}] };
	}, $ = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			name: { type: "string" },
			title: { type: "string" },
			description: { type: "string" },
			label: x("string"),
			visible: { type: "boolean" },
			required: x("boolean"),
			helperText: x("string"),
			mode: { enum: ["single", "range"] },
			minDate: { type: "string" },
			maxDate: { type: "string" },
			unavailableDates: {
				type: "array",
				items: { type: "string" }
			},
			includeDays: {
				type: "array",
				items: { type: "string" }
			},
			minDays: { type: "number" },
			maxDays: { type: "number" },
			onSelect: {
				instanceof: "Function",
				properties: { name: { type: "string" } }
			},
			isSoftValidationMode: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: [
			"name",
			"label",
			"isSoftValidationMode"
		]
	}, o("WAFlowsWELJUtils").getValidationSchema(T, D, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE]), { additionalProperties: !1 });
	function P(e) {
		var t, n = e.componentResponse, r = (t = n.componentData) == null ? void 0 : t.componentMeta;
		return c.jsx("div", { children: (r == null ? void 0 : r.mode) === "range" ? c.jsx(N, { componentResponse: n }) : c.jsx(M, { componentResponse: n }) });
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t, n, a = e.componentResponse, i = o("WAFlowsEnvContext.react").useWAFlowsEnv(), l = i.env, s = (t = r("unsafeCast")(a.value)) != null ? t : {}, u = s["end-date"], d = u === void 0 ? "" : u, m = s["start-date"], p = m === void 0 ? "" : m, _ = (n = r("unsafeCast")(a.label)) != null ? n : {}, f = _["end-date"], g = f === void 0 ? "" : f, h = _["start-date"], y = h === void 0 ? "" : h, C = typeof a.value == "string", b = babelHelpers.extends({}, a, {
			value: C ? a.value : o("WAFlowsDatePickerUtils").getDisplayDate(p, l.locale),
			label: y
		}), v = babelHelpers.extends({}, a, {
			value: C ? a.value : o("WAFlowsDatePickerUtils").getDisplayDate(d, l.locale),
			label: g
		});
		return c.jsxs("div", {
			className: "x78zum5 xdt5ytf x1fc8kun",
			children: [b.value !== "" && c.jsx(r("WAFlowsDefaultResponseView.react"), { componentResponse: b }), v.value !== "" && c.jsx(r("WAFlowsDefaultResponseView.react"), { componentResponse: v })]
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.componentResponse, n = o("WAFlowsEnvContext.react").useWAFlowsEnv(), a = n.env, i = babelHelpers.extends({}, t, { value: isNaN(new Date(String(t.value))) ? t.value : o("WAFlowsDatePickerUtils").getDisplayDate(String(t.value), a.locale) });
		return c.jsx(r("WAFlowsDefaultResponseView.react"), { componentResponse: i });
	}
	M.displayName = M.name + " [from " + i.id + "]", l.WAFlowsCalendarPicker = E, l.TYPE = o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER, l.SCHEMA = $, l.RESPONSE_VIEW = P;
}), 226);
