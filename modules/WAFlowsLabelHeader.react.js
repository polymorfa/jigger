__d("WAFlowsLabelHeader.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		wrapperSingleLine: {
			display: "xrvj5dj",
			width: "xeq5yr9",
			gridTemplateColumns: "x52fmzj",
			columnGap: "xouci9l",
			maxWidth: "x193iq5w",
			fontSize: "x1qlqyl8",
			$$css: !0
		},
		wrapperMultiLine: {
			display: "x1lliihq",
			$$css: !0
		}
	}, g = 2, h = 1;
	function y(t) {
		var n = t.dataTestId, a = n === void 0 ? "label-header" : n, i = t.enabled, l = i === void 0 ? !0 : i, s = t.fontWeight, c = t.isSmallLabel, y = c === void 0 ? !1 : c, C = t.label, b = t.labelResponsiveFontContainerXStyle, v = t.labelXStyle, S = t.required, R = S === void 0 ? !1 : S, L = t.wrapperXStyle, E = _(!1), k = E[0], I = E[1], T = o("WAFlowsEnvContext.react").useWAFlowsEnv(), D = T.env, x = p(), $ = o("WAFlowsComponentConstants").LABEL_LINES_MAX.SELECT_LIST_GROUP_LABEL, P = {
			enabled: l,
			fontWeight: s,
			text: C,
			xstyle: v,
			responsiveFontContainerXStyle: b,
			maxLines: $
		}, N = babelHelpers.extends({}, P, { text: C }), M = babelHelpers.extends({}, P, { text: "(" + o("WAFlowsLocalization").getOptionalFbt(D.platform).toString() + ")" }), w = d(function() {
			if (x.current != null) {
				var e = x.current.offsetHeight, t = Math.ceil(parseFloat(o("getStyleValue").getStyleValue("line-height", x.current))), n = D.platform === "ios" ? g : h, r = e / t > n;
				I(function(e) {
					return e !== r ? r : e;
				});
			}
		}, [D.platform]);
		return m(function() {
			w();
		}, [w]), u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(k ? f.wrapperMultiLine : f.wrapperSingleLine, L), {
			"data-testid": void 0,
			ref: x,
			children: [y ? u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, babelHelpers.extends({}, N, { dataTestId: a + "-small" })) : u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, babelHelpers.extends({}, N, { dataTestId: a + "-large" })), R == null || !R && (y ? u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, babelHelpers.extends({}, M, { dataTestId: a + "-optional-small" })) : u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, babelHelpers.extends({}, M, { dataTestId: a + "-optional-large" })))]
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.WAFlowsLabelHeader = y;
}), 98);
