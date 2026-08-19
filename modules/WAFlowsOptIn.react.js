__d("WAFlowsOptIn.react", [
	"fbt",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsOpenExternalURI",
	"WAFlowsTickInput.react",
	"WAFlowsUseValueUpdaterOnInit",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"react",
	"stylex",
	"useTruncateText"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useState;
	function f(e, t, n, r, a) {
		var i = e === "ios" ? C : y, l = "(" + o("WAFlowsLocalization").getOptionalFbt(e).toString() + ")", s = r ? a : l + " " + a, u = t ? i.boxRTL : i.boxLTR, c = e === "wa_web" ? !n && i.disabledLinkText : i.linkText;
		return {
			platformStyles: i,
			displayLabel: s,
			boxDirectionStyle: u,
			linkXStyle: c
		};
	}
	function g(t) {
		var n, a, i = t.dataTestId, l = i === void 0 ? "wa-flows-opt-in" : i, u = t.enabled, d = u === void 0 ? !0 : u, g = t.hasValue, y = g === void 0 ? !1 : g, C = t.label, b = t.name, v = t.onClick, S = t.onSelect, R = t.onUnselect, L = t.required, E = L === void 0 ? !1 : L, k = t.version, I = o("WAFlowsFormContext").useWAFlowsForm(), T = I.getValue, D = I.setValue, x = o("WAFlowsEnvContext.react").useWAFlowsEnv(), $ = x.env, P = (n = o("useTruncateText").useTruncateText(C, o("WAFlowsComponentConstants").OPT_IN_MAX_LENGTH)) != null ? n : C, N = f($.platform, $.isRTL, d, E, P), M = N.boxDirectionStyle, w = N.displayLabel, A = N.linkXStyle, F = N.platformStyles, O = y ? !0 : T(b);
		o("WAFlowsUseValueUpdaterOnInit").useValueUpdaterOnInit({
			initialValue: O,
			updateCondition: function(t) {
				return O !== null && O !== !1 && t !== O;
			},
			onUpdate: S,
			isEnabled: o("WAFlowsComponentsCommon").getExecuteOnSelectActionScreenChange(k)
		});
		var B = m(function() {
			O == null || O === !1 ? S == null || S() : R == null || R();
		}, [
			S,
			R,
			O
		]), W = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), q = W.invoke, U = p(function() {
			try {
				var e;
				return new URL((e = v == null ? void 0 : v.url) != null ? e : "");
			} catch (e) {
				return null;
			}
		}, [v]), V = m(function() {
			U != null && o("WAFlowsOpenExternalURI").openExternalURI(U, q);
		}, [q, U]), H = _(!1), G = H[0], z = H[1], j = $.platform === "wa_web" ? {
			onMouseEnter: function() {
				return z(!0);
			},
			onMouseLeave: function() {
				return z(!1);
			}
		} : {}, K = (a = v == null ? void 0 : v.isOpenUrlAction) != null ? a : !1, Q = K ? V : v;
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.root, F.root), j, { children: [c.jsx(r("WAFlowsTickInput.react"), {
			type: "checkbox",
			id: b,
			name: b,
			checked: O === !0,
			enabled: d,
			xstyle: [
				h.box,
				F.box,
				M
			],
			onChange: function() {
				D(b, O === !0 ? null : !0), B == null || B();
			},
			dataTestId: l + "-checkbox",
			isContainerHovered: G
		}), c.jsx("div", { children: c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			xstyle: [h.linkLabelRoot, F.plainText],
			linkXStyle: A,
			text: w,
			linkText: Q != null ? s._(
				/*BTDS*/
				""
			) : void 0,
			linkOnClick: Q,
			htmlFor: b,
			dataTestId: l + "-label"
		}) })] }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = {
		root: {
			display: "x78zum5",
			alignItems: "x1cy8zhl",
			$$css: !0
		},
		linkLabelRoot: {
			width: "x14atkfc",
			height: "xt7dq6l",
			direction: "x1epdd7z",
			$$css: !0
		},
		box: {
			opacity: "x1u564od",
			$$css: !0
		}
	}, y = {
		root: {
			fontSize: "x1xto104",
			$$css: !0
		},
		boxLTR: {
			marginRight: "xdh7pzt",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		boxRTL: {
			marginLeft: "xuqiktq",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		linkText: {
			fontWeight: "x10vqnp0",
			$$css: !0
		},
		disabledLinkText: {
			color: "xhslqc4",
			$$css: !0
		},
		plainText: {
			color: "xhslqc4",
			$$css: !0
		}
	}, C = {
		box: {
			marginTop: "x1tbvfm1",
			marginBottom: "x1hpqcdg",
			marginInlineStart: "x4qatp2",
			marginInlineEnd: "xa6g792",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		plainText: {
			marginTop: "x1tbvfm1",
			fontSize: "x1xto104",
			color: "xhslqc4",
			$$css: !0
		}
	}, b = "OptIn", v = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			name: {
				type: "string",
				minLength: 1
			},
			label: {
				type: "string",
				minLength: 1
			},
			required: { type: "boolean" },
			visible: { type: "boolean" },
			onClick: {
				instanceof: "Function",
				properties: {
					name: { type: "string" },
					payload: { type: "object" }
				},
				required: ["name", "payload"]
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["label", "name"]
	}, o("WAFlowsWELJUtils").getValidationSchema([{
		prop: "label",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").OPT_IN_MAX_LENGTH
	}], [o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE], [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE]), { additionalProperties: !1 });
	function S(e) {
		var t = e.componentResponse;
		return c.jsx("div", {
			className: "x1cvbfqh x47corl",
			children: c.jsx(g, {
				name: t.name,
				label: String(t.label),
				enabled: !1,
				hasValue: typeof t.value == "boolean" && t.value
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.WAFlowsOptIn = g, l.TYPE = b, l.SCHEMA = v, l.RESPONSE_VIEW = S;
}), 226);
