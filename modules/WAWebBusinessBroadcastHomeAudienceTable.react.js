__d("WAWebBusinessBroadcastHomeAudienceTable.react", [
	"WAWebBroadcastRenameModalLoadable",
	"WAWebBusinessBroadcastHomeTableColumns.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebModalManager",
	"WAWebSMBTable.react",
	"WAWebWamEnumSurfaceType",
	"WAWebWidFactory",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo;
	function m(e) {
		var t = o("react-compiler-runtime").c(19), n = e.audiencesList, a = e.campaigns, i = e.entryPoint, l = e.onAudienceSelect, u = e.onAudienceUpdate, c = e.scrollContainerRef, d;
		e: {
			if (a.length === 0) {
				d = n;
				break e;
			}
			var m;
			if (t[0] !== n || t[1] !== a) {
				var f = new Map();
				for (var g of a) {
					var h = g.broadcastJid.replace(/@broadcast$/, ""), y = f.get(h);
					(y == null || g.sentAt > y) && f.set(h, g.sentAt);
				}
				m = n.map(function(e) {
					var t = f.get(e.broadcastJid);
					return t != null ? babelHelpers.extends({}, e, { lastBroadcastTimestamp: t }) : e;
				}), t[0] = n, t[1] = a, t[2] = m;
			} else m = t[2];
			d = m;
		}
		var C = d, b = _, v;
		t[3] !== i || t[4] !== u ? (v = function(t) {
			var e = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t.broadcastJid));
			e != null && o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBroadcastRenameModalLoadable").WAWebBroadcastRenameModalLoadable, {
				chat: e,
				entryPoint: i,
				onClose: o("WAWebModalManager").closeModalManager,
				onAudienceUpdate: u,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME
			}));
		}, t[3] = i, t[4] = u, t[5] = v) : v = t[5];
		var S = v, R;
		t[6] !== S ? (R = {
			onDelete: b,
			onRename: S
		}, t[6] = S, t[7] = R) : R = t[7];
		var L = R, E;
		t[8] !== L || t[9] !== i ? (E = o("WAWebBusinessBroadcastHomeTableColumns.react").getAudienceColumns(i, L), t[8] = L, t[9] = i, t[10] = E) : E = t[10];
		var k = E, I = p, T;
		t[11] !== i || t[12] !== l ? (T = function(t) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newBusinessBroadcastAudienceListItemClicked(t.broadcastJid, i), l != null && l(t);
		}, t[11] = i, t[12] = l, t[13] = T) : T = t[13];
		var D = T, x;
		return t[14] !== k || t[15] !== C || t[16] !== D || t[17] !== c ? (x = s.jsx(r("WAWebSMBTable.react"), {
			columns: k,
			items: C,
			getItemKey: I,
			onRowClick: D,
			scrollContainerRef: c
		}), t[14] = k, t[15] = C, t[16] = D, t[17] = c, t[18] = x) : x = t[18], x;
	}
	function p(e) {
		return e.broadcastJid;
	}
	function _(e) {
		var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
		t != null && o("WAWebCmd").Cmd.deleteOrExitChat(t);
	}
	l.default = m;
}), 98);
