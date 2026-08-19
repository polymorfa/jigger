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
	"stylex",
	"useWAWebInterval",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _() {
		var t = r("useWAWebToggle")(!1), n = t[0], a = t[1], i = p(!1), l = i[0], s = i[1], c = p(null), _ = c[0], f = c[1], y = p(null), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1];
		m(function() {
			if (n) {
				var e = function(t) {
					t.key === "Escape" && a();
				};
				return window.addEventListener("keydown", e), function() {
					return window.removeEventListener("keydown", e);
				};
			}
		}, [n, a]);
		var L = d(async function() {
			R(!0), await r("WAWebDebugMessagingInfra").snapshotSignalSessions(), s(!0), f(new Date()), b(null), R(!1);
		}, []), E = d(async function() {
			R(!0);
			try {
				var e = await r("WAWebDebugMessagingInfra").diffSignalSessions();
				if (e != null) {
					var t = o("WAWebSignalSessionDiffResolver").resolveAllDiffEntries(e.sessions), n = e.senderKeys.map(function(e) {
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
					}), a = o("WAWebSignalSessionDiffResolver").resolveAllWidEntries(e.statusSkDistrib);
					b({
						sessions: t,
						senderKeys: n,
						statusSkDistrib: a
					});
				}
			} catch (e) {}
			R(!1);
		}, []), k = r("useWAWebInterval")(function() {
			E();
		}, 5e3), I = k[0], T = k[1];
		m(function() {
			return n && l ? I() : T(), function() {
				return T();
			};
		}, [
			n,
			l,
			I,
			T
		]);
		var D = d(function() {
			n || (l ? E() : L()), a();
		}, [
			n,
			l,
			L,
			E,
			a
		]), x = C == null || C.sessions.length === 0, $ = C == null || C.senderKeys.length === 0, P = C == null || C.statusSkDistrib.length === 0;
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "signal-session-diff-nub",
			icon: "🔑",
			title: "Signal Sessions",
			onClick: D
		}), n && o("ReactDOM").createPortal(u.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
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
								label: S ? "Working…" : "New snapshot",
								onPress: function() {
									return void L();
								},
								disabled: S,
								widthMode: "flexible"
							})
						}), u.jsx(r("WAWebUnstyledButton.react"), {
							xstyle: h.refreshButton,
							onClick: function() {
								return void E();
							},
							disabled: !l || S,
							title: "Refresh key changes since last snapshot",
							testid: "signal-session-diff-refresh",
							children: u.jsx(r("WDSIconIcRefresh.react"), {
								width: 20,
								height: 20,
								iconXstyle: !l || S ? h.refreshIconDisabled : h.refreshIcon
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
								] }) }), u.jsxs("tbody", { children: [x && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 5,
									children: "No changes to show"
								}) }), C != null && C.sessions.map(function(t, n) {
									return u.jsxs("tr", { children: [
										u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.td, g(t.change)), { children: t.change })),
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
								})] })]
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
								] }) }), u.jsxs("tbody", { children: [$ && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 4,
									children: "No changes to show"
								}) }), C != null && C.senderKeys.map(function(t, n) {
									return u.jsxs("tr", { children: [
										u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.td, g(t.change)), { children: t.change })),
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
								})] })]
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
								] }) }), u.jsxs("tbody", { children: [P && u.jsx("tr", { children: u.jsx("td", {
									className: "xdx6fka xvtqlqk xso031l x1q0q8m5 x120ee7l xhslqc4 x1k4tb9n x2b8uid x9orja2 xbaz6xv",
									colSpan: 5,
									children: "No changes to show"
								}) }), C != null && C.statusSkDistrib.map(function(t, n) {
									return u.jsxs("tr", { children: [
										u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.td, g(t.change)), { children: t.change })),
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
								})] })]
							})
						})]
					})
				]
			})
		}), document.body)] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = {
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
	function g(e) {
		return e === "added" ? f.added : e === "removed" ? f.removed : e === "modified" ? f.modified : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	var h = {
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
