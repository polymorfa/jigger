__d("WAWebCellMenuItem.react", [
	"WAWebCellV2.react",
	"WAWebMenuItem.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"border",
		"children",
		"colorScheme",
		"detailLeft",
		"detailRight",
		"disabled",
		"forceActive",
		"isRefresh",
		"middleContainerXStyle",
		"onMouseEnter",
		"onMouseLeave",
		"optionId",
		"primary",
		"primaryRight",
		"secondary",
		"secondaryRight",
		"size",
		"textWrap"
	], u, c = u || (u = o("react"));
	function d(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.border, l = a.children, u = a.colorScheme, d = a.detailLeft, m = a.detailRight, p = a.disabled, _ = a.forceActive, f = a.isRefresh, g = a.middleContainerXStyle, h = a.onMouseEnter, y = a.onMouseLeave, C = a.optionId, b = a.primary, v = a.primaryRight, S = a.secondary, R = a.secondaryRight, L = a.size, E = a.textWrap, k = E === void 0 ? "ellipsis" : E, I = babelHelpers.objectWithoutPropertiesLoose(a, s), T = o("WAWebMenuItem.react").useMenuItem(C), D = T.border, x = T.colorScheme, $ = T.isActive, P = T.material, N = T.size, M = u != null ? u : x, w;
		b != null && (w = c.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			maxLines: k === "ellipsis" ? 1 : null,
			children: b
		}));
		var A;
		return S != null && (A = c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			maxLines: k === "ellipsis" ? 1 : null,
			children: S
		})), c.jsxs(o("WAWebMenuItem.react").WAWebMenuItem, babelHelpers.extends({
			optionId: C,
			type: "action"
		}, I, {
			ref: n,
			children: [c.jsx(r("WAWebCellV2.react"), {
				middleContainerXStyle: g,
				onMouseEnter: h,
				onMouseLeave: y,
				size: L != null ? L : N,
				colorScheme: M,
				material: P,
				disabled: p,
				primary: w,
				primaryRight: v,
				secondary: A,
				secondaryRight: R,
				detailLeft: d,
				detailRight: m,
				active: _ === !0 || $,
				tabIndex: -1,
				border: i || D,
				isRefresh: f
			}), l]
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.CellV2MenuItem = d;
}), 98);
