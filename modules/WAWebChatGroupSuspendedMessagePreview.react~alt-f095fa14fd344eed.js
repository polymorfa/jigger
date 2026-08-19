__d("WAWebChatGroupSuspendedMessagePreview.react", [
	"fbt",
	"WAWebGroupGatingUtils",
	"WAWebGroupSuspendCommonStrings",
	"WAWebSettingsBlockedIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginTop3: {
			marginTop: "x7r5mf7",
			$$css: !0
		},
		marginInlineEnd3: {
			marginInlineEnd: "x1p8j9ns",
			$$css: !0
		}
	};
	function d() {
		var e = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled() ? o("WAWebGroupSuspendCommonStrings").groupSuspendedTitle() : s._(
			/*BTDS*/
			""
		);
		return u.jsxs("span", {
			title: e,
			className: "x1k4tb9n",
			children: [u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
				width: 14,
				height: 14,
				displayInline: !0,
				directional: !0,
				xstyle: [c.marginTop3, c.marginInlineEnd3]
			}), e]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
