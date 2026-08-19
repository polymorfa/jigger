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
	"WAWebWidFactory",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _;
	function f(e, t) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			try {
				var n;
				if (typeof e == "string") {
					var r = yield o("WAWebMsgCollection").MsgCollection.getMessagesById([e]), a = r.messages;
					n = yield o("WAWebSendReactionMsgAction").sendReactionToMsg(a[0], t);
				} else n = yield o("WAWebSendReactionMsgAction").sendReactionToMsg(e, t);
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["sendReactionMsg: ", ""])), String(n));
			} catch (e) {
				o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["sendReactionMsg: error ", ""])), e);
			}
		}), g.apply(this, arguments);
	}
	f.doc = "Send a reaction message";
	function h(t, n) {
		n && t.forEach(function(e) {
			e.parentMsgKey = n.id.toString();
		}), o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(t).then(function(t) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateReactionsDebug: ", ""])), String(t));
		}).catch(function(e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateReactionsDebug: error ", ""])), String(e));
		});
	}
	h.doc = "Store in database reactions, use msg key from param if available";
	function y(e) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = String(e.id != null ? e.id : e), n = yield o("WAWebSchemaReactions").getReactionsTable().equals(["parentMsgKey"], t);
			return o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["getReactionsByParentDebug: ", ""])), JSON.stringify(n)), n;
		}), C.apply(this, arguments);
	}
	y.doc = "Get reactions from table based on parent msg";
	function b(e) {
		o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(e).then(function(e) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["changeOrphanStateReactionsDebug: ", ""])), String(e));
		}).catch(function(e) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["changeOrphanStateReactionsDebug: error ", ""])), String(e));
		});
	}
	b.doc = "Update orphans from reactions table database";
	function v(e, t) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			t === void 0 && (t = "👍");
			var n = o("WAWebDebugUtils").getSelectedChat(), a = n.id, i = Array.from(self.crypto.getRandomValues(new Uint8Array(8)), function(e) {
				return e.toString(16).padStart(2, "0");
			}).join(""), l = e != null ? e : "ORPHAN_TEST_" + i, s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), u = a.isGroup() ? o("WAWebWidFactory").asUserWidOrThrow(s) : void 0, c = new (r("WAWebMsgKey"))({
				from: s,
				to: a,
				id: yield r("WAWebMsgKey").newId(),
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
			}), g = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(f), h = yield o("WAWebSendMsgJob").encryptAndSendMsg({
				type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
				data: f
			}, g);
			return o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"sendOrphanReaction: sent ",
				" to fake parent ",
				" in ",
				""
			])), t, l, a.toString()), h;
		}), S.apply(this, arguments);
	}
	v.doc = "Send orphan reaction to active chat. Receiver sees it as orphan. Optional args: fakeParentStanzaId, reaction emoji";
	var R = {
		sendReactionMsg: f,
		sendOrphanReaction: v,
		createOrUpdateReactionsDebug: h,
		getReactionsByParentDebug: y,
		changeOrphanStateReactionsDebug: b
	};
	l.default = R;
}), 98);
