__d("WAWebBizAIWebsiteEditModal.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiAgentGating",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = 10, h = {
		generic: -1,
		mercado: -2,
		shopee: -3
	};
	function y(e) {
		return e === "NOT_SUPPORTED" ? s._(
			/*BTDS*/
			""
		) : e === "NON_PUBLIC_GOOGLE_SHEET" ? s._(
			/*BTDS*/
			""
		) : e === "DOMAIN_BLOCKLISTED" ? s._(
			/*BTDS*/
			""
		) : e === "INVALID_URL_FORMAT" ? s._(
			/*BTDS*/
			""
		) : e === "EMPTY_URL" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function C(e) {
		var t = e.message, n = e.testid;
		return t == null ? null : u.jsx("div", {
			className: "x1tiyuxx",
			"data-testid": n + "-warning",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				selectable: !1,
				children: t
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n, r, o, a, i;
		return {
			generic: (t = (n = e.find(function(e) {
				return e.website_type === "GENERIC";
			})) == null ? void 0 : n.website_url) != null ? t : "",
			mercado: (r = (o = e.find(function(e) {
				return e.website_type === "MERCADO";
			})) == null ? void 0 : o.website_url) != null ? r : "",
			shopee: (a = (i = e.find(function(e) {
				return e.website_type === "SHOPEE";
			})) == null ? void 0 : i.website_url) != null ? a : ""
		};
	}
	function v(e) {
		return e.map(function(e) {
			return e.trim();
		}).filter(function(e) {
			return e.length > 0;
		}).join("\n");
	}
	function S(e) {
		var t = e.initialWebsites, n = e.onClose, a = e.onSaved, i = p(function() {
			return o("WAWebBizAiAgentGating").getMultiWebsiteMode();
		}, []), l = i === o("WAWebBizAiAgentGating").MULTI_WEBSITE_BRAZIL, c = i === o("WAWebBizAiAgentGating").MULTI_WEBSITE_LATAM, S = l || c, R = !S;
		m(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewWebsiteEditDrawer();
		}, []);
		var L = _(0), E = f(function() {
			return b(t);
		}), k = E[0], I = E[1], T = f(function() {
			if (!R) {
				var e = L.current++;
				return [{
					id: e,
					value: ""
				}];
			}
			var n = t.map(function(e) {
				var t;
				return (t = e == null ? void 0 : e.website_url) != null ? t : "";
			}).filter(function(e) {
				return e.length > 0;
			});
			if (n.length > 0) return n.map(function(e) {
				return {
					id: L.current++,
					value: e
				};
			});
			var r = L.current++;
			return [{
				id: r,
				value: ""
			}];
		}), D = T[0], x = T[1], $ = f(function() {
			return new Map();
		}), P = $[0], N = $[1], M = f(!1), w = M[0], A = M[1], F = p(function() {
			if (R) return D.map(function(e) {
				return {
					id: e.id,
					value: e.value
				};
			});
			var e = [{
				id: h.mercado,
				value: k.mercado
			}];
			return l && e.push({
				id: h.shopee,
				value: k.shopee
			}), e.push({
				id: h.generic,
				value: k.generic
			}), e;
		}, [
			k,
			D,
			l,
			R
		]), O = p(function() {
			var e = new Map();
			for (var t of F) {
				var n, r = t.value.trim();
				if (r.length !== 0) {
					var o = r.toLowerCase(), a = (n = e.get(o)) != null ? n : [];
					a.push(t.id), e.set(o, a);
				}
			}
			var i = new Set();
			for (var l of e.values()) if (l.length > 1) for (var s of l) i.add(s);
			return i;
		}, [F]), B = d(function(e) {
			var t;
			return (t = P.get(e)) != null ? t : null;
		}, [P]), W = d(function(e) {
			return B(e) != null ? null : O.has(e) ? s._(
				/*BTDS*/
				""
			) : null;
		}, [O, B]), q = d(function(e) {
			N(function(t) {
				if (!t.has(e)) return t;
				var n = new Map(t);
				return n.delete(e), n;
			});
		}, []), U = d(function(e, t) {
			x(function(n) {
				return n.map(function(n) {
					return n.id === e ? {
						id: n.id,
						value: t
					} : n;
				});
			}), q(e);
		}, [q]), V = d(function() {
			x(function(e) {
				if (e.length >= g) return e;
				var t = L.current++;
				return [].concat(e, [{
					id: t,
					value: ""
				}]);
			});
		}, []), H = d(function(e) {
			x(function(t) {
				var n = t.filter(function(t) {
					return t.id !== e;
				});
				if (n.length === 0) {
					var r = L.current++;
					return [{
						id: r,
						value: ""
					}];
				}
				return n;
			}), q(e);
		}, [q]), G = d(function(e, t) {
			I(function(n) {
				var r = {
					generic: n.generic,
					mercado: n.mercado,
					shopee: n.shopee
				};
				return r[e] = t, r;
			}), q(h[e]);
		}, [q]), z = d(function() {
			var e = [], n = [], r = new Set();
			if (R) {
				var o = new Set();
				for (var a of D) {
					var i = a.value.trim();
					if (i.length !== 0) {
						var s = i.toLowerCase();
						o.has(s) || (o.add(s), e.push({ website_url: i }), n.push(a.id));
					}
				}
			} else r.add("MERCADO"), k.mercado.trim().length > 0 && (e.push({
				website_type: "MERCADO",
				website_url: k.mercado.trim()
			}), n.push(h.mercado)), l && (r.add("SHOPEE"), k.shopee.trim().length > 0 && (e.push({
				website_type: "SHOPEE",
				website_url: k.shopee.trim()
			}), n.push(h.shopee))), r.add("GENERIC"), k.generic.trim().length > 0 && (e.push({
				website_type: "GENERIC",
				website_url: k.generic.trim()
			}), n.push(h.generic));
			if (!R) {
				var u = new Set(e.map(function(e) {
					return e.website_url.toLowerCase();
				}));
				for (var c of t) {
					var d, m, p = (d = (m = c.website_url) == null ? void 0 : m.trim()) != null ? d : "";
					if (p.length !== 0) {
						var _ = c.website_type;
						_ != null && _ !== "" && r.has(_) || u.has(p.toLowerCase()) || (u.add(p.toLowerCase()), e.push(_ != null && _ !== "" ? {
							website_type: _,
							website_url: p
						} : { website_url: p }));
					}
				}
			}
			return {
				entries: e,
				fieldIds: n
			};
		}, [
			k,
			D,
			t,
			l,
			R
		]), j = v(F.map(function(e) {
			return e.value;
		})), K = f(j), Q = K[0], X = !w && j !== Q, Y = d(function() {
			if (X) {
				A(!0), N(new Map());
				var e = z(), t = e.entries, n = e.fieldIds;
				o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge({ websites: t }).then(function(e) {
					if (o("WAWebBizAILargeScreensLogEvents").logApiSaveWebsiteResult(e.isSuccess), e.isSuccess) {
						o("WAWebBizAiSaveUtils").showUpdatedToast(), a();
						return;
					}
					for (var r = new Map(), i = 0; i < t.length; i++) r.set(t[i].website_url.toLowerCase(), n[i]);
					for (var l = new Map(), s = e.websiteStatuses.length === t.length && t.length > 0, u = 0; u < e.websiteStatuses.length; u++) {
						var c = e.websiteStatuses[u];
						if (!c.isValid) {
							var d = r.get(c.websiteUrl.toLowerCase()), m = d != null ? d : s ? n[u] : null;
							m != null && l.set(m, y(c.errorCode));
						}
					}
					if (l.size === 0) for (var p of F) p.value.trim().length !== 0 && l.set(p.id, y(null));
					N(l), A(!1);
				}).catch(function() {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveWebsiteResult(!1);
					var e = new Map();
					for (var t of F) t.value.trim().length !== 0 && e.set(t.id, y(null));
					N(e), A(!1);
				});
			}
		}, [
			F,
			z,
			X,
			a
		]), J = S ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs("div", {
			className: "x1h678fw xv6tirj x1phvje8 xcldk2z x1czfd9k",
			"data-testid": "biz-ai-website-edit-modal",
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: n,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "biz-ai-website-edit-close-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: J
					})]
				}),
				u.jsx("div", {
					className: "x12xbjc7 x1yc453h",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				R ? u.jsxs(u.Fragment, { children: [D.map(function(e, t) {
					return u.jsxs("div", {
						className: "x1cy8zhl x1s70e7g x78zum5 x1tiyuxx x1nbhmlj",
						"data-testid": "website-url-row-dynamic-" + t,
						children: [u.jsxs("div", {
							className: "x1iyjqo2",
							children: [u.jsx(r("WDSTextField.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								value: e.value,
								onValueChange: function(n) {
									return U(e.id, n);
								},
								error: B(e.id) != null,
								errorText: B(e.id),
								disabled: w,
								testid: "website-url-input-dynamic-" + t
							}), u.jsx(C, {
								message: W(e.id),
								testid: "website-url-input-dynamic-" + t
							})]
						}), D.length > 1 ? u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							variant: "borderless",
							size: "small",
							disabled: w,
							onPress: function() {
								return H(e.id);
							},
							"aria-label": s._(
								/*BTDS*/
								""
							).toString(),
							testid: "website-url-remove-" + t
						}) : null]
					}, String(e.id));
				}), D.length < g ? u.jsx("div", {
					className: "x1cy8zhl x1s70e7g x78zum5 x1tiyuxx x1nbhmlj",
					children: u.jsx(r("WDSButton.react"), {
						variant: "outline",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: V,
						disabled: w,
						testid: "website-add-link-btn"
					})
				}) : null] }) : null,
				S ? u.jsxs(u.Fragment, { children: [
					u.jsx("div", {
						className: "x1cy8zhl x1s70e7g x78zum5 x1tiyuxx x1nbhmlj",
						"data-testid": "website-url-row-MERCADO",
						children: u.jsxs("div", {
							className: "x1iyjqo2",
							children: [u.jsx(r("WDSTextField.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								value: k.mercado,
								onValueChange: function(t) {
									return G("mercado", t);
								},
								error: B(h.mercado) != null,
								errorText: B(h.mercado),
								disabled: w,
								testid: "website-url-input-MERCADO"
							}), u.jsx(C, {
								message: W(h.mercado),
								testid: "website-url-input-MERCADO"
							})]
						})
					}),
					l ? u.jsx("div", {
						className: "x1cy8zhl x1s70e7g x78zum5 x1tiyuxx x1nbhmlj",
						"data-testid": "website-url-row-SHOPEE",
						children: u.jsxs("div", {
							className: "x1iyjqo2",
							children: [u.jsx(r("WDSTextField.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								value: k.shopee,
								onValueChange: function(t) {
									return G("shopee", t);
								},
								error: B(h.shopee) != null,
								errorText: B(h.shopee),
								disabled: w,
								testid: "website-url-input-SHOPEE"
							}), u.jsx(C, {
								message: W(h.shopee),
								testid: "website-url-input-SHOPEE"
							})]
						})
					}) : null,
					u.jsx("div", {
						className: "x1cy8zhl x1s70e7g x78zum5 x1tiyuxx x1nbhmlj",
						"data-testid": "website-url-row-GENERIC",
						children: u.jsxs("div", {
							className: "x1iyjqo2",
							children: [u.jsx(r("WDSTextField.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								value: k.generic,
								onValueChange: function(t) {
									return G("generic", t);
								},
								error: B(h.generic) != null,
								errorText: B(h.generic),
								disabled: w,
								testid: "website-url-input-GENERIC"
							}), u.jsx(C, {
								message: W(h.generic),
								testid: "website-url-input-GENERIC"
							})]
						})
					})
				] }) : null,
				u.jsxs("div", {
					className: "x1s70e7g x78zum5 x13a6bvl x1h678fw",
					children: [u.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						disabled: w,
						onPress: n,
						testid: "biz-ai-website-edit-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: Y,
						disabled: !X,
						loading: w,
						testid: "biz-ai-website-edit-save-btn"
					})]
				})
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
