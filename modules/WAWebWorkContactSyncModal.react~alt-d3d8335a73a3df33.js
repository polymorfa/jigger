__d("WAWebWorkContactSyncModal.react", [
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
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = "👤";
	async function y() {
		var e = await r("WAWebLidAwareContactsDB").all(), t = [];
		for (var n of e) if (!(n.name == null || n.name === "" || n.syncToAddressbook === !0 || !n.name.endsWith(h))) {
			var o = n.phoneNumber;
			o == null || !o.endsWith("@c.us") || t.push({
				familyName: n.name,
				givenName: "",
				phoneNumber: o.replace(/@c\.us$/, "")
			});
		}
		return t;
	}
	async function C(e) {
		var t, n = new (o("WAWebUsync")).USyncQuery().withMode("query").withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN);
		e.forEach(function(e) {
			var t = e.phoneNumber;
			if (t != null) {
				var r = new (o("WAWebUsyncUser")).USyncUser(), a = t.startsWith("+") ? t : "+" + t;
				r.withPhone(a), n.withUser(r);
			}
		});
		var r = await n.execute(), a = new Map();
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
	}
	async function b(e) {
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
		t.length !== 0 && await o("WAWebSaveContactAction").saveContactBatchAction(t);
	}
	async function v(e) {
		var t = r("compactMap")(e, function(e) {
			return e.phoneNumber;
		});
		t.length !== 0 && await o("WAWebDeleteContactAction").deleteContactBatchAction(t);
	}
	function S(e, t) {
		var n = new Map(e.map(function(e) {
			return [R(e), e];
		})), r = new Map(t.map(function(e) {
			return [R(e), e];
		})), o = e.filter(function(e) {
			var t = r.get(R(e));
			return t == null || !L(e, t);
		}), a = t.filter(function(e) {
			var t = n.get(R(e));
			return t == null || !L(e, t);
		});
		return {
			contactsToAdd: o,
			contactsToDelete: a
		};
	}
	function R(e) {
		var t;
		return (t = e.phoneNumber) != null ? t : "";
	}
	function L(e, t) {
		var n = E(e.phoneNumber) === E(t.phoneNumber);
		return n && [e.givenName, e.familyName].filter(Boolean).join(" ") === [t.givenName, t.familyName].filter(Boolean).join(" ");
	}
	function E(e) {
		return e == null ? e : e.replace(/[^+\d]/g, "");
	}
	function k(e) {
		var t = e._level, n = t === void 0 ? "info" : t, o = e.children;
		return c.jsx("div", {
			className: "x6s0dn4 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 x1q0g3np x98l61r x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
			children: c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: o
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e, t) {
		return e != null ? c.jsxs(r("WDSText.react"), {
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
		}) : t != null ? c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "secondaryNegative",
			children: t
		}) : c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: "Sync WhatsApp employee contacts with delta-based updates."
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		var n = t.onClose, a = t.workContacts, i = g("default"), l = i[0], u = i[1], d = g(null), R = d[0], L = d[1], E = g(null), T = E[0], D = E[1], x = _(function() {
			if (R == null || T == null) return null;
			var e = S(R, T), t = e.contactsToAdd, n = e.contactsToDelete;
			return {
				contactsToAdd: t,
				contactsToDelete: n
			};
		}, [R, T]), $ = g(a == null || a.length === 0 ? "No work contacts provided. Please check your permissions." : null), P = $[0], N = $[1], M = g(null), w = M[0], A = M[1], F = f(!0);
		function O(e) {
			F.current && u(e);
		}
		var B = m(function() {
			return R ? y().then(D).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WorkContactSync] fetchLocalContacts failed"]))), N("Failed to fetch device contacts: " + String(t));
			}) : Promise.resolve();
		}, [R]), W = m(function() {
			return D(null), O("refreshing_device_contacts"), B().then(function() {
				O("default");
			});
		}, [B]);
		p(function() {
			if (a != null && a.length > 0) {
				var e = a.map(function(e) {
					var t, n;
					return babelHelpers.extends({}, e, {
						phoneNumber: (t = e.phoneNumber) == null ? void 0 : t.replace(/^\+/, ""),
						familyName: ((n = e.familyName) != null ? n : "") + (" " + h)
					});
				});
				C(e).then(L).catch(function(e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WorkContactSync] filterInContactsOnly failed"]))), N(String(e));
				});
			}
		}, [a]), p(function() {
			return function() {
				F.current = !1;
			};
		}, []), p(function() {
			R != null && B();
		}, [R, B]);
		var q = m(function(e, t) {
			O("adding_clearing"), N(null), v(e).then(function() {
				return O("adding_contacts"), b(t);
			}).then(function() {
				N(null), A({
					added: t.length,
					deleted: e.length
				}), O("default");
			}).catch(function(e) {
				N("Sync failed: " + String(e));
			}).finally(W);
		}, [W]), U = m(function(e) {
			O("deleting"), N(null), v(e).then(function() {
				N(null);
			}).catch(function(e) {
				N("Delete failed: " + String(e));
			}).finally(W);
		}, [W]), V = null;
		if (l === "loading") V = c.jsx(k, { children: "Loading contacts..." });
		else if (T != null && x != null) {
			var H = x.contactsToAdd, G = x.contactsToDelete;
			l === "default" ? V = c.jsxs("div", {
				className: "x78zum5 xdt5ytf x1f0uite xs2akgl x98l61r",
				children: [c.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					label: "Sync Contacts (" + H.length + " New, " + G.length + " Obsolete)",
					onPress: function() {
						q(G, H);
					}
				}), T.length > 0 && c.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					label: "Delete Synced Contacts (" + T.length + ")",
					onPress: function() {
						U(T);
					}
				})]
			}) : l === "adding_clearing" ? V = c.jsx(k, { children: "Deleting obsolete WhatsApp employee contacts..." }) : l === "adding_contacts" ? V = c.jsx(k, { children: "Adding new WhatsApp employee contacts..." }) : l === "deleting" ? V = c.jsx(k, { children: "Deleting WhatsApp employee contacts..." }) : l === "refreshing_device_contacts" ? V = c.jsx(k, { children: "Refreshing device contacts..." }) : V = c.jsxs(k, { children: ["Error, unexpected state: ", l] });
		} else V = c.jsx(k, { children: "Computing current device contacts..." });
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			tsNavigationData: {
				surface: "unknown",
				viewName: "work-contact-sync"
			},
			onCancel: n,
			cancelText: "Close",
			children: c.jsxs("div", {
				style: {
					minWidth: "450px",
					paddingTop: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
					paddingInline: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
					paddingBottom: 0
				},
				children: [c.jsx("h1", {
					style: {
						fontSize: "18px",
						marginBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus
					},
					children: "Work Contact Sync"
				}), c.jsxs("div", {
					style: {
						maxHeight: "50vh",
						overflowY: "auto",
						paddingBlock: o("WDSVars.stylex").WDSVars.spacingSingle,
						paddingInline: o("WDSVars.stylex").WDSVars.spacingSingle,
						marginBlock: "calc(-1 * " + o("WDSVars.stylex").WDSVars.spacingSingle + ")",
						marginInline: "calc(-1 * " + o("WDSVars.stylex").WDSVars.spacingSingle + ")"
					},
					children: [I(w, P), V]
				})]
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 98);
