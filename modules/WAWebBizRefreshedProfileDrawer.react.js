__d("WAWebBizRefreshedProfileDrawer.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"isEmptyObject",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = "button:not(:disabled):not([tabindex=\"-1\"]), input:not(:disabled):not([tabindex=\"-1\"]), select:not(:disabled):not([tabindex=\"-1\"]), textarea:not(:disabled):not([tabindex=\"-1\"]), a[href]:not([tabindex=\"-1\"]), [tabindex]:not([tabindex=\"-1\"])", g = { drawerWithMinWidth: {
		backgroundColor: "x6egj2d",
		minWidth: "x15icp18",
		overflowX: "x6ikm8r",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function h(t) {
		var a, i = o("react-compiler-runtime").c(48), l = t.entryPoint, u = t.onClose, d = t.preloadedProfile, h, R, L;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (R = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), h = o("WAWebContactCollection").ContactCollection.assertGet(R), L = h.getStatus(), i[0] = h, i[1] = R, i[2] = L) : (h = i[0], R = i[1], L = i[2]);
		var E = L, k;
		i[3] === Symbol.for("react.memo_cache_sentinel") ? (k = ["status"], i[3] = k) : k = i[3];
		var I = o("useWAWebModelValues").useModelValues(E, k), T = I.status, D;
		i[4] !== d ? (D = function() {
			var e, t, n, r, o, a, i, l, s, u, c, m = h.businessProfile, p = m == null || (e = m.serviceAreas) == null ? void 0 : e[0], _ = (t = h.pushname) != null ? t : "", f = (n = m == null ? void 0 : m.priceTier) != null ? n : "";
			if (d != null) {
				var g, y, C, b, v, S, R, L, E;
				return {
					businessName: _,
					description: (g = d.description) != null ? g : "",
					address: (y = d.address) != null ? y : "",
					serviceAreaRadius: (C = d.serviceAreaRadius) != null ? C : "",
					locationNotes: (b = d.locationNotes) != null ? b : "",
					primaryWebsite: (v = (S = d.websites) == null ? void 0 : S[0]) != null ? v : "",
					secondaryWebsite: (R = (L = d.websites) == null ? void 0 : L[1]) != null ? R : "",
					email: (E = d.email) != null ? E : "",
					priceTier: f
				};
			}
			return {
				businessName: _,
				description: (r = m == null ? void 0 : m.description) != null ? r : "",
				address: (o = m == null ? void 0 : m.address) != null ? o : "",
				serviceAreaRadius: (p == null ? void 0 : p.radius) != null ? String(p.radius) : "",
				locationNotes: (a = p == null ? void 0 : p.areaDescription) != null ? a : "",
				primaryWebsite: (i = m == null || (l = m.website) == null || (l = l[0]) == null ? void 0 : l.url) != null ? i : "",
				secondaryWebsite: (s = m == null || (u = m.website) == null || (u = u[1]) == null ? void 0 : u.url) != null ? s : "",
				email: (c = m == null ? void 0 : m.email) != null ? c : "",
				priceTier: f
			};
		}, i[4] = d, i[5] = D) : D = i[5];
		var x = _(D), $ = x[0], P = x[1], N = _($), M = N[0], w = N[1], A = _(!1), F = A[0], O = A[1], B = _(0), W = B[0], q = B[1], U = _(!0), V = U[0], H = U[1], G = _(null), z = G[0], j = G[1], K;
		i[6] === Symbol.for("react.memo_cache_sentinel") ? (K = function(t) {
			j(t);
		}, i[6] = K) : K = i[6];
		var Q = K, X;
		i[7] === Symbol.for("react.memo_cache_sentinel") ? (X = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("WAWebBusinessProfileEdit").editBusinessProfile(e), n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(R);
				return n && n.markStale(), yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(R), q(S), t;
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), i[7] = X) : X = i[7];
		var Y = X, J;
		i[8] === Symbol.for("react.memo_cache_sentinel") ? (J = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
				yield o("WAWebEditBizProfileMutation").editBizProfile(t.toString(), e);
				var n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(R);
				n && n.markStale(), yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(R), q(v);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), i[8] = J) : J = i[8];
		var Z = J, ee = $.description !== M.description || $.address !== M.address || $.serviceAreaRadius !== M.serviceAreaRadius || $.locationNotes !== M.locationNotes || $.primaryWebsite !== M.primaryWebsite || $.secondaryWebsite !== M.secondaryWebsite || $.email !== M.email || $.priceTier !== M.priceTier || z != null, te;
		i[9] === Symbol.for("react.memo_cache_sentinel") ? (te = function(t, n) {
			w(function(e) {
				var r;
				return babelHelpers.extends({}, e, (r = {}, r[t] = n, r));
			});
		}, i[9] = te) : te = i[9];
		var ne = te, re;
		i[10] !== M || i[11] !== $ || i[12] !== z ? (re = function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickSaveFieldsGraphQL();
			var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave($, M), O(!0);
			var t = {};
			if ($.description !== M.description && (t.description = M.description || null), $.email !== M.email && (t.email = M.email || null), $.address !== M.address && (t.address = M.address || null), $.priceTier !== M.priceTier) {
				var n = M.priceTier;
				t.price_tier = n === "1" ? "BUDGET" : n === "2" ? "EVERYDAY" : n === "3" ? "PREMIUM" : n === "4" ? "LUXURY" : null;
			}
			z != null && (t.latitude = z.latitude, t.longitude = z.longitude);
			var r = $.primaryWebsite !== M.primaryWebsite || $.secondaryWebsite !== M.secondaryWebsite;
			if (r) {
				var a = [];
				M.primaryWebsite && a.push(M.primaryWebsite), M.secondaryWebsite && a.push(M.secondaryWebsite), t.websites = a;
			}
			var i = $.serviceAreaRadius !== M.serviceAreaRadius, l = $.locationNotes !== M.locationNotes;
			if (i || l) {
				var s, u, c, d, m, p, _ = Number(M.serviceAreaRadius) || 0, f = (s = (u = z == null ? void 0 : z.latitude) != null ? u : (c = h.businessProfile) == null ? void 0 : c.latitude) != null ? s : 0, g = (d = (m = z == null ? void 0 : z.longitude) != null ? m : (p = h.businessProfile) == null ? void 0 : p.longitude) != null ? d : 0;
				t.service_areas = [{
					radius_meters: _,
					center_latitude: f,
					center_longitude: g,
					description: M.locationNotes
				}];
			}
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.callSaveFieldsGraphQLMutation(), o("WAWebEditBizProfileMutation").editBizProfile(e.toString(), t).then(function() {
				P(M), j(null), O(!1);
			}).catch(function(e) {
				throw o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveFieldsGraphQLError(e), O(!1), e;
			});
		}, i[10] = M, i[11] = $, i[12] = z, i[13] = re) : re = i[13];
		var oe = re, ae;
		i[14] !== M || i[15] !== ee || i[16] !== $ || i[17] !== z ? (ae = function() {
			if (ee) {
				o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave($, M), O(!0);
				var t = {};
				if ($.address !== M.address && (t.address = M.address || null), $.description !== M.description) {
					var a, i = (a = M.description) == null ? void 0 : a.trim();
					t.description = i || null;
				}
				$.email !== M.email && (t.email = M.email || null), $.priceTier !== M.priceTier && (t.priceTier = M.priceTier || null), z != null && (t.latitude = z.latitude, t.longitude = z.longitude);
				var l = $.serviceAreaRadius !== M.serviceAreaRadius, s = $.locationNotes !== M.locationNotes;
				if (l || s) {
					var u, c, d, m, p, _, f = Number(M.serviceAreaRadius) || 0, g = (u = (c = z == null ? void 0 : z.latitude) != null ? c : (d = h.businessProfile) == null ? void 0 : d.latitude) != null ? u : 0, y = (m = (p = z == null ? void 0 : z.longitude) != null ? p : (_ = h.businessProfile) == null ? void 0 : _.longitude) != null ? m : 0;
					t.serviceAreas = [{
						radius: f,
						latitude: g,
						longitude: y,
						areaDescription: M.locationNotes
					}];
				}
				var C = $.primaryWebsite !== M.primaryWebsite || $.secondaryWebsite !== M.secondaryWebsite;
				if (C) {
					var b = [];
					M.primaryWebsite && b.push({ url: M.primaryWebsite }), M.secondaryWebsite && b.push({ url: M.secondaryWebsite }), t.website = b;
				}
				var v = r("isEmptyObject")(t) ? (e || (e = n("Promise"))).resolve() : o("WAWebBusinessProfileEdit").editBusinessProfile(t);
				v.then(function() {
					P(M), j(null), O(!1);
				}).catch(function(e) {
					throw O(!1), e;
				});
			}
		}, i[14] = M, i[15] = ee, i[16] = $, i[17] = z, i[18] = ae) : ae = i[18];
		var ie = ae, le;
		i[19] !== ie || i[20] !== oe ? (le = function() {
			o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled() ? oe() : ie();
		}, i[19] = ie, i[20] = oe, i[21] = le) : le = i[21];
		var se = le, ue;
		i[22] !== se || i[23] !== ee || i[24] !== u || i[25] !== $ ? (ue = function() {
			if (!ee) {
				u();
				return;
			}
			var e = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: c.jsx(r("WDSText.react"), {
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
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
					o("WAWebModalManager").ModalManager.close(), se();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.close(), w($), j(null), q(b);
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-profile-discard"
				},
				children: c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}));
		}, i[22] = se, i[23] = ee, i[24] = u, i[25] = $, i[26] = ue) : ue = i[26];
		var ce = ue, de, me;
		i[27] !== l ? (de = function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.viewProfile(l);
			var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
			t && (t.markStale(), q(C));
		}, me = [l], i[27] = l, i[28] = de, i[29] = me) : (de = i[28], me = i[29]), m(de, me);
		var pe = p(null), _e, fe;
		i[30] === Symbol.for("react.memo_cache_sentinel") ? (_e = function() {
			var e = pe.current;
			if (e != null) {
				var t = window.requestAnimationFrame(function() {
					var t = e.querySelectorAll(f), n = t[0];
					n instanceof HTMLElement && n.focus();
				}), n = function(n) {
					if (n.key === "Tab") {
						var t = document.activeElement;
						if (!(!(t instanceof HTMLElement) || !e.contains(t))) {
							var r = Array.from(e.querySelectorAll(f)).filter(y);
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
		}, fe = [], i[30] = _e, i[31] = fe) : (_e = i[30], fe = i[31]), m(_e, fe);
		var ge;
		i[32] === Symbol.for("react.memo_cache_sentinel") ? (ge = {
			surface: "unknown",
			viewName: "biz-refreshed-profile"
		}, i[32] = ge) : ge = i[32];
		var he = !V, ye;
		i[33] !== ce || i[34] !== se || i[35] !== ee || i[36] !== F || i[37] !== he ? (ye = c.jsx(r("WAWebProfileDrawerHeader.react"), {
			onClose: ce,
			onSave: se,
			hasChanges: ee,
			isSaving: F,
			saveDisabled: he
		}), i[33] = ce, i[34] = se, i[35] = ee, i[36] = F, i[37] = he, i[38] = ye) : ye = i[38];
		var Ce = (a = T != null ? T : d == null ? void 0 : d.about) != null ? a : "", be;
		i[39] !== M || i[40] !== d || i[41] !== W || i[42] !== z || i[43] !== Ce ? (be = c.jsx(r("WAWebProfileDrawerBody.react"), {
			about: Ce,
			onFieldChange: ne,
			onLocationSelect: Q,
			bizProfileValues: M,
			onSave: Y,
			onSaveGraphQL: Z,
			onValidationChange: H,
			preloadedProfile: d,
			selectedLocation: z
		}, W), i[39] = M, i[40] = d, i[41] = W, i[42] = z, i[43] = Ce, i[44] = be) : be = i[44];
		var ve;
		return i[45] !== ye || i[46] !== be ? (ve = c.jsxs(r("WAWebDrawer.react"), {
			ref: pe,
			testid: "profile-drawer",
			xstyle: g.drawerWithMinWidth,
			tsNavigationData: ge,
			children: [ye, be]
		}), i[45] = ye, i[46] = be, i[47] = ve) : ve = i[47], ve;
	}
	function y(e) {
		return e instanceof HTMLElement && e.offsetParent != null;
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
	function S(e) {
		return e + 1;
	}
	l.default = h;
}), 226);
