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
		var a, i = t.entryPoint, l = t.onClose, u = t.preloadedProfile, d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), h = o("WAWebContactCollection").ContactCollection.assertGet(d), y = h.getStatus(), C = o("useWAWebModelValues").useModelValues(y, ["status"]), b = C.status, v = _(function() {
			var e, t, n, r, o, a, i, l, s, c, d, m = h.businessProfile, p = m == null || (e = m.serviceAreas) == null ? void 0 : e[0], _ = (t = h.pushname) != null ? t : "", f = (n = m == null ? void 0 : m.priceTier) != null ? n : "";
			if (u != null) {
				var g, y, C, b, v, S, R, L, E;
				return {
					businessName: _,
					description: (g = u.description) != null ? g : "",
					address: (y = u.address) != null ? y : "",
					serviceAreaRadius: (C = u.serviceAreaRadius) != null ? C : "",
					locationNotes: (b = u.locationNotes) != null ? b : "",
					primaryWebsite: (v = (S = u.websites) == null ? void 0 : S[0]) != null ? v : "",
					secondaryWebsite: (R = (L = u.websites) == null ? void 0 : L[1]) != null ? R : "",
					email: (E = u.email) != null ? E : "",
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
				secondaryWebsite: (s = m == null || (c = m.website) == null || (c = c[1]) == null ? void 0 : c.url) != null ? s : "",
				email: (d = m == null ? void 0 : m.email) != null ? d : "",
				priceTier: f
			};
		}), S = v[0], R = v[1], L = _(S), E = L[0], k = L[1], I = _(!1), T = I[0], D = I[1], x = _(0), $ = x[0], P = x[1], N = _(!0), M = N[0], w = N[1], A = _(null), F = A[0], O = A[1], B = function(t) {
			O(t);
		}, W = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("WAWebBusinessProfileEdit").editBusinessProfile(e), n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(d);
				return n && n.markStale(), yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(d), P(function(e) {
					return e + 1;
				}), t;
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), q = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
				yield o("WAWebEditBizProfileMutation").editBizProfile(t.toString(), e);
				var n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(d);
				n && n.markStale(), yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(d), P(function(e) {
					return e + 1;
				});
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), U = S.description !== E.description || S.address !== E.address || S.serviceAreaRadius !== E.serviceAreaRadius || S.locationNotes !== E.locationNotes || S.primaryWebsite !== E.primaryWebsite || S.secondaryWebsite !== E.secondaryWebsite || S.email !== E.email || S.priceTier !== E.priceTier || F != null, V = function(t, n) {
			k(function(e) {
				var r;
				return babelHelpers.extends({}, e, (r = {}, r[t] = n, r));
			});
		}, H = function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickSaveFieldsGraphQL();
			var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave(S, E), D(!0);
			var t = {};
			if (S.description !== E.description && (t.description = E.description || null), S.email !== E.email && (t.email = E.email || null), S.address !== E.address && (t.address = E.address || null), S.priceTier !== E.priceTier) {
				var n = E.priceTier;
				t.price_tier = n === "1" ? "BUDGET" : n === "2" ? "EVERYDAY" : n === "3" ? "PREMIUM" : n === "4" ? "LUXURY" : null;
			}
			F != null && (t.latitude = F.latitude, t.longitude = F.longitude);
			var r = S.primaryWebsite !== E.primaryWebsite || S.secondaryWebsite !== E.secondaryWebsite;
			if (r) {
				var a = [];
				E.primaryWebsite && a.push(E.primaryWebsite), E.secondaryWebsite && a.push(E.secondaryWebsite), t.websites = a;
			}
			var i = S.serviceAreaRadius !== E.serviceAreaRadius, l = S.locationNotes !== E.locationNotes;
			if (i || l) {
				var s, u, c, d, m, p, _ = Number(E.serviceAreaRadius) || 0, f = (s = (u = F == null ? void 0 : F.latitude) != null ? u : (c = h.businessProfile) == null ? void 0 : c.latitude) != null ? s : 0, g = (d = (m = F == null ? void 0 : F.longitude) != null ? m : (p = h.businessProfile) == null ? void 0 : p.longitude) != null ? d : 0;
				t.service_areas = [{
					radius_meters: _,
					center_latitude: f,
					center_longitude: g,
					description: E.locationNotes
				}];
			}
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.callSaveFieldsGraphQLMutation(), o("WAWebEditBizProfileMutation").editBizProfile(e.toString(), t).then(function() {
				R(E), O(null), D(!1);
			}).catch(function(e) {
				throw o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveFieldsGraphQLError(e), D(!1), e;
			});
		}, G = function() {
			if (U) {
				o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave(S, E), D(!0);
				var t = {};
				if (S.address !== E.address && (t.address = E.address || null), S.description !== E.description) {
					var a, i = (a = E.description) == null ? void 0 : a.trim();
					t.description = i || null;
				}
				S.email !== E.email && (t.email = E.email || null), S.priceTier !== E.priceTier && (t.priceTier = E.priceTier || null), F != null && (t.latitude = F.latitude, t.longitude = F.longitude);
				var l = S.serviceAreaRadius !== E.serviceAreaRadius, s = S.locationNotes !== E.locationNotes;
				if (l || s) {
					var u, c, d, m, p, _, f = Number(E.serviceAreaRadius) || 0, g = (u = (c = F == null ? void 0 : F.latitude) != null ? c : (d = h.businessProfile) == null ? void 0 : d.latitude) != null ? u : 0, y = (m = (p = F == null ? void 0 : F.longitude) != null ? p : (_ = h.businessProfile) == null ? void 0 : _.longitude) != null ? m : 0;
					t.serviceAreas = [{
						radius: f,
						latitude: g,
						longitude: y,
						areaDescription: E.locationNotes
					}];
				}
				var C = S.primaryWebsite !== E.primaryWebsite || S.secondaryWebsite !== E.secondaryWebsite;
				if (C) {
					var b = [];
					E.primaryWebsite && b.push({ url: E.primaryWebsite }), E.secondaryWebsite && b.push({ url: E.secondaryWebsite }), t.website = b;
				}
				var v = r("isEmptyObject")(t) ? (e || (e = n("Promise"))).resolve() : o("WAWebBusinessProfileEdit").editBusinessProfile(t);
				v.then(function() {
					R(E), O(null), D(!1);
				}).catch(function(e) {
					throw D(!1), e;
				});
			}
		}, z = function() {
			o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled() ? H() : G();
		}, j = function() {
			if (!U) {
				l();
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
					o("WAWebModalManager").ModalManager.close(), z();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.close(), k(S), O(null), P(function(e) {
						return e + 1;
					});
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
		};
		m(function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.viewProfile(i);
			var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
			t && (t.markStale(), P(function(e) {
				return e + 1;
			}));
		}, [i]);
		var K = p(null);
		return m(function() {
			var e = K.current;
			if (e != null) {
				var t = window.requestAnimationFrame(function() {
					var t = e.querySelectorAll(f), n = t[0];
					n instanceof HTMLElement && n.focus();
				}), n = function(n) {
					if (n.key === "Tab") {
						var t = document.activeElement;
						if (!(!(t instanceof HTMLElement) || !e.contains(t))) {
							var r = Array.from(e.querySelectorAll(f)).filter(function(e) {
								return e instanceof HTMLElement && e.offsetParent != null;
							});
							if (r.length !== 0) {
								var o = r.indexOf(t), a = n.shiftKey ? -1 : 1, i;
								o === -1 ? i = n.shiftKey ? r.length - 1 : 0 : i = (o + a + r.length) % r.length, n.preventDefault(), n.stopImmediatePropagation();
								var l = r[i];
								l instanceof HTMLElement && l.focus();
							}
						}
					}
				};
				return document.addEventListener("keydown", n, !0), function() {
					window.cancelAnimationFrame(t), document.removeEventListener("keydown", n, !0);
				};
			}
		}, []), c.jsxs(r("WAWebDrawer.react"), {
			ref: K,
			testid: "profile-drawer",
			xstyle: g.drawerWithMinWidth,
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-refreshed-profile"
			},
			children: [c.jsx(r("WAWebProfileDrawerHeader.react"), {
				onClose: j,
				onSave: z,
				hasChanges: U,
				isSaving: T,
				saveDisabled: !M
			}), c.jsx(r("WAWebProfileDrawerBody.react"), {
				about: (a = b != null ? b : u == null ? void 0 : u.about) != null ? a : "",
				onFieldChange: V,
				onLocationSelect: B,
				bizProfileValues: E,
				onSave: W,
				onSaveGraphQL: q,
				onValidationChange: w,
				preloadedProfile: u,
				selectedLocation: F
			}, $)]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
