__d("WDSButtonGroup.react", [
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSText.react",
	"getPlatformByGK",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		stickyContainer: {
			position: "x7wzq59",
			bottom: "x1ey2m1c",
			left: "xu96u03",
			right: "x3m8u43",
			insetInlineStart: null,
			insetInlineEnd: null,
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			zIndex: "x1vjfegm",
			maxWidth: "x193iq5w",
			minHeight: "x1lh6h5t",
			$$css: !0
		},
		topSpacing: {
			paddingTop: "xl7twdi",
			$$css: !0
		},
		fill: {
			width: "xh8yej3",
			$$css: !0
		},
		hug: {
			width: "xeq5yr9",
			$$css: !0
		},
		horizontalWrap: {
			flexWrap: "x8hhl5t",
			$$css: !0
		},
		flexibleButton: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			minWidth: "x1pshirs",
			$$css: !0
		},
		placeholderButton: {
			visibility: "xlshs6z",
			pointerEvents: "x47corl",
			$$css: !0
		},
		stickyEnd: {
			justifyContent: "x13a6bvl",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.primaryButtonProps, a = t.secondaryButtonProps, i = t.tertiaryButtonProps, l = t.orientation, s = t.width, m = s === void 0 ? "fill" : s, p = t.sticky, _ = p === void 0 ? !1 : p, f = t.footnote, g = t.topSpacing, h = g === void 0 ? !1 : g, y = t.platform, C = y === void 0 ? o("getPlatformByGK").WDS_PLATFORM : y, b = t.maintainButtonPosition, v = b === void 0 ? !1 : b, S = C === "iOS" || C === "android", R = S ? "stacked" : "horizontal", L = l != null ? l : R, E = c(function() {
			var e = L === "horizontal" && m === "fill" && !_, t;
			e ? t = "fit" : t = m === "fill" ? "flexible" : "fit";
			var o = e ? d.flexibleButton : null, l = function(n, a, i) {
				return i === void 0 && (i = !1), u.createElement(r("WDSButton.react"), babelHelpers.extends({}, n, {
					widthMode: t,
					key: a,
					xstyle: [
						m === "fill" ? d.fill : d.hug,
						o,
						i ? d.placeholderButton : null,
						n.xstyle
					],
					platform: C
				}));
			}, s = l(n, "primary"), c = a ? l(a, "secondary") : null, p = i ? l(i, "tertiary") : null, f = [s];
			if (c && f.push(c), p) f.push(p);
			else if (v && L === "stacked") {
				var g = l(n, "placeholder", !0);
				f.push(g);
			}
			return L === "horizontal" && f.reverse(), f;
		}, [
			n,
			a,
			i,
			m,
			L,
			C,
			v,
			_
		]), k = [
			L === "horizontal" ? o("WDSFlex.stylex").wdsFlex.flexRowCenter : o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
			o("WDSFlex.stylex").wdsFlex.gapSingle,
			m === "fill" ? d.fill : d.hug,
			h === !0 && d.topSpacing,
			_ && d.stickyContainer,
			_ && L === "horizontal" && d.stickyEnd,
			L === "horizontal" && m === "fill" && !_ && d.horizontalWrap
		];
		return f != null ? u.jsxs("div", {
			className: "xh8yej3",
			role: "group",
			children: [u.jsx("div", {
				className: "x12xbjc7 x2b8uid",
				children: u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: f
				})
			}), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(k), { children: E }))]
		}) : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(k), {
			role: "group",
			children: E
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
