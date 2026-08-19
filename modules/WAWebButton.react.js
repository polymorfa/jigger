__d("WAWebButton.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFlexStyles",
	"WAWebSpinner.react",
	"WDSButton.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(28), a = t.ref, i = t.themeStyles, l = t.ariaLabel, s = t.ariaRoleDescription, u = t.borderStyles, c = t.buttonType, d = t.children, m = t.disabled, p = t.icon, _ = t.iconXstyle, f = t.nowrap, h = t.onClick, b = t.paddingStyles, S = t.shadowOnHover, R = t.spinner, L = t.stretch, E = t.tabOrder, k = t.testid, I = t.width, T = babelHelpers.objectWithoutPropertiesLoose(t, e), D = f === void 0 ? !0 : f, x = S === void 0 ? !0 : S, $ = r("useWAWebFocusState")(), P = $[0], N = $[1], M = r("useMergeRefs")(a, P), w = o("WAWebFlexStyles").getFlexStyles(T), A = (g || (g = r("stylex")))([
			C.paddingBlock10,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
			[
				v.button,
				i.button,
				i.buttonRefreshed
			],
			w.xstyle,
			N === !0 && [v.focused, i.focused],
			m === !0 && v.disabled,
			D === !0 && v.nowrap,
			L === !0 && v.stretch,
			x === !0 && v.hover,
			u,
			b
		]), F;
		n[0] !== w.inline || n[1] !== I ? (F = babelHelpers.extends({}, w.inline, { width: I }), n[0] = w.inline, n[1] = I, n[2] = F) : F = n[2];
		var O;
		n[3] !== p || n[4] !== _ ? (O = p != null && y.jsx(p, {
			height: 16,
			iconXstyle: _
		}), n[3] = p, n[4] = _, n[5] = O) : O = n[5];
		var B;
		n[6] !== d || n[7] !== O ? (B = y.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "content",
			justify: "center",
			align: "center",
			gap: 8,
			grow: 1,
			children: [O, d]
		}), n[6] = d, n[7] = O, n[8] = B) : B = n[8];
		var W;
		n[9] !== m || n[10] !== R || n[11] !== i.spinner ? (W = R === !0 && y.jsx(r("WAWebFlexItem.react"), {
			testid: "spinner",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
			children: y.jsx(o("WAWebSpinner.react").Spinner, {
				color: m === !0 ? "default" : i.spinner,
				size: 16
			})
		}), n[9] = m, n[10] = R, n[11] = i.spinner, n[12] = W) : W = n[12];
		var q;
		n[13] !== B || n[14] !== W ? (q = y.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: [B, W]
		}), n[13] = B, n[14] = W, n[15] = q) : q = n[15];
		var U;
		return n[16] !== l || n[17] !== s || n[18] !== c || n[19] !== m || n[20] !== M || n[21] !== h || n[22] !== A || n[23] !== F || n[24] !== q || n[25] !== E || n[26] !== k ? (U = y.jsx("button", {
			disabled: m,
			"aria-disabled": m,
			"data-tab": E,
			"data-testid": k,
			onClick: h,
			className: A,
			ref: M,
			style: F,
			type: c,
			"aria-label": l,
			"aria-roledescription": s,
			children: q
		}), n[16] = l, n[17] = s, n[18] = c, n[19] = m, n[20] = M, n[21] = h, n[22] = A, n[23] = F, n[24] = q, n[25] = E, n[26] = k, n[27] = U) : U = n[27], U;
	}
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
			var n = o("react-compiler-runtime").c(6), r, a;
			n[0] !== t ? (a = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, u), n[0] = t, n[1] = r, n[2] = a) : (r = n[1], a = n[2]);
			var i;
			return n[3] !== r || n[4] !== a ? (i = y.jsx(S, babelHelpers.extends({}, r, {
				ref: a,
				themeStyles: e
			})), n[3] = r, n[4] = a, n[5] = i) : i = n[5], i;
		}
		return t;
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
		var t = o("react-compiler-runtime").c(10), n, a, i;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c), i = R("medium", "default", n), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = i;
		if (l) {
			var s;
			return t[4] !== l || t[5] !== a ? (s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
				variant: "filled",
				ref: a
			}, l)), t[4] = l, t[5] = a, t[6] = s) : s = t[6], s;
		}
		var u;
		return t[7] !== n || t[8] !== a ? (u = y.jsx(S, babelHelpers.extends({}, n, {
			ref: a,
			themeStyles: E
		})), t[7] = n, t[8] = a, t[9] = u) : u = t[9], u;
	}
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
		var t = o("react-compiler-runtime").c(10), n, a, i;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, d), i = R("medium", "default", n), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = i;
		if (l) {
			var s;
			return t[4] !== l || t[5] !== a ? (s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
				variant: "outline",
				ref: a
			}, l)), t[4] = l, t[5] = a, t[6] = s) : s = t[6], s;
		}
		var u;
		return t[7] !== n || t[8] !== a ? (u = y.jsx(S, babelHelpers.extends({}, n, {
			ref: a,
			themeStyles: I
		})), t[7] = n, t[8] = a, t[9] = u) : u = t[9], u;
	}
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
		var t = o("react-compiler-runtime").c(10), n, a, i;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, m), i = R("medium", "default", n), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = i;
		if (l) {
			var s;
			return t[4] !== l || t[5] !== a ? (s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
				variant: "borderless",
				ref: a
			}, l)), t[4] = l, t[5] = a, t[6] = s) : s = t[6], s;
		}
		var u;
		return t[7] !== n || t[8] !== a ? (u = y.jsx(S, babelHelpers.extends({}, n, {
			ref: a,
			themeStyles: N
		})), t[7] = n, t[8] = a, t[9] = u) : u = t[9], u;
	}
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
		var t = o("react-compiler-runtime").c(10), n, a, i;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, p), i = R("medium", "destructive", n), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = i;
		if (l) {
			var s;
			return t[4] !== l || t[5] !== a ? (s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
				variant: "filled",
				ref: a
			}, l)), t[4] = l, t[5] = a, t[6] = s) : s = t[6], s;
		}
		var u;
		return t[7] !== n || t[8] !== a ? (u = y.jsx(S, babelHelpers.extends({}, n, {
			ref: a,
			themeStyles: w
		})), t[7] = n, t[8] = a, t[9] = u) : u = t[9], u;
	}
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
		var t = o("react-compiler-runtime").c(10), n, a, i;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, _), i = R("medium", "destructive", n), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = i;
		if (l) {
			var s;
			return t[4] !== l || t[5] !== a ? (s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
				variant: "outline",
				ref: a
			}, l)), t[4] = l, t[5] = a, t[6] = s) : s = t[6], s;
		}
		var u;
		return t[7] !== n || t[8] !== a ? (u = y.jsx(S, babelHelpers.extends({}, n, {
			ref: a,
			themeStyles: F
		})), t[7] = n, t[8] = a, t[9] = u) : u = t[9], u;
	}
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
		var t = o("react-compiler-runtime").c(7), n, r;
		t[0] !== e ? (n = e.direction, r = babelHelpers.objectWithoutPropertiesLoose(e, f), t[0] = e, t[1] = n, t[2] = r) : (n = t[1], r = t[2]);
		var a;
		e: switch (n) {
			case "horizontal":
			case "horizontalReverse": {
				a = q.horizontal;
				break e;
			}
			case "vertical":
			case "verticalReverse": a = q.vertical;
		}
		var i;
		return t[3] !== n || t[4] !== r || t[5] !== a ? (i = y.jsx(o("WAWebFlex.react").FlexContainer, babelHelpers.extends({
			xstyle: a,
			direction: n
		}, r)), t[3] = n, t[4] = r, t[5] = a, t[6] = i) : i = t[6], i;
	}
	function V(e) {
		var t = o("react-compiler-runtime").c(13), n = e.buttonType, r = e.children, a = e.disabled, i = e.nowrap, l = e.onClick, s = e.ref, u = e.spinner, c = e.stretch, d = e.testid, m = e.type, p = m === void 0 ? "primary" : m, _;
		t[0] !== p ? (_ = b(p), t[0] = p, t[1] = _) : _ = t[1];
		var f = _, g;
		return t[2] !== f || t[3] !== n || t[4] !== r || t[5] !== a || t[6] !== i || t[7] !== l || t[8] !== s || t[9] !== u || t[10] !== c || t[11] !== d ? (g = y.jsx(f, {
			ref: s,
			testid: d,
			children: r,
			disabled: a,
			onClick: l,
			nowrap: i,
			spinner: u,
			stretch: c,
			buttonType: n
		}), t[2] = f, t[3] = n, t[4] = r, t[5] = a, t[6] = i, t[7] = l, t[8] = s, t[9] = u, t[10] = c, t[11] = d, t[12] = g) : g = t[12], g;
	}
	l.WAWebButtonPrimary = k, l.WAWebButtonSecondary = T, l.WAWebButtonPlainWhite = x, l.WAWebButtonOnAccent = P, l.WAWebButtonSimplified = M, l.WAWebButtonPrimaryDestructive = A, l.WAWebButtonSecondaryDestructive = O, l.ButtonGroup = U, l.Button = V;
}), 98);
