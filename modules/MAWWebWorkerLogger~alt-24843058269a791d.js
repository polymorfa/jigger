__d("MAWWebWorkerLogger", [
	"MAWBridge",
	"MAWConsoleLogger",
	"MAWLeakDetection",
	"MAWLoggingSwitches",
	"MAWSaveLogToDisk",
	"WAAbPropsInit",
	"WAJids",
	"WATagsLogger",
	"err",
	"fb-error"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 2;
	function s() {
		o("WATagsLogger").initializeWaLogger(u);
	}
	var u = {
		count: function(t, n) {
			d("count", t, n), o("MAWConsoleLogger").logToConsole("count", t, n);
		},
		debug: function(t, n, r) {
			o("MAWConsoleLogger").logToConsole("log", t, n, r);
		},
		devConsole: function(t, n, r, a) {
			for (var e = arguments.length, i = new Array(e > 4 ? e - 4 : 0), l = 4; l < e; l++) i[l - 4] = arguments[l];
			switch (t) {
				case "COUNT":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"count",
						n,
						r,
						a
					].concat(i));
					break;
				case "DEV":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"log",
						n,
						r,
						a
					].concat(i));
					break;
				case "DEV_XMPP":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"log",
						n,
						r,
						a
					].concat(i));
					break;
				case "LOG":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"info",
						n,
						r,
						a
					].concat(i));
					break;
				case "WARN":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"warn",
						n,
						r,
						a
					].concat(i));
					break;
				case "ERROR":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"error",
						n,
						r,
						a
					].concat(i));
					break;
				case "CATCHING":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"error",
						n,
						r,
						a
					].concat(i));
					break;
			}
		},
		error: function(t, n, a) {
			var e = o("MAWLeakDetection").maybeReplaceVaultedString(t);
			a ? p(e, n, a) : p("webworker", n, r("err")(o("WAJids").maybeSanitizeLogLineText(e))), o("MAWConsoleLogger").logToConsole("error", e, n);
		},
		info: function(t, n) {
			d("log", t, n), o("MAWConsoleLogger").logToConsole("info", t, n);
		},
		logRestricted: function(t, n) {
			d("logRestricted", t, n), o("MAWConsoleLogger").logToConsole("log", t, n);
		},
		warn: function(t, n) {
			d("warn", t, n), o("MAWConsoleLogger").logToConsole("warn", t, n);
		}
	};
	function c() {
		try {
			return o("WAAbPropsInit").getAbProp("msgrw_logger_entries");
		} catch (e) {
			return o("WAAbPropsInit").getAbDefault("msgrw_logger_entries");
		}
	}
	function d(e, t, n) {
		o("MAWLoggingSwitches").removeLoggingFromBridge && (o("MAWSaveLogToDisk").saveLogEntry("worker", o("MAWSaveLogToDisk").formatLog({
			date: Date.now(),
			logLevel: e,
			logString: t,
			tags: n
		})), e === "count" && o("MAWBridge").getBridge().fireAndForget("event", "log", {
			logLevel: e,
			logString: t,
			tags: n
		}, !0));
	}
	async function m() {
		await o("MAWSaveLogToDisk").forceCachedLogEntryPersist();
	}
	function p(t, n, a) {
		var i = 0;
		if (a.taalOpcodes != null) {
			var l;
			(l = a.taalOpcodes) == null || l.forEach(function(e) {
				e === r("fb-error").TAALOpcode.PREVIOUS_FRAME && i++;
			});
		} else i = e;
		o("MAWLoggingSwitches").removeLoggingFromBridge && o("MAWSaveLogToDisk").saveLogEntry("worker", o("MAWSaveLogToDisk").formatErrorForLogging(t, n, a, i, c(), a.stack)), o("MAWBridge").getBridge().fireAndForget("event", "logError", {
			entriesToReport: c(),
			framesToPop: i,
			logString: t,
			message: a.message,
			stack: a.stack,
			tags: n
		}, !0);
	}
	l.setupWebWorkerWaLogger = s, l.flushLogs = m;
}), 98);
