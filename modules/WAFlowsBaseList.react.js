__d("WAFlowsBaseList.react", [
	"WAFlowsEnvContext.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		blockContainer: {
			boxSizing: "x9f619",
			$$css: !0
		},
		listContainer: {
			height: "xg7h5cd",
			$$css: !0
		},
		blockContainerOptionDisabled: {
			"::after_opacity": "x1arc8t3",
			$$css: !0
		}
	}, m = {
		blockContainer: {
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
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
		blockContainerBottom: {
			paddingBottom: "xzcr4wo",
			$$css: !0
		},
		listContainer: {
			paddingBottom: "xmnamis",
			paddingTop: "x30hkwx",
			$$css: !0
		}
	}, p = {};
	function _(t) {
		var n = t.baseListRef, a = t.dataSource, i = t.dataTestId, l = i === void 0 ? "WAFlowsBaseList" : i, s = t.enabled, m = s === void 0 ? !0 : s, p = t.hideMedia, _ = p === void 0 ? !1 : p, g = t.listItemXstyle, h = t.renderItem, y = t.xstyle, C = o("WAFlowsEnvContext.react").useWAFlowsEnv(), b = C.env, v = f(b.platform), S = (e || (e = r("stylex")))(d.blockContainer, v.blockContainer, v.blockContainerOption, !m && d.blockContainerOptionDisabled, !_ && v.blockContainerBottom, g), R = c(function() {
			return a == null ? void 0 : a.map(function(e, t) {
				var n = l != null ? l + "-row-" + t : null;
				return u.jsx("li", {
					className: S,
					"data-testid": void 0,
					children: h(e, t)
				}, t);
			});
		}, [
			S,
			a,
			h,
			l
		]);
		return u.jsx("ul", babelHelpers.extends({}, e.props(v.blockContainerOptions, d.listContainer, y), {
			"data-testid": void 0,
			role: "listbox",
			ref: n,
			children: R
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e === "android" ? p : m;
	}
	l.default = _;
}), 98);
