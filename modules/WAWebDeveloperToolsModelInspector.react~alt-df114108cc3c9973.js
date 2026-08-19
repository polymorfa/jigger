__d("WAWebDeveloperToolsModelInspector.react", [
	"WAWebDeveloperMenuUtils",
	"WAWebDeveloperToolsModelInspectorUtils",
	"WAWebFlex.react",
	"WAWebRichTextInput.react",
	"WAWebUnstyledButton.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		tdVal: {
			textAlign: "xp4054r",
			":hover_textDecoration": "xt0b8zv",
			":hover_textDecorationColor": "xa5hfdq",
			$$css: !0
		},
		tableHeaderWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		tableSearchBar: {
			width: "xygnafs",
			textAlign: "xp4054r",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.data, n = e.dataType, a = e.id, i = e.modelKey, l = u(""), d = l[0], m = l[1];
		return s.jsxs("div", { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: c.tableHeaderWidth,
			children: [s.jsx("span", {
				className: "x1c3i2sq xo1mcw5 xgif2c7",
				children: n
			}), s.jsx(r("WAWebRichTextInput.react"), {
				placeholder: "Search for a key",
				onChange: function(t) {
					m(t.text);
				},
				xstyle: c.tableSearchBar
			})]
		}), s.jsx("div", {
			className: "x6ikm8r x10wlt62 x1vd4hg5 xh8yej3 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
			children: s.jsx("div", {
				className: "x1rife3k x5yr21d x6ikm8r xh8yej3",
				children: s.jsx("table", {
					className: "x140o2bo xh8yej3 x5kalc8 x889kno x1a8lsjc",
					children: s.jsx("tbody", { children: Object.entries(t).filter(function(e) {
						var t = e[0];
						return d === "" ? !0 : t.toLowerCase().includes(d);
					}).sort(function(e, t) {
						var n = e[0], r = t[0], o = n.toLowerCase();
						return n !== "id" && r !== "id" ? n < r ? -1 : 1 : o === "id" ? -1 : 1;
					}).map(function(e, t) {
						var n = e[0], a = e[1];
						return s.createElement("tr", babelHelpers.extends({}, {
							0: { className: "x17gydlx x4wrhlh" },
							1: { className: "x17gydlx x1280gxy" }
						}[(t % 2 === 0) << 0], { key: n }), s.jsx("td", {
							className: "xjb2p0i x117nqv4 x14ug900 xxymvpz x123j3cw x1gabggj xs9asl8 xaso8d8",
							children: n
						}), s.jsx("td", {
							className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xp4054r xt0b8zv xa5hfdq",
							children: s.jsx(r("WAWebUnstyledButton.react"), {
								onClick: function() {
									return o("WAWebDeveloperMenuUtils").copyToClipboard({
										successText: "Value Successfully Copied",
										text: String(a)
									});
								},
								xstyle: c.tdVal,
								children: o("WAWebDeveloperToolsModelInspectorUtils").serialize(i, n, a)
							})
						}));
					}) })
				})
			})
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
