__d("WAWebStickerCreateButton.react", [
	"fbt",
	"WAWebPlusIcon.react",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginTop25: {
		marginTop: "x1e1m7ul",
		$$css: !0
	} }, m = {
		button: {
			width: "x1hp1aql",
			height: "x6h4ims",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		container: {
			width: "x1lraqik",
			height: "xsi6dy0",
			backgroundColor: "x1od0jb8",
			color: "x7ncltm",
			fontSize: "x1nxh6w3",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			":hover_transform": "xt8homm",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1g2r6go",
			transitionTimingFunction: "xwji4o3",
			willChange: "x1so62im",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		containerExpressionPanels: {
			width: "x1247r65",
			height: "xng8ra",
			fontSize: "x1ncwhqj",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(12), a = t.onClick, i = t.theme, l;
		n[0] !== a ? (l = function(t) {
			a == null || a(t);
		}, n[0] = a, n[1] = l) : l = n[1];
		var u = l, p;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), n[2] = p) : p = n[2];
		var _;
		n[3] !== i ? (_ = (e || (e = r("stylex"))).props(m.container, i === "stickerExpressionsPanel" && m.containerExpressionPanels, i !== "stickerExpressionsPanel" && d.marginTop25, i !== "stickerExpressionsPanel" && o("WDSMargins.stylex").wdsMargins.marginBottom20), n[3] = i, n[4] = _) : _ = n[4];
		var f, g;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx(o("WAWebPlusIcon.react").PlusIcon, { xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom4 }), g = c.jsx("span", { children: s._(
			/*BTDS*/
			""
		) }), n[5] = f, n[6] = g) : (f = n[5], g = n[6]);
		var h;
		n[7] !== _ ? (h = c.jsxs("div", babelHelpers.extends({}, _, { children: [f, g] })), n[7] = _, n[8] = h) : h = n[8];
		var y;
		return n[9] !== u || n[10] !== h ? (y = c.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: m.button,
			onClick: u,
			"aria-label": p,
			children: h
		}), n[9] = u, n[10] = h, n[11] = y) : y = n[11], y;
	}
	l.default = p;
}), 226);
