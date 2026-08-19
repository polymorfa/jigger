__d("MAWMpsMigrationProtobufCorrectnessChecker", [
	"MAWEBLSInWorkerSwitch",
	"MAWMpsMigrationProtobufCorrectnessCheckerArmadilloComparisons",
	"MAWMpsMigrationProtobufCorrectnessCheckerUtils",
	"MAWProtobufDeserializers",
	"MessageBackupSupplementalKeyGenerator",
	"MpsTypes",
	"QPLFlow",
	"Random",
	"WAResultOrError",
	"WebMps",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = r("justknobx")._("4597");
			if (!(o("Random").random() > 1 / t)) {
				var n = r("MAWEBLSInWorkerSwitch").get();
				if (n === !0) {
					var a = o("QPLFlow").startQPLFlow(r("qpl")._(521474116, "3249")), i, l = new Map();
					try {
						var s = yield o("WebMps").mps().loadMessage({
							config: {
								persistToReverb: "no-persist",
								shouldFetchSupplementals: !0,
								shouldFetchTags: !1,
								strategy: "remote-only"
							},
							debug: { purpose: "mps-migration" },
							messageId: e.toplevelProtobuf.messageId,
							threadId: e.toplevelProtobuf.threadId
						});
						if (!s.success) {
							a.addPoint("mps_fetch_failed", { string: { errorMessage: s.error } }), a.endSuccess();
							return;
						}
						if (s.value == null) {
							a.addPoint("mps_fetch_message_not_found"), a.endSuccess();
							return;
						}
						i = s.value;
						for (var c of i.supplementalProtobufs.entries()) {
							var d = c[0], m = c[1];
							if (o("MessageBackupSupplementalKeyGenerator").isSupplementalProtobufAnEdit(d)) {
								var p = d.slice(0, d.length - 3).concat("000");
								l.set(o("MpsTypes").toSupplementalKey(p), m);
							} else l.set(o("MpsTypes").toSupplementalKey(d), m);
						}
					} catch (e) {
						var _ = r("getErrorSafe")(e);
						a.addPoint("mps_fetch_failed", { string: { errorMessage: _.message } }), a.endSuccess();
						return;
					}
					a.addPoint("protobuf_comparison_start"), a.addPoint("protobuf_comparison_toplevel_start");
					var f = u(e.toplevelProtobuf.payload, i.toplevelProtobuf.payload);
					if (!f.success) {
						a.endFail("top_level_protobuf_mismatch", { string: { mismatchType: f.error } });
						return;
					}
					a.addPoint("protobuf_comparison_toplevel_end"), a.addPoint("protobuf_comparison_supplemental_start");
					for (var g of e.supplementalsToInsert.entries()) {
						var h = g[0], y = g[1], C = l.get(h);
						if (C != null) {
							var b = u(y.payload, C.payload);
							if (!b.success) {
								a.endFail("supplemental_protobuf_mismatch", { string: { mismatchType: b.error } });
								return;
							}
						}
					}
					a.addPoint("protobuf_comparison_supplemental_end"), a.endSuccess();
				}
			}
		}), s.apply(this, arguments);
	}
	function u(e, t) {
		var n, r;
		try {
			n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e);
		} catch (e) {
			return o("WAResultOrError").makeError("backup_message_decoding_error_a");
		}
		try {
			r = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(t);
		} catch (e) {
			return o("WAResultOrError").makeError("backup_message_decoding_error_b");
		}
		var a = c(n.proto.metadata, r.proto.metadata);
		if (!a.success) return o("WAResultOrError").makeError(a.error);
		var i = n.payload(), l = r.payload();
		return i.kind !== l.kind ? o("WAResultOrError").makeError("payload_kind_mismatch_" + i.kind + "_vs_" + l.kind) : i.kind === "messageApplication" && l.kind === "messageApplication" ? o("MAWMpsMigrationProtobufCorrectnessCheckerArmadilloComparisons").compareMessageApplication(i, l) : o("WAResultOrError").makeError("unsupported_protobuf_type");
	}
	function c(e, t) {
		var n, r, a = e == null || (n = e.frankingMetadata) == null ? void 0 : n.reportingTag, i = t == null || (r = t.frankingMetadata) == null ? void 0 : r.reportingTag;
		return a != null && i != null && !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(a, i) ? o("WAResultOrError").makeError("reporting_tag_mismatch") : (e == null ? void 0 : e.messageId) !== (t == null ? void 0 : t.messageId) ? o("WAResultOrError").makeError("message_id_mismatch") : (e == null ? void 0 : e.senderId) !== (t == null ? void 0 : t.senderId) ? o("WAResultOrError").makeError("sender_id_mismatch") : o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").softCompareTimestamps(e == null ? void 0 : e.timestampMs, t == null ? void 0 : t.timestampMs) ? o("WAResultOrError").makeResult() : o("WAResultOrError").makeError("timestamp_ms_mismatch");
	}
	l.compareBinary = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary, l.checkProtobufCorrectness = e, l.compareProtobufs = u;
}), 98);
