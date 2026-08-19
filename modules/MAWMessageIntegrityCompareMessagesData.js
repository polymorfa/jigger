__d("MAWMessageIntegrityCompareMessagesData", [
	"I64",
	"MAWMessageIntegrityChecker",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("WATagsLogger").TAGS(["MissingMessages"]);
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.S518614_messagesBacktest, r = n.ebMessages, o = n.mpsMessages, a = n.uiMessages, i = t.S518614_pageSizeBacktest, l = t.messages, s = l.ebMessages, u = l.mpsMessages, c = l.uiMessages, d = t.pageSize, m = yield p(e, s, u, c, d), _ = m.mpsVsEB, f = m.uiVsEB, g = yield p(e, r, o, a, i, !0), h = g.mpsVsEB, y = g.uiVsEB;
			return {
				S518614_mpsVsEB: h,
				S518614_pageSize: i,
				S518614_uiVsEB: y,
				mpsVsEB: _,
				pageSize: d,
				uiVsEB: f
			};
		}), m.apply(this, arguments);
	}
	function p(t, n, r, a, i, l) {
		l === void 0 && (l = !1);
		var d = o("MAWMessageIntegrityChecker").checkIntegrityforMessageList(a, n, i, "ui", "eb"), m = r ? o("MAWMessageIntegrityChecker").checkIntegrityforMessageList(r, n, i, "mps", "eb") : null;
		return d.result !== "consistent" && (l ? c.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"S518614 backtest: Missing message detected for ",
			", result: ",
			", num of messages missing: ",
			""
		])), (u || (u = o("I64"))).to_float(t), d.result, d.numOfMissingMessages) : c.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"Missing message detected for ",
			", result: ",
			", num of messages missing: ",
			""
		])), (u || (u = o("I64"))).to_float(t), d.result, d.numOfMissingMessages)), (d.result === "missing_in_target" || d.result === "missing_in_both") && (d.detailedResults = _(d.detailedResults, a)), {
			mpsVsEB: m,
			pageSize: i,
			uiVsEB: d
		};
	}
	function _(e, t) {
		var n = new Set(t.map(function(e) {
			return e.externalId;
		}));
		return e.map(function(e) {
			var t = e[0], r = e[1];
			return r.result === "missing_in_target" && n.has(t.externalId) ? [t, babelHelpers.extends({}, r, { existingInUISamePage: !0 })] : [t, r];
		});
	}
	l.compareMessagesData = d;
}), 98);
