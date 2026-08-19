__d("WAWebCanonicalDebug.react", [
	"CurrentUser",
	"WAWebCanonicalGating",
	"WAWebCanonicalRecoveryActions",
	"WAWebCanonicalUserValidQuery",
	"WAWebCanonicalUtils",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebMdDebugSettingStyles",
	"WAWebSpinner.react",
	"WAWebStopEvent",
	"WAWebUserPrefsCanonical",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = 3e4;
	function g() {
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), { children: u.jsxs("div", { children: [u.jsx(h, {}), u.jsx(y, {})] }) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		var e, t = o("WAWebUserPrefsCanonical").getCanonicalRegistrationTraceId(), n = [
			[
				"Session Loaded With Canonical",
				r("CurrentUser").isLoggedIn(),
				void 0
			],
			[
				"Canonical VC Present",
				o("WAWebCanonicalUtils").isCanonicalPresent(),
				"canonical-vc-present-value"
			],
			[
				"User ID",
				(e = r("CurrentUser").getPossiblyNonFacebookUserID()) != null ? e : "null",
				void 0
			],
			[
				"App ID",
				R(r("CurrentUser").getAppID()),
				void 0
			],
			[
				"Reload Pending",
				o("WAWebCanonicalUtils").isCanonicalReloadPending(),
				void 0
			],
			[
				"Registration Trace ID",
				o("WAWebUserPrefsCanonical").getCanonicalRegistrationTraceId() || "none",
				void 0
			]
		], a = [
			[
				"Canonical Enabled",
				o("WAWebCanonicalGating").isCanonicalEnabled(),
				void 0
			],
			[
				"Token Recovery Enabled",
				o("WAWebCanonicalGating").isCanonicalRecoveryEnabled(),
				void 0
			],
			[
				"Reload on Pairing",
				o("WAWebCanonicalGating").isCanonicalAppReloadEnabled(),
				void 0
			],
			[
				"Reload on Recovery",
				o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled(),
				void 0
			]
		];
		return u.jsxs(u.Fragment, { children: [
			u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: I.section,
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: "State"
				}), u.jsx(C, { rows: n })]
			}),
			u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: I.section,
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: "Gating"
				}), u.jsx(C, { rows: a })]
			}),
			t !== "" && u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: I.section,
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: "Debug Links"
				}), u.jsxs("ul", {
					className: "xdj266r x14z9mp xat24cr x1lziwak x1c1uobl x3ct3a4 x129bwdz",
					children: [u.jsx("li", { children: u.jsx("span", {
						className: "x1bvjpef x1ypdohk",
						children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: E("wam_canonical_ent_recovery_companion", t),
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: "Canonical Recovery Events"
							})
						})
					}) }), u.jsx("li", { children: u.jsx("span", {
						className: "x1bvjpef x1ypdohk",
						children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: E("wam_canonical_ent_recovery_critical_event", t),
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: "Canonical Critical Error Events"
							})
						})
					}) })]
				})]
			})
		] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e = _("idle"), t = e[0], n = e[1], a = _("idle"), i = a[0], l = a[1], s = _(null), c = s[0], g = s[1], h = d(async function() {
			n("validating");
			var e = await o("WAWebCanonicalUserValidQuery").fetchCanonicalUserValid();
			n(e);
		}, []), y = d(async function() {
			l("sending"), g(null);
			try {
				o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!0), await o("WAWebCanonicalRecoveryActions").requestNonceFromPrimary(), l("awaiting_response"), self.setTimeout(function() {
					l(function(e) {
						return e === "awaiting_response" ? "timed_out" : e;
					});
				}, f);
			} catch (e) {
				o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1), l("idle"), g(String(e));
			}
		}, []), C = p(null);
		m(function() {
			if (i !== "awaiting_response") {
				C.current != null && (self.clearInterval(C.current), C.current = null);
				return;
			}
			return C.current = self.setInterval(function() {
				o("WAWebCanonicalUtils").isCanonicalTokenPresent() && l("received");
			}, 500), function() {
				C.current != null && (self.clearInterval(C.current), C.current = null);
			};
		}, [i]);
		var S = t !== "idle" && t !== "validating";
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: I.section,
			children: [
				u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: "Actions"
				}),
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: I.actionHeader,
					children: [
						u.jsx(r("WDSButton.react"), {
							onPress: function() {
								return void h();
							},
							loading: t === "validating",
							label: "Validate Session"
						}),
						u.jsx(r("WDSButton.react"), {
							disabled: i === "sending" || i === "awaiting_response",
							onPress: function() {
								return void y();
							},
							label: "Request New Token"
						}),
						i === "received" && u.jsx(r("WDSButton.react"), {
							onPress: k,
							label: "Reload App"
						})
					]
				}),
				S && u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: b(t),
					children: v(t)
				}),
				i === "sending" && u.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: I.spinnerRow,
					children: [u.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }), u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: "Sending nonce request..."
					})]
				}),
				i === "awaiting_response" && u.jsxs("div", {
					className: "x1c7u0tx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xbrszos xea3l6g x18isctg x2q3nzr x78zum5 xdt5ytf x129bwdz",
					children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: I.spinnerRow,
						children: [u.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: "Waiting for primary to respond with nonce..."
						})]
					}), u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						children: "Open your WhatsApp primary app (phone) to complete this request."
					})]
				}),
				i === "timed_out" && u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "secondaryNegative",
					children: "Primary app didn't return the token. Try again with the primary app open."
				}),
				c != null && i !== "timed_out" && u.jsxs(r("WDSText.react"), {
					type: "Body1",
					colorName: "secondaryNegative",
					children: ["Error: ", c]
				}),
				i === "received" && u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "secondaryPositive",
					children: "Token received. Reload the app to apply."
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.rows;
		return u.jsx("div", {
			className: "xh8yej3 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xrlsmeg",
			children: t.map(function(e, t) {
				var n = e[0], a = e[1], i = e[2], l = typeof a == "boolean" ? String(a) : a;
				return u.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: [I.tableRow, t % 2 === 0 && I.tableRowAlt],
					children: [u.jsx("div", {
						className: "x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x1hx0egp x1jzhcrs x1ncir08 x2lah0s x1lun4ml x18b5jzi xbogo7e",
						children: u.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: n
						})
					}), u.jsx("div", {
						className: "x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x1hx0egp x1iyjqo2",
						"data-testid": i,
						onPointerDown: o("WAWebStopEvent").stopPropagation,
						children: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: S(a),
							children: l
						})
					})]
				}, n);
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		return e === "valid" ? "secondaryPositive" : e === "invalid" || e === "error" ? "secondaryNegative" : "contentDefault";
	}
	function v(e) {
		return e === "valid" ? "Session is valid" : e === "invalid" ? "Session is invalid (logged out)" : e === "error" ? "Validation failed (request error)" : "";
	}
	function S(e) {
		return typeof e != "boolean" ? "contentDefault" : e ? "secondaryPositive" : "secondaryNegative";
	}
	function R(e) {
		if (e == null) return String(e);
		var t = Number(e), n = t === 0x97e965c4439a ? "WHATSAPP_WEB" : t === 0x7e36f3fcc43bc ? "WWW_COMET" : "OTHER";
		return n + " (" + e + ")";
	}
	var L = {
		wam_canonical_ent_recovery_companion: [
			"canonical_ent_recovery_companion_event",
			"canonical_ent_registration_trace_id",
			"canonical_ent_request_id",
			"time"
		],
		wam_canonical_ent_recovery_critical_event: [
			"canonical_ent_recovery_critical_event_name",
			"canonical_ent_recovery_critical_event_metadata",
			"canonical_ent_registration_trace_id",
			"canonical_ent_request_id",
			"time"
		]
	};
	function E(e, t) {
		var n, r = {
			end: "now",
			start: "-7 days",
			filterMode: "DEFAULT",
			sampleCols: (n = L[e]) != null ? n : [],
			order: "time",
			order_desc: !0,
			constraints: [[{
				column: "canonical_ent_registration_trace_id",
				op: "eq",
				value: [JSON.stringify(t)],
				is_included_in_query: !0
			}]]
		}, o = new URLSearchParams({
			dataset: e,
			drillstate: JSON.stringify(r),
			view: "samples_client"
		});
		return "https://www.internalfb.com/intern/scuba/query/?" + o.toString();
	}
	function k() {
		self.location.reload();
	}
	var I = {
		section: {
			rowGap: "x1qvou4u",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		tableRow: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		tableRowAlt: {
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		actionHeader: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		spinnerRow: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			$$css: !0
		}
	};
	l.default = g;
}), 98);
