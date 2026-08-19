__d("MAWBridgeGroupInfoUpdatedHandler", [
	"I64",
	"MAWMiActMappingTableAPI",
	"MWFBLogger",
	"ODS",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = o("MWFBLogger").MWLogger().tags([
		"bridgeUIEvent",
		"Occam",
		"Middleware"
	]);
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r, a = yield o("MAWMiActMappingTableAPI").getMappingRowForChatJid(t, n.chatJid);
			if (a == null) {
				m.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Missing thread key for chatJid: ", ""])), n.chatJid);
				return;
			}
			var i = (r = n.threadName) != null ? r : void 0, l = a.serverThreadKey, p = t.threads, _ = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(p).getKeyRange(l));
			if (_ == null) {
				(c || (c = o("ODS"))).bumpEntityKey(3185, "armadillo_group_info_update", "missing_thread"), m.WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Missing thread for updating group with threadKey: ", ""])), (d || (d = o("I64"))).to_string(l));
				return;
			} else i == null && (i = _.threadName, m.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["MAWDB groupInfo is missing \"name\" field for threadKey: ", ""])), (d || (d = o("I64"))).to_string(l)));
			var f = n.memberAddMode !== "all_member_add";
			yield p.put(babelHelpers.extends({}, _, {
				needsAdminApprovalForNewParticipant: f,
				threadName: i
			}));
		}), _.apply(this, arguments);
	}
	l.call = p;
}), 98);
