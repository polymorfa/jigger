__d("MAWReliabilityMonitor", ["$InternalEnum"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = n("$InternalEnum").Mirrored([
		"PENDING",
		"OK",
		"ERROR",
		"UNKNOWN"
	]), l = (function() {
		function e() {
			this.$1 = new Map(), this.$2 = new Map(), this.$3 = [];
		}
		var t = e.prototype;
		return t.startMonitoring = function(t, n) {
			var e = new u(t, n, this);
			return this.$1.set(t, e), this.recordReport(e), e;
		}, t.stopMonitoring = function(t) {
			this.$1.delete(t.identifier), this.$2.delete(t.identifier);
		}, t.recordReport = function(t) {
			this.$2.set(t.identifier, babelHelpers.extends({}, t.selfAssessmentFn(), {
				identifier: t.identifier,
				timestamp: Date.now()
			})), this.$4();
		}, t.onAggregatedReportChange = function(t) {
			this.$3.push(t);
		}, t.$4 = function() {
			var e = this.getAggregatedReportEntity();
			this.$3.forEach(function(t) {
				return t(e);
			});
		}, t.getAggregatedReportEntity = function() {
			return new s(this.$2);
		}, t.triggerAllSelfAssessments = function() {
			var e = this;
			this.$1.forEach(function(t) {
				e.recordReport(t);
			});
		}, t.getAggregatedReport = function() {
			return this.triggerAllSelfAssessments(), this.$2;
		}, t.TEST_ONLY_reset = function() {
			this.$1.clear(), this.$2.clear(), this.$3 = [];
		}, e;
	})(), s = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.toAckPayloadFormat = function() {
			return Array.from(this.$1.values());
		}, t.toString = function() {
			var e = Object.fromEntries(this.$1);
			return JSON.stringify(e);
		}, e;
	})(), u = (function() {
		function e(e, t, n) {
			this.identifier = e, this.selfAssessmentFn = t, this.$1 = n;
		}
		var t = e.prototype;
		return t.stopMonitoring = function() {
			this.$1.stopMonitoring(this);
		}, t.updateState = function() {
			this.$1.recordReport(this);
		}, e;
	})(), c = new l();
	i.HealthReportState = e, i.ReportableModule = u, i.MAWReliabilityMonitorSingleton = c;
}), 66);
