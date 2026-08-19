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
	"react-compiler-runtime",
	"useWAWebShouldShowHatchDisconnectButton"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.contact, a = r("useWAWebShouldShowHatchDisconnectButton")();
		if (!a) return null;
		var i;
		t[0] !== n ? (i = u.jsx(o("WAWebName.react").Name, {
			contact: n,
			skipCheckMark: !0
		}), t[0] = n, t[1] = i) : i = t[1];
		var l = i, c = d, m;
		t[2] !== l ? (m = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					"",
					[s._param("contact_name", l)]
				),
				onOK: c,
				onCancel: o("WAWebModalManager").closeModalManager,
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "solid-warning",
				children: s._(
					/*BTDS*/
					"",
					[s._param("contact_name", l)]
				)
			}));
		}, t[2] = l, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSIconIcBlock.react"), {}), t[4] = _) : _ = t[4];
		var f;
		t[5] !== l ? (f = s._(
			/*BTDS*/
			"",
			[s._param("contact_name", l)]
		), t[5] = l, t[6] = f) : f = t[6];
		var g;
		return t[7] !== p || t[8] !== f ? (g = u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-hatch-disconnect",
			danger: !0,
			icon: _,
			onClick: p,
			children: f
		}) }), t[7] = p, t[8] = f, t[9] = g) : g = t[9], g;
	}
	async function d() {
		o("WAWebHatchLogging").logHatchTapUnlinkButton({ botEntryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE });
		var e = await o("WAWebUnlinkHatchAction").unlinkHatch();
		e && (r("WAWebHatchLinkedStatusManager").markUnlinked(), o("WAWebHatchLogging").logHatchUnlinkSuccess({ botEntryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE })), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
	}
	l.default = c;
}), 226);
