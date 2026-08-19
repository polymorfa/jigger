__d("MAWEBRestoreTrackingUtils", [
	"LSIntEnum",
	"MAWQplProxy",
	"MWEBODSEntityName.enum",
	"ODS",
	"QPLUserFlow",
	"WAHashStringToNumber",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = {
		dyi: r("justknobx")._("467"),
		frontloaded: 20,
		initial: 20,
		paginated: r("justknobx")._("3177"),
		point: 1,
		search: r("justknobx")._("2477")
	};
	function c(t) {
		var n = t.querySource, a = t.runningInWorker, i = t.taskSource, l = t.traceId;
		l != null && f({
			querySource: n,
			runningInWorker: a != null ? a : !1,
			taskSource: i,
			traceId: l,
			triggerType: "initial"
		}), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_RESTORE_COUNTER, "restore.request.initial");
	}
	function d(t, n, a) {
		n != null && f({
			querySource: "LS",
			runningInWorker: a != null ? a : !1,
			taskSource: t,
			traceId: n,
			triggerType: "dyi"
		}), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_RESTORE_COUNTER, "restore.request.dyi");
	}
	function m(t, n) {
		t != null && (n != null && n ? o("MAWQplProxy").sendQPLSuccessThroughBridge(r("qpl")._(521476165, "2432"), void 0, o("WAHashStringToNumber").hashStringToNumber(t)) : r("QPLUserFlow").endSuccess(r("qpl")._(521476165, "2432"), { instanceKey: o("WAHashStringToNumber").hashStringToNumber(t) })), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_RESTORE_COUNTER, "restore.decryption.success");
	}
	function p(t, n, a, i) {
		a === void 0 && (a = "restore_failure"), t != null && (n != null && n ? o("MAWQplProxy").sendQPLFailThroughBridge(r("qpl")._(521476165, "2432"), a, i, o("WAHashStringToNumber").hashStringToNumber(t)) : r("QPLUserFlow").endFailure(r("qpl")._(521476165, "2432"), a, {
			annotations: i,
			instanceKey: o("WAHashStringToNumber").hashStringToNumber(t)
		})), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_RESTORE_COUNTER, "restore.decryption.failure");
	}
	function _(e) {
		b("protobuf", e);
	}
	function f(e) {
		var t = e.querySource, n = e.runningInWorker, a = e.taskSource, i = e.traceId, l = e.triggerType;
		if (n != null && n) {
			var s;
			o("MAWQplProxy").startQplUserFlow(r("qpl")._(521476165, "2432"), {
				bool: { runningInWorker: n === !0 },
				int: { requestedMessagesCount: (s = u[l]) != null ? s : 10 },
				string: {
					querySource: t,
					taskSource: v(a),
					traceId: i,
					triggerType: l
				}
			}, {
				providedInstanceKey: o("WAHashStringToNumber").hashStringToNumber(i),
				providedTimeoutInMs: r("justknobx")._("2950")
			});
		} else {
			var c;
			r("QPLUserFlow").start(r("qpl")._(521476165, "2432"), {
				annotations: {
					bool: { runningInWorker: !1 },
					int: { requestedMessagesCount: (c = u[l]) != null ? c : 10 },
					string: {
						querySource: t,
						taskSource: v(a),
						traceId: i,
						triggerType: l
					}
				},
				instanceKey: o("WAHashStringToNumber").hashStringToNumber(i),
				timeoutInMs: r("justknobx")._("2950")
			});
		}
	}
	function g(e) {
		var t = e.pointName, n = e.traceId;
		r("QPLUserFlow").addPoint(r("qpl")._(521476165, "2432"), t, { instanceKey: o("WAHashStringToNumber").hashStringToNumber(n) });
	}
	function h(e) {
		var t = e.annotations, n = e.pointName, a = e.traceId;
		r("QPLUserFlow").addAnnotations(r("qpl")._(521476165, "2432"), t, { instanceKey: o("WAHashStringToNumber").hashStringToNumber(a) }), r("QPLUserFlow").addPoint(r("qpl")._(521476165, "2432"), n, { instanceKey: o("WAHashStringToNumber").hashStringToNumber(a) });
	}
	function y(e) {
		var t = e.annotations, n = e.pointName, a = e.traceId;
		a != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(521476165, "2432"), n, {
			annotations: t,
			instanceKey: o("WAHashStringToNumber").hashStringToNumber(a)
		});
	}
	function C(e) {
		var t = e.pointName, n = e.traceId;
		o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(521476165, "2432"), t, { instanceKey: o("WAHashStringToNumber").hashStringToNumber(n) });
	}
	function b(t, n) {
		var a = n ? (s || (s = o("LSIntEnum"))).unwrapIntEnum(n) : null;
		(e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_RESTORE_COUNTER, "restore." + t + "." + v(a));
	}
	function v(e) {
		var t;
		return (t = e == null ? void 0 : e.toString()) != null ? t : "unknown";
	}
	l.markEBRestoreInitial = c, l.markEBRestoreDYI = d, l.markEBRestoreSuccess = m, l.markEBRestoreFail = p, l.markEBRestoreProtobuf = _, l.addQPLRestorePoint = g, l.addQPLRestorePointWithAnnotations = h, l.addQPLRestorePointWithAnnotationsWorker = y, l.addQPLRestorePointWorker = C;
}), 98);
