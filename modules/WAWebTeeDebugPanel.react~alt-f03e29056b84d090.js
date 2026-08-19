__d("WAWebTeeDebugPanel.react", [
	"WAWebTeeClientProvider",
	"WAWebTeeDebugStore",
	"WAWebTeeEnums",
	"WAWebTeeRequestBuilder",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		return JSON.stringify(e.request, null, 2);
	}
	function _(e) {
		return e === "pending" ? "⏳ pending" : e === "streaming" ? "⚡ streaming" : e === "completed" ? "✅ completed" : e;
	}
	function f() {
		var e = m(function() {
			return [].concat(o("WAWebTeeDebugStore").getEntries());
		}), t = e[0], n = e[1];
		return d(function() {
			return o("WAWebTeeDebugStore").subscribe(function() {
				n([].concat(o("WAWebTeeDebugStore").getEntries()));
			});
		}, []), t;
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("WAWebTeeClientProvider").getClient(), n = !1, r = !1, a;
			try {
				for (var i = babelHelpers.asyncIterator(t.sendRequest(e)), l; n = !(l = yield i.next()).done; n = !1) var s = l.value;
			} catch (e) {
				r = !0, a = e;
			} finally {
				try {
					n && i.return != null && (yield i.return());
				} finally {
					if (r) throw a;
				}
			}
		}), h.apply(this, arguments);
	}
	function y() {
		var e, t = f(), n = m(null), r = n[0], a = n[1], i = m(""), l = i[0], u = i[1], d = r != null ? r : (e = t.find(function(e) {
			return e.status === "pending";
		})) == null ? void 0 : e.id, h = c(function() {
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
			g(t);
		}, []), y = c(function() {
			g(o("WAWebTeeRequestBuilder").buildWriteWithAIRequest("I think we should proceed with the plan", "professional", 3));
		}, []), C = c(function() {
			g(o("WAWebTeeRequestBuilder").buildSideChatRequest({
				type: o("WAWebTeeEnums").TEEMessageType.TEXT,
				text: "Summarize this conversation",
				sender_name: "Me",
				timestamp_seconds: Math.floor(Date.now() / 1e3),
				role: o("WAWebTeeEnums").ChatRole.USER
			}));
		}, []), v = d != null ? t.find(function(e) {
			return e.id === d;
		}) : null, S = m(null), R = S[0], L = S[1], E = c(function() {
			if (d != null) {
				if (R != null) {
					o("WAWebTeeDebugStore").submitRawResponse(d, R), L(null), u("");
					return;
				}
				l.trim() !== "" && (o("WAWebTeeDebugStore").submitResponse(d, l, o("WAWebTeeEnums").TEEResponseStatus.SUCCESS), u(""));
			}
		}, [
			d,
			l,
			R
		]), k = c(function(e) {
			L(e), u(JSON.stringify(e, null, 2));
		}, []), I = c(function() {
			var e, t = (e = v == null ? void 0 : v.request.common_metadata.identifier) != null ? e : crypto.randomUUID();
			k({
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
		}, [v, k]), T = c(function() {
			var e, t = (e = v == null ? void 0 : v.request.common_metadata.identifier) != null ? e : crypto.randomUUID();
			k({
				common_metadata: {
					identifier: t,
					status: o("WAWebTeeEnums").TEEResponseStatus.SUCCESS_NO_RESPONSE
				},
				wwai_response: {
					suggestions: [],
					status: o("WAWebTeeEnums").TEEResponseStatus.SUCCESS_NO_RESPONSE
				}
			});
		}, [v, k]), D = c(function() {
			d != null && o("WAWebTeeDebugStore").rejectEntry(d, "TEE server error (mock)");
		}, [d]), x = c(function() {
			o("WAWebTeeDebugStore").clearEntries(), a(null);
		}, []);
		return s.jsxs("div", {
			"data-testid": "tee_debug_panel",
			children: [
				s.jsxs("div", {
					style: b.section,
					children: [s.jsx("div", {
						style: b.label,
						children: "Fire Test Request"
					}), s.jsxs("div", {
						style: b.btnRow,
						children: [
							s.jsx("button", {
								style: b.triggerBtn,
								onClick: h,
								"data-testid": "tee_debug_trigger_summarize",
								children: "Summarize"
							}),
							s.jsx("button", {
								style: b.triggerBtn,
								onClick: y,
								"data-testid": "tee_debug_trigger_wwai",
								children: "Write with AI"
							}),
							s.jsx("button", {
								style: b.triggerBtn,
								onClick: C,
								"data-testid": "tee_debug_trigger_sidechat",
								children: "Side Chat"
							})
						]
					})]
				}),
				s.jsxs("div", {
					style: b.section,
					children: [
						s.jsxs("div", {
							style: b.label,
							children: ["Inject Response", d == null ? s.jsx("span", {
								style: b.hint,
								children: " — fire a request first"
							}) : s.jsxs("span", {
								style: b.hint,
								children: [" — for request #", String(d)]
							})]
						}),
						s.jsxs("div", {
							style: b.btnRow,
							children: [
								s.jsx("button", {
									style: b.quickBtn,
									onClick: I,
									disabled: d == null,
									"data-testid": "tee_debug_wwai_success",
									children: "WWAI: 3 Suggestions"
								}),
								s.jsx("button", {
									style: b.quickBtnWarn,
									onClick: T,
									disabled: d == null,
									"data-testid": "tee_debug_wwai_empty",
									children: "WWAI: Empty"
								}),
								s.jsx("button", {
									style: b.quickBtnDanger,
									onClick: D,
									disabled: d == null,
									"data-testid": "tee_debug_wwai_error",
									children: "WWAI: Error"
								})
							]
						}),
						s.jsx("textarea", {
							"aria-label": "Inject Response",
							"data-testid": "tee_debug_response_textarea",
							value: l,
							onChange: function(t) {
								var e = t.currentTarget.value;
								u(e);
								try {
									L(JSON.parse(e));
								} catch (e) {
									L(null);
								}
							},
							placeholder: "Type mock response text...",
							disabled: d == null,
							style: babelHelpers.extends({}, b.textarea, { opacity: d == null ? .4 : 1 })
						}),
						s.jsx("div", {
							style: b.btnRow,
							children: s.jsx("button", {
								style: b.sendBtn,
								onClick: E,
								disabled: d == null,
								"data-testid": "tee_debug_send_response_btn",
								children: "Send Response"
							})
						})
					]
				}),
				s.jsxs("div", {
					style: b.section,
					children: [s.jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: [s.jsxs("div", {
							style: b.label,
							children: [
								"Request Queue (",
								t.length,
								")"
							]
						}), t.length > 0 ? s.jsx("button", {
							style: babelHelpers.extends({}, b.triggerBtn, { marginLeft: "auto" }),
							onClick: x,
							"data-testid": "tee_debug_clear_btn",
							children: "Clear"
						}) : null]
					}), t.length === 0 ? s.jsx("div", {
						style: b.emptyMsg,
						children: "No requests yet. Click a trigger button above or open the WWAI tray."
					}) : null]
				}),
				t.map(function(e) {
					return s.jsxs("div", {
						style: babelHelpers.extends({}, b.entry, { backgroundColor: d === e.id ? "#f0f2f5" : "transparent" }),
						children: [s.jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: o("WDSVars.stylex").WDSVars.spacingSingle
							},
							children: [
								s.jsxs("span", {
									style: b.entryTitle,
									children: [
										"#",
										e.id,
										" ",
										e.requestType.toUpperCase()
									]
								}),
								s.jsx("span", {
									style: b.entryStatus,
									children: _(e.status)
								}),
								s.jsx("button", {
									style: babelHelpers.extends({}, b.triggerBtn, { marginLeft: "auto" }),
									onClick: function() {
										navigator.clipboard.writeText(p(e));
									},
									"data-testid": "tee_debug_copy_entry",
									children: "Copy JSON"
								}),
								s.jsx("button", {
									style: b.triggerBtn,
									onClick: function() {
										return a(e.id);
									},
									"data-testid": "tee_debug_select_entry",
									children: "Select"
								})
							]
						}), s.jsx("pre", {
							style: b.json,
							children: p(e)
						})]
					}, e.id);
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = {
		fontSize: "11px",
		padding: o("WDSVars.stylex").WDSVars.spacingHalf + " " + o("WDSVars.stylex").WDSVars.spacingSinglePlus,
		borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalf,
		cursor: "pointer",
		fontWeight: "bold"
	}, b = {
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
		triggerBtn: babelHelpers.extends({}, C, {
			border: "1px solid #ccc",
			backgroundColor: "#fff",
			color: "#111b21",
			fontWeight: "normal"
		}),
		quickBtn: babelHelpers.extends({}, C, {
			border: "1px solid #00a884",
			backgroundColor: "#e8f5e9",
			color: "#00a884"
		}),
		quickBtnWarn: babelHelpers.extends({}, C, {
			border: "1px solid #f0a030",
			backgroundColor: "#fff8e1",
			color: "#f0a030"
		}),
		quickBtnDanger: babelHelpers.extends({}, C, {
			border: "1px solid #e53935",
			backgroundColor: "#ffebee",
			color: "#e53935"
		}),
		sendBtn: babelHelpers.extends({}, C, {
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
