__d("WAWebMediaHubNavBarItem.react", [
	"fbt",
	"WAWebIconButton.react",
	"WAWebMediaHubLogger",
	"WAWebMediaHubModalLoadable",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWamEnumActionCode",
	"WAWebWamEnumEntryPointType",
	"WDSIconIcFilter.react",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingInlineEnd9: {
		paddingInlineEnd: "xrw5ot4",
		$$css: !0
	} }, d = { icon: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.shouldShowText, a = e.size, i = n === void 0 ? !1 : n, l = a === void 0 ? 24 : a, m = p, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[0] = _) : _ = t[0];
		var f = _;
		if (!i) {
			var g;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WDSMenuBarItem.react"), {
				icon: r("WDSIconIcFilter.react"),
				title: f,
				testid: "navbar-item-media-hub",
				isActive: !1,
				onClick: m,
				delayTooltipMs: 0,
				tabOrder: -1,
				tooltipPosition: "end"
			}), t[1] = g) : g = t[1], g;
		}
		var h;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (h = [d.icon, o("WDSPaddings.stylex").wdsPaddings.paddingEnd8], t[2] = h) : h = t[2];
		var y;
		t[3] !== l ? (y = u.jsx(r("WDSIconIcFilter.react"), {
			width: l,
			height: l,
			xstyle: h
		}), t[3] = l, t[4] = y) : y = t[4];
		var C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop2, c.paddingInlineEnd9],
			children: s._(
				/*BTDS*/
				""
			)
		}), t[5] = C) : C = t[5];
		var b;
		return t[6] !== y ? (b = u.jsx(r("WAWebIconButton.react"), {
			onClick: m,
			icon: y,
			children: C
		}), t[6] = y, t[7] = b) : b = t[7], b;
	}
	function p() {
		o("WAWebMediaHubLogger").logMediaHubAction({
			action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
			entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.MAIN_SCREEN
		}), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, {}));
	}
	l.default = m;
}), 226);
