__d("WAWebReactAddonMessageProcessorUtils", [
	"WAWebAddonDBTable",
	"WAWebApiContact",
	"WAWebCastToReactionMsg",
	"WAWebMsgGetters",
	"WAWebMsgKey",
	"WAWebMsgType",
	"WAWebSchemaReactions",
	"WAWebWidFactory",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		return [e.reactionParentKey, r("nullthrows")(o("WAWebMsgGetters").getSender(e))];
	}
	function s(t) {
		return e(t).map(function(e) {
			return e.toString();
		}).join("-");
	}
	async function u(t) {
		var n = new Map(), r = t.map(e), a = await o("WAWebAddonDBTable").addonDBTable.bulkGetByParentAndSender(o("WAWebMsgType").MSG_TYPE.REACTION, r);
		for (var i of a) {
			var l = o("WAWebCastToReactionMsg").assertReactionMsgData(i), u = s(l);
			n.set(u, l.reactionTimestamp);
		}
		return function(e) {
			var t = s(e);
			return n.get(t);
		};
	}
	async function c(t) {
		var n = t.map(e), a = [];
		for (var i of n) {
			var l = i[0], s = i[1], u = s.isUser() ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(s)) : void 0;
			u && a.push([l.toString(), u.toString()]);
		}
		var c = function(t, n) {
			return t.toString() + "_" + n.toString();
		}, d = await o("WAWebSchemaReactions").getReactionsTable().anyOf(["parentMsgKey", "senderUserJid"], a), m = new Set();
		return d.filter(Boolean).forEach(function(e) {
			var t = [e.parentMsgKey, e.senderUserJid], n = t[0], a = t[1];
			m.add(c(r("WAWebMsgKey").from(n), o("WAWebWidFactory").createUserWidOrThrow(a)));
		}), t.map(function(t) {
			var n = e(t), r = n[0], a = n[1], i = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(a));
			if (i == null || !m.has(c(r, i))) return t;
			var l = t.author, s = t.from;
			if (l != null && l.isRegularUser()) {
				var u = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(l));
				u != null && (l = u);
			}
			if (t.from.isRegularUser()) {
				var d = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t.from));
				d && (s = d);
			}
			return babelHelpers.extends({}, t, {
				from: s,
				author: l
			});
		});
	}
	l.createGetReactionTimestamp = u, l.overrideExistingReactions = c;
}), 98);
