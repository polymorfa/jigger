__d("WDSNativeButtonWeb.react", ["WDSNativeButtonBase.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo, c = {
		default: {
			backgroundColor: "xep993w",
			$$css: !0
		},
		destructive: {
			backgroundColor: "xep993w",
			$$css: !0
		},
		media: {
			backgroundColor: "x1e6sl3u",
			$$css: !0
		},
		disabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		mediaDisabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		}
	}, d = {
		default: {
			backgroundColor: "xnj6ddq",
			$$css: !0
		},
		destructive: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		media: {
			backgroundColor: "x1p8t8ri",
			boxShadow: "x1grvwwr",
			$$css: !0
		},
		disabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		mediaDisabled: {
			backgroundColor: "x1p8t8ri",
			boxShadow: "x1grvwwr",
			$$css: !0
		}
	}, m = {
		default: {
			backgroundColor: "xnj6ddq",
			$$css: !0
		},
		destructive: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		media: {
			backgroundColor: "x1p8t8ri",
			$$css: !0
		},
		disabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		mediaDisabled: {
			backgroundColor: "x9qumyh",
			$$css: !0
		}
	}, p = {
		default: {
			backgroundColor: "xnj6ddq",
			$$css: !0
		},
		destructive: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		media: {
			backgroundColor: "x1p8t8ri",
			$$css: !0
		},
		disabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		mediaDisabled: {
			backgroundColor: "x1p8t8ri",
			$$css: !0
		}
	}, _ = {
		default: {
			color: "x1pse0pq",
			$$css: !0
		},
		destructive: {
			color: "x1pse0pq",
			$$css: !0
		},
		media: {
			color: "x1lljey2",
			$$css: !0
		},
		disabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		mediaDisabled: {
			color: "x18cpw0e",
			$$css: !0
		}
	}, f = {
		default: {
			color: "xo1mcw5",
			$$css: !0
		},
		destructive: {
			color: "x30a034",
			$$css: !0
		},
		media: {
			color: "x17t9dm2",
			textShadow: "x1evj0z2",
			$$css: !0
		},
		disabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		mediaDisabled: {
			color: "x17t9dm2",
			textShadow: "x1evj0z2",
			$$css: !0
		}
	}, g = {
		default: {
			color: "xo1mcw5",
			$$css: !0
		},
		destructive: {
			color: "x30a034",
			$$css: !0
		},
		media: {
			color: "x17t9dm2",
			$$css: !0
		},
		disabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		mediaDisabled: {
			color: "x16h3bdo",
			$$css: !0
		}
	}, h = {
		default: {
			color: "xo1mcw5",
			$$css: !0
		},
		destructive: {
			color: "x30a034",
			$$css: !0
		},
		media: {
			color: "x17t9dm2",
			textShadow: "x1evj0z2",
			$$css: !0
		},
		disabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		mediaDisabled: {
			color: "x17t9dm2",
			textShadow: "x1evj0z2",
			$$css: !0
		}
	}, y = { lineClamp: {
		WebkitLineClamp: "xh0615m",
		WebkitBoxOrient: "x1ua5tub",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		display: "x104kibb",
		wordBreak: "x1yn0g08",
		$$css: !0
	} }, C = {
		default: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		destructive: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		media: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			backgroundColor: "x1p8t8ri",
			$$css: !0
		},
		disabled: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		mediaDisabled: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			backgroundColor: "x1p8t8ri",
			opacity: "x1us6l5c",
			$$css: !0
		}
	}, b = {
		default: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		destructive: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		media: {
			borderTop: "xovxmxg",
			borderInlineEnd: "xtwbvui",
			borderBottom: "x1xrl1f7",
			borderInlineStart: "x1i71abn",
			backgroundColor: "xjbqb8w",
			boxShadow: "xovdvbj",
			$$css: !0
		},
		disabled: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			backgroundColor: "xjbqb8w",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			$$css: !0
		},
		mediaDisabled: {
			borderTop: "xovxmxg",
			borderInlineEnd: "xtwbvui",
			borderBottom: "x1xrl1f7",
			borderInlineStart: "x1i71abn",
			borderTopColor: "x1zfx7y",
			borderInlineEndColor: "x1gj3efs",
			borderBottomColor: "x151wx5t",
			borderInlineStartColor: "xea0m3l",
			backgroundColor: "xjbqb8w",
			boxShadow: "xovdvbj",
			$$css: !0
		}
	}, v = {
		default: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "x1abdmlv",
			$$css: !0
		},
		destructive: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "xrkjzwr",
			$$css: !0
		},
		media: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "x1n26o3t",
			$$css: !0
		},
		disabled: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		mediaDisabled: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "x5wx4au",
			$$css: !0
		}
	}, S = {
		default: {
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		},
		destructive: {
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		},
		media: {
			backgroundColor: "xjbqb8w",
			textShadow: "x11ry4si",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		},
		disabled: {
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		},
		mediaDisabled: {
			backgroundColor: "xjbqb8w",
			textShadow: "x11ry4si",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		}
	}, R = {
		default: {
			maxWidth: "x1jkqq1h",
			$$css: !0
		},
		small: {
			rowGap: "x6xt7dr",
			columnGap: "x11ovtrt",
			paddingLeft: "x1auiw83",
			paddingRight: "xwj8a3r",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x1fkzhhx",
			paddingBottom: "xwue9hb",
			borderStartStartRadius: "x1w9h8z1",
			borderStartEndRadius: "xn2mukg",
			borderEndEndRadius: "x1yo0frk",
			borderEndStartRadius: "x2b5yea",
			$$css: !0
		},
		medium: {
			rowGap: "x6xt7dr",
			columnGap: "x11ovtrt",
			paddingTop: "xz1hfuw",
			paddingBottom: "xo0vtsz",
			paddingLeft: "x1t63unf",
			paddingRight: "xyf94u5",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			borderStartStartRadius: "x1w9h8z1",
			borderStartEndRadius: "xn2mukg",
			borderEndEndRadius: "x1yo0frk",
			borderEndStartRadius: "x2b5yea",
			$$css: !0
		},
		large: {
			rowGap: "x1egsoq8",
			columnGap: "xl0m241",
			paddingLeft: "xrbdnou",
			paddingRight: "x1efs50p",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			paddingTop: "x8tnw4l",
			paddingBottom: "xzt13x8",
			borderStartStartRadius: "x1w9h8z1",
			borderStartEndRadius: "xn2mukg",
			borderEndEndRadius: "x1yo0frk",
			borderEndStartRadius: "x2b5yea",
			$$css: !0
		},
		iconSmall: {
			width: "x1td3qas",
			height: "x10w6t97",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			borderStartStartRadius: "x1w9h8z1",
			borderStartEndRadius: "xn2mukg",
			borderEndEndRadius: "x1yo0frk",
			borderEndStartRadius: "x2b5yea",
			$$css: !0
		},
		iconMedium: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			borderStartStartRadius: "x1w9h8z1",
			borderStartEndRadius: "xn2mukg",
			borderEndEndRadius: "x1yo0frk",
			borderEndStartRadius: "x2b5yea",
			$$css: !0
		},
		iconLarge: {
			width: "x1pju0fl",
			height: "x10wjd1d",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			borderStartStartRadius: "x1w9h8z1",
			borderStartEndRadius: "xn2mukg",
			borderEndEndRadius: "x1yo0frk",
			borderEndStartRadius: "x2b5yea",
			$$css: !0
		}
	}, L = { default: {
		width: "x1ssnqbe",
		height: "xh8dmh1",
		$$css: !0
	} }, E = { default: {
		filter: "x4e2udz",
		$$css: !0
	} }, k = {
		filled: C,
		outline: b,
		tonal: v,
		borderless: S
	}, I = {
		filled: _,
		outline: f,
		tonal: g,
		borderless: h
	}, T = {
		filled: c,
		outline: d,
		tonal: m,
		borderless: p
	}, D = "x64a5ib-B", x = {
		default: {
			cursor: "x1ypdohk",
			position: "x1n2onr6",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			"::after_backgroundColor": "xhz5tjn",
			"::after_willChange": "x1pfnkut",
			"::after_width": "x4eaejv",
			"::after_height": "x1wsn0xg",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_left": "x17cx49",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_transformOrigin": "x1pdeff1",
			"::after_opacity": "xmf22ne",
			"::after_content": "x1s928wv",
			"::after_pointerEvents": "x2q1x1w",
			"::after_animationDuration": "xenhccd",
			"::after_animationTimingFunction": "x15dgxod",
			"::after_animationFillMode": "x17pmmvk",
			":hover::after_animationName": "x1x20wb3",
			$$css: !0
		},
		zoomInAnimation: {
			transitionProperty: "x11xpdln",
			transitionTimingFunction: "xujgc79",
			transitionDuration: "xx6bhzk",
			":hover_transform": "x15mkh64",
			$$css: !0
		}
	};
	function $(e, t) {
		return t == null || t.length === 0 ? e === "small" ? R.iconSmall : e === "medium" ? R.iconMedium : R.iconLarge : R[e];
	}
	function P(e) {
		var t = e.ariaLabel, n = e["data-testid"], r = e.disabled, a = r === void 0 ? !1 : r, i = e.icon, l = i === void 0 ? null : i, c = e.onClick, d = e.size, m = d === void 0 ? "medium" : d, p = e.style, _ = p === void 0 ? "filled" : p, f = e.text, g = f === void 0 ? "" : f, h = e.type, C = h === void 0 ? "default" : h, b = e.xstyle, v = e.xstyleIcon, S = e.zoomInAnimationEnabled, R = S === void 0 ? !0 : S, D = u(function() {
			return [a ? C === "media" ? I[_].mediaDisabled : I[_].disabled : I[_][C], y.lineClamp];
		}, [
			a,
			C,
			_
		]), P = a ? C === "media" ? k[_].mediaDisabled : k[_].disabled : k[_][C], N = $(m, g), M = "body2Emphasized", w = u(function() {
			return [
				a ? C === "media" ? T[_].mediaDisabled : T[_].disabled : T[_][C],
				L.default,
				v
			];
		}, [
			a,
			C,
			_,
			v
		]), A = u(function() {
			return [R && !a ? x.zoomInAnimation : null];
		}, [a, R]), F = u(function() {
			return [
				N,
				P,
				b,
				a ? null : x.default,
				A
			];
		}, [
			N,
			P,
			b,
			a,
			A
		]), O = C === "media" && (_ === "borderless" || _ === "outline") && E.default;
		return s.jsx(o("WDSNativeButtonBase.react").WDSNativeButtonBase, {
			"data-testid": void 0,
			disabled: a,
			fontType: M,
			icon: l,
			iconStyles: w,
			onClick: c,
			platform: "wa_web",
			responsiveFontContainerXStyle: O,
			text: g,
			textStyles: D,
			xstyle: F,
			ariaLabel: t
		});
	}
	P.displayName = P.name + " [from " + i.id + "]", l.WDSNativeButtonWeb = P;
}), 98);
