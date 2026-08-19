__d("WAWebNotifyForDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNotifyForTypes",
	"WAWebNotifyForUtils",
	"WAWebPrivacyVisibilityOption.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { title: {
		fontSize: "x1jchvi3",
		color: "x1v5yvga",
		lineHeight: "x1fc57z9",
		$$css: !0
	} };
	function p(t) {
		var n = t.chat, a = t.onClose, i = n.id.toString(), l = d(function() {
			return o("WAWebNotifyForUtils").getNotifyForSetting(i);
		}), u = l[0], p = l[1], _ = function() {
			p(o("WAWebNotifyForTypes").NotifyForType.ALL), o("WAWebNotifyForUtils").saveNotifyForSetting(i, o("WAWebNotifyForTypes").NotifyForType.ALL);
		}, f = function() {
			p(o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS), o("WAWebNotifyForUtils").saveNotifyForSetting(i, o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS);
		}, g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), y = null;
		return o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_receiver_web") ? y = s._(
			/*BTDS*/
			""
		) : y = s._(
			/*BTDS*/
			""
		), c.jsxs(r("WAWebDrawer.react"), {
			testid: "notify-for-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "notify-for"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title",
				title: g,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0,
				onBack: a
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
					m.title,
					o("WDSMargins.stylex").wdsMargins.marginVer20,
					o("WDSMargins.stylex").wdsMargins.marginHor0
				]), { children: h })), c.jsxs("div", {
					role: "radiogroup",
					"aria-label": h,
					children: [c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
						text: s._(
							/*BTDS*/
							""
						),
						subText: s._(
							/*BTDS*/
							""
						),
						selected: u === o("WAWebNotifyForTypes").NotifyForType.ALL,
						testid: "notify-for-all",
						onClick: _
					}), c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
						text: s._(
							/*BTDS*/
							""
						),
						subText: y,
						selected: u === o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS,
						testid: "notify-for-highlights",
						onClick: f
					})]
				})]
			}) })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
