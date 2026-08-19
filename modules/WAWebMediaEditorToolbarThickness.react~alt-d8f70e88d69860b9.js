__d("WAWebMediaEditorToolbarThickness.react", [
	"WAWebMediaEditorEnumsThickness",
	"WDSPaddings.stylex",
	"react",
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
		var n = t.onThicknessSelect, a = t.selectedThickness, i = t.thickness, l = a === i;
		return u.jsx("div", {
			onClick: function() {
				return n(i);
			},
			className: (e || (e = r("stylex")))(d.thicknessButton, l && d.thicknessButtonSelected, [o("WDSPaddings.stylex").wdsPaddings.paddingVer4, c.paddingInline5]),
			style: {
				height: o("WAWebMediaEditorEnumsThickness").getThicknessValue(i),
				width: o("WAWebMediaEditorEnumsThickness").getThicknessValue(i)
			}
		}, o("WAWebMediaEditorEnumsThickness").ThicknessType.getName(i));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(t) {
		var n = t.onThicknessSelect, a = t.selectedThickness, i = t.thicknesses, l = i.map(function(e, t) {
			return u.jsx(m, {
				thickness: e,
				onThicknessSelect: n,
				selectedThickness: a
			}, t);
		});
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.container, [
			c.paddingBlock10,
			o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
			o("WDSPaddings.stylex").wdsPaddings.paddingStart20
		]), { children: l }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
