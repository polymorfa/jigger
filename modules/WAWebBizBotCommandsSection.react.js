__d("WAWebBizBotCommandsSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebClickable.react",
	"WAWebComposeBoxActions",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingInline10: {
		paddingInlineStart: "xe2zdcy",
		paddingInlineEnd: "x2vl965",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, m = {
		command: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			backgroundColor: "x16ar8wu",
			$$css: !0
		},
		commands: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			flexWrap: "x1a02dak",
			$$css: !0
		}
	};
	function p(t) {
		var n, a = o("react-compiler-runtime").c(11), i = t.businessProfile, l = (n = o("useWAWebModelValues").useModelValues(i, ["commands", "commandsDescription"])) != null ? n : {}, u = l.commands, d = l.commandsDescription;
		if (u == null || !u.length) return null;
		var p;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), a[0] = p) : p = a[0];
		var f;
		a[1] !== d ? (f = !!d && c.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: d
		}), a[1] = d, a[2] = f) : f = a[2];
		var g;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex"))).props(m.commands, o("WDSMargins.stylex").wdsMargins.marginTop8), a[3] = g) : g = a[3];
		var h;
		a[4] !== u ? (h = u.map(_), a[4] = u, a[5] = h) : h = a[5];
		var y;
		a[6] !== h ? (y = c.jsx("div", babelHelpers.extends({}, g, { children: h })), a[6] = h, a[7] = y) : y = a[7];
		var C;
		return a[8] !== f || a[9] !== y ? (C = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-commands",
			title: p,
			children: [f, y]
		}), a[8] = f, a[9] = y, a[10] = C) : C = a[10], C;
	}
	function _(e) {
		var t = e.description, n = e.name, r = "/" + n + " ", a = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.paste(null, r, { insertLeadingSpace: !0 });
		};
		return c.jsx(o("WAWebClickable.react").Clickable, {
			title: t,
			onClick: a,
			xstyle: [
				m.command,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
				d.paddingInline10,
				o("WDSMargins.stylex").wdsMargins.marginEnd8,
				o("WDSMargins.stylex").wdsMargins.marginVer4
			],
			children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				color: "primary",
				children: r
			})
		}, n);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
