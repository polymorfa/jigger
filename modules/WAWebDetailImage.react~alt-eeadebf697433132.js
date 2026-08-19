__d("WAWebDetailImage.react", [
	"fbt",
	"$InternalEnum",
	"WAShiftTimer",
	"WAWebAvatarSpinner.react",
	"WAWebBotGroupGatingUtils",
	"WAWebCTWAGatingUtils",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatProfilePictureGatingUtils",
	"WAWebClassnames",
	"WAWebCommonCTWAConsumerTransparency",
	"WAWebCommunityGeneralChatImage.react",
	"WAWebContactCollection",
	"WAWebDefaultCommunityRefreshedIcon.react",
	"WAWebDefaultContactRefreshedIcon.react",
	"WAWebDefaultGroupRefreshedIcon.react",
	"WAWebDefaultNewsletterIcon.react",
	"WAWebDefaultUserColorIcon.react",
	"WAWebDefaultUserSquareIcon.react",
	"WAWebEnvironment",
	"WAWebEphemeralityFrontendUtils",
	"WAWebFMXGatingUtils",
	"WAWebGroupType",
	"WAWebHasAcceptedBizBotTos",
	"WAWebIdleComponent.react",
	"WAWebImg.react",
	"WAWebInitialsFromNameUtils",
	"WAWebInitialsProfilePicture.react",
	"WAWebKeyboardIsKeyActivation",
	"WAWebLidMigrationUtils",
	"WAWebMetaAIIcon.react",
	"WAWebMiscGatingUtils",
	"WAWebMmsClientIsErrorRetryable",
	"WAWebPREGatingUtils",
	"WAWebProfilePicThumbCollection",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebServerErrors",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebSquircleStroke.react",
	"WAWebStateUtils",
	"WAWebThemeContext",
	"WAWebUnjoinedSubgroupMetadataCollection",
	"WAWebUserPrefsMeUser",
	"WAWebVideoAvatarContent.react",
	"WAWebWaChatPsaIcon.react",
	"WAWebWid",
	"WDSFocusStateStyles",
	"WDSIconIcCampaignMegaphoneFilled.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcBroadcastMessageFill.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"WDSIconWdsIcMetaDataDoubleChevron.react",
	"cr:5981",
	"gkx",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebDefaultProfileColors",
	"useWAWebEventTargetValue",
	"useWAWebForceUpdate",
	"useWAWebGroupColors",
	"useWAWebIsKeyboardUser",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = d.useState, g = d.useTransition, h = { padding1: {
		paddingTop: "x4p5aij",
		paddingInlineEnd: "x1ccui7m",
		paddingBottom: "x1j85h84",
		paddingInlineStart: "x18pi947",
		$$css: !0
	} }, y = new Set(), C = n("cr:5981") == null ? void 0 : n("cr:5981").InternalStatusWarningImageOverlay, b = n("$InternalEnum").Mirrored([
		"ExtraSmall",
		"Small",
		"Medium",
		"Large",
		"Refresh",
		"None"
	]), v = n("$InternalEnum").Mirrored(["Low", "High"]), S = n("$InternalEnum").Mirrored([
		"Circle",
		"Square",
		"Squircle"
	]), R = n("$InternalEnum").Mirrored([
		"GroupChatProfilePicture",
		"Status",
		"MediaHub",
		"GroupStatus"
	]), L = {
		announcementSpeaker: {
			color: "x1pse0pq",
			$$css: !0
		},
		communitySquircle: {
			color: "x17k9de1",
			$$css: !0
		},
		newsletter: {
			color: "x17k9de1",
			$$css: !0
		},
		avatarDefaultPSA: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		dimmed: {
			opacity: "x1xccycs",
			$$css: !0
		},
		avatar: {
			position: "x1n2onr6",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		status: {
			backgroundColor: "x1gle93d",
			$$css: !0
		},
		avatarSquare: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			$$css: !0
		},
		avatarImage: {
			position: "x1n2onr6",
			display: "x1lliihq",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			objectFit: "xl1xv1r",
			objectPosition: "x115dhu7",
			opacity: "xg01cxk",
			transition: "x17vty23",
			$$css: !0
		},
		isLoaded: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		avatarImageNoTransition: {
			transition: "xq2gx43",
			$$css: !0
		},
		aiHubProfileContainer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		aiHubProfileImageDark: {
			filter: "x1dftt0s",
			$$css: !0
		},
		avatarSquircle: {
			clipPath: "x1f2iure",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			$$css: !0
		},
		groupProfilePicture: {
			position: "x10l6tqk",
			insetInlineStart: "x1nobqc8",
			left: null,
			right: null,
			width: "xgd8bvy",
			height: "x1fgtraw",
			$$css: !0
		},
		groupProfilePictureInBubble: {
			width: "x14qfxbe",
			height: "xc9qbxq",
			$$css: !0
		},
		svgSize: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		profilePictureOutlineRefreshed: {
			outline: "x4u6w88",
			outlineOffset: "x1g40iwv",
			$$css: !0
		},
		circleIconRefreshed: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		squircleIconBackground: {
			width: "xh8yej3",
			height: "x5yr21d",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		avatarBorder: {
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x16jw5py",
			borderInlineEndColor: "x13dr7gu",
			borderBottomColor: "xd9srri",
			borderInlineStartColor: "x1ia0k5z",
			$$css: !0
		},
		avatarProfileRingBorder: {
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1y9zq84",
			borderInlineEndColor: "xt9xd2u",
			borderBottomColor: "x3tsejo",
			borderInlineStartColor: "x1ahzpo1",
			boxSizing: "x9f619",
			$$css: !0
		},
		avatarDefaultAnnouncementGroup: {
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		inviteModal: {
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x19bsprb",
			borderInlineEndColor: "x2cy9dh",
			borderBottomColor: "x1eeqclz",
			borderInlineStartColor: "x1mx0rqa",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		wrapper: {
			position: "x1n2onr6",
			$$css: !0
		},
		outline: {
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			$$css: !0
		},
		badge: {
			position: "x10l6tqk",
			insetInlineEnd: "xhu3bip",
			bottom: "x48lskh",
			zIndex: "x16uhe5s",
			boxSizing: "x9f619",
			width: "xw4jnvo",
			height: "x1qx5ct2",
			pointerEvents: "x47corl",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		chatList: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		chatListHoveredOrActive: {
			background: "x8b8lpe",
			$$css: !0
		},
		conversationHeader: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		subgroupJoinModal: {
			backgroundColor: "x1280gxy",
			width: "x1849jeq",
			height: "x1gnnpzl",
			insetInlineEnd: "xtijo5x",
			bottom: "x1ey2m1c",
			$$css: !0
		},
		adsDataSharingIconBackground: {
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		badgeIconSVG: {
			width: "x1xp8n7a",
			height: "xmix8c7",
			$$css: !0
		},
		polls: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		pollsSender: {
			borderTopColor: "x3ewwah",
			borderInlineEndColor: "xzt7qbt",
			borderBottomColor: "x1xnb2cf",
			borderInlineStartColor: "xphqdy3",
			$$css: !0
		},
		pollsReceiver: {
			borderTopColor: "xm7onvi",
			borderInlineEndColor: "xxy6lca",
			borderBottomColor: "x4728lr",
			borderInlineStartColor: "x4bbfdb",
			$$css: !0
		},
		backgroundFill: {
			fill: "x1flh12g",
			$$css: !0
		},
		primaryFill: {
			fill: "xvt3oi1",
			$$css: !0
		},
		broadcastIconContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		broadcastIconOuter: {
			width: "xycev2y",
			height: "x39lw6i",
			color: "xhslqc4",
			$$css: !0
		},
		badgeIconPathSVG: {
			color: "xhslqc4",
			$$css: !0
		},
		dataSharingUpdatedStyleIcon: {
			color: "xrl28ub",
			$$css: !0
		},
		dataSharingNewStyleIcon: {
			backgroundColor: "x1c7u0tx",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "xhslqc4",
			$$css: !0
		},
		subgroupJoinModalSvgStyle: {
			width: "xgd8bvy",
			height: "x1fgtraw",
			$$css: !0
		},
		groupProfilePictureSticky: {
			position: "x7wzq59",
			top: "x1eu8d0j",
			$$css: !0
		},
		groupProfilePictureNonSticky: {
			position: "x1uhb9sk",
			$$css: !0
		},
		fullSize: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		clickable: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		dimensions: function(t, n) {
			return [{
				height: t != null ? "x16ye13r" : t,
				width: n != null ? "x5lhr3w" : n,
				$$css: !0
			}, {
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t),
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(n)
			}];
		}
	}, E = 100;
	function k(t) {
		var n, a = t.alt, i = t.id, l = t.imgClassName, s = t.imgXstyle, u = t.loader, d = u === void 0 ? !1 : u, p = t.loadingAnimation, h = p === void 0 ? !0 : p, C = t.onLoad, b = t.profilePicThumb, v = t.profilePicThumbImg, R = t.spinnerClassName, k = t.spinnerSize, I = t.spinnerXstyle, T = t.theme, D = o("WAWebThemeContext").useIsDarkTheme(), x = f(!1), $ = x[0], P = x[1], N = f(v), M = N[0], w = N[1], A = i instanceof r("WAWebWid") && r("WAWebWid").isAiHub(i), F = M != null && o("WAWebPREGatingUtils").isPREChatMovingEnabled() ? y.has(M) : !1, O = f(F ? !1 : (i instanceof r("WAWebWid") && (i == null ? void 0 : i.isBot())) !== !0), B = O[0], W = O[1], q = f(F), U = q[0], V = q[1], H = _(!!v), G = _(!1), z = T !== "business", j = r("useLazyRef")(function() {
			return d && z ? new (o("WAShiftTimer")).ShiftTimer(function() {
				P(!0);
			}) : null;
		}), K = g(), Q = K[0], X = K[1];
		v !== M && (w(v), W(!0), V(!1));
		var Y = function(t) {
			X(function() {
				var e;
				(e = j.current) == null || e.cancel(), b.markMms4HostSuccess(), W(!1), V(!0), C == null || C();
				var n = t.target;
				M != null && n instanceof HTMLImageElement && n.complete && o("WAWebPREGatingUtils").isPREChatMovingEnabled() && y.add(M);
			});
		}, J = function(t) {
			var e;
			if ((e = j.current) == null || e.cancel(), t instanceof o("WAWebServerErrors").ServerStatusError) switch (t.status) {
				case 403:
					b.markStale({ eurl: !0 }), G.current || (G.current = !0, b.validate());
					break;
				case 410:
					b.markStale();
					break;
				default:
					o("WAWebMmsClientIsErrorRetryable").isRetriableStatusCode(t.status) && b.markMms4HostFailure();
					break;
			}
			W(!1), V(!1);
		};
		m(function() {
			var e, t = j;
			return (e = t.current) == null || e.onOrAfter(E), function() {
				var e;
				(e = t.current) == null || e.cancel();
			};
		}, [b, j]);
		var Z = function() {
			return z ? !!d && $ && B && !(!o("WAWebStateUtils").unproxy(b).stale && !M) : !1;
		}, ee = o("WAWebClassnames").classnamesConvertMeToStylexPlease((n = {}, n[l] = typeof l == "string", n), (e || (e = r("stylex")))(h === !1 && H.current && L.avatarImageNoTransition, L.avatarImage, t.shape === S.Square && L.avatarSquare, t.shape === S.Squircle && L.avatarSquircle, !B && L.isLoaded, t.shape !== S.Squircle && L.profilePictureOutlineRefreshed, A && D && L.aiHubProfileImageDark, s)), te, ne;
		if (Z() && (te = c.jsx(r("WAWebAvatarSpinner.react"), {
			className: R,
			xstyle: I,
			size: k
		})), !r("isStringNullOrEmpty")(M)) {
			var re = c.jsx(r("WAWebImg.react"), {
				src: M,
				hasPrivacyChecks: !0,
				crossOrigin: !1,
				className: ee,
				draggable: !1,
				onLoad: Y,
				onError: J,
				alt: a
			});
			t.shape === S.Squircle ? ne = c.jsxs("div", {
				className: "x1n2onr6 xh8yej3 x5yr21d x1f2iure",
				children: [re, c.jsx(r("WAWebSquircleStroke.react"), {})]
			}) : ne = re;
		}
		var oe = U ? null : t.defaultIcon;
		return h === !1 && (oe = ne != null ? null : t.defaultIcon), c.jsxs(c.Fragment, { children: [
			te,
			oe,
			ne
		] });
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = o("useWAWebModelValues").useModelValues(e.profilePicThumb, ["imgFull"]);
		return c.jsx(k, babelHelpers.extends({}, e, { profilePicThumbImg: t.imgFull }));
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = o("useWAWebModelValues").useModelValues(e.profilePicThumb, ["img"]);
		return c.jsx(k, babelHelpers.extends({}, e, { profilePicThumbImg: t.img }));
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		return e === "group_profile_picture" || e === "group_profile_picture_in_bubble" ? R.GroupChatProfilePicture : e === "status" ? R.Status : e === "media_hub" ? R.MediaHub : e === "group_status" ? R.GroupStatus : null;
	}
	var x = 28;
	function $(e) {
		if (typeof e == "string") switch (e) {
			case b.ExtraSmall: return 40;
			case b.Small: return 49;
			case b.Medium: return 100;
			case b.Large: return 200;
			case b.Refresh: return 128;
			case b.None: return;
		}
		else return e;
	}
	function P(t) {
		"use no forget";
		var n, a, i, l = t.id, u = t.size, d = t.quality, m = d === void 0 ? v.Low : d, f = t.loader, g = t.onClick, R = t.onLoad, E = t.quoted, k = t.shape, P = t.border, F = t.waitIdle, O = t.ephemeralIcon, B = t.isHoveredOrActive, W = B === void 0 ? !1 : B, q = t.checkmarkIcon, U = t.hiddenSubgroupIcon, V = t.aiGroupIcon, H = t.theme, G = t.alt, z = t.xstyle, j = t.authorColor, K = t.loadPicture, Q = K === void 0 ? !0 : K, X = t.loadAnimation, Y = X === void 0 ? !0 : X, J = t.tabIndex, Z = t.ariaLabel, ee = t.testId, te = t.tabOrder, ne = t.showOutline, re = ne === void 0 ? !1 : ne, oe = t.enableAdsDataSharingIcon, ae = t.enableBizAiDataSharingIcon, ie = ae === void 0 ? !1 : ae, le = t.groupProfilePictureSticky, se = le === void 0 ? !1 : le, ue = t.videoUrl, ce = t.customDimensionsStyle, de = ce === void 0 ? !1 : ce, me = t.secondaryAvatar, pe = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), _e = _(null), fe = r("useWAWebIsKeyboardUser")(), ge = fe.isKeyboardUser, he = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(), ye = p(function() {
			var e = l, t = o("WAWebChatCollection").ChatCollection.get(e);
			if (!t && e.isRegularUser()) try {
				var n = e.isLid() ? o("WAWebLidMigrationUtils").toPn(e) : o("WAWebLidMigrationUtils").toLid(e);
				if (n) if (t = o("WAWebChatCollection").ChatCollection.get(n), t) e = n;
				else {
					var r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(n);
					(r == null ? void 0 : r.img) != null && r.img !== "" && (e = n);
				}
			} catch (e) {}
			return {
				id: e,
				chat: t
			};
		}, [l]), Ce = ye.chat, be = ye.id, ve;
		typeof u == "number" ? ve = u > 0 ? u : b.Small : ve = u != null ? u : b.Small;
		var Se = me != null, Re = de ? null : $(ve), Le = Re == null ? null : L.dimensions(Re, Re), Ee, ke;
		if (Ce != null && (n = Ce.groupMetadata) != null && (n = n.participants) != null && n.iAmMember()) {
			if (o("WAWebChatGetters").getIsGroup(Ce)) {
				var Ie;
				Ee = (Ie = Ce.groupMetadata) == null ? void 0 : Ie.groupType, ke = Ce.groupMetadata;
			}
		} else {
			var Te = r("WAWebUnjoinedSubgroupMetadataCollection").get(be.toString());
			Ee = Te == null ? void 0 : Te.groupType, ke = Te;
		}
		o("useWAWebListener").useListener(Ce != null && o("WAWebChatGetters").getIsGroup(Ce) ? ke : Ce, "change:ephemeralDuration", pe), o("useWAWebListener").useListener(Ce, "change:isSenderSuspicious", pe);
		var De = r("useWAWebEventTargetValue")(ke, "change:hiddenSubgroup", function() {
			var e;
			return ((e = ke) == null ? void 0 : e.hiddenSubgroup) === !0;
		}), xe = (e || (e = r("stylex"))).props(L.avatar, r("WAWebWid").isAiHub(be) && L.aiHubProfileContainer, H === "status" && L.status, k === S.Square && L.avatarSquare, k === S.Squircle && L.avatarSquircle, H === "group_profile_picture" && L.groupProfilePicture, H === "group_profile_picture_in_bubble" && L.groupProfilePictureInBubble, H === "status_profile_photo_ring" && L.avatarProfileRingBorder, H === "invite_modal" && L.inviteModal, (H === "polls_sender" || H === "polls_receiver") && L.polls, H === "polls_sender" && L.pollsSender, H === "polls_receiver" && L.pollsReceiver, o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(Ce) && L.dimmed, P === !0 && L.avatarBorder, Ee === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && L.avatarDefaultAnnouncementGroup, g != null && ge && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, re && L.outline, H === "group_profile_picture" && se && (r("gkx")("9189") ? L.groupProfilePictureNonSticky : L.groupProfilePictureSticky), z, Se ? L.fullSize : Le, g != null && L.clickable), $e = function(t) {
			if (r("WAWebKeyboardIsKeyActivation")(t)) {
				var e;
				(e = _e.current) == null || e.click();
			}
		}, Pe = g != null ? {
			tabIndex: J,
			role: "button",
			"aria-label": Z,
			onKeyDown: $e
		} : {}, Ne = D(H), Me = c.jsx(M, {
			id: be,
			quoted: E,
			groupType: Ee,
			theme: Ne,
			authorColor: j,
			shape: t.shape
		});
		if ((H === "group_profile_picture" || H === "typing_indicator" || H === "reaction_details") && o("WAWebChatProfilePictureGatingUtils").shouldDisplayInitialsInProfilePicture(be)) {
			var we = o("WAWebContactCollection").ContactCollection.get(be);
			if (we) {
				var Ae = o("WAWebInitialsFromNameUtils").getInitialsFromContact(we);
				(Ae.firstInitial != null || Ae.secondInitial != null) && (Me = c.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
					initialsData: Ae,
					theme: o("WAWebInitialsProfilePicture.react").ThemeType.GroupChatProfilePicture,
					backgroundColorId: j != null ? j : 1,
					wid: be
				}));
			}
		}
		var Fe = function() {
			var e = null, t;
			Q ? t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(be) : t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(be);
			var n = Ce != null && !Ce.trusted && Ce.isSenderSuspicious === !0 && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled();
			if (n) e = Me;
			else if (ue != null && t) {
				var a, i, l = (a = (i = t.get("eurl")) != null ? i : t.get("img")) != null ? a : null;
				e = c.jsx(r("WAWebVideoAvatarContent.react"), {
					alt: G,
					imageUrl: l,
					onLoad: R,
					shape: k,
					videoUrl: ue
				});
			} else t ? m === v.High ? e = c.jsx(I, {
				profilePicThumb: t,
				defaultIcon: Me,
				loader: f,
				onLoad: R,
				alt: G,
				shape: k,
				id: be
			}) : e = c.jsx(T, {
				profilePicThumb: t,
				defaultIcon: Me,
				loader: f,
				onLoad: R,
				alt: G,
				loadingAnimation: Y,
				shape: k,
				id: be
			}) : e = Me;
			return c.jsxs("div", babelHelpers.extends({
				"data-testid": ee,
				ref: _e,
				"data-tab": te
			}, Pe, xe, {
				onClick: g,
				children: [e, !r("gkx")("26258") && (typeof u != "number" || u >= x) && C ? c.jsx(C, { id: be }) : null]
			}));
		}, Oe = p(function() {
			if (!Q) return !1;
			var e = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(be), t = e == null ? void 0 : e.img;
			return t != null && t !== "" ? (y.add(t), !0) : !1;
		}, [be, Q]), Be = (!r("WAWebEnvironment").isWindows || F === !0) && !Oe, We = Be ? c.jsx(r("WAWebIdleComponent.react"), {
			id: be,
			onComplex: Fe,
			waitIdle: F,
			children: c.jsx("div", babelHelpers.extends({ ref: _e }, Pe, xe, {
				onClick: g,
				children: Me
			}))
		}) : Fe();
		if (Se) return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.wrapper, Le), { children: [c.jsx("div", {
			className: "x10l6tqk x1ey2m1c xtijo5x x1vz4e29 x1kx422t",
			children: me
		}), c.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod x1vz4e29 x1kx422t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xy9pznf",
			children: We
		})] }));
		if (t.emojiBadge != null && o("WAWebUserPrefsMeUser").isMeAccount(be)) return c.jsxs("div", {
			className: "x1n2onr6",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [c.jsx("div", {
				className: "x10l6tqk xhu3bip x48lskh x16uhe5s x9f619 xw4jnvo x1qx5ct2 x47corl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1h3rtpe",
				children: t.emojiBadge
			}), We]
		});
		var qe = (a = Ce == null || (i = Ce.contact) == null || (i = i.businessProfile) == null ? void 0 : i.isBizBot1p) != null ? a : !1, Ue = he && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled(), Ve = ie && qe && Ue, He = w(O, Ce), Ge = V === "conversation-header" && A(Ce), ze = oe === !0 && Ce != null && o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(Ce), je = U != null && q == null && De;
		if (Ve || He === !0 || q || ze || je || Ge) {
			var Ke, Qe = (Ke = O != null ? O : q) != null ? Ke : U;
			return c.jsxs("div", {
				className: "x1n2onr6",
				"aria-hidden": "true",
				children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.badge, h.padding1, Qe === "chat-list" && !W && L.chatList, Qe === "chat-list" && W && L.chatListHoveredOrActive, Qe === "conversation-header" && L.conversationHeader, Qe === "subgroup-join-modal" && L.subgroupJoinModal, ze && L.adsDataSharingIconBackground), { children: c.jsx(N, {
					iconScheme: Qe,
					shouldShowEphemeralIcon: He,
					shouldShowHiddenSubgroupIcon: je,
					shouldShowAdsDataSharingIcon: ze,
					shouldShowBizAiDataSharingIcon: Ve,
					shouldShowAIGroupIcon: Ge
				}) })), We]
			});
		}
		return We;
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.iconScheme, n = e.shouldShowAdsDataSharingIcon, a = n === void 0 ? !1 : n, i = e.shouldShowAIGroupIcon, l = i === void 0 ? !1 : i, s = e.shouldShowBizAiDataSharingIcon, u = s === void 0 ? !1 : s, d = e.shouldShowEphemeralIcon, m = d === void 0 ? !1 : d, p = e.shouldShowHiddenSubgroupIcon, _ = p === void 0 ? !1 : p;
		if (u) return c.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
			iconXstyle: [
				L.svgSize,
				L.badgeIconSVG,
				L.dataSharingUpdatedStyleIcon
			],
			testid: "double-chevron-in-circle"
		});
		if (a) return c.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, { iconXstyle: [
			L.svgSize,
			L.badgeIconSVG,
			L.dataSharingNewStyleIcon
		] });
		if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && l) return c.jsx(r("WAWebMetaAIIcon.react"), {
			height: 17,
			width: 17
		});
		var f = o("WAWebMiscGatingUtils").isBlueEnabled() ? o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon : o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, g;
		m === !0 ? g = r("WDSIconWdsIcDisappearingMessages.react") : _ ? g = r("WDSIconIcVisibilityOff.react") : g = f;
		var h = {
			xstyle: L.badgeIconPathSVG,
			iconXstyle: [
				L.svgSize,
				L.badgeIconSVG,
				t === "subgroup-join-modal" && L.subgroupJoinModalSvgStyle
			]
		};
		return m === !0 ? c.jsx(r("WDSIconWdsIcDisappearingMessages.react"), babelHelpers.extends({ testid: "disappearing-messages-refreshed" }, h)) : c.jsx(g, babelHelpers.extends({}, h));
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(t) {
		var n = t.authorColor, a = t.groupType, i = t.id, l = t.quoted, s = t.shape, u = t.theme, d = t.xstyle, m = o("useWAWebDefaultProfileColors").useDefaultProfileColors(i), p = m.background, _ = m.foreground, f = o("useWAWebGroupColors").useGroupsColorStyle(n != null ? n : 1, "color"), g = c.jsx(o("WAWebDefaultContactRefreshedIcon.react").DefaultContactRefreshedIcon, {
			iconXstyle: [
				L.svgSize,
				L.circleIconRefreshed,
				L.profilePictureOutlineRefreshed,
				p,
				d
			],
			"aria-hidden": !0,
			innerStyles: { primary: _ != null ? _ : L.primaryFill }
		});
		r("WAWebWid").isUser(i) && !r("WAWebWid").isPSA(i) && l ? g = c.jsx(o("WAWebDefaultUserSquareIcon.react").DefaultUserSquareIcon, {
			iconXstyle: [L.svgSize, d],
			"aria-hidden": !0,
			innerStyles: {
				primary: L.primaryFill,
				background: L.backgroundFill
			}
		}) : r("WAWebWid").isGroup(i) ? a === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? g = c.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
			directional: !0,
			iconXstyle: [
				L.svgSize,
				L.announcementSpeaker,
				d
			],
			"aria-hidden": !0
		}) : a === o("WAWebGroupType").GroupType.COMMUNITY || s === S.Squircle ? g = c.jsxs("div", {
			className: "x1n2onr6 xh8yej3 x5yr21d x1f2iure",
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.squircleIconBackground, p), { children: c.jsx(o("WAWebDefaultCommunityRefreshedIcon.react").DefaultCommunityRefreshedIcon, {
				iconXstyle: [
					L.svgSize,
					L.communitySquircle,
					d
				],
				"aria-hidden": !0,
				innerStyles: { primary: _ != null ? _ : L.primaryFill }
			}) })), c.jsx(r("WAWebSquircleStroke.react"), {})]
		}) : a === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP ? g = c.jsx(o("WAWebCommunityGeneralChatImage.react").CommunityGeneralChatImage, {}) : g = c.jsx(o("WAWebDefaultGroupRefreshedIcon.react").DefaultGroupRefreshedIcon, {
			iconXstyle: [
				L.svgSize,
				L.circleIconRefreshed,
				L.profilePictureOutlineRefreshed,
				p,
				d
			],
			"aria-hidden": !0,
			innerStyles: { primary: _ != null ? _ : L.primaryFill }
		}) : r("WAWebWid").isBroadcast(i) ? g = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.svgSize, L.circleIconRefreshed, L.profilePictureOutlineRefreshed, L.broadcastIconContainer, d), { children: c.jsx(r("WDSIconWdsIcBroadcastMessageFill.react"), {
			xstyle: L.broadcastIconOuter,
			iconXstyle: L.svgSize,
			"aria-hidden": !0
		}) })) : r("WAWebWid").isPSA(i) ? g = c.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
			iconXstyle: [
				L.svgSize,
				L.avatarDefaultPSA,
				d
			],
			"aria-hidden": !0
		}) : r("WAWebWid").isNewsletter(i) && (g = c.jsx(o("WAWebDefaultNewsletterIcon.react").DefaultNewsletterIcon, {
			iconXstyle: [
				L.svgSize,
				L.newsletter,
				d
			],
			"aria-hidden": !0,
			innerStyles: {
				primary: L.primaryFill,
				background: L.backgroundFill
			}
		}));
		var h = c.createElement("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d" },
			4: { className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d xfimr68 x1jpgh95" },
			2: { className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw" },
			6: { className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xfimr68 x1jpgh95 xgd8bvy x1fgtraw" },
			1: { className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xh8yej3 x5yr21d x1n2onr6 x1lliihq" },
			5: { className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xh8yej3 x5yr21d xfimr68 x1jpgh95 x1n2onr6 x1lliihq" },
			3: { className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1n2onr6 x1lliihq" },
			7: { className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xfimr68 x1jpgh95 xgd8bvy x1fgtraw x1n2onr6 x1lliihq" }
		}[(u === R.Status) << 2 | (u === R.MediaHub) << 1 | (u === R.GroupStatus) << 0], { key: "default" }), g);
		return u === R.GroupChatProfilePicture && (h = c.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
			children: c.jsx(o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon, {
				iconXstyle: [L.svgSize, d],
				xstyle: f
			})
		}, "default")), h;
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e, t) {
		return !!(e != null && t && o("WAWebChatEphemerality").isEphemeralSettingOn(t) && !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(t));
	}
	function A(e) {
		var t;
		return o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && (e == null || (t = e.groupMetadata) == null ? void 0 : t.isOpenBotGroup) === !0;
	}
	l.DetailImageSize = b, l.DetailImageQuality = v, l.DetailImageShape = S, l.DefaultIconThemeType = R, l.DetailImageCommon = k, l.getSize = $, l.DetailImage = P, l.ImageIcon = N, l.DefaultIcon = M;
}), 226);
