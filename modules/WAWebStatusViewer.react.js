__d("WAWebStatusViewer.react", [
	"fbt",
	"Promise",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseDelays",
	"WATimeUtils",
	"WAWebAck",
	"WAWebBackendErrors",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebFbtCommon",
	"WAWebFontLoader",
	"WAWebFrontendContactGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaTypes",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebSpinner.react",
	"WAWebStatusChainFromMyBoundary",
	"WAWebStatusChainFromMyCounter",
	"WAWebStatusChainingPill.react",
	"WAWebStatusPlayer.react",
	"WAWebStatusRowViewWamEvent",
	"WAWebStatusSnapshot",
	"WAWebStatusViewExitMethod",
	"WAWebStatusViewerFollowNewsletterButton.react",
	"WAWebTabOrder",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumStatusRowEntryMethod",
	"WAWebWamEnumStatusRowSection",
	"WAWebWamEnumStatusViewEntryMethod",
	"WAWebWamEnumStatusViewExitMethod",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcClose.react",
	"WDSTooltip.react",
	"cr:23046",
	"react",
	"useLazyRef",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m, p, _, f, g, h, y, C = y || (y = o("react")), b = y, v = b.useCallback, S = b.useEffect, R = b.useId, L = b.useMemo, E = b.useRef, k = b.useState, I = function(t) {
		o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["InvalidStatusIterator: ", ""])), t).tags("status-iterator", "non-sad").sendLogs("InvalidStatusIterator", { sampling: .01 });
	};
	function T(e, t) {
		t != null && (e == null || e.recordStatusViewExitMethod(t));
	}
	function D(e, t, n, r, a) {
		var i = e === o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT && t != null && n != null && o("WAWebStatusChainFromMyBoundary").canChainFromMyStatus(t, n, r, a);
		return i ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.CHAINING_PILL_AUTO_CLOSE : o("WAWebStatusViewExitMethod").getStatusViewExitMethod(e, !0);
	}
	function x(t) {
		var a, i, l, u = t.ref, y = babelHelpers.objectWithoutPropertiesLoose(t, e), b = y.initialStatus, x = y.initialStatusMsg, $ = y.onMsgNotFound, P = y.quotedMsgKey, N = r("useWAWebUnmountSignal")(), M = k(null), w = M[0], A = M[1], F = (a = w == null ? void 0 : w.iterator) != null ? a : null, O = k(null), B = O[0], W = O[1], q = k(!0), U = q[0], V = q[1], H = k((i = y.rowIdx) != null ? i : 0), G = H[0], z = H[1], j = k(!1), K = j[0], Q = j[1], X = E(null), Y = E(!1), J = r("useLazyRef")(function() {
			return Math.round(Math.random() * 1e9);
		}), Z = E(0), ee = r("useLazyRef")(function() {
			return new Map();
		}), te = r("useLazyRef")(function() {
			return new Map();
		}), ne = r("useLazyRef")(function() {
			return new Map();
		}), re = E(null), oe = E(-1), ae = E(o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.DIRECT_ROW_TAP), ie = function(t) {
			if (!(F && t === F.msgIdx)) {
				var e = X.current;
				if (F && e) {
					var n = re.current, a = t > F.msgIdx ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.FORWARD_TAP : o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.BACKWARD_TAP;
					T(n, a);
					var i = e.statusAt(F, t);
					V(!0), i.then(function(e) {
						N.aborted || A({ iterator: e });
					}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
						I("Invalid iterator while getting next status msg");
					})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").StatusLoadingError, function() {
						o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No more status while preloading next status"])));
					})).finally(function() {
						V(!1);
					});
				}
			}
		};
		S(function() {
			var e = X.current;
			if (F && e && e.hasNext(F)) {
				var t, n = e.getNext(F);
				n.then(function(t) {
					if (!N.aborted) {
						var n = e.statuses[t.statusIdx], a = n.msgs[t.msgIdx];
						if (!a) throw new (o("WAWebStatusSnapshot")).StatusMsgNotFound();
						if (a.type === o("WAWebMsgType").MSG_TYPE.CHAT) o("WAWebFontLoader").FontLoader.loadMessageFont(a.font).catch(r("WAWebNoop"));
						else {
							var i = a.mediaData;
							i && i.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED && a.downloadMedia({
								downloadEvenIfExpensive: !0,
								rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.STATUS_V3,
								isUserInitiated: !1
							});
						}
					}
				}).catch((t = o("WAFilteredCatch")).filteredCatch(o("WAWebStatusSnapshot").StatusMsgNotFound, function() {
					o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error finding next status while preloading next status"])));
				})).catch(t.filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
					I("Invalid iterator while preloading next status");
				})).catch(t.filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(t.filteredCatch(o("WAWebStatusSnapshot").StatusLoadingError, function() {
					o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["No more status while preloading next status"])));
				}));
			}
		}, [F, N.aborted]), o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "status-view" });
		var le = function(t) {
			W(!0), o("WAPromiseDelays").delayMs(200).then(function() {
				N.aborted || y.closeStatusViewer(t);
			});
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_status_viewer", function() {
			le(!0);
		});
		var se = function() {
			if (y.rowSection === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.QUOTED_MESSAGE_IN_CHAT) {
				T(re.current, o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.BACKWARD_TAP), le();
				return;
			}
			ae.current = o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.BACKWARDS_TAP;
			var e = X.current;
			if (F && e && e.hasPrev(F)) {
				var t = re.current;
				T(t, o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.BACKWARD_TAP);
				var n = F.statusIdx, a = e.getPrev(F);
				a.then(function(e) {
					N.aborted || (e.statusIdx === n ? A({ iterator: e }) : (z(function(e) {
						return e - 1;
					}), W(!0), o("WAPromiseDelays").delayMs(200).then(function() {
						N.aborted || (A({ iterator: e }), W(!1));
					})));
				}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
					I("Invalid iterator while getting previous status msg");
				})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").StatusLoadingError, function() {
					o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["No more status while preloading next status"])));
				}));
			}
		}, ue = function(t, n) {
			var e = X.current;
			if (!(!F || !e || Y.current)) {
				var r = re.current;
				T(r, t ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.CHAINING_PILL_TAP : n);
				var a = e.getChainableContactStatuses();
				if (a.length === 0) {
					le();
					return;
				}
				t && o("WAWebStatusChainFromMyCounter").recordStatusChainFromMyInteraction(), Y.current = !0, Q(!0), e.appendStatuses(a), V(!0), e.getFirstUnread(a[0], !0).then(function(e) {
					N.aborted || (z(function(e) {
						return e + 1;
					}), W(!0), o("WAPromiseDelays").delayMs(200).then(function() {
						N.aborted || (A({
							entryMethod: t ? o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.CHAINING_PILL_TAP : void 0,
							iterator: e
						}), W(!1));
					}));
				}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
					I("Invalid iterator while chaining from my status"), le();
				})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, function() {
					le();
				})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").StatusLoadingError, function() {
					o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["No more status while chaining from my status"]))), le();
				})).catch(function() {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Unexpected error while chaining from my status"]))).sendLogs("status-chain-from-my-unexpected"), le();
				}).finally(function() {
					V(!1);
				});
			}
		}, ce = function(t) {
			if (y.rowSection === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.QUOTED_MESSAGE_IN_CHAT) {
				T(re.current, o("WAWebStatusViewExitMethod").getStatusViewExitMethod(t, !0)), le();
				return;
			}
			ae.current = t;
			var e = X.current;
			if (F && e && e.hasNext(F)) {
				var n = re.current;
				t !== o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT && T(n, o("WAWebStatusViewExitMethod").getStatusViewExitMethod(t, !1));
				var a = F.statusIdx, i = e.getNext(F);
				V(!0), i.then(function(e) {
					N.aborted || (e.statusIdx === a ? A({ iterator: e }) : (z(function(e) {
						return e + 1;
					}), W(!0), V(!1), o("WAPromiseDelays").delayMs(200).then(function() {
						N.aborted || (A({ iterator: e }), W(!1));
					})));
				}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
					I("Invalid iterator while getting next status msg"), le();
				})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").StatusLoadingError, function() {
					o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["No more status while preloading next status"])));
				})).finally(function() {
					V(!1);
				});
			} else o("WAWebStatusChainFromMyCounter").hasReachedStatusChainFromMyInteractionLimit() && o("WAWebStatusChainFromMyBoundary").canChainFromMyStatus(e, F, y.rowSection, Y.current) ? ue(!1, o("WAWebStatusViewExitMethod").getStatusViewExitMethod(t, !0)) : (T(re.current, D(t, e, F, y.rowSection, Y.current)), le());
		}, de = function(t, n) {
			var e = X.current;
			if (n) {
				if (n.ack !== o("WAWebAck").ACK.READ) {
					var r = o("WATimeUtils").unixTime(), a = n.id.participant;
					a && a.isPSA() && n.set("statusPSAReadTimestamp", r);
					var i = !0, l = o("WAWebContactCollection").ContactCollection.get(n.author);
					(l == null || !o("WAWebContactGetters").getIsMe(l) && !o("WAWebFrontendContactGetters").getIsMyContact(l)) && (i = !1), i = i || o("WAWebMsgGetters").getIsNewsletterStatus(n) && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled(), t.sendReadStatus(n, r, { sendReceipt: i });
				}
				var s = e == null ? void 0 : e.statuses.find(function(e) {
					return e.status === t;
				});
				s && s.readMsgKeys.add(n.id.toString());
			}
		};
		S(function() {
			var e = b;
			if (P) {
				var a = P, i = e.msgs.getModelsArray().findIndex(function(e) {
					return e.id.toString() === a.toString();
				});
				if (i !== -1) {
					X.current = new (o("WAWebStatusSnapshot")).StatusSnapshot(e, y.continuousPlay, a);
					var l = X.current.getFirstUnread(e, !0, a);
					l.then(function(e) {
						N.aborted || (A({ iterator: e }), V(!1));
					}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
						I("Invalid iterator while loading first unread msg"), o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) })), y.closeStatusViewer();
					}));
				} else V(!0), e.loadMore(e.totalCount).then(function() {
					V(!1);
					var t = e.msgs.getModelsArray().findIndex(function(e) {
						return e.id.toString() === a.toString();
					}) !== -1;
					if (t) {
						X.current = new (o("WAWebStatusSnapshot")).StatusSnapshot(e, y.continuousPlay, a);
						var n = X.current.getFirstUnread(e, !0, a);
						n.then(function(e) {
							N.aborted || (A({ iterator: e }), V(!1));
						}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
							I("Invalid iterator while loading first unread msg"), o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
								/*BTDS*/
								""
							) })), y.closeStatusViewer();
						}));
					} else $ == null || $(), o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), y.closeStatusViewer();
				}).catch(function() {
					o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), le();
				}).finally(function() {
					V(!1);
				});
			} else {
				var t = x;
				X.current = new (o("WAWebStatusSnapshot")).StatusSnapshot(e, y.continuousPlay, void 0, y.prioritizeInitialStatus);
				var n = X.current.getFirstUnread(e, !0, t == null ? void 0 : t.id);
				n.then(function(e) {
					N.aborted || (A({ iterator: e }), V(!1));
				}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebStatusSnapshot").InvalidStatusIterator, function() {
					I("Invalid iterator while loading first unread msg"), o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), y.closeStatusViewer();
				}));
			}
		}, []), r("useWAWebOnUnmount")(function() {
			(h || (h = n("Promise"))).resolve().then(function() {
				te.current.forEach(function(e) {
					e.commit();
				}), ee.current.forEach(function(e) {
					e.commit();
				});
			});
		});
		var me = function() {
			var e = y.rowIdx, t = y.rowSection, n = F == null ? void 0 : F.statusIdx, r = t === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.RECENT_STORIES ? n : e;
			return r != null ? r : 0;
		}, pe = function(t) {
			var e = y.rowSection, n = y.sessionId, r = F == null ? void 0 : F.statusIdx, a = me();
			if (r != null && oe.current !== r && e != null) {
				var i, l = (i = ee.current.get(r)) != null ? i : new (o("WAWebStatusRowViewWamEvent")).StatusRowViewWamEvent({
					statusRowEntryMethod: ae.current,
					statusRowIndex: a,
					statusRowSection: e,
					statusRowUnreadItemCount: t.unreadCount,
					statusRowViewCount: 0,
					statusSessionId: n,
					statusViewerSessionId: J.current
				});
				l.statusRowViewCount += 1, ee.current.set(r, l), oe.current = r;
			}
		}, _e, fe, ge, he, ye, Ce, be = R(), ve = R(), Se = R(), Re = R();
		F && X.current && (_e = X.current, fe = _e.statuses[F.statusIdx], ge = fe.status, pe(ge), he = fe.msgs[F.msgIdx], _e.hasPrev(F) === !0 && (ye = C.jsx("div", {
			className: "x10l6tqk x13vifvy x1ey2m1c xbpklzw xr1yuqi x14z9mp x4ii5y1 x1lziwak x78zum5 x6s0dn4 x18hw5r0",
			children: C.jsx(r("WDSTooltip.react"), {
				id: be,
				label: s._(
					/*BTDS*/
					""
				),
				children: C.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronLeft.react"),
					variant: "tonal",
					type: "media",
					size: "medium",
					directional: !0,
					onPress: se,
					testid: "status-prev",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_MIDDLE_SECTION,
					"aria-describedby": be,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			})
		})), _e.hasNext(F) === !0 && (Ce = C.jsx("div", {
			className: "x10l6tqk x13vifvy x1ey2m1c xbpklzw xr1yuqi x14z9mp x4ii5y1 x1lziwak x78zum5 x6s0dn4 x1wmwbkl",
			children: C.jsx(r("WDSTooltip.react"), {
				id: ve,
				label: s._(
					/*BTDS*/
					""
				),
				children: C.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronRight.react"),
					variant: "tonal",
					type: "media",
					size: "medium",
					directional: !0,
					onPress: function() {
						ce(o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.FOWARDS_TAP), de(ge, he);
					},
					testid: "status-next",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_MIDDLE_SECTION,
					"aria-describedby": ve,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			})
		})));
		var Le = _e != null && F != null && !_e.hasNext(F) && !o("WAWebStatusChainFromMyCounter").hasReachedStatusChainFromMyInteractionLimit() && o("WAWebStatusChainFromMyBoundary").canChainFromMyStatus(_e, F, y.rowSection, K), Ee = L(function() {
			return Le && _e != null ? _e.getChainableContactStatuses().map(function(e) {
				return e.contact.id;
			}) : [];
		}, [Le, _e]), ke = he != null && he.type !== o("WAWebMsgType").MSG_TYPE.CHAT && typeof he.caption == "string" && he.caption.length > 0, Ie = ge != null && ge.id.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled(), Te = v(function(e) {
			e != null && (re.current = e);
		}, []), De = {
			left: se,
			right: function() {
				ce(o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.FOWARDS_TAP);
			},
			space: function(t) {
				var e, n = (e = re.current) == null ? void 0 : e.getWrapperElement();
				if (t.target instanceof HTMLElement && t.target === n) {
					var r;
					(r = re.current) == null || r.handlePlayPauseToggle();
				}
			}
		}, xe;
		!B && !U && he && F && fe && ge && (xe = C.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn",
			children: C.jsx(r("WAWebStatusPlayer.react"), {
				ref: Te,
				status: ge,
				msg: he,
				mediaData: he.mediaData,
				msgIdx: F.msgIdx,
				totalMsgs: fe.totalCount,
				markRead: de,
				closeStatusViewer: le,
				onClickProgressBar: ie,
				onNext: ce,
				onPrev: se,
				sessionId: y.sessionId,
				rowIdx: me(),
				statusPogIndex: G,
				rowSection: y.rowSection,
				viewerSessionId: J.current,
				statusItemViewMap: te.current,
				statusItemLastImpressionTimestampMap: ne.current,
				statusIsUnread: !fe.readMsgKeys.has(he.id.toString()),
				statusRowEntryMethod: ae.current,
				statusViewEntryMethod: w == null ? void 0 : w.entryMethod,
				viewSequenceIndexRef: Z
			}, he.id.toString())
		}, he.id.toString()));
		var $e = (l = n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) != null ? l : !1, Pe = r("WAWebFbtCommon")("Close"), Ne = C.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1eu8d0j xo2ifbc x164b614 x78zum5 x1q0g3np x6s0dn4 x1qvou4u x1s70e7g" },
			1: { className: "x10l6tqk x1eu8d0j xo2ifbc x164b614 x78zum5 x1q0g3np x6s0dn4 x1qvou4u x1s70e7g x9u28bd" }
		}[!!$e << 0], { children: [Ie && ge != null ? C.jsx(r("WAWebStatusViewerFollowNewsletterButton.react"), { statusId: ge.id }) : null, C.jsx(r("WDSTooltip.react"), {
			id: Se,
			label: Pe,
			children: C.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcClose.react"),
				variant: "borderless",
				type: "media",
				size: "medium",
				onPress: function() {
					return y.closeStatusViewer(!0);
				},
				testid: "status-close",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
				"aria-describedby": Se,
				"aria-label": Pe
			})
		})] })), Me = s._(
			/*BTDS*/
			""
		), we = C.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1eu8d0j x138ruz1 x164b614" },
			1: { className: "x10l6tqk x1eu8d0j x138ruz1 x164b614 x9u28bd" }
		}[!!$e << 0], { children: C.jsx(r("WDSTooltip.react"), {
			id: Re,
			label: Me,
			children: C.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				variant: "borderless",
				type: "media",
				size: "medium",
				directional: !0,
				onPress: function() {
					T(re.current, o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.BACK_ARROW_TAP), y.closeStatusViewer();
				},
				testid: "status-back",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
				"aria-describedby": Re,
				"aria-label": Me
			})
		}) })), Ae;
		return U && (Ae = C.jsx("div", {
			className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1pju0fl x10wjd1d xr1yuqi x11t971q x4ii5y1 xvc5jky",
			children: C.jsx("button", { children: C.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4,
				color: "white"
			}) })
		})), C.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: u,
			handlers: De,
			children: C.jsxs("div", {
				className: "x10l6tqk x13vifvy x1o0tod xjhb59c xh8yej3 x5yr21d x1280gxy",
				"data-animate-status-viewer": !0,
				children: [
					we,
					Ne,
					ye,
					Ce,
					Le && _e != null && C.jsx(r("WAWebStatusChainingPill.react"), {
						contactWids: Ee,
						hasCaption: ke,
						onTap: function() {
							return ue(!0);
						}
					}),
					Ae,
					C.jsx(r("WAWebVelocityTransitionGroup"), {
						transitionName: "status-player",
						appear: !0,
						children: xe
					})
				]
			})
		});
	}
	x.displayName = x.name + " [from " + i.id + "]", l.default = x;
}), 226);
