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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(8), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant(), e[0] = t) : t = e[0];
		var n = t, a;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = a) : a = e[1];
		var i = a, l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: n === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) }), e[2] = l) : l = e[2];
		var d = l, _;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = n === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? u.jsx(r("WDSIconWdsIcAiFilled.react"), {
			colorName: "contentDeemphasized",
			height: 20,
			width: 20
		}) : u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
			iconXstyle: c.secondaryColor,
			height: 20,
			width: 20,
			testid: "double-chevron-in-circle"
		}), e[3] = _) : _ = e[3];
		var f = _, g = p, h;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[4] = h) : h = e[4];
		var y = h, C;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), e[5] = C) : C = e[5];
		var b = C, v;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSIconIcDataUsage.react"), {
			iconXstyle: c.secondaryColor,
			height: 20,
			width: 20
		}), e[6] = v) : v = e[6];
		var S = v, R = m, L;
		return e[7] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: f,
			onClick: g,
			secondaryTitle: d,
			testid: "contact-info-drawer-biz-bot-1p-about",
			title: i
		}), u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: S,
			onClick: R,
			secondaryTitle: b,
			testid: "contact-info-drawer-biz-bot-1p-manage",
			title: y
		})] }), e[7] = L) : L = e[7], L;
	}
	function m() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizBot1pLearnMoreUrl());
	}
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizBot1pLearnMore.react"), {}));
	}
	l.default = d;
}), 226);
