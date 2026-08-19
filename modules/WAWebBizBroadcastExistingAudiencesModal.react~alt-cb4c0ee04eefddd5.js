__d("WAWebBizBroadcastExistingAudiencesModal.react", [
	"WAWebBizBroadcastExistingAudienceModalAudienceItem.react",
	"WAWebBizBroadcastExistingAudienceModalInner.react",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatCollection",
	"WAWebWidFactory",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState;
	function _(e) {
		var t = e.entryPoint, n = e.onClose, a = e.selectedChats, i = e.setSelectedChats, l = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(), u = new Set(Array.from(a).map(function(e) {
			return e.id.toString();
		})), _ = p(function() {
			return new Set(l.filter(function(e) {
				return u.has(e.broadcastJid);
			}));
		}), f = _[0], g = _[1];
		d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.existingAudiencesModalViewed(t);
		}, [t]);
		var h = c(function(e) {
			g(function(t) {
				var n = new Set(t);
				return n.has(e) ? n.delete(e) : n.add(e), n;
			});
		}, []), y = m(function() {
			return Array.from(f).flatMap(function(e) {
				var t, n = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid)), r = n == null || (t = n.broadcastMetadata) == null ? void 0 : t.recipients;
				return r ? r.toArray().map(function(e) {
					return e.id;
				}) : [];
			}).length;
		}, [f]), C = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.existingAudiencesModalSaved(f.size, t);
			var e = new Set(l.map(function(e) {
				return e.broadcastJid;
			})), a = r("compactMap")(Array.from(f), function(e) {
				return o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			});
			i(function(t) {
				var n = Array.from(t).filter(function(t) {
					return !e.has(t.id.toString());
				});
				return new Set([].concat(n, a));
			}), n();
		}, [
			f,
			t,
			l,
			i,
			n
		]), b = s.jsx(s.Fragment, { children: l.map(function(e) {
			return s.jsx(r("WAWebBizBroadcastExistingAudienceModalAudienceItem.react"), {
				audience: {
					name: e.name,
					recipientCount: e.recipientCount
				},
				isSelected: f.has(e),
				onToggle: function() {
					return h(e);
				}
			}, e.broadcastJid);
		}) });
		return s.jsx(r("WAWebBizBroadcastExistingAudienceModalInner.react"), {
			onSave: C,
			list: b,
			onClose: n,
			selectedAudienceCount: f.size,
			totalRecipients: y
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
