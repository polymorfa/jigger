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
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo;
	function m(e) {
		var t = e.audiencesList, n = e.campaigns, a = e.entryPoint, i = e.onAudienceSelect, l = e.onAudienceUpdate, u = e.scrollContainerRef, m = d(function() {
			if (n.length === 0) return t;
			var e = new Map();
			for (var r of n) {
				var o = r.broadcastJid.replace(/@broadcast$/, ""), a = e.get(o);
				(a == null || r.sentAt > a) && e.set(o, r.sentAt);
			}
			return t.map(function(t) {
				var n = e.get(t.broadcastJid);
				return n != null ? babelHelpers.extends({}, t, { lastBroadcastTimestamp: n }) : t;
			});
		}, [t, n]), p = c(function(e) {
			var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			t != null && o("WAWebCmd").Cmd.deleteOrExitChat(t);
		}, []), _ = c(function(e) {
			var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			t != null && o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBroadcastRenameModalLoadable").WAWebBroadcastRenameModalLoadable, {
				chat: t,
				entryPoint: a,
				onClose: o("WAWebModalManager").closeModalManager,
				onAudienceUpdate: l,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME
			}));
		}, [a, l]), f = d(function() {
			return {
				onDelete: p,
				onRename: _
			};
		}, [p, _]), g = d(function() {
			return o("WAWebBusinessBroadcastHomeTableColumns.react").getAudienceColumns(a, f);
		}, [a, f]), h = c(function(e) {
			return e.broadcastJid;
		}, []), y = c(function(e) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newBusinessBroadcastAudienceListItemClicked(e.broadcastJid, a), i != null && i(e);
		}, [a, i]);
		return s.jsx(r("WAWebSMBTable.react"), {
			columns: g,
			items: m,
			getItemKey: h,
			onRowClick: y,
			scrollContainerRef: u
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
