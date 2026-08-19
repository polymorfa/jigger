__d("WAWebVisualRadio.react", [
	"WAWebFlexBox.react",
	"WAWebVelocityTransitionGroup",
	"WDSIconIcRadioButtonChecked.react",
	"WDSIconIcRadioButtonUnchecked.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(11), n = e.checked, a = e.highlight, i, l;
		if (n === !0) {
			var c;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("WDSIconIcRadioButtonChecked.react"), {
				height: 20,
				width: 20,
				testid: "checkbox-round-radio-checked"
			}), t[0] = c) : c = t[0], l = c, i = "checked";
		} else {
			i = "unchecked";
			var d;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
				height: 20,
				width: 20,
				testid: "checkbox-round-passive"
			}), t[1] = d) : d = t[1], l = d;
		}
		var m;
		t[2] !== n || t[3] !== a ? (m = n === !1 ? [u.uncheckedSvgStyle, a === !0 && u.uncheckedSvgHighlightStyle] : [u.checkedSvgStyle], t[2] = n, t[3] = a, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] !== p ? (_ = [u.iconContainer, p], t[5] = p, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== l || t[8] !== i || t[9] !== _ ? (f = s.jsx(r("WAWebVelocityTransitionGroup"), {
			xstyle: u.container,
			transitionName: "pop",
			children: s.jsx(o("WAWebFlexBox.react").FlexRow, {
				xstyle: _,
				children: l
			}, i)
		}), t[7] = l, t[8] = i, t[9] = _, t[10] = f) : f = t[10], f;
	}
	l.WAWebVisualRadio = c;
}), 98);
