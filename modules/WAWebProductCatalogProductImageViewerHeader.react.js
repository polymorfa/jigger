__d("WAWebProductCatalogProductImageViewerHeader.react", [
	"WAWebCellFrame.react",
	"WAWebContactCollection",
	"WAWebDescriptionRefreshedIcon.react",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebMenuBar.react",
	"WAWebName.react",
	"WAWebText.react",
	"WAWebXViewerIcon.react",
	"WDSMargins.stylex",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { productNameIcon: {
		color: "xhslqc4",
		$$css: !0
	} };
	function c(e) {
		var t = e.isImgZoomedIn, n = e.onClose, a = e.product, i = o("useWAWebModelValues").useModelValues(a, ["name", "catalogWid"]), l = s.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}), c = o("WAWebContactCollection").ContactCollection.get(i.catalogWid), d;
		if (c) {
			var m = s.jsx(o("WAWebName.react").Name, {
				contact: c,
				selectable: !0,
				useVerifiedName: !0
			}), p = s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: c.id,
				size: 40
			}), _ = o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon, f = s.jsxs("div", { children: [s.jsx(_, {
				xstyle: [u.productNameIcon, o("WDSMargins.stylex").wdsMargins.marginEnd2],
				displayInline: !0,
				width: 17,
				height: 20
			}), s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: i.name,
				titlify: !0,
				ellipsify: !0
			})] });
			d = s.jsx(r("WAWebCellFrame.react"), {
				idle: !0,
				image: p,
				primary: m,
				secondary: f,
				theme: "media"
			});
		} else d = s.jsx(o("WAWebText.react").WAWebTextLarge, {
			as: "span",
			paddingStart: 12,
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: i.name,
				titlify: !0,
				ellipsify: !0
			})
		});
		return s.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x1c4vz4f x15zctf7 x6s0dn4 xng8ra x1280gxy x19991ni x1d8287x xeerw82" },
			1: { className: "x78zum5 x1c4vz4f x15zctf7 x6s0dn4 xng8ra x1280gxy x19991ni x1d8287x xeerw82 xlshs6z xg01cxk" }
		}[!!t << 0], { children: [s.jsx("div", {
			className: "x1iyjqo2 x14yy4lh x1g6eq07 x6ikm8r x10wlt62 xpcyujq",
			children: d
		}), s.jsx("div", {
			className: "x9ek82g x14iifvp",
			children: s.jsx(o("WAWebMenuBar.react").MenuBar, {
				theme: "strong",
				children: s.jsx(o("WAWebMenuBar.react").MenuBarItem, {
					testid: "btn-close",
					icon: l,
					title: r("WAWebFbtCommon")("Close"),
					onClick: n
				})
			}, "media-panel-header")
		})] }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
