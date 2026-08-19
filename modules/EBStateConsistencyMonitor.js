__d("EBStateConsistencyMonitor", [
	"EBIsEbEnabled",
	"EBLogger",
	"EBWorkerEBDBApi",
	"MAWEBLSInWorkerSwitch",
	"MAWEBSwitch",
	"MAWODSProxy",
	"QPLFlow",
	"Random",
	"WAOdsEnums",
	"WAShiftTimer",
	"asyncToGeneratorRuntime",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = o("EBLogger").EBLogger().tags(["EBStateConsistencyMonitor"]), S = (function() {
		function t(e) {
			var t = this;
			this.$3 = !1, this.$4 = null, this.$5 = !0, this.$6 = 0, this.$1 = e, this.$2 = new (o("WAShiftTimer")).ShiftTimer(function() {
				t.$7();
			});
		}
		var a = t.prototype;
		return a.start = function() {
			if (this.$3) {
				v.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["EBStateConsistencyMonitor already running"])));
				return;
			}
			this.$3 = !0, v.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Starting EBStateConsistencyMonitor with interval ", "ms"])), this.$1), this.$8(), this.$9();
		}, a.stop = function() {
			if (!this.$3) {
				v.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["EBStateConsistencyMonitor not running"])));
				return;
			}
			this.$3 = !1, this.$2.cancel(), v.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Stopped EBStateConsistencyMonitor"])));
		}, a.$7 = function() {
			this.$3 && (this.$8(), this.$9());
		}, a.$9 = function() {
			this.$3 && this.$2.onOrBefore(this.$1);
		}, a.$8 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield this.$10();
					this.$11(e);
				} catch (e) {
					e instanceof Error ? v.catching(e).MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to check EB state consistency"]))) : v.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to check EB state consistency: ", ""])), String(e));
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.$10 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = Date.now(), t = r("MAWEBLSInWorkerSwitch").isEnabled(), n = yield o("EBIsEbEnabled").isEBEnabled(), a = null;
				try {
					a = yield o("EBWorkerEBDBApi").isEBEnabledEBDB();
				} catch (e) {
					e instanceof Error ? v.catching(e).MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Failed to read EBDB client state directly"]))) : v.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to read EBDB client state directly: ", ""])), String(e));
				}
				return {
					ebdbDirectState: a,
					isEBEnabledState: n,
					timestamp: e,
					workerSwitchState: t
				};
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.$11 = function(t) {
			var e = t.ebdbDirectState, n = t.isEBEnabledState, a = t.timestamp, i = t.workerSwitchState, l = this.$5, s = this.$6, u = this.$12(t), c = u.length > 0, d = l || c;
			if (l || this.$6++, !d) {
				v.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["No state changes detected, skipping ODS metrics"])));
				return;
			}
			v.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
				"EB State Snapshot: workerSwitch=",
				", isEBEnabled=",
				", ebdbDirect=",
				" at ",
				" shouldLogMetrics=",
				""
			])), String(i), String(n), e != null ? String(e) : "null", a, d), !l && u.length > 0 && (u.forEach(function(e) {
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.source_change." + e
				}), v.DEBUG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["EB Source Change: ", " state changed"])), e);
			}), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "eb_consistency.sources_changed.count_" + u.length
			})), this.$5 = !1, this.$4 = t;
			var m = l ? ".first_time" : ".on_change", p = i === n;
			if (o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "eb_consistency.worker_switch_vs_lightspeed." + (p ? "consistent" : "inconsistent") + m
			}), l && o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "eb_consistency.worker_switch_vs_lightspeed." + (p ? "consistent" : "inconsistent") + ".first_time_only"
			}), p || v.WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"EB State Inconsistency: WorkerSwitch(",
				") vs Lightspeed(",
				")"
			])), String(i), String(n)), e != null) {
				var _ = i === e, S = n === e;
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.worker_switch_vs_ebdb." + (_ ? "consistent" : "inconsistent") + m
				}), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.lightspeed_vs_ebdb." + (S ? "consistent" : "inconsistent") + m
				}), l && (o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.worker_switch_vs_ebdb." + (_ ? "consistent" : "inconsistent") + ".first_time_only"
				}), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.lightspeed_vs_ebdb." + (S ? "consistent" : "inconsistent") + ".first_time_only"
				})), _ || v.WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
					"EB State Inconsistency: WorkerSwitch(",
					") vs EBDB(",
					")"
				])), String(i), String(e)), S || v.WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
					"EB State Inconsistency: Lightspeed(",
					") vs EBDB(",
					")"
				])), String(n), String(e));
				var R = p && _ && S;
				if (o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.all_three_sources." + (R ? "consistent" : "inconsistent") + m
				}), l && o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_consistency.all_three_sources." + (R ? "consistent" : "inconsistent") + ".first_time_only"
				}), I(l)) {
					var L = o("QPLFlow").startQPLFlow(r("qpl")._(521478131, "1562"), { annotations: {
						bool: {
							isFirstCheck: l,
							lightspeedVsEbdb: S,
							main_thread_state: r("MAWEBSwitch").isEnabled(),
							switchVsEbdb: _,
							switchVsLightspeed: p,
							worker_state: n,
							worker_switch_state: i
						},
						int: { timesChecked: s },
						string: { source: "consistency_monitor" }
					} });
					R ? L.endSuccess() : L.endFail("inconsistent_state");
				}
			} else o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "eb_consistency.ebdb_direct_unavailable" + m
			}), l && o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "eb_consistency.ebdb_direct_unavailable.first_time_only"
			});
		}, a.$12 = function(t) {
			if (this.$4 == null) return [];
			var e = this.$4, n = [];
			return e.workerSwitchState !== t.workerSwitchState && n.push("worker_switch"), e.isEBEnabledState !== t.isEBEnabledState && n.push("lightspeed"), e.ebdbDirectState !== t.ebdbDirectState && n.push("ebdb_direct"), n;
		}, a.isRunning = function() {
			return this.$3;
		}, t;
	})(), R = null;
	function L() {
		if (R == null) {
			var e = r("justknobx")._("3206");
			R = new S(e);
		}
		return R;
	}
	function E() {
		var e = L();
		e.start();
	}
	function k() {
		var e = L();
		e.stop();
	}
	function I(e) {
		var t = e ? r("justknobx")._("3455") : r("justknobx")._("3679");
		return o("Random").random() < t / 100;
	}
	l.getEBStateConsistencyMonitor = L, l.startEBStateConsistencyMonitoring = E, l.stopEBStateConsistencyMonitoring = k;
}), 98);
