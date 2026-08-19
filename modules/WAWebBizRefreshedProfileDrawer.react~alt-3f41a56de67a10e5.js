__d("WAWebBizRefreshedProfileDrawer.react", [
	"fbt",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileEdit",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebEditBizProfileMutation",
	"WAWebModalManager",
	"WAWebProfileDrawerBody.react",
	"WAWebProfileDrawerHeader.react",
	"WAWebUserPrefsMeUser",
	"WDSText.react",
	"isEmptyObject",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = "button:not(:disabled):not([tabindex=\"-1\"]), input:not(:disabled):not([tabindex=\"-1\"]), select:not(:disabled):not([tabindex=\"-1\"]), textarea:not(:disabled):not([tabindex=\"-1\"]), a[href]:not([tabindex=\"-1\"]), [tabindex]:not([tabindex=\"-1\"])", f = { drawerWithMinWidth: {
		backgroundColor: "x6egj2d",
		minWidth: "x15icp18",
		overflowX: "x6ikm8r",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function g(e) {
		var t, n = o("react-compiler-runtime").c(48), a = e.entryPoint, i = e.onClose, l = e.preloadedProfile, c, g, S;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), c = o("WAWebContactCollection").ContactCollection.assertGet(g), S = c.getStatus(), n[0] = c, n[1] = g, n[2] = S) : (c = n[0], g = n[1], S = n[2]);
		var R = S, L;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (L = ["status"], n[3] = L) : L = n[3];
		var E = o("useWAWebModelValues").useModelValues(R, L), k = E.status, I;
		n[4] !== l ? (I = function() {
			var e, t, n, r, o, a, i, s, u, d, m, p = c.businessProfile, _ = p == null || (e = p.serviceAreas) == null ? void 0 : e[0], f = (t = c.pushname) != null ? t : "", g = (n = p == null ? void 0 : p.priceTier) != null ? n : "";
			if (l != null) {
				var h, y, C, b, v, S, R, L, E;
				return {
					businessName: f,
					description: (h = l.description) != null ? h : "",
					address: (y = l.address) != null ? y : "",
					serviceAreaRadius: (C = l.serviceAreaRadius) != null ? C : "",
					locationNotes: (b = l.locationNotes) != null ? b : "",
					primaryWebsite: (v = (S = l.websites) == null ? void 0 : S[0]) != null ? v : "",
					secondaryWebsite: (R = (L = l.websites) == null ? void 0 : L[1]) != null ? R : "",
					email: (E = l.email) != null ? E : "",
					priceTier: g
				};
			}
			return {
				businessName: f,
				description: (r = p == null ? void 0 : p.description) != null ? r : "",
				address: (o = p == null ? void 0 : p.address) != null ? o : "",
				serviceAreaRadius: (_ == null ? void 0 : _.radius) != null ? String(_.radius) : "",
				locationNotes: (a = _ == null ? void 0 : _.areaDescription) != null ? a : "",
				primaryWebsite: (i = p == null || (s = p.website) == null || (s = s[0]) == null ? void 0 : s.url) != null ? i : "",
				secondaryWebsite: (u = p == null || (d = p.website) == null || (d = d[1]) == null ? void 0 : d.url) != null ? u : "",
				email: (m = p == null ? void 0 : p.email) != null ? m : "",
				priceTier: g
			};
		}, n[4] = l, n[5] = I) : I = n[5];
		var T = p(I), D = T[0], x = T[1], $ = p(D), P = $[0], N = $[1], M = p(!1), w = M[0], A = M[1], F = p(0), O = F[0], B = F[1], W = p(!0), q = W[0], U = W[1], V = p(null), H = V[0], G = V[1], z;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t) {
			G(t);
		}, n[6] = z) : z = n[6];
		var j = z, K;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (K = async function(t) {
			var e = await o("WAWebBusinessProfileEdit").editBusinessProfile(t), n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(g);
			return n && n.markStale(), await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(g), B(v), e;
		}, n[7] = K) : K = n[7];
		var Q = K, X;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (X = async function(t) {
			var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			await o("WAWebEditBizProfileMutation").editBizProfile(e.toString(), t);
			var n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(g);
			n && n.markStale(), await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(g), B(b);
		}, n[8] = X) : X = n[8];
		var Y = X, J = D.description !== P.description || D.address !== P.address || D.serviceAreaRadius !== P.serviceAreaRadius || D.locationNotes !== P.locationNotes || D.primaryWebsite !== P.primaryWebsite || D.secondaryWebsite !== P.secondaryWebsite || D.email !== P.email || D.priceTier !== P.priceTier || H != null, Z;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (Z = function(t, n) {
			N(function(e) {
				var r;
				return babelHelpers.extends({}, e, (r = {}, r[t] = n, r));
			});
		}, n[9] = Z) : Z = n[9];
		var ee = Z, te;
		n[10] !== P || n[11] !== D || n[12] !== H ? (te = function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickSaveFieldsGraphQL();
			var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave(D, P), A(!0);
			var t = {};
			if (D.description !== P.description && (t.description = P.description || null), D.email !== P.email && (t.email = P.email || null), D.address !== P.address && (t.address = P.address || null), D.priceTier !== P.priceTier) {
				var n = P.priceTier;
				t.price_tier = n === "1" ? "BUDGET" : n === "2" ? "EVERYDAY" : n === "3" ? "PREMIUM" : n === "4" ? "LUXURY" : null;
			}
			H != null && (t.latitude = H.latitude, t.longitude = H.longitude);
			var r = D.primaryWebsite !== P.primaryWebsite || D.secondaryWebsite !== P.secondaryWebsite;
			if (r) {
				var a = [];
				P.primaryWebsite && a.push(P.primaryWebsite), P.secondaryWebsite && a.push(P.secondaryWebsite), t.websites = a;
			}
			var i = D.serviceAreaRadius !== P.serviceAreaRadius, l = D.locationNotes !== P.locationNotes;
			if (i || l) {
				var s, u, d, m, p, _, f = Number(P.serviceAreaRadius) || 0, g = (s = (u = H == null ? void 0 : H.latitude) != null ? u : (d = c.businessProfile) == null ? void 0 : d.latitude) != null ? s : 0, h = (m = (p = H == null ? void 0 : H.longitude) != null ? p : (_ = c.businessProfile) == null ? void 0 : _.longitude) != null ? m : 0;
				t.service_areas = [{
					radius_meters: f,
					center_latitude: g,
					center_longitude: h,
					description: P.locationNotes
				}];
			}
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.callSaveFieldsGraphQLMutation(), o("WAWebEditBizProfileMutation").editBizProfile(e.toString(), t).then(function() {
				x(P), G(null), A(!1);
			}).catch(function(e) {
				throw o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveFieldsGraphQLError(e), A(!1), e;
			});
		}, n[10] = P, n[11] = D, n[12] = H, n[13] = te) : te = n[13];
		var ne = te, re;
		n[14] !== P || n[15] !== J || n[16] !== D || n[17] !== H ? (re = function() {
			if (J) {
				o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave(D, P), A(!0);
				var e = {};
				if (D.address !== P.address && (e.address = P.address || null), D.description !== P.description) {
					var t, n = (t = P.description) == null ? void 0 : t.trim();
					e.description = n || null;
				}
				D.email !== P.email && (e.email = P.email || null), D.priceTier !== P.priceTier && (e.priceTier = P.priceTier || null), H != null && (e.latitude = H.latitude, e.longitude = H.longitude);
				var a = D.serviceAreaRadius !== P.serviceAreaRadius, i = D.locationNotes !== P.locationNotes;
				if (a || i) {
					var l, s, u, d, m, p, _ = Number(P.serviceAreaRadius) || 0, f = (l = (s = H == null ? void 0 : H.latitude) != null ? s : (u = c.businessProfile) == null ? void 0 : u.latitude) != null ? l : 0, g = (d = (m = H == null ? void 0 : H.longitude) != null ? m : (p = c.businessProfile) == null ? void 0 : p.longitude) != null ? d : 0;
					e.serviceAreas = [{
						radius: _,
						latitude: f,
						longitude: g,
						areaDescription: P.locationNotes
					}];
				}
				var h = D.primaryWebsite !== P.primaryWebsite || D.secondaryWebsite !== P.secondaryWebsite;
				if (h) {
					var y = [];
					P.primaryWebsite && y.push({ url: P.primaryWebsite }), P.secondaryWebsite && y.push({ url: P.secondaryWebsite }), e.website = y;
				}
				var C = r("isEmptyObject")(e) ? Promise.resolve() : o("WAWebBusinessProfileEdit").editBusinessProfile(e);
				C.then(function() {
					x(P), G(null), A(!1);
				}).catch(function(e) {
					throw A(!1), e;
				});
			}
		}, n[14] = P, n[15] = J, n[16] = D, n[17] = H, n[18] = re) : re = n[18];
		var oe = re, ae;
		n[19] !== oe || n[20] !== ne ? (ae = function() {
			o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled() ? ne() : oe();
		}, n[19] = oe, n[20] = ne, n[21] = ae) : ae = n[21];
		var ie = ae, le;
		n[22] !== ie || n[23] !== J || n[24] !== i || n[25] !== D ? (le = function() {
			if (!J) {
				i();
				return;
			}
			var e = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: u.jsx(r("WDSText.react"), {
					type: "Headline1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
				onCancel: o("WAWebModalManager").closeModalManager
			});
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: e,
				okText: s._(
					/*BTDS*/
					""
				),
				cancelText: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), ie();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.close(), N(D), G(null), B(C);
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-profile-discard"
				},
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}));
		}, n[22] = ie, n[23] = J, n[24] = i, n[25] = D, n[26] = le) : le = n[26];
		var se = le, ue, ce;
		n[27] !== a ? (ue = function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.viewProfile(a);
			var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
			t && (t.markStale(), B(y));
		}, ce = [a], n[27] = a, n[28] = ue, n[29] = ce) : (ue = n[28], ce = n[29]), d(ue, ce);
		var de = m(null), me, pe;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (me = function() {
			var e = de.current;
			if (e != null) {
				var t = window.requestAnimationFrame(function() {
					var t = e.querySelectorAll(_), n = t[0];
					n instanceof HTMLElement && n.focus();
				}), n = function(n) {
					if (n.key === "Tab") {
						var t = document.activeElement;
						if (!(!(t instanceof HTMLElement) || !e.contains(t))) {
							var r = Array.from(e.querySelectorAll(_)).filter(h);
							if (r.length !== 0) {
								var o = r.indexOf(t), a = n.shiftKey ? -1 : 1, i;
								o === -1 ? i = n.shiftKey ? r.length - 1 : 0 : i = (o + a + r.length) % r.length, n.preventDefault(), n.stopImmediatePropagation();
								var l = r[i];
								l instanceof HTMLElement && l.focus();
							}
						}
					}
				};
				return document.addEventListener("keydown", n, !0), (function() {
					window.cancelAnimationFrame(t), document.removeEventListener("keydown", n, !0);
				});
			}
		}, pe = [], n[30] = me, n[31] = pe) : (me = n[30], pe = n[31]), d(me, pe);
		var _e;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (_e = {
			surface: "unknown",
			viewName: "biz-refreshed-profile"
		}, n[32] = _e) : _e = n[32];
		var fe = !q, ge;
		n[33] !== se || n[34] !== ie || n[35] !== J || n[36] !== w || n[37] !== fe ? (ge = u.jsx(r("WAWebProfileDrawerHeader.react"), {
			onClose: se,
			onSave: ie,
			hasChanges: J,
			isSaving: w,
			saveDisabled: fe
		}), n[33] = se, n[34] = ie, n[35] = J, n[36] = w, n[37] = fe, n[38] = ge) : ge = n[38];
		var he = (t = k != null ? k : l == null ? void 0 : l.about) != null ? t : "", ye;
		n[39] !== P || n[40] !== l || n[41] !== O || n[42] !== H || n[43] !== he ? (ye = u.jsx(r("WAWebProfileDrawerBody.react"), {
			about: he,
			onFieldChange: ee,
			onLocationSelect: j,
			bizProfileValues: P,
			onSave: Q,
			onSaveGraphQL: Y,
			onValidationChange: U,
			preloadedProfile: l,
			selectedLocation: H
		}, O), n[39] = P, n[40] = l, n[41] = O, n[42] = H, n[43] = he, n[44] = ye) : ye = n[44];
		var Ce;
		return n[45] !== ge || n[46] !== ye ? (Ce = u.jsxs(r("WAWebDrawer.react"), {
			ref: de,
			testid: "profile-drawer",
			xstyle: f.drawerWithMinWidth,
			tsNavigationData: _e,
			children: [ge, ye]
		}), n[45] = ge, n[46] = ye, n[47] = Ce) : Ce = n[47], Ce;
	}
	function h(e) {
		return e instanceof HTMLElement && e.offsetParent != null;
	}
	function y(e) {
		return e + 1;
	}
	function C(e) {
		return e + 1;
	}
	function b(e) {
		return e + 1;
	}
	function v(e) {
		return e + 1;
	}
	l.default = g;
}), 226);
