__d("WAWebTeeDebugPanel.react", [
	"WAWebTeeClientProvider",
	"WAWebTeeDebugStore",
	"WAWebTeeEnums",
	"WAWebTeeRequestBuilder",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		return JSON.stringify(e.request, null, 2);
	}
	function _(e) {
		return e === "pending" ? "⏳ pending" : e === "streaming" ? "⚡ streaming" : e === "completed" ? "✅ completed" : e;
	}
	function f() {
		var e = o("react-compiler-runtime").c(2), t = m(g), n = t[0], r = t[1], a, i;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			return o("WAWebTeeDebugStore").subscribe(function() {
				r([].concat(o("WAWebTeeDebugStore").getEntries()));
			});
		}, i = [], e[0] = a, e[1] = i) : (a = e[0], i = e[1]), d(a, i), n;
	}
	function g() {
		return [].concat(o("WAWebTeeDebugStore").getEntries());
	}
	async function h(e) {
		var t = o("WAWebTeeClientProvider").getClient(), n = !1, r = !1, a;
		try {
			for (var i = babelHelpers.asyncIterator(t.sendRequest(e)), l; n = !(l = await i.next()).done; n = !1) var s = l.value;
		} catch (e) {
			r = !0, a = e;
		} finally {
			try {
				n && i.return != null && await i.return();
			} finally {
				if (r) throw a;
			}
		}
	}
	function y() {
		var e = o("react-compiler-runtime").c(71), t = f(), n = m(null), r = n[0], a = n[1], i = m(""), l = i[0], u = i[1], c;
		if (e[0] !== t || e[1] !== r) {
			var d;
			c = r != null ? r : (d = t.find(S)) == null ? void 0 : d.id, e[0] = t, e[1] = r, e[2] = c;
		} else c = e[2];
		var g = c, h = v, y = b, R = C, E;
		e[3] !== g || e[4] !== t ? (E = g != null ? t.find(function(e) {
			return e.id === g;
		}) : null, e[3] = g, e[4] = t, e[5] = E) : E = e[5];
		var k = E, I = m(null), T = I[0], D = I[1], x;
		e[6] !== g || e[7] !== T || e[8] !== l ? (x = function() {
			if (g != null) {
				if (T != null) {
					o("WAWebTeeDebugStore").submitRawResponse(g, T), D(null), u("");
					return;
				}
				l.trim() !== "" && (o("WAWebTeeDebugStore").submitResponse(g, l, o("WAWebTeeEnums").TEEResponseStatus.SUCCESS), u(""));
			}
		}, e[6] = g, e[7] = T, e[8] = l, e[9] = x) : x = e[9];
		var $ = x, P;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (P = function(t) {
			D(t), u(JSON.stringify(t, null, 2));
		}, e[10] = P) : P = e[10];
		var N = P, M;
		e[11] !== (k == null ? void 0 : k.request.common_metadata.identifier) ? (M = function() {
			var e, t = (e = k == null ? void 0 : k.request.common_metadata.identifier) != null ? e : crypto.randomUUID();
			N({
				common_metadata: {
					identifier: t,
					status: o("WAWebTeeEnums").TEEResponseStatus.SUCCESS
				},
				wwai_response: {
					suggestions: [
						"Here is a polished version of your message.",
						"Consider this alternative wording for clarity.",
						"Try this more concise phrasing instead."
					],
					status: o("WAWebTeeEnums").TEEResponseStatus.SUCCESS
				}
			});
		}, e[11] = k == null ? void 0 : k.request.common_metadata.identifier, e[12] = M) : M = e[12];
		var w = M, A;
		e[13] !== (k == null ? void 0 : k.request.common_metadata.identifier) ? (A = function() {
			var e, t = (e = k == null ? void 0 : k.request.common_metadata.identifier) != null ? e : crypto.randomUUID();
			N({
				common_metadata: {
					identifier: t,
					status: o("WAWebTeeEnums").TEEResponseStatus.SUCCESS_NO_RESPONSE
				},
				wwai_response: {
					suggestions: [],
					status: o("WAWebTeeEnums").TEEResponseStatus.SUCCESS_NO_RESPONSE
				}
			});
		}, e[13] = k == null ? void 0 : k.request.common_metadata.identifier, e[14] = A) : A = e[14];
		var F = A, O;
		e[15] !== g ? (O = function() {
			g != null && o("WAWebTeeDebugStore").rejectEntry(g, "TEE server error (mock)");
		}, e[15] = g, e[16] = O) : O = e[16];
		var B = O, W;
		e[17] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			o("WAWebTeeDebugStore").clearEntries(), a(null);
		}, e[17] = W) : W = e[17];
		var q = W, U;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (U = s.jsx("div", {
			style: L.label,
			children: "Fire Test Request"
		}), e[18] = U) : U = e[18];
		var V;
		e[19] === Symbol.for("react.memo_cache_sentinel") ? (V = s.jsxs("div", {
			style: L.section,
			children: [U, s.jsxs("div", {
				style: L.btnRow,
				children: [
					s.jsx("button", {
						style: L.triggerBtn,
						onClick: h,
						"data-testid": "tee_debug_trigger_summarize",
						children: "Summarize"
					}),
					s.jsx("button", {
						style: L.triggerBtn,
						onClick: y,
						"data-testid": "tee_debug_trigger_wwai",
						children: "Write with AI"
					}),
					s.jsx("button", {
						style: L.triggerBtn,
						onClick: R,
						"data-testid": "tee_debug_trigger_sidechat",
						children: "Side Chat"
					})
				]
			})]
		}), e[19] = V) : V = e[19];
		var H;
		e[20] !== g ? (H = s.jsxs("div", {
			style: L.label,
			children: ["Inject Response", g == null ? s.jsx("span", {
				style: L.hint,
				children: " — fire a request first"
			}) : s.jsxs("span", {
				style: L.hint,
				children: [" — for request #", String(g)]
			})]
		}), e[20] = g, e[21] = H) : H = e[21];
		var G = g == null, z;
		e[22] !== w || e[23] !== G ? (z = s.jsx("button", {
			style: L.quickBtn,
			onClick: w,
			disabled: G,
			"data-testid": "tee_debug_wwai_success",
			children: "WWAI: 3 Suggestions"
		}), e[22] = w, e[23] = G, e[24] = z) : z = e[24];
		var j = g == null, K;
		e[25] !== F || e[26] !== j ? (K = s.jsx("button", {
			style: L.quickBtnWarn,
			onClick: F,
			disabled: j,
			"data-testid": "tee_debug_wwai_empty",
			children: "WWAI: Empty"
		}), e[25] = F, e[26] = j, e[27] = K) : K = e[27];
		var Q = g == null, X;
		e[28] !== B || e[29] !== Q ? (X = s.jsx("button", {
			style: L.quickBtnDanger,
			onClick: B,
			disabled: Q,
			"data-testid": "tee_debug_wwai_error",
			children: "WWAI: Error"
		}), e[28] = B, e[29] = Q, e[30] = X) : X = e[30];
		var Y;
		e[31] !== z || e[32] !== K || e[33] !== X ? (Y = s.jsxs("div", {
			style: L.btnRow,
			children: [
				z,
				K,
				X
			]
		}), e[31] = z, e[32] = K, e[33] = X, e[34] = Y) : Y = e[34];
		var J;
		e[35] === Symbol.for("react.memo_cache_sentinel") ? (J = function(t) {
			var e = t.currentTarget.value;
			u(e);
			try {
				D(JSON.parse(e));
			} catch (e) {
				D(null);
			}
		}, e[35] = J) : J = e[35];
		var Z = g == null, ee = g == null ? .4 : 1, te;
		e[36] !== ee ? (te = babelHelpers.extends({}, L.textarea, { opacity: ee }), e[36] = ee, e[37] = te) : te = e[37];
		var ne;
		e[38] !== l || e[39] !== Z || e[40] !== te ? (ne = s.jsx("textarea", {
			"aria-label": "Inject Response",
			"data-testid": "tee_debug_response_textarea",
			value: l,
			onChange: J,
			placeholder: "Type mock response text...",
			disabled: Z,
			style: te
		}), e[38] = l, e[39] = Z, e[40] = te, e[41] = ne) : ne = e[41];
		var re = g == null, oe;
		e[42] !== $ || e[43] !== re ? (oe = s.jsx("div", {
			style: L.btnRow,
			children: s.jsx("button", {
				style: L.sendBtn,
				onClick: $,
				disabled: re,
				"data-testid": "tee_debug_send_response_btn",
				children: "Send Response"
			})
		}), e[42] = $, e[43] = re, e[44] = oe) : oe = e[44];
		var ae;
		e[45] !== H || e[46] !== Y || e[47] !== ne || e[48] !== oe ? (ae = s.jsxs("div", {
			style: L.section,
			children: [
				H,
				Y,
				ne,
				oe
			]
		}), e[45] = H, e[46] = Y, e[47] = ne, e[48] = oe, e[49] = ae) : ae = e[49];
		var ie;
		e[50] === Symbol.for("react.memo_cache_sentinel") ? (ie = {
			display: "flex",
			alignItems: "center"
		}, e[50] = ie) : ie = e[50];
		var le, se;
		e[51] !== t.length ? (le = s.jsxs("div", {
			style: L.label,
			children: [
				"Request Queue (",
				t.length,
				")"
			]
		}), se = t.length > 0 ? s.jsx("button", {
			style: babelHelpers.extends({}, L.triggerBtn, { marginLeft: "auto" }),
			onClick: q,
			"data-testid": "tee_debug_clear_btn",
			children: "Clear"
		}) : null, e[51] = t.length, e[52] = le, e[53] = se) : (le = e[52], se = e[53]);
		var ue;
		e[54] !== le || e[55] !== se ? (ue = s.jsxs("div", {
			style: ie,
			children: [le, se]
		}), e[54] = le, e[55] = se, e[56] = ue) : ue = e[56];
		var ce;
		e[57] !== t.length ? (ce = t.length === 0 ? s.jsx("div", {
			style: L.emptyMsg,
			children: "No requests yet. Click a trigger button above or open the WWAI tray."
		}) : null, e[57] = t.length, e[58] = ce) : ce = e[58];
		var de;
		e[59] !== ue || e[60] !== ce ? (de = s.jsxs("div", {
			style: L.section,
			children: [ue, ce]
		}), e[59] = ue, e[60] = ce, e[61] = de) : de = e[61];
		var me;
		if (e[62] !== g || e[63] !== t) {
			var pe;
			e[65] !== g ? (pe = function(t) {
				return s.jsxs("div", {
					style: babelHelpers.extends({}, L.entry, { backgroundColor: g === t.id ? "#f0f2f5" : "transparent" }),
					children: [s.jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: o("WDSVars.stylex").WDSVars.spacingSingle
						},
						children: [
							s.jsxs("span", {
								style: L.entryTitle,
								children: [
									"#",
									t.id,
									" ",
									t.requestType.toUpperCase()
								]
							}),
							s.jsx("span", {
								style: L.entryStatus,
								children: _(t.status)
							}),
							s.jsx("button", {
								style: babelHelpers.extends({}, L.triggerBtn, { marginLeft: "auto" }),
								onClick: function() {
									navigator.clipboard.writeText(p(t));
								},
								"data-testid": "tee_debug_copy_entry",
								children: "Copy JSON"
							}),
							s.jsx("button", {
								style: L.triggerBtn,
								onClick: function() {
									return a(t.id);
								},
								"data-testid": "tee_debug_select_entry",
								children: "Select"
							})
						]
					}), s.jsx("pre", {
						style: L.json,
						children: p(t)
					})]
				}, t.id);
			}, e[65] = g, e[66] = pe) : pe = e[66], me = t.map(pe), e[62] = g, e[63] = t, e[64] = me;
		} else me = e[64];
		var _e;
		return e[67] !== ae || e[68] !== de || e[69] !== me ? (_e = s.jsxs("div", {
			"data-testid": "tee_debug_panel",
			children: [
				V,
				ae,
				de,
				me
			]
		}), e[67] = ae, e[68] = de, e[69] = me, e[70] = _e) : _e = e[70], _e;
	}
	function C() {
		h(o("WAWebTeeRequestBuilder").buildSideChatRequest({
			type: o("WAWebTeeEnums").TEEMessageType.TEXT,
			text: "Summarize this conversation",
			sender_name: "Me",
			timestamp_seconds: Math.floor(Date.now() / 1e3),
			role: o("WAWebTeeEnums").ChatRole.USER
		}));
	}
	function b() {
		h(o("WAWebTeeRequestBuilder").buildWriteWithAIRequest("I think we should proceed with the plan", "professional", 3));
	}
	function v() {
		var e, t = o("WAWebTeeRequestBuilder").buildSummaryRequest([{
			type: (e = o("WAWebTeeEnums")).TEEMessageType.TEXT,
			text: "Hey, did you see the new feature?",
			sender_name: "Alice",
			timestamp_seconds: Math.floor(Date.now() / 1e3) - 120,
			role: e.ChatRole.USER
		}, {
			type: e.TEEMessageType.TEXT,
			text: "Yes! It looks great. I think we should ship it.",
			sender_name: "Bob",
			timestamp_seconds: Math.floor(Date.now() / 1e3) - 60,
			role: e.ChatRole.USER
		}]);
		h(t);
	}
	function S(e) {
		return e.status === "pending";
	}
	var R = {
		fontSize: "11px",
		padding: o("WDSVars.stylex").WDSVars.spacingHalf + " " + o("WDSVars.stylex").WDSVars.spacingSinglePlus,
		borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalf,
		cursor: "pointer",
		fontWeight: "bold"
	}, L = {
		section: {
			padding: o("WDSVars.stylex").WDSVars.spacingSinglePlus + " " + o("WDSVars.stylex").WDSVars.spacingDouble,
			borderBottom: "1px solid #e9edef"
		},
		label: {
			fontSize: "11px",
			fontWeight: "bold",
			color: "#667781",
			textTransform: "uppercase",
			letterSpacing: "0.5px",
			marginBottom: o("WDSVars.stylex").WDSVars.spacingSingle
		},
		hint: {
			fontWeight: "normal",
			textTransform: "none"
		},
		btnRow: {
			display: "flex",
			gap: o("WDSVars.stylex").WDSVars.spacingSingle,
			marginTop: o("WDSVars.stylex").WDSVars.spacingHalf,
			flexWrap: "wrap"
		},
		triggerBtn: babelHelpers.extends({}, R, {
			border: "1px solid #ccc",
			backgroundColor: "#fff",
			color: "#111b21",
			fontWeight: "normal"
		}),
		quickBtn: babelHelpers.extends({}, R, {
			border: "1px solid #00a884",
			backgroundColor: "#e8f5e9",
			color: "#00a884"
		}),
		quickBtnWarn: babelHelpers.extends({}, R, {
			border: "1px solid #f0a030",
			backgroundColor: "#fff8e1",
			color: "#f0a030"
		}),
		quickBtnDanger: babelHelpers.extends({}, R, {
			border: "1px solid #e53935",
			backgroundColor: "#ffebee",
			color: "#e53935"
		}),
		sendBtn: babelHelpers.extends({}, R, {
			fontSize: "12px",
			padding: o("WDSVars.stylex").WDSVars.spacingSingle + " " + o("WDSVars.stylex").WDSVars.spacingDouble,
			border: "1px solid #00a884",
			backgroundColor: "#00a884",
			color: "#fff"
		}),
		textarea: {
			width: "100%",
			minHeight: "60px",
			fontFamily: "monospace",
			fontSize: "11px",
			resize: "vertical",
			border: "1px solid #e9edef",
			borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalf,
			padding: o("WDSVars.stylex").WDSVars.spacingSingle,
			backgroundColor: "#fff",
			color: "#111b21",
			boxSizing: "border-box",
			marginTop: o("WDSVars.stylex").WDSVars.spacingHalf
		},
		emptyMsg: {
			fontSize: "12px",
			color: "#667781",
			padding: o("WDSVars.stylex").WDSVars.spacingHalf + " 0"
		},
		entry: {
			padding: o("WDSVars.stylex").WDSVars.spacingSingle + " " + o("WDSVars.stylex").WDSVars.spacingDouble,
			borderBottom: "1px solid #e9edef"
		},
		entryTitle: {
			fontSize: "12px",
			fontWeight: "bold",
			color: "#111b21"
		},
		entryStatus: {
			fontSize: "11px",
			color: "#667781"
		},
		json: {
			fontFamily: "monospace",
			fontSize: "11px",
			lineHeight: "1.4",
			backgroundColor: "#f0f2f5",
			border: "1px solid #e9edef",
			borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalf,
			padding: o("WDSVars.stylex").WDSVars.spacingSingle,
			margin: o("WDSVars.stylex").WDSVars.spacingHalf + " 0 0 0",
			whiteSpace: "pre-wrap",
			wordBreak: "break-all",
			userSelect: "text",
			cursor: "text",
			maxHeight: "200px",
			overflow: "auto",
			color: "#111b21"
		}
	};
	l.default = y;
}), 98);
