__d("MAWMessageIntegrityCheck", [
	"CometDebounce",
	"DateConsts",
	"EbFetchTimeoutMsForMLv2",
	"I64",
	"MAWBridgeSendAndReceive",
	"MAWEBCombinedSwitch",
	"MAWMessageIntegrityEBFetchStatus",
	"MAWMessageIntegrityFetchAndCompareData",
	"MAWMessageIntegrityTruncateStatus",
	"MAWMessagesIntegrityEphemeralSettings",
	"MAWMiActOnActThreadReady",
	"WACommsConnectionState",
	"WAPromiseDelays",
	"WATagsLogger",
	"WATimeUtils",
	"gkx",
	"justknobx",
	"logMessengerWebFalcoEvent"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = "11", y = 12e4, C = o("WATagsLogger").TAGS(["MissingMessages"]), b = r("CometDebounce")(r("logMessengerWebFalcoEvent"));
	function v(e) {
		if (e.length === 0) return null;
		var t = 0;
		for (var n of e) t = Math.max(t, (g || (g = o("I64"))).to_float(n.primarySortKey));
		return o("WATimeUtils").castToMillisTime(t);
	}
	function S(e, t) {
		var n = v(e);
		if (n == null) return t;
		var o = Math.abs(n - t), a = r("justknobx")._("4843");
		return o < a ? n : t;
	}
	async function R(t, n, a, i, l, v, R, k, x) {
		var $, P, N, M, w, A, F, O;
		if (C.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"run Message Integrity Check - threadKey: ",
			", lastItem: ",
			", pageSize: ",
			""
		])), (g || (g = o("I64"))).to_string(n), v == null ? "null" : (g || (g = o("I64"))).to_float(v.primarySortKey), l), o("WATimeUtils").millisTime() - x > y) {
			C.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"Message Integrity Check skipped for threadKey: ",
				", lastItem: ",
				", reason: check was scheduled more than 2 minutes ago"
			])), (g || (g = o("I64"))).to_string(n), v == null ? "null" : (g || (g = o("I64"))).to_float(v.primarySortKey));
			return;
		}
		var B = o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.isEnabled();
		if (v == null && o("WACommsConnectionState").WACommsConnectionState.isConnected() === !1) {
			C.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"Message Integrity Check skipped for threadKey: ",
				", lastItem: ",
				", reason: WACOMMS is disconnected"
			])), (g || (g = o("I64"))).to_string(n), v == null ? "null" : (g || (g = o("I64"))).to_float(v.primarySortKey));
			return;
		}
		var W = o("WATimeUtils").millisTime(), q = r("gkx")("1626"), U = o("MAWMessageIntegrityEBFetchStatus").hasEBFailure(n), V = o("MAWMessageIntegrityTruncateStatus").getThreadThuncateState(n), H = v != null ? {
			lastItemFromPreviousPage: v,
			type: "lastItemFromPreviousPage"
		} : {
			timeOfSnapshotMs: S(R, x),
			type: "latestPageSnapshot"
		}, G = await o("MAWMessageIntegrityFetchAndCompareData").fetchAndCompareMessagesData({
			db: t,
			fromReferencePoint: H,
			hasEbFetchFailed: U,
			localMessages: R,
			pageSize: l,
			threadKey: n
		});
		if (G.success === !1) {
			C.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"Message Integrity Check skipped for threadKey: ",
				", lastItem: ",
				", reason: ",
				""
			])), (g || (g = o("I64"))).to_string(n), v == null ? "null" : (g || (g = o("I64"))).to_float(v.primarySortKey), G.error);
			return;
		}
		var z = G.value;
		C.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"Message Integrity Check result - threadKey: ",
			", lastItem: ",
			", result against EB data: ",
			""
		])), g.to_string(n), v == null ? "null" : (g || (g = o("I64"))).to_float(v.primarySortKey), JSON.stringify(z.uiVsEB)), C.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
			"Message Integrity Check result - threadKey: ",
			", lastItem: ",
			", MPS (target) vs EB (reference): ",
			""
		])), g.to_string(n), v == null ? "null" : (g || (g = o("I64"))).to_float(v.primarySortKey), JSON.stringify(z.mpsVsEB)), C.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
			"Message Integrity Check Truncate state - threadKey: ",
			", state: ",
			""
		])), g.to_string(n), JSON.stringify(V));
		var j = E(z.uiVsEB), K = z.mpsVsEB != null ? E(z.mpsVsEB) : {}, Q = E(z.S518614_uiVsEB), X = z.S518614_mpsVsEB != null ? E(z.S518614_mpsVsEB) : {}, Y = I(R), J = await o("MAWMessagesIntegrityEphemeralSettings").getEphemeralMessagesStatusForPage(t, n, Y), Z = await T(t, n), ee = await o("WAPromiseDelays").withTimeout(D({ messages: [] }).catch(function(e) {
			return C.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to get extra debug info: ", ""])), e), "error";
		}), 1e4, function() {
			return "timeout";
		}), te = {
			MPS_vs_EB_detailedResults: ($ = K.detailedResults) != null ? $ : "",
			MPS_vs_EB_numOfMissingInReference: (P = K.numOfMissingInReference) != null ? P : "",
			MPS_vs_EB_numOfMissingInTarget: (N = K.numOfMissingInTarget) != null ? N : "",
			S518614_MPS_vs_EB_detailedResults: (M = X.detailedResults) != null ? M : "",
			S518614_pageSize: z.S518614_pageSize.toString(),
			S518614_UI_vs_EB_detailedResults: (w = Q.detailedResults) != null ? w : "",
			UI_vs_EB_detailedResults: j.detailedResults,
			UI_vs_EB_numOfMissingInReference: j.numOfMissingInReference,
			UI_vs_EB_numOfMissingInTarget: j.numOfMissingInTarget,
			UI_vs_EB_setNumOfMissingInReference: j.setDifferenceInReference,
			UI_vs_EB_setNumOfMissingInTarget: j.setDifferenceInTarget,
			ebMetadataCacheStatus: Z,
			ebTimeoutSec: (r("EbFetchTimeoutMsForMLv2")() / o("DateConsts").MS_PER_SEC).toString(),
			endRangeTimestampMs: g.to_string(Y),
			ephemeralMessagesStatus: J + "",
			extraDebugInfo: ee,
			hasAdditionalData: L(q),
			hasEBFetchFailed: L(U),
			integrityCheckScheduleTimestampMs: x.toString(),
			isDogfooding: L(r("gkx")("2972")),
			isEbEnabled: L(B),
			isEbGraphQL: B ? "false" : L(r("gkx")("7083")),
			isHoldout_H2_2025: L(r("gkx")("15728")),
			isJidOptimisationInRestoreEnabled: L(r("gkx")("3137")),
			isMpsEnabled: "true",
			isUsingLsInitCache: L(r("gkx")("15958")),
			lastItemExternalId: (A = v == null ? void 0 : v.offlineThreadingId) != null ? A : "null",
			lastItemTimestamp: g.to_string((F = v == null ? void 0 : v.primarySortKey) != null ? F : (g || (g = o("I64"))).zero),
			pageIndex: k + "",
			pageSize: z.pageSize + "",
			reportTimeMs: W.toString(),
			truncateState: (O = JSON.stringify(V)) != null ? O : "null",
			version: B ? h : "0",
			waCommsIsConnected: L(o("WACommsConnectionState").WACommsConnectionState.isConnected())
		};
		r("gkx")("970") && C.DEV(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Message Integrity Check - Falco Report"]))).devConsole({ falcoReport: te }), b({
			threadKey: n,
			threadType: a
		}, "message_integrity_check", i, te);
	}
	function L(e) {
		return e === !0 ? "true" : "false";
	}
	function E(e) {
		var t = 0, n = 0, r = 0;
		return e.detailedResults.forEach(function(e) {
			var o = e[0], a = e[1];
			switch (a.result) {
				case "missing_in_target":
				case "missing_in_target_exists_in_lsdb":
					t += 1;
					break;
				case "missing_in_target_invalid_sortOrder":
					n += 1, t += 1;
					break;
				case "missing_in_reference":
					r += 1;
					break;
				case "consistent":
				case "skipped_in_target":
				case "skipped_in_reference": break;
				default: a.result;
			}
		}), {
			detailedResults: k(e.detailedResults),
			numOfMissingInReference: r + "",
			numOfMissingInTarget: t + "",
			numOfMissingInTargetInvalidSortOrder: n + "",
			setDifferenceInReference: e.setDifferenceInReference + "",
			setDifferenceInTarget: e.setDifferenceInTarget + ""
		};
	}
	function k(e) {
		var t = e.map(function(e) {
			var t = e[0], n = e[1], o = n.existingInUISamePage, a = n.result, i = n.sortOrderSkewMs, l = n.sortOrderSkewNumberOfMsg;
			return babelHelpers.extends({
				existingInUISamePage: o,
				externalId: t.externalId,
				isOutgoing: t.isOutgoing
			}, r("gkx")("1626") ? {
				msgType: t.msgType,
				sortOrderMs: t.sortOrderMs
			} : {}, {
				result: a,
				sortOrderSkewMs: i != null ? i : 0,
				sortOrderSkewNumberOfMsg: l != null ? l : 0
			});
		});
		return JSON.stringify(t);
	}
	function I(e) {
		return e.length === 0 ? (g || (g = o("I64"))).min_int : e.map(function(e) {
			return e.timestampMs;
		}).sort((g || (g = o("I64"))).compare)[0];
	}
	async function T(e, t) {
		var n = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(e.tables, t, "fetchAndCompareMessagesData"), r = n.chatJid, a = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getEBMetadataCacheDetailsForThread", { chatJid: r });
		return JSON.stringify(a);
	}
	async function D(e) {
		var t = {
			browser: {
				loadEventEnd: window.performance.timing.loadEventEnd,
				navigationStart: window.performance.timing.navigationStart
			},
			worker: await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getWorkerBasedMessageIntegrityDebugInfo", e)
		};
		return JSON.stringify(t);
	}
	var x = { runMessageIntegrityCheck: R };
	l.default = x;
}), 98);
