__d("useMAWAddSecureGroupParticipants", [
	"fbt",
	"I64",
	"Int64Hooks",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"LSMessagingThreadAttributionType",
	"MAWBridgeSendAndReceive",
	"MAWJobDefinitions",
	"MAWMiActOnActThreadReady",
	"MAWODSProxy",
	"MAWTimedJob",
	"MWLSThread",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"asyncToGeneratorRuntime",
	"qex",
	"react-compiler-runtime",
	"sendToSentQPLLogger",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c(e) {
		var t = o("react-compiler-runtime").c(7), a = (u || (u = r("useReStore")))(), l = o("MWLSThread").useThread(e), c;
		t[0] !== a || t[1] !== l || t[2] !== e ? (c = function(u) {
			return o("MAWMiActOnActThreadReady").onActThreadReady(a.tables, e, "useMAWAddSecureGroupParticipants", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					var n = o("WAJids").validateGroupJid(t);
					if (n != null) {
						var c = o("sendToSentQPLLogger").markSendToSentStartWithAnnotation(l, { isGroupInvite: !0 }, r("LSMessagingThreadAttributionType").UNKNOWN), p, _;
						if (r("qex")._("5853") === !0 ? (_ = "direct", p = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "addGroupParticipants", {
							group: n,
							instanceKey: c,
							users: u.map(m)
						})) : (_ = "MAWJobManager", p = yield o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.addGroupParticipants(n, u.map(d), c, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "addGroupParticipants." + _ + "." + (p.success ? "success" : "failure")
						}), p.success) {
							o("sendToSentQPLLogger").markSendToSentSuccess(c);
							return;
						}
						var f = s._(
							/*BTDS*/
							""
						).toString(), g = u.length === 1 ? s._(
							/*BTDS*/
							""
						).toString() : s._(
							/*BTDS*/
							""
						).toString();
						return o("sendToSentQPLLogger").markSendToSentFail(c, "failed_to_send_group_invite"), a.runInTransaction(function(e) {
							return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
								errorBodyText: g,
								errorTitleText: f
							});
						}, "readwrite", void 0, void 0, i.id + ":113");
					}
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})());
		}, t[0] = a, t[1] = l, t[2] = e, t[3] = c) : c = t[3];
		var p;
		return t[4] !== a || t[5] !== e ? (p = [a, e], t[4] = a, t[5] = e, t[6] = p) : p = t[6], o("Int64Hooks").useCallbackInt64(c, p);
	}
	function d(t) {
		return (e || (e = o("I64"))).to_string(t);
	}
	function m(t) {
		return (e || (e = o("I64"))).to_string(t);
	}
	l.default = c;
}), 226);
