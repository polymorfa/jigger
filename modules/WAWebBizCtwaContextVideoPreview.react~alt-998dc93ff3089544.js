__d("WAWebBizCtwaContextVideoPreview.react", [
	"fbt",
	"WAWebBizCtwaContextSourceButton.react",
	"WAWebBizCtwaContextThumbImage.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebMediaStateControls.react",
	"WAWebMsgGetters",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebMsgType",
	"WAWebPipController",
	"WAWebPipOverlay.react",
	"WAWebSettingsFBT",
	"WAWebURLUtils",
	"WAWebVideoPipLargeIcon.react",
	"react",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = d.useState, f = {
		preview: {
			marginTop: "xvijh9v",
			marginInlineEnd: "x1mpyi22",
			marginBottom: "x1ty9z65",
			marginInlineStart: "xm2jcoa",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1wl59ut",
			lineHeight: "x1fc57z9",
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		}
	}, g = {
		PREVIEW: "PREVIEW",
		FLOATER: "FLOATER"
	};
	function h(t) {
		var n = t.context, a = n.sourceApp === "whatsapp", i = m(function() {
			if (t.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
				var e = t.msg.toJSON(), n = new (r("WAWebMsgKey"))({
					fromMe: t.msg.id.fromMe,
					remote: t.msg.id.remote,
					id: r("WAWebMsgKey").newId_DEPRECATED()
				});
				return e.id = n, new (o("WAWebMsgModel")).Msg(e);
			}
			return t.msg;
		}, [t.msg]), l = p(null), u = _(function() {
			return r("WAWebPipController").isOpened(i) ? g.FLOATER : g.PREVIEW;
		}), d = u[0], h = u[1], y = function() {
			h(g.FLOATER);
		}, C = function() {
			d !== g.PREVIEW && h(g.PREVIEW);
		};
		o("useWAWebListener").useListener(r("WAWebPipController"), i.id.toString() + "_pip_did_open", y), o("useWAWebListener").useListener(r("WAWebPipController"), i.id.toString() + "_pip_did_close", C);
		var b = function(t) {
			t.preventDefault(), t.stopPropagation(), n.sourceUrl != null && n.sourceUrl !== "" && o("WAWebExternalLink.react").openExternalLink(n.sourceUrl);
		}, v = t.context.sourceUrl != null && t.context.sourceUrl !== "" ? r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(t.context.sourceUrl)) : null, S = c.jsx("div", {
			className: "x4p5aij x1pg5gke xhslqc4",
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: v })
		}), R = {
			0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
			1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
		}[(t.context.thumbnail != null) << 0], L = n.description != null && n.isSuspiciousLink !== !0 ? c.jsx("div", {
			className: "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
			title: t.context.description,
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.context.description })
		}) : null, E = c.jsx("div", {
			className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4",
			title: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription(),
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription() })
		}), k = n.title != null && n.isSuspiciousLink !== !0 ? c.jsx("div", {
			className: "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
			title: n.title,
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.title })
		}) : null, I = c.jsx("div", {
			className: "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn",
			title: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle(),
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle() })
		}), T = (e || (e = r("stylex")))(f.preview, o("WAWebMsgGetters").getIsSentByMe(i) && f.bubbleOut || f.bubbleIn), D = d === g.PREVIEW && !a ? c.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
			children: c.jsx(o("WAWebMediaStateControls.react").Play, {})
		}) : null, x = d === g.FLOATER ? c.jsx(r("WAWebPipOverlay.react"), {
			icon: c.jsx(o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}) : null;
		return c.jsxs("div", {
			className: T,
			children: [
				c.jsxs("div", babelHelpers.extends({
					ref: l,
					className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 x1wtasar x6ikm8r x10wlt62"
				}, !a && { onClick: b }, { children: [
					v != null && !a ? c.jsx(r("WAWebBizCtwaContextSourceButton.react"), {
						hostname: v,
						onClick: b
					}) : null,
					c.jsx(o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage, {
						context: n,
						className: "x1n2onr6 xjibb99 x3v4nfg xnjobev x1h1h5sg x1ypdohk x1df5jli x13i0172 xl1xv1r"
					}),
					D,
					x
				] })),
				!a && (n.sourceUrl == null || n.sourceUrl === "" ? c.jsxs("div", { children: [
					k,
					L,
					S
				] }) : c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
					className: R,
					href: n.sourceUrl,
					children: [
						k,
						L,
						S
					]
				})),
				a && c.jsxs("div", {
					className: R,
					children: [I, E]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
