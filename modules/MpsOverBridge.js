__d("MpsOverBridge", ["MAWBridgeSendAndReceive"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		this.loadMessage = function(e) {
			return o("MAWBridgeSendAndReceive").sendAndReceive("mps", "mpsLoadMessage", e);
		}, this.loadMessages = function(e) {
			return o("MAWBridgeSendAndReceive").sendAndReceive("mps", "mpsLoadMessages", e);
		}, this.batchLoadMessages = function(e) {
			return o("MAWBridgeSendAndReceive").sendAndReceive("mps", "mpsBatchLoadMessages", e);
		}, this.batchLoadMessage = function(e) {
			return o("MAWBridgeSendAndReceive").sendAndReceive("mps", "mpsBatchLoadMessage", e);
		}, this.debugDbDump = function() {
			return o("MAWBridgeSendAndReceive").sendAndReceive("mps", "mpsDebugDbDump");
		};
	}, s;
	function u() {
		return s == null && (s = new e()), s;
	}
	l.mps = u;
}), 98);
