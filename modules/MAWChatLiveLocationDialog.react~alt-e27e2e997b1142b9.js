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
		var a = t.props, l = a.clientSubscriptionId, d = a.onClose, p = a.sessions, h = a.threadKey, y = t.queries.queryReference, C = (u || (u = r("useReStore")))(), b = o("CometRelay").usePreloadedQuery(e !== void 0 ? e : e = n("MAWChatLiveLocationDialogQuery.graphql"), y), v = b.e2ee_live_location_fetch_thread_sessions.map(function(e) {
			if (e != null && e.creator_id != null && e.encrypted_coordinates != null) return {
				creatorId: e.creator_id,
				encryptedCoordinates: e.encrypted_coordinates
			};
		}).filter(Boolean), S = r("useMAWDecryptAllInitialLiveLocationSessionCoordinates.react")(v, p), R = f(null), L = R[0], E = R[1], k = f(!0), I = k[0], T = k[1], D = f(), x = D[0], $ = D[1], P = f(), N = P[0], M = P[1], w = function() {
			return T(!1);
		}, A = function(t) {
			if (t) return w();
		}, F = r("useMWXPushErrorToast")();
		o("memory.react").useEffect(function() {
			if (L == null && E(S), I && x == null && N == null && L != null) {
				var e = Array.from(L.entries()).map(function(e) {
					var t = e[0], n = e[1];
					return new (r("maplibre-gl")).LngLat(n[0], n[1]);
				}), t = o("FBMapViewPort").createViewPort(e);
				$(t.getCenter()), M(t.getZoom());
			}
		}, [
			I,
			L,
			S,
			x,
			N
		]);
		var O = _(function(e, t) {
			E(function(n) {
				var r = new Map(n);
				return r.set(e, t), r;
			});
		}, []);
		r("useMAWDecryptLiveLocationUpdateSubscription.react")(O, l, h, p), (v == null || v.length === 0) && F({ title: s._(
			/*BTDS*/
			""
		) });
		var B = L != null ? Array.from(L.entries()).map(function(e) {
			var t = e[0], n = e[1], a = o("ReQLSuspense").first(o("ReQL").fromTableAscending(C.tables.contacts).getKeyRange((c || (c = o("I64"))).of_string(t)), i.id + ":191");
			if (a == null) return null;
			var l = new (r("maplibre-gl")).LngLat(n[0], n[1]), s = r("getLSMediaContactProfilePictureUrl")(a);
			return m.jsx(r("CometMapIconMarker.react"), {
				icon: m.jsx(r("MWXLiveLocationProfilePhoto.react"), { source: { uri: s } }),
				lngLat: l.toArray()
			}, t);
		}) : null;
		return m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			onClose: function() {
				return d();
			},
			title: s._(
				/*BTDS*/
				""
			),
			withCloseButton: !0,
			children: m.jsx("div", {
				className: "x5yr21d xyamay9 xyri2b x1l90r2v x1c1uobl xh8yej3",
				children: N != null && x != null && m.jsxs(r("CometMap.react"), {
					center: x,
					onClick: w,
					onDragStart: w,
					onMouseDown: w,
					onZoomStart: A,
					surface: "msgr_comet_e2ee_live_location_sharing_map",
					xstyle: g.map,
					zoom: N,
					children: [B, m.jsxs(r("CometMapControls.react"), {
						position: "top-start",
						children: [m.jsx(r("CometMapZoomControl.react"), {}), m.jsx(r("CometMapGeoLocatorControl.react"), {
							onClick: w,
							showUserLocation: !0
						})]
					})]
				})
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
