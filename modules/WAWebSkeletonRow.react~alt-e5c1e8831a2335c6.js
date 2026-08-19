__d("WAWebSkeletonRow.react", ["WAWebSkeleton.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		rowAvatar: {
			flexShrink: "x2lah0s",
			width: "x15jighw",
			height: "x112a4uq",
			marginInlineStart: "x2kejxg",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		lineTitle: {
			height: "x18gnavp",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		lineSubtitle: {
			height: "x6w4g8m",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		rowTimestamp: {
			flexShrink: "x2lah0s",
			alignSelf: "xqcrz7y",
			marginTop: "xhrpt6u",
			width: "x1td3qas",
			height: "x6w4g8m",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		}
	}, c = {
		title0: {
			width: "x1kmanbg",
			$$css: !0
		},
		title1: {
			width: "x1fnd73c",
			$$css: !0
		},
		title2: {
			width: "xycev2y",
			$$css: !0
		},
		title3: {
			width: "x14zvdfm",
			$$css: !0
		},
		subtitle0: {
			width: "xktia5q",
			$$css: !0
		},
		subtitle1: {
			width: "x1hmiwze",
			$$css: !0
		},
		subtitle2: {
			width: "xh00ny3",
			$$css: !0
		},
		subtitle3: {
			width: "x1kmanbg",
			$$css: !0
		}
	}, d = [
		c.title0,
		c.title1,
		c.title2,
		c.title3
	], m = [
		c.subtitle0,
		c.subtitle1,
		c.subtitle2,
		c.subtitle3
	];
	function p(e) {
		var t, n = e.index, o = e.variant;
		return s.jsxs("div", {
			className: "x9f619 x78zum5 x6s0dn4 xy75621 x12nagc x1hm9lzh x1sa5p1d x1q3ajuy",
			children: [
				s.jsx(t = r("WAWebSkeleton.react"), {
					index: n,
					xstyle: u.rowAvatar
				}),
				s.jsxs("div", {
					className: "x78zum5 xdt5ytf xl56j7k x1iyjqo2 xx6jrq6 x1b8z93w",
					children: [s.jsx(t, {
						index: n,
						xstyle: [u.lineTitle, d[o]]
					}), s.jsx(t, {
						index: n,
						xstyle: [u.lineSubtitle, m[o]]
					})]
				}),
				s.jsx(t, {
					index: n,
					xstyle: u.rowTimestamp
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
