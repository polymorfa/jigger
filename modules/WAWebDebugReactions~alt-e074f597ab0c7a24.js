__d("WAWebDebugReactions", [
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebCheckUpdateOrphanReactions",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebDebugUtils",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgKeyUtils",
	"WAWebMsgType",
	"WAWebSchemaReactions",
	"WAWebSendMsgJob",
	"WAWebSendMsgMetricReporter",
	"WAWebSendMsgTypes",
	"WAWebSendReactionMsgAction",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _;
	async function f(t, n) {
		try {
			var r;
			if (typeof t == "string") {
				var a = await o("WAWebMsgCollection").MsgCollection.getMessagesById([t]), i = a.messages;
				r = await o("WAWebSendReactionMsgAction").sendReactionToMsg(i[0], n);
			} else r = await o("WAWebSendReactionMsgAction").sendReactionToMsg(t, n);
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendReactionMsg: ", ""])), String(r));
		} catch (e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["sendReactionMsg: error ", ""])), e);
		}
	}
	f.doc = "Send a reaction message";
	function g(e, t) {
		t && e.forEach(function(e) {
			e.parentMsgKey = t.id.toString();
		}), o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(e).then(function(e) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateReactionsDebug: ", ""])), String(e));
		}).catch(function(e) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateReactionsDebug: error ", ""])), String(e));
		});
	}
	g.doc = "Store in database reactions, use msg key from param if available";
	async function h(e) {
		var t = String(e.id != null ? e.id : e), n = await o("WAWebSchemaReactions").getReactionsTable().equals(["parentMsgKey"], t);
		return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["getReactionsByParentDebug: ", ""])), JSON.stringify(n)), n;
	}
	h.doc = "Get reactions from table based on parent msg";
	function y(e) {
		o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(e).then(function(e) {
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["changeOrphanStateReactionsDebug: ", ""])), String(e));
		}).catch(function(e) {
			o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["changeOrphanStateReactionsDebug: error ", ""])), String(e));
		});
	}
	y.doc = "Update orphans from reactions table database";
	async function C(e, t) {
		t === void 0 && (t = "👍");
		var n = o("WAWebDebugUtils").getSelectedChat(), a = n.id, i = Array.from(self.crypto.getRandomValues(new Uint8Array(8)), function(e) {
			return e.toString(16).padStart(2, "0");
		}).join(""), l = e != null ? e : "ORPHAN_TEST_" + i, s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), u = a.isGroup() ? o("WAWebWidFactory").asUserWidOrThrow(s) : void 0, c = new (r("WAWebMsgKey"))({
			from: s,
			to: a,
			id: await r("WAWebMsgKey").newId(),
			participant: u,
			selfDir: "out"
		}), d = new (r("WAWebMsgKey"))({
			fromMe: !1,
			remote: a,
			id: l
		}), m = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(c, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), p = o("WATimeUtils").unixTime(), f = babelHelpers.extends({ id: c }, m, {
			reactionParentKey: d,
			type: o("WAWebMsgType").MSG_TYPE.REACTION,
			kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
			t: p,
			viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
			ack: o("WAWebAck").ACK.CLOCK,
			reactionText: t,
			reactionTimestamp: p * 1e3,
			read: !0
		}), g = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(f), h = await o("WAWebSendMsgJob").encryptAndSendMsg({
			type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
			data: f
		}, g);
		return o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
			"sendOrphanReaction: sent ",
			" to fake parent ",
			" in ",
			""
		])), t, l, a.toString()), h;
	}
	C.doc = "Send orphan reaction to active chat. Receiver sees it as orphan. Optional args: fakeParentStanzaId, reaction emoji";
	var b = {
		sendReactionMsg: f,
		sendOrphanReaction: C,
		createOrUpdateReactionsDebug: g,
		getReactionsByParentDebug: h,
		changeOrphanStateReactionsDebug: y
	};
	l.default = b;
}), 98);
