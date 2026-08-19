__d("EncryptedBackupsDYIHandleMessageRestore", [
	"EncryptedBackupsDYISingleton",
	"I64",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p;
	function _(e, t, n, r, o, a, i) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r, a, i, l, _) {
			var f = o("EncryptedBackupsDYISingleton").getSingleton(), h = f.getLogger(), y = f.getThreadKeyForThreadId(n);
			if (y == null) {
				h.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cannot find thread key for thread id: ", ""])), n);
				return;
			}
			if (h.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"handling message range query for thread with thread key ",
				", hasMoreBefore: ",
				""
			])), n, a), r.length > 0) try {
				yield l(y, n, r);
			} catch (e) {
				h.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"Error processing messages for thread ",
					": ",
					""
				])), n, e);
			}
			if (!a || i == null) {
				a && i == null && h.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["nextTimestampMs was not supplied for thread with thread key ", "."])), n), g(y);
				return;
			}
			var C = f.getDateRangeCutoffMs();
			if (C != null && (p || (p = o("I64"))).lt(i, (p || (p = o("I64"))).of_float(C))) {
				h.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"Next cursor timestamp ",
					" is before date range cutoff. Stopping message fetch for thread ",
					""
				])), (p || (p = o("I64"))).to_string(i), n), g(y);
				return;
			}
			var b = (p || (p = o("I64"))).to_string(i);
			h.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"Issuing next range query for thread with thread key ",
				", server generated next reference timestamp: ",
				""
			])), n, b), _(t, b, n);
		}), f.apply(this, arguments);
	}
	function g(e) {
		var t = o("EncryptedBackupsDYISingleton").getSingleton();
		t.deleteThreadKeyFromThreadsRestoreInProgress(e);
	}
	l.handleMessageRangeQueryRestore = _;
}), 98);
