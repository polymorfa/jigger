__d("IgnitionE2EEMpsCompareChecker", [
	"EBMessageContentType",
	"FBLogger",
	"IgnitionE2EERecoveryProbe",
	"MAWEBLSInWorkerSwitch",
	"MAWMpsMigrationProtobufCorrectnessChecker",
	"MAWProtobufDeserializers",
	"QPLFlow",
	"WAE2EEIgnitionGating",
	"WAJids",
	"WATimeUtils",
	"WmiOds",
	"asyncToGeneratorRuntime",
	"clearTimeout",
	"getErrorSafe",
	"justknobx",
	"qpl",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("justknobx")._("4145"), s = 1e3, u = 1e4, c = "dropped_below_watermark", d = new Map(), m = new Map(), p = 0;
	function _() {
		p++;
	}
	var f = "unknown";
	function g(e) {
		f = e;
	}
	var h = 0;
	function y(e) {
		return o("WATimeUtils").castMilliSecondsToUnixTime(Number(e)) < o("WATimeUtils").castMilliSecondsToUnixTime(h);
	}
	function C(e) {
		e > h && (h = e);
	}
	function b(e, t) {
		return e === 0 ? t ? p > 0 ? "missing_in_ignition_not_ready_cold_start" : "missing_in_ignition_not_ready_start_failed" : "missing_in_ignition_not_ready_eb_off" : "missing_in_ignition";
	}
	function v(e, t, n) {
		var a = o("QPLFlow").startQPLFlow(r("qpl")._(521483895, "1514"));
		t != null && a.addAnnotations({ int: {
			ign_delivery_ms: t.ignDeliveryMs,
			wai_delivery_ms: t.waiDeliveryMs
		} }), n != null && a.addAnnotations({ string: n }), e === "match" ? a.endSuccess() : e === c ? a.endCancel() : a.endFail(e);
	}
	function S(e, t, n) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (n.message_id = String(t.messageId), !r("justknobx")._("4288")) {
				v(e, null, n);
				return;
			}
			try {
				var a = yield o("IgnitionE2EERecoveryProbe").probeEbAvailability(t), i = babelHelpers.extends({}, n, { eb_recovery: a.status });
				a.status === "recovered" && (i.eb_compare = I(E(t), E(a.message))), v(e, null, i);
			} catch (t) {
				r("FBLogger")("wmi").tags(["E2EEIgnition"]).catching(r("getErrorSafe")(t)).warn("EB recovery probe threw; reporting eb_recovery=unknown"), v(e, null, babelHelpers.extends({}, n, { eb_recovery: "unknown" }));
			}
		}), R.apply(this, arguments);
	}
	function L(e, t, n) {
		var r = T(n.payload), o = r.contentKind, a = r.payloadKind;
		v(c, null, {
			content_kind: o,
			drop_reason: "below_watermark",
			message_id: n.messageId,
			payload_kind: a,
			side: e,
			stage: t,
			thread_type: D(n.threadId)
		});
	}
	function E(e) {
		return {
			messageId: String(e.messageId),
			payload: e.payload,
			senderId: e.senderId,
			threadId: String(e.threadId),
			timestampMs: o("WATimeUtils").castToMillisTime(Number(e.timestampMs))
		};
	}
	function k(e, t) {
		return o("WATimeUtils").castMilliSecondsToUnixTime(Number(e)) === o("WATimeUtils").castMilliSecondsToUnixTime(Number(t));
	}
	function I(e, t) {
		if (e.messageId !== t.messageId) return "mismatch_messageId";
		if (e.threadId !== t.threadId) return "mismatch_threadId";
		if (e.senderId !== t.senderId) return "mismatch_senderId";
		if (!k(e.timestampMs, t.timestampMs)) return "mismatch_timestampMs";
		var n = o("MAWMpsMigrationProtobufCorrectnessChecker").compareProtobufs(e.payload, t.payload);
		return n.success ? "match" : "mismatch_applicationPayload_" + n.error;
	}
	function T(e) {
		try {
			var t = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e);
			return {
				contentKind: o("EBMessageContentType").determineMessageType(t),
				payloadKind: t.payload().kind
			};
		} catch (e) {
			return {
				contentKind: "decode_error",
				payloadKind: null
			};
		}
	}
	function D(e) {
		return e.endsWith(o("WAJids").getGroupDomain()) ? "group" : "one_to_one";
	}
	function x(e) {
		var t = d.get(e);
		if (t != null) {
			d.delete(e);
			var n = t.message;
			if (n != null) {
				var r = E(n);
				if (y(r.timestampMs)) {
					L(t.side, "expire", r);
					return;
				}
				var o = { thread_type: D(r.threadId) };
				if (t.side === "ignition") {
					var a = T(r.payload), i = a.contentKind, l = a.payloadKind;
					o.content_kind = i, o.message_id = r.messageId, o.payload_kind = l, o.sender_is_self = String(t.senderIsSelf), v("missing_in_wai", null, o);
				} else {
					o.ignition_health = t.ignitionHealthAtRecord, o.sender_is_self = String(t.senderIsSelf);
					var u = b(t.syncCountAtRecord, t.ebEnabledAtRecord);
					if (u === "missing_in_ignition") {
						var c = T(r.payload), p = c.contentKind, _ = c.payloadKind;
						o.content_kind = p, o.payload_kind = _;
					}
					o.ignition_delta_status = "not_received", S(u, n, o);
				}
				if (m.set(e, t.side), m.size > s) {
					var f = m.keys().next().value;
					f != null && m.delete(f);
				}
			}
		}
	}
	function $(t, n, a, i, l) {
		var s = o("WATimeUtils").castToMillisTime(o("WATimeUtils").unixTimeMs());
		try {
			if (!o("WAE2EEIgnitionGating").isE2EEIgnitionCompareEnabled()) return;
			var c = r("MAWEBLSInWorkerSwitch").isEnabled();
			if (!c || n === "") return;
			var _ = a != null ? E(a) : null;
			if (_ != null && y(_.timestampMs)) {
				L(t, "record", _);
				return;
			}
			var g = m.get(n);
			if (g != null) {
				g !== t && (m.delete(n), v("late_after_ttl_in_" + t, null, {
					message_id: n,
					sender_is_self: String(l)
				}));
				return;
			}
			var h = d.get(n);
			if (h == null) {
				d.set(n, {
					arrivalEpochMs: s,
					ebEnabledAtRecord: c,
					failReason: i,
					ignitionHealthAtRecord: f,
					message: a,
					senderIsSelf: l,
					side: t,
					syncCountAtRecord: p,
					timerId: r("setTimeout")(function() {
						return x(n);
					}, e)
				});
				return;
			}
			if (h.side === t) {
				h.message = a, h.failReason = i;
				return;
			}
			r("clearTimeout")(h.timerId), d.delete(n);
			var C = t === "wai" ? a : h.message;
			if (C == null) return;
			var b = E(C), R = t === "ignition" ? i : h.failReason;
			if (R != null) {
				var k = T(b.payload), $ = k.contentKind, P = k.payloadKind, N = {
					content_kind: $,
					ignition_delta_status: "received_not_produced",
					ignition_fail_reason: R,
					ignition_health: t === "wai" ? f : h.ignitionHealthAtRecord,
					payload_kind: P,
					sender_is_self: String(t === "wai" ? l : h.senderIsSelf),
					thread_type: D(b.threadId)
				};
				r("setTimeout")(function() {
					S("missing_in_ignition", C, N);
				}, u);
				return;
			}
			var M = t === "ignition" ? a : h.message;
			if (M == null) return;
			var w = E(M), A = t === "wai" ? s : h.arrivalEpochMs, F = t === "ignition" ? s : h.arrivalEpochMs, O = t === "wai" ? l : h.senderIsSelf, B = t === "ignition" ? l : h.senderIsSelf;
			v(I(b, w), {
				ignDeliveryMs: F - w.timestampMs,
				waiDeliveryMs: A - b.timestampMs
			}, {
				ign_sender_is_self: String(B),
				message_id: b.messageId,
				wai_sender_is_self: String(O)
			});
		} catch (e) {
			o("WmiOds").wmiOdsBump("e2ee_ignition_compare", "record_error"), r("FBLogger")("wmi").tags(["E2EEIgnition"]).catching(r("getErrorSafe")(e)).warn("Ignition compare checker record failed for side %s", t);
		}
	}
	function P(e, t) {
		t === void 0 && (t = !1), e != null && $("wai", String(e.messageId), e, null, t);
	}
	function N(e, t) {
		t === void 0 && (t = !1), e != null && $("ignition", String(e.messageId), e, null, t);
	}
	function M(e, t) {
		$("ignition", e, null, t, !1);
	}
	function w() {
		for (var e of d) {
			var t = e[1];
			r("clearTimeout")(t.timerId);
		}
		d.clear(), m.clear(), p = 0, f = "unknown", h = 0;
	}
	function A(e, t) {
		return I(E(e), E(t));
	}
	l.noteIgnitionSync = _, l.noteIgnitionHealth = g, l.noteResnapshotWatermark = C, l.recordWaiSide = P, l.recordIgnitionSide = N, l.recordIgnitionDeltaFailure = M, l.resetForTesting = w, l.compareMessages = A;
}), 98);
