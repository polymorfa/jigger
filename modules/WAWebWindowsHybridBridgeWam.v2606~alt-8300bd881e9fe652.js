__d("WAWebWindowsHybridBridgeWam.v2606", [
	"WALogger",
	"WAWebCrashContextUtils",
	"WAWebCrashLogWamEvent",
	"WAWebWam",
	"WAWebWamCodegenUtils",
	"WAWebWamCodegenWamEvent",
	"WAWebWamEnumCrashApplicationState",
	"WAWebWamEnumCrashType"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"4",
		"11",
		"31"
	], s, u, c, d = function(n) {
		var t = this;
		this.$2 = !1, this.initialize = function() {
			var e, n;
			t.$2 || ((e = t.$1) == null || e.addEventListener("eventsSaved", t.handleEvents), (n = t.$1) == null || n.subscribe(null), t.$2 = !0);
		}, this.handleEvents = async function(n) {
			if (!t.$2) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["WindowsHybridBridgeWam: received handleWamEvent while bridge is not initialized"])));
				return;
			}
			var r = JSON.parse(n), a = {
				4: {
					webGlobalName: "osVersion",
					webFieldId: 15,
					type: "string"
				},
				11: {
					webGlobalName: "memClass",
					webFieldId: 655,
					type: "number"
				},
				31: {
					webGlobalName: "numCpu",
					webFieldId: 10317,
					type: "number"
				}
			};
			if (r.length > 0) {
				var i = r[0], l = [], d = [], m = [];
				for (var p of Object.keys(a)) {
					var _ = a[p], f = i[p];
					if (f != null) {
						var g = _.type === "string" ? String(f) : Number(f);
						l.push(o("WAWebWam").Wam.set(o("WAWebWamCodegenUtils").metrics.getGlobal(_.webGlobalName), g)), d.push(_.webGlobalName + "=" + g);
					} else m.push(_.webGlobalName);
				}
				await Promise.all(l), d.length > 0, m.length > 0 && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WindowsHybridBridgeWam: Missing expected global attributes from native: ", ". This may indicate a schema mismatch between native and web WAM implementations."])), m.join(", "));
			}
			var h = [];
			if (Promise.all(r.map(function(t) {
				var n = t[4], r = t[11], a = t[31], i = babelHelpers.objectWithoutPropertiesLoose(t, e);
				if (t.id === o("WAWebCrashLogWamEvent").CrashLogWamEvent.prototype.id) {
					var l = i[6], s = i[23], u = i[3], c = i[24], d = i[2], m = o("WAWebCrashContextUtils").cleanLegacyAppContext(i[32]), p = o("WAWebCrashContextUtils").getCrashEventAppContext(l, d), _ = o("WAWebCrashContextUtils").mergeAppContexts(m, p);
					if (i[32] = _, l === o("WAWebWamEnumCrashType").CRASH_TYPE.DISPATCHER_NOT_RESPONDING && s === o("WAWebWamEnumCrashApplicationState").CRASH_APPLICATION_STATE.FOREGROUND) {
						var f = c != null ? c : "unknown";
						h.push({
							timeout: f,
							crashContext: u
						});
					}
				}
				return new (o("WAWebWamCodegenWamEvent")).RawWamEvent(i).commitAndWaitForFlush(!0);
			})), h.length > 0) {
				var y = h.slice(0, 3).map(function(e) {
					return e.timeout + "s: " + e.crashContext;
				});
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"Native ANR detected: ",
					" events => ",
					""
				])), h.length, y).sendLogs("hybrid-native-anr", { sampling: .01 });
			}
		}, this.$1 = n;
	};
	l.WindowsHybridBridgeWam_v2606 = d;
}), 98);
