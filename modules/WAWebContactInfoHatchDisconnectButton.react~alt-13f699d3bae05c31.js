__d("WAWebContactInfoHatchDisconnectButton.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebDrawerManager",
	"WAWebHatchLinkedStatusManager",
	"WAWebHatchLogging",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebUnlinkHatchAction",
	"WAWebWamEnumBotEntryPointType",
	"WDSIconIcBlock.react",
	"react",
	"useWAWebShouldShowHatchDisconnectButton"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contact, n = r("useWAWebShouldShowHatchDisconnectButton")();
		if (!n) return null;
		var a = u.jsx(o("WAWebName.react").Name, {
			contact: t,
			skipCheckMark: !0
		}), i = async function() {
			o("WAWebHatchLogging").logHatchTapUnlinkButton({ botEntryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE });
			var e = await o("WAWebUnlinkHatchAction").unlinkHatch();
			e && (r("WAWebHatchLinkedStatusManager").markUnlinked(), o("WAWebHatchLogging").logHatchUnlinkSuccess({ botEntryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE })), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, l = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					"",
					[s._param("contact_name", a)]
				),
				onOK: i,
				onCancel: o("WAWebModalManager").closeModalManager,
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "solid-warning",
				children: s._(
					/*BTDS*/
					"",
					[s._param("contact_name", a)]
				)
			}));
		};
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-hatch-disconnect",
			danger: !0,
			icon: u.jsx(r("WDSIconIcBlock.react"), {}),
			onClick: l,
			children: s._(
				/*BTDS*/
				"",
				[s._param("contact_name", a)]
			)
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
