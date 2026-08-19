__d("WAWebWindowsWamAppLaunchReporter", [
	"WALogger",
	"WAResolvable",
	"WAWebABProps",
	"WAWebAppLaunchWamEvent",
	"WAWebAppTracker",
	"WAWebBuildConstants",
	"WAWebNoop",
	"WAWebWamBaseAppLaunchReporter",
	"WAWebWamEnumAppLaunchType",
	"WAWebWindowsHybridBridgeCommon"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h = 2e3, y = 262300, C = new (o("WAResolvable")).Resolvable(), b = 0, v = !1;
	function S(e, t) {
		return t > e ? o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.LUKEWARM : o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD;
	}
	async function R(t) {
		var n;
		if (!t) {
			var r = !0;
			if (!v) {
				var a = ++b;
				if (r = await C.promise, a !== b) return;
			}
			if (r) {
				var i = Date.now(), l = (n = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) == null ? void 0 : n.nativeAppStateBridge;
				if (l == null) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["onAppStateChanged: ignoring: bridge is null"])));
					return;
				}
				var c = l.detectNativeClockSkew();
				if (c != null && c > h) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["commitEventAsync: large clock skew: ", ""])), c).sendLogs("native-clock-skew");
					return;
				}
				var d = l.getLastAppRestoreTimeStamp();
				if (d === 0) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["onAppStateChanged: ignoring: appRestoreT not available"])));
					return;
				}
				var m = i - d, p = new (o("WAWebAppLaunchWamEvent")).AppLaunchWamEvent({
					appLaunchTypeT: o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.WARM,
					appLaunchT: i - d
				});
				o("WAWebAppTracker").attachWAMAppContext(p, m), p.commit(), v = !0;
			}
		}
	}
	function L() {
		var e, t = (e = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) == null ? void 0 : e.nativeAppStateBridge;
		if (t == null) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["initializeEvent: ignoring: bridge is null"])));
			return;
		}
		return t.getEvents().on("appStateChanged", R), new (o("WAWebAppLaunchWamEvent")).AppLaunchWamEvent();
	}
	function E(e) {
		k(e).catch(r("WAWebNoop"));
	}
	async function k(e) {
		try {
			var t, n = (t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) == null ? void 0 : t.nativeAppStateBridge;
			if (n == null) {
				o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["commitEventAsync: ignoring: bridge is null"])));
				return;
			}
			var r = Date.now(), a, i, l, s = o("WAWebBuildConstants").getWindowsVersion(), u = s != null && s >= y && o("WAWebABProps").getABPropConfigValue("web_anr_async_native_app_state_bridge_enabled") ? await n.takeAppLaunchSnapshotAsync() : null;
			u != null ? (a = u.appLaunchTimeStamp, i = u.firstAppRestoreTimeStamp, l = u.nativeClockSkew) : (a = n.takeAppLaunchTimeStamp(), i = n.getFirstAppRestoreTimeStamp(), l = n.detectNativeClockSkew());
			var c = n.isMinimizedToTray();
			if (l != null && l > h) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["commitEventAsync: large clock skew: ", ""])), l).sendLogs("native-clock-skew");
				return;
			}
			if (c || a === 0) {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"commitEventAsync: deferring: tray=",
					`,
      appLaunchT=`,
					""
				])), c, a), C.resolve(a !== 0);
				return;
			}
			if (r < i) {
				var b = Date.now() - i;
				e.appLaunchT = b, e.appLaunchTypeT = o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.WARM, o("WAWebAppTracker").attachWAMAppContext(e, b), e.commit(), v = !0, C.resolve(!1);
				return;
			}
			var R = Math.max(a, i), L = r - R;
			if (L > 6e5) {
				var E = function(t) {
					try {
						return new Date(t).toISOString();
					} catch (e) {
						return t.toString();
					}
				}, k = E(a), T = E(i), D = E(R), x = E(r), $ = E(self.performance.timing.fetchStart);
				o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"commitEventAsync: appLaunchT large t=",
					" launch=",
					" restore=",
					""
				])), L, k, T).sendLogs("app_launch_time_is_large"), o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
					"commitEventAsync: appLaunchT large start=",
					" end=",
					" fetch=",
					""
				])), D, x, $).sendLogs("app_launch_time_is_large");
			}
			e.appLaunchT = L, e.appLaunchTypeT = S(a, i), o("WAWebAppTracker").attachWAMAppContext(e, L), I(e), e.commit(), v = !0, C.resolve(!1);
		} catch (e) {
			o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["commitEventAsync: failed: ", ""])), e);
		}
	}
	function I(e) {
		var t, n, r = new URLSearchParams((t = self.location.search) != null ? t : ""), o = (n = r.get("launchContext")) != null ? n : "";
		o !== "" && (e.appContext == null ? e.appContext = o : e.appContext = e.appContext + "+launch:" + o);
	}
	var T = new (o("WAWebWamBaseAppLaunchReporter")).BaseAppLaunchReporter(L, E);
	l.WAWebWindowsWamAppLaunchReporter = T;
}), 98);
