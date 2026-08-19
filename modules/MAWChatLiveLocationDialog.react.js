__d("MAWChatLiveLocationDialog.react", [
	"fbt",
	"CometMap.react",
	"CometMapControls.react",
	"CometMapGeoLocatorControl.react",
	"CometMapIconMarker.react",
	"CometMapZoomControl.react",
	"CometRelay",
	"FBMapViewPort",
	"I64",
	"MAWChatLiveLocationDialogQuery.graphql",
	"MWXCardedDialog_DEPRECATED.react",
	"MWXLiveLocationProfilePhoto.react",
	"ReQL",
	"ReQLSuspense",
	"getLSMediaContactProfilePictureUrl",
	"maplibre-gl",
	"memory.react",
	"react",
	"react-compiler-runtime",
	"useMAWDecryptAllInitialLiveLocationSessionCoordinates.react",
	"useMAWDecryptLiveLocationUpdateSubscription.react",
	"useMWXPushErrorToast",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useState, g = { map: {
		borderStartStartRadius: "x6nl9eh",
		borderStartEndRadius: "x1a5l9x9",
		borderEndEndRadius: "x7vuprf",
		borderEndStartRadius: "x1mg3h75",
		height: "x1bjpdpr",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function h(t) {
		var a = o("react-compiler-runtime").c(28), l = t.props, d = t.queries, p = l.clientSubscriptionId, _ = l.onClose, h = l.sessions, b = l.threadKey, v = d.queryReference, S = (u || (u = r("useReStore")))(), R = o("CometRelay").usePreloadedQuery(e !== void 0 ? e : e = n("MAWChatLiveLocationDialogQuery.graphql"), v), L;
		a[0] !== R.e2ee_live_location_fetch_thread_sessions ? (L = R.e2ee_live_location_fetch_thread_sessions.map(C).filter(Boolean), a[0] = R.e2ee_live_location_fetch_thread_sessions, a[1] = L) : L = a[1];
		var E = L, k = r("useMAWDecryptAllInitialLiveLocationSessionCoordinates.react")(E, h), I = f(null), T = I[0], D = I[1], x = f(!0), $ = x[0], P = x[1], N = f(), M = N[0], w = N[1], A = f(), F = A[0], O = A[1], B;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			return P(!1);
		}, a[2] = B) : B = a[2];
		var W = B, q;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (q = function(t) {
			if (t) return W();
		}, a[3] = q) : q = a[3];
		var U = q, V = r("useMWXPushErrorToast")(), H, G;
		a[4] !== $ || a[5] !== T || a[6] !== k || a[7] !== M || a[8] !== F ? (H = function() {
			if (T == null && D(k), $ && M == null && F == null && T != null) {
				var e = Array.from(T.entries()).map(y), t = o("FBMapViewPort").createViewPort(e);
				w(t.getCenter()), O(t.getZoom());
			}
		}, G = [
			$,
			T,
			k,
			M,
			F
		], a[4] = $, a[5] = T, a[6] = k, a[7] = M, a[8] = F, a[9] = H, a[10] = G) : (H = a[9], G = a[10]), o("memory.react").useEffect(H, G);
		var z;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t, n) {
			D(function(e) {
				var r = new Map(e);
				return r.set(t, n), r;
			});
		}, a[11] = z) : z = a[11];
		var j = z;
		r("useMAWDecryptLiveLocationUpdateSubscription.react")(j, p, b, h), (E == null || E.length === 0) && V({ title: s._(
			/*BTDS*/
			""
		) });
		var K;
		a[12] !== S || a[13] !== T ? (K = T != null ? Array.from(T.entries()).map(function(e) {
			var t = e[0], n = e[1], a = o("ReQLSuspense").first(o("ReQL").fromTableAscending(S.tables.contacts).getKeyRange((c || (c = o("I64"))).of_string(t)), i.id + ":191");
			if (a == null) return null;
			var l = new (r("maplibre-gl")).LngLat(n[0], n[1]), s = r("getLSMediaContactProfilePictureUrl")(a);
			return m.jsx(r("CometMapIconMarker.react"), {
				icon: m.jsx(r("MWXLiveLocationProfilePhoto.react"), { source: { uri: s } }),
				lngLat: l.toArray()
			}, t);
		}) : null, a[12] = S, a[13] = T, a[14] = K) : K = a[14];
		var Q = K, X;
		a[15] !== _ ? (X = function() {
			return _();
		}, a[15] = _, a[16] = X) : X = a[16];
		var Y;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), a[17] = Y) : Y = a[17];
		var J;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (J = { className: "x5yr21d xyamay9 xyri2b x1l90r2v x1c1uobl xh8yej3" }, a[18] = J) : J = a[18];
		var Z;
		a[19] !== Q || a[20] !== M || a[21] !== F ? (Z = F != null && M != null && m.jsxs(r("CometMap.react"), {
			center: M,
			onClick: W,
			onDragStart: W,
			onMouseDown: W,
			onZoomStart: U,
			surface: "msgr_comet_e2ee_live_location_sharing_map",
			xstyle: g.map,
			zoom: F,
			children: [Q, m.jsxs(r("CometMapControls.react"), {
				position: "top-start",
				children: [m.jsx(r("CometMapZoomControl.react"), {}), m.jsx(r("CometMapGeoLocatorControl.react"), {
					onClick: W,
					showUserLocation: !0
				})]
			})]
		}), a[19] = Q, a[20] = M, a[21] = F, a[22] = Z) : Z = a[22];
		var ee;
		a[23] !== Z ? (ee = m.jsx("div", babelHelpers.extends({}, J, { children: Z })), a[23] = Z, a[24] = ee) : ee = a[24];
		var te;
		return a[25] !== X || a[26] !== ee ? (te = m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			onClose: X,
			title: Y,
			withCloseButton: !0,
			children: ee
		}), a[25] = X, a[26] = ee, a[27] = te) : te = a[27], te;
	}
	function y(e) {
		var t = e[1];
		return new (r("maplibre-gl")).LngLat(t[0], t[1]);
	}
	function C(e) {
		if (e != null && e.creator_id != null && e.encrypted_coordinates != null) return {
			creatorId: e.creator_id,
			encryptedCoordinates: e.encrypted_coordinates
		};
	}
	l.default = h;
}), 226);
