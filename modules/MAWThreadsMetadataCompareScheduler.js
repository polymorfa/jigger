__d("MAWThreadsMetadataCompareScheduler", [
	"FBLogger",
	"MAWInMemoryThreadStore",
	"MAWQplProxy",
	"WATimeUtils",
	"WormDbMigrationCompletenessCheck",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = _(), u = function() {
		return r("FBLogger")("maw_db").tags(["threads_metadata_compare"]);
	}, c = [
		"archived",
		"authoritativeThreadKey",
		"cannotReplyReason",
		"deduplicationKey",
		"didInsertDualThreadCutoverAdminMsg",
		"folder",
		"isMigratedLocally",
		"jid",
		"lastReadMsg",
		"lastReadMsgReceiptSent",
		"lastReadMsgTs",
		"newestMsg",
		"newestMsgTs",
		"oldestMsg",
		"optimisticThreadKey",
		"snippetMsg",
		"snippetMsgTs",
		"threadOrder"
	];
	function d(e, t) {
		if (e == null) return { type: "missing_in_memory" };
		var n = [], r = {};
		for (var o of c) {
			var a = e[o], i = t[o];
			a == null && i == null || a !== i && (n.push(o), r[o + "_mem"] = String(a), r[o + "_disk"] = String(i));
		}
		return n.length > 0 ? (n.sort(), {
			mismatchedFields: n,
			type: "mismatch",
			valueAnnotations: r
		}) : { type: "match" };
	}
	function m() {
		return !(!o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() || o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() || !o("WormDbMigrationCompletenessCheck").checkMigrationCompleteness("wmi-metadata-threads"));
	}
	function p(t, n, a, i) {
		if (i === void 0 && (i = "write"), !!m()) {
			var l = o("MAWQplProxy").startQplUserFlow(r("qpl")._(1056845294, "2210"), { int: {
				uptime: _() - s,
				version: 12
			} });
			try {
				var c = d(t, n);
				e: {
					if (c.type === "match") {
						l.endSuccess({ string: {
							callsite: a,
							operation: i,
							reason: "match"
						} });
						break e;
					}
					if (c.type === "missing_in_memory") {
						l.endFail("comparison_failed", { string: {
							callsite: a,
							jid: n.jid,
							operation: i,
							reason: "missing_in_memory"
						} });
						break e;
					}
					if (c.type === "mismatch") {
						l.endFail("comparison_failed", {
							string: babelHelpers.extends({}, c.valueAnnotations, {
								callsite: a,
								jid: n.jid,
								operation: i,
								reason: "field_mismatch"
							}),
							string_array: { mismatched_fields: c.mismatchedFields }
						});
						break e;
					}
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + c.type);
				}
			} catch (t) {
				t instanceof Error && u().catching(t).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["threads metadata compare failed"]))), l.endFail("exception");
			}
		}
	}
	function _() {
		return Math.round(o("WATimeUtils").performanceAbsoluteNow() / 1e3);
	}
	l.runComparison = p;
}), 98);
