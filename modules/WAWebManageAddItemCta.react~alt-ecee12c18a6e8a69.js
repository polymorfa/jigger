__d("WAWebManageAddItemCta.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebNoop",
	"WAWebUnstyledButton.react",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingBlock15: {
			paddingTop: "xqy66fx",
			paddingBottom: "xr1496l",
			$$css: !0
		},
		paddingInline15: {
			paddingInlineStart: "x1gx403c",
			paddingInlineEnd: "x1q3ajuy",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginBottom1: {
			marginBottom: "x1ty9z65",
			$$css: !0
		}
	}, m = { addIcon: {
		position: "x1n2onr6",
		width: "x1d7z9mz",
		height: "x14baz6b",
		borderTopWidth: "xamhcws",
		borderInlineEndWidth: "x1alpsbp",
		borderBottomWidth: "xlxy82",
		borderInlineStartWidth: "xyumdvf",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "x1vynwtf",
		borderInlineEndColor: "xxmg6um",
		borderBottomColor: "x1j5b3ru",
		borderInlineStartColor: "x1mov0ff",
		borderStartStartRadius: "xrxyp3c",
		borderStartEndRadius: "xv0oops",
		borderEndEndRadius: "x1isl5vh",
		borderEndStartRadius: "xn8zj9a",
		"::before_position": "x1hmns74",
		"::before_top": "x1knuo7r",
		"::before_left": "xgdch9p",
		"::before_insetInlineStart": null,
		"::before_insetInlineEnd": null,
		"::before_display": "x1fgarty",
		"::before_width": "x1j6c3ea",
		"::before_height": "xv7f310",
		"::before_content": "x1cpjm7i",
		"::before_backgroundColor": "x1oi0s10",
		"::before_transform": "xbnewub",
		"::after_position": "x1j6awrg",
		"::after_top": "xoqv437",
		"::after_left": "x16v8oms",
		"::after_insetInlineStart": null,
		"::after_insetInlineEnd": null,
		"::after_display": "xhkezso",
		"::after_width": "xqysinb",
		"::after_height": "x6giem4",
		"::after_content": "x1s928wv",
		"::after_backgroundColor": "xwvaqp7",
		"::after_transform": "x128ww4c",
		$$css: !0
	} };
	function p(t) {
		var n = t.idle, a = t.onClick, i = t.testid, l = i === void 0 ? "add-item" : i, u = t.theme, p = t.title, _ = (e || (e = r("stylex")))(u === "default" && d.paddingBlock15, u === "default" && o("WDSMargins.stylex").wdsMargins.marginTop8, u === "in-list" && o("WDSPaddings.stylex").wdsPaddings.paddingVer8, u === "in-list" && d.paddingInline15, u === "collections" && o("WDSPaddings.stylex").wdsPaddings.paddingVer8, u === "collections" && d.paddingInline15, u === "collections" && d.marginBottom1), f = c.jsx(r("WAWebUnstyledButton.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			onClick: r("WAWebNoop"),
			xstyle: [
				m.addIcon,
				o("WDSMargins.stylex").wdsMargins.marginStart12,
				o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
			],
			children: c.jsx(c.Fragment, {})
		});
		return c.jsx(r("WAWebCellFrame.react"), {
			theme: "add-item",
			image: f,
			customImage: !0,
			primary: p != null ? p : s._(
				/*BTDS*/
				""
			),
			className: _,
			onClick: a,
			idle: n,
			testid: l
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
