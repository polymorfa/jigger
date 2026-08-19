__d("WAWebUprPaymentMethodInfo.react", [
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WAWebUprPaymentMethodRenderData",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		row: {
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "xv8gdss",
			paddingBottom: "xgb8hzy",
			columnGap: "x1aj3ljl",
			width: "xh8yej3",
			boxSizing: "x9f619",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		selected: {
			outline: "xagbzdv",
			$$css: !0
		},
		info: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(25), n = e.accountType, a = e.identifierType, i = e.onSelect, l = e.paymentKey, c = e.selected, d = c === void 0 ? !1 : c, m;
		t[0] !== n || t[1] !== a ? (m = o("WAWebUprPaymentMethodRenderData").getUprMethodRenderData(n, a), t[0] = n, t[1] = a, t[2] = m) : m = t[2];
		var p = m, _ = p == null ? void 0 : p.icon, f = d && u.selected, g;
		t[3] !== f ? (g = [u.row, f], t[3] = f, t[4] = g) : g = t[4];
		var h;
		t[5] !== _ ? (h = _ != null && s.jsx(o("WAWebFlex.react").FlexColumn, { children: s.jsx(_, {
			height: 40,
			width: 40
		}) }), t[5] = _, t[6] = h) : h = t[6];
		var y;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x14ug900 x13m54ha x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, t[7] = y) : y = t[7];
		var C;
		t[8] !== l.institution_name ? (C = s.jsx("div", babelHelpers.extends({}, y, { children: l.institution_name })), t[8] = l.institution_name, t[9] = C) : C = t[9];
		var b;
		t[10] !== l.key ? (b = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: l.key
		}), t[10] = l.key, t[11] = b) : b = t[11];
		var v;
		t[12] !== l.full_name_on_account ? (v = s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: l.full_name_on_account
		}), t[12] = l.full_name_on_account, t[13] = v) : v = t[13];
		var S;
		t[14] !== C || t[15] !== b || t[16] !== v ? (S = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.info,
			children: [
				C,
				b,
				v
			]
		}), t[14] = C, t[15] = b, t[16] = v, t[17] = S) : S = t[17];
		var R;
		t[18] !== S || t[19] !== g || t[20] !== h ? (R = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: g,
			children: [h, S]
		}), t[18] = S, t[19] = g, t[20] = h, t[21] = R) : R = t[21];
		var L = R, E;
		return t[22] !== i || t[23] !== L ? (E = i != null ? s.jsx(o("WAWebClickable.react").Clickable, {
			dataTestId: "upr_key_picker_row",
			onClick: i,
			children: L
		}) : L, t[22] = i, t[23] = L, t[24] = E) : E = t[24], E;
	}
	l.default = c;
}), 98);
