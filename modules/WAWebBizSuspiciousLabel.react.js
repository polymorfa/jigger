__d("WAWebBizSuspiciousLabel.react", [
	"fbt",
	"WAWebDisplayType",
	"WAWebMsgLinks",
	"WDSIconIcAlertWarning.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		marginInlineEnd6: {
			marginInlineEnd: "xbelrpt",
			$$css: !0
		},
		marginBottom3: {
			marginBottom: "xahult9",
			$$css: !0
		},
		marginTop3: {
			marginTop: "x7r5mf7",
			$$css: !0
		},
		marginBottom5: {
			marginBottom: "xu06os2",
			$$css: !0
		}
	}, m = {
		icon: {
			color: "x17t9dm2",
			$$css: !0
		},
		container: {
			display: "x1rg5ohu",
			height: "xhvdbge",
			marginInlineStart: "xw01apr",
			backgroundColor: "x1936wsd",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		}
	};
	function p(e) {
		var t, n = e.displayType, r = e.link, a = e.msg;
		if (!(!a && !r)) {
			var i;
			if ((a == null || (t = a.ctwaContext) == null ? void 0 : t.isSuspiciousLink) === !0) i = s._(
				/*BTDS*/
				""
			);
			else if (r) {
				var l;
				(l = r.suspiciousCharacters) != null && l.size && (i = s._(
					/*BTDS*/
					""
				));
			} else if (a) {
				var u = o("WAWebMsgLinks").getSuspiciousLinks(a).length;
				if (u) {
					var c = o("WAWebMsgLinks").getLinksFromMsg(a).length;
					c === 1 || n === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? i = s._(
						/*BTDS*/
						""
					) : i = s._(
						/*BTDS*/
						"",
						[s._plural(u, "count")]
					);
				}
			}
			return i;
		}
	}
	function _(t) {
		var n, a = o("react-compiler-runtime").c(12), i;
		a[0] !== t ? (i = p(t), a[0] = t, a[1] = i) : i = a[1];
		var l = i;
		if (l == null) return null;
		var s;
		if (a[2] !== t.link || a[3] !== ((n = t.msg) == null ? void 0 : n.ctwaContext)) {
			var u, _;
			s = (e || (e = r("stylex"))).props(m.container, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.marginInlineEnd6, o("WDSMargins.stylex").wdsMargins.marginBottom2, ((u = t.msg) == null ? void 0 : u.ctwaContext) != null && d.marginBottom3, t.link && d.marginTop3, t.link && d.marginBottom5), a[2] = t.link, a[3] = (_ = t.msg) == null ? void 0 : _.ctwaContext, a[4] = s;
		} else s = a[4];
		var f, g;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx(r("WDSIconIcAlertWarning.react"), {
			displayInline: !0,
			xstyle: [
				m.icon,
				o("WDSMargins.stylex").wdsMargins.marginTop4,
				o("WDSMargins.stylex").wdsMargins.marginEnd4
			],
			height: 10,
			width: 11
		}), g = { className: "x1n2onr6 x1c7jfne x190qgfh x1fcty0u x17t9dm2 xtvhhri" }, a[5] = f, a[6] = g) : (f = a[5], g = a[6]);
		var h;
		a[7] !== l ? (h = c.jsx("span", babelHelpers.extends({}, g, { children: l })), a[7] = l, a[8] = h) : h = a[8];
		var y;
		return a[9] !== s || a[10] !== h ? (y = c.jsxs("div", babelHelpers.extends({}, s, { children: [f, h] })), a[9] = s, a[10] = h, a[11] = y) : y = a[11], y;
	}
	l.getSuspiciousLabel = p, l.SuspiciousLabel = _;
}), 226);
