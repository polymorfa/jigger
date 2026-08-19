__d("useWAWebHandleAfterReadingClick", [
	"WAWebAfterReadDurationPopup.react",
	"WAWebAfterReadNux.react",
	"WAWebAfterReadNuxLogging",
	"WAWebAfterReadUtils",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebWamEnumAfterReadScreenEntryPointType",
	"react",
	"react-compiler-runtime",
	"useWAWebNux",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e, t) {
		var n = o("react-compiler-runtime").c(4), a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), i = a[0], l;
		return n[0] !== e || n[1] !== t || n[2] !== i ? (l = function() {
			var n = function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebAfterReadDurationPopup.react"), {
					initialDuration: o("WAWebAfterReadUtils").isAfterReadDuration(e) ? e : 0,
					onDurationSelected: t
				}));
			};
			if (i) {
				var a = function() {
					o("WAWebModalManager").ModalManager.off("close_modal", a), n();
				};
				o("WAWebModalManager").ModalManager.on("close_modal", a), o("WAWebAfterReadNuxLogging").logArInterstitialScreenImpression({
					accountAfterReadDuration: o("WAWebAfterReadUtils").isAfterReadDuration(e) ? e : 0,
					afterReadScreenEntryPoint: o("WAWebWamEnumAfterReadScreenEntryPointType").AFTER_READ_SCREEN_ENTRY_POINT_TYPE.DM_TIMER_SCREEN,
					nuxVersion: o("WAWebAfterReadNuxLogging").AR_NUX_VERSION_AFTER_READ
				}), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebAfterReadNux.react"), {}));
			} else n();
		}, n[0] = e, n[1] = t, n[2] = i, n[3] = l) : l = n[3], r("useWAWebStableCallback")(l);
	}
	l.default = u;
}), 98);
