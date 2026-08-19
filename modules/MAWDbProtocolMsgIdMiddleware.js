__d("MAWDbProtocolMsgIdMiddleware", [
	"FBLogger",
	"MAWDBMigrationUtils",
	"MAWJidUtils",
	"MAWODSProxy",
	"Random",
	"WAOdsEnums",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("justknobx")._("3300");
	function s(t) {
		return babelHelpers.extends({}, t, {
			get: function(n) {
				return t.get(n).then(function(e) {
					return d(e, "get"), e;
				});
			},
			getMany: function(n) {
				return t.getMany(n).then(function(e) {
					return e == null ? void 0 : e.map(function(e) {
						return d(e, "getMany"), e;
					});
				});
			},
			mutate: function(r) {
				return r.type === "add" ? r.values.map(function(e) {
					return u(e);
				}) : r.type === "put" && r.values.map(function(t) {
					t.protocolMsgId == null && (o("MAWDBMigrationUtils").mawDbMigrationVersion.version >= o("MAWDBMigrationUtils").MAWDB_DEDUPE_MSGS_MIGRATION_VERSION ? (o("Random").coinflip(e) && o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
						key: "null_protocol_msg_id.put_operation_after_migration_complete.migration_version_" + o("MAWDBMigrationUtils").mawDbMigrationVersion.version
					}), u(t)) : t.rowId < o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.cursorValue ? (o("Random").coinflip(e) && o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
						key: "null_protocol_msg_id.put_operation_below_migration_cursor.migration_version_" + o("MAWDBMigrationUtils").mawDbMigrationVersion.version
					}), u(t)) : o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.isRunning && t.rowId < o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.cursorValue + o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.batchSize && (o("Random").coinflip(e) && o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
						key: "null_protocol_msg_id.put_operation_in_current_migration_batch.migration_version_" + o("MAWDBMigrationUtils").mawDbMigrationVersion.version
					}), u(t)));
				}), t.mutate(r);
			},
			query: function(n) {
				return t.query(n).then(function(e) {
					var t;
					return e == null || (t = e.result) == null || t.map(function(e) {
						d(e, "query");
					}), e;
				});
			}
		});
	}
	function u(e) {
		e.protocolMsgId = o("MAWJidUtils").toProtocolMsgIdStringForMAWStorage(e);
	}
	function c(e) {
		return (e == null ? void 0 : e.rowId) == null && (e == null ? void 0 : e.externalId) == null;
	}
	function d(t, n) {
		try {
			if (c(t)) {
				n !== "get" && o("Random").coinflip(e) && r("FBLogger")("messenger_web").warn("Corrupted message row returned from DB, msg is null:%s, queryType: %s", t == null, n);
				return;
			}
			(t == null ? void 0 : t.protocolMsgId) == null && o("Random").coinflip(e) && (o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
				key: "null_protocol_msg_id.migration_version_" + o("MAWDBMigrationUtils").mawDbMigrationVersion.version + ".append_protocol_msg_id_for_put_operation_jk_" + String(!0)
			}), o("MAWDBMigrationUtils").mawDbMigrationVersion.version >= o("MAWDBMigrationUtils").MAWDB_DEDUPE_MSGS_MIGRATION_VERSION && r("FBLogger")("maw_db_migration").warn("Message with null protocolMsgId after the msg dedupe migration. type: %s, rowId: %s, externalId: %s", t == null ? void 0 : t.type, t == null ? void 0 : t.rowId, t == null ? void 0 : t.externalId)), t != null && t.protocolMsgId != null && t.protocolMsgId !== o("MAWJidUtils").toProtocolMsgIdStringForMAWStorage(t) && o("Random").coinflip(e) && o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
				key: "inconsistent_protocol_msg_id." + (t == null ? void 0 : t.type) + ".migration_version_" + o("MAWDBMigrationUtils").mawDbMigrationVersion.version + ".append_protocol_msg_id_for_put_operation_jk_" + String(!0)
			});
		} catch (e) {
			var a = r("getErrorSafe")(e);
			r("FBLogger")("messenger_web").catching(a).mustfix("Error while checking protocol msg id");
		}
	}
	function m() {
		return {
			create: function(t) {
				try {
					return babelHelpers.extends({}, t, { table: function(n) {
						return n !== "messages" ? t.table(n) : s(t.table(n));
					} });
				} catch (n) {
					var e = r("getErrorSafe")(n);
					return r("FBLogger")("messenger_web").catching(e).mustfix("Error applying Protocol MsgId Middleware"), t;
				}
			},
			name: "MAWDbProtocolMsgIdMiddleware",
			stack: "dbcore"
		};
	}
	l.appendProtocolMsgId = u, l.isCorruptedMsgRow = c, l.MAWDbProtocolMsgIdMiddleware = m;
}), 98);
