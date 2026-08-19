__d("WAWebDeveloperToolsModelInspectorHeader.react", [
	"WAStringCapitalize",
	"WAWebDeveloperMenuUtils",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
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
		var t = e.msg, n = e.plugins, a = e.selectedPlugin, i = e.setSelectedPlugin, l = a.getData(t), d = l.data, m = l.id;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom8,
			children: [s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx("span", {
				className: "x1q74xe4 xcgk4ki x14ug900 x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1fcty0u x1yc453h xlyipyv xuxw1ft",
				children: o("WAStringCapitalize").capitalize(a.key)
			}), s.jsx(r("WAWebUnstyledButton.react"), {
				onClick: function() {
					o("WAWebDeveloperMenuUtils").copyToClipboard({
						successText: "Value Successfully Copied",
						text: m
					});
				},
				children: s.jsx("span", {
					className: "x1f6kntn x1fc57z9 xhslqc4 xt0b8zv xa5hfdq x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1fcty0u x1yc453h xlyipyv xuxw1ft",
					children: m
				})
			})] }), s.jsx(o("WAWebFlex.react").FlexRow, {
				columnGap: 12,
				children: n.map(function(e) {
					return s.jsx(r("WAWebUnstyledButton.react"), {
						onClick: function() {
							return i(e);
						},
						"aria-pressed": e.key === a.key,
						xstyle: [
							c.filter,
							e.key === a.key && c.selected,
							u.paddingBlock6,
							o("WDSPaddings.stylex").wdsPaddings.paddingHor12
						],
						children: o("WAStringCapitalize").capitalize(e.key)
					}, "model-insepctor-model-" + e.key);
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
