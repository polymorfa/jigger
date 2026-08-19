__d("WAWebBizCtwaContextImagePreview.react", [
	"WAWebBizCtwaContextThumbImage.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebSuspiciousLinkPopup.react",
	"WAWebURLUtils",
	"punycode",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { emojiNoPointerEvents: {
		pointerEvents: "x47corl",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(30), n = e.compose, a = e.context, i = e.sourceUrl, l;
		t[0] !== n || t[1] !== a ? (l = function() {
			if (!n) {
				if (a == null || a.sourceUrl == null || a.sourceUrl === "") return;
				if (a.isSuspiciousLink === !0) {
					var e = o("WAWebLinkify").findLink({ text: a.sourceUrl });
					e && o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }));
				} else o("WAWebExternalLink.react").openExternalLink(a.sourceUrl);
			}
		}, t[0] = n, t[1] = a, t[2] = l) : l = t[2];
		var c = l, d;
		t[3] !== a ? (d = (a == null ? void 0 : a.description) != null && a.isSuspiciousLink !== !0 && s.jsx("div", {
			className: "x1lqm0kl x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv",
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: a.description,
				titlify: !0,
				emojiXstyle: u.emojiNoPointerEvents
			})
		}), t[3] = a, t[4] = d) : d = t[4];
		var m = d, p = i;
		if (a && a.sourceUrl != null && (p = a.sourceUrl, a.isSuspiciousLink !== !0 && (a.title != null && a.title !== "" || a.thumbnailUrl != null && a.thumbnailUrl !== "" || a.thumbnail != null && a.thumbnail !== ""))) if (t[5] !== p) {
			p = r("WAWebURLUtils").hostname(p);
			try {
				p = r("punycode").toUnicode(p);
			} catch (e) {}
			t[5] = p, t[6] = p;
		} else p = t[6];
		var _;
		t[7] !== p ? (_ = p != null && p !== "" ? s.jsx("div", {
			className: "x1okw0bk x4p5aij x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv",
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: p,
				emojiXstyle: u.emojiNoPointerEvents
			})
		}) : null, t[7] = p, t[8] = _) : _ = t[8];
		var f = _, g = (a == null ? void 0 : a.isSuspiciousLink) === !0 ? null : a == null ? void 0 : a.title, h;
		t[9] !== n ? (h = {
			0: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0" },
			2: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj" },
			1: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1sqbtui" },
			3: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj x1sqbtui" }
		}[!n << 1 | !!n << 0], t[9] = n, t[10] = h) : h = t[10];
		var y;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (y = "x3psx0u x41jr8d x1266fpw xeghe2j x1td4c2q xl1xv1r", t[11] = y) : y = t[11];
		var C;
		t[12] !== a ? (C = s.jsx(o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage, {
			context: a,
			className: y
		}), t[12] = a, t[13] = C) : C = t[13];
		var b, v;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x9f619 x78zum5 x12lumcd xdt5ytf xl56j7k x1upyj8d x1yrsyyn x10b6aqq xe2zdcy x2vl965 x6ikm8r x10wlt62 x17fgdl5" }, v = { className: "xkz0k9k xjpr12u x6ikm8r x10wlt62 x1fc57z9 x14ug900 xlyipyv" }, t[14] = b, t[15] = v) : (b = t[14], v = t[15]);
		var S;
		t[16] !== g ? (S = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: g,
			emojiXstyle: u.emojiNoPointerEvents
		}), t[16] = g, t[17] = S) : S = t[17];
		var R;
		t[18] !== S || t[19] !== g ? (R = s.jsx("div", babelHelpers.extends({}, v, {
			title: g,
			children: S
		})), t[18] = S, t[19] = g, t[20] = R) : R = t[20];
		var L;
		t[21] !== m || t[22] !== R || t[23] !== f ? (L = s.jsxs("div", babelHelpers.extends({}, b, { children: [
			R,
			m,
			f
		] })), t[21] = m, t[22] = R, t[23] = f, t[24] = L) : L = t[24];
		var E;
		return t[25] !== c || t[26] !== L || t[27] !== h || t[28] !== C ? (E = s.jsxs("div", babelHelpers.extends({}, h, {
			"data-testid": "ctwa_image_preview",
			onClick: c,
			children: [C, L]
		})), t[25] = c, t[26] = L, t[27] = h, t[28] = C, t[29] = E) : E = t[29], E;
	}
	l.default = c;
}), 98);
