__d("WAWebCustomerProfileDateField.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSDatePicker.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = {
		row: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		editButtonContainer: {
			flexShrink: "x2lah0s",
			opacity: "xg01cxk x5b7970",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.getUTCFullYear(), n = String(e.getUTCMonth() + 1).padStart(2, "0"), r = String(e.getUTCDate()).padStart(2, "0");
		return t + "-" + n + "-" + r;
	}
	function f(e) {
		return e.toLocaleDateString(void 0, {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC"
		});
	}
	function g(e) {
		var t = e.icon, n = e.label, a = e.monthDayOnly, i = e.onSave, l = e.placeholder, c = e.value, g = m(null), h = d(function() {
			var e;
			(e = g.current) == null || e.showPicker();
		}, []), y = d(function(e) {
			var t = e.target.value;
			if (t !== "") {
				var n = t.split("-").map(Number), r = n[0], o = n[1], a = n[2];
				i(new Date(Date.UTC(r, o - 1, a)));
			} else i(null);
		}, [i]), C = d(function(e) {
			i(e != null ? new Date(Date.UTC(2e3, e.getMonth(), e.getDate())) : null);
		}, [i]);
		if (a === !0) {
			var b = c != null ? new Date(2e3, c.getUTCMonth(), c.getUTCDate()) : null;
			return u.jsx("div", {
				role: "group",
				className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker",
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 12,
					xstyle: p.row,
					children: [u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: p.iconContainer,
						children: t
					}), u.jsx("div", {
						className: "x98rzlu xeuugli x6ikm8r x10wlt62",
						children: u.jsx(r("WDSDatePicker.react"), {
							label: n,
							mode: "birthday",
							onChange: C,
							testID: "customer_manager_birthday_picker",
							value: b
						})
					})]
				})
			});
		}
		return u.jsxs("div", {
			role: "group",
			className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker",
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: p.row,
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: p.iconContainer,
						children: t
					}),
					u.jsx("div", {
						className: "x98rzlu xeuugli x6ikm8r x10wlt62",
						children: c != null ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: n
						}), u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							maxLines: 1,
							children: f(c)
						})] }) : u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							maxLines: 1,
							children: l
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: p.editButtonContainer,
						children: u.jsx("button", {
							className: "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
							onClick: h,
							"aria-label": s._(
								/*BTDS*/
								"",
								[s._param("fieldLabel", n)]
							),
							children: u.jsx(r("WDSIconIcEdit.react"), {
								width: 20,
								height: 20
							})
						})
					})
				]
			}), u.jsx("input", {
				className: "xqtp20y xg01cxk x6ikm8r x10wlt62 x10l6tqk xnalus7",
				ref: g,
				type: "date",
				value: c != null ? _(c) : "",
				onChange: y,
				tabIndex: -1
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
