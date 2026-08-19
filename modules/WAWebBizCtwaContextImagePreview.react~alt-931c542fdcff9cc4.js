__d("WAWebBizCtwaContextImagePreview.react", [
	"WAWebBizCtwaContextThumbImage.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebSuspiciousLinkPopup.react",
	"WAWebURLUtils",
	"punycode",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { emojiNoPointerEvents: {
		pointerEvents: "x47corl",
		$$css: !0
	} };
	function c(e) {
		var t = e.compose, n = e.context, a = e.isSentByMe, i = e.sourceUrl, l = function() {
			if (!t) {
				if (n == null || n.sourceUrl == null || n.sourceUrl === "") return;
				if (n.isSuspiciousLink === !0) {
					var e = o("WAWebLinkify").findLink({ text: n.sourceUrl });
					e && o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }));
				} else o("WAWebExternalLink.react").openExternalLink(n.sourceUrl);
			}
		}, c = (n == null ? void 0 : n.description) != null && n.isSuspiciousLink !== !0 && s.jsx("div", {
			className: "x1lqm0kl x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv",
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: n.description,
				titlify: !0,
				emojiXstyle: u.emojiNoPointerEvents
			})
		}), d = i;
		if (n && n.sourceUrl != null && (d = n.sourceUrl, n.isSuspiciousLink !== !0 && (n.title != null && n.title !== "" || n.thumbnailUrl != null && n.thumbnailUrl !== "" || n.thumbnail != null && n.thumbnail !== ""))) {
			d = r("WAWebURLUtils").hostname(d);
			try {
				d = r("punycode").toUnicode(d);
			} catch (e) {}
		}
		var m = d != null && d !== "" ? s.jsx("div", {
			className: "x1okw0bk x4p5aij x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv",
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: d,
				emojiXstyle: u.emojiNoPointerEvents
			})
		}) : null, p = (n == null ? void 0 : n.isSuspiciousLink) === !0 ? null : n == null ? void 0 : n.title;
		return s.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0" },
			2: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj" },
			1: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1sqbtui" },
			3: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj x1sqbtui" }
		}[!t << 1 | !!t << 0], {
			"data-testid": "ctwa_image_preview",
			onClick: l,
			children: [s.jsx(o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage, {
				context: n,
				className: "x3psx0u x41jr8d x1266fpw xeghe2j x1td4c2q xl1xv1r"
			}), s.jsxs("div", {
				className: "x9f619 x78zum5 x12lumcd xdt5ytf xl56j7k x1upyj8d x1yrsyyn x10b6aqq xe2zdcy x2vl965 x6ikm8r x10wlt62 x17fgdl5",
				children: [
					s.jsx("div", {
						className: "xkz0k9k xjpr12u x6ikm8r x10wlt62 x1fc57z9 x14ug900 xlyipyv",
						title: p,
						children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
							text: p,
							emojiXstyle: u.emojiNoPointerEvents
						})
					}),
					c,
					m
				]
			})]
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
