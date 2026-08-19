__d("MAWChatFile.react", [
	"MAWFilePressable.react",
	"MWChatFileStatusIcon.react",
	"MWXTextPairing.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { root: {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		userSelect: "x87ps6o",
		$$css: !0
	} };
	function d(t) {
		var n = t.file, o = t.getFileUrl, a = t.mediaRenderQpl, i = t.renderUnsupportedAttachment;
		return u.jsx(r("MAWFilePressable.react"), {
			file: n,
			getFileUrl: o,
			mediaRenderQpl: a,
			renderUnsupportedAttachment: i,
			testid: void 0,
			children: function(n) {
				var t = n.filename, o = n.size;
				return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.root, !1), { children: [u.jsx(r("MWChatFileStatusIcon.react"), {}), u.jsxs("div", {
					className: "xzsf02u x1iyjqo2 x1s688f xz9dl7a xsag5q8 x1g0dm76 xv54qhq x13faqbe",
					children: [u.jsx(r("MWXTextPairing.react"), {
						headline: t,
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
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
