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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebShouldShowHatchDisconnectButton"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contact, a = r("useWAWebShouldShowHatchDisconnectButton")();
		if (!a) return null;
		var i = u.jsx(o("WAWebName.react").Name, {
			contact: t,
			skipCheckMark: !0
		}), l = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebHatchLogging").logHatchTapUnlinkButton({ botEntryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE });
				var e = yield o("WAWebUnlinkHatchAction").unlinkHatch();
				e && (r("WAWebHatchLinkedStatusManager").markUnlinked(), o("WAWebHatchLogging").logHatchUnlinkSuccess({ botEntryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE })), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), c = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					"",
					[s._param("contact_name", i)]
				),
				onOK: l,
				onCancel: o("WAWebModalManager").closeModalManager,
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "solid-warning",
				children: s._(
					/*BTDS*/
					"",
					[s._param("contact_name", i)]
				)
			}));
		};
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-hatch-disconnect",
			danger: !0,
			icon: u.jsx(r("WDSIconIcBlock.react"), {}),
			onClick: c,
			children: s._(
				/*BTDS*/
				"",
				[s._param("contact_name", i)]
			)
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
