__d("MessengerInfraQplReportInWorker", [
	"MessengerInfraQplReport",
	"MessengerInfraReport",
	"QuickPerformanceLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function() {
		if (o("MessengerInfraReport").isEPD()) return function() {};
		var t = (e || (e = r("QuickPerformanceLogger"))).addListener({
			onAnnotation: function(t, n, r, a, i) {
				o("MessengerInfraQplReport").onAnnotationHandler(t, n, r, a, i);
			},
			onMarkerEnd: function(t, n, r) {
				o("MessengerInfraQplReport").onMarkerEndHandler(t, n, r);
			},
			onMarkerPoint: function(t, n, r, a) {
				o("MessengerInfraQplReport").onMarkerPointHandler(t, n, r, a);
			},
			onMarkerStart: function(t, n) {
				o("MessengerInfraQplReport").onMarkerStartHandler(t, n);
			}
		});
		return function() {
			t.dispose();
		};
	};
	l.initializeWorkerLogger = s;
}), 98);
