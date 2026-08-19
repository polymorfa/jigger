__d("WAWebBizBotCommandsSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebClickable.react",
	"WAWebComposeBoxActions",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
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
		var n, a = t.businessProfile, i = (n = o("useWAWebModelValues").useModelValues(a, ["commands", "commandsDescription"])) != null ? n : {}, l = i.commands, u = i.commandsDescription;
		return l == null || !l.length ? null : c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-commands",
			title: s._(
				/*BTDS*/
				""
			),
			children: [!!u && c.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: u
			}), c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.commands, o("WDSMargins.stylex").wdsMargins.marginTop8), { children: l.map(function(e) {
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
			}) }))]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
