__d("WAWebMediaVideoLinkPreview.react", [
	"fbt",
	"WAWebABProps",
	"WAWebClientFeatureFlags",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebMediaLinkPreviewUtils",
	"WAWebMediaStateControls.react",
	"WAWebMsgGetters",
	"WAWebPipAttributionIcon",
	"WAWebPipConst",
	"WAWebPipController",
	"WAWebPipOverlay.react",
	"WAWebStateUtils",
	"WAWebURLUtils",
	"WAWebUnstyledButton.react",
	"WAWebUtilsYoutubeUrlParser",
	"WAWebVideoPipLargeIcon.react",
	"err",
	"isStringNullOrEmpty",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = { thumbnailWrapper: {
		position: "x1n2onr6",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		width: "xh8yej3",
		maxHeight: "x1wtasar",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		boxSizing: "x9f619",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		borderTopWidth: "xl8et2f",
		borderInlineEndWidth: "xuc0g9m",
		borderBottomWidth: "x1dmim90",
		borderInlineStartWidth: "xs4xcjr",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "x1v8p93f x1878o1q",
		borderInlineEndColor: "x1o3jo1z xf2y0h5",
		borderBottomColor: "x16stqrj xnv9r3m",
		borderInlineStartColor: "xv5lvn5 xo81p9n",
		$$css: !0
	} }, _ = {
		PREVIEW: "PREVIEW",
		FLOATER: "FLOATER"
	}, f = [
		o("WAWebPipConst").HOSTNAME.YOUTUBE,
		o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE,
		o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED
	];
	function g(e) {
		return f.includes(e);
	}
	function h(e) {
		var t = e.Icon;
		return u.jsx(t, {});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.msg, n = d(null), a = m(function() {
			return r("WAWebPipController").isOpened(o("WAWebStateUtils").unproxy(t)) ? _.FLOATER : _.PREVIEW;
		}), i = a[0], l = a[1], c = function() {
			i !== _.FLOATER && l(_.FLOATER);
		}, f = function() {
			i !== _.PREVIEW && l(_.PREVIEW);
		};
		o("useWAWebListener").useListener(r("WAWebPipController"), t.id.toString() + "_pip_did_open", c), o("useWAWebListener").useListener(r("WAWebPipController"), t.id.toString() + "_pip_did_close", f);
		var y = function() {
			return n.current ? n.current.getBoundingClientRect() : null;
		}, C = function(t) {
			var e = t.split("?");
			if (e.length !== 2) return 0;
			var n = e[1], a = new URLSearchParams(n).get(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_NAME);
			if (r("isStringNullOrEmpty")(a)) return 0;
			var i = a.match(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_PATTERN), l = 0;
			if (i != null && i.length) for (var s = 1; s < i.length; s++) {
				var u = i[s];
				if (u) {
					var c = parseInt(u, 10);
					if (Number.isNaN(c)) return 0;
					u.endsWith("h") && (l += c * 3600), u.endsWith("m") && (l += c * 60), u.endsWith("s") && (l += c), /^\d+$/.test(u) && (l += c);
				}
			}
			return l;
		}, b = r("isStringNullOrEmpty")(t.description) ? null : u.jsx("div", {
			className: "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
			title: t.description,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.description })
		}), v = r("WAWebURLUtils").hostname(e.msg.matchedText);
		v = r("WAWebURLUtils").withoutWww(v), v === o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED && (v = o("WAWebPipConst").HOSTNAME.YOUTUBE);
		var S = u.jsx("div", {
			className: "x4p5aij x1pg5gke xhslqc4",
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: v })
		}), R = {
			0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
			1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
		}[!e.msg.thumbnail << 0], L = o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(t.t), E = !L && e.msg.thumbnailHQ ? e.msg.thumbnailHQ : e.msg.thumbnail, k = (v === o("WAWebPipConst").HOSTNAME.YOUTUBE || v === o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE) && o("WAWebABProps").getABPropConfigValue("youtube_inline_playback_killswitch"), I;
		if (i === _.PREVIEW) switch (v) {
			case o("WAWebPipConst").HOSTNAME.YOUTUBE:
			case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE: {
				if (k) {
					I = function(n) {
						n && n.stopPropagation(), o("WAWebExternalLink.react").openExternalLink(e.msg.matchedText);
					};
					break;
				}
				var T = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(e.msg.matchedText);
				if (!r("isStringNullOrEmpty")(T)) {
					var D = C(e.msg.matchedText);
					I = function(n) {
						n && n.stopPropagation(), r("WAWebPipController").openYoutubePiP(T, e.msg, D, y());
					};
				}
				break;
			}
			case o("WAWebPipConst").HOSTNAME.INSTAGRAM:
			case o("WAWebPipConst").HOSTNAME.STREAMABLE:
			case o("WAWebPipConst").HOSTNAME.FACEBOOK:
			case o("WAWebPipConst").HOSTNAME.FBWATCH:
			case o("WAWebPipConst").HOSTNAME.FBWATCH_ALT:
			case o("WAWebPipConst").HOSTNAME.SHARECHAT:
				I = function(n) {
					throw r("WAWebPipController").openOgVideoPiP("", E, e.msg, 0, y()), r("err")("This call is not supported");
				};
				break;
			default: return null;
		}
		var x = {
			0: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj",
			1: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
		}[!!o("WAWebMsgGetters").getIsSentByMe(e.msg) << 0], $ = i === _.PREVIEW && !k ? u.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
			children: u.jsx(o("WAWebMediaStateControls.react").Play, {})
		}) : null, P = i === _.FLOATER ? u.jsx(r("WAWebPipOverlay.react"), {
			icon: u.jsx(o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, N, M;
		if (E && Object.values(o("WAWebPipConst").HOSTNAME).includes(v)) {
			var w = g(v);
			N = u.jsx("img", babelHelpers.extends({ alt: "" }, {
				0: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1df5jli" },
				2: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1df5jli x1a842fp xl1xv1r" },
				1: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk xkcp37y" },
				3: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1a842fp xl1xv1r xkcp37y" }
			}[!!w << 1 | !!(w && o("WAWebClientFeatureFlags").isFeatureEnabled("youtube_video_preview_without_blur") || !L && e.msg.thumbnailHQ) << 0], { src: "data:image/jpeg;base64," + E }));
			var A = o("WAWebPipAttributionIcon").getAttributionIcon(v);
			A && (M = u.jsx("div", {
				className: "x10l6tqk x1bv8kjd x1jn9clo x1vjfegm",
				children: u.jsx(h, { Icon: A })
			}));
		} else N = u.jsx("div", { className: "x1n2onr6 xh8yej3 xnjobev x8du59y" });
		return u.jsxs("div", {
			className: x,
			children: [u.jsxs(r("WAWebUnstyledButton.react"), {
				tabIndex: 0,
				ref: n,
				xstyle: p.thumbnailWrapper,
				onClick: I,
				"aria-label": k ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				children: [
					M,
					N,
					$,
					P
				]
			}), u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
				className: R,
				href: e.msg.matchedText,
				tabIndex: -1,
				children: [
					u.jsx("div", {
						className: "x104kibb x1c4vz4f xs83m0k xdl72j9 x13m54ha x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
						title: e.msg.title,
						children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e.msg.title })
					}),
					b,
					S
				]
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
