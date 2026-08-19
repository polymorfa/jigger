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
		var n = f(0), r = n[0], o = n[1];
		return p(function() {
			if (!(e <= 1 || !t)) {
				var n = window.setInterval(function() {
					o(function(e) {
						return e + 1;
					});
				}, h);
				return function() {
					window.clearInterval(n);
				};
			}
		}, [e, t]), e === 0 ? 0 : r % e;
	}
	function R(e) {
		var t = e.durationInSeconds, n = e.playing, r = f(t), a = r[0], i = r[1], l = _(null), s = _(0), u = _(t);
		return p(function() {
			u.current = t;
		}, [t]), p(function() {
			if (!n) {
				var e = l.current;
				e != null && (s.current += (window.performance.now() - e) / 1e3, l.current = null);
				return;
			}
			l.current = window.performance.now();
			var t, r = function() {
				var e = l.current;
				if (e != null) {
					var n = s.current + (window.performance.now() - e) / 1e3;
					i(Math.max(0, u.current - n));
				}
				t = window.requestAnimationFrame(r);
			};
			return t = window.requestAnimationFrame(r), function() {
				window.cancelAnimationFrame(t);
			};
		}, [n]), d.jsx("span", { children: o("WAWebStatusExternalShareUtils").formatDuration(Math.round(a)) });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n, a, i, l = t.msg, u = t.onClickProfile, c = t.onDialogDismiss, m = t.onDialogOpen, p = t.onMentionsClick, _ = t.playing, f = t.status, h = t.statusMediaController, C = t.xstyle, b = f.contact, L = o("useWAWebMsgValues").useMsgValues(l.id, [
			(i = o("WAWebMsgGetters")).getFirstMusicAnnotationEmbeddedContent,
			i.getStatusMentioned,
			i.getIsGroupStatus,
			i.getIsNewsletterStatus,
			i.getIsSentByMe,
			i.getHasPaidPartnershipLabel,
			i.getHasReshareAttribution,
			i.getIsNewsletterStatusReshare
		]), E = L[0], k = L[1], I = L[2], T = L[3], D = L[4], x = L[5], $ = L[6], P = L[7], N = o("WAWebContactCollection").ContactCollection.get(l.author), M = l.safe(), w = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(M), A = o("WAWebStatusExternalShareUtils").getExternalShareInfo(l), F = [];
		if (w) {
			var O, B = ((O = r("WAWebNewsletterMetadataCollection").get(l.id.remote)) == null ? void 0 : O.iAmAdminOrOwner()) === !0;
			F.push({
				type: "aiContent",
				content: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					m == null || m(), o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(B ? o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_INFO : o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.VIEWER_INFO, { onClose: function() {
						return c == null ? void 0 : c();
					} });
				},
				icon: d.jsx(r("WDSIconWdsIcAiContent.react"), {
					width: 14,
					height: 14
				})
			});
		}
		if (x === !0 && o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() && F.push({
			type: "paidPartnership",
			content: s._(
				/*BTDS*/
				""
			),
			onClick: null,
			icon: null
		}), E != null) {
			var W = T && !o("WAWebMusicGatingUtils").isNewsletterStatusMusicConsumptionEnabled();
			F.push({
				type: "music",
				content: d.jsx(o("WAWebMusicStatusAttribution.react").MusicAttribution, {
					musicMetadata: E,
					msg: l,
					playing: _,
					tappable: !W
				}),
				onClick: W ? null : function() {
					return o("WAWebMusicStatusAttribution.react").showMusicStatusAttributionModal({
						msg: l,
						musicMetadata: E,
						statusMediaController: h
					});
				},
				icon: null,
				showChevron: !1
			});
		}
		if (k === !0 && o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() && F.push({
			type: "mention",
			content: s._(
				/*BTDS*/
				""
			),
			onClick: p,
			icon: d.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, {
				width: 14,
				height: 14
			})
		}), I && N != null) {
			var q = o("WAWebContactGetters").getIsMe(N), U = q ? "You" : o("WAWebFrontendContactGetters").getFormattedName(N);
			F.push({
				type: "groupStatus",
				content: s._(
					/*BTDS*/
					"",
					[s._param("Author Name", U)]
				),
				onClick: function() {
					u(N.id);
				},
				icon: null,
				showChevron: !q
			});
		}
		var V = l.statusAudienceMetadata, H = V != null && o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled();
		if (H) {
			var G, z, j = (G = V == null ? void 0 : V.listName) != null ? G : s._(
				/*BTDS*/
				""
			), K = (z = V == null ? void 0 : V.listEmoji) != null ? z : "⭐";
			F.push({
				type: "closeFriends",
				content: s._(
					/*BTDS*/
					"",
					[s._param("List Name", j)]
				),
				onClick: function() {
					m == null || m(), o("WAWebStatusCloseFriendsDialog.react").showCloseFriendsDialog({
						contactId: b == null ? void 0 : b.id,
						contactName: b != null ? o("WAWebFrontendContactGetters").getFormattedName(b) : "",
						emoji: K,
						isOwnStatus: D,
						listName: j,
						onDismiss: function() {
							c == null || c();
						}
					});
				},
				icon: null
			});
		}
		var Q = (n = l.forwardedNewsletterMessageInfo) == null ? void 0 : n.newsletterId, X = $ && (o("WAWebStatusGatingUtils").isStatusReshareAttributionEnabled() || P && o("WAWebNewsletterGatingUtils").isNewsletterStatusReshareEnabled());
		if (X && F.push({
			type: "reshare",
			content: s._(
				/*BTDS*/
				""
			),
			onClick: null,
			icon: d.jsx(r("WDSIconIcRepeat.react"), {
				width: 14,
				height: 14
			})
		}), Q != null && (o("WAWebNewsletterGatingUtils").isNewsletterLinksOnStatusConsumptionEnabled() || P) && F.push({
			type: "viewChannel",
			content: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				return o("WAWebStatusNavigateToNewsletterUtils").navigateToNewsletter(Q);
			},
			icon: d.jsx(r("WDSIconWdsIcChannels.react"), {
				width: 14,
				height: 14
			})
		}), A != null) {
			var Y = A.durationInSeconds;
			F.push({
				type: "externalShare",
				content: d.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "start",
					children: [d.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						grow: 0,
						shrink: 0,
						children: A.displayText
					}), A.source === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$ExternalShare$Source.INSTAGRAM && Y != null && Y !== 0 && d.jsxs(o("WAWebFlex.react").FlexRow, { children: [d.jsx(o("WAWebFlex.react").FlexItem, {
						className: "x1wbi8v6 x7g7pl8",
						children: "•"
					}), d.jsx(R, {
						durationInSeconds: Y,
						playing: _
					})] })]
				}),
				onClick: function() {
					o("WAWebExternalLink.react").openExternalLink(A.url);
				},
				icon: o("WAWebStatusExternalShareUtils").getExternalShareIcon(A.source)
			});
		}
		T && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled() && F.push({
			type: "newsletterStatus",
			content: s._(
				/*BTDS*/
				""
			),
			onClick: null,
			icon: d.jsx(r("WDSIconWdsIcChannels.react"), {
				width: 14,
				height: 14
			})
		});
		var J = F.slice(0, y), Z = S(J.length, _);
		if (b != null && o("WAWebContactGetters").getIsPSA(b)) return null;
		var ee = J.length > 0 ? J[Z] : null;
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			className: (e || (e = r("stylex")))([H && g.subtitleRow, C]),
			children: [d.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				grow: 0,
				shrink: 0,
				children: d.jsx("div", {
					className: "x78zum5 x6s0dn4",
					children: d.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "persistentAlwaysWhite",
						maxLines: 1,
						children: o("WAWebClock").Clock.relativeDateAndTimeStr(l.t)
					})
				})
			}), ee != null && d.jsx("span", {
				className: "x17t9dm2 xeuugli",
				children: d.jsx(r("WAWebStatusSubtitleAttribution.react"), {
					isCloseFriends: H,
					onClick: ee.onClick != null ? function(e) {
						o("WAWebStopEvent").stopPropagation(e), v({
							attributionType: ee.type,
							isGroupStatus: I,
							isNewsletterStatus: T
						}), ee.onClick == null || ee.onClick(e);
					} : null,
					icon: ee.icon,
					enableChevronIcon: (a = ee.showChevron) != null ? a : ee.onClick != null,
					children: ee.content
				})
			})]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);
