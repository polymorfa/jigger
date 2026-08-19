__d("WAWebEditGroupProfileDrawerColorPanel.react", [
	"WAWebClassnames",
	"WAWebEditGroupProfileDrawer.react",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebThemeContext",
	"WAWebUnstyledButton.react",
	"WAWebUtilsGetColor",
	"react",
	"stylex",
	"sumBy"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useRef, p = {
		btnOutline: {
			boxSizing: "x9f619",
			width: "x1n7h9c3",
			height: "x1s1d1n7",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			marginInlineStart: "x1s7rqsx",
			marginInlineEnd: "xavaexc",
			$$css: !0
		},
		btnOutlineSelected: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x5see2y",
			borderInlineEndWidth: "x16hg961",
			borderBottomWidth: "x1pzews7",
			borderInlineStartWidth: "x1x3agtl",
			$$css: !0
		},
		cobalt200: {
			backgroundColor: "x1oo8p90",
			$$css: !0
		},
		cobalt300: {
			borderTopColor: "x6royac",
			borderInlineEndColor: "xx5opfz",
			borderBottomColor: "x14cb7dr",
			borderInlineStartColor: "xmmh3gu",
			$$css: !0
		},
		cobalt600: {
			borderTopColor: "x19pqyre",
			borderInlineEndColor: "x1dx5r0d",
			borderBottomColor: "xn97f8d",
			borderInlineStartColor: "x35nu9z",
			$$css: !0
		},
		coolGray200: {
			backgroundColor: "x7h6blw",
			$$css: !0
		},
		coolGray300: {
			borderTopColor: "xpvnr5i",
			borderInlineEndColor: "x10grn0k",
			borderBottomColor: "x1dby8ki",
			borderInlineStartColor: "x18cmx3l",
			$$css: !0
		},
		coolGray600: {
			borderTopColor: "x1mhjja8",
			borderInlineEndColor: "xvrb8ec",
			borderBottomColor: "xaan176",
			borderInlineStartColor: "xn1bhsn",
			$$css: !0
		},
		green200: {
			backgroundColor: "x16e27g8",
			$$css: !0
		},
		green300: {
			borderTopColor: "x1n3nl5k",
			borderInlineEndColor: "x1lxe1wc",
			borderBottomColor: "xomhzu9",
			borderInlineStartColor: "xb1ia4f",
			$$css: !0
		},
		green600: {
			borderTopColor: "xxd0oja",
			borderInlineEndColor: "x1x5ajq0",
			borderBottomColor: "xny2m1m",
			borderInlineStartColor: "x1cfgj43",
			$$css: !0
		},
		orange200: {
			backgroundColor: "x160328e",
			$$css: !0
		},
		orange300: {
			borderTopColor: "x10tkvke",
			borderInlineEndColor: "xrfykmt",
			borderBottomColor: "xzn19z9",
			borderInlineStartColor: "x145hu4p",
			$$css: !0
		},
		orange600: {
			borderTopColor: "x115v66e",
			borderInlineEndColor: "x1yqi8l6",
			borderBottomColor: "x1pfrzjx",
			borderInlineStartColor: "xq14096",
			$$css: !0
		},
		pink200: {
			backgroundColor: "x1n1x9ff",
			$$css: !0
		},
		pink300: {
			borderTopColor: "x11kue8n",
			borderInlineEndColor: "x11l1eyt",
			borderBottomColor: "x1o2xmjv",
			borderInlineStartColor: "x1gc6uyr",
			$$css: !0
		},
		pink600: {
			borderTopColor: "x1lgigfw",
			borderInlineEndColor: "x1dv6zyt",
			borderBottomColor: "xv36hzq",
			borderInlineStartColor: "xv8i1n3",
			$$css: !0
		},
		purple200: {
			backgroundColor: "x12133zs",
			$$css: !0
		},
		purple300: {
			borderTopColor: "xafagsn",
			borderInlineEndColor: "x1x6n01l",
			borderBottomColor: "xr0kidx",
			borderInlineStartColor: "x8anzlq",
			$$css: !0
		},
		purple600: {
			borderTopColor: "x5afzex",
			borderInlineEndColor: "x1smhxv3",
			borderBottomColor: "x9119nh",
			borderInlineStartColor: "x74t5m8",
			$$css: !0
		},
		red200: {
			backgroundColor: "x1h3j3vg",
			$$css: !0
		},
		red300: {
			borderTopColor: "x8tfcmy",
			borderInlineEndColor: "xletulh",
			borderBottomColor: "x1ein4ql",
			borderInlineStartColor: "xsd0u7w",
			$$css: !0
		},
		red600: {
			borderTopColor: "x1ncz38y",
			borderInlineEndColor: "x14uv455",
			borderBottomColor: "x166m8tq",
			borderInlineStartColor: "x1v63nrz",
			$$css: !0
		},
		skyBlue200: {
			backgroundColor: "x12sjp1n",
			$$css: !0
		},
		skyBlue300: {
			borderTopColor: "x1mq2pjw",
			borderInlineEndColor: "xl7eizt",
			borderBottomColor: "x1scubwu",
			borderInlineStartColor: "x18bbta6",
			$$css: !0
		},
		skyBlue600: {
			borderTopColor: "x9r2033",
			borderInlineEndColor: "x5ui3c6",
			borderBottomColor: "x4du5eb",
			borderInlineStartColor: "x1cfg69z",
			$$css: !0
		},
		teal200: {
			backgroundColor: "x1jm9hjs",
			$$css: !0
		},
		teal300: {
			borderTopColor: "xdua1l2",
			borderInlineEndColor: "x18i07j4",
			borderBottomColor: "xcgoipr",
			borderInlineStartColor: "x8hegkq",
			$$css: !0
		},
		teal600: {
			borderTopColor: "xpkzfwk",
			borderInlineEndColor: "x1x95er6",
			borderBottomColor: "x18dybx1",
			borderInlineStartColor: "x9a2pmz",
			$$css: !0
		},
		yellow200: {
			backgroundColor: "x8keij6",
			$$css: !0
		},
		yellow300: {
			borderTopColor: "x12bq9os",
			borderInlineEndColor: "x777y73",
			borderBottomColor: "x1u0y05q",
			borderInlineStartColor: "x10givlx",
			$$css: !0
		},
		yellow600: {
			borderTopColor: "x1j34zb0",
			borderInlineEndColor: "x5e8qd7",
			borderBottomColor: "x7ihkh2",
			borderInlineStartColor: "x1kn109n",
			$$css: !0
		},
		btn: {
			width: "x1td3qas",
			height: "x10w6t97",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			":focus_borderStartStartRadius": "x13345yd",
			":focus_borderStartEndRadius": "x1kqiigx",
			":focus_borderEndEndRadius": "x1iy4mvq",
			":focus_borderEndStartRadius": "x1nrmj05",
			$$css: !0
		},
		btnSelected: {
			width: "x1ksvffz",
			height: "xqaafxp",
			$$css: !0
		}
	}, _ = new Map([
		["cobalt", p.cobalt200],
		["cool-gray", p.coolGray200],
		["green", p.green200],
		["orange", p.orange200],
		["pink", p.pink200],
		["purple", p.purple200],
		["red", p.red200],
		["sky-blue", p.skyBlue200],
		["teal", p.teal200],
		["yellow", p.yellow200]
	]), f = new Map([
		["cobalt", p.cobalt600],
		["cool-gray", p.coolGray600],
		["green", p.green600],
		["orange", p.orange600],
		["pink", p.pink600],
		["purple", p.purple600],
		["red", p.red600],
		["sky-blue", p.skyBlue600],
		["teal", p.teal600],
		["yellow", p.yellow600]
	]), g = new Map([
		["cobalt", p.cobalt300],
		["cool-gray", p.coolGray300],
		["green", p.green300],
		["orange", p.orange300],
		["pink", p.pink300],
		["purple", p.purple300],
		["red", p.red300],
		["sky-blue", p.skyBlue300],
		["teal", p.teal300],
		["yellow", p.yellow300]
	]);
	function h(t) {
		var n = t.className, a = t.colors, i = t.onSelect, l = t.selectedIndex, s = d(o("WAWebThemeContext").ThemeContext), c = s.theme, h = m(l), y = m([]), C = {
			rows: a,
			getNum: function() {
				return r("sumBy")(C.rows, function(e) {
					return e.length;
				});
			}
		}, b = {
			right: function() {
				var e, t = h.current === C.getNum() - 1 ? 0 : h.current + 1;
				(e = y.current[t]) == null || e.focus();
			},
			left: function() {
				var e, t = h.current === 0 ? C.getNum() - 1 : h.current - 1;
				(e = y.current[t]) == null || e.focus();
			}
		}, v = 0;
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: "tablist",
			handlers: b,
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(n),
			children: C.rows.map(function(t, n) {
				return u.jsx(o("WAWebFlex.react").FlexRow, {
					className: "xzbgwbi",
					justify: "center",
					children: t.map(function(t) {
						var n = v++, a = l === n, s = c === "light" ? 600 : 300;
						return u.jsx(o("WAWebFlex.react").FlexRow, {
							justify: "center",
							align: "center",
							children: u.jsx(o("WAWebFlex.react").FlexRow, {
								justify: "center",
								align: "center",
								className: (e || (e = r("stylex")))(p.btnOutline, a && p.btnOutlineSelected, a && (c === "light" ? f.get(t) : g.get(t))),
								style: a && t === "sand" ? { borderColor: r("WAWebUtilsGetColor")(t, s) } : void 0,
								children: u.jsx(r("WAWebUnstyledButton.react"), {
									role: "tab",
									ref: function(t) {
										return y.current[n] = t;
									},
									tabIndex: a ? 0 : -1,
									"aria-label": o("WAWebEditGroupProfileDrawer.react").getFbtColorString(t),
									"aria-selected": a,
									onClick: function() {
										return i(n);
									},
									onFocus: function() {
										h.current = n;
									},
									children: u.jsx(o("WAWebFlex.react").FlexItem, {
										xstyle: [
											p.btn,
											a && p.btnSelected,
											_.get(t)
										],
										style: t === "sand" ? { backgroundColor: r("WAWebUtilsGetColor")(t, 200) } : void 0
									})
								})
							})
						}, n);
					})
				}, n);
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
