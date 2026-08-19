__d("WAWebDebugLogging", [
	"WALogger",
	"WATimeUtils",
	"WAWebChatThreadLogging",
	"WAWebChatThreadLoggingUtils",
	"WAWebCrashlog",
	"WAWebDebugABProps",
	"WAWebLocalStorage",
	"WAWebLoggerDev",
	"WAWebLoggerImpl",
	"WAWebTasksDailyStatsTask",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebTimeSpentLoggingSession",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsStore",
	"WAWebWamGlobals",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m() {
		return o("WAWebCrashlog").upload({
			reason: o("WAWebCrashlog").MANUAL_UPLOAD,
			isHighPri: !0,
			immediate: !0
		});
	}
	m.doc = "Upload Crashlogs with reason: " + o("WAWebCrashlog").MANUAL_UPLOAD + ", ignores sampling";
	function p(e) {
		return e === void 0 && (e = "testing"), o("WAWebCrashlog").upload({ reason: e });
	}
	p.doc = "Upload Crashlogs with reason: testing, or supply a reason. Dev env blocks all uploads but: testing";
	function _() {
		o("WAWebTasksDailyStatsTask").logDailyStats();
	}
	_.doc = "log wam daily stats";
	function f() {
		return r("nullthrows")(o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug());
	}
	f.doc = "thread logging internal API";
	async function g() {
		var t = o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug();
		if (t == null) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[uploadThreadLoggingEventsNow] CTL not initialized"])));
			return;
		}
		var n = await t.metadataStore.getOffset();
		if (n == null) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["uploadThreadLoggingEventsNow: thread logging offset unset"])));
			return;
		}
		var r = o("WAWebChatThreadLoggingUtils").computeStartTs(n, o("WATimeUtils").unixTime()), a = await t.metadataStore.getLastUploadedStartTs();
		await o("WAWebChatThreadLogging").uploadChatThreadLoggingEvents({ lastStartTs: r }), await t.metadataStore.setLastUploadedStartTs(a), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[uploadThreadLoggingEventsNow] flushed CTL->WAM startTs=", ""])), r);
	}
	g.doc = "Flush all pending Chat Thread Logging (CTL v2) events from IndexedDB to WAM now, including the current day bucket. Use to verify thread-interaction WAM events (e.g. After Read fields) in Scuba without waiting for the daily upload timer. Purges uploaded rows and restores the upload watermark so logging continues.", g.paramsToExecute = [];
	function h(e) {
		for (var t = window.performance.now(), n = 0; n < e; n++) o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["logging test message from WAWebDebugLogging"])));
		"" + (window.performance.now() - t).toString();
	}
	h.doc = "test logging perf";
	function y() {
		var e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug) === !0;
		return e ? (r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug, !1), !1) : (r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug, !0), !0);
	}
	y.doc = "toggle page load QPL mirrored performance markers";
	function C() {
		return o("WAWebWamGlobals").Global;
	}
	C.doc = "Get wam global fields";
	function b(e) {
		r("WAWebDebugABProps").overrideABProp("wa_web_console_log_level", e);
	}
	b.doc = "Set console log level. 1: All logs, 2: Log, 3: Warn, 4: Error";
	function v() {
		o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["some log error"]))).sendLogs("some_error", {
			sampling: 1,
			separateEmployeeLog: !1,
			employeeSampling: 1
		});
	}
	v.doc = "Send logs without employee separation (does not add -employee suffix for employees)", v.paramsToExecute = [];
	function S(e) {
		r("WAWebLocalStorage") != null && (o("WAWebLoggerDev").clearContextBuffer(), e == null ? r("WAWebLocalStorage").removeItem(o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY) : (r("WAWebLocalStorage").setItem(o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY, e), "" + e));
	}
	S.doc = "Set a filter pattern for logs (string or regex). Only matching logs will be shown. Pass null to clear the filter.";
	function R() {
		return r("WAWebLocalStorage") == null ? null : r("WAWebLocalStorage").getItem(o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY);
	}
	R.doc = "Get the current log filter pattern, or null if not set";
	function L(e) {
		e < 0 || (o("WAWebLoggerDev").setContextLinesCount(e), o("WAWebLoggerDev").clearContextBuffer(), e === 0 || "" + e);
	}
	L.doc = "Set number of context lines to show before/after matching logs. Pass 0 to disable context.";
	function E() {
		return o("WAWebLoggerDev").getContextLinesCount();
	}
	E.doc = "Get current context lines setting";
	var k = {
		Logger: o("WAWebLoggerImpl").Logger,
		getLogContext: E,
		getLogFilter: R,
		getOrInitTimeSpentSession: o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession,
		getThreadLogging: f,
		getWamGlobal: C,
		listenLog: S,
		logWamDailyStats: _,
		loggingPerfTest: h,
		markTimeSpentActivity: o("WAWebTimeSpentLoggingSession").markTimeSpentActivity,
		sendLogsWithoutEmployeeSeparation: v,
		setLogContext: L,
		setLogLevel: b,
		togglePageLoadDebug: y,
		toggleTsNavigationDebug: o("WAWebTimeSpentLoggingNavigation").toggleTsNavigationDebug,
		uploadLogs: m,
		uploadLogsTesting: p,
		uploadThreadLoggingEventsNow: g
	};
	l.default = k;
}), 98);
