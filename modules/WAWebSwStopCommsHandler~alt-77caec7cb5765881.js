__d("WAWebSwStopCommsHandler", [
	"WAComms",
	"WALogger",
	"WAWebSWBusActions",
	"WAWebSwFeature",
	"WAWebWamWorkerOfflineProcessReporter"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function(t) {
		function n() {
			for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
			return n = t.call.apply(t, [this].concat(i)) || this, n.matchAction = function(e) {
				return e === r("WAWebSWBusActions").STOP_COMMS;
			}, n.onAction = async function(t) {
				o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.getCurrentStage() != null && (o("WAComms").getComms() && (await o("WAComms").stopComms(), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Successfully stopped Comms in service worker"])))), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logProcessInterrupted());
			}, babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
		}
		return babelHelpers.inheritsLoose(n, t), n;
	})(o("WAWebSwFeature").SWFeature);
	l.default = s;
}), 98);
