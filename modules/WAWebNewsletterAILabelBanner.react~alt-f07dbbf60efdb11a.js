__d("WAWebNewsletterAILabelBanner.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebConversationBanner.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebNewsletterAiContentInfoModalOpener",
	"WAWebNewsletterAiContentInfoModalTypes",
	"WAWebNewsletterGatingUtils",
	"WAWebNux",
	"WAWebUimUie.react",
	"WDSIconIcInfo.react",
	"WDSText.react",
	"react",
	"useWAWebModelValues",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useCallback, m = {
		banner: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainer: {
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onClose, l = d(function() {
			o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_NUX);
		}, []);
		return c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "NewsletterAILabelBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: n,
				xstyle: m.banner,
				onClick: l,
				onClose: i,
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [c.jsx(r("WAWebFlexItem.react"), {
						xstyle: m.iconContainer,
						children: c.jsx(r("WDSIconIcInfo.react"), {
							width: 24,
							height: 24,
							xstyle: m.icon
						})
					}), c.jsxs(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: [
							s._(
								/*BTDS*/
								""
							),
							"\xA0",
							c.jsx(r("WDSText.react"), {
								type: "Body2Emphasized",
								colorName: "contentActionEmphasized",
								testid: "ai-label-banner-see-details",
								children: s._(
									/*BTDS*/
									""
								)
							})
						]
					})]
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n = o("useWAWebModelValues").useModelValues(e, ["id", "newsletterMetadata"]), a = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, ["membershipType"]), i = n.id, l = o("WAWebNux").getAILabelBannerNuxKey(i.toString()), s = r("useWAWebNux")(l), u = s[0], c = s[2], d = o("WAWebChatGetters").getIsNewsletter(e) && u && ((t = a == null ? void 0 : a.iAmAdminOrOwner()) != null ? t : !1) && o("WAWebNewsletterGatingUtils").isChannelSGISenderSelfDisclosureEnabled();
		return [d, c];
	}
	l.NewsletterAILabelBanner = p, l.useNewsletterAILabelBanner = _;
}), 226);
