__d("WAWebCheckmarkInfoModal.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("WAWebFaqUrl").getBlueFaqUrl(), t = function(n) {
			n.preventDefault(), o("WAWebModalManager").ModalManager.close(), self.setTimeout(function() {
				return o("WAWebExternalLink.react").openExternalLink(e);
			}, 10);
		}, n = d();
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Close"),
			children: [
				u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n }),
				u.jsx("br", {}),
				u.jsx("br", {}),
				u.jsx(r("WAWebClickableLink.react"), {
					href: e,
					onClick: t,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return s._(
			/*BTDS*/
			""
		);
	}
	l.default = c;
}), 226);
