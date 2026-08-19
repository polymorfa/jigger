__d("MAWOnDemandCutoverQPLLogger", [
	"I64",
	"MAWLoggerUtils",
	"MWFBLogger",
	"QPLUserFlow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = o("MWFBLogger").MWLogger().tags(["ODCutover"]), _ = new Set();
	function f(t, n) {
		var a = o("MAWLoggerUtils").getInstanceKeyFromId((m || (m = o("I64"))).to_string(t));
		_.has(a) ? g(t, "already_in_progress") : (p.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"Triggering cutover (non-blocking) from ",
			" for ThreadKey: ",
			""
		])), n, (m || (m = o("I64"))).to_string(t)), _.add(a), r("QPLUserFlow").start(r("qpl")._(1056847893, "505"), {
			annotations: {
				bool: { is_non_blocking: !0 },
				string: { entrypoint: n }
			},
			instanceKey: a
		}));
	}
	function g(e, t, n) {
		var a = o("MAWLoggerUtils").getInstanceKeyFromId((m || (m = o("I64"))).to_string(e));
		t === "secure_thread_created" && p.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Secure thread created for od-cutover (non-blocking) for ThreadKey: ", ""])), (m || (m = o("I64"))).to_string(e)), r("QPLUserFlow").addPoint(r("qpl")._(1056847893, "505"), t, babelHelpers.extends({ instanceKey: a }, n));
	}
	function h(e, t) {
		var n = o("MAWLoggerUtils").getInstanceKeyFromId((m || (m = o("I64"))).to_string(e));
		_.has(n) && (p.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"Cutover (non-blocking) finished successfully for ThreadKey: ",
			". ",
			""
		])), (m || (m = o("I64"))).to_string(e), t != null ? t : ""), r("QPLUserFlow").endSuccess(r("qpl")._(1056847893, "505"), babelHelpers.extends({}, t != null && { annotations: { string: { message: t } } }, { instanceKey: n })), _.delete(n));
	}
	function y(e, t) {
		var n = o("MAWLoggerUtils").getInstanceKeyFromId((m || (m = o("I64"))).to_string(e));
		_.has(n) && (p.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"Cutover (non-blocking) finished with error for ThreadKey: ",
			". ",
			""
		])), (m || (m = o("I64"))).to_string(e), t != null ? t : ""), r("QPLUserFlow").endFailure(r("qpl")._(1056847893, "505"), t, { instanceKey: n }), _.delete(n));
	}
	function C(e, t) {
		var n = o("MAWLoggerUtils").getInstanceKeyFromId((m || (m = o("I64"))).to_string(e));
		_.has(n) && (p.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"Cutover (non-blocking) cancelled for ThreadKey: ",
			". ",
			""
		])), (m || (m = o("I64"))).to_string(e), t != null ? t : ""), r("QPLUserFlow").endCancel(r("qpl")._(1056847893, "505"), babelHelpers.extends({}, t != null && { annotations: { string: { reason: t } } }, { instanceKey: n })), _.delete(n));
	}
	l.startQpl = f, l.addPoint = g, l.endSuccessIfInProgress = h, l.endFailureIfInProgress = y, l.endCancelIfInProgress = C;
}), 98);
