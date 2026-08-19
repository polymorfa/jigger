__d("WAWebWorkContactSyncModal.react", [
	"Promise",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebDeleteContactAction",
	"WAWebLidAwareContactsDB",
	"WAWebModal.react",
	"WAWebSaveContactAction",
	"WAWebUsync",
	"WAWebUsyncUser",
	"WDSButton.react",
	"WDSText.react",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useMemo, g = m.useRef, h = m.useState, y = "👤";
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield r("WAWebLidAwareContactsDB").all(), t = [];
			for (var n of e) if (!(n.name == null || n.name === "" || n.syncToAddressbook === !0 || !n.name.endsWith(y))) {
				var o = n.phoneNumber;
				o == null || !o.endsWith("@c.us") || t.push({
					familyName: n.name,
					givenName: "",
					phoneNumber: o.replace(/@c\.us$/, "")
				});
			}
			return t;
		}), b.apply(this, arguments);
	}
	function v(e) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = new (o("WAWebUsync")).USyncQuery().withMode("query").withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN);
			e.forEach(function(e) {
				var t = e.phoneNumber;
				if (t != null) {
					var r = new (o("WAWebUsyncUser")).USyncUser(), a = t.startsWith("+") ? t : "+" + t;
					r.withPhone(a), n.withUser(r);
				}
			});
			var r = yield n.execute(), a = new Map();
			return (t = r.list) == null || t.forEach(function(e) {
				var t;
				if (e.id && (t = e.contact) != null && t.type) {
					var n = e.id.toString().replace(/@c\.us$/, "").replace(/^\+/, "");
					a.set(n, e.contact.type);
				}
			}), e.filter(function(e) {
				var t = e.phoneNumber;
				if (t == null) return !1;
				var n = t.replace(/^\+/, ""), r = a.get(n);
				return r === "in";
			});
		}), S.apply(this, arguments);
	}
	function R(e) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.filter(function(e) {
				return e.phoneNumber != null;
			}).map(function(e) {
				var t, n, r;
				return {
					phoneNumber: (t = e.phoneNumber) != null ? t : "",
					firstName: (n = e.givenName) != null ? n : "",
					lastName: (r = e.familyName) != null ? r : "",
					syncToAddressbook: !1
				};
			});
			t.length !== 0 && (yield o("WAWebSaveContactAction").saveContactBatchAction(t));
		}), L.apply(this, arguments);
	}
	function E(e) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = r("compactMap")(e, function(e) {
				return e.phoneNumber;
			});
			t.length !== 0 && (yield o("WAWebDeleteContactAction").deleteContactBatchAction(t));
		}), k.apply(this, arguments);
	}
	function I(e, t) {
		var n = new Map(e.map(function(e) {
			return [T(e), e];
		})), r = new Map(t.map(function(e) {
			return [T(e), e];
		})), o = e.filter(function(e) {
			var t = r.get(T(e));
			return t == null || !D(e, t);
		}), a = t.filter(function(e) {
			var t = n.get(T(e));
			return t == null || !D(e, t);
		});
		return {
			contactsToAdd: o,
			contactsToDelete: a
		};
	}
	function T(e) {
		var t;
		return (t = e.phoneNumber) != null ? t : "";
	}
	function D(e, t) {
		var n = x(e.phoneNumber) === x(t.phoneNumber);
		return n && [e.givenName, e.familyName].filter(Boolean).join(" ") === [t.givenName, t.familyName].filter(Boolean).join(" ");
	}
	function x(e) {
		return e == null ? e : e.replace(/[^+\d]/g, "");
	}
	function $(e) {
		var t = e._level, n = t === void 0 ? "info" : t, o = e.children;
		return d.jsx("div", {
			className: "x6s0dn4 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 x1q0g3np x98l61r x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
			children: d.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: o
			})
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e, t) {
		return e != null ? d.jsxs(r("WDSText.react"), {
			type: "Body2",
			colorName: "secondaryPositive",
			children: [
				"Sync completed successfully! Added ",
				e.added,
				" contact",
				e.added !== 1 ? "s" : "",
				", deleted ",
				e.deleted,
				" ",
				"contact",
				e.deleted !== 1 ? "s" : "",
				"."
			]
		}) : t != null ? d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "secondaryNegative",
			children: t
		}) : d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: "Sync WhatsApp employee contacts with delta-based updates."
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(t) {
		var a = t.onClose, i = t.workContacts, l = h("default"), c = l[0], m = l[1], b = h(null), S = b[0], L = b[1], k = h(null), T = k[0], D = k[1], x = f(function() {
			if (S == null || T == null) return null;
			var e = I(S, T), t = e.contactsToAdd, n = e.contactsToDelete;
			return {
				contactsToAdd: t,
				contactsToDelete: n
			};
		}, [S, T]), N = h(i == null || i.length === 0 ? "No work contacts provided. Please check your permissions." : null), M = N[0], w = N[1], A = h(null), F = A[0], O = A[1], B = g(!0);
		function W(e) {
			B.current && m(e);
		}
		var q = p(function() {
			return S ? C().then(D).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WorkContactSync] fetchLocalContacts failed"]))), w("Failed to fetch device contacts: " + String(t));
			}) : (u || (u = n("Promise"))).resolve();
		}, [S]), U = p(function() {
			return D(null), W("refreshing_device_contacts"), q().then(function() {
				W("default");
			});
		}, [q]);
		_(function() {
			if (i != null && i.length > 0) {
				var e = i.map(function(e) {
					var t, n;
					return babelHelpers.extends({}, e, {
						phoneNumber: (t = e.phoneNumber) == null ? void 0 : t.replace(/^\+/, ""),
						familyName: ((n = e.familyName) != null ? n : "") + (" " + y)
					});
				});
				v(e).then(L).catch(function(e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WorkContactSync] filterInContactsOnly failed"]))), w(String(e));
				});
			}
		}, [i]), _(function() {
			return function() {
				B.current = !1;
			};
		}, []), _(function() {
			S != null && q();
		}, [S, q]);
		var V = p(function(e, t) {
			W("adding_clearing"), w(null), E(e).then(function() {
				return W("adding_contacts"), R(t);
			}).then(function() {
				w(null), O({
					added: t.length,
					deleted: e.length
				}), W("default");
			}).catch(function(e) {
				w("Sync failed: " + String(e));
			}).finally(U);
		}, [U]), H = p(function(e) {
			W("deleting"), w(null), E(e).then(function() {
				w(null);
			}).catch(function(e) {
				w("Delete failed: " + String(e));
			}).finally(U);
		}, [U]), G = null;
		if (c === "loading") G = d.jsx($, { children: "Loading contacts..." });
		else if (T != null && x != null) {
			var z = x.contactsToAdd, j = x.contactsToDelete;
			c === "default" ? G = d.jsxs("div", {
				className: "x78zum5 xdt5ytf x1f0uite xs2akgl x98l61r",
				children: [d.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					label: "Sync Contacts (" + z.length + " New, " + j.length + " Obsolete)",
					onPress: function() {
						V(j, z);
					}
				}), T.length > 0 && d.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					label: "Delete Synced Contacts (" + T.length + ")",
					onPress: function() {
						H(T);
					}
				})]
			}) : c === "adding_clearing" ? G = d.jsx($, { children: "Deleting obsolete WhatsApp employee contacts..." }) : c === "adding_contacts" ? G = d.jsx($, { children: "Adding new WhatsApp employee contacts..." }) : c === "deleting" ? G = d.jsx($, { children: "Deleting WhatsApp employee contacts..." }) : c === "refreshing_device_contacts" ? G = d.jsx($, { children: "Refreshing device contacts..." }) : G = d.jsxs($, { children: ["Error, unexpected state: ", c] });
		} else G = d.jsx($, { children: "Computing current device contacts..." });
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			tsNavigationData: {
				surface: "unknown",
				viewName: "work-contact-sync"
			},
			onCancel: a,
			cancelText: "Close",
			children: d.jsxs("div", {
				style: {
					minWidth: "450px",
					paddingTop: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
					paddingInline: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
					paddingBottom: 0
				},
				children: [d.jsx("h1", {
					style: {
						fontSize: "18px",
						marginBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus
					},
					children: "Work Contact Sync"
				}), d.jsxs("div", {
					style: {
						maxHeight: "50vh",
						overflowY: "auto",
						paddingBlock: o("WDSVars.stylex").WDSVars.spacingSingle,
						paddingInline: o("WDSVars.stylex").WDSVars.spacingSingle,
						marginBlock: "calc(-1 * " + o("WDSVars.stylex").WDSVars.spacingSingle + ")",
						marginInline: "calc(-1 * " + o("WDSVars.stylex").WDSVars.spacingSingle + ")"
					},
					children: [P(F, M), G]
				})]
			})
		});
	}
	N.displayName = N.name + " [from " + i.id + "]", l.default = N;
}), 98);
