__d("WAWebWorkerHandleStanza", [
	"WALogger",
	"WAWebCommsHandleWorkerCompatibleStanza",
	"WAWebOfflineHandler",
	"WAWebVoipBackendSwCallPlaceholderWriter",
	"WAWebWorkerHandleFailureApi",
	"WAWebWorkerHandleInfoBulletin",
	"WAWebWorkerHandleSuccessApi"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(e, t, n) {
		n === void 0 && (n = 0);
		var r = await Promise.resolve(u(e, t, n));
		return r != null ? r : "NO_ACK";
	}
	function u(t, n, a) {
		var i = t.attrs;
		if (i.offline) {
			var l = parseInt(i.t, 10), s = parseInt(i.offline, 10);
			o("WAWebOfflineHandler").OfflineMessageHandler.newOfflineStanza(l, a, s);
		}
		var u = o("WAWebCommsHandleWorkerCompatibleStanza").handleWorkerCompatibleStanza(t);
		if (u != null) return u;
		e: {
			if (t.tag === "ib") return r("WAWebWorkerHandleInfoBulletin")(t);
			if (t.tag === "failure") return r("WAWebWorkerHandleFailureApi")(t);
			if (t.tag === "success") return r("WAWebWorkerHandleSuccessApi")(t);
			if (t.tag === "call") return o("WAWebVoipBackendSwCallPlaceholderWriter").maybeWriteSwOfflineCallPlaceholder(t).then(function() {
				return "NO_ACK";
			});
			{
				o("WALogger").DEV_XMPP(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[worker]Comms.handleStanza unrecognized stanza ", ""])), t);
				break e;
			}
		}
	}
	l.default = s;
}), 98);
