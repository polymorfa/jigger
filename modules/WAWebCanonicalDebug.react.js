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
	"asyncToGeneratorRuntime",
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
		var e = o("react-compiler-runtime").c(40), t = _("idle"), a = t[0], i = t[1], l = _("idle"), s = l[0], c = l[1], d = _(null), g = d[0], h = d[1], y;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				i("validating");
				var e = yield o("WAWebCanonicalUserValidQuery").fetchCanonicalUserValid();
				i(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[0] = y) : y = e[0];
		var b = y, v;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (v = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				c("sending"), h(null);
				try {
					o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!0), yield o("WAWebCanonicalRecoveryActions").requestNonceFromPrimary(), c("awaiting_response"), self.setTimeout(function() {
						c(C);
					}, f);
				} catch (t) {
					var e = t;
					o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1), c("idle"), h(String(e));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[1] = v) : v = e[1];
		var L = v, E = p(null), k, I;
		e[2] !== s ? (k = function() {
			if (s !== "awaiting_response") {
				E.current != null && (self.clearInterval(E.current), E.current = null);
				return;
			}
			return E.current = self.setInterval(function() {
				o("WAWebCanonicalUtils").isCanonicalTokenPresent() && c("received");
			}, 500), (function() {
				E.current != null && (self.clearInterval(E.current), E.current = null);
			});
		}, I = [s], e[2] = s, e[3] = k, e[4] = I) : (k = e[3], I = e[4]), m(k, I);
		var x = a !== "idle" && a !== "validating", $;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: "Actions"
		}), e[5] = $) : $ = e[5];
		var P;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			return void b();
		}, e[6] = P) : P = e[6];
		var N = a === "validating", M;
		e[7] !== N ? (M = u.jsx(r("WDSButton.react"), {
			onPress: P,
			loading: N,
			label: "Validate Session"
		}), e[7] = N, e[8] = M) : M = e[8];
		var w = s === "sending" || s === "awaiting_response", A;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			return void L();
		}, e[9] = A) : A = e[9];
		var F;
		e[10] !== w ? (F = u.jsx(r("WDSButton.react"), {
			disabled: w,
			onPress: A,
			label: "Request New Token"
		}), e[10] = w, e[11] = F) : F = e[11];
		var O;
		e[12] !== s ? (O = s === "received" && u.jsx(r("WDSButton.react"), {
			onPress: T,
			label: "Reload App"
		}), e[12] = s, e[13] = O) : O = e[13];
		var B;
		e[14] !== F || e[15] !== O || e[16] !== M ? (B = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: D.actionHeader,
			children: [
				M,
				F,
				O
			]
		}), e[14] = F, e[15] = O, e[16] = M, e[17] = B) : B = e[17];
		var W;
		e[18] !== x || e[19] !== a ? (W = x && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: S(a),
			children: R(a)
		}), e[18] = x, e[19] = a, e[20] = W) : W = e[20];
		var q;
		e[21] !== s ? (q = s === "sending" && u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: D.spinnerRow,
			children: [u.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: "Sending nonce request..."
			})]
		}), e[21] = s, e[22] = q) : q = e[22];
		var U;
		e[23] !== s ? (U = s === "awaiting_response" && u.jsxs("div", {
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
		}), e[23] = s, e[24] = U) : U = e[24];
		var V;
		e[25] !== s ? (V = s === "timed_out" && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryNegative",
			children: "Primary app didn't return the token. Try again with the primary app open."
		}), e[25] = s, e[26] = V) : V = e[26];
		var H;
		e[27] !== g || e[28] !== s ? (H = g != null && s !== "timed_out" && u.jsxs(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryNegative",
			children: ["Error: ", g]
		}), e[27] = g, e[28] = s, e[29] = H) : H = e[29];
		var G;
		e[30] !== s ? (G = s === "received" && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryPositive",
			children: "Token received. Reload the app to apply."
		}), e[30] = s, e[31] = G) : G = e[31];
		var z;
		return e[32] !== B || e[33] !== W || e[34] !== q || e[35] !== U || e[36] !== V || e[37] !== H || e[38] !== G ? (z = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.section,
			children: [
				$,
				B,
				W,
				q,
				U,
				V,
				H,
				G
			]
		}), e[32] = B, e[33] = W, e[34] = q, e[35] = U, e[36] = V, e[37] = H, e[38] = G, e[39] = z) : z = e[39], z;
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
