__d("WAWebChatInfoExportChatSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebExportChatGatingUtils",
	"WAWebExportChatModalLoadable",
	"WAWebModalManager",
	"WDSIconIcDownload.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.chat;
		if (!o("WAWebExportChatGatingUtils").canExportChat(n) || !o("WAWebExportChatGatingUtils").isExportChatHistorySyncReady()) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSIconIcDownload.react"), {}), t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebExportChatModalLoadable").ExportChatModalLoadable, {
				chat: n,
				onClose: o("WAWebModalManager").closeModalManager
			}));
		}, t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[3] = l) : l = t[3];
		var c;
		return t[4] !== i ? (c = u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			icon: a,
			onClick: i,
			testid: "li-export-chat",
			children: l
		}) }), t[4] = i, t[5] = c) : c = t[5], c;
	}
	l.default = c;
}), 226);
