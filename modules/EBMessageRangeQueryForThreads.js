__d("EBMessageRangeQueryForThreads", [
	"EBAPIConvertNativeToLS",
	"EBAPIDecryptionModule",
	"EBAPIQPLPoints",
	"EBAPISharedTypes",
	"EBDedupeLabyrinthMessages",
	"EBDeriveAndStoreEpochs",
	"EBGetClientState",
	"EBGraphQLQueryModule",
	"EBKnownMekFbidsTracker",
	"EBMessageRangeQueryForThreadsQuery.graphql",
	"EBMessageRangeQueryForThreadsQueryVariables",
	"EBMinosCheckWasmFeatureSupport",
	"EBMinosInterfaceTypes",
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
	"WAHashStringToNumber",
	"WAJids",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"err",
	"getSafeQplErrorMessage",
	"gkx",
	"handleRestoreMessagesGraphQLResponse",
	"justknobx",
	"qpl",
	"requireDeferred",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("requireDeferred")("EBDedupeEncryptedLabyrinthMessages").__setRef("EBMessageRangeQueryForThreads"), d = r("requireDeferred")("EBMinosDecryptAndValidateMessages").__setRef("EBMessageRangeQueryForThreads"), m = e !== void 0 ? e : e = n("EBMessageRangeQueryForThreadsQuery.graphql");
	function p(e) {
		var t, n = e.clientMekFbids, r = e.encryptedMinosMessages, a = e.minosDecryptionKeys, i = e.qplFlow, l = new Set();
		if (r.forEach(function(e) {
			var t = e.supplementalProtobufsV2, n = e.topLevelProtobufV2;
			l.add(n.mekFbid), t.forEach(function(e) {
				var t = e.mekFbid;
				return l.add(t);
			});
		}), l.size !== 0) {
			var s = Array.from(l), u;
			try {
				u = o("EBKnownMekFbidsTracker").getMissingMekFbids(s);
			} catch (e) {
				i.addPoint("mek_availability_audit", { string: {
					mek_audit_error: e.message,
					mek_audit_outcome: "crypto-library-unavailable"
				} });
				return;
			}
			var c = new Set(n != null ? n : []), d = new Set((a != null ? a : []).map(function(e) {
				return (e == null ? void 0 : e.id) == null ? null : o("EBMinosInterfaceTypes").unsafeCastToMekFbId(e.id);
			}).filter(Boolean)), m = new Set(c);
			d.forEach(function(e) {
				return m.add(e);
			});
			var p = u.filter(function(e) {
				return d.has(e);
			}), _ = u.filter(function(e) {
				return c.has(e) && !d.has(e);
			}), f = u.filter(function(e) {
				return !m.has(e);
			});
			i.addAnnotations({
				bool: { mek_upload_optimization_claim_sent: n != null },
				int: {
					meks_claimed_but_not_cached: _.length,
					meks_claimed_by_client: (t = n == null ? void 0 : n.length) != null ? t : 0,
					meks_missing: f.length,
					meks_needed: s.length,
					meks_not_in_cache: u.length,
					meks_pending_from_server: p.length,
					meks_served_by_server: d.size
				},
				string_array: {
					mek_fbids_claimed_but_not_cached: _,
					mek_fbids_missing: f
				}
			});
		}
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.instanceKey, a = e.restoreType, i = e.source, l = e.storage, _ = e.threads, f = yield o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport(), g = o("WAHashStringToNumber").hashStringToNumber(t != null ? t : r("uuidv4")()), h = r("qpl")._(521473850, "2910"), y = o("QPLFlow").startQPLFlow(h, {
				annotations: {
					bool: {
						await_minos_init_enabled: r("gkx")("14999"),
						mek_optimization_restore_on: r("gkx")("23988"),
						minos_rollout_enabled: r("gkx")("20879"),
						occam_only_mailbox_users: r("gkx")("16674")
					},
					int: {
						batchSize: _.length,
						messagesRequested: _.reduce(function(e, t) {
							var n;
							return e + ((n = t.numMessages) != null ? n : 0);
						}, 0)
					},
					string: { source: i != null ? i : "unknown" }
				},
				instanceKey: g,
				timeoutInMs: r("justknobx")._("2950")
			});
			try {
				var C, b, v;
				if (_.length === 0) throw y.endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_PARAMETERS), r("err")("invalid parameters");
				var S = yield o("EBGetClientState").getClientState(l);
				if (y.addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.CLIENT_STATE_RETRIEVED, { string: { device_id: (C = S == null ? void 0 : S.deviceId) != null ? C : (u || (u = o("I64"))).to_string((u || (u = o("I64"))).zero) } }), S == null) throw y.endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.NO_CLIENT_STATE, { string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.NO_CLIENT_STATE } }), r("err")("no client state");
				var R = S.backupId, L = S.deviceId, E = S.locally_available_epochs, k = S.mailboxRootKey, I = S.ocmfClientStateBlob;
				if (R == null || L == null || k == null || I == null) throw y.endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_CLIENT_STATE, {
					bool: {
						hasBackupId: R != null,
						hasDeviceId: L != null,
						hasMailboxRootKey: k != null,
						hasOcmfClientStateBlob: I != null
					},
					string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_CLIENT_STATE }
				}), r("err")("invalid client state");
				var T = r("gkx")("23988") ? o("EBKnownMekFbidsTracker").getKnownMekFbidsForQuery() : void 0, D = o("EBMessageRangeQueryForThreadsQueryVariables").messageRangeQueryForThreadsQueryVariables(_, a, (b = o("MAWCurrentUser").getAppID()) != null ? b : "0", L, E, k, I, i, T);
				y.addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.GRAPHQL_QUERY_START);
				var x = yield o("EBGraphQLQueryModule").ebGraphQLQueryModule(m, D);
				y.addPoint(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.GRAPHQL_QUERY_END);
				var $ = x == null || (v = x.viewer) == null || (v = v.encrypted_backup) == null || (v = v.mailbox) == null ? void 0 : v.messages_from_selected_threads;
				if ($ == null) throw y.endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_GRAPHQL_RESPONSE, { string: { error_description: o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.INVALID_GRAPHQL_RESPONSE } }), r("err")("invalid graphql response");
				var P = JSON.stringify($).length;
				y.addAnnotations({ int: { total_restore_response_size: P } });
				var N = !1;
				y.addPoint("decryption_start");
				var M = yield (s || (s = n("Promise"))).all($.map((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
						var a, u = _[t], m = u.chatJid, g = o("QPLFlow").startQPLFlow(r("qpl")._(521478797, "3533"), { annotations: {
							bool: {
								is_group_thread: o("WAJids").switchOnMsgrChatJidType(m, {
									group: function() {
										return !0;
									},
									user: function() {
										return !1;
									}
								}),
								minos_rollout_enabled: r("gkx")("20879"),
								occam_only_mailbox_users: r("gkx")("16674")
							},
							string: {
								chatJid: m,
								messageId: (a = u.from[1]) != null ? a : "",
								source: i != null ? i : "unknown"
							}
						} });
						try {
							var h, C = e;
							if (C == null) return g.endFail("invalid-graphql-response"), o("WAResultOrError").makeError("invalid-graphql-response");
							if (N === !0) return g.endFail("server-side-exception"), o("WAResultOrError").makeError("server-side-exception");
							var b = C.backup_id, v = C.encrypted_messages, S = C.epoch_derivation_set, L = C.exception_string, E = C.message_range_info, k = C.minos_decryption_keys, I = C.should_delete_mailbox, D = C.thread_not_found;
							if (L != null) return y.addAnnotations({ string: { serverExceptionString: L } }), D != null && D ? (g.endFail("thread-not-found-on-server"), o("WAResultOrError").makeError("thread-not-found-on-server")) : I === !0 ? (N = !0, g.endFail("server-side-exception"), o("WAResultOrError").makeError("server-side-exception")) : (g.endFail("server-side-exception"), o("WAResultOrError").makeError("server-side-exception"));
							yield o("EBDeriveAndStoreEpochs").deriveAndStoreEpochsNonLS(l, S);
							var x = E || {}, $ = x.has_more_after, P = x.has_more_before, M = x.next_message_timestamp_ms_after, w = x.next_message_timestamp_ms_before;
							if (P == null || $ == null || M == null || w == null) return g.endFail("missing-message-range-info"), o("WAResultOrError").makeError("missing-message-range-info");
							var A = o("WAJids").threadIdForChatJid(m), F = o("MpsTypes").toThreadId(m), O = f ? o("EBMinosInterfaceTypes").processMinosMessages(v) : [];
							p({
								clientMekFbids: T,
								encryptedMinosMessages: O,
								minosDecryptionKeys: k,
								qplFlow: g
							});
							var B = f ? yield d.load().then(function(e) {
								return e.minosDecryptAndValidateMessages({
									encryptedMinosMessages: O,
									entryPoint: "range_query",
									minosDecryptionKeys: k,
									qplFlow: y,
									source: i,
									threadId: F,
									validator: r("gkx")("5782") ? o("MAWMpsXMAValidationPreprocessor").xmaValidator() : function() {
										return (s || (s = n("Promise"))).resolve(o("WAResultOrError").makeResult());
									}
								});
							}) : o("WAResultOrError").makeResult({
								decryptionResult: new Map(),
								errorMessages: new Map()
							}), W = B.success === !0 && B.value.decryptionResult.size > 0 ? B.value.decryptionResult : null, q = B.success === !0 ? B.value.errorMessages : [(h = B.error) != null ? h : "unknown-error"], U = q != null ? Array.from(q.values()).flat() : [];
							y.addAnnotations({
								bool: { minos_decrypt_success: U.length === 0 },
								string_array: { minos_decrypt_errors: U }
							}), v.forEach(function(e) {
								var t, n = e == null ? void 0 : e.otid;
								if (n != null) {
									var r = o("MpsTypes").toMessageId(n), a = (t = W == null ? void 0 : W.has(r)) != null ? t : !1, i = B.success === !0 ? B.value.errorMessages : null, l = i == null ? void 0 : i.get(r), s = l != null && l.length > 0, u = a || s;
									u && s ? g.addPoint("minos_decrypt_check", {
										bool: { minos_decrypt_success: a },
										string: { messageId: n },
										string_array: { minos_decrypt_errors: l }
									}) : u ? g.addPoint("minos_decrypt_check", {
										bool: { minos_decrypt_success: a },
										string: { messageId: n }
									}) : g.addPoint("minos_decrypt_check", { string: { messageId: n } });
								}
							});
							var V = W != null && f ? yield c.load().then(function(e) {
								return e.dedupeEncryptedLabyrinthMessages(v, W, y);
							}) : v, H = o("handleRestoreMessagesGraphQLResponse").processMessageArray(V, b != null ? o("EBMinosInterfaceTypes").unsafeCastToBackupFbid(b) : R), G = H.encryptedNonLSEchoMessages, z = H.encryptedNonLSProtobufs, j = new Map();
							z.forEach(function(e) {
								var t = e.attachmentData;
								t != null && j.set(e.otid, t);
							}), g.addPoint("native_decryption_start");
							var K = yield o("EBAPIDecryptionModule").decryptUsingNativeJS(l, A, z, G, i, "range_query");
							if (!K.success) {
								var Q, X, Y = K.error, J = Y.message, Z = o("EBAPISharedTypes").EBAPIRestoreErrorValues.find(function(e) {
									return e === J;
								});
								return y.endFail("decrypt_labyrinth10_messages_failure", { string: {
									error_description: Y.message,
									errorStackTrace: (Q = Y.stack) != null ? Q : ""
								} }), g.endFail("decrypt_labyrinth10_messages_failure", { string: {
									error_description: Y.message,
									errorStackTrace: (X = Y.stack) != null ? X : ""
								} }), Z != null ? o("WAResultOrError").makeError(Z) : o("WAResultOrError").makeError("native-decryption-error");
							}
							y.addAnnotations({ bool: { labyrinth_10_toplevel_decrypt_success: K.value.decryptedEchoMessages.length === G.length && K.value.decryptedProtobufs.length === z.length } }), g.addPoint("native_decryption_end");
							var ee = K.value.decryptedEchoMessages, te = K.value.decryptedProtobufs, ne = f ? o("EBDedupeLabyrinthMessages").dedupeLabyrinthMessages(te, W) : te;
							y.addAnnotations({ int: {
								decryptedEchoMessageCount: ee.length,
								decryptedProtobufCount: ne.length
							} });
							var re = o("EBAPIConvertNativeToLS").convertNativeDecryptionResponseToDecryptedMessageType(ee, ne), oe = o("MawEchoToProtobufConverter").convertEchoMessagesToEBProtobufs(r("LSVec").toArray(re.echo).map(o("MAWJobDefinitions").toEncodedEchoMessage), u.chatJid), ae = o("MAWEncryptedBackupUtils").convertLSTypesToJSTypesForRestoreJob(re.protobuf).map(function(e) {
								var t = j.get(e.otid);
								return t != null ? babelHelpers.extends({}, e, { attachmentData: t }) : e;
							}), ie = r("gkx")("10800") ? [].concat(oe, ae) : [].concat(ae, oe);
							return g.addPoint("decryption_end"), g.endSuccess(), o("WAResultOrError").makeResult({
								args: u,
								messageRangeInfo: {
									has_more_after: $,
									has_more_before: P,
									next_message_timestamp_ms_after: M,
									next_message_timestamp_ms_before: w
								},
								messages: r("gkx")("10800") ? Array.from(new Map(ie.map(function(e) {
									return [e.otid, e];
								})).values()) : ie
							});
						} catch (e) {
							var le = o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e);
							return g.endFail("runtime-error", { string: { error_description: le } }), y.addAnnotations({ string: { error_description: le } }), o("WAResultOrError").makeError("runtime-error");
						}
					});
					return function(t, n) {
						return e.apply(this, arguments);
					};
				})()));
				y.addPoint("decryption_end");
				var w = M.reduce(function(e, t) {
					var n = t.success;
					return n === !1 ? e + 1 : e;
				}, 0), A = $.length;
				return w > 0 ? y.endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.BATCH_RESTORE_AND_DECRYPT_FAILURE, {
					bool: { allSuccessful: !1 },
					int: {
						attemptCount: A,
						errorCount: w
					},
					string_array: { decryption_and_validation_errors: M.map(function(e) {
						var t;
						return e.success ? "success" : (t = e.error) != null ? t : "unknown-error";
					}) }
				}) : y.endSuccess({
					bool: { allSuccessful: !0 },
					int: {
						attemptCount: A,
						errorCount: 0
					},
					string_array: { decryption_and_validation_errors: M.map(function(e) {
						var t;
						return (t = e.error) != null ? t : "success";
					}) }
				}), M;
			} catch (e) {
				throw y.endFail(o("EBAPIQPLPoints").EBMessageRestoreQueryQPLPoints.RUNTIME_ERROR, { string: { error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e) } }), e;
			}
		}), f.apply(this, arguments);
	}
	l.messageRangeQueryForThreads = _;
}), 98);
