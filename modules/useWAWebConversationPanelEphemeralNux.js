__d("useWAWebConversationPanelEphemeralNux", [
	"WAWebAfterReadNux.react",
	"WAWebAfterReadNuxLogging",
	"WAWebAfterReadUtils",
	"WAWebChatEphemerality",
	"WAWebEphemeralAfterReadKicNux.react",
	"WAWebEphemeralKicNux.react",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebWamEnumAfterReadScreenEntryPointType",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), n = t[0], a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), i = a[0];
		u(function() {
			var t = o("WAWebChatEphemerality").getAfterReadDurationForChat(e);
			if (n && o("WAWebChatEphemerality").isEphemeralSettingOn(e)) {
				t != null ? (o("WAWebAfterReadNuxLogging").logArInterstitialScreenImpression({
					accountAfterReadDuration: t,
					afterReadScreenEntryPoint: o("WAWebWamEnumAfterReadScreenEntryPointType").AFTER_READ_SCREEN_ENTRY_POINT_TYPE.CHAT_ENTRY,
					nuxVersion: o("WAWebAfterReadNuxLogging").AR_NUX_VERSION_AFTER_READ_EPHEMERAL
				}), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebEphemeralAfterReadKicNux.react"), { duration: t }))) : o("WAWebAfterReadUtils").isAfterReadOptionAvailable() && o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebEphemeralKicNux.react"), {
					chat: e,
					fromMe: !1
				}));
				return;
			}
			i && t != null && (o("WAWebAfterReadNuxLogging").logArInterstitialScreenImpression({
				accountAfterReadDuration: t,
				afterReadScreenEntryPoint: o("WAWebWamEnumAfterReadScreenEntryPointType").AFTER_READ_SCREEN_ENTRY_POINT_TYPE.CHAT_ENTRY,
				nuxVersion: o("WAWebAfterReadNuxLogging").AR_NUX_VERSION_AFTER_READ
			}), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebAfterReadNux.react"), {})));
		}, []);
	}
	l.default = c;
}), 98);
