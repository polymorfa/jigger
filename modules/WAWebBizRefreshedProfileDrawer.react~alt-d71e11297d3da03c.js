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
		var t, n = e.entryPoint, a = e.onClose, i = e.preloadedProfile, l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), c = o("WAWebContactCollection").ContactCollection.assertGet(l), g = c.getStatus(), h = o("useWAWebModelValues").useModelValues(g, ["status"]), y = h.status, C = p(function() {
			var e, t, n, r, o, a, l, s, u, d, m, p = c.businessProfile, _ = p == null || (e = p.serviceAreas) == null ? void 0 : e[0], f = (t = c.pushname) != null ? t : "", g = (n = p == null ? void 0 : p.priceTier) != null ? n : "";
			if (i != null) {
				var h, y, C, b, v, S, R, L, E;
				return {
					businessName: f,
					description: (h = i.description) != null ? h : "",
					address: (y = i.address) != null ? y : "",
					serviceAreaRadius: (C = i.serviceAreaRadius) != null ? C : "",
					locationNotes: (b = i.locationNotes) != null ? b : "",
					primaryWebsite: (v = (S = i.websites) == null ? void 0 : S[0]) != null ? v : "",
					secondaryWebsite: (R = (L = i.websites) == null ? void 0 : L[1]) != null ? R : "",
					email: (E = i.email) != null ? E : "",
					priceTier: g
				};
			}
			return {
				businessName: f,
				description: (r = p == null ? void 0 : p.description) != null ? r : "",
				address: (o = p == null ? void 0 : p.address) != null ? o : "",
				serviceAreaRadius: (_ == null ? void 0 : _.radius) != null ? String(_.radius) : "",
				locationNotes: (a = _ == null ? void 0 : _.areaDescription) != null ? a : "",
				primaryWebsite: (l = p == null || (s = p.website) == null || (s = s[0]) == null ? void 0 : s.url) != null ? l : "",
				secondaryWebsite: (u = p == null || (d = p.website) == null || (d = d[1]) == null ? void 0 : d.url) != null ? u : "",
				email: (m = p == null ? void 0 : p.email) != null ? m : "",
				priceTier: g
			};
		}), b = C[0], v = C[1], S = p(b), R = S[0], L = S[1], E = p(!1), k = E[0], I = E[1], T = p(0), D = T[0], x = T[1], $ = p(!0), P = $[0], N = $[1], M = p(null), w = M[0], A = M[1], F = function(t) {
			A(t);
		}, O = async function(t) {
			var e = await o("WAWebBusinessProfileEdit").editBusinessProfile(t), n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(l);
			return n && n.markStale(), await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(l), x(function(e) {
				return e + 1;
			}), e;
		}, B = async function(t) {
			var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			await o("WAWebEditBizProfileMutation").editBizProfile(e.toString(), t);
			var n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(l);
			n && n.markStale(), await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(l), x(function(e) {
				return e + 1;
			});
		}, W = b.description !== R.description || b.address !== R.address || b.serviceAreaRadius !== R.serviceAreaRadius || b.locationNotes !== R.locationNotes || b.primaryWebsite !== R.primaryWebsite || b.secondaryWebsite !== R.secondaryWebsite || b.email !== R.email || b.priceTier !== R.priceTier || w != null, q = function(t, n) {
			L(function(e) {
				var r;
				return babelHelpers.extends({}, e, (r = {}, r[t] = n, r));
			});
		}, U = function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickSaveFieldsGraphQL();
			var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave(b, R), I(!0);
			var t = {};
			if (b.description !== R.description && (t.description = R.description || null), b.email !== R.email && (t.email = R.email || null), b.address !== R.address && (t.address = R.address || null), b.priceTier !== R.priceTier) {
				var n = R.priceTier;
				t.price_tier = n === "1" ? "BUDGET" : n === "2" ? "EVERYDAY" : n === "3" ? "PREMIUM" : n === "4" ? "LUXURY" : null;
			}
			w != null && (t.latitude = w.latitude, t.longitude = w.longitude);
			var r = b.primaryWebsite !== R.primaryWebsite || b.secondaryWebsite !== R.secondaryWebsite;
			if (r) {
				var a = [];
				R.primaryWebsite && a.push(R.primaryWebsite), R.secondaryWebsite && a.push(R.secondaryWebsite), t.websites = a;
			}
			var i = b.serviceAreaRadius !== R.serviceAreaRadius, l = b.locationNotes !== R.locationNotes;
			if (i || l) {
				var s, u, d, m, p, _, f = Number(R.serviceAreaRadius) || 0, g = (s = (u = w == null ? void 0 : w.latitude) != null ? u : (d = c.businessProfile) == null ? void 0 : d.latitude) != null ? s : 0, h = (m = (p = w == null ? void 0 : w.longitude) != null ? p : (_ = c.businessProfile) == null ? void 0 : _.longitude) != null ? m : 0;
				t.service_areas = [{
					radius_meters: f,
					center_latitude: g,
					center_longitude: h,
					description: R.locationNotes
				}];
			}
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.callSaveFieldsGraphQLMutation(), o("WAWebEditBizProfileMutation").editBizProfile(e.toString(), t).then(function() {
				v(R), A(null), I(!1);
			}).catch(function(e) {
				throw o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveFieldsGraphQLError(e), I(!1), e;
			});
		}, V = function() {
			if (W) {
				o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.logProfileFieldsSave(b, R), I(!0);
				var e = {};
				if (b.address !== R.address && (e.address = R.address || null), b.description !== R.description) {
					var t, n = (t = R.description) == null ? void 0 : t.trim();
					e.description = n || null;
				}
				b.email !== R.email && (e.email = R.email || null), b.priceTier !== R.priceTier && (e.priceTier = R.priceTier || null), w != null && (e.latitude = w.latitude, e.longitude = w.longitude);
				var a = b.serviceAreaRadius !== R.serviceAreaRadius, i = b.locationNotes !== R.locationNotes;
				if (a || i) {
					var l, s, u, d, m, p, _ = Number(R.serviceAreaRadius) || 0, f = (l = (s = w == null ? void 0 : w.latitude) != null ? s : (u = c.businessProfile) == null ? void 0 : u.latitude) != null ? l : 0, g = (d = (m = w == null ? void 0 : w.longitude) != null ? m : (p = c.businessProfile) == null ? void 0 : p.longitude) != null ? d : 0;
					e.serviceAreas = [{
						radius: _,
						latitude: f,
						longitude: g,
						areaDescription: R.locationNotes
					}];
				}
				var h = b.primaryWebsite !== R.primaryWebsite || b.secondaryWebsite !== R.secondaryWebsite;
				if (h) {
					var y = [];
					R.primaryWebsite && y.push({ url: R.primaryWebsite }), R.secondaryWebsite && y.push({ url: R.secondaryWebsite }), e.website = y;
				}
				var C = r("isEmptyObject")(e) ? Promise.resolve() : o("WAWebBusinessProfileEdit").editBusinessProfile(e);
				C.then(function() {
					v(R), A(null), I(!1);
				}).catch(function(e) {
					throw I(!1), e;
				});
			}
		}, H = function() {
			o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled() ? U() : V();
		}, G = function() {
			if (!W) {
				a();
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
					o("WAWebModalManager").ModalManager.close(), H();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.close(), L(b), A(null), x(function(e) {
						return e + 1;
					});
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
		};
		d(function() {
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.viewProfile(n);
			var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
			t && (t.markStale(), x(function(e) {
				return e + 1;
			}));
		}, [n]);
		var z = m(null);
		return d(function() {
			var e = z.current;
			if (e != null) {
				var t = window.requestAnimationFrame(function() {
					var t = e.querySelectorAll(_), n = t[0];
					n instanceof HTMLElement && n.focus();
				}), n = function(n) {
					if (n.key === "Tab") {
						var t = document.activeElement;
						if (!(!(t instanceof HTMLElement) || !e.contains(t))) {
							var r = Array.from(e.querySelectorAll(_)).filter(function(e) {
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
		}, []), u.jsxs(r("WAWebDrawer.react"), {
			ref: z,
			testid: "profile-drawer",
			xstyle: f.drawerWithMinWidth,
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-refreshed-profile"
			},
			children: [u.jsx(r("WAWebProfileDrawerHeader.react"), {
				onClose: G,
				onSave: H,
				hasChanges: W,
				isSaving: k,
				saveDisabled: !P
			}), u.jsx(r("WAWebProfileDrawerBody.react"), {
				about: (t = y != null ? y : i == null ? void 0 : i.about) != null ? t : "",
				onFieldChange: q,
				onLocationSelect: F,
				bizProfileValues: R,
				onSave: O,
				onSaveGraphQL: B,
				onValidationChange: N,
				preloadedProfile: i,
				selectedLocation: w
			}, D)]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
