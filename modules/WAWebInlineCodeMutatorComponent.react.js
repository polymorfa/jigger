__d("WAWebInlineCodeMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(7), a = t.children, i = t.quoted, l = t.selectable, s = t.xstyle, d = a === void 0 ? "" : a, m;
		n[0] !== i || n[1] !== s ? (m = (e || (e = r("stylex")))(c.code, i && c.quotedColor, c.paddingHoriz4, c.paddingVert2, s), n[0] = i, n[1] = s, n[2] = m) : m = n[2];
		var p;
		return n[3] !== d || n[4] !== l || n[5] !== m ? (p = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
			selectable: l,
			appTextTemplate: "`${appText}`",
			className: m,
			children: d
		}), n[3] = d, n[4] = l, n[5] = m, n[6] = p) : p = n[6], p;
	}
	l.default = d;
}), 98);
