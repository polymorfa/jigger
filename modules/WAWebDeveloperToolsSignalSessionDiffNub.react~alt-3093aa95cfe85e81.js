__d("WAWebDeveloperToolsSignalSessionDiffNub.react", [
	"ReactDOM",
	"WAWebDebugMessagingInfra",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebSignalSessionDiffResolver",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcRefresh.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebInterval",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _() {
		var e = o("react-compiler-runtime").c(32), t = r("useWAWebToggle")(!1), n = t[0], a = t[1], i = p(!1), l = i[0], s = i[1], c = p(null), d = c[0], _ = c[1], C = p(null), b = C[0], S = C[1], R = p(!1), L = R[0], E = R[1], k, I;
		e[0] !== n || e[1] !== a ? (k = function() {
			if (n) {
				var e = function(t) {
					t.key === "Escape" && a();
				};
				return window.addEventListener("keydown", e), (function() {
					return window.removeEventListener("keydown", e);
				});
			}
		}, I = [n, a], e[0] = n, e[1] = a, e[2] = k, e[3] = I) : (k = e[2], I = e[3]), m(k, I);
		var T;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (T = async function() {
			E(!0), await r("WAWebDebugMessagingInfra").snapshotSignalSessions(), s(!0), _(new Date()), S(null), E(!1);
		}, e[4] = T) : T = e[4];
		var D = T, x;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (x = async function() {
			E(!0);
			try {
				var e = await r("WAWebDebugMessagingInfra").diffSignalSessions();
				if (e != null) {
					var t = o("WAWebSignalSessionDiffResolver").resolveAllDiffEntries(e.sessions), n = e.senderKeys.map(y), a = o("WAWebSignalSessionDiffResolver").resolveAllWidEntries(e.statusSkDistrib);
					S({
						sessions: t,
						senderKeys: n,
						statusSkDistrib: a
					});
				}
			} catch (e) {}
			E(!1);
		}, e[5] = x) : x = e[5];
		var $ = x, P;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			$();
		}, e[6] = P) : P = e[6];
		var N = r("useWAWebInterval")(P, 5e3), M = N[0], w = N[1], A, F;
		e[7] !== w || e[8] !== n || e[9] !== l || e[10] !== M ? (A = function() {
			return n && l ? M() : w(), (function() {
				return w();
			});
		}, F = [
			n,
			l,
			M,
			w
		], e[7] = w, e[8] = n, e[9] = l, e[10] = M, e[11] = A, e[12] = F) : (A = e[11], F = e[12]), m(A, F);
		var O;
		e[13] !== n || e[14] !== l || e[15] !== a ? (O = function() {
			n || (l ? $() : D()), a();
		}, e[13] = n, e[14] = l, e[15] = a, e[16] = O) : O = e[16];
		var B = O, W = b == null || b.sessions.length === 0, q = b == null || b.senderKeys.length === 0, U = b == null || b.statusSkDistrib.length === 0, V;
		e[17] !== B ? (V = u.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "signal-session-diff-nub",
			icon: "🔑",
			title: "Signal Sessions",
			onClick: B
		}), e[17] = B, e[18] = V) : V = e[18];
		var H;
		e[19] !== b || e[20] !== n || e[21] !== L || e[22] !== q || e[23] !== W || e[24] !== l || e[25] !== d || e[26] !== U || e[27] !== a ? (H = n && o("ReactDOM").createPortal(u.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Signal Sessions",
			onClose: a,
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
								label: L ? "Working…" : "New snapshot",
								onPress: function() {
									return void D();
								},
								disabled: L,
								widthMode: "flexible"
							})
						}), u.jsx(r("WAWebUnstyledButton.react"), {
							xstyle: v.refreshButton,
							onClick: function() {
								return void $();
							},
							disabled: !l || L,
							title: "Refresh key changes since last snapshot",
							testid: "signal-session-diff-refresh",
							children: u.jsx(r("WDSIconIcRefresh.react"), {
								width: 20,
								height: 20,
								iconXstyle: !l || L ? v.refreshIconDisabled : v.refreshIcon
							})
						})]
					}),
					d != null && u.jsxs("div", {
						className: "x1nxh6w3 xhslqc4 x1k4tb9n",
						children: [
							"Showing signal changes made after",
							" ",
							d.toLocaleString()
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
								] }) }), u.jsxs("tbody", { children: [W && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 5,
									children: "No changes to show"
								}) }), b != null && b.sessions.map(h)] })]
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
								] }) }), u.jsxs("tbody", { children: [q && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 4,
									children: "No changes to show"
								}) }), b != null && b.senderKeys.map(g)] })]
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
								] }) }), u.jsxs("tbody", { children: [U && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 5,
									children: "No changes to show"
								}) }), b != null && b.statusSkDistrib.map(f)] })]
							})
						})]
					})
				]
			})
		}), document.body), e[19] = b, e[20] = n, e[21] = L, e[22] = q, e[23] = W, e[24] = l, e[25] = d, e[26] = U, e[27] = a, e[28] = H) : H = e[28];
		var G;
		return e[29] !== V || e[30] !== H ? (G = u.jsxs(u.Fragment, { children: [V, H] }), e[29] = V, e[30] = H, e[31] = G) : G = e[31], G;
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
