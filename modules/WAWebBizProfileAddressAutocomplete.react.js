__d("WAWebBizProfileAddressAutocomplete.react", [
	"WAWebBizProfileAddressAutocompleteQuery.graphql",
	"WAWebBusinessProfileLabels",
	"WAWebBusinessProfileTextField.react",
	"WAWebCountryCenterCoordinates",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebRelayClient",
	"WAWebServiceAreaRadiusDropdown.react",
	"WDSIconIcLocationOn.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useId, _ = c.useMemo, f = c.useRef, g = c.useState, h = e !== void 0 ? e : e = n("WAWebBizProfileAddressAutocompleteQuery.graphql"), y = 300, C = 3, b = "calc(" + o("WDSVars.stylex").WDSVars.spacingTriple + " + " + o("WDSVars.stylex").WDSVars.spacingSingle + " * 2 + 12px + " + o("WDSVars.stylex").WDSVars.spacingSingle + ")", v = { menuContainer: {
		backgroundColor: "x16w0wmm",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		boxShadow: "x1sr759z",
		color: "x14ug900",
		insetInlineStart: "xxb5yu8",
		left: null,
		right: null,
		marginTop: "x1wgys3m",
		maxHeight: "xuyqlj2",
		overflowX: "x6ikm8r",
		overflowY: "x1odjw0f",
		position: "x10l6tqk",
		top: "xdsb8wn",
		width: "x116kdbm",
		zIndex: "xfo81ep",
		$$css: !0
	} };
	function S(e) {
		var t = e.defaultValue, a = t === void 0 ? "" : t, i = e.fieldName, l = e.initialLatitude, s = e.initialLongitude, c = e.label, b = e.locationNotesValue, S = b === void 0 ? "" : b, R = e.onChange, L = e.onClick, E = e.onLocationSelect, k = e.serviceAreaRadiusValue, I = k === void 0 ? "" : k, T = e.xstyle, D = g(a), x = D[0], $ = D[1], P = g([]), N = P[0], M = P[1], w = _(function() {
			return l != null && s != null ? {
				latitude: l,
				longitude: s
			} : o("WAWebCountryCenterCoordinates").getDefaultCenter();
		}, [l, s]), A = f(null), F = f(!1), O = f(!0), B = f(null), W = p(), q = N.length > 0, U = d(function() {
			M([]);
		}, []);
		o("useWAWebOnOutsideClick").useOnOutsideClick(B, U);
		var V = d(function(e) {
			var t = e.title;
			F.current = !0, $(t), M([]), R != null && i != null && R(i, t), E != null && e.latitude != null && e.longitude != null && E({
				latitude: e.latitude,
				longitude: e.longitude
			});
		}, [
			i,
			R,
			E
		]), H = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e.length < C) {
					M([]);
					return;
				}
				try {
					var t, n, r = yield o("WAWebRelayClient").fetchQuery(h, { input: {
						center: w,
						query: e,
						use_case_id: "WHATSAPP_BIZ_PROFILE"
					} }, { environmentType: "facebook" });
					if (r == null) {
						M([]);
						return;
					}
					var a = (t = (n = r.whatsapp_maps_typeahead) == null ? void 0 : n.items) != null ? t : [], i = a.map(function(e, t) {
						var n, r, o, a, i, l, s, u, c, d, m, p, _, f, g;
						return {
							city: (n = (r = e.address) == null ? void 0 : r.city) != null ? n : null,
							country: (o = (a = e.address) == null ? void 0 : a.country) != null ? o : null,
							id: (i = e.id) != null ? i : "result-" + t,
							latitude: (l = (s = e.location) == null ? void 0 : s.latitude) != null ? l : null,
							longitude: (u = (c = e.location) == null ? void 0 : c.longitude) != null ? u : null,
							postalcode: (d = (m = e.address) == null ? void 0 : m.postalcode) != null ? d : null,
							stateprovince: (p = (_ = e.address) == null ? void 0 : _.stateprovince) != null ? p : null,
							streetaddress: (f = (g = e.address) == null ? void 0 : g.streetaddress) != null ? f : null,
							title: e.title
						};
					});
					M(i);
				} catch (e) {
					M([]);
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [w]);
		m(function() {
			if (O.current) {
				O.current = !1;
				return;
			}
			if (F.current) {
				F.current = !1;
				return;
			}
			return A.current != null && self.clearTimeout(A.current), x.length >= C ? A.current = self.setTimeout(function() {
				H(x).catch(r("WAWebNoop"));
			}, y) : M([]), function() {
				A.current != null && self.clearTimeout(A.current);
			};
		}, [x, H]);
		var G = d(function(e, t) {
			$(t), R != null && R(e, t);
		}, [R]);
		return u.jsxs(u.Fragment, { children: [
			u.jsxs("div", {
				className: "x1n2onr6 xh8yej3",
				ref: B,
				role: "combobox",
				"aria-expanded": q,
				"aria-controls": q ? W : void 0,
				"aria-haspopup": "listbox",
				children: [u.jsx(r("WAWebBusinessProfileTextField.react"), {
					editable: !0,
					fieldName: i,
					icon: u.jsx(r("WDSIconIcLocationOn.react"), {}),
					label: c,
					onChange: G,
					onClick: L,
					testid: "biz_profile_address_textfield",
					value: x,
					xstyle: T
				}), q && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: v.menuContainer,
					id: W,
					role: "listbox",
					"aria-label": c,
					children: u.jsx(r("WDSMenu.react"), {
						useMaxWidth: !1,
						children: N.map(function(e) {
							var t, n = [
								e.streetaddress,
								e.city,
								e.stateprovince,
								e.postalcode
							].filter(Boolean).join(", ");
							return u.jsx(r("WDSMenuItem.react"), {
								Icon: r("WDSIconIcLocationOn.react"),
								onPress: function() {
									return V(e);
								},
								subtitle: (t = e.country) != null ? t : void 0,
								title: n || e.title
							}, e.id);
						})
					})
				})]
			}),
			u.jsx(r("WAWebServiceAreaRadiusDropdown.react"), {
				label: o("WAWebBusinessProfileLabels").getCoverageAreaLabel(),
				onChange: R,
				value: I,
				xstyle: T
			}),
			u.jsx(r("WAWebBusinessProfileTextField.react"), {
				editable: !0,
				fieldName: "locationNotes",
				label: o("WAWebBusinessProfileLabels").getLocationNotesLabel(),
				onChange: R,
				testid: "biz_profile_location_notes_textfield",
				value: S,
				xstyle: T
			})
		] });
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 98);
