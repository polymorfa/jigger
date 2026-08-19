__d("EBMessagePointQuery", [
	"Base64Utils",
	"EBAPIConvertNativeToLS",
	"EBAPIDecryptionModule",
	"EBAPIQPLPoints",
	"EBAPISharedTypes",
	"EBAPIWorkerCheck",
	"EBDedupeEncryptedLabyrinthMessages",
	"EBDedupeLabyrinthMessages",
	"EBDeriveAndStoreEpochs",
	"EBGetClientState",
	"EBKnownMekFbidsTracker",
	"EBLS",
	"EBMessagePointQuery.graphql",
	"EBMinosCheckWasmFeatureSupport",
	"EBMinosDecryptAndValidateMessages",
	"EBMinosInterfaceTypes",
	"EBgenerateMPSMessageQuery",
	"FBLogger",
	"I64",
	"LSVec",
	"MAWCurrentUser",
	"MAWEncryptedBackupUtils",
	"MAWJobDefinitions",
	"MAWMpsXMAValidationPreprocessor",
	"MawEchoToProtobufConverter",
	"MpsTypes",
	"Promise",
	"QPLFlow",
	"WAJids",
	"WAResultOrError",
	"WmiMultiQplTracker",
	"WorkerRelay",
	"WorkerRelayNetwork",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"handleRestoreMessagesGraphQLResponse",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e !== void 0 ? e : e = n("EBMessagePointQuery.graphql");
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.chatJid, a = e.messageIds, i = e.source, l = yield o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport(), d = o("WmiMultiQplTracker").WmiMultiQplTracker.from(a.map(function(e) {
				return [e, o("QPLFlow").startQPLFlow(r("qpl")._(521474469, "2612"), { annotations: {
					bool: {
						mek_optimization_restore_on: r("gkx")("23988"),
						minos_rollout_enabled: r("gkx")("20879"),
						occam_only_mailbox_users: r("gkx")("16674")
					},
					string: {
						messageId: e,
						source: i != null ? i : "unknown"
					}
				} })];
			}));
			try {
				var m, _, f;
				if (!o("EBAPIWorkerCheck").runningInWorker()) return d.all().endFail(o("EBAPIQPLPoints").EBAPIQPLCommonErrorPoints.UNSUPPORTED_CONTEXT), o("WAResultOrError").makeError({ errorCode: "unsupported-context" });
				var g = (yield o("EBLS").init()).db;
				d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.LSDB_SINGLETON_RETRIEVED);
				var h = yield o("EBGetClientState").getClientState(g);
				if (d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.CLIENT_STATE_RETRIEVED, { string: { device_id: (m = h == null ? void 0 : h.deviceId) != null ? m : (u || (u = o("I64"))).to_string((u || (u = o("I64"))).zero) } }), h == null) return d.all().endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.NO_CLIENT_STATE, { string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.NO_CLIENT_STATE } }), o("WAResultOrError").makeError({ errorCode: "no-client-state" });
				var y = o("WAJids").threadIdForChatJid(t), C = h.backupId, b = h.deviceId, v = h.locally_available_epochs, S = h.mailboxRootKey, R = h.ocmfClientStateBlob;
				if (C == null || b == null || S == null || R == null) return d.all().endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_CLIENT_STATE, { string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_CLIENT_STATE } }), o("WAResultOrError").makeError({ errorCode: "invalid-client-state" });
				var L = "" + ((_ = o("MAWCurrentUser").getAppID()) != null ? _ : 0), E = r("gkx")("23988") ? o("EBKnownMekFbidsTracker").getKnownMekFbidsForQuery() : void 0, k = {
					restore_context: {
						act_thread_id: y,
						client_mek_fbids: E,
						site: "www",
						tam_thread_subtype: 0
					},
					success: {
						device_context: {
							device_id: b,
							locally_available_epochs: v,
							raw_tokens: {
								mailbox_root_key: o("Base64Utils").fromArrayBuffer(S),
								ocmf_client_state_blob: o("Base64Utils").fromArrayBuffer(R)
							}
						},
						mps_message_query: o("EBgenerateMPSMessageQuery").generateMPSMessageQueryForGraphQLQuery(y, [].concat(a))
					}
				}, I = {
					app_id: L,
					includeAttachmentData: r("gkx")("23960"),
					restore_payload_string: JSON.stringify(k),
					restore_type: "MESSAGE_QUERY_RESTORE"
				};
				d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.CREATE_WORKER_NETWORK_EXECUTE_START), yield o("WorkerRelayNetwork").createWorkerNetworkExecute(), d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.CREATE_WORKER_NETWORK_EXECUTE_END), d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.GRAPHQL_QUERY_START);
				var T = yield o("WorkerRelay").createWorkerQuery(c, I);
				d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.GRAPHQL_QUERY_END);
				var D = T == null || (f = T.viewer) == null || (f = f.encrypted_backup) == null || (f = f.mailbox) == null ? void 0 : f.messages_point_restore;
				if (D == null) return d.all().endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_GRAPHQL_RESPONSE, { string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_GRAPHQL_RESPONSE } }), o("WAResultOrError").makeError({ errorCode: "invalid-graphql-response" });
				var x = D;
				if ((x == null ? void 0 : x.encrypted_messages) == null) return d.all().endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_GRAPHQL_RESPONSE, { string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_GRAPHQL_RESPONSE } }), o("WAResultOrError").makeError({ errorCode: "invalid-graphql-response" });
				var $ = x.backup_id, P = x.encrypted_messages, N = x.epoch_derivation_set, M = x.exception_string, w = x.minos_decryption_keys, A = new Set(P.map(function(e) {
					return e == null ? void 0 : e.otid;
				}).filter(Boolean));
				a.forEach(function(e) {
					A.has(e) || (d.addPoint(e, "message-not-in-backup"), d.endSuccess(e));
				});
				var F = p(P, d.all());
				if (d.all().addAnnotations({ int: {
					encrypted_messages_with_content_count: F,
					total_restore_response_size: JSON.stringify(P).length
				} }), M != null) return d.all().endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.SERVER_SIDE_EXCEPTION, { string: {
					error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.SERVER_SIDE_EXCEPTION,
					exception: M
				} }), o("WAResultOrError").makeError({ errorCode: "server-side-exception" });
				$ == null && d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.BACKUP_ID_NULL), d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.DERIVE_AND_STORE_EPOCHS_START);
				var O = N;
				d.all().addAnnotations({ bool: { hasEpochs: O != null && O.epoch_edges.length > 0 } }), yield o("EBDeriveAndStoreEpochs").deriveAndStoreEpochsNonLS(g, O), d.all().addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.DERIVE_AND_STORE_EPOCHS_END), d.all().addPoint("decryption_start");
				var B = P, W = l ? o("EBMinosInterfaceTypes").processMinosMessages(B) : [], q = l ? yield o("EBMinosDecryptAndValidateMessages").minosDecryptAndValidateMessages({
					encryptedMinosMessages: W,
					entryPoint: "point_query",
					minosDecryptionKeys: w,
					qplFlow: d.all(),
					source: i != null ? i : "unknown",
					threadId: o("MpsTypes").toThreadId(t),
					validator: r("gkx")("5782") ? o("MAWMpsXMAValidationPreprocessor").xmaValidator() : function() {
						return (s || (s = n("Promise"))).resolve(o("WAResultOrError").makeResult());
					}
				}) : o("WAResultOrError").makeResult({
					decryptionResult: new Map(),
					errorMessages: new Map()
				}), U = q.success === !0 && q.value.decryptionResult.size > 0 ? q.value.decryptionResult : null, V = q.success === !0 ? q.value.errorMessages : null;
				a.forEach(function(e) {
					var t, n = (t = U == null ? void 0 : U.has(e)) != null ? t : !1, r = V == null ? void 0 : V.get(e), o = r != null && r.length > 0;
					d.addPoint(e, "minos_decrypt_check"), (n || o) && d.addAnnotations(e, { bool: { minos_decrypt_success: n } }), o && d.addAnnotations(e, { string_array: { minos_decrypt_errors: r } });
				});
				var H = U != null && l ? o("EBDedupeEncryptedLabyrinthMessages").dedupeEncryptedLabyrinthMessages(B, U, d.all()) : B;
				d.all().addAnnotations({ int: { deduped_encrypted_messages: p(H) } });
				var G = o("handleRestoreMessagesGraphQLResponse").processMessageArray(H, $ != null ? o("EBMinosInterfaceTypes").unsafeCastToBackupFbid($) : C), z = G.encryptedNonLSEchoMessages, j = G.encryptedNonLSProtobufs, K = new Map();
				j.forEach(function(e) {
					var t = e.attachmentData;
					t != null && K.set(e.otid, t);
				}), d.all().addPoint("native_decryption_start");
				var Q = yield o("EBAPIDecryptionModule").decryptUsingNativeJS(g, y, j, z, i, "point_query");
				if (Q.success) d.all().addPoint("native_decryption_end");
				else {
					var X = Q.error;
					if (a.forEach(function(e) {
						var t;
						d.addAnnotations(e, {
							bool: { native_decryption_error: !0 },
							string: {
								native_error_description: X.message,
								native_errorStackTrace: (t = X.stack) != null ? t : ""
							}
						}), U != null && U.has(e) || d.endFail(e, "decrypt_labyrinth10_messages_failure");
					}), U != null && U.size > 0) r("FBLogger")("wmi_eb").info("Native decryption batch failure, but Minos decrypted %s messages — continuing", String(U.size)), d.all().addPoint("native_decryption_end");
					else {
						var Y = new Set(P.map(function(e) {
							return e == null ? void 0 : e.otid;
						}).filter(Boolean)), J = X.message, Z = o("EBAPISharedTypes").EBAPIRestoreErrorValues.find(function(e) {
							return e === J;
						});
						return Z != null ? o("WAResultOrError").makeError({
							encryptedOtids: Y,
							errorCode: Z
						}) : o("WAResultOrError").makeError({
							encryptedOtids: Y,
							errorCode: "native-decryption-error"
						});
					}
				}
				var ee = Q.success ? Q.value.decryptedEchoMessages : [], te = Q.success ? Q.value.decryptedProtobufs : [], ne = l ? o("EBDedupeLabyrinthMessages").dedupeLabyrinthMessages(te, U) : te, re = ee.length + ne.length;
				d.all().addAnnotations({
					bool: { decrypted_count_equals_encrypted_count: F === re },
					int: {
						decrypted_echo_count: ee.length,
						decrypted_messages_count: ne.length + ee.length,
						decrypted_protobuf_count: ne.length
					}
				}), d.all().addPoint("convert_native_to_decrypted_type_start");
				var oe = o("EBAPIConvertNativeToLS").convertNativeDecryptionResponseToDecryptedMessageType(ee, ne);
				d.all().addPoint("convert_native_to_decrypted_type_end");
				var ae = r("LSVec").toArray(oe.echo), ie = oe.protobuf, le = ae.map(function(e) {
					return o("MAWJobDefinitions").toEncodedEchoMessage(e);
				}), se = o("MawEchoToProtobufConverter").convertEchoMessagesToEBProtobufs(le, t).concat(o("MAWEncryptedBackupUtils").convertLSTypesToJSTypesForRestoreJob(ie).map(function(e) {
					var t = K.get(e.otid);
					return t != null ? babelHelpers.extends({}, e, { attachmentData: t }) : e;
				})), ue = new Map(se.map(function(e) {
					return [e.otid, e];
				})), ce = Array.from(ue.values());
				return d.all().addAnnotations({ int: { decrypted_message_result_count: ce.length } }), d.all().addPoint("decryption_end"), a.forEach(function(e) {
					var t = ue.has(e);
					d.addAnnotations(e, { bool: { labyrinth_10_toplevel_decrypt_success: t } }), t ? d.endSuccess(e) : d.endFail(e, "message-not-found");
				}), o("WAResultOrError").makeResult(ce);
			} catch (e) {
				var de, me = r("getErrorSafe")(e);
				return d.all().endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.RUNTIME_ERROR, { string: {
					error_description: me.message,
					error_stackTrace: (de = me.stack) != null ? de : ""
				} }), r("FBLogger")("wmi_eb").catching(me).mustfix("Runtime error performing messagePointQuery: %s", me.message), o("WAResultOrError").makeError({ errorCode: "runtime-error" });
			}
		}), m.apply(this, arguments);
	}
	function p(e, t) {
		var n = 0, r = !1, o = !1, a = !1, i = !1;
		for (var l of e) {
			var s, u = l.protobuf_stanzas, c = (u == null ? void 0 : u.top_level_protobuf) != null, d = (u == null ? void 0 : u.top_level_protobuf_unencrypted) != null, m = (u == null ? void 0 : u.top_level_protobuf_v2) != null, p = ((s = l.echo_document) == null ? void 0 : s.echo_document_string) != null;
			r = r || c, o = o || m, a = a || p, i = i || d, (c || d || m || p) && (n += 1);
		}
		return t != null && t.addAnnotations({ bool: {
			has_echo_document: a,
			has_lab1_messages: r,
			has_lab11_messages: o,
			has_unencrypted_protobuf: i
		} }), n;
	}
	l.messagePointQuery = d;
}), 98);
