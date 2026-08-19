__d("WAWebBizBroadcastProNewBroadcastFlow.react", [
	"$InternalEnum",
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react",
	"WAWebBizBroadcastProNewBroadcastDrawer.react",
	"WAWebBizBroadcastProNewBroadcastFlowQuery.graphql",
	"WAWebBizBroadcastsUpsertAudienceScreenLoadable",
	"WDSToast.react",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useState, d = "bb-pro-new-broadcast-toast-container", m = n("$InternalEnum").Mirrored([
		"NewBroadcast",
		"CreateAudience",
		"EditAudience",
		"ImportAudience",
		"ImportAudiences"
	]), p = e !== void 0 ? e : e = n("WAWebBizBroadcastProNewBroadcastFlowQuery.graphql");
	function _(e) {
		var t, n = e.props, a = e.queries, i = n.audience, l = n.entryPoint, s = n.onBack, _ = n.ref, f = n.sourceBroadcastMessageData, g = o("CometRelay").usePreloadedQuery(p, a.queryReference), h = (t = g.xfb_whatsapp_bb_pro) == null || (t = t.default_subscriber_pool) == null ? void 0 : t.id, y = c(i != null ? new Set([i]) : new Set()), C = y[0], b = y[1], v = c(null), S = v[0], R = v[1], L = o("useWAWebFlow").useFlow(m.NewBroadcast, {
			onEnd: s,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}), E = L[0], k = L[1], I = function(t) {
			R(t), k.push(m.EditAudience);
		}, T = function(t) {
			b(function(e) {
				return new Set(Array.from(e, function(e) {
					return e === S ? t : e;
				}));
			}), k.pop();
		}, D = k.step === m.NewBroadcast ? u.jsx(r("WAWebBizBroadcastProNewBroadcastDrawer.react"), {
			selectedAudiences: C,
			setSelectedAudiences: b,
			sourceBroadcastMessageData: f,
			onOpenUpsertAudience: function() {
				h != null && k.push(m.CreateAudience);
			},
			onOpenEditAudience: I,
			entryPoint: l,
			onBack: function() {
				return k.end();
			},
			queryRef: g,
			ref: _
		}) : k.step === m.CreateAudience ? h != null ? u.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
			entryPoint: l,
			audienceConfig: {
				kind: "pro",
				onNewAudienceSuccess: function(t) {
					b(function(e) {
						return new Set(e).add(t);
					}), k.pop();
				},
				subscriberPoolID: h
			},
			isBBCreationFlow: !0,
			onBack: function() {
				return k.pop();
			},
			chat: null,
			suggestedAudienceData: null
		}) : null : k.step === m.EditAudience && S != null ? u.jsx(r("WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react"), {
			customAudience: S,
			entryPoint: l,
			onAudienceEditSuccess: T,
			onBack: function() {
				return k.pop();
			}
		}) : null;
		return u.jsxs(o("WDSToast.react").WDSToastProvider, {
			target: "#" + d,
			children: [u.jsx(E, {
				flow: k,
				children: D
			}), u.jsx("div", {
				id: d,
				className: "xixxii4 xij2k2b xxrlk4x xa3bivy xc9l9hb"
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
