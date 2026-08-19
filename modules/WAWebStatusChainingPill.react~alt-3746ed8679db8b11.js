__d("WAWebStatusChainingPill.react", [
	"fbt",
	"WAWebFacePile.react",
	"WDSButton.react",
	"WDSIconIcArrowForward.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = 3, m = 24, p = 88, _ = 130, f = 12, g = 7, h = 2, y = m + h * 2, C = 24, b = 16, v = f + C + b, S = [
		0,
		y,
		y * 2 - g,
		y * 3 - g * 2
	], R = {
		xoeyzqq: "x1eme85i xoeyzqq",
		$$css: !0
	}, L = {
		position: "x10l6tqk",
		insetInlineStart: "x1r4y97",
		left: "",
		right: "",
		top: "xwa60dl",
		transform: "x1cb1t30",
		$$css: !0
	}, E = {
		pill: {
			position: "x10l6tqk",
			bottom: "xj9fbq8",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			zIndex: "xbpklzw",
			width: "xeq5yr9",
			maxWidth: "xv0phki",
			backgroundColor: "xpip370",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			paddingInlineEnd: "xp3wktp",
			$$css: !0
		},
		pillNoFaces: {
			paddingInlineStart: "xs5y41u",
			$$css: !0
		},
		pillOneFace: {
			paddingInlineStart: "x1wksrjf",
			$$css: !0
		},
		pillTwoFaces: {
			paddingInlineStart: "x1p6nyna",
			$$css: !0
		},
		pillThreeFaces: {
			paddingInlineStart: "x5nkwd7",
			$$css: !0
		},
		pillRaised: {
			bottom: "xjsj2l9",
			$$css: !0
		},
		facePile: function(t) {
			return [
				L,
				{
					width: t != null ? "x5lhr3w" : t,
					$$css: !0
				},
				{ "--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t) }
			];
		},
		facePileFill: {
			width: "xh8yej3",
			$$css: !0
		},
		faceOutlineColor: {
			borderTopColor: "x2ubtbe",
			borderInlineEndColor: "x1fwa7gd",
			borderBottomColor: "x1esgvb3",
			borderInlineStartColor: "x17vd3jm",
			$$css: !0
		},
		faceOutlineWidth: {
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		}
	}, k = [
		E.pillNoFaces,
		E.pillOneFace,
		E.pillTwoFaces,
		E.pillThreeFaces
	];
	function I(t) {
		var n = t.contactWids, o = t.hasCaption, a = o === void 0 ? !1 : o, i = t.onTap, l = n.slice(0, d), u = S[l.length];
		return c.jsxs(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			variant: "tonal",
			type: "default",
			size: "medium",
			onPress: i,
			testid: "status-chaining-pill",
			xstyle: [
				R,
				E.pill,
				k[l.length],
				a && E.pillRaised
			],
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(E.facePile(u)), { children: c.jsx(r("WAWebFacePile.react"), {
				idsOrUrls: l,
				faceSize: m,
				borderColor: E.faceOutlineColor,
				borderWidth: E.faceOutlineWidth,
				xstyle: E.facePileFill
			}) })), c.jsx("div", {
				className: "x10l6tqk x9q68il xwa60dl x1cb1t30 x78zum5",
				"aria-hidden": !0,
				children: c.jsx(r("WDSIconIcArrowForward.react"), {
					colorName: "contentInverse",
					height: 24,
					width: 24,
					directional: !0
				})
			})]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]", l.default = I;
}), 226);
