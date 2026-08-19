__d("WAWebVerificationCircle.react", [
	"fbt",
	"WAWebAvatarOverlay.react",
	"WAWebContactCollection",
	"WAWebDownloadableLink.react",
	"WAWebFileSaverTypes",
	"WAWebFrontendConstants",
	"WAWebFrontendContactGetters",
	"WAWebQRCode.react",
	"WAWebSpinner.react",
	"WAWebUserPrefsMeUser",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = "x1ndnnjd-B", _ = { circle: {
		width: "xygnafs",
		height: "x1wkxgih",
		paddingTop: "x14a8spa",
		paddingInlineEnd: "x1t7qo4d",
		paddingBottom: "x1c76a8b",
		paddingInlineStart: "xu7uy1i",
		$$css: !0
	} }, f = 10, g = f / 2;
	function h(e) {
		var t = o("react-compiler-runtime").c(18), n = e.binary, a = e.contact, i = m(!1), l = i[0], c = i[1], d = m(null), p = d[0], h = d[1], y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			var e = t == null ? void 0 : t.getElementsByTagName("canvas")[0];
			if (!e) {
				h(null);
				return;
			}
			var n = document.createElement("canvas");
			n.width = e.width + f, n.height = e.height + f;
			var r = n.getContext("2d");
			r.fillStyle = "white", r.fillRect(0, 0, n.width, n.height), r.drawImage(e, g, g), n.toBlob(h, "image/png");
		}, t[0] = y) : y = t[0];
		var C = y, b;
		if (t[1] !== a || t[2] !== p || t[3] !== l) {
			var v = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			if (b = null, l && p) {
				var S;
				t[5] !== a ? (S = o("WAWebFrontendContactGetters").getFormattedUser(a), t[5] = a, t[6] = S) : S = t[6];
				var R = S, L = o("WAWebFrontendContactGetters").getFormattedUser(o("WAWebContactCollection").ContactCollection.assertGet(v)), E = "Verification Code between " + L + " and " + R, k;
				t[7] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(o("WAWebAvatarOverlay.react").AvatarOverlay, { text: s._(
					/*BTDS*/
					""
				) }), t[7] = k) : k = t[7];
				var I;
				t[8] !== p || t[9] !== E ? (I = u.jsx(r("WAWebDownloadableLink.react"), {
					file: p,
					download: E,
					extension: o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
					children: k
				}), t[8] = p, t[9] = E, t[10] = I) : I = t[10], b = I;
			}
			t[1] = a, t[2] = p, t[3] = l, t[4] = b;
		} else b = t[4];
		var T, D;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return c(!0);
		}, D = function() {
			return c(!1);
		}, t[11] = T, t[12] = D) : (T = t[11], D = t[12]);
		var x;
		t[13] !== n ? (x = u.jsx(r("WAWebQRCode.react"), {
			data: n,
			size: o("WAWebFrontendConstants").QR_EDGE / 2,
			onChange: C,
			xstyle: _.circle
		}), t[13] = n, t[14] = x) : x = t[14];
		var $;
		return t[15] !== b || t[16] !== x ? ($ = u.jsxs("div", {
			onMouseEnter: T,
			onMouseLeave: D,
			children: [b, x]
		}), t[15] = b, t[16] = x, t[17] = $) : $ = t[17], $;
	}
	function y() {
		return u.jsx("div", {
			className: "xygnafs x1wkxgih x14a8spa x1t7qo4d x1c76a8b xu7uy1i",
			children: u.jsx("div", {
				className: "x14a8spa x1t7qo4d xu7uy1i x1ej9moc",
				children: u.jsx(o("WAWebSpinner.react").Spinner, {
					size: 52,
					stroke: 4
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(4), n = e.binary, r = e.contact, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 xu90me3 x1p8t8ri" }, t[0] = a) : a = t[0];
		var i;
		return t[1] !== n || t[2] !== r ? (i = u.jsx("div", babelHelpers.extends({}, a, { children: n ? u.jsx(h, {
			binary: n,
			contact: r
		}) : u.jsx(y, {}) })), t[1] = n, t[2] = r, t[3] = i) : i = t[3], i;
	}
	function b() {
		return u.jsx("div", {
			className: "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 xu90me3 xfn3atn",
			children: u.jsx("div", {
				className: "x1n2onr6 xwa60dl x1svysek x17t9dm2 x2b8uid x1cb1t30",
				children: "✓ "
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return u.jsx("div", {
			className: "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 xu90me3 x1o43s8z",
			children: u.jsx("div", {
				className: "x1n2onr6 xwa60dl x1svysek x17t9dm2 x2b8uid x1cb1t30",
				children: "!"
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x10l6tqk xef1mmm x1oy9qf3 x9f619 xh8yej3 x889kno x2vl965 x1a8lsjc xe2zdcy x1djn5p2 x1d3mw78 x17t9dm2 x2b8uid x1kncwe2" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("div", babelHelpers.extends({}, r, { children: n })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(5), n = e.binary, r = e.contact, a = e.state;
		switch (a) {
			case "qr": {
				var i;
				return t[0] !== n || t[1] !== r ? (i = u.jsx(C, {
					binary: n,
					contact: r
				}), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i;
			}
			case "checkmark": {
				var l;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(b, {}), t[3] = l) : l = t[3], l;
			}
			default: {
				var s;
				return t[4] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(v, {}), t[4] = s) : s = t[4], s;
			}
		}
	}
	l.VerificationBanner = S, l.VerificationCircle = R;
}), 226);
