__d("WAWebVisualRadio.react", [
	"WAWebFlexBox.react",
	"WAWebVelocityTransitionGroup",
	"WDSIconIcRadioButtonChecked.react",
	"WDSIconIcRadioButtonUnchecked.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		container: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			width: "xw4jnvo",
			height: "x1qx5ct2",
			verticalAlign: "xxymvpz",
			cursor: "x1ypdohk",
			transform: "x916qxe",
			$$css: !0
		},
		iconContainer: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		checkedSvgStyle: {
			color: "x1v5yvga",
			$$css: !0
		},
		uncheckedSvgStyle: {
			fillOpacity: "xrmlzy3",
			transitionDuration: "x1g2r6go",
			transitionProperty: "x18sm2im",
			transitionTimingFunction: "xwji4o3",
			color: "xhslqc4",
			$$css: !0
		},
		uncheckedSvgHighlightStyle: {
			fillOpacity: "xlyfr8p",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.checked, n = e.highlight, a, i;
		t === !0 ? (i = s.jsx(r("WDSIconIcRadioButtonChecked.react"), {
			height: 20,
			width: 20,
			testid: "checkbox-round-radio-checked"
		}), a = "checked") : (a = "unchecked", i = s.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
			height: 20,
			width: 20,
			testid: "checkbox-round-passive"
		}));
		var l = t === !1 ? [u.uncheckedSvgStyle, n === !0 && u.uncheckedSvgHighlightStyle] : [u.checkedSvgStyle];
		return s.jsx(r("WAWebVelocityTransitionGroup"), {
			xstyle: u.container,
			transitionName: "pop",
			children: s.jsx(o("WAWebFlexBox.react").FlexRow, {
				xstyle: [u.iconContainer, l],
				children: i
			}, a)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.WAWebVisualRadio = c;
}), 98);
