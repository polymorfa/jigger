__d("MAWMainThreadLogger", [
	"CurrentMessengerUser",
	"FBLogger",
	"MAWAppVersion",
	"MAWConsoleLogger",
	"MAWDeleteOldLogsFromDisk",
	"MAWLeakDetection",
	"MAWLoggerUtils",
	"MAWLoggingSwitches",
	"MAWSaveLogToDisk",
	"WAJids",
	"WATagsLogger",
	"err",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = !1;
	function s() {
		e = !1;
	}
	function u() {
		e || (e = !0, o("WATagsLogger").initializeWaLogger(C));
	}
	var c = function() {
		return r("FBLogger")("messenger_web");
	};
	function d(e, t) {
		var n = m(e);
		n != null && o("MAWLoggerUtils").logToHistory("log", n, t, !1);
	}
	function m(e) {
		if (!(!o("CurrentMessengerUser").isEmployee() && !o("CurrentMessengerUser").isTestUser())) {
			var t = o("WAJids").maybeSanitizeLogLineText(e);
			return t = o("MAWLeakDetection").maybeReplaceVaultedString(t), t;
		}
	}
	function p(e, t) {
		var n = o("WAJids").maybeSanitizeLogLineText(e);
		n = o("MAWLeakDetection").maybeReplaceVaultedString(n), o("MAWLoggerUtils").logToHistory("log", n, t, !1);
	}
	function _(e, t) {
		var n = o("WAJids").maybeSanitizeLogLineText(e);
		n = o("MAWLeakDetection").maybeReplaceVaultedString(n), o("MAWLoggerUtils").logToHistory("log", n, t, !1);
	}
	function f(e, t) {
		var n = o("WAJids").maybeSanitizeLogLineText(e);
		n = o("MAWLeakDetection").maybeReplaceVaultedString(n), c().tags(t.map(function(e) {
			return String(e);
		})).warn(n);
	}
	function g(e, t, n, o, a, i) {
		var l = r("err")(n);
		l.stack = o, r("promiseDone")(y(e, t, l, a, i));
	}
	async function h(e, t) {
		var n = o("MAWLeakDetection").maybeReplaceVaultedString(o("WAJids").maybeSanitizeLogLineText(e)), r = o("MAWLoggingSwitches").removeLoggingFromBridge ? o("MAWSaveLogToDisk").getLastNEntries(t) : Promise.resolve([]), a = t === 0 ? [] : [].concat((await r).map(function(e) {
			return e.args;
		}));
		return {
			logs: [].concat(a),
			sanitizedMessage: n
		};
	}
	async function y(e, t, n, a, i) {
		var l, s, u = o("MAWLeakDetection").maybeReplaceVaultedString(o("WAJids").maybeSanitizeLogLineText(e)), d = n != null ? n : r("err")(u), m = a != null ? a : n == null ? 2 : 0, p = i != null ? i : 0, _ = await h(d.message, p), f = _.logs, g = _.sanitizedMessage, y = r("getErrorSafe")(d);
		try {
			d.message = g;
		} catch (e) {
			y = r("err")(g, d.fileName, d.lineNumber);
		}
		m !== 0 && (y.framesToPop = m), (l = c()) == null || (s = l.addMetadata("MESSENGER_E2EE_WEB", "APP_VERSION", o("MAWAppVersion").getVersionNumber()).tags(t.map(function(e) {
			return String(e);
		})).catching(y)).mustfix.apply(s, [g].concat(f));
	}
	var C = {
		count: function(t, n) {
			o("MAWConsoleLogger").logToConsole("count", t, n);
		},
		debug: function(t, n) {
			o("MAWConsoleLogger").logToConsole("log", t, n);
		},
		devConsole: function(t, n, r) {
			for (var e = arguments.length, a = new Array(e > 3 ? e - 3 : 0), i = 3; i < e; i++) a[i - 3] = arguments[i];
			switch (t) {
				case "COUNT":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"count",
						n,
						r
					].concat(a));
					break;
				case "DEV":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"log",
						n,
						r
					].concat(a));
					break;
				case "DEV_XMPP":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"log",
						n,
						r
					].concat(a));
					break;
				case "LOG":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"info",
						n,
						r
					].concat(a));
					break;
				case "WARN":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"warn",
						n,
						r
					].concat(a));
					break;
				case "ERROR":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"error",
						n,
						r
					].concat(a));
					break;
				case "CATCHING":
					o("MAWConsoleLogger").logToConsole.apply(void 0, [
						"error",
						n,
						r
					].concat(a));
					break;
			}
		},
		error: function(t, n, a) {
			r("promiseDone")(y(t, n, a)), o("MAWConsoleLogger").logToConsole("error", t, n);
		},
		info: function(t, n) {
			_(t, n), o("MAWConsoleLogger").logToConsole("info", t, n);
		},
		logRestricted: function(t, n) {
			d(t, n), o("MAWConsoleLogger").logToConsole("log", t, n);
		},
		warn: function(t, n) {
			f(t, n), o("MAWConsoleLogger").logToConsole("warn", t, n);
		}
	};
	function b() {
		return o("MAWLoggingSwitches").removeLoggingFromBridge ? o("MAWSaveLogToDisk").getEntriesFromDb() : Promise.resolve([]);
	}
	async function v() {
		o("MAWLoggingSwitches").removeLoggingFromBridge && await o("MAWDeleteOldLogsFromDisk").clearLogs();
	}
	function S(e) {
		return new Date(typeof e == "string" ? parseInt(e, 10) : e).toISOString().replace("T", " ").replace("Z", "");
	}
	function R(e) {
		return e.map(function(e) {
			try {
				var t = S(e.date);
				return [
					t,
					e.level,
					e.category,
					e.event,
					e.args
				].join(" | ");
			} catch (e) {
				var n = r("getErrorSafe")(e);
				return [
					S(Date.now()),
					"error",
					"LOGGER",
					"Error formatting log: " + ((n == null ? void 0 : n.message) || "")
				].join(" | ");
			}
		}).filter(Boolean).join(`
`);
	}
	l.__testClearLoggerSetup = s, l.setupMainWaLogger = u, l.logRestricted = d, l.count = p, l.info = _, l.warn = f, l.logError = g, l.getEntries = b, l.clearEntries = v, l.formatEntries = R;
}), 98);
