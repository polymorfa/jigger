__d("WAWebMentionAllNuxModal.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = e.chat, i = r("useWAWebFocusOnMount")(), l = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: a,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.Notifications
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: a,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.Notifications
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, c = o("WAWebABProps").getABPropConfigValue("admin_only_mention_everyone_group_size"), d = (t = (n = a.groupMetadata) == null || (n = n.participants) == null ? void 0 : n.length) != null ? t : 0, m = d >= c;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "mention-all-nux"
			},
			ref: i,
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Close"),
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			testid: "mention-all-nux-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "start",
				alignSelf: "stretch",
				justify: "start",
				paddingBottom: 8,
				children: u.jsx(r("WDSText.react"), {
					type: "Headline1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: m ? s._(
					/*BTDS*/
					"",
					[s._param("notification_settings_link", u.jsx(r("WDSTextualLink.react"), {
						onClick: l,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("notification_settings_link", u.jsx(r("WDSTextualLink.react"), {
						onClick: l,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}) })] })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
