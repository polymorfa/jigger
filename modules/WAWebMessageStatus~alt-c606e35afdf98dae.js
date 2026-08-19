__d("WAWebMessageStatus", [
	"WAWebAck",
	"WAWebMessageAssociationUIUtils",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebStatusUtils",
	"WDSIconWdsIcDelivered.react",
	"WDSIconWdsIcRead.react",
	"WDSIconWdsIcStatusPending.react",
	"isStringNullOrEmpty",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo, c = {
		light: {
			color: "x17t9dm2",
			$$css: !0
		},
		ackBlue: {
			color: "x1rv0e52",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.associatedMessages, a = e.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [
			(t = o("WAWebMsgGetters")).getAck,
			t.getIsMedia,
			t.getIsViewOnce,
			t.getCaption,
			t.getType,
			t.getLoc,
			t.getIsLive
		]), l = i[0], d = i[1], m = i[2], p = i[3], _ = i[4], f = i[5], g = i[6], h = l != null ? l : o("WAWebAck").ACK.CLOCK, y = u(function() {
			return o("WAWebMessageAssociationUIUtils").getLowestAckState(h, _, n);
		}, [
			h,
			n,
			_
		]), C = d && r("isStringNullOrEmpty")(p) && !m && _ !== o("WAWebMsgType").MSG_TYPE.AUDIO || _ === o("WAWebMsgType").MSG_TYPE.LOCATION && !f && !g, b = o("WAWebStatusUtils").getMessageStatusLabel(h), v, S, R;
		return y < o("WAWebAck").ACK.SENT ? (v = r("WDSIconWdsIcStatusPending.react"), R = "wds-ic-status-pending") : y === o("WAWebAck").ACK.SENT ? (v = r("WDSIconWdsIcDelivered.react"), R = "wds-ic-delivered") : y === o("WAWebAck").ACK.RECEIVED ? (v = r("WDSIconWdsIcRead.react"), R = "wds-ic-read") : (v = r("WDSIconWdsIcRead.react"), R = "wds-ic-read", S = c.ackBlue), s.jsx(v, {
			"aria-label": " " + b.toString() + " ",
			height: v === r("WDSIconWdsIcStatusPending.react") ? 11 : void 0,
			testid: R,
			width: 16,
			xstyle: [C && c.light, S]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
