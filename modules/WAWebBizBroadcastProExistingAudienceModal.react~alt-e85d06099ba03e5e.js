__d("WAWebBizBroadcastProExistingAudienceModal.react", [
	"CometRelay",
	"WAWebBizBroadcastExistingAudienceModalAudienceItem.react",
	"WAWebBizBroadcastExistingAudienceModalInner.react",
	"WAWebBizBroadcastProExistingAudienceModalAudienceListQuery.graphql",
	"react",
	"sumBy"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useState, _ = e !== void 0 ? e : e = n("WAWebBizBroadcastProExistingAudienceModalAudienceListQuery.graphql");
	function f(e) {
		var t, n, a = e.props, i = e.queries, l = a.onClose, s = a.selectedAudiences, c = a.setSelectedAudiences, f = o("CometRelay").usePreloadedQuery(_, i.queryReference), g = (t = (n = f.viewer) == null || (n = n.backing_waba) == null || (n = n.wa_bb_pro_custom_audiences) == null ? void 0 : n.edges) != null ? t : [], h = m(function() {
			return new Map(Array.from(s, function(e) {
				return [e.id, e];
			}));
		}, [s]), y = p(function() {
			return new Map(h);
		}), C = y[0], b = y[1], v = d(function(e) {
			b(function(t) {
				var n = new Map(t);
				if (n.has(e.id)) n.delete(e.id);
				else {
					var r;
					n.set(e.id, (r = h.get(e.id)) != null ? r : e);
				}
				return n;
			});
		}, [h]), S = u.jsx(u.Fragment, { children: g.map(function(e) {
			var t, n, o = e == null ? void 0 : e.node;
			if ((o == null ? void 0 : o.id) == null) return null;
			var a = {
				id: o.id,
				name: (t = o.name) != null ? t : "",
				audienceSize: (n = o.subscriber_size) != null ? n : 0,
				phoneNumbers: null
			};
			return u.jsx(r("WAWebBizBroadcastExistingAudienceModalAudienceItem.react"), {
				audience: {
					name: a.name,
					recipientCount: a.audienceSize
				},
				isSelected: C.has(o.id),
				onToggle: function() {
					return v(a);
				}
			}, o.id);
		}) }), R = r("sumBy")(Array.from(C.values()), function(e) {
			return e.audienceSize;
		}), L = function() {
			c(new Set(C.values())), l();
		};
		return u.jsx(r("WAWebBizBroadcastExistingAudienceModalInner.react"), {
			onSave: L,
			list: S,
			onClose: l,
			selectedAudienceCount: C.size,
			totalRecipients: R
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
