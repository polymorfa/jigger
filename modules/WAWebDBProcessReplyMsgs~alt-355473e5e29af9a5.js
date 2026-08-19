__d("WAWebDBProcessReplyMsgs", [
	"WADeepEquals",
	"WAWebBatchedStatusIdUtils",
	"WAWebDBMessageSerialization",
	"WAWebDBMsgUtils",
	"WAWebGroupType",
	"WAWebMessageEditUtils",
	"WAWebModelStorageUtils",
	"WAWebMsgGetters",
	"WAWebMsgKey",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"filterObject",
	"isStringNullOrEmpty",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		if (e.length) {
			var t = await o("WAWebModelStorageUtils").getStorage().lock(["message"], async function(t) {
				var n = t[0], a = new Set();
				e.forEach(function(e) {
					var t = s(e);
					t !== "missing-stanza-id" && a.add(t.toString());
				});
				var i = (await o("WAWebDBMsgUtils").getMsgsByMsgKey(Array.from(a.values()))).filter(function(e) {
					var t = o("WAWebMessageEditUtils").getMsgEditType(e.type);
					return t != null;
				}), l = new Map(i.map(function(e) {
					return [e.id.toString(), e];
				})), u = e.filter(function(e) {
					var t = s(e);
					return t === "missing-stanza-id" ? !1 : l.has(t.toString());
				});
				if (u.length) {
					var d = [];
					if (u.forEach(function(e) {
						var t = s(e);
						if (t !== "missing-stanza-id") {
							var n = r("nullthrows")(l.get(t.toString()));
							e.quotedMsg == null ? d.push(babelHelpers.extends({}, e, { quotedMsg: n })) : c(r("nullthrows")(e.quotedMsg), n) && d.push(babelHelpers.extends({}, e, { quotedMsg: n }));
						}
					}), !!d.length) return await n.bulkCreateOrMerge(d.map(function(e) {
						return o("WAWebDBMessageSerialization").dbRowFromMessage(e);
					})), d;
				}
			});
			t != null && t.length && t.forEach(function(t) {
				var n = r("nullthrows")(e.find(function(e) {
					return e.id.equals(t.id);
				}));
				n.quotedMsg = t.quotedMsg;
			});
		}
	}
	function s(e) {
		var t, n;
		if (r("isStringNullOrEmpty")(e.quotedStanzaID)) return "missing-stanza-id";
		var a = (t = e.quotedParticipant) != null ? t : void 0, i = (n = e.quotedRemoteJid) != null ? n : e.id.remote, l = e.quotedStanzaID, s = l != null && r("WAWebWid").isStatus(i) ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(l) : l;
		return new (r("WAWebMsgKey"))({
			id: s,
			fromMe: o("WAWebUserPrefsMeUser").isMeAccount(a),
			remote: i,
			participant: o("WAWebMsgGetters").getIsGroupMsg(e) || r("WAWebWid").isStatus(i) || a != null && a.isBot() ? a : void 0
		});
	}
	var u = {
		inviteGrpType: o("WAWebGroupType").GroupType.DEFAULT,
		thumbnail: "",
		body: "",
		caption: "",
		interactiveAnnotations: [],
		scanLengths: [],
		staticUrl: "",
		pageCount: 0
	};
	function c(e, t) {
		var n = r("filterObject")(e, function(e, t) {
			return e != null && t !== "kind";
		}), a = r("filterObject")(t, function(e, t) {
			return Object.prototype.hasOwnProperty.call(n, t) && t !== "kind";
		}), i = d(n), l = d(a);
		return !o("WADeepEquals").deepEqual(i, l);
	}
	function d(e) {
		var t = babelHelpers.extends({}, u);
		for (var n of Object.entries(e)) {
			var r = n[0], o = n[1];
			o !== void 0 && (t[r] = o);
		}
		return t;
	}
	l.processReplyMsgs = e, l.createQuotedMsgKey = s;
}), 98);
