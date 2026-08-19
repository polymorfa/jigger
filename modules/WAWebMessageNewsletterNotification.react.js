__d("WAWebMessageNewsletterNotification.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterStrings",
	"WAWebEmojiText.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebNewsletterCollection",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMessageAdminContextCard.react",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterPhoneNumberPrivacyNux.react",
	"WAWebNewsletterPublicChannelPrivacyNux.react",
	"WAWebNewsletterSystemMessageIcon.react",
	"WAWebStateUtils",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginTop3: {
		marginTop: "x7r5mf7",
		$$css: !0
	} }, m = {
		linkColor: {
			color: "x1bvqhpb",
			$$css: !0
		},
		channelsIcon: {
			display: "x1rg5ohu",
			verticalAlign: "x16dsc37",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.subtype, n = e.templateParams;
		switch (t) {
			case "newsletter_created": {
				var r = n[0], a = n[1];
				return a === "owner" ? o("WAWebCommonNewsletterStrings").getYouCreatedChannelWithNameText(String(r)) : s._(
					/*BTDS*/
					"",
					[s._param("channel_name", r)]
				);
			}
			case "newsletter_privacy": {
				var i = n[0];
				return o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(i == null ? void 0 : i.toString()) ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
			}
			case "newsletter_deleted": {
				var l = n[0];
				return s._(
					/*BTDS*/
					"",
					[s._param("newsletter_name", l)]
				);
			}
		}
	}
	function _(e) {
		var t = e.chat, n = e.subtype, a = e.templateParams;
		switch (n) {
			case "newsletter_privacy": {
				var i = a[0], l = o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(i == null ? void 0 : i.toString()) ? c.jsx(r("WAWebNewsletterPublicChannelPrivacyNux.react"), {
					chat: t,
					userRole: o("WAWebCommonNewsletterEnums").NewsletterMembershipType.cast(i == null ? void 0 : i.toString())
				}) : c.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {});
				return function() {
					o("WAWebModalManager").ModalManager.open(l);
				};
			}
			default: return null;
		}
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(13), a = t.msg, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WAWebMsgGetters").getSubtype, o("WAWebMsgGetters").getTemplateParams], n[0] = i) : i = n[0];
		var l = o("useWAWebMsgValues").useMsgValues(a.id, i), s = l[0], u = l[1], f, g;
		if (n[1] !== a.id.remote || n[2] !== s || n[3] !== u) {
			var h, y = r("WAWebNewsletterCollection").get(a.id.remote), C = _({
				subtype: s,
				templateParams: u,
				chat: y
			}), b;
			n[6] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				m.channelsIcon,
				d.marginTop3,
				o("WDSMargins.stylex").wdsMargins.marginEnd4
			]), { children: c.jsx(o("WAWebNewsletterSystemMessageIcon.react").NewsletterSystemMessageIcon, {
				width: 14,
				height: 14
			}) })), n[6] = b) : b = n[6];
			var v = b, S;
			n[7] !== s || n[8] !== u ? (S = c.jsx("span", { children: s === "newsletter_privacy" ? c.jsxs(c.Fragment, { children: [v, c.jsx(o("WAWebEmojiText.react").EmojiText, {
				breakWord: !0,
				text: p({
					subtype: s,
					templateParams: u
				})
			})] }) : c.jsx(o("WAWebEmojiText.react").EmojiText, {
				breakWord: !0,
				inlineblock: !0,
				text: p({
					subtype: s,
					templateParams: u
				})
			}) }), n[7] = s, n[8] = u, n[9] = S) : S = n[9];
			var R = S;
			f = C != null ? c.jsx(r("WAWebClickableLink.react"), {
				onClick: C,
				xstyle: m.linkColor,
				children: R
			}) : R, g = s === "newsletter_admin_context_card" && y != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminContextCardEnabled((h = o("WAWebStateUtils").unproxy(y).newsletterMetadata) == null ? void 0 : h.membershipType) ? c.jsx(r("WAWebNewsletterMessageAdminContextCard.react"), { chat: y }) : null, n[1] = a.id.remote, n[2] = s, n[3] = u, n[4] = f, n[5] = g;
		} else f = n[4], g = n[5];
		var L = g, E = s ? "subtype-" + s : null, k = L != null ? L : f, I;
		return n[10] !== E || n[11] !== k ? (I = c.jsx("div", {
			"data-testid": E,
			children: k
		}), n[10] = E, n[11] = k, n[12] = I) : I = n[12], I;
	}
	l.default = f;
}), 226);
