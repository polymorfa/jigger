__d("WAWebButton.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFlexStyles",
	"WAWebSpinner.react",
	"WDSButton.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebFocusState"
], (function(t, n, r, o, a, i, l, s) {
	var e = [
		"ref",
		"themeStyles",
		"ariaLabel",
		"ariaRoleDescription",
		"borderStyles",
		"buttonType",
		"children",
		"disabled",
		"icon",
		"iconXstyle",
		"nowrap",
		"onClick",
		"paddingStyles",
		"shadowOnHover",
		"spinner",
		"stretch",
		"tabOrder",
		"testid",
		"width"
	], u = ["ref"], c = ["ref"], d = ["ref"], m = ["ref"], p = ["ref"], _ = ["ref"], f = ["direction"], g, h, y = h || (h = o("react")), C = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} };
	function b(e) {
		switch (e) {
			case "primary":
			case "strong-primary": return k;
			case "secondary": return T;
			case "plain-white": return x;
			case "solid-warning": return A;
			case "warning":
			case "warning-secondary": return O;
			case "simplified":
			case "strong": return M;
			case "negative-destructive": return W;
		}
	}
	var v = {
		button: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			fontWeight: "xk50ysn",
			fontSize: "x1f6kntn",
			lineHeight: "xyesn5m",
			whiteSpace: "x126k92a",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			outlineOffset: "x1hl8ikr",
			transitionProperty: "xfagghw",
			transitionDuration: "x9dyr19",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		hover: {
			":hover_boxShadow": "xv52azi",
			$$css: !0
		},
		disabled: {
			cursor: "x1h6gzvc",
			boxShadow: "x1gnnqk1",
			":hover_cursor": "xercxcz",
			":hover_boxShadow": "x1wtrbu5",
			$$css: !0
		},
		focused: {
			outline: "x12zc9zx",
			$$css: !0
		},
		nowrap: {
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		stretch: {
			display: "x1lliihq",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function S(t) {
		var n = t.ref, a = t.themeStyles, i = t.ariaLabel, l = t.ariaRoleDescription, s = t.borderStyles, u = t.buttonType, c = t.children, d = t.disabled, m = t.icon, p = t.iconXstyle, _ = t.nowrap, f = _ === void 0 ? !0 : _, h = t.onClick, b = t.paddingStyles, S = t.shadowOnHover, R = S === void 0 ? !0 : S, L = t.spinner, E = t.stretch, k = t.tabOrder, I = t.testid, T = t.width, D = babelHelpers.objectWithoutPropertiesLoose(t, e), x = r("useWAWebFocusState")(), $ = x[0], P = x[1], N = r("useMergeRefs")(n, $), M = o("WAWebFlexStyles").getFlexStyles(D);
		return y.jsx("button", {
			disabled: d,
			"aria-disabled": d,
			"data-tab": k,
			"data-testid": I,
			onClick: h,
			className: (g || (g = r("stylex")))([
				C.paddingBlock10,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
				[
					v.button,
					a.button,
					a.buttonRefreshed
				],
				M.xstyle,
				P === !0 && [v.focused, a.focused],
				d === !0 && v.disabled,
				f === !0 && v.nowrap,
				E === !0 && v.stretch,
				R === !0 && v.hover,
				s,
				b
			]),
			ref: N,
			style: babelHelpers.extends({}, M.inline, { width: T }),
			type: u,
			"aria-label": i,
			"aria-roledescription": l,
			children: y.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: [y.jsxs(o("WAWebFlex.react").FlexRow, {
					testid: "content",
					justify: "center",
					align: "center",
					gap: 8,
					grow: 1,
					children: [m != null && y.jsx(m, {
						height: 16,
						iconXstyle: p
					}), c]
				}), L === !0 && y.jsx(r("WAWebFlexItem.react"), {
					testid: "spinner",
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
					children: y.jsx(o("WAWebSpinner.react").Spinner, {
						color: d === !0 ? "default" : a.spinner,
						size: 16
					})
				})]
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e, t, n) {
		var r = n.ariaLabel, o = n.ariaRoleDescription, a = n.borderStyles, i = n.buttonType, l = n.children, u = n.disabled, c = n.flex, d = n.icon, m = n.iconXstyle, p = n.nowrap, _ = n.onClick, f = n.shadowOnHover, g = n.spinner, h = n.stretch, y = n.tabOrder, C = n.testid, b = n.width, v = l;
		if (v != null && !(typeof v == "string" || s.isFbtInstance(v))) return null;
		var S = _ ? function(e) {
			return void _(e);
		} : null, R = h === !0 ? "flexible" : "fit", L = {
			size: e,
			type: t,
			loading: g,
			disabled: u,
			widthMode: R,
			tabOrder: y == null ? void 0 : y,
			testid: C == null ? void 0 : C,
			onPress: S == null ? void 0 : S
		};
		if (d != null && v != null) return babelHelpers.extends({}, L, {
			Icon: d,
			label: v
		});
		if (v != null) return babelHelpers.extends({}, L, { label: v });
		if (d != null) return babelHelpers.extends({}, L, { Icon: d });
	}
	function L(e) {
		function t(t) {
			var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, u);
			return y.jsx(S, babelHelpers.extends({}, r, {
				ref: n,
				themeStyles: e
			}));
		}
		return t.displayName = t.name + " [from " + i.id + "]", t;
	}
	var E = {
		button: {
			color: "x1pse0pq x1f47i5p",
			backgroundColor: "xfn3atn x1npidv x1kuymfk",
			$$css: !0
		},
		buttonRefreshed: {
			color: "x1pse0pq x1f47i5p",
			backgroundColor: "xfn3atn x1npidv x9qntcr",
			$$css: !0
		},
		spinner: {
			stroke: "x12q0m0e",
			$$css: !0
		}
	};
	function k(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c), o = R("medium", "default", n);
		return o ? y.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "filled",
			ref: t
		}, o)) : y.jsx(S, babelHelpers.extends({}, n, {
			ref: t,
			themeStyles: E
		}));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = {
		button: {
			color: "xo1mcw5",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "xjbqb8w",
			":hover_color": "xfrlarv",
			":disabled_color": "x1f47i5p",
			":disabled_borderTopColor": "xnk0c1z",
			":disabled_borderInlineEndColor": "x1s31tdy",
			":disabled_borderBottomColor": "x1ao7u56",
			":disabled_borderInlineStartColor": "xz3waxf",
			":disabled_backgroundColor": "x1npidv",
			$$css: !0
		},
		spinner: {
			stroke: "x94ds6z",
			$$css: !0
		}
	};
	function T(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, d), o = R("medium", "default", n);
		return o ? y.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "outline",
			ref: t
		}, o)) : y.jsx(S, babelHelpers.extends({}, n, {
			ref: t,
			themeStyles: I
		}));
	}
	T.displayName = T.name + " [from " + i.id + "]";
	var D = {
		button: {
			color: "xhslqc4",
			backgroundColor: "x1h3rtpe",
			":hover_color": "xxxijta",
			":hover_backgroundColor": "x1n5bzlp",
			":disabled_color": "x1f47i5p",
			":disabled_backgroundColor": "x1oqui1x",
			$$css: !0
		},
		spinner: {
			stroke: "x94ds6z",
			$$css: !0
		}
	}, x = L(D), $ = {
		button: {
			paddingInlineStart: "xmzvs34",
			paddingInlineEnd: "xf159sx",
			width: "x1exxlbk",
			fontSize: "x6prxxf",
			lineHeight: "x1o2sk6j",
			backgroundColor: "xep993w",
			color: "xhslqc4",
			fontWeight: "xo1l8bm",
			":hover_backgroundColor": "x1ubxc9n",
			":hover_boxShadow": "x1wtrbu5",
			":disabled_color": "x1f47i5p",
			$$css: !0
		},
		spinner: {
			stroke: "x94ds6z",
			$$css: !0
		}
	}, P = L($), N = {
		button: {
			paddingInlineStart: "xmzvs34",
			paddingInlineEnd: "xf159sx",
			color: "xo1mcw5",
			":hover_color": "xfrlarv",
			":hover_boxShadow": "x1wtrbu5",
			":disabled_color": "x1f47i5p",
			$$css: !0
		},
		spinner: {
			stroke: "x94ds6z",
			$$css: !0
		}
	};
	function M(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, m), o = R("medium", "default", n);
		return o ? y.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "borderless",
			ref: t
		}, o)) : y.jsx(S, babelHelpers.extends({}, n, {
			ref: t,
			themeStyles: N
		}));
	}
	M.displayName = M.name + " [from " + i.id + "]";
	var w = {
		button: {
			color: "xowaa7l",
			backgroundColor: "xk0ssx3",
			":hover_backgroundColor": "xkrun6l",
			":disabled_color": "x1f47i5p",
			":disabled_backgroundColor": "x1npidv",
			$$css: !0
		},
		focused: {
			outlineColor: "x10322wi",
			$$css: !0
		},
		spinner: {
			stroke: "x1ukulop",
			$$css: !0
		}
	};
	function A(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, p), o = R("medium", "destructive", n);
		return o ? y.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "filled",
			ref: t
		}, o)) : y.jsx(S, babelHelpers.extends({}, n, {
			ref: t,
			themeStyles: w
		}));
	}
	A.displayName = A.name + " [from " + i.id + "]";
	var F = {
		button: {
			color: "x30a034",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "xjbqb8w",
			":hover_color": "x1pfmjgd",
			":disabled_color": "x1f47i5p",
			":disabled_borderTopColor": "xnk0c1z",
			":disabled_borderInlineEndColor": "x1s31tdy",
			":disabled_borderBottomColor": "x1ao7u56",
			":disabled_borderInlineStartColor": "xz3waxf",
			":disabled_backgroundColor": "x1npidv",
			$$css: !0
		},
		focused: {
			outlineColor: "x10322wi",
			$$css: !0
		},
		spinner: {
			stroke: "x17alv2p",
			$$css: !0
		}
	};
	function O(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, _), o = R("medium", "destructive", n);
		return o ? y.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "outline",
			ref: t
		}, o)) : y.jsx(S, babelHelpers.extends({}, n, {
			ref: t,
			themeStyles: F
		}));
	}
	O.displayName = O.name + " [from " + i.id + "]";
	var B = { button: {
		color: "xowaa7l",
		backgroundColor: "x1b0f5k1",
		":disabled_color": "x1f47i5p",
		":disabled_backgroundColor": "x1npidv",
		$$css: !0
	} }, W = L(B), q = {
		horizontal: {
			columnGap: "xs2akgl",
			$$css: !0
		},
		vertical: {
			rowGap: "x1f0uite",
			$$css: !0
		}
	};
	function U(e) {
		var t = e.direction, n = babelHelpers.objectWithoutPropertiesLoose(e, f), r;
		switch (t) {
			case "horizontal":
			case "horizontalReverse":
				r = q.horizontal;
				break;
			case "vertical":
			case "verticalReverse":
				r = q.vertical;
				break;
		}
		return y.jsx(o("WAWebFlex.react").FlexContainer, babelHelpers.extends({
			xstyle: r,
			direction: t
		}, n));
	}
	U.displayName = U.name + " [from " + i.id + "]";
	function V(e) {
		var t = e.buttonType, n = e.children, r = e.disabled, o = e.nowrap, a = e.onClick, i = e.ref, l = e.spinner, s = e.stretch, u = e.testid, c = e.type, d = c === void 0 ? "primary" : c, m = b(d);
		return y.jsx(m, {
			ref: i,
			testid: u,
			children: n,
			disabled: r,
			onClick: a,
			nowrap: o,
			spinner: l,
			stretch: s,
			buttonType: t
		});
	}
	V.displayName = V.name + " [from " + i.id + "]", l.WAWebButtonPrimary = k, l.WAWebButtonSecondary = T, l.WAWebButtonPlainWhite = x, l.WAWebButtonOnAccent = P, l.WAWebButtonSimplified = M, l.WAWebButtonPrimaryDestructive = A, l.WAWebButtonSecondaryDestructive = O, l.ButtonGroup = U, l.Button = V;
}), 98);
