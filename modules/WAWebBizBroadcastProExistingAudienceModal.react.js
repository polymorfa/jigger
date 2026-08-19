__d("WAWebBizBroadcastProExistingAudienceModal.react", [
	"CometRelay",
	"WAWebBizBroadcastExistingAudienceModalAudienceItem.react",
	"WAWebBizBroadcastExistingAudienceModalInner.react",
	"WAWebBizBroadcastProExistingAudienceModalAudienceListQuery.graphql",
	"react",
	"react-compiler-runtime",
	"sumBy"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useState, _ = e !== void 0 ? e : e = n("WAWebBizBroadcastProExistingAudienceModalAudienceListQuery.graphql");
	function f(e) {
		var t, n = o("react-compiler-runtime").c(24), a = e.props, i = e.queries, l = a.onClose, s = a.selectedAudiences, c = a.setSelectedAudiences, d = o("CometRelay").usePreloadedQuery(_, i.queryReference), m;
		if (n[0] !== ((t = d.viewer) == null || (t = t.backing_waba) == null || (t = t.wa_bb_pro_custom_audiences) == null ? void 0 : t.edges)) {
			var f, y, C;
			m = (f = (y = d.viewer) == null || (y = y.backing_waba) == null || (y = y.wa_bb_pro_custom_audiences) == null ? void 0 : y.edges) != null ? f : [], n[0] = (C = d.viewer) == null || (C = C.backing_waba) == null || (C = C.wa_bb_pro_custom_audiences) == null ? void 0 : C.edges, n[1] = m;
		} else m = n[1];
		var b = m, v;
		n[2] !== s ? (v = new Map(Array.from(s, h)), n[2] = s, n[3] = v) : v = n[3];
		var S = v, R;
		n[4] !== S ? (R = function() {
			return new Map(S);
		}, n[4] = S, n[5] = R) : R = n[5];
		var L = p(R), E = L[0], k = L[1], I;
		n[6] !== S ? (I = function(t) {
			k(function(e) {
				var n = new Map(e);
				if (n.has(t.id)) n.delete(t.id);
				else {
					var r;
					n.set(t.id, (r = S.get(t.id)) != null ? r : t);
				}
				return n;
			});
		}, n[6] = S, n[7] = I) : I = n[7];
		var T = I, D;
		n[8] !== b || n[9] !== T || n[10] !== E ? (D = u.jsx(u.Fragment, { children: b.map(function(e) {
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
				isSelected: E.has(o.id),
				onToggle: function() {
					return T(a);
				}
			}, o.id);
		}) }), n[8] = b, n[9] = T, n[10] = E, n[11] = D) : D = n[11];
		var x = D, $;
		n[12] !== E ? ($ = r("sumBy")(Array.from(E.values()), g), n[12] = E, n[13] = $) : $ = n[13];
		var P = $, N;
		n[14] !== l || n[15] !== E || n[16] !== c ? (N = function() {
			c(new Set(E.values())), l();
		}, n[14] = l, n[15] = E, n[16] = c, n[17] = N) : N = n[17];
		var M = N, w;
		return n[18] !== M || n[19] !== x || n[20] !== l || n[21] !== E.size || n[22] !== P ? (w = u.jsx(r("WAWebBizBroadcastExistingAudienceModalInner.react"), {
			onSave: M,
			list: x,
			onClose: l,
			selectedAudienceCount: E.size,
			totalRecipients: P
		}), n[18] = M, n[19] = x, n[20] = l, n[21] = E.size, n[22] = P, n[23] = w) : w = n[23], w;
	}
	function g(e) {
		return e.audienceSize;
	}
	function h(e) {
		return [e.id, e];
	}
	l.default = f;
}), 98);
