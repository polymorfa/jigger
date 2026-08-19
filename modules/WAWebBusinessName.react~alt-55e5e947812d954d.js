__d("WAWebBusinessName.react", [
	"fbt",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebBotProfileGetters",
	"WAWebBusinessProfileTypes",
	"WAWebCheckmarkInfoModal.react",
	"WAWebCheckmarkInfoModalLogEvents",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFrontendContactGetters",
	"WAWebLidMigrationUtils",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebSupportChatStrings",
	"WAWebUsernameGatingUtils",
	"WAWebWidFormat",
	"WDSIconWdsIcAiFilled.react",
	"WDSMargins.stylex",
	"WDSText.react",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebOptionalBotProfileValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		subtitle: {
			color: "xyj2c9f",
			fontSize: "x1jchvi3",
			lineHeight: "x1u7k74",
			$$css: !0
		},
		botSubtitleDivider: {
			fontWeight: "x117nqv4",
			lineHeight: "x1u7k74",
			color: "x14ug900",
			$$css: !0
		},
		botIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		title: {
			fontSize: "xlm9qay",
			fontWeight: "x1s688f",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, r, a, i = o("WAWebContactGetters").getId(e), l = null;
		i.isUser() && (l = i.isLid() ? o("WAWebLidMigrationUtils").toPn(i) : o("WAWebLidMigrationUtils").toUserLid(i));
		var s = (t = o("useWAWebContactValues").useOptionalContactValues(i, [o("WAWebFrontendContactGetters").getFormattedUsernameAndType])) != null ? t : [], u = s[0], c = (n = o("useWAWebContactValues").useOptionalContactValues(l, [o("WAWebFrontendContactGetters").getFormattedUsernameAndType])) != null ? n : [], d = c[0], m = o("WAWebFrontendContactGetters").getFormattedUsernameAndType(e);
		if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) return null;
		var p = i.isLid() ? (r = u != null ? u : m) != null ? r : d : (a = d != null ? d : u) != null ? a : m;
		return p == null ? void 0 : p.displayName;
	}
	function p(t) {
		var n = t.businessProfile, a = t.contact, i = o("WAWebBotBaseGating").isBizBot3pEnabled() && n.isBizBot3p, l = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(a.id, [o("WAWebBotProfileGetters").getIsDefault]), u = l[0], p, _, f, g = m(a), h = o("WAWebContactGetters").getIsAiHub(a), y = function() {
			o("WAWebMiscGatingUtils").isBlueEducationEnabled() && (o("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(a), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCheckmarkInfoModal.react"), {})));
		};
		n.customUrl != null && !h && (f = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([d.subtitle, o("WDSMargins.stylex").wdsMargins.marginBottom4]), { children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: n.customUrl,
			direction: "auto",
			titlify: !0,
			breakWord: !0,
			inlineblock: !0
		}) })));
		var C = o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(a), b = o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary(a);
		if (o("WAWebContactGetters").getIsMe(a)) p = c.jsx(o("WAWebName.react").Name, {
			contact: a,
			showMessageYourselfName: !0,
			useVerifiedName: !0,
			breakWord: !0,
			selectable: !0
		}), a.name !== a.verifiedName && (_ = c.jsx(o("WAWebName.react").Name, {
			contact: a,
			selectable: !0
		}));
		else {
			var v = o("WAWebContactGetters").getVerifiedLevel(a), S = o("WAWebFrontendContactGetters").getPhoneNumber(a), R = !r("isStringNullOrEmpty")(a.name) && a.name !== g, L = v === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN && !r("isStringNullOrEmpty")(a.verifiedName) && !R;
			if (p = c.jsx(o("WAWebName.react").Name, {
				contact: a,
				showBusinessCheckmark: C,
				onClick: C ? y : null,
				makeCheckmarkClickable: C,
				checkmarkLarge: !0,
				breakWord: !0,
				selectable: !0,
				useVerifiedName: L
			}), h) _ = c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: o("WAWebBizAiAgentStatusUtils").getAiHubSubtitle()
			});
			else if (o("WAWebContactGetters").getIsIAS(a)) _ = c.jsx("div", {
				className: "xyj2c9f x1jchvi3 x1u7k74",
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: s._(
						/*BTDS*/
						""
					),
					direction: "auto",
					ellipsify: !0,
					titlify: !0,
					breakWord: !0,
					selectable: !0
				})
			});
			else if (o("WAWebContactGetters").getId(a).isBot() || i) {
				var E = o("WAWebFrontendContactGetters").getShowBiz3pBotVerifiedNameAsSecondary(a), k = s._(
					/*BTDS*/
					""
				), I = o("WAWebContactGetters").getId(a).isBot() ? c.jsx(r("WDSIconWdsIcAiFilled.react"), {
					width: 15,
					height: 15,
					xstyle: [
						o("WDSMargins.stylex").wdsMargins.marginTop2,
						o("WDSMargins.stylex").wdsMargins.marginStart2,
						d.botIcon
					]
				}) : null;
				u && (k = o("WAWebBotFrontendUtils").metaAiLlamaVersionTitleFbs(), I = null), _ = c.jsxs("div", {
					className: "xhslqc4 x1jchvi3 x1u7k74 x78zum5 xl56j7k x1sdyfia",
					children: [E && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebName.react").Name, {
						contact: a,
						showBusinessCheckmark: b,
						useVerifiedName: !0,
						breakWord: !0,
						selectable: !0
					}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.botSubtitleDivider, b && o("WDSMargins.stylex").wdsMargins.marginEnd8, !b && o("WDSMargins.stylex").wdsMargins.marginHor8), { children: "·" }))] }), c.jsxs("div", {
						className: "xhslqc4 x1jchvi3 x1u7k74 x78zum5 xl56j7k x1sdyfia",
						children: [k, I]
					})]
				});
			} else o("WAWebContactGetters").getIsCAPISupportAccount(a) ? _ = c.jsx("div", {
				className: "xyj2c9f x1jchvi3 x1u7k74",
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: o("WAWebSupportChatStrings").SupportChatSubtitle(),
					direction: "auto",
					ellipsify: !0,
					titlify: !0,
					breakWord: !0,
					selectable: !0
				})
			}) : R && !r("isStringNullOrEmpty")(a.verifiedName) && a.name !== a.verifiedName && (_ = g != null ? c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: g
			}) : c.jsx(o("WAWebName.react").Name, {
				contact: a,
				showBusinessCheckmark: b,
				onClick: b ? y : null,
				makeCheckmarkClickable: b,
				useVerifiedName: !0,
				breakWord: !0,
				selectable: !0,
				elevatedPushNamesEnabled: !0
			}));
			if (_ == null && !h) if (v === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN && !L) {
				var T, D = (T = R ? g : null) != null ? T : r("isStringNullOrEmpty")(a.verifiedName) ? null : a.verifiedName;
				D != null && (_ = c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: D
				}));
			} else {
				var x = g != null ? g : o("WAWebWidFormat").widToFormattedUser(S != null ? S : o("WAWebContactGetters").getId(a));
				_ = c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: x
				});
			}
		}
		return c.jsxs("div", {
			className: "xzueoph",
			children: [
				c.jsx("div", babelHelpers.extends({ "data-testid": "business-top-card-name-title" }, (e || (e = r("stylex"))).props(d.title, o("WDSMargins.stylex").wdsMargins.marginBottom8), { children: p })),
				_,
				f
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
