__d("WAWebGroupDescriptionBanner.react", [
	"fbt",
	"WAWebCmd",
	"WAWebConversationBanner.react",
	"WAWebEmojiText.react",
	"WAWebFormatConfiguration",
	"WAWebGroupDescriptionBanner.stylex",
	"WAWebLinkify",
	"WAWebNonEmptyString",
	"WAWebResizeObserver.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState;
	function g(e, t) {
		var n = e == null ? void 0 : e.split("\n");
		return n == null ? void 0 : n.slice(0, t).join("\n");
	}
	function h(e) {
		var t, n = (t = e == null ? void 0 : e.split("\n")) != null ? t : [];
		return n.length;
	}
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onClose, c = o("useWAWebModelValues").useOptionalModelValues(a.groupMetadata, ["displayedDesc"]), m = _(null), y = _(null), b = C(c), v = f(function() {
			return o("WAWebNonEmptyString").asMaybeNonEmptyString(b);
		}), S = v[0], R = v[1], L = g(S, 1), E = f(!1), k = E[0], I = E[1], T = f(!0), D = T[0], x = T[1], $ = function() {
			o("WAWebCmd").Cmd.chatInfoDrawer(i, { showFullGroupDescription: !0 });
		}, P = function(t) {
			var e, n, r = t.height, o = (e = (n = y.current) == null || (n = n.getElement()) == null ? void 0 : n.offsetHeight) != null ? e : 0;
			I(h(S) > 1 || r < o);
		};
		if (p(function() {
			var e, t, n, r;
			if (!(!m.current || !y.current)) {
				var o = (e = (t = m.current) == null ? void 0 : t.clientHeight) != null ? e : 0, a = (n = (r = y.current) == null || (r = r.getElement()) == null ? void 0 : r.offsetHeight) != null ? n : 0;
				I(h(S) > 1 || o < a), x(!1);
			}
		}, [S]), S !== b && (R(o("WAWebNonEmptyString").asMaybeNonEmptyString(b)), I(!1), x(!0)), S == null) return null;
		var N = a.chat.isTrusted() ? o("WAWebFormatConfiguration").TrustedGroupDesc({
			links: o("WAWebLinkify").findLinks(S),
			bulletPointsEnabled: !0,
			expandedFormattingEnabled: !1
		}) : o("WAWebFormatConfiguration").UntrustedGroupDesc({
			bulletPointsEnabled: !0,
			expandedFormattingEnabled: !1
		}), M = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WAWebGroupDescriptionBanner.stylex").styles.more), {
			role: "button",
			onClick: $,
			children: s._(
				/*BTDS*/
				""
			)
		}));
		return d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "GroupDesc",
			escapable: !0,
			requestDismiss: l,
			children: d.jsxs(r("WAWebConversationBanner.react"), {
				ref: n,
				onClose: l,
				children: [d.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) }), d.jsx("div", babelHelpers.extends({ ref: m }, u.props(o("WAWebGroupDescriptionBanner.stylex").styles.body), { children: d.jsx(r("WAWebResizeObserver.react"), {
					onResize: P,
					children: d.jsx(o("WAWebText.react").WAWebTextSmall, {
						as: "span",
						children: d.jsxs("span", babelHelpers.extends({}, u.props(o("WAWebGroupDescriptionBanner.stylex").styles.text, D && o("WAWebGroupDescriptionBanner.stylex").styles.hidden), { children: [d.jsx("span", babelHelpers.extends({}, u.props(o("WAWebGroupDescriptionBanner.stylex").styles.desc), { children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
							ref: y,
							text: L,
							selectable: !0,
							formatters: N,
							multiline: !0
						}) })), k && d.jsxs(d.Fragment, { children: [d.jsx("span", {
							className: "xvijh9v",
							children: "..."
						}), M] })] }))
					})
				}) }))]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return e == null ? void 0 : e.displayedDesc;
	}
	l.default = y;
}), 226);
