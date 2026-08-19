__d("WDSSwitch.react", [
	"BaseSwitch.react",
	"BaseView.react",
	"Locale",
	"WDSDisabledStateStyles",
	"WDSFocusStateStyles",
	"WDSHoverStateStyles",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = o("Locale").isRTL(), p = {
		switch: {
			backgroundColor: "x1h3rtpe",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			boxSizing: "x9f619",
			display: "x1rg5ohu",
			minHeight: "xjwf9q1",
			minWidth: "x1fns5xo",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			position: "x1n2onr6",
			zIndex: "xzkaem6",
			$$css: !0
		},
		switchActive: {
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		background: {
			backgroundColor: "xgcd1z6",
			bottom: "x1ey2m1c",
			boxSizing: "x9f619",
			insetInlineEnd: "xtijo5x",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x13vifvy",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			$$css: !0
		},
		backgroundActive: {
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			$$css: !0
		},
		slider: {
			backgroundColor: "xs7vtfe",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			height: "x1kpxq89",
			width: "xsmyaan",
			insetInlineStart: "xrr41r3",
			insetInlineEnd: "xnro73h",
			left: null,
			right: null,
			top: "x1atx4j1",
			position: "x10l6tqk",
			transition: "xx9udhw",
			transitionBehavior: "xd00j3c",
			$$css: !0
		},
		sliderActive: {
			top: "xndqk7f",
			height: "xlup9mm",
			width: "x1kky2od",
			backgroundColor: "xep993w",
			insetInlineStart: "x1igoeyj",
			insetInlineEnd: "x1i4sgur",
			left: null,
			right: null,
			$$css: !0
		},
		sliderActiveTransform: {
			transform: "x15481yp",
			$$css: !0
		},
		sliderActiveTransformRtl: {
			transform: "x123sfga",
			$$css: !0
		},
		sliderHovered: {
			width: "x6jxa94",
			$$css: !0
		},
		sliderHoveredActive: {
			width: "xw4jnvo",
			$$css: !0
		}
	};
	function _(e) {
		var t = e["aria-describedby"], n = e["aria-hidden"], a = e["aria-label"], i = e.disabled, l = i === void 0 ? !1 : i, u = e.enterKeyToggle, _ = u === void 0 ? !0 : u, f = e.id, g = e.onChange, h = e.onClick, y = e.tabIndex, C = y === void 0 ? 0 : y, b = e.testid, v = b === void 0 ? "WDSSwitch" : b, S = e.value, R = S === void 0 ? !1 : S, L = d(!1), E = L[0], k = L[1], I = d(!1), T = I[0], D = I[1], x = c(function(e) {
			_ && e.key === "Enter" && (e.preventDefault(), e.currentTarget.click());
		}, [_]), $ = [p.switch, o("WDSFocusStateStyles").WDSComponentFocusStateStyles.WDSSwitch], P = [
			$,
			R && p.switchActive,
			l && o("WDSDisabledStateStyles").WDSComponentDisabledStateStyles.WDSSwitch
		];
		return s.jsxs(r("BaseSwitch.react"), {
			suppressFocusRing: !0,
			onValueChange: g,
			onClick: h,
			onKeyDown: x,
			onMouseEnter: function() {
				return k(!0);
			},
			onMouseLeave: function() {
				return k(!1);
			},
			onFocusVisibleChange: function(t) {
				return D(t);
			},
			disabled: l,
			"aria-describedby": t,
			"aria-hidden": n,
			"aria-label": a,
			testid: void 0,
			tabIndex: C,
			id: f,
			checked: R,
			xstyle: P,
			children: [s.jsx(r("BaseView.react"), { xstyle: [
				p.background,
				R && p.backgroundActive,
				E && o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSSwitchBase,
				E && (R ? o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSSwitchSelected : o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSSwitchUnselected)
			] }), s.jsx(r("BaseView.react"), { xstyle: [
				p.slider,
				R && p.sliderActive,
				R && (m ? p.sliderActiveTransformRtl : p.sliderActiveTransform),
				(E || T) && p.sliderHovered,
				(E || T) && R && p.sliderHoveredActive
			] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
