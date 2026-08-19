__d("WAWebDeleteChatAction", [
	"fbt",
	"JSResourceForInteraction",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebBizChatAssignmentAction",
	"WAWebBizCoexUtils",
	"WAWebChatDeleteBridge",
	"WAWebChatFlowTypes",
	"WAWebContactCollection",
	"WAWebFrontendChatGetters",
	"WAWebLabelCollection",
	"WAWebMaybeClearChatAiThreads",
	"WAWebStateUtils",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = [
		o("WAWebChatFlowTypes").ChatKindType.Chat,
		o("WAWebChatFlowTypes").ChatKindType.Group,
		o("WAWebChatFlowTypes").ChatKindType.Community
	];
	function m(e, t) {
		return t === void 0 && (t = !0), g(o("WAWebStateUtils").unproxy(e), t);
	}
	var p = Object.freeze({
		Community: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Group: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Broadcast: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Chat: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	});
	function _(e) {
		var t = "";
		if (e != null) switch (e) {
			case o("WAWebChatFlowTypes").ChatKindType.Community:
				t = p.Community();
				break;
			case o("WAWebChatFlowTypes").ChatKindType.Group:
				t = p.Group();
				break;
			case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
				t = p.Broadcast();
				break;
			case o("WAWebChatFlowTypes").ChatKindType.Chat:
				t = p.Chat();
				break;
			case o("WAWebChatFlowTypes").ChatKindType.Newsletter: break;
		}
		else t = p.Chat();
		return new (o("WAWebActionToast.react")).ActionType(t);
	}
	async function f(e) {
		var t = await r("JSResourceForInteraction")("WAWebBizRemoveDirectConnectionKeysBridge").__setRef("WAWebDeleteChatAction").load(), n = t.removeDirectConnectionKeys;
		await n(e);
	}
	function g(t, n) {
		if (o("WAWebBizCoexUtils").deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(t.id), t.promises.sendDelete) return t.promises.sendDelete;
		var r = t.getLastMsgKeyForAction(), a = r ? t.msgs.get(r) : void 0, i = t.promises.sendDelete = o("WAWebChatDeleteBridge").sendConversationDelete({
			id: t.id,
			tcToken: t.tcToken,
			tcTokenTimestamp: t.tcTokenTimestamp
		}), l = o("WAWebFrontendChatGetters").getKind(t), u = i.then(async function(e) {
			if (e.status === 200) {
				if (o("WAWebLabelCollection").LabelCollection.removeAllLabelsMD(t), l === o("WAWebChatFlowTypes").ChatKindType.Chat && await f(t.id), l != null) switch (d.includes(l) && await o("WAWebBizChatAssignmentAction").removeChatAssignmentsForChat(t.id), o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(t), l) {
					case o("WAWebChatFlowTypes").ChatKindType.Community: return new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
					case o("WAWebChatFlowTypes").ChatKindType.Group: return new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
					case o("WAWebChatFlowTypes").ChatKindType.Broadcast: return new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
					case o("WAWebChatFlowTypes").ChatKindType.Chat: return new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
					case o("WAWebChatFlowTypes").ChatKindType.Newsletter: return;
				}
			} else if (e.status >= 400 && l != null) switch (l) {
				case o("WAWebChatFlowTypes").ChatKindType.Community: return new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				case o("WAWebChatFlowTypes").ChatKindType.Group: return new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				case o("WAWebChatFlowTypes").ChatKindType.Broadcast: return new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				case o("WAWebChatFlowTypes").ChatKindType.Chat: return new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				case o("WAWebChatFlowTypes").ChatKindType.Newsletter: return;
			}
		}).catch(function(r) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["models:chat:sendDelete dropped"])));
			var a = "";
			if (l != null) switch (l) {
				case o("WAWebChatFlowTypes").ChatKindType.Community:
					a = s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebChatFlowTypes").ChatKindType.Group:
					a = s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
					a = s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebChatFlowTypes").ChatKindType.Chat:
					a = s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebChatFlowTypes").ChatKindType.Newsletter: break;
			}
			else a = s._(
				/*BTDS*/
				""
			);
			return new (o("WAWebActionToast.react")).ActionType(a, {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return g(t, n);
				}
			});
		});
		return n && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
			initialAction: _(l),
			pendingAction: u
		})), i.then(function(e) {
			if (e.status === 200) {
				var n = t.getLastMsgKeyForAction();
				r && r.equals(n) || r === n ? t.delete() : h(t, a), o("WAWebFrontendChatGetters").getKind(t) === o("WAWebChatFlowTypes").ChatKindType.Community && o("WAWebContactCollection").ContactCollection.remove(t.id.toString());
			}
		}).finally(function() {
			t.promises.sendDelete = null;
		});
	}
	function h(e, t) {
		var n;
		if (!t) n = e.msgs.length;
		else if (e.msgs.get(t.id)) n = e.msgs.indexOf(t);
		else return;
		var r = function(r, o, a) {
			return r.getMsgChunk() === e.msgs && o > n;
		};
		e.deleteMsgsPartial(r, !0);
	}
	l.sendDelete = m, l.deleteActionFbtMap = p, l.getDeleteChatAction = _;
}), 226);
