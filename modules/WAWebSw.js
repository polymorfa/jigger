__d("WAWebSw", [
	"WALogger",
	"WAWebBuildConstants",
	"WAWebSwBase",
	"WAWebSwCacheHelper",
	"WAWebSwCallPopoutHandler",
	"WAWebSwNotificationClickHandler",
	"WAWebSwObjectStores",
	"WAWebSwPeriodicSyncHandler",
	"WAWebSwPushHandler",
	"WAWebSwStickerHandler",
	"WAWebSwStopCommsHandler",
	"WAWebSwVideoStreamingHandler"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s() {
		var t = [
			new (r("WAWebSwNotificationClickHandler"))(),
			new (r("WAWebSwCallPopoutHandler"))(),
			new (r("WAWebSwVideoStreamingHandler"))(),
			new (r("WAWebSwStickerHandler"))(new (o("WAWebSwCacheHelper")).CacheHelper("wa-stickers"), r("WAWebSwObjectStores").stickers),
			new (r("WAWebSwStopCommsHandler"))(),
			new (r("WAWebSwPeriodicSyncHandler"))(),
			new (r("WAWebSwPushHandler"))()
		];
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw] version: ", ""])), o("WAWebBuildConstants").VERSION_STR), o("WAWebSwBase").addSWBaseHandlers(t);
	}
	l.initHandlers = s;
}), 98);
