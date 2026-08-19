__d("WAWebBizCtwaContextLargeImagePreview.react", [
	"WAWebBizCtwaContextSourceButton.react",
	"WAWebBizCtwaContextThumbImage.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebSettingsFBT",
	"WAWebStopEvent",
	"WAWebSuspiciousLinkPopup.react",
	"WAWebURLUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.context, n = e.msg, a = t.sourceApp === "whatsapp", i = u(null), l = t.isSuspiciousLink === !0 || t.thumbnailUrl == null && t.thumbnail == null, c = function(n) {
			if (o("WAWebStopEvent").stopEvent(n), t.isSuspiciousLink === !0 && t.sourceUrl != null) {
				var e = o("WAWebLinkify").findLink({ text: t.sourceUrl });
				e && o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }));
			} else t.sourceUrl != null && t.sourceUrl !== "" && o("WAWebExternalLink.react").openExternalLink(t.sourceUrl);
		}, d = t.sourceUrl != null ? r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(t.sourceUrl)) : null, m = s.jsx("div", {
			className: "x4p5aij x1pg5gke xhslqc4",
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, { text: d })
		}), p = {
			0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
			1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
		}[(t.thumbnail != null) << 0], _ = t.description != null && t.isSuspiciousLink !== !0 ? s.jsx("div", {
			className: "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
			title: t.description,
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.description })
		}) : null, f = s.jsx("div", {
			className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4",
			title: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription(),
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription() })
		}), g = t.title != null && t.isSuspiciousLink !== !0 ? s.jsx("div", {
			className: "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
			title: t.title,
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.title })
		}) : null, h = s.jsx("div", {
			className: "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn",
			title: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle(),
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle() })
		}), y = {
			0: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj",
			1: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
		}[!!o("WAWebMsgGetters").getIsSentByMe(n) << 0];
		return s.jsxs("div", {
			className: y,
			children: [
				s.jsx("div", babelHelpers.extends({
					ref: i,
					className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x1wtasar x6ikm8r x10wlt62"
				}, !a && { onClick: c }, { children: s.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x78zum5 x6s0dn4 x1n2onr6 x6ikm8r x10wlt62" },
					1: { className: "x78zum5 x6s0dn4 x1n2onr6 x6ikm8r x10wlt62 xh8yej3" }
				}[!!l << 0], { children: [t.isSuspiciousLink !== !0 && d != null && !a && s.jsx(r("WAWebBizCtwaContextSourceButton.react"), {
					hostname: d,
					onClick: c
				}), s.jsx(o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage, {
					context: t,
					className: "x1n2onr6 xjibb99 x9823lz x1h1h5sg xnjobev xl1xv1r" + (a ? "" : " x1ypdohk")
				})] })) })),
				t.sourceUrl != null && !a && s.jsxs(o("WAWebExternalLink.react").ExternalLink, {
					className: p,
					href: t.sourceUrl,
					testid: "ctwa_ad_context_link",
					children: [
						g,
						_,
						m
					]
				}),
				a && s.jsxs("div", {
					className: p,
					children: [h, f]
				})
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
