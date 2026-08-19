__d("WAWebMediaEditorToolbarThickness.react", [
	"WAWebMediaEditorEnumsThickness",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingInline5: {
			paddingInlineStart: "xaso8d8",
			paddingInlineEnd: "x1gabggj",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		}
	}, d = {
		container: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		thicknessButton: {
			cursor: "x1ypdohk",
			transition: "x3uy0m3",
			backgroundColor: "x1b09ust",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundClip: "xqkn89t",
			":hover_backgroundColor": "x1v5ln58",
			":active_backgroundColor": "x1yj6aur",
			$$css: !0
		},
		thicknessButtonSelected: {
			backgroundColor: "xoger0s",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(19), a = t.onThicknessSelect, i = t.selectedThickness, l = t.thickness, s = i === l, m;
		n[0] !== l ? (m = o("WAWebMediaEditorEnumsThickness").ThicknessType.getName(l), n[0] = l, n[1] = m) : m = n[1];
		var p;
		n[2] !== a || n[3] !== l ? (p = function() {
			return a(l);
		}, n[2] = a, n[3] = l, n[4] = p) : p = n[4];
		var _;
		n[5] !== s ? (_ = (e || (e = r("stylex")))(d.thicknessButton, s && d.thicknessButtonSelected, [o("WDSPaddings.stylex").wdsPaddings.paddingVer4, c.paddingInline5]), n[5] = s, n[6] = _) : _ = n[6];
		var f;
		n[7] !== l ? (f = o("WAWebMediaEditorEnumsThickness").getThicknessValue(l), n[7] = l, n[8] = f) : f = n[8];
		var g;
		n[9] !== l ? (g = o("WAWebMediaEditorEnumsThickness").getThicknessValue(l), n[9] = l, n[10] = g) : g = n[10];
		var h;
		n[11] !== f || n[12] !== g ? (h = {
			height: f,
			width: g
		}, n[11] = f, n[12] = g, n[13] = h) : h = n[13];
		var y;
		return n[14] !== m || n[15] !== p || n[16] !== _ || n[17] !== h ? (y = u.jsx("div", {
			onClick: p,
			className: _,
			style: h
		}, m), n[14] = m, n[15] = p, n[16] = _, n[17] = h, n[18] = y) : y = n[18], y;
	}
	function p(t) {
		var n = o("react-compiler-runtime").c(10), a = t.onThicknessSelect, i = t.selectedThickness, l = t.thicknesses, s;
		if (n[0] !== a || n[1] !== i || n[2] !== l) {
			var p;
			n[4] !== a || n[5] !== i ? (p = function(t, n) {
				return u.jsx(m, {
					thickness: t,
					onThicknessSelect: a,
					selectedThickness: i
				}, n);
			}, n[4] = a, n[5] = i, n[6] = p) : p = n[6], s = l.map(p), n[0] = a, n[1] = i, n[2] = l, n[3] = s;
		} else s = n[3];
		var _ = s, f;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (f = (e || (e = r("stylex"))).props(d.container, [
			c.paddingBlock10,
			o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
			o("WDSPaddings.stylex").wdsPaddings.paddingStart20
		]), n[7] = f) : f = n[7];
		var g;
		return n[8] !== _ ? (g = u.jsx("div", babelHelpers.extends({}, f, { children: _ })), n[8] = _, n[9] = g) : g = n[9], g;
	}
	l.default = p;
}), 98);
