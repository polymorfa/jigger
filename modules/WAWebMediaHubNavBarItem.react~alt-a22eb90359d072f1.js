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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingInlineEnd9: {
		paddingInlineEnd: "xrw5ot4",
		$$css: !0
	} }, d = { icon: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = e.shouldShowText, n = t === void 0 ? !1 : t, a = e.size, i = a === void 0 ? 24 : a, l = function() {
			o("WAWebMediaHubLogger").logMediaHubAction({
				action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
				entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.MAIN_SCREEN
			}), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, {}));
		}, m = s._(
			/*BTDS*/
			""
		), p = r("WDSIconIcFilter.react");
		return n ? u.jsx(r("WAWebIconButton.react"), {
			onClick: l,
			icon: u.jsx(r("WDSIconIcFilter.react"), {
				width: i,
				height: i,
				xstyle: [d.icon, o("WDSPaddings.stylex").wdsPaddings.paddingEnd8]
			}),
			children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop2, c.paddingInlineEnd9],
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : u.jsx(r("WDSMenuBarItem.react"), {
			icon: p,
			title: m,
			testid: "navbar-item-media-hub",
			isActive: !1,
			onClick: l,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
