__d("WAWebSwStopCommsHandler", [
	"WAComms",
	"WALogger",
	"WAWebSWBusActions",
	"WAWebSwFeature",
	"WAWebWamWorkerOfflineProcessReporter",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function(t) {
		function a() {
			for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s];
			return a = t.call.apply(t, [this].concat(l)) || this, a.matchAction = function(e) {
				return e === r("WAWebSWBusActions").STOP_COMMS;
			}, a.onAction = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.getCurrentStage() != null && (o("WAComms").getComms() && (yield o("WAComms").stopComms(), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Successfully stopped Comms in service worker"])))), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logProcessInterrupted());
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
		}
		return babelHelpers.inheritsLoose(a, t), a;
	})(o("WAWebSwFeature").SWFeature);
	l.default = s;
}), 98);
