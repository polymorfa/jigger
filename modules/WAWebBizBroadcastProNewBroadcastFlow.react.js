__d("WAWebBizBroadcastProNewBroadcastFlow.react", [
	"$InternalEnum",
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react",
	"WAWebBizBroadcastProNewBroadcastDrawer.react",
	"WAWebBizBroadcastProNewBroadcastFlowQuery.graphql",
	"WAWebBizBroadcastsUpsertAudienceScreenLoadable",
	"WDSToast.react",
	"react",
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(27), a = e.props, i = e.queries, l = a.audience, s = a.entryPoint, _ = a.onBack, f = a.ref, g = a.sourceBroadcastMessageData, h = o("CometRelay").usePreloadedQuery(p, i.queryReference), y = (t = h.xfb_whatsapp_bb_pro) == null || (t = t.default_subscriber_pool) == null ? void 0 : t.id, C;
		n[0] !== l ? (C = l != null ? new Set([l]) : new Set(), n[0] = l, n[1] = C) : C = n[1];
		var b = c(C), v = b[0], S = b[1], R = c(null), L = R[0], E = R[1], k;
		n[2] !== _ ? (k = {
			onEnd: _,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}, n[2] = _, n[3] = k) : k = n[3];
		var I = o("useWAWebFlow").useFlow(m.NewBroadcast, k), T = I[0], D = I[1], x;
		n[4] !== D ? (x = function(t) {
			E(t), D.push(m.EditAudience);
		}, n[4] = D, n[5] = x) : x = n[5];
		var $ = x, P;
		n[6] !== L || n[7] !== D ? (P = function(t) {
			S(function(e) {
				return new Set(Array.from(e, function(e) {
					return e === L ? t : e;
				}));
			}), D.pop();
		}, n[6] = L, n[7] = D, n[8] = P) : P = n[8];
		var N = P, M;
		n[9] !== L || n[10] !== h || n[11] !== s || n[12] !== D || n[13] !== N || n[14] !== $ || n[15] !== f || n[16] !== v || n[17] !== g || n[18] !== y ? (M = D.step === m.NewBroadcast ? u.jsx(r("WAWebBizBroadcastProNewBroadcastDrawer.react"), {
			selectedAudiences: v,
			setSelectedAudiences: S,
			sourceBroadcastMessageData: g,
			onOpenUpsertAudience: function() {
				y != null && D.push(m.CreateAudience);
			},
			onOpenEditAudience: $,
			entryPoint: s,
			onBack: function() {
				return D.end();
			},
			queryRef: h,
			ref: f
		}) : D.step === m.CreateAudience ? y != null ? u.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
			entryPoint: s,
			audienceConfig: {
				kind: "pro",
				onNewAudienceSuccess: function(t) {
					S(function(e) {
						return new Set(e).add(t);
					}), D.pop();
				},
				subscriberPoolID: y
			},
			isBBCreationFlow: !0,
			onBack: function() {
				return D.pop();
			},
			chat: null,
			suggestedAudienceData: null
		}) : null : D.step === m.EditAudience && L != null ? u.jsx(r("WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react"), {
			customAudience: L,
			entryPoint: s,
			onAudienceEditSuccess: N,
			onBack: function() {
				return D.pop();
			}
		}) : null, n[9] = L, n[10] = h, n[11] = s, n[12] = D, n[13] = N, n[14] = $, n[15] = f, n[16] = v, n[17] = g, n[18] = y, n[19] = M) : M = n[19];
		var w = M, A;
		n[20] !== T || n[21] !== D || n[22] !== w ? (A = u.jsx(T, {
			flow: D,
			children: w
		}), n[20] = T, n[21] = D, n[22] = w, n[23] = A) : A = n[23];
		var F;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx("div", {
			id: d,
			className: "xixxii4 xij2k2b xxrlk4x xa3bivy xc9l9hb"
		}), n[24] = F) : F = n[24];
		var O;
		return n[25] !== A ? (O = u.jsxs(o("WDSToast.react").WDSToastProvider, {
			target: "#" + d,
			children: [A, F]
		}), n[25] = A, n[26] = O) : O = n[26], O;
	}
	l.default = _;
}), 98);
