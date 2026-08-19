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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(3), n = e._level, a = e.children, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x6s0dn4 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 x1q0g3np x98l61r x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }, t[0] = i) : i = t[0];
		var l;
		return t[1] !== a ? (l = c.jsx("div", babelHelpers.extends({}, i, { children: c.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: a
		}) })), t[1] = a, t[2] = l) : l = t[2], l;
	}
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
		var n = o("react-compiler-runtime").c(59), a = t.onClose, i = t.workContacts, l = g("default"), u = l[0], d = l[1], m = g(null), _ = m[0], h = m[1], R = g(null), L = R[0], E = R[1], T;
		e: {
			if (_ == null || L == null) {
				T = null;
				break e;
			}
			var x;
			n[0] !== _ || n[1] !== L ? (x = S(_, L), n[0] = _, n[1] = L, n[2] = x) : x = n[2];
			var $ = x, P = $.contactsToAdd, N = $.contactsToDelete, M;
			n[3] !== P || n[4] !== N ? (M = {
				contactsToAdd: P,
				contactsToDelete: N
			}, n[3] = P, n[4] = N, n[5] = M) : M = n[5], T = M;
		}
		var w = T, A = g(i == null || i.length === 0 ? "No work contacts provided. Please check your permissions." : null), F = A[0], O = A[1], B = g(null), W = B[0], q = B[1], U = f(!0), V;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
			U.current && d(t);
		}, n[6] = V) : V = n[6];
		var H = V, G;
		n[7] !== _ ? (G = function() {
			return _ ? y().then(E).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WorkContactSync] fetchLocalContacts failed"]))), O("Failed to fetch device contacts: " + String(t));
			}) : Promise.resolve();
		}, n[7] = _, n[8] = G) : G = n[8];
		var z = G, j;
		n[9] !== z ? (j = function() {
			return E(null), H("refreshing_device_contacts"), z().then(function() {
				H("default");
			});
		}, n[9] = z, n[10] = j) : j = n[10];
		var K = j, Q, X;
		n[11] !== i ? (Q = function() {
			if (i != null && i.length > 0) {
				var e = i.map(D);
				C(e).then(h).catch(function(e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WorkContactSync] filterInContactsOnly failed"]))), O(String(e));
				});
			}
		}, X = [i], n[11] = i, n[12] = Q, n[13] = X) : (Q = n[12], X = n[13]), p(Q, X);
		var Y, J;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (Y = function() {
			return (function() {
				U.current = !1;
			});
		}, J = [], n[14] = Y, n[15] = J) : (Y = n[14], J = n[15]), p(Y, J);
		var Z, ee;
		n[16] !== _ || n[17] !== z ? (ee = function() {
			_ != null && z();
		}, Z = [_, z], n[16] = _, n[17] = z, n[18] = Z, n[19] = ee) : (Z = n[18], ee = n[19]), p(ee, Z);
		var te;
		n[20] !== K ? (te = function(t, n) {
			H("adding_clearing"), O(null), v(t).then(function() {
				return H("adding_contacts"), b(n);
			}).then(function() {
				O(null), q({
					added: n.length,
					deleted: t.length
				}), H("default");
			}).catch(function(e) {
				O("Sync failed: " + String(e));
			}).finally(K);
		}, n[20] = K, n[21] = te) : te = n[21];
		var ne = te, re;
		n[22] !== K ? (re = function(t) {
			H("deleting"), O(null), v(t).then(function() {
				O(null);
			}).catch(function(e) {
				O("Delete failed: " + String(e));
			}).finally(K);
		}, n[22] = K, n[23] = re) : re = n[23];
		var oe = re, ae;
		if (u === "loading") {
			var ie;
			n[24] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx(k, { children: "Loading contacts..." }), n[24] = ie) : ie = n[24], ae = ie;
		} else if (L != null && w != null) {
			var le = w.contactsToAdd, se = w.contactsToDelete;
			if (u === "default") {
				var ue;
				n[25] === Symbol.for("react.memo_cache_sentinel") ? (ue = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl x98l61r" }, n[25] = ue) : ue = n[25];
				var ce = "Sync Contacts (" + le.length + " New, " + se.length + " Obsolete)", de;
				n[26] !== le || n[27] !== se || n[28] !== ne ? (de = function() {
					ne(se, le);
				}, n[26] = le, n[27] = se, n[28] = ne, n[29] = de) : de = n[29];
				var me;
				n[30] !== ce || n[31] !== de ? (me = c.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					label: ce,
					onPress: de
				}), n[30] = ce, n[31] = de, n[32] = me) : me = n[32];
				var pe;
				n[33] !== L || n[34] !== oe ? (pe = L.length > 0 && c.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					label: "Delete Synced Contacts (" + L.length + ")",
					onPress: function() {
						oe(L);
					}
				}), n[33] = L, n[34] = oe, n[35] = pe) : pe = n[35];
				var _e;
				n[36] !== me || n[37] !== pe ? (_e = c.jsxs("div", babelHelpers.extends({}, ue, { children: [me, pe] })), n[36] = me, n[37] = pe, n[38] = _e) : _e = n[38], ae = _e;
			} else if (u === "adding_clearing") {
				var fe;
				n[39] === Symbol.for("react.memo_cache_sentinel") ? (fe = c.jsx(k, { children: "Deleting obsolete WhatsApp employee contacts..." }), n[39] = fe) : fe = n[39], ae = fe;
			} else if (u === "adding_contacts") {
				var ge;
				n[40] === Symbol.for("react.memo_cache_sentinel") ? (ge = c.jsx(k, { children: "Adding new WhatsApp employee contacts..." }), n[40] = ge) : ge = n[40], ae = ge;
			} else if (u === "deleting") {
				var he;
				n[41] === Symbol.for("react.memo_cache_sentinel") ? (he = c.jsx(k, { children: "Deleting WhatsApp employee contacts..." }), n[41] = he) : he = n[41], ae = he;
			} else if (u === "refreshing_device_contacts") {
				var ye;
				n[42] === Symbol.for("react.memo_cache_sentinel") ? (ye = c.jsx(k, { children: "Refreshing device contacts..." }), n[42] = ye) : ye = n[42], ae = ye;
			} else {
				var Ce;
				n[43] !== u ? (Ce = c.jsxs(k, { children: ["Error, unexpected state: ", u] }), n[43] = u, n[44] = Ce) : Ce = n[44], ae = Ce;
			}
		} else {
			var be;
			n[45] === Symbol.for("react.memo_cache_sentinel") ? (be = c.jsx(k, { children: "Computing current device contacts..." }), n[45] = be) : be = n[45], ae = be;
		}
		var ve;
		n[46] === Symbol.for("react.memo_cache_sentinel") ? (ve = {
			surface: "unknown",
			viewName: "work-contact-sync"
		}, n[46] = ve) : ve = n[46];
		var Se, Re, Le;
		if (n[47] === Symbol.for("react.memo_cache_sentinel")) {
			var Ee;
			Se = {
				minWidth: "450px",
				paddingTop: (Ee = o("WDSVars.stylex")).WDSVars.spacingDoublePlus,
				paddingInline: Ee.WDSVars.spacingDoublePlus,
				paddingBottom: 0
			}, Re = c.jsx("h1", {
				style: {
					fontSize: "18px",
					marginBottom: Ee.WDSVars.spacingSinglePlus
				},
				children: "Work Contact Sync"
			}), Le = {
				maxHeight: "50vh",
				overflowY: "auto",
				paddingBlock: Ee.WDSVars.spacingSingle,
				paddingInline: Ee.WDSVars.spacingSingle,
				marginBlock: "calc(-1 * " + Ee.WDSVars.spacingSingle + ")",
				marginInline: "calc(-1 * " + Ee.WDSVars.spacingSingle + ")"
			}, n[47] = Se, n[48] = Re, n[49] = Le;
		} else Se = n[47], Re = n[48], Le = n[49];
		var ke;
		n[50] !== F || n[51] !== W ? (ke = I(W, F), n[50] = F, n[51] = W, n[52] = ke) : ke = n[52];
		var Ie;
		n[53] !== ae || n[54] !== ke ? (Ie = c.jsxs("div", {
			style: Se,
			children: [Re, c.jsxs("div", {
				style: Le,
				children: [ke, ae]
			})]
		}), n[53] = ae, n[54] = ke, n[55] = Ie) : Ie = n[55];
		var Te;
		return n[56] !== a || n[57] !== Ie ? (Te = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			tsNavigationData: ve,
			onCancel: a,
			cancelText: "Close",
			children: Ie
		}), n[56] = a, n[57] = Ie, n[58] = Te) : Te = n[58], Te;
	}
	function D(e) {
		var t, n;
		return babelHelpers.extends({}, e, {
			phoneNumber: (t = e.phoneNumber) == null ? void 0 : t.replace(/^\+/, ""),
			familyName: ((n = e.familyName) != null ? n : "") + (" " + h)
		});
	}
	l.default = T;
}), 98);
