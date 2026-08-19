__d("WAWebStatusSubtitle.react", [
	"fbt",
	"invariant",
	"WAWebClock",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebMentionsRefreshedIcon.react",
	"WAWebMessageAIContentLabel.react",
	"WAWebMsgGetters",
	"WAWebMusicGatingUtils",
	"WAWebMusicStatusAttribution.react",
	"WAWebNewsletterAiContentInfoModalOpener",
	"WAWebNewsletterAiContentInfoModalTypes",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebProtobufsStatusAttributions.pb",
	"WAWebStatusCloseFriendsDialog.react",
	"WAWebStatusExternalShareUtils",
	"WAWebStatusGatingUtils",
	"WAWebStatusNavigateToNewsletterUtils",
	"WAWebStatusSubtitleAttribution.react",
	"WAWebStatusViewerActionWamEvent",
	"WAWebStopEvent",
	"WAWebWamEnumStatusCategory",
	"WAWebWamEnumStatusViewActionType",
	"WAWebWamEnumTopBarAttributionType",
	"WDSIconIcRepeat.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIconWdsIcChannels.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = { subtitleRow: {
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		minWidth: "xeuugli",
		$$css: !0
	} }, h = 5e3, y = 3;
	function C(e) {
		return e === "music" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.MUSIC : e === "mention" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.MENTION : e === "groupStatus" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.GROUP_STATUS : e === "closeFriends" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.CLOSE_SHARING : e === "reshare" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.RESHARED_STATUS : e === "externalShare" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.CROSSPOSTING : e === "newsletterStatus" || e === "viewChannel" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.CHANNEL_STATUS : e === "aiContent" ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.AI_CREATED : e === "paidPartnership" ? u(!1, "paidPartnership attribution is not tappable") : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function b(e, t) {
		return e ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS : t ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
	}
	function v(e) {
		var t = e.attributionType, n = e.isGroupStatus, r = e.isNewsletterStatus;
		new (o("WAWebStatusViewerActionWamEvent")).StatusViewerActionWamEvent({
			viewerActionType: o("WAWebWamEnumStatusViewActionType").STATUS_VIEW_ACTION_TYPE.ATTRIBUTION_TAPPED,
			attributionType: C(t),
			statusCategory: b(n, r)
		}).commit();
	}
	function S(e, t) {
		var n = o("react-compiler-runtime").c(4), r = f(0), a = r[0], i = r[1], l, s;
		return n[0] !== e || n[1] !== t ? (l = function() {
			if (!(e <= 1 || !t)) {
				var n = window.setInterval(function() {
					i(R);
				}, h);
				return (function() {
					window.clearInterval(n);
				});
			}
		}, s = [e, t], n[0] = e, n[1] = t, n[2] = l, n[3] = s) : (l = n[2], s = n[3]), p(l, s), e === 0 ? 0 : a % e;
	}
	function R(e) {
		return e + 1;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(10), n = e.durationInSeconds, r = e.playing, a = f(n), i = a[0], l = a[1], s = _(null), u = _(0), c = _(n), m, g;
		t[0] !== n ? (m = function() {
			c.current = n;
		}, g = [n], t[0] = n, t[1] = m, t[2] = g) : (m = t[1], g = t[2]), p(m, g);
		var h, y;
		t[3] !== r ? (h = function() {
			if (!r) {
				var e = s.current;
				e != null && (u.current = u.current + (window.performance.now() - e) / 1e3, s.current = null);
				return;
			}
			s.current = window.performance.now();
			var t, n = function() {
				var e = s.current;
				if (e != null) {
					var r = u.current + (window.performance.now() - e) / 1e3;
					l(Math.max(0, c.current - r));
				}
				t = window.requestAnimationFrame(n);
			};
			return t = window.requestAnimationFrame(n), (function() {
				window.cancelAnimationFrame(t);
			});
		}, y = [r], t[3] = r, t[4] = h, t[5] = y) : (h = t[4], y = t[5]), p(h, y);
		var C;
		t[6] !== i ? (C = o("WAWebStatusExternalShareUtils").formatDuration(Math.round(i)), t[6] = i, t[7] = C) : C = t[7];
		var b;
		return t[8] !== C ? (b = d.jsx("span", { children: C }), t[8] = C, t[9] = b) : b = t[9], b;
	}
	function E(t) {
		var n, a = o("react-compiler-runtime").c(72), i = t.msg, l = t.onClickProfile, u = t.onDialogDismiss, c = t.onDialogOpen, m = t.onMentionsClick, p = t.playing, _ = t.status, f = t.statusMediaController, h = t.xstyle, C = _.contact, b;
		if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
			var R;
			b = [
				(R = o("WAWebMsgGetters")).getFirstMusicAnnotationEmbeddedContent,
				R.getStatusMentioned,
				R.getIsGroupStatus,
				R.getIsNewsletterStatus,
				R.getIsSentByMe,
				R.getHasPaidPartnershipLabel,
				R.getHasReshareAttribution,
				R.getIsNewsletterStatusReshare
			], a[0] = b;
		} else b = a[0];
		var E = o("useWAWebMsgValues").useMsgValues(i.id, b), k = E[0], I = E[1], T = E[2], D = E[3], x = E[4], $ = E[5], P = E[6], N = E[7], M = o("WAWebContactCollection").ContactCollection.get(i.author), w;
		a[1] !== i ? (w = i.safe(), a[1] = i, a[2] = w) : w = a[2];
		var A = w, F = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(A), O = o("WAWebStatusExternalShareUtils").getExternalShareInfo(i), B = [];
		if (F) {
			var W;
			if (a[3] !== i.id.remote) {
				var q;
				W = (q = r("WAWebNewsletterMetadataCollection").get(i.id.remote)) == null ? void 0 : q.iAmAdminOrOwner(), a[3] = i.id.remote, a[4] = W;
			} else W = a[4];
			var U = W === !0, V;
			a[5] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
				/*BTDS*/
				""
			), a[5] = V) : V = a[5];
			var H;
			a[6] !== U || a[7] !== u || a[8] !== c ? (H = function() {
				c == null || c(), o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(U ? o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_INFO : o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.VIEWER_INFO, { onClose: function() {
					return u == null ? void 0 : u();
				} });
			}, a[6] = U, a[7] = u, a[8] = c, a[9] = H) : H = a[9];
			var G;
			a[10] === Symbol.for("react.memo_cache_sentinel") ? (G = d.jsx(r("WDSIconWdsIcAiContent.react"), {
				width: 14,
				height: 14
			}), a[10] = G) : G = a[10];
			var z;
			a[11] !== H ? (z = {
				type: "aiContent",
				content: V,
				onClick: H,
				icon: G
			}, a[11] = H, a[12] = z) : z = a[12], B.push(z);
		}
		if ($ === !0 && o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
			var j;
			a[13] === Symbol.for("react.memo_cache_sentinel") ? (j = {
				type: "paidPartnership",
				content: s._(
					/*BTDS*/
					""
				),
				onClick: null,
				icon: null
			}, a[13] = j) : j = a[13], B.push(j);
		}
		if (k != null) {
			var K;
			a[14] !== D ? (K = D && !o("WAWebMusicGatingUtils").isNewsletterStatusMusicConsumptionEnabled(), a[14] = D, a[15] = K) : K = a[15];
			var Q = K, X = !Q, Y;
			a[16] !== i || a[17] !== k || a[18] !== p || a[19] !== X ? (Y = d.jsx(o("WAWebMusicStatusAttribution.react").MusicAttribution, {
				musicMetadata: k,
				msg: i,
				playing: p,
				tappable: X
			}), a[16] = i, a[17] = k, a[18] = p, a[19] = X, a[20] = Y) : Y = a[20];
			var J;
			a[21] !== Q || a[22] !== i || a[23] !== k || a[24] !== f ? (J = Q ? null : function() {
				return o("WAWebMusicStatusAttribution.react").showMusicStatusAttributionModal({
					msg: i,
					musicMetadata: k,
					statusMediaController: f
				});
			}, a[21] = Q, a[22] = i, a[23] = k, a[24] = f, a[25] = J) : J = a[25];
			var Z;
			a[26] !== Y || a[27] !== J ? (Z = {
				type: "music",
				content: Y,
				onClick: J,
				icon: null,
				showChevron: !1
			}, a[26] = Y, a[27] = J, a[28] = Z) : Z = a[28], B.push(Z);
		}
		if (I === !0 && o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled()) {
			var ee;
			a[29] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
				/*BTDS*/
				""
			), a[29] = ee) : ee = a[29];
			var te;
			a[30] === Symbol.for("react.memo_cache_sentinel") ? (te = d.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, {
				width: 14,
				height: 14
			}), a[30] = te) : te = a[30];
			var ne;
			a[31] !== m ? (ne = {
				type: "mention",
				content: ee,
				onClick: m,
				icon: te
			}, a[31] = m, a[32] = ne) : ne = a[32], B.push(ne);
		}
		if (T && M != null) {
			var re = o("WAWebContactGetters").getIsMe(M), oe = re ? "You" : o("WAWebFrontendContactGetters").getFormattedName(M);
			B.push({
				type: "groupStatus",
				content: s._(
					/*BTDS*/
					"",
					[s._param("Author Name", oe)]
				),
				onClick: function() {
					l(M.id);
				},
				icon: null,
				showChevron: !re
			});
		}
		var ae = i.statusAudienceMetadata, ie = ae != null && o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled();
		if (ie) {
			var le, se;
			if (a[33] !== (ae == null ? void 0 : ae.listName)) {
				var ue;
				se = (ue = ae == null ? void 0 : ae.listName) != null ? ue : s._(
					/*BTDS*/
					""
				), a[33] = ae == null ? void 0 : ae.listName, a[34] = se;
			} else se = a[34];
			var ce = se, de = (le = ae == null ? void 0 : ae.listEmoji) != null ? le : "⭐", me;
			a[35] !== ce ? (me = s._(
				/*BTDS*/
				"",
				[s._param("List Name", ce)]
			), a[35] = ce, a[36] = me) : me = a[36];
			var pe;
			a[37] !== x || a[38] !== ce || a[39] !== de || a[40] !== u || a[41] !== c || a[42] !== C ? (pe = function() {
				c == null || c(), o("WAWebStatusCloseFriendsDialog.react").showCloseFriendsDialog({
					contactId: C == null ? void 0 : C.id,
					contactName: C != null ? o("WAWebFrontendContactGetters").getFormattedName(C) : "",
					emoji: de,
					isOwnStatus: x,
					listName: ce,
					onDismiss: function() {
						u == null || u();
					}
				});
			}, a[37] = x, a[38] = ce, a[39] = de, a[40] = u, a[41] = c, a[42] = C, a[43] = pe) : pe = a[43];
			var _e;
			a[44] !== me || a[45] !== pe ? (_e = {
				type: "closeFriends",
				content: me,
				onClick: pe,
				icon: null
			}, a[44] = me, a[45] = pe, a[46] = _e) : _e = a[46], B.push(_e);
		}
		var fe = (n = i.forwardedNewsletterMessageInfo) == null ? void 0 : n.newsletterId, ge = P && (o("WAWebStatusGatingUtils").isStatusReshareAttributionEnabled() || N && o("WAWebNewsletterGatingUtils").isNewsletterStatusReshareEnabled());
		if (ge) {
			var he;
			a[47] === Symbol.for("react.memo_cache_sentinel") ? (he = s._(
				/*BTDS*/
				""
			), a[47] = he) : he = a[47];
			var ye;
			a[48] === Symbol.for("react.memo_cache_sentinel") ? (ye = {
				type: "reshare",
				content: he,
				onClick: null,
				icon: d.jsx(r("WDSIconIcRepeat.react"), {
					width: 14,
					height: 14
				})
			}, a[48] = ye) : ye = a[48], B.push(ye);
		}
		if (fe != null && (o("WAWebNewsletterGatingUtils").isNewsletterLinksOnStatusConsumptionEnabled() || N)) {
			var Ce;
			a[49] === Symbol.for("react.memo_cache_sentinel") ? (Ce = s._(
				/*BTDS*/
				""
			), a[49] = Ce) : Ce = a[49];
			var be;
			a[50] !== fe ? (be = function() {
				return o("WAWebStatusNavigateToNewsletterUtils").navigateToNewsletter(fe);
			}, a[50] = fe, a[51] = be) : be = a[51];
			var ve;
			a[52] === Symbol.for("react.memo_cache_sentinel") ? (ve = d.jsx(r("WDSIconWdsIcChannels.react"), {
				width: 14,
				height: 14
			}), a[52] = ve) : ve = a[52];
			var Se;
			a[53] !== be ? (Se = {
				type: "viewChannel",
				content: Ce,
				onClick: be,
				icon: ve
			}, a[53] = be, a[54] = Se) : Se = a[54], B.push(Se);
		}
		if (O != null) {
			var Re = O.durationInSeconds;
			B.push({
				type: "externalShare",
				content: d.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "start",
					children: [d.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						grow: 0,
						shrink: 0,
						children: O.displayText
					}), O.source === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$ExternalShare$Source.INSTAGRAM && Re != null && Re !== 0 && d.jsxs(o("WAWebFlex.react").FlexRow, { children: [d.jsx(o("WAWebFlex.react").FlexItem, {
						className: "x1wbi8v6 x7g7pl8",
						children: "•"
					}), d.jsx(L, {
						durationInSeconds: Re,
						playing: p
					})] })]
				}),
				onClick: function() {
					o("WAWebExternalLink.react").openExternalLink(O.url);
				},
				icon: o("WAWebStatusExternalShareUtils").getExternalShareIcon(O.source)
			});
		}
		if (D && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
			var Le;
			a[55] === Symbol.for("react.memo_cache_sentinel") ? (Le = s._(
				/*BTDS*/
				""
			), a[55] = Le) : Le = a[55];
			var Ee;
			a[56] === Symbol.for("react.memo_cache_sentinel") ? (Ee = {
				type: "newsletterStatus",
				content: Le,
				onClick: null,
				icon: d.jsx(r("WDSIconWdsIcChannels.react"), {
					width: 14,
					height: 14
				})
			}, a[56] = Ee) : Ee = a[56], B.push(Ee);
		}
		var ke = B.slice(0, y), Ie = S(ke.length, p);
		if (C != null && o("WAWebContactGetters").getIsPSA(C)) return null;
		var Te = ke.length > 0 ? ke[Ie] : null, De = o("WAWebFlex.react").FlexRow, xe = "center", $e = "start", Pe = (e || (e = r("stylex")))([ie && g.subtitleRow, h]), Ne;
		a[57] === Symbol.for("react.memo_cache_sentinel") ? (Ne = { className: "x78zum5 x6s0dn4" }, a[57] = Ne) : Ne = a[57];
		var Me;
		a[58] !== i.t ? (Me = o("WAWebClock").Clock.relativeDateAndTimeStr(i.t), a[58] = i.t, a[59] = Me) : Me = a[59];
		var we;
		a[60] !== Me ? (we = d.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			grow: 0,
			shrink: 0,
			children: d.jsx("div", babelHelpers.extends({}, Ne, { children: d.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "persistentAlwaysWhite",
				maxLines: 1,
				children: Me
			}) }))
		}), a[60] = Me, a[61] = we) : we = a[61];
		var Ae;
		if (a[62] !== Te || a[63] !== ie || a[64] !== T || a[65] !== D) {
			var Fe;
			Ae = Te != null && d.jsx("span", {
				className: "x17t9dm2 xeuugli",
				children: d.jsx(r("WAWebStatusSubtitleAttribution.react"), {
					isCloseFriends: ie,
					onClick: Te.onClick != null ? function(e) {
						o("WAWebStopEvent").stopPropagation(e), v({
							attributionType: Te.type,
							isGroupStatus: T,
							isNewsletterStatus: D
						}), Te.onClick == null || Te.onClick(e);
					} : null,
					icon: Te.icon,
					enableChevronIcon: (Fe = Te.showChevron) != null ? Fe : Te.onClick != null,
					children: Te.content
				})
			}), a[62] = Te, a[63] = ie, a[64] = T, a[65] = D, a[66] = Ae;
		} else Ae = a[66];
		var Oe;
		return a[67] !== De || a[68] !== Pe || a[69] !== we || a[70] !== Ae ? (Oe = d.jsxs(De, {
			align: xe,
			justify: $e,
			className: Pe,
			children: [we, Ae]
		}), a[67] = De, a[68] = Pe, a[69] = we, a[70] = Ae, a[71] = Oe) : Oe = a[71], Oe;
	}
	l.default = E;
}), 226);
