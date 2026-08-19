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
	"react"
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
		var t = e.binary, n = e.contact, a = m(!1), i = a[0], l = a[1], c = m(null), p = c[0], h = c[1], y = d(function(e) {
			var t = e == null ? void 0 : e.getElementsByTagName("canvas")[0];
			if (!t) {
				h(null);
				return;
			}
			var n = document.createElement("canvas");
			n.width = t.width + f, n.height = t.height + f;
			var r = n.getContext("2d");
			r.fillStyle = "white", r.fillRect(0, 0, n.width, n.height), r.drawImage(t, g, g), n.toBlob(h, "image/png");
		}, [h]), C = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), b = null;
		if (i && p) {
			var v = o("WAWebFrontendContactGetters").getFormattedUser(n), S = o("WAWebFrontendContactGetters").getFormattedUser(o("WAWebContactCollection").ContactCollection.assertGet(C)), R = "Verification Code between " + S + " and " + v;
			b = u.jsx(r("WAWebDownloadableLink.react"), {
				file: p,
				download: R,
				extension: o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
				children: u.jsx(o("WAWebAvatarOverlay.react").AvatarOverlay, { text: s._(
					/*BTDS*/
					""
				) })
			});
		}
		return u.jsxs("div", {
			onMouseEnter: function() {
				return l(!0);
			},
			onMouseLeave: function() {
				return l(!1);
			},
			children: [b, u.jsx(r("WAWebQRCode.react"), {
				data: t,
				size: o("WAWebFrontendConstants").QR_EDGE / 2,
				onChange: y,
				xstyle: _.circle
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
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
		var t = e.binary, n = e.contact;
		return u.jsx("div", {
			className: "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 xu90me3 x1p8t8ri",
			children: t ? u.jsx(h, {
				binary: t,
				contact: n
			}) : u.jsx(y, {})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
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
		var t = e.children;
		return u.jsx("div", {
			className: "x10l6tqk xef1mmm x1oy9qf3 x9f619 xh8yej3 x889kno x2vl965 x1a8lsjc xe2zdcy x1djn5p2 x1d3mw78 x17t9dm2 x2b8uid x1kncwe2",
			children: t
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.binary, n = e.contact, r = e.state;
		switch (r) {
			case "qr": return u.jsx(C, {
				binary: t,
				contact: n
			});
			case "checkmark": return u.jsx(b, {});
			default: return u.jsx(v, {});
		}
	}
	R.displayName = R.name + " [from " + i.id + "]", l.VerificationBanner = S, l.VerificationCircle = R;
}), 226);
