__d("WAWebRichTextInputPlugins.react", [
	"WAWebEmojisPlugin.react",
	"WAWebFloatingToolbarPlugin.react",
	"WAWebMentionsPlugin.react",
	"WAWebTextFormatPreviewPlugin.react",
	"WAWebTextFormatShortcutsPlugin.react",
	"WAWebTextModifierPlugin",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.blockQuoteEnabled, n = t === void 0 ? !1 : t, a = e.bulletPointsEnabled, i = a === void 0 ? !1 : a, l = e.emojiSize, u = e.floatingToolbarEnabled, c = u === void 0 ? !1 : u, d = e.groupMetadata, m = e.highlightedBotCommands, p = e.inlineCodeEnabled, _ = p === void 0 ? !1 : p, f = e.internLinksEnabled, g = f === void 0 ? !1 : f, h = e.linksEnabled, y = h === void 0 ? !1 : h, C = e.numberedListEnabled, b = C === void 0 ? !1 : C, v = e.phoneNumbersEnabled, S = v === void 0 ? !1 : v, R = e.spoilerEnabled, L = R === void 0 ? !1 : R, E = e.textFormatEnabled, k = E === void 0 ? !1 : E, I = e.textFormatShortcutsEnabled, T = I === void 0 ? !1 : I, D = e.transformTextEmoji, x = D === void 0 ? !0 : D;
		return s.jsxs(s.Fragment, { children: [
			s.jsx(r("WAWebEmojisPlugin.react"), {
				emojiSize: l,
				transformTextEmoji: x
			}),
			s.jsx(r("WAWebMentionsPlugin.react"), { groupMetadata: d }),
			s.jsx(r("WAWebTextModifierPlugin"), {
				autoToggleListBulletSymbol: i,
				autoToggleListNumberSymbol: b
			}),
			k && s.jsxs(s.Fragment, { children: [
				s.jsx(r("WAWebTextFormatPreviewPlugin.react"), {
					bulletPointsEnabled: i,
					numberedListEnabled: b,
					inlineCodeEnabled: _,
					blockQuoteEnabled: n,
					internLinksEnabled: g,
					phoneNumbersEnabled: S,
					linksEnabled: y,
					highlightedBotCommands: m,
					spoilerEnabled: L
				}),
				c && s.jsx(o("WAWebFloatingToolbarPlugin.react").FloatingToolbarPlugin, {
					bulletPointsEnabled: i,
					numberedListEnabled: b,
					inlineCodeEnabled: _,
					blockQuoteEnabled: n
				}),
				T && s.jsx(r("WAWebTextFormatShortcutsPlugin.react"), {
					bulletPointsEnabled: i,
					numberedListEnabled: b,
					inlineCodeEnabled: _,
					blockQuoteEnabled: n
				})
			] })
		] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
