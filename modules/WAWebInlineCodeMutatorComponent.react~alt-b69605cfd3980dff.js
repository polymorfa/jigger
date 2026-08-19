__d("WAWebInlineCodeMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		code: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			backgroundColor: "x1bu39yj",
			color: "x1bvqhpb",
			fontFamily: "xgfl6pn",
			$$css: !0
		},
		quotedColor: {
			color: "x15rks2t",
			$$css: !0
		},
		paddingHoriz4: {
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		paddingVert2: {
			paddingTop: "x1gxa6cn",
			paddingBottom: "xa0aww2",
			$$css: !0
		}
	};
	function d(t) {
		var n = t.children, a = n === void 0 ? "" : n, i = t.quoted, l = t.selectable, s = t.xstyle;
		return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
			selectable: l,
			appTextTemplate: "`${appText}`",
			className: (e || (e = r("stylex")))(c.code, i && c.quotedColor, c.paddingHoriz4, c.paddingVert2, s),
			children: a
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
