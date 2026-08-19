__d("WAWebContactInfoBizBot1pSection.react", [
	"fbt",
	"WAWebBizBot1pLearnMore.react",
	"WAWebBizBotConsumerContentVariant",
	"WAWebChatInfoDrawerRow.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSIconIcDataUsage.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcMetaDataDoubleChevron.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		var e = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant(), t = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), n = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: e === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) }), a = e === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? u.jsx(r("WDSIconWdsIcAiFilled.react"), {
			colorName: "contentDeemphasized",
			height: 20,
			width: 20
		}) : u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
			iconXstyle: c.secondaryColor,
			height: 20,
			width: 20,
			testid: "double-chevron-in-circle"
		}), i = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizBot1pLearnMore.react"), {}));
		}, l = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), d = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), m = u.jsx(r("WDSIconIcDataUsage.react"), {
			iconXstyle: c.secondaryColor,
			height: 20,
			width: 20
		}), p = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizBot1pLearnMoreUrl());
		};
		return u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: a,
			onClick: i,
			secondaryTitle: n,
			testid: "contact-info-drawer-biz-bot-1p-about",
			title: t
		}), u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: m,
			onClick: p,
			secondaryTitle: d,
			testid: "contact-info-drawer-biz-bot-1p-manage",
			title: l
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
