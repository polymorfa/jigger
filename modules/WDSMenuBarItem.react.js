__d("WDSMenuBarItem.react", [
	"WDSBadge.react",
	"WDSButton.react",
	"WDSTooltip.react",
	"deferredLoadComponent",
	"react",
	"requireDeferred",
	"stylex",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = ["ref"], u = [
		"icon",
		"menuEnableUim",
		"menuIsContainer",
		"wdsMenuToRender"
	], c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useImperativeHandle, g = p.useRef, h = r("deferredLoadComponent")(r("requireDeferred")("WDSMenuBarItemWithWDSMenu.react").__setRef("WDSMenuBarItem.react")), y = { buttonDeemphasized: {
		color: "xhslqc4",
		$$css: !0
	} };
	function C(t) {
		var n = t.ref, o = babelHelpers.objectWithoutPropertiesLoose(t, e), a = o.activityIndicator, i = o.buttonSize, l = i === void 0 ? "medium" : i, s = o.buttonType, u = s === void 0 ? "default" : s, d = o.buttonVariant, p = d === void 0 ? "borderless" : d, h = o.customIcon, C = o.delayTooltipMs, b = o.disabled, v = b === void 0 ? !1 : b, S = o.icon, R = o.imperativeRef, L = o.isActive, E = o.keyboardShortcutAction, k = o.label, I = o.marginInlineXstyle, T = o.onClick, D = o.tabOrder, x = o.testid, $ = o.title, P = o.tooltipDisabled, N = P === void 0 ? !1 : P, M = o.tooltipPosition, w = g(null), A = r("useMergeRefs")(n, w), F = !v && k == null;
		f(R, function() {
			return { open: function() {} };
		}), _(function() {
			var e = w.current;
			e != null && L != null && (e.dataset.navbarItem = "true", e.dataset.navbarItemSelected = String(L), e.tabIndex = -1, e.removeAttribute("data-tab"));
		}, [L]);
		var O = function(t) {
			T == null || T(t);
		}, B;
		h != null ? B = m.jsx("button", {
			type: "button",
			"aria-label": $,
			"aria-pressed": L,
			onClick: O,
			ref: A,
			disabled: v,
			"data-testid": void 0,
			className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl x1ypdohk xt8t1vi x1xc408v x129tdwq x15urzxu x1a2a7pz x1081cuy xs2atcs xd3so5o xtnn1bt x9v5kkp xyu9ima x100v1rl",
			children: h
		}) : S != null ? B = m.jsx(r("WDSButton.react"), {
			type: u,
			variant: p,
			size: l,
			directional: !0,
			Icon: S,
			label: k,
			"aria-label": $,
			"aria-pressed": L,
			onPress: O,
			ref: A,
			disabled: v,
			testid: void 0,
			tabOrder: D,
			xstyle: L !== !0 && L != null ? y.buttonDeemphasized : void 0
		}) : B = null;
		var W = m.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6" },
			4: { className: "x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k" },
			2: { className: "x1n2onr6 x1fe8iih" },
			6: { className: "x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k x1fe8iih" },
			1: { className: "x1n2onr6 xs723ss x1277o0a" },
			5: { className: "x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k xs723ss x1277o0a" },
			3: { className: "x1n2onr6 x1fe8iih xs723ss x1277o0a" },
			7: { className: "x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k x1fe8iih xs723ss x1277o0a" }
		}[(L != null) << 2 | (L === !0) << 1 | (L != null) << 0], { children: [B, a != null && m.jsx("div", babelHelpers.extends({}, {
			0: { className: "x47corl x7lvpm3 x10l6tqk x13vifvy xtijo5x" },
			1: { className: "x47corl x7lvpm3 x10l6tqk xtu2xtp x1euzuty" }
		}[((a == null ? void 0 : a.count) != null) << 0], { children: m.jsx(r("WDSBadge.react"), babelHelpers.extends({}, a)) }))] }));
		return F ? m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(I), { children: m.jsx(r("WDSTooltip.react"), {
			label: $,
			shortcut: E,
			delayTooltipMs: C,
			disabled: N,
			position: M,
			children: W
		}) })) : m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(I), {
			title: N ? void 0 : $,
			children: W
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, s), r = n.icon, o = n.menuEnableUim, a = n.menuIsContainer, i = n.wdsMenuToRender, l = babelHelpers.objectWithoutPropertiesLoose(n, u);
		return i != null && r != null ? m.jsx(h, babelHelpers.extends({ ref: t }, l, {
			icon: r,
			wdsMenuToRender: i,
			menuEnableUim: o,
			menuIsContainer: a
		})) : m.jsx(C, babelHelpers.extends({ ref: t }, n));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
