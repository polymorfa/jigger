__d("WAWebHandleNewsletterStatus", [
	"WALogger",
	"WASmaxStatusDeliverIncomingNewsletterStatusRPC",
	"WAWebBackendApi",
	"WAWebHandleMsgError",
	"WAWebHandleMsgTypes.flow",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebJidToWid",
	"WAWebMessageProcessorCache",
	"WAWebMessageQueue",
	"WAWebNewsletterStatusUtils",
	"WAWebOfflineHandler",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	async function d(t) {
		try {
			var n, a = o("WASmaxStatusDeliverIncomingNewsletterStatusRPC").receiveIncomingNewsletterStatusRPC(t), i = a.makeIncomingNewsletterStatusResponseSuccess, l = a.parsedRequest, c = i(), d = o("WAWebJidToWid").jidWithTypeToWid({
				jidType: "newsletter",
				newsletterJid: l.from
			}), _ = l.newsletterStatusContentTypeMixins;
			switch (_.name) {
				case "StatusNewsletterReaction":
				case "StatusNewsletterReactionRevoke": return c;
				default: break;
			}
			var f = ((n = l.offlineMixin) == null ? void 0 : n.offline) != null;
			return f && (o("WAWebOfflineHandler").OfflineMessageHandler.addOfflinePendingMessage(), o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete()), o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete() && (f = !1), await o("WAWebMessageQueue").onMessageQueue({
				chatWid: d,
				isOffline: f,
				msgCategory: null,
				action: async function() {
					var t;
					try {
						t = m(_, l, d, f);
					} catch (t) {
						if (!(t instanceof o("WAWebHandleMsgError").MessageValidationError)) throw t;
						return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] Invalid status content, skipping"]))).catching(r("getErrorSafe")(t)).tags("newsletter", "status").sendLogs("newsletter-status-invalid-content-skipped"), p({
							ack: c,
							from: d,
							isOffline: f,
							parsedRequest: l
						});
					}
					try {
						await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
							chatId: d,
							newMsg: t,
							handleSingleMsgOrigin: "addStatusMessages"
						}), l.serverId != null && o("WAWebBackendApi").frontendFireAndForget("fillGapFromIncomingStanza", {
							newsletterJid: l.from,
							incomingServerId: l.serverId,
							sentTime: l.t
						});
					} catch (e) {
						o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] Failed to process status stanza"]))).catching(r("getErrorSafe")(e)).tags("newsletter", "status").sendLogs("newsletter-status-failed-to-process-status-stanza");
					}
					return p({
						ack: c,
						from: d,
						isOffline: f,
						parsedRequest: l
					});
				}
			});
		} catch (e) {
			var g = r("getErrorSafe")(e);
			throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] Failed to handle newsletter status"]))).catching(g).tags("newsletter", "status").sendLogs("failed-handle-newsletter-status"), g;
		}
	}
	function m(e, t, n, a) {
		switch (e.name) {
			case "StatusNewsletterText":
			case "StatusNewsletterMedia": {
				var i = e.value.plaintextNewsletterPlaintextPayloadMixin.elementValue, l = o("WAWebNewsletterStatusUtils").mapStatusStanzaToMsgData(t, n, i);
				return babelHelpers.extends({}, l, {
					isNewsletterStatus: !0,
					author: n,
					isNewMsg: !a
				});
			}
			case "StatusNewsletterRevoke": {
				var s = o("WAWebNewsletterStatusUtils").mapStatusRevokeToMsgData(t, n);
				return babelHelpers.extends({}, s, {
					isNewsletterStatus: !0,
					author: n,
					isNewMsg: !a
				});
			}
			case "StatusNewsletterReaction":
			case "StatusNewsletterReactionRevoke": throw r("err")("[newsletter][status] Unexpected addon status content type: " + e.name);
			default: throw e.name, r("err")("[newsletter][status] Unhandled status content type: " + e.name);
		}
	}
	function p(e) {
		var t = e.ack, n = e.from, a = e.isOffline, i = e.parsedRequest;
		return a ? (o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS), o("WAWebMessageProcessorCache").messageProcessorCache.addMessages([{ receiptInfo: {
			externalId: i.id,
			from: n,
			author: n
		} }]).catch(function(e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] Failed to store offline ack"]))).catching(r("getErrorSafe")(e)).tags("newsletter", "status").sendLogs("newsletter-status-failed-offline-ack");
		}), null) : t;
	}
	l.default = d;
}), 98);
