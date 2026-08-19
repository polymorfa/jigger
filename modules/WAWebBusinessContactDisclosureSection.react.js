__d("WAWebBusinessContactDisclosureSection.react", [
	"fbt",
	"WAWebChevronIcon.react",
	"WAWebCommonCTWAConsumerTransparency",
	"WAWebConsumerTransparencyModalDialog.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebSingleChevronInCircleIcon.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, d = {
		businessAccount: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		iconColour: {
			color: "xhslqc4",
			$$css: !0
		},
		iconNewColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(4), n = e.chat;
		if (!o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(n) || o("WAWebCommonCTWAConsumerTransparency").shouldShowROWConsumerDisclosure()) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
			height: 24,
			width: 24,
			xstyle: [d.iconNewColor, o("WDSMargins.stylex").wdsMargins.marginEnd20]
		}), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = [d.businessAccount, c.marginTop10], t[1] = l) : l = t[1];
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			height: 21,
			xstyle: d.iconColour
		}), t[2] = m) : m = t[2];
		var p;
		return t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WAWebDrawerSection.react"), {
			xstyle: l,
			children: u.jsx(r("WAWebDrawerBlock.react"), {
				testid: "about-business-chat",
				onClick: o("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog,
				side: m,
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [i, s._(
						/*BTDS*/
						""
					)]
				})
			})
		}), t[3] = p) : p = t[3], p;
	}
	l.default = m;
}), 226);
