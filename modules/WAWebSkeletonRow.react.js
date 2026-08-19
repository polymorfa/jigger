__d("WAWebSkeletonRow.react", [
	"WAWebSkeleton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
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
		var t = o("react-compiler-runtime").c(23), n = e.index, a = e.variant, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x9f619 x78zum5 x6s0dn4 xy75621 x12nagc x1hm9lzh x1sa5p1d x1q3ajuy" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = s.jsx(r("WAWebSkeleton.react"), {
			index: n,
			xstyle: u.rowAvatar
		}), t[1] = n, t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x78zum5 xdt5ytf xl56j7k x1iyjqo2 xx6jrq6 x1b8z93w" }, t[3] = c) : c = t[3];
		var p = d[a], _;
		t[4] !== p ? (_ = [u.lineTitle, p], t[4] = p, t[5] = _) : _ = t[5];
		var f;
		t[6] !== n || t[7] !== _ ? (f = s.jsx(r("WAWebSkeleton.react"), {
			index: n,
			xstyle: _
		}), t[6] = n, t[7] = _, t[8] = f) : f = t[8];
		var g = m[a], h;
		t[9] !== g ? (h = [u.lineSubtitle, g], t[9] = g, t[10] = h) : h = t[10];
		var y;
		t[11] !== n || t[12] !== h ? (y = s.jsx(r("WAWebSkeleton.react"), {
			index: n,
			xstyle: h
		}), t[11] = n, t[12] = h, t[13] = y) : y = t[13];
		var C;
		t[14] !== f || t[15] !== y ? (C = s.jsxs("div", babelHelpers.extends({}, c, { children: [f, y] })), t[14] = f, t[15] = y, t[16] = C) : C = t[16];
		var b;
		t[17] !== n ? (b = s.jsx(r("WAWebSkeleton.react"), {
			index: n,
			xstyle: u.rowTimestamp
		}), t[17] = n, t[18] = b) : b = t[18];
		var v;
		return t[19] !== C || t[20] !== b || t[21] !== l ? (v = s.jsxs("div", babelHelpers.extends({}, i, { children: [
			l,
			C,
			b
		] })), t[19] = C, t[20] = b, t[21] = l, t[22] = v) : v = t[22], v;
	}
	l.default = p;
}), 98);
