__d("WAWebDeveloperToolsSignalSessionDiffNub.react", [
	"ReactDOM",
	"WAWebDebugMessagingInfra",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebSignalSessionDiffResolver",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcRefresh.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebInterval",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _() {
		var e = o("react-compiler-runtime").c(32), t = r("useWAWebToggle")(!1), a = t[0], i = t[1], l = p(!1), s = l[0], c = l[1], d = p(null), _ = d[0], C = d[1], b = p(null), S = b[0], R = b[1], L = p(!1), E = L[0], k = L[1], I, T;
		e[0] !== a || e[1] !== i ? (I = function() {
			if (a) {
				var e = function(t) {
					t.key === "Escape" && i();
				};
				return window.addEventListener("keydown", e), (function() {
					return window.removeEventListener("keydown", e);
				});
			}
		}, T = [a, i], e[0] = a, e[1] = i, e[2] = I, e[3] = T) : (I = e[2], T = e[3]), m(I, T);
		var D;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (D = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				k(!0), yield r("WAWebDebugMessagingInfra").snapshotSignalSessions(), c(!0), C(new Date()), R(null), k(!1);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[4] = D) : D = e[4];
		var x = D, $;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? ($ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				k(!0);
				try {
					var e = yield r("WAWebDebugMessagingInfra").diffSignalSessions();
					if (e != null) {
						var t = o("WAWebSignalSessionDiffResolver").resolveAllDiffEntries(e.sessions), n = e.senderKeys.map(y), a = o("WAWebSignalSessionDiffResolver").resolveAllWidEntries(e.statusSkDistrib);
						R({
							sessions: t,
							senderKeys: n,
							statusSkDistrib: a
						});
					}
				} catch (e) {}
				k(!1);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[5] = $) : $ = e[5];
		var P = $, N;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			P();
		}, e[6] = N) : N = e[6];
		var M = r("useWAWebInterval")(N, 5e3), w = M[0], A = M[1], F, O;
		e[7] !== A || e[8] !== a || e[9] !== s || e[10] !== w ? (F = function() {
			return a && s ? w() : A(), (function() {
				return A();
			});
		}, O = [
			a,
			s,
			w,
			A
		], e[7] = A, e[8] = a, e[9] = s, e[10] = w, e[11] = F, e[12] = O) : (F = e[11], O = e[12]), m(F, O);
		var B;
		e[13] !== a || e[14] !== s || e[15] !== i ? (B = function() {
			a || (s ? P() : x()), i();
		}, e[13] = a, e[14] = s, e[15] = i, e[16] = B) : B = e[16];
		var W = B, q = S == null || S.sessions.length === 0, U = S == null || S.senderKeys.length === 0, V = S == null || S.statusSkDistrib.length === 0, H;
		e[17] !== W ? (H = u.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "signal-session-diff-nub",
			icon: "🔑",
			title: "Signal Sessions",
			onClick: W
		}), e[17] = W, e[18] = H) : H = e[18];
		var G;
		e[19] !== S || e[20] !== a || e[21] !== E || e[22] !== U || e[23] !== q || e[24] !== s || e[25] !== _ || e[26] !== V || e[27] !== i ? (G = a && o("ReactDOM").createPortal(u.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Signal Sessions",
			onClose: i,
			modalId: "signal-session-diff-body-key",
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf xe93d63",
				children: [
					u.jsxs("div", {
						className: "x78zum5 x6s0dn4 xf91ah9",
						children: [u.jsx("div", {
							className: "x1d77m7x",
							children: u.jsx(r("WDSButton.react"), {
								variant: "filled",
								size: "medium",
								type: "default",
								label: E ? "Working…" : "New snapshot",
								onPress: function() {
									return void x();
								},
								disabled: E,
								widthMode: "flexible"
							})
						}), u.jsx(r("WAWebUnstyledButton.react"), {
							xstyle: v.refreshButton,
							onClick: function() {
								return void P();
							},
							disabled: !s || E,
							title: "Refresh key changes since last snapshot",
							testid: "signal-session-diff-refresh",
							children: u.jsx(r("WDSIconIcRefresh.react"), {
								width: 20,
								height: 20,
								iconXstyle: !s || E ? v.refreshIconDisabled : v.refreshIcon
							})
						})]
					}),
					_ != null && u.jsxs("div", {
						className: "x1nxh6w3 xhslqc4 x1k4tb9n",
						children: [
							"Showing signal changes made after",
							" ",
							_.toLocaleString()
						]
					}),
					u.jsxs("div", {
						className: "x78zum5 xdt5ytf x1380le5",
						children: [u.jsx("div", {
							className: "x6prxxf x1s688f x14ug900 xx6bls6",
							children: "Sessions"
						}), u.jsx("div", {
							className: "xw2csxc xnp1ti1 x1odjw0f",
							children: u.jsxs("table", {
								className: "xh8yej3 x1mwwwfo x1f6kntn x1hx0egp x1ed109x",
								children: [u.jsx("thead", { children: u.jsxs("tr", { children: [
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Change"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Address"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Device"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "PN"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Display Name"
									})
								] }) }), u.jsxs("tbody", { children: [q && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 5,
									children: "No changes to show"
								}) }), S != null && S.sessions.map(h)] })]
							})
						})]
					}),
					u.jsxs("div", {
						className: "x78zum5 xdt5ytf x1380le5",
						children: [u.jsx("div", {
							className: "x6prxxf x1s688f x14ug900 xx6bls6",
							children: "Sender Keys"
						}), u.jsx("div", {
							className: "xw2csxc xnp1ti1 x1odjw0f",
							children: u.jsxs("table", {
								className: "xh8yej3 x1mwwwfo x1f6kntn x1hx0egp x1ed109x",
								children: [u.jsx("thead", { children: u.jsxs("tr", { children: [
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Change"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Sender Key"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "PN"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Display Name"
									})
								] }) }), u.jsxs("tbody", { children: [U && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 4,
									children: "No changes to show"
								}) }), S != null && S.senderKeys.map(g)] })]
							})
						})]
					}),
					u.jsxs("div", {
						className: "x78zum5 xdt5ytf x1380le5",
						children: [u.jsx("div", {
							className: "x6prxxf x1s688f x14ug900 xx6bls6",
							children: "Status SK Distribution"
						}), u.jsx("div", {
							className: "xw2csxc xnp1ti1 x1odjw0f",
							children: u.jsxs("table", {
								className: "xh8yej3 x1mwwwfo x1f6kntn x1hx0egp x1ed109x",
								children: [u.jsx("thead", { children: u.jsxs("tr", { children: [
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Change"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Address"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Device"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "PN"
									}),
									u.jsx("th", {
										className: "x1yc453h x16ovd2e xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1s688f",
										children: "Display Name"
									})
								] }) }), u.jsxs("tbody", { children: [V && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 5,
									children: "No changes to show"
								}) }), S != null && S.statusSkDistrib.map(f)] })]
							})
						})]
					})
				]
			})
		}), document.body), e[19] = S, e[20] = a, e[21] = E, e[22] = U, e[23] = q, e[24] = s, e[25] = _, e[26] = V, e[27] = i, e[28] = G) : G = e[28];
		var z;
		return e[29] !== H || e[30] !== G ? (z = u.jsxs(u.Fragment, { children: [H, G] }), e[29] = H, e[30] = G, e[31] = z) : z = e[31], z;
	}
	function f(t, n) {
		return u.jsxs("tr", { children: [
			u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.td, b(t.change)), { children: t.change })),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.rawAddress
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.deviceId
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.phoneNumber
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.displayName
			})
		] }, n);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t, n) {
		return u.jsxs("tr", { children: [
			u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.td, b(t.change)), { children: t.change })),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.rawAddress
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.phoneNumber
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.displayName
			})
		] }, n);
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t, n) {
		return u.jsxs("tr", { children: [
			u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.td, b(t.change)), { children: t.change })),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.rawAddress
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.deviceId
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.phoneNumber
			}),
			u.jsx("td", {
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l x14ug900",
				children: t.displayName
			})
		] }, n);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t, n, r, a, i = e.address.split("::"), l = (t = i[0]) != null ? t : e.address, s = (n = i[1]) != null ? n : "", u = s !== "" ? o("WAWebSignalSessionDiffResolver").resolveAllDiffEntries([{
			change: e.change,
			address: s
		}])[0] : null;
		return {
			change: e.change,
			rawAddress: e.address,
			group: l,
			phoneNumber: (r = u == null ? void 0 : u.phoneNumber) != null ? r : "—",
			displayName: (a = u == null ? void 0 : u.displayName) != null ? a : "—"
		};
	}
	var C = {
		added: {
			color: "x1du590y",
			$$css: !0
		},
		removed: {
			color: "x30a034",
			$$css: !0
		},
		modified: {
			color: "x1f81s73",
			$$css: !0
		}
	};
	function b(e) {
		return e === "added" ? C.added : e === "removed" ? C.removed : e === "modified" ? C.modified : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	var v = {
		refreshButton: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x14qfxbe",
			height: "xc9qbxq",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			cursor: "x1ypdohk",
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		refreshIcon: {
			color: "x14ug900",
			$$css: !0
		},
		refreshIconDisabled: {
			color: "xhslqc4",
			opacity: "xti2d7y",
			$$css: !0
		},
		td: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			color: "x14ug900",
			$$css: !0
		}
	};
	l.default = _;
}), 98);
