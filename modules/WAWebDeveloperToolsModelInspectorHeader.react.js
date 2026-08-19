__d("WAWebDeveloperToolsModelInspectorHeader.react", [
	"WAStringCapitalize",
	"WAWebDeveloperMenuUtils",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, c = {
		filter: {
			borderStartStartRadius: "xtf1z3e",
			borderStartEndRadius: "x18i4vdl",
			borderEndEndRadius: "x17ka9pb",
			borderEndStartRadius: "xaozknv",
			color: "xhslqc4",
			backgroundColor: "x1od0jb8",
			fontSize: "x6prxxf",
			fontWeight: "xo1l8bm",
			letterSpacing: "x10b1f50",
			lineHeight: "x1btupbp",
			$$css: !0
		},
		selected: {
			color: "xk4n5i7",
			backgroundColor: "x1abdmlv",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(31), n = e.msg, a = e.plugins, i = e.selectedPlugin, l = e.setSelectedPlugin, d;
		t[0] !== n || t[1] !== i ? (d = i.getData(n), t[0] = n, t[1] = i, t[2] = d) : d = t[2];
		var m = d, p = m.id, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x1q74xe4 xcgk4ki x14ug900 x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1fcty0u x1yc453h xlyipyv xuxw1ft" }, t[3] = _) : _ = t[3];
		var f;
		t[4] !== i.key ? (f = o("WAStringCapitalize").capitalize(i.key), t[4] = i.key, t[5] = f) : f = t[5];
		var g;
		t[6] !== f ? (g = s.jsx("span", babelHelpers.extends({}, _, { children: f })), t[6] = f, t[7] = g) : g = t[7];
		var h;
		t[8] !== p ? (h = function() {
			o("WAWebDeveloperMenuUtils").copyToClipboard({
				successText: "Value Successfully Copied",
				text: p
			});
		}, t[8] = p, t[9] = h) : h = t[9];
		var y;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x1f6kntn x1fc57z9 xhslqc4 xt0b8zv xa5hfdq x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1fcty0u x1yc453h xlyipyv xuxw1ft" }, t[10] = y) : y = t[10];
		var C;
		t[11] !== p ? (C = s.jsx("span", babelHelpers.extends({}, y, { children: p })), t[11] = p, t[12] = C) : C = t[12];
		var b;
		t[13] !== h || t[14] !== C ? (b = s.jsx(r("WAWebUnstyledButton.react"), {
			onClick: h,
			children: C
		}), t[13] = h, t[14] = C, t[15] = b) : b = t[15];
		var v;
		t[16] !== g || t[17] !== b ? (v = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [g, b] }), t[16] = g, t[17] = b, t[18] = v) : v = t[18];
		var S;
		if (t[19] !== a || t[20] !== i.key || t[21] !== l) {
			var R;
			t[23] !== i.key || t[24] !== l ? (R = function(t) {
				return s.jsx(r("WAWebUnstyledButton.react"), {
					onClick: function() {
						return l(t);
					},
					"aria-pressed": t.key === i.key,
					xstyle: [
						c.filter,
						t.key === i.key && c.selected,
						u.paddingBlock6,
						o("WDSPaddings.stylex").wdsPaddings.paddingHor12
					],
					children: o("WAStringCapitalize").capitalize(t.key)
				}, "model-insepctor-model-" + t.key);
			}, t[23] = i.key, t[24] = l, t[25] = R) : R = t[25], S = a.map(R), t[19] = a, t[20] = i.key, t[21] = l, t[22] = S;
		} else S = t[22];
		var L;
		t[26] !== S ? (L = s.jsx(o("WAWebFlex.react").FlexRow, {
			columnGap: 12,
			children: S
		}), t[26] = S, t[27] = L) : L = t[27];
		var E;
		return t[28] !== L || t[29] !== v ? (E = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom8,
			children: [v, L]
		}), t[28] = L, t[29] = v, t[30] = E) : E = t[30], E;
	}
	l.default = d;
}), 98);
