__d("WAWebChatInfoExportChatSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebExportChatGatingUtils",
	"WAWebExportChatModalLoadable",
	"WAWebModalManager",
	"WDSIconIcDownload.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat;
		return !o("WAWebExportChatGatingUtils").canExportChat(t) || !o("WAWebExportChatGatingUtils").isExportChatHistorySyncReady() ? null : u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			icon: u.jsx(r("WDSIconIcDownload.react"), {}),
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebExportChatModalLoadable").ExportChatModalLoadable, {
					chat: t,
					onClose: o("WAWebModalManager").closeModalManager
				}));
			},
			testid: "li-export-chat",
			children: s._(
				/*BTDS*/
				""
			)
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
