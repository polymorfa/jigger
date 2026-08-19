__d("MAWMiActOnActThreadReady", [
	"MAWMIC",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWMiActOnActThreadReadyWithoutValidator",
	"cr:7542",
	"err",
	"promiseDone",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, r, a, i) {
		var l = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByThreadKey(e, t, r), s = l.type, u = async function(i, l) {
			return n("cr:7542") && await n("cr:7542").load().then(function(n) {
				var o = n.validateActThreadReady;
				return o({
					chatJid: l,
					description: r,
					initialMappingStateType: s,
					tables: e,
					threadKey: t
				});
			}), a == null ? void 0 : a(i, l);
		};
		return o("MAWMiActOnActThreadReadyWithoutValidator").onActThreadReadyWithoutValidator(e, t, r, u, i, l);
	}
	function s(t, n, a, i) {
		return new Promise(function(l, s) {
			e(t, n, a, function(e, t) {
				return l({
					chatJid: t,
					serverThreadKey: e
				}), Promise.resolve();
			}, function(e) {
				s(r("err")("Timed out waiting for ACT thread to be ready in %s. Thread state: %s", a, e)), r("promiseDone")(o("MAWMIC").getState().then(function(e) {
					i != null && o("sendToSentQPLLogger").addSendToSentAnnotations(i, { string: { mic_state: e } });
				}));
			}).catch(function() {
				return s();
			});
		});
	}
	l.onActThreadReady = e, l.waitForACTThreadReady = s;
}), 98);
