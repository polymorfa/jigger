__d("MAWDBDedupeMsgsMigration", [
	"MAWDBMigrationUtils",
	"MAWDbMediaTxns",
	"MAWDbProtocolMsgIdMiddleware",
	"MAWDbReactionsTxns",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MWFBLogger",
	"WAMsgType",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MWFBLogger").MWLogger().tags(["maw_db", "dedupe_msgs_migration"]), d = r("justknobx")._("3525"), m = function() {
		return !1;
	}, p = "MAWDBDedupeMsgsMigration", _ = 5, f = {
		batchSize: d,
		canExecute: function() {
			return !0;
		},
		dryRun: m,
		execution: function(n, r, a, i) {
			var t;
			return o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.cursorValue = n, o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.batchSize = r, o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.isRunning = !0, o("MAWIndexedDb").makeMsgrTransactor({
				media: (t = o("MAWTransactionMode")).READONLY,
				mediaBackup: t.READONLY,
				messages: t.READWRITE,
				reactions: t.READONLY,
				unrenderedMessages: t.READONLY,
				xma: t.READONLY
			}, "dedupeMsgsMigration", function(t) {
				return function() {
					return t.messages.where("rowId").aboveOrEqual(n).limit(r).toArray().then(function(n) {
						var a = n.length === r, l = a ? n[n.length - 1].rowId : null;
						k(i, "msgsProcessed", n.length), I(i, "versionInternal", _);
						var s = g(n);
						return o("MAWDexieTable").dexieAll(s.map(function(n) {
							return h(t, n).then(function(r) {
								return r.length <= 1 ? m() ? void 0 : (o("MAWDbProtocolMsgIdMiddleware").appendProtocolMsgId(n), t.messages.put(n)) : o("MAWDexieTable").dexieAll(r.map(function(e) {
									return L(t, e);
								})).then(function(r) {
									var a = b(r, i), l = a[0], s = a[1];
									return o("MAWDbProtocolMsgIdMiddleware").appendProtocolMsgId(l.msg), T(l, s, i).then(function() {
										var r = s.map(function(e) {
											return k(i, "deleted_" + e.msg.type), e.msg.rowId;
										});
										if (c.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
											"Found duplicate messages with an external ID of ",
											", selected principal message with a rowId of ",
											", and deleting ",
											" duplicates with rowIds of: ",
											""
										])), n.externalId, l.msg.rowId, s.length, r.join(", ")), !m()) return o("MAWDexieTable").dexieAll([t.messages.bulkDelete(r), t.messages.put(l.msg)]);
									});
								});
							});
						})).then(function() {
							return o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.isRunning = !1, l != null && (o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.cursorValue = l), l;
						});
					});
				};
			})();
		},
		label: p,
		startCursor: 0,
		type: "batched"
	};
	function g(e) {
		var t = new Map(), n = [];
		for (var r of e) {
			var o = t.get(r.threadJid);
			if (o == null) t.set(r.threadJid, new Set([r.externalId]));
			else {
				if (o.has(r.externalId)) continue;
				o.add(r.externalId);
			}
			n.push(r);
		}
		return n;
	}
	function h(e, t) {
		return e.messages.where("externalId").equals(t.externalId).filter(function(e) {
			return e.threadJid === t.threadJid;
		}).toArray();
	}
	function y(e) {
		return Math.max.apply(Math, e.reactions.map(function(e) {
			return e.rowId;
		}));
	}
	function C(e) {
		return Math.max.apply(Math, e.mediaBackups.map(function(e) {
			return e.mediaBackupId;
		}));
	}
	function b(e, t) {
		for (var n = function(n, r) {
			var e, a, i, l;
			if (n.msg.type === o("WAMsgType").MSG_TYPE.CIPHERTEXT) return [!1, "ciphertext"];
			if (r.msg.type === o("WAMsgType").MSG_TYPE.CIPHERTEXT) return [!0, "ciphertext"];
			var s = (e = n.msg.editCount) != null ? e : 0, u = (a = r.msg.editCount) != null ? a : 0;
			if (s > u) return [!0, "editCount"];
			if (u > s) return [!1, "editCount"];
			var c = v(function(e) {
				var t;
				return (t = e.media) == null ? void 0 : t.mediaId;
			}, r, n, "latestMedia");
			if (c != null) return S(r.msg, n.msg, "latestMedia", t), c;
			var d = v(y, r, n, "latestReaction");
			if (d != null) return S(r.msg, n.msg, "latestReaction", t), d;
			var m = v(function(e) {
				var t;
				return (t = e.xma) == null ? void 0 : t.xmaId;
			}, r, n, "latestXma");
			if (m != null) return S(r.msg, n.msg, "latestXma", t), m;
			var p = v(C, r, n, "latestMediaBackup");
			return p != null ? (S(r.msg, n.msg, "latestMediaBackup", t), p) : n.msg.sortOrderMs != null && r.msg.sortOrderMs != null && n.msg.sortOrderMs > r.msg.sortOrderMs ? [!0, "sortOrderMS"] : ((i = n.msg.serverTs) != null ? i : 0) > ((l = r.msg.serverTs) != null ? l : 0) ? [!0, "serverTs"] : (S(r.msg, n.msg, "rowIdOrder", t), [!1, "rowIdOrder"]);
		}, r = [], a = e.length - 1, i = e[a], l = 0; l < a; l++) {
			var s = e[l], u = n(s, i), c = u[0], d = u[1];
			c ? (r.push(i), i = s) : r.push(s), k(t, "tieBraker_" + d);
		}
		return [i, r];
	}
	function v(e, t, n, r) {
		var o, a, i, l;
		if (((o = e(n)) != null ? o : 0) > ((a = e(t)) != null ? a : 0)) return [!0, r];
		if (((i = e(t)) != null ? i : 0) > ((l = e(n)) != null ? l : 0)) return [!1, r];
	}
	function S(e, t, n, o, a) {
		a === void 0 && (a = new Set([
			"altIndex",
			"msgId",
			"rowId",
			"rowIdOrder",
			"updatedAt_S456130",
			"reportingMeta"
		]));
		var i = Object.keys(e), l = Object.keys(t), u = new Set([].concat(i, l)), d = [];
		u.forEach(function(n) {
			if (!a.has(n)) {
				if (!i.includes(n) || !l.includes(n)) {
					d.push(n);
					return;
				}
				try {
					JSON.stringify(e[n]) !== JSON.stringify(t[n]) && d.push(n);
				} catch (e) {
					c.catching(r("getErrorSafe")(e)).MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to compare DbMsg property of ", ""])), n);
					return;
				}
			}
		});
		var m = d.length, p = new Set([
			"ebTimestampMs",
			"serverTs",
			"sortOrderMs",
			"ts"
		]);
		m === 0 ? (k(o, n + "_tiebreaker_principal_and_duplicate_msgs_equal"), c.debug("For tiebreaker, %s, all properties found to be equal between principal and duplicate messages", n)) : d.every(function(e) {
			return p.has(e);
		}) ? (k(o, n + "_tiebreaker_principal_and_duplicate_msgs_equal_except_timestamps"), c.debug("For tiebreaker, %s, all properties found to be equal between principal and duplicate messages except timestamp properties: %s", n, d.join(", "))) : (k(o, n + "_tiebreaker_principal_and_duplicate_msgs_not_equal"), c.debug("For tiebreaker, %s, found %d differing properties between principal and duplicate messages: %s", n, m, d.join(", ")));
	}
	function R(e, t, n) {
		t.forEach(function(t) {
			E(e.media, t.media, function(e) {
				return e != null;
			}, function(e, t) {
				return (e == null ? void 0 : e.plaintextHash) === (t == null ? void 0 : t.plaintextHash);
			}, "media", n, t), E(e.mediaBackups, t.mediaBackups, function(e) {
				return e.length > 0;
			}, function(e, t) {
				if ((e == null ? void 0 : e.length) !== (t == null ? void 0 : t.length)) return !1;
				for (var n = e.sort(function(e, t) {
					return e.objectId.localeCompare(t.objectId);
				}), r = t.sort(function(e, t) {
					return e.objectId.localeCompare(t.objectId);
				}), o = 0; o < e.length; o++) if (n[o].objectId !== r[o].objectId || n[o].fbid !== r[o].fbid) return !1;
				return !0;
			}, "mediaBackup", n, t), E(e.reactions, t.reactions, function(e) {
				return e.length > 0;
			}, function(e, t) {
				if (e.length !== t.length) return !1;
				var n = function(n) {
					if (t.find(function(e) {
						return e.reaction === n.reaction && e.author === n.author && e.reactToExternalId === n.reactToExternalId;
					}) == null) return { v: !1 };
				}, r;
				for (var o of e) if (r = n(o), r) return r.v;
				return !0;
			}, "reactions", n, t), E(e.unrenderedMsg, t.unrenderedMsg, function(e) {
				return e != null;
			}, function(e, t) {
				return (e == null ? void 0 : e.type) === (t == null ? void 0 : t.type) && (e == null ? void 0 : e.author) === (t == null ? void 0 : t.author) && (e == null ? void 0 : e.msgContent) === (t == null ? void 0 : t.msgContent) && (e == null ? void 0 : e.xmaMessageType) === (t == null ? void 0 : t.xmaMessageType);
			}, "unrenderedMsg", n, t), E(e.xma, t.xma, function(e) {
				return e != null;
			}, function(e, t) {
				var n, r;
				return (e == null ? void 0 : e.author) === (t == null ? void 0 : t.author) && (e == null || (n = e.ctas) == null ? void 0 : n.length) === (t == null || (r = t.ctas) == null ? void 0 : r.length) && (e == null ? void 0 : e.headerMediaPlaintextHash) === (t == null ? void 0 : t.headerMediaPlaintextHash) && (e == null ? void 0 : e.headerTitle) === (t == null ? void 0 : t.headerTitle) && (e == null ? void 0 : e.isTombstoned) === (t == null ? void 0 : t.isTombstoned) && (e == null ? void 0 : e.subtitleText) === (t == null ? void 0 : t.subtitleText) && (e == null ? void 0 : e.targetType) === (t == null ? void 0 : t.targetType) && (e == null ? void 0 : e.titleText) === (t == null ? void 0 : t.titleText) && (e == null ? void 0 : e.xmaDataclass) === (t == null ? void 0 : t.xmaDataclass) && (e == null ? void 0 : e.xmaLayoutType) === (t == null ? void 0 : t.xmaLayoutType);
			}, "xma", n, t);
		});
	}
	function L(e, t) {
		return o("MAWDexieTable").dexieAll([
			o("MAWDbMediaTxns").maybeGetMediaFromMediaId(e, t.mediaId),
			o("MAWDbMediaTxns").maybeGetMediaBackupRowFromMsgId(e, t.msgId),
			o("MAWDbReactionsTxns").getReactionsForMessage(e, t),
			e.unrenderedMessages.get({ msgId: t.msgId }),
			o("MAWDbXMATxns").maybeGetXMAFromAssociatedMsgId(e, t.msgId)
		]).then(function(e) {
			var n = e[0], r = e[1], o = e[2], a = e[3], i = e[4];
			return {
				media: n,
				mediaBackups: r != null ? r : [],
				msg: t,
				reactions: o != null ? o : [],
				unrenderedMsg: a,
				xma: i
			};
		});
	}
	function E(e, t, n, o, a, i, l) {
		try {
			n(e) && !n(t) ? k(i, "associated_" + a + "_principal_only") : !n(e) && n(t) ? (k(i, "associated_" + a + "_duplicate_only"), k(i, "associated_" + a + "_duplicate_only_type_" + l.msg.type)) : n(e) && n(t) && (o(e, t) ? k(i, "associated_" + a + "_principal_and_duplicate_equal") : k(i, "associated_" + a + "_principal_and_duplicate_not_equal"));
		} catch (e) {
			var s = r("getErrorSafe")(e);
			c.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to compare linked entities with error: ", ""])), s.message);
		}
	}
	function k(e, t, n) {
		var r, o, a;
		n === void 0 && (n = 1), e.int = babelHelpers.extends({}, e.int, (a = {}, a[t] = ((r = (o = e.int) == null ? void 0 : o[t]) != null ? r : 0) + n, a));
	}
	function I(e, t, n) {
		var r;
		e.int = babelHelpers.extends({}, e.int, (r = {}, r[t] = n, r));
	}
	function T(e, t, n) {
		return R(e, t, n), o("MAWDexieTable").dexieResolve();
	}
	l.DEDUPE_MSGS_MIGRATION_LABEL = p, l.dedupeMsgsMigration = f;
}), 98);
