__d("WDSSlider.react", [
	"BaseRangeSlider.react",
	"BaseSliderInput.react",
	"BaseSliderInputWDSVariants",
	"WDSText.react",
	"react",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"ariaValueText",
		"disabled",
		"displayValueText",
		"markers",
		"max",
		"min",
		"onChange",
		"onChangeSettled",
		"startEndLabels",
		"step",
		"testid",
		"values"
	], s, u = s || (s = o("react")), c = s, d = c.useMemo, m = c.useRef, p = {
		container: {
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			display: "x78zum5",
			width: "xh8yej3",
			rowGap: "x129bwdz",
			columnGap: "x1trrmfo",
			$$css: !0
		},
		slider: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		valueLabel: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			paddingLeft: null,
			paddingRight: null,
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function _(e) {
		return e.toString();
	}
	function f(e, t, n, r) {
		if (e != null) return r <= 0 ? e : e.map(function(e) {
			var o = t + Math.round((e - t) / r) * r;
			return Math.min(n, Math.max(t, o));
		});
	}
	function g(t) {
		var n = t.ariaValueText, a = n === void 0 ? _ : n, i = t.disabled, l = i === void 0 ? !1 : i, s = t.displayValueText, c = s === void 0 ? _ : s, g = t.markers, h = t.max, y = h === void 0 ? 100 : h, C = t.min, b = C === void 0 ? 0 : C, v = t.onChange, S = t.onChangeSettled, R = t.startEndLabels, L = R === void 0 ? "none" : R, E = t.step, k = E === void 0 ? 1 : E, I = t.testid, T = t.values, D = babelHelpers.objectWithoutPropertiesLoose(t, e), x = function(t) {
			return u.jsx("span", {
				"aria-hidden": !0,
				children: u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: l ? "contentDisabled" : "contentDefault",
					xstyle: p.valueLabel,
					children: c(t)
				})
			});
		}, $ = function() {
			return L === "minMax" ? [b, y] : L === "currentValues" ? T.length === 2 ? [T[0], T[1]] : null : L === "none" ? null : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + L);
			})();
		}, P = $(), N = d(function() {
			return f(g, b, y, k);
		}, [
			g,
			b,
			y,
			k
		]), M = m(null);
		return u.jsxs(o("react-strict-dom").html.div, {
			"data-testid": void 0,
			ref: M,
			style: p.container,
			children: [
				P ? x(P[0]) : null,
				u.jsx(o("react-strict-dom").html.div, {
					style: p.slider,
					children: T.length === 1 ? u.jsx(r("BaseSliderInput.react"), babelHelpers.extends({}, D, {
						"aria-valuemin": b,
						"aria-valuemax": y,
						"aria-valuenow": T[0],
						"aria-valuetext": a(T[0]),
						disabled: l,
						markers: N,
						max: y,
						min: b,
						onChange: function(t) {
							var e = Number(t.target.value);
							v == null || v([e]);
						},
						onValue: function(t) {
							S == null || S([t]);
						},
						step: k,
						value: T[0],
						variant: o("BaseSliderInputWDSVariants").BaseSliderInputWDSVariant
					})) : u.jsx(r("BaseRangeSlider.react"), {
						"aria-label": [D == null ? void 0 : D["aria-label"], D == null ? void 0 : D["aria-label"]],
						"aria-labelledby": [D == null ? void 0 : D["aria-labelledby"], D == null ? void 0 : D["aria-labelledby"]],
						disabled: l,
						markers: N,
						max: y,
						min: b,
						onChange: function(t) {
							var e, n = ((e = M.current) == null ? void 0 : e.querySelectorAll("input")[0]) === t.target;
							n ? v == null || v([Number(t.target.value), T[1]]) : v == null || v([T[0], Number(t.target.value)]);
						},
						onValue: function(t) {
							S == null || S(t);
						},
						step: k,
						value: [T[0], T[1]],
						variant: o("BaseSliderInputWDSVariants").BaseSliderInputWDSVariant
					})
				}),
				P ? x(P[1]) : null
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
