__d("MAWChatFile.react", [
	"MAWFilePressable.react",
	"MWChatFileStatusIcon.react",
	"MWXTextPairing.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { root: {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		userSelect: "x87ps6o",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.file, a = e.getFileUrl, i = e.mediaRenderQpl, l = e.renderUnsupportedAttachment, s;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (s = u.jsx(r("MAWFilePressable.react"), {
			file: n,
			getFileUrl: a,
			mediaRenderQpl: i,
			renderUnsupportedAttachment: l,
			testid: void 0,
			children: m
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s) : s = t[4], s;
	}
	function m(t) {
		var n = t.filename, o = t.size;
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.root, !1), { children: [u.jsx(r("MWChatFileStatusIcon.react"), {}), u.jsxs("div", {
			className: "xzsf02u x1iyjqo2 x1s688f xz9dl7a xsag5q8 x1g0dm76 xv54qhq x13faqbe",
			children: [u.jsx(r("MWXTextPairing.react"), {
				headline: n,
				headlineLineLimit: 3,
				level: 4
			}), u.jsx("div", {
				className: "x889kno",
				children: u.jsx(r("MWXTextPairing.react"), {
					body: o,
					bodyColor: "secondary",
					bodyLineLimit: 1,
					level: 4
				})
			})]
		})] }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);
