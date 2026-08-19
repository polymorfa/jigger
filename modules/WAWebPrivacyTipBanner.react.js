__d("WAWebPrivacyTipBanner.react", [
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCellV2.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebIcLightbulbIcon.react",
	"WAWebSettingsFlowLoadable",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WAWebXAltIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { tealColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function c(e) {
		var t = e.actionText, n = e.actionTextColor, a = n === void 0 ? "teal" : n, i = e.containerXStyle, l = e.image, c = e.imageXStyle, d = e.onAction, m = e.onDismiss, p = e.settingStep, _ = e.testId, f = _ === void 0 ? "privacy-tip-banner-action-link" : _, g = e.text, h = e.title, y = s.jsx(o("WAWebFlex.react").FlexItem, {
			style: {
				width: 24,
				height: 24
			},
			children: l != null ? l : s.jsx(o("WAWebIcLightbulbIcon.react").IcLightbulbIcon, { iconXstyle: u.tealColor })
		}), C = function() {
			p != null && o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "settings",
				initialStep: p
			} : s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
				initialStep: p,
				onEnd: o("WAWebDrawerManager").closeDrawerLeft
			})), d == null || d();
		}, b = s.jsxs(o("WAWebText.react").WAWebTextMuted, {
			textWrap: "wrap",
			weight: "medium",
			children: [g, t != null && s.jsxs(s.Fragment, { children: ["\xA0", s.jsx(o("WAWebText.react").WAWebClickableText, {
				color: a,
				testid: f,
				children: t
			})] })]
		}), v = h != null && h !== "", S = v ? s.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "primary",
			textWrap: "wrap",
			weight: "bold",
			children: h
		}) : b, R = v ? b : null, L;
		if (m != null) {
			var E = function(t) {
				t.stopPropagation(), m();
			};
			L = s.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": r("WAWebFbtCommon")("Close"),
				onClick: E,
				children: s.jsx(o("WAWebXAltIcon.react").XAltIcon, {})
			});
		}
		return s.jsx(r("WAWebCellV2.react"), {
			active: !0,
			containerXStyle: i,
			detailLeft: s.jsx(o("WAWebFlex.react").FlexRow, {
				paddingEnd: 4,
				xstyle: c,
				children: y
			}),
			detailRight: L,
			idle: !0,
			material: !0,
			onClick: C,
			primary: S,
			secondary: R,
			size: "small"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
