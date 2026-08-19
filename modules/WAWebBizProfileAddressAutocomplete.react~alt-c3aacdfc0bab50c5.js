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
		var t = e.defaultValue, n = t === void 0 ? "" : t, a = e.fieldName, i = e.initialLatitude, l = e.initialLongitude, s = e.label, c = e.locationNotesValue, b = c === void 0 ? "" : c, S = e.onChange, R = e.onClick, L = e.onLocationSelect, E = e.serviceAreaRadiusValue, k = E === void 0 ? "" : E, I = e.xstyle, T = g(n), D = T[0], x = T[1], $ = g([]), P = $[0], N = $[1], M = _(function() {
			return i != null && l != null ? {
				latitude: i,
				longitude: l
			} : o("WAWebCountryCenterCoordinates").getDefaultCenter();
		}, [i, l]), w = f(null), A = f(!1), F = f(!0), O = f(null), B = p(), W = P.length > 0, q = d(function() {
			N([]);
		}, []);
		o("useWAWebOnOutsideClick").useOnOutsideClick(O, q);
		var U = d(function(e) {
			var t = e.title;
			A.current = !0, x(t), N([]), S != null && a != null && S(a, t), L != null && e.latitude != null && e.longitude != null && L({
				latitude: e.latitude,
				longitude: e.longitude
			});
		}, [
			a,
			S,
			L
		]), V = d(async function(e) {
			if (e.length < C) {
				N([]);
				return;
			}
			try {
				var t, n, r = await o("WAWebRelayClient").fetchQuery(h, { input: {
					center: M,
					query: e,
					use_case_id: "WHATSAPP_BIZ_PROFILE"
				} }, { environmentType: "facebook" });
				if (r == null) {
					N([]);
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
				N(i);
			} catch (e) {
				N([]);
			}
		}, [M]);
		m(function() {
			if (F.current) {
				F.current = !1;
				return;
			}
			if (A.current) {
				A.current = !1;
				return;
			}
			return w.current != null && self.clearTimeout(w.current), D.length >= C ? w.current = self.setTimeout(function() {
				V(D).catch(r("WAWebNoop"));
			}, y) : N([]), function() {
				w.current != null && self.clearTimeout(w.current);
			};
		}, [D, V]);
		var H = d(function(e, t) {
			x(t), S != null && S(e, t);
		}, [S]);
		return u.jsxs(u.Fragment, { children: [
			u.jsxs("div", {
				className: "x1n2onr6 xh8yej3",
				ref: O,
				role: "combobox",
				"aria-expanded": W,
				"aria-controls": W ? B : void 0,
				"aria-haspopup": "listbox",
				children: [u.jsx(r("WAWebBusinessProfileTextField.react"), {
					editable: !0,
					fieldName: a,
					icon: u.jsx(r("WDSIconIcLocationOn.react"), {}),
					label: s,
					onChange: H,
					onClick: R,
					testid: "biz_profile_address_textfield",
					value: D,
					xstyle: I
				}), W && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: v.menuContainer,
					id: B,
					role: "listbox",
					"aria-label": s,
					children: u.jsx(r("WDSMenu.react"), {
						useMaxWidth: !1,
						children: P.map(function(e) {
							var t, n = [
								e.streetaddress,
								e.city,
								e.stateprovince,
								e.postalcode
							].filter(Boolean).join(", ");
							return u.jsx(r("WDSMenuItem.react"), {
								Icon: r("WDSIconIcLocationOn.react"),
								onPress: function() {
									return U(e);
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
				onChange: S,
				value: k,
				xstyle: I
			}),
			u.jsx(r("WAWebBusinessProfileTextField.react"), {
				editable: !0,
				fieldName: "locationNotes",
				label: o("WAWebBusinessProfileLabels").getLocationNotesLabel(),
				onChange: S,
				testid: "biz_profile_location_notes_textfield",
				value: b,
				xstyle: I
			})
		] });
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 98);
