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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(9), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.onClose, d = _, p;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(r("WAWebFlexItem.react"), {
			xstyle: m.iconContainer,
			children: c.jsx(r("WDSIconIcInfo.react"), {
				width: 24,
				height: 24,
				xstyle: m.icon
			})
		}), n[3] = p) : p = n[3];
		var f;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), n[4] = f) : f = n[4];
		var g;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [p, c.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: [
					f,
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
		}), n[5] = g) : g = n[5];
		var h;
		return n[6] !== u || n[7] !== i ? (h = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "NewsletterAILabelBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: i,
				xstyle: m.banner,
				onClick: d,
				onClose: u,
				children: g
			})
		}), n[6] = u, n[7] = i, n[8] = h) : h = n[8], h;
	}
	function _() {
		o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_NUX);
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(11), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = ["id", "newsletterMetadata"], t[0] = n) : n = t[0];
		var a = o("useWAWebModelValues").useModelValues(e, n), i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = ["membershipType"], t[1] = i) : i = t[1];
		var l = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, i), s = a.id, u;
		t[2] !== s ? (u = o("WAWebNux").getAILabelBannerNuxKey(s.toString()), t[2] = s, t[3] = u) : u = t[3];
		var c = u, d = r("useWAWebNux")(c), m = d[0], p = d[2], _;
		if (t[4] !== e || t[5] !== l || t[6] !== m) {
			var f;
			_ = o("WAWebChatGetters").getIsNewsletter(e) && m && ((f = l == null ? void 0 : l.iAmAdminOrOwner()) != null ? f : !1) && o("WAWebNewsletterGatingUtils").isChannelSGISenderSelfDisclosureEnabled(), t[4] = e, t[5] = l, t[6] = m, t[7] = _;
		} else _ = t[7];
		var g = _, h;
		return t[8] !== p || t[9] !== g ? (h = [g, p], t[8] = p, t[9] = g, t[10] = h) : h = t[10], h;
	}
	l.NewsletterAILabelBanner = p, l.useNewsletterAILabelBanner = f;
}), 226);
