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
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = 3e4;
	function g() {
		var t = o("react-compiler-runtime").c(1), n;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), { children: u.jsxs("div", { children: [u.jsx(h, {}), u.jsx(y, {})] }) })), t[0] = n) : n = t[0], n;
	}
	function h() {
		var e = o("react-compiler-runtime").c(1), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n, a = o("WAWebUserPrefsCanonical").getCanonicalRegistrationTraceId(), i = [
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
					(n = r("CurrentUser").getPossiblyNonFacebookUserID()) != null ? n : "null",
					void 0
				],
				[
					"App ID",
					E(r("CurrentUser").getAppID()),
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
			], l = [
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
			t = u.jsxs(u.Fragment, { children: [
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: D.section,
					children: [u.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						children: "State"
					}), u.jsx(b, { rows: i })]
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: D.section,
					children: [u.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						children: "Gating"
					}), u.jsx(b, { rows: l })]
				}),
				a !== "" && u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: D.section,
					children: [u.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						children: "Debug Links"
					}), u.jsxs("ul", {
						className: "xdj266r x14z9mp xat24cr x1lziwak x1c1uobl x3ct3a4 x129bwdz",
						children: [u.jsx("li", { children: u.jsx("span", {
							className: "x1bvjpef x1ypdohk",
							children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: I("wam_canonical_ent_recovery_companion", a),
								children: u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									children: "Canonical Recovery Events"
								})
							})
						}) }), u.jsx("li", { children: u.jsx("span", {
							className: "x1bvjpef x1ypdohk",
							children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: I("wam_canonical_ent_recovery_critical_event", a),
								children: u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									children: "Canonical Critical Error Events"
								})
							})
						}) })]
					})]
				})
			] }), e[0] = t;
		} else t = e[0];
		return t;
	}
	function y() {
		var e = o("react-compiler-runtime").c(40), t = _("idle"), n = t[0], a = t[1], i = _("idle"), l = i[0], s = i[1], c = _(null), d = c[0], g = c[1], h;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (h = async function() {
			a("validating");
			var e = await o("WAWebCanonicalUserValidQuery").fetchCanonicalUserValid();
			a(e);
		}, e[0] = h) : h = e[0];
		var y = h, b;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (b = async function() {
			s("sending"), g(null);
			try {
				o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!0), await o("WAWebCanonicalRecoveryActions").requestNonceFromPrimary(), s("awaiting_response"), self.setTimeout(function() {
					s(C);
				}, f);
			} catch (t) {
				var e = t;
				o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1), s("idle"), g(String(e));
			}
		}, e[1] = b) : b = e[1];
		var v = b, L = p(null), E, k;
		e[2] !== l ? (E = function() {
			if (l !== "awaiting_response") {
				L.current != null && (self.clearInterval(L.current), L.current = null);
				return;
			}
			return L.current = self.setInterval(function() {
				o("WAWebCanonicalUtils").isCanonicalTokenPresent() && s("received");
			}, 500), (function() {
				L.current != null && (self.clearInterval(L.current), L.current = null);
			});
		}, k = [l], e[2] = l, e[3] = E, e[4] = k) : (E = e[3], k = e[4]), m(E, k);
		var I = n !== "idle" && n !== "validating", x;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: "Actions"
		}), e[5] = x) : x = e[5];
		var $;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			return void y();
		}, e[6] = $) : $ = e[6];
		var P = n === "validating", N;
		e[7] !== P ? (N = u.jsx(r("WDSButton.react"), {
			onPress: $,
			loading: P,
			label: "Validate Session"
		}), e[7] = P, e[8] = N) : N = e[8];
		var M = l === "sending" || l === "awaiting_response", w;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (w = function() {
			return void v();
		}, e[9] = w) : w = e[9];
		var A;
		e[10] !== M ? (A = u.jsx(r("WDSButton.react"), {
			disabled: M,
			onPress: w,
			label: "Request New Token"
		}), e[10] = M, e[11] = A) : A = e[11];
		var F;
		e[12] !== l ? (F = l === "received" && u.jsx(r("WDSButton.react"), {
			onPress: T,
			label: "Reload App"
		}), e[12] = l, e[13] = F) : F = e[13];
		var O;
		e[14] !== A || e[15] !== F || e[16] !== N ? (O = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: D.actionHeader,
			children: [
				N,
				A,
				F
			]
		}), e[14] = A, e[15] = F, e[16] = N, e[17] = O) : O = e[17];
		var B;
		e[18] !== I || e[19] !== n ? (B = I && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: S(n),
			children: R(n)
		}), e[18] = I, e[19] = n, e[20] = B) : B = e[20];
		var W;
		e[21] !== l ? (W = l === "sending" && u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: D.spinnerRow,
			children: [u.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: "Sending nonce request..."
			})]
		}), e[21] = l, e[22] = W) : W = e[22];
		var q;
		e[23] !== l ? (q = l === "awaiting_response" && u.jsxs("div", {
			className: "x1c7u0tx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xbrszos xea3l6g x18isctg x2q3nzr x78zum5 xdt5ytf x129bwdz",
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: D.spinnerRow,
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
		}), e[23] = l, e[24] = q) : q = e[24];
		var U;
		e[25] !== l ? (U = l === "timed_out" && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryNegative",
			children: "Primary app didn't return the token. Try again with the primary app open."
		}), e[25] = l, e[26] = U) : U = e[26];
		var V;
		e[27] !== d || e[28] !== l ? (V = d != null && l !== "timed_out" && u.jsxs(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryNegative",
			children: ["Error: ", d]
		}), e[27] = d, e[28] = l, e[29] = V) : V = e[29];
		var H;
		e[30] !== l ? (H = l === "received" && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryPositive",
			children: "Token received. Reload the app to apply."
		}), e[30] = l, e[31] = H) : H = e[31];
		var G;
		return e[32] !== O || e[33] !== B || e[34] !== W || e[35] !== q || e[36] !== U || e[37] !== V || e[38] !== H ? (G = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.section,
			children: [
				x,
				O,
				B,
				W,
				q,
				U,
				V,
				H
			]
		}), e[32] = O, e[33] = B, e[34] = W, e[35] = q, e[36] = U, e[37] = V, e[38] = H, e[39] = G) : G = e[39], G;
	}
	function C(e) {
		return e === "awaiting_response" ? "timed_out" : e;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(5), n = e.rows, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xh8yej3 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xrlsmeg" }, t[0] = r) : r = t[0];
		var a;
		t[1] !== n ? (a = n.map(v), t[1] = n, t[2] = a) : a = t[2];
		var i;
		return t[3] !== a ? (i = u.jsx("div", babelHelpers.extends({}, r, { children: a })), t[3] = a, t[4] = i) : i = t[4], i;
	}
	function v(e, t) {
		var n = e[0], a = e[1], i = e[2], l = typeof a == "boolean" ? String(a) : a;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [D.tableRow, t % 2 === 0 && D.tableRowAlt],
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
					colorName: L(a),
					children: l
				})
			})]
		}, n);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return e === "valid" ? "secondaryPositive" : e === "invalid" || e === "error" ? "secondaryNegative" : "contentDefault";
	}
	function R(e) {
		return e === "valid" ? "Session is valid" : e === "invalid" ? "Session is invalid (logged out)" : e === "error" ? "Validation failed (request error)" : "";
	}
	function L(e) {
		return typeof e != "boolean" ? "contentDefault" : e ? "secondaryPositive" : "secondaryNegative";
	}
	function E(e) {
		if (e == null) return String(e);
		var t = Number(e), n = t === 0x97e965c4439a ? "WHATSAPP_WEB" : t === 0x7e36f3fcc43bc ? "WWW_COMET" : "OTHER";
		return n + " (" + e + ")";
	}
	var k = {
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
	function I(e, t) {
		var n, r = {
			end: "now",
			start: "-7 days",
			filterMode: "DEFAULT",
			sampleCols: (n = k[e]) != null ? n : [],
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
	function T() {
		self.location.reload();
	}
	var D = {
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
