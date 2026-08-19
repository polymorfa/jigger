__d("WAWebCellFrame.react", [
	"WDSFocusStateStyles",
	"cr:23442",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = {
		chat: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			height: "xy75621",
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			pointerEvents: "x71s49j",
			position: "x1n2onr6",
			$$css: !0
		},
		chatInteractive: {
			cursor: "x1ypdohk",
			":hover_backgroundColor": "x1ubxc9n",
			":focus_backgroundColor": "xbmkbis",
			$$css: !0
		},
		chatInteractiveRefreshed: {
			cursor: "x1ypdohk",
			":hover_backgroundColor": "x17gydlx",
			":focus_backgroundColor": "x1jsj9aw",
			$$css: !0
		},
		chatActive: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		chatDrag: {
			backgroundColor: "x4wrhlh",
			transitionDuration: "x1wsgiic",
			transitionTimingFunction: "xrix70t",
			$$css: !0
		},
		chatIdle: {
			cursor: "xt0e3qv",
			$$css: !0
		},
		chatMuted: {
			opacity: "xbyyjgo",
			$$css: !0
		},
		chatDisabled: {
			cursor: "x1h6gzvc",
			$$css: !0
		},
		chatInteractiveIdle: {
			":hover_backgroundColor": "xlqxigy",
			":hover_cursor": "x1wud0mn",
			$$css: !0
		},
		chatInteractiveIdleThemeReaction: {
			":hover_backgroundColor": "x1paxslp",
			":hover_cursor": "x1wud0mn",
			$$css: !0
		},
		chatInteractiveThemeReaction: {
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		chatInteractiveThemeReactionByOthersActive: {
			":hover_cursor": "x1wud0mn",
			$$css: !0
		},
		chatInteractiveThemePlain: {
			":hover_backgroundColor": "x1n5bzlp",
			$$css: !0
		},
		chatInteractiveThemeRadioButtonRow: {
			":hover_backgroundColor": "xlqxigy",
			$$css: !0
		},
		chatInteractiveThemeListNames: {
			":hover_backgroundColor": "xlqxigy",
			$$css: !0
		},
		chatInteractiveGroupsV4Invite: {
			":hover_backgroundColor": "x1n5bzlp",
			":hover_cursor": "x1wud0mn",
			$$css: !0
		},
		themeCheckbox: {
			paddingInlineStart: "xsmzqeu",
			$$css: !0
		},
		themeChatInfo: {
			height: "x1gb2em4",
			$$css: !0
		},
		themeSubgroup: {
			height: "xvt47uu",
			$$css: !0
		},
		themeCommunityHome: {
			height: "xpyat2d",
			paddingInlineStart: "xsdj86q",
			$$css: !0
		},
		themeIdentity: {
			alignItems: "x6s0dn4",
			height: "xt7dq6l",
			paddingInlineEnd: "x64bnmy",
			$$css: !0
		},
		themeListNames: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			cursor: "xt0e3qv",
			display: "x3nfvp2",
			height: "xt7dq6l",
			marginBottom: "xzueoph",
			marginTop: "xdj266r",
			marginInlineEnd: "xbelrpt",
			marginInlineStart: "x1lziwak",
			maxWidth: "x7dbjn3",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		themePlain: {
			cursor: "x1sqbtui",
			$$css: !0
		},
		themeStatusListModal: {
			backgroundColor: "xjbqb8w",
			height: "x5yr21d",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		themeLabel: {
			height: "xnnlda6",
			$$css: !0
		},
		themeLabelRedesigned: {
			height: "xy75621",
			$$css: !0
		},
		themeLabelNewList: {
			height: "xt7dq6l",
			minHeight: "xbktkl8",
			$$css: !0
		},
		themeListsAssignModal: {
			height: "xnnlda6",
			$$css: !0
		},
		themeAddItem: {
			height: "xwzfr38",
			$$css: !0
		},
		themeAddOrderItem: {
			height: "xdmi676",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		themeReaction: {
			backgroundColor: "x16w0wmm",
			height: "xdd8jsf",
			paddingInlineEnd: "x14vy60q",
			paddingInlineStart: "xyiysdx",
			$$css: !0
		},
		themeReactionActive: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		themeNewsletterReactionByOthers: {
			height: "xsdox4t",
			$$css: !0
		},
		themeNewsletterContactReactions: {
			backgroundColor: "x16w0wmm",
			height: "xdd8jsf",
			$$css: !0
		},
		themeNewsletterLinkDrawer: {
			backgroundColor: "x1280gxy",
			height: "xdmi676",
			minHeight: "x1qafhyn",
			$$css: !0
		},
		groupsV4Invite: {
			backgroundColor: "xjbqb8w",
			cursor: "xt0e3qv",
			height: "xsi6dy0",
			$$css: !0
		},
		themeProduct: {
			height: "xjp8j0k",
			$$css: !0
		},
		themeCartProduct: {
			height: "xsbjyhr",
			$$css: !0
		},
		themeStickerPack: {
			height: "xgu7n3t",
			$$css: !0
		},
		themeMedia: {
			height: "xng8ra",
			$$css: !0
		},
		themeListButton: {
			height: "xt7dq6l",
			paddingBottom: "x1a8lsjc",
			paddingTop: "x889kno",
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		themeListMsg: {
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		},
		themeArchivePanel: {
			backgroundColor: "xjbqb8w",
			height: "x3ffywh",
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		themeRadioButtonRow: {
			height: "xng8ra",
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		},
		themeLinkedAccount: {
			backgroundColor: "xjbqb8w",
			height: "xy2rkmd",
			paddingBottom: "xs9asl8",
			paddingTop: "x1y1aw1k",
			$$css: !0
		},
		themeLinkedAccountConsumer: {
			height: "x1mgsydn",
			$$css: !0
		},
		themeListNamesActive: {
			backgroundColor: "x1q7yeco",
			$$css: !0
		},
		themeProductAddToOrder: {
			cursor: "xt0e3qv",
			height: "xjp8j0k",
			$$css: !0
		},
		themeCommunityTabHome: {
			boxSizing: "x9f619",
			$$css: !0
		},
		themeCommunityTabViewAll: {
			height: "xng8ra",
			$$css: !0
		},
		themeCommunityCreate: {
			height: "x3igimt",
			lineHeight: "xdod15v",
			paddingTop: "x1i80of2",
			paddingBottom: "xzxdvmt",
			paddingInlineStart: "xsdj86q",
			paddingInlineEnd: "x1ekh9h2",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		themeMenuItem: {
			backgroundColor: "xjbqb8w",
			height: "x1vqgdyp",
			paddingInlineStart: "x1c1uobl",
			":hover_backgroundColor": "x1n5bzlp",
			$$css: !0
		},
		themeVoipOngoingCall: {
			backgroundColor: "x1abdmlv",
			$$css: !0
		},
		themeVoipOngoingCallIdleHover: {
			":hover_backgroundColor": "xm38lk9",
			$$css: !0
		},
		tallerCellWithLabel: {
			height: "xif8yxe",
			$$css: !0
		},
		tallerCellWithTertiary: {
			height: "xif8yxe",
			$$css: !0
		},
		tallerCellWithMemberLabel: {
			height: "xif8yxe",
			$$css: !0
		},
		adListRow: {
			backgroundColor: "xjbqb8w",
			":hover_borderBottomColor": "x722v89",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		unreadMessageTimestampOldAndPostRefreshed: {
			fontWeight: "x1s688f",
			$$css: !0
		},
		paddingStart28: {
			paddingInlineStart: "xdylf7x",
			$$css: !0
		},
		paddingStart8: {
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		paddingStart16: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		paddingStart12: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		noInlineMargin: {
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x14z9mp",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		image: {
			display: "x78zum5",
			$$css: !0
		},
		imageThemeProduct: {
			borderTopColor: "x1v8p93f",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "xamhcws",
			$$css: !0
		},
		imageThemeCartProduct: {
			borderTopStyle: "x1ejq31n",
			$$css: !0
		},
		imageThemeCollectionEdit: {
			borderBottomColor: "x120ee7l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			borderTopStyle: "x1ejq31n",
			marginInlineStart: "xx6jrq6",
			$$css: !0
		},
		imageThemeMedia: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		imageThemeProductOutOfStock: {
			opacity: "xbyyjgo",
			$$css: !0
		},
		imageThemeCommunityTabSubgroup: {
			paddingInlineEnd: "x1gabggj",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		imageThemeCommunityTabViewAll: {
			width: "xdc2ju1",
			$$css: !0
		},
		imageThemeCommunityTabActivityCell: {
			paddingInlineEnd: "x1gabggj",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		chatAvatar: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			marginTop: "x1y332i5",
			paddingBottom: "x18d9i69",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x1n1b19v",
			paddingInlineStart: "xbmws1g",
			$$css: !0
		},
		chatAvatarRefreshed: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			paddingBottom: "x18d9i69",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x1pic42t",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		chatAvatarThemeSubgroup: {
			marginTop: "xdj266r",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		chatAvatarThemeIdentity: {
			paddingTop: "xyamay9",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "x11ahuha",
			paddingInlineEnd: "xl3akx1",
			$$css: !0
		},
		chatAvatarThemeLabel: {
			marginTop: "xdj266r",
			paddingInlineEnd: "xf159sx",
			paddingInlineStart: "x1lyran6",
			$$css: !0
		},
		chatAvatarThemeLabelRedesigned: {
			paddingInlineEnd: "x64bnmy",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		chatAvatarThemeListsAssignModal: {
			paddingInlineEnd: "x1xnnf8n",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		},
		chatAvatarThemeListNames: {
			marginInlineEnd: "x1xegmmw",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		chatAvatarThemeReaction: {
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		chatAvatarThemeLabelNewList: {
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		chatAvatarThemeMenuItem: {
			paddingInlineEnd: "x2vl965",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		},
		chatAvatarTallerCellWithTertiary: {
			alignSelf: "xamitd3",
			marginTop: "xdj266r",
			$$css: !0
		},
		chatAvatarGroupsV4Invite: {
			paddingInlineStart: "xwn43p0",
			$$css: !0
		},
		chatAvatarThemeListButton: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "x1n1b19v",
			paddingInlineStart: "x1iwz3mf",
			$$css: !0
		},
		chatAvatarThemeArchivePanel: {
			marginTop: "xdj266r",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "x1q3ajuy",
			paddingInlineStart: "xbmws1g",
			$$css: !0
		},
		chatAvatarThemeLinkedAccount: {
			marginTop: "xdj266r",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "x1a4sjiy",
			paddingInlineStart: "x110972j",
			$$css: !0
		},
		chatAvatarThemeLinkedAccountConsumer: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "x1ekh9h2",
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		chatAvatarThemeCheckboxDisabled: {
			opacity: "xti2d7y",
			$$css: !0
		},
		chatBody: {
			display: "x78zum5",
			flexBasis: "xdl72j9",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			justifyContent: "xl56j7k",
			minWidth: "xeuugli",
			paddingInlineEnd: "x1n1b19v",
			$$css: !0
		},
		chatBodyThemeMessage: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "x1dxu0v2",
			paddingInlineStart: "xc6nx8r",
			$$css: !0
		},
		chatBodyThemeSearch: {
			paddingInlineStart: "xc6nx8r",
			$$css: !0
		},
		chatBodyThemeChatInfo: {
			paddingInlineEnd: "xziim83",
			$$css: !0
		},
		chatBodyThemeSubgroup: {
			marginInlineStart: "xxz9a3q",
			paddingInlineEnd: "xziim83",
			$$css: !0
		},
		chatBodyThemeCommunityHome: {
			paddingInlineEnd: "xziim83",
			$$css: !0
		},
		chatBodyThemeIdentity: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		chatBodyThemeListNames: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		chatBodyThemeAddItem: {
			fontWeight: "x1s688f",
			paddingInlineStart: "xwn43p0",
			$$css: !0
		},
		chatBodyThemeAddItemPlaceholder: {
			paddingInlineStart: "x1gx403c",
			$$css: !0
		},
		chatBodyThemeLabel: {
			paddingInlineEnd: "x1wmf1g4",
			$$css: !0
		},
		chatBodyThemeNewLabel: {
			paddingInlineEnd: "xgws4yx",
			$$css: !0
		},
		chatBodyThemeLabelNewList: {
			paddingInlineEnd: "x64bnmy",
			$$css: !0
		},
		chatBodyThemeListsAssignModal: {
			paddingInlineEnd: "xjfo4ez",
			$$css: !0
		},
		chatBodyGroupsV4Invite: {
			paddingInlineEnd: "x9ix0oo",
			$$css: !0
		},
		chatBodyThemeStickerPack: {
			paddingTop: "xyamay9",
			paddingBottom: "x1l90r2v",
			$$css: !0
		},
		chatBodyThemeLinkedAccount: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		chatBodyThemeLinkedAccountConsumer: {
			marginTop: "xdj266r",
			$$css: !0
		},
		chatBodyThemeMenuItem: {
			width: "xh8yej3",
			$$css: !0
		},
		adsListChatBody: {
			borderTopStyle: "x1ejq31n",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		chatTitle: {
			color: "x14ug900",
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			fontSize: "x1jchvi3",
			fontWeight: "x1fcty0u",
			lineHeight: "xdod15v",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			overflowWrap: "x1mzt3pk",
			textAlign: "x1yc453h",
			$$css: !0
		},
		chatTitleUnread: {
			fontWeight: "xk50ysn",
			$$css: !0
		},
		chatTitleUnreadRegular: {
			fontWeight: "xo1l8bm",
			$$css: !0
		},
		chatTitleThemeSearch: {
			display: "x1s85apg",
			$$css: !0
		},
		chatTitleThemeCommunityHome: {
			fontSize: "x1c3i2sq",
			marginBottom: "xzueoph",
			$$css: !0
		},
		chatTitleThemeStatusListModal: {
			color: "x17t9dm2",
			$$css: !0
		},
		chatTitleThemeIdentity: {
			fontSize: "xlm9qay",
			lineHeight: "xgif2c7",
			$$css: !0
		},
		chatTitleThemeReaction: {
			display: "x1lliihq",
			fontSize: "x6prxxf",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		chatTitleThemeListNames: {
			color: "x14ug900",
			fontSize: "x1rcfd0n",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatTitleThemeAddOrderItem: {
			color: "x1ph7ams",
			fontSize: "x1jchvi3",
			fontWeight: "xo1l8bm",
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		chatTitleThemeMedia: {
			color: "x14ug900",
			fontSize: "x1f6kntn",
			fontWeight: "xk50ysn",
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		chatTitleTallerCellWithLabel: {
			marginTop: "x1gslohp",
			$$css: !0
		},
		chatTitleTallerCellWithMemberLabel: {
			marginTop: "x1gslohp",
			$$css: !0
		},
		chatTitleThemeCommunityTabViewAll: {
			color: "xo1mcw5",
			$$css: !0
		},
		chatTitleThemeMenuItem: {
			fontSize: "x1f6kntn",
			$$css: !0
		},
		chatTitleMember: {
			color: "xpw2u0k",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatTitleDisabled: {
			color: "xpw2u0k",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatTitleThemeCheckboxDisabled: {
			fontWeight: "x1fcty0u",
			opacity: "xti2d7y",
			$$css: !0
		},
		chatTitlePrimaryLimitedWidth: {
			maxWidth: "xq8v1hd",
			$$css: !0
		},
		chatTitleProductIdle: {
			color: "xhslqc4",
			$$css: !0
		},
		chatTitleThemeLinkedAccountConsumer: {
			color: "xbiwxsu",
			paddingTop: "x1nn3v0j",
			$$css: !0
		},
		chatSecondary: {
			alignItems: "x6s0dn4",
			color: "xhslqc4",
			display: "x78zum5",
			fontSize: "x1nxh6w3",
			lineHeight: "x1fc57z9",
			marginTop: "xr9ek0c",
			minHeight: "xisnujt",
			$$css: !0
		},
		chatSecondaryUnread: {
			color: "xhslqc4",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatSecondaryActive: {
			color: "xhslqc4",
			$$css: !0
		},
		chatSecondaryThemeReaction: {
			color: "xhslqc4",
			fontSize: "x1pg5gke",
			lineHeight: "x1d3mw78",
			$$css: !0
		},
		chatSecondaryThemeReactionActive: {
			color: "xhslqc4",
			$$css: !0
		},
		chatSecondaryThemeStatusListModal: {
			color: "x88nbbm",
			$$css: !0
		},
		chatSecondaryThemeSubgroupNew: {
			color: "xo1mcw5",
			$$css: !0
		},
		chatSecondaryThemeCommunityTabHomeNew: {
			color: "xo1mcw5",
			$$css: !0
		},
		chatSecondaryTallerCellWithLabel: {
			marginTop: "x1gslohp",
			$$css: !0
		},
		chatSecondaryTallerCellWithTertiary: {
			marginTop: "xr9ek0c",
			$$css: !0
		},
		chatSecondaryTallerCellWithMemberLabel: {
			marginTop: "x1gslohp",
			$$css: !0
		},
		chatSecondaryThemeCartProduct: {
			marginTop: "x14vqqas",
			$$css: !0
		},
		chatSecondaryThemeListNames: {
			display: "x1s85apg",
			$$css: !0
		},
		chatSecondaryMember: {
			color: "xpw2u0k",
			fontStyle: "x1k4tb9n",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatSecondaryDisabled: {
			color: "xpw2u0k",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatSecondaryThemeCheckboxDisabled: {
			fontWeight: "x1fcty0u",
			opacity: "xti2d7y",
			$$css: !0
		},
		chatSecondaryThemeAddItemPlaceholder: {
			backgroundColor: "x1kpc9vs",
			borderStartStartRadius: "x1fqc64z",
			borderStartEndRadius: "xs83zq4",
			borderEndEndRadius: "xt6ovg4",
			borderEndStartRadius: "x1ru8ea5",
			display: "x1lliihq",
			height: "x1qx5ct2",
			marginTop: "x1ok221b",
			width: "xo5x3gg",
			$$css: !0
		},
		chatSecondaryThemeLinkedAccountConsumer: {
			marginTop: "x7r5mf7",
			$$css: !0
		},
		chatSecondaryProductIdle: {
			color: "xhslqc4",
			$$css: !0
		},
		chatSecondaryProductOutOfStock: {
			opacity: "x3onkmb",
			$$css: !0
		},
		chatTitleProductOutOfStock: {
			opacity: "x3onkmb",
			$$css: !0
		},
		chatStatus: {
			backgroundColor: "xjbqb8w",
			flexGrow: "x1iyjqo2",
			fontSize: "x1f6kntn",
			fontWeight: "x1fcty0u",
			lineHeight: "x1fc57z9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textAlign: "x1yc453h",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		chatStatusUnread: {
			fontWeight: "xk50ysn",
			$$css: !0
		},
		chatStatusUnreadRegular: {
			fontWeight: "xo1l8bm",
			$$css: !0
		},
		chatStatusThemeIdentity: {
			fontSize: "x6prxxf",
			lineHeight: "x19v9tvf",
			$$css: !0
		},
		chatStatusThemeReaction: {
			fontSize: "x1pg5gke",
			$$css: !0
		},
		chatStatusThemeReactionByMe: {
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		},
		chatStatusThemeMedia: {
			fontSize: "x1nxh6w3",
			$$css: !0
		},
		chatStatusThemeSelectDropdownItem: {
			textOverflow: "x1n0xbq2",
			whiteSpace: "x17rilz2",
			$$css: !0
		},
		chatStatusThemeCommunityTabActivityCell: {
			maxHeight: "xmz0i5r",
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		chatStatusThemeCommunityCreate: {
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		chatStatusThemeListMsg: {
			maxHeight: "x18wx58x",
			whiteSpace: "xq9mrsl",
			$$css: !0
		},
		chatMeta: {
			color: "xhslqc4",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			fontSize: "x1pg5gke",
			lineHeight: "x1fc57z9",
			marginInlineStart: "xdzw4kq",
			maxWidth: "x193iq5w",
			$$css: !0
		},
		chatMetaInMain: {
			lineHeight: "x1xxsxie",
			marginTop: "x7r5mf7",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		chatMetaUnread: {
			color: "x1v5yvga",
			$$css: !0
		},
		chatMetaThemeSearch: {
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x14z9mp",
			$$css: !0
		},
		chatMetaThemeDrawerList: {
			marginTop: "xdj266r",
			$$css: !0
		},
		chatMetaThemeRadioButtonRow: {
			marginTop: "xdj266r",
			$$css: !0
		},
		chatMetaTallerCellWithLabel: {
			height: "x1qx5ct2",
			textOverflow: "xbrixnn",
			$$css: !0
		},
		chatMetaTallerCellWithMemberLabel: {
			height: "x1qx5ct2",
			textOverflow: "xbrixnn",
			$$css: !0
		},
		chatDetails: {
			alignItems: "x6s0dn4",
			alignSelf: "xamitd3",
			boxSizing: "x9f619",
			display: "x78zum5",
			flexBasis: "xdl72j9",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			height: "x5yr21d",
			paddingInlineEnd: "x1hwfens",
			$$css: !0
		},
		chatDetailsThemeReaction: {
			fontSize: "x579bpy",
			paddingInlineEnd: "xf159sx",
			width: "x1td3qas",
			$$css: !0
		},
		chatDetailsThemeListNames: {
			color: "x14ug900",
			fontSize: "x1rcfd0n",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		chatDetailsThemeListNamesPadding: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		chatDetailsThemeCartProduct: {
			paddingInlineEnd: "xv54qhq",
			$$css: !0
		},
		chatDetailsThemeSelectDropdownItem: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		chatDetailsThemeArchivePanel: {
			flexDirection: "x1q0g3np",
			$$css: !0
		},
		chatDetailsThemeLinkedAccount: {
			flexDirection: "x1q0g3np",
			$$css: !0
		},
		extendSecondaryEllipsis: {
			display: "x104kibb",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			WebkitBoxOrient: "x1ua5tub",
			WebkitLineClamp: "x1h7i4cw",
			whiteSpace: "xq9mrsl",
			$$css: !0
		}
	};
	function m(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.active, u = i.activeStyleType, m = u === void 0 ? "DEFAULT" : u, p = i.ariaColIndex, _ = p === void 0 ? 2 : p, f = i.ariaLabel, g = i.checkbox, h = g === void 0 ? !1 : g, y = i.className, C = i.containerRole, b = i.customImage, v = b === void 0 ? !1 : b, S = i.detail, R = i.disabled, L = i.dragging, E = i.extendSecondaryEllipsis, k = E === void 0 ? !1 : E, I = i.focusable, T = I === void 0 ? !1 : I, D = i.focusid, x = i.handleKeyboardClick, $ = i.idle, P = i.image, N = i.isMuted, M = i.label, w = i.onClick, A = i.onContextMenu, F = i.onMouseDown, O = i.onMouseEnter, B = i.onMouseLeave, W = i.onMouseOver, q = i.primary, U = i.primaryDetail, V = i.role, H = V === void 0 ? "gridcell" : V, G = i.secondary, z = i.secondaryDetail, j = i.tabIndex, K = i.tabOrder, Q = i.tertiary, X = i.testid, Y = i.theme, J = i.unreadStyle, Z = !!(R !== !0 && Y !== "disabled" && (w || F || O || W)), ee = r("useWAWebStaticButtonA11y")(w), te = ee[0], ne = ee[1], re = n("cr:23442")(), oe = re[0], ae = re[1], ie = r("useMergeRefs")(a, te, oe), le = T && Z && l == null || x === !0, se = Y !== "voip-ongoing-call" && (ae === !0 || l === !0), ue = se && (m === "DEFAULT" || m === "BOTH"), ce = se && (m === "BORDER" || m === "BOTH"), de = Y === "reaction-by-others" || Y === "reaction-by-me" || Y === "newsletter-reaction-by-others" || Y === "newsletter-reaction-by-me", me = Y === "product" || Y === "product-out-of-stock" || Y === "product-of-collection" || Y === "collection-header" || Y === "collection-edit" || Y === "ads-list", pe = Y === "drawer-list" || Y === "chat-info" || Y === "subgroup" || Y === "subgroup-new" || Y === "quick-replies-drawer-item", _e = Y === "label-selection" || Y === "label-selection-redesigned" || Y === "label-selection-new-label" || Y === "create-new-list-consumer" || Y === "create-new-list-smb", fe = Y === "list-names" || Y === "list-names-no-delete", ge = h || Y === "chat-checkbox" || Y === "chat-checkbox-no-delete" || Y === "cell-message-checkbox" || Y === "chat-checkbox-disabled", he = Y === "group-modal" || Y === "chat-checkbox-no-delete", ye = Y === "disabled" || Y === "disabled-no-border", Ce = Y === "linked-account" || Y === "linked-account-consumer", be = (s || (s = r("stylex")))(d.chat, Y === "voip-ongoing-call" && d.themeVoipOngoingCall, ce && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, Z && Y !== "refresh" && d.chatInteractive, Z && Y === "refresh" && d.chatInteractiveRefreshed, ge && d.themeCheckbox, Y === "chat-info" && d.themeChatInfo, (Y === "subgroup" || Y === "subgroup-new") && d.themeSubgroup, Y === "community-home" && d.themeCommunityHome, Y === "identity" && d.themeIdentity, fe && d.themeListNames, Y === "plain" && d.themePlain, Y === "status-list-modal" && d.themeStatusListModal, _e && d.themeLabel, (Y === "label-selection-redesigned" || Y === "label-selection-new-label") && d.themeLabelRedesigned, (Y === "create-new-list-smb" || Y === "create-new-list-consumer") && d.themeLabelNewList, Y === "add-item" && d.themeAddItem, Y === "add-order-item" && d.themeAddOrderItem, Y === "groups_v4_invite" && d.groupsV4Invite, (me || Y === "order-product") && d.themeProduct, Y === "cart-product" && d.themeCartProduct, Y === "sticker-pack" && d.themeStickerPack, Y === "media" && d.themeMedia, Y === "list-button-compact" && d.themeListButton, Y === "list-msg" && d.themeListMsg, Y === "archive-panel" && d.themeArchivePanel, Y === "radio-button-row" && d.themeRadioButtonRow, de && d.themeReaction, Y === "newsletter-reaction-by-others" && d.themeNewsletterReactionByOthers, Y === "newsletter-reaction-by-contact" && d.themeNewsletterContactReactions, Y === "newsletter-link-cell" && d.themeNewsletterLinkDrawer, ye && d.chatDisabled, Ce && d.themeLinkedAccount, Y === "linked-account-consumer" && d.themeLinkedAccountConsumer, (Y === "community-tab-home" || Y === "community-tab-home-new") && d.themeCommunityTabHome, Y === "view-all" && d.themeCommunityTabViewAll, Y === "community-create" && d.themeCommunityCreate, Y === "menu-item" && d.themeMenuItem, Y === "lists-assign-modal" && d.themeListsAssignModal, Y === "product-add-to-order" && d.themeProductAddToOrder, M != null && d.tallerCellWithLabel, Q != null && d.tallerCellWithTertiary, i.tallerCellWithMemberLabel === !0 && d.tallerCellWithMemberLabel, $ === !0 && d.chatIdle, N === !0 && d.chatMuted, ue && d.chatActive, L === !0 && d.chatDrag, de && ue && d.themeReactionActive, fe && ue && d.themeListNamesActive, Z && $ === !0 && d.chatInteractiveIdle, Z && $ === !0 && de && d.chatInteractiveIdleThemeReaction, Z && Y === "voip-ongoing-call" && $ === !0 && d.themeVoipOngoingCallIdleHover, Z && de && d.chatInteractiveThemeReaction, Z && Y === "reaction-by-others" && ue && d.chatInteractiveThemeReactionByOthersActive, Z && Y === "plain" && d.chatInteractiveThemePlain, Z && Y === "radio-button-row" && d.chatInteractiveThemeRadioButtonRow, Z && fe && d.chatInteractiveThemeListNames, Z && Y === "groups_v4_invite" && d.chatInteractiveGroupsV4Invite, Y === "label-selection-new-label" && !i.image && d.paddingStart28, Y === "create-new-list-consumer" && !i.image && d.paddingStart8, (Y === "label-selection-redesigned" || Y === "label-selection") && !i.image && d.paddingStart16, (Y === "label-list-no-border" || Y === "label-list") && !i.image && d.paddingStart12, Y === "ads-list" && d.adListRow, (Y === "create-new-list-smb" || Y === "create-new-list-consumer") && d.noInlineMargin), ve = y != null && y !== "" ? be + " " + y : be, Se;
		P && (Se = v ? P : c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(Y === "refresh" || Y === "chat-info" ? d.chatAvatarRefreshed : d.chatAvatar, (Y === "subgroup" || Y === "subgroup-new") && d.chatAvatarThemeSubgroup, Y === "identity" && d.chatAvatarThemeIdentity, _e && d.chatAvatarThemeLabel, (Y === "label-selection-redesigned" || Y === "label-selection-new-label") && d.chatAvatarThemeLabelRedesigned, Y === "lists-assign-modal" && d.chatAvatarThemeListsAssignModal, fe && d.chatAvatarThemeListNames, de && d.chatAvatarThemeReaction, (Y === "create-new-list-smb" || Y === "create-new-list-consumer") && d.chatAvatarThemeLabelNewList, Y === "menu-item" && d.chatAvatarThemeMenuItem, Q != null && d.chatAvatarTallerCellWithTertiary, Y === "groups_v4_invite" && d.chatAvatarGroupsV4Invite, Y === "list-button-compact" && d.chatAvatarThemeListButton, Y === "archive-panel" && d.chatAvatarThemeArchivePanel, Ce && d.chatAvatarThemeLinkedAccount, Y === "linked-account-consumer" && d.chatAvatarThemeLinkedAccountConsumer, Y === "chat-checkbox-disabled" && d.chatAvatarThemeCheckboxDisabled), { children: P })));
		var Re = [
			"product",
			"product-out-of-stock",
			"product-of-collection",
			"sticker-pack"
		], Le;
		if (U != null) {
			var Ee = Y == null || !Re.includes(Y);
			Le = c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(Ee && d.chatMeta, Ee && M == null && d.chatMetaInMain, Ee && J === !0 && d.chatMetaUnread, J === !0 && d.unreadMessageTimestampOldAndPostRefreshed, Ee && Y === "chat-search" && d.chatMetaThemeSearch, Ee && pe && d.chatMetaThemeDrawerList, Ee && Y === "radio-button-row" && d.chatMetaThemeRadioButtonRow, Ee && M != null && d.chatMetaTallerCellWithLabel, Ee && i.tallerCellWithMemberLabel === !0 && d.chatMetaTallerCellWithMemberLabel), {
				"data-testid": "cell-frame-primary-detail",
				children: U
			}));
		}
		var ke, Ie;
		G != null && (Ie = z != null ? c.jsx("div", babelHelpers.extends({
			role: "gridcell",
			"aria-colindex": 1
		}, {
			0: { className: "xhslqc4 x1c4vz4f x2lah0s x1pg5gke x1fc57z9 xdzw4kq x193iq5w" },
			1: { className: "xhslqc4 x1c4vz4f x2lah0s x1pg5gke x1fc57z9 xdzw4kq x193iq5w x135pmgq" }
		}[(Y === "product-of-collection") << 0], { children: z })) : null, ke = c.jsxs("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(d.chatSecondary, J === !0 && d.chatSecondaryUnread, ue && d.chatSecondaryActive, de && d.chatSecondaryThemeReaction, de && ue && d.chatSecondaryThemeReactionActive, Y === "status-list-modal" && d.chatSecondaryThemeStatusListModal, Y === "subgroup-new" && d.chatSecondaryThemeSubgroupNew, Y === "community-tab-home-new" && d.chatSecondaryThemeCommunityTabHomeNew, M != null && d.chatSecondaryTallerCellWithLabel, Q != null && d.chatSecondaryTallerCellWithTertiary, i.tallerCellWithMemberLabel === !0 && d.chatSecondaryTallerCellWithMemberLabel, Y === "cart-product" && d.chatSecondaryThemeCartProduct, fe && d.chatSecondaryThemeListNames, Y === "add-item-placeholder" && d.chatSecondaryThemeAddItemPlaceholder, Y === "linked-account-consumer" && d.chatSecondaryThemeLinkedAccountConsumer, he && d.chatSecondaryMember, ye && d.chatSecondaryDisabled, Y === "chat-checkbox-disabled" && d.chatSecondaryThemeCheckboxDisabled, (Y === "product" || Y === "product-out-of-stock") && $ === !0 && d.chatSecondaryProductIdle, Y === "product-out-of-stock" && d.chatSecondaryProductOutOfStock), {
			"data-testid": "cell-frame-secondary",
			children: [c.jsx("div", babelHelpers.extends({}, s.props(d.chatStatus, J === !0 && d.chatStatusUnread, d.chatStatusUnreadRegular, k && d.extendSecondaryEllipsis, Y === "identity" && d.chatStatusThemeIdentity, de && d.chatStatusThemeReaction, Y === "reaction-by-me" && d.chatStatusThemeReactionByMe, Y === "media" && d.chatStatusThemeMedia, Y === "select-dropdown-item" && d.chatStatusThemeSelectDropdownItem, Y === "community-tab-activity-cell" && d.chatStatusThemeCommunityTabActivityCell, Y === "community-create" && d.chatStatusThemeCommunityCreate, Y === "list-msg" && d.chatStatusThemeListMsg), { children: G })), M == null && Ie]
		})));
		var Te = Q != null ? c.jsx("div", {
			className: "x6s0dn4 x78zum5 x1gxa6cn",
			"data-testid": "cell-frame-tertiary",
			children: Q
		}) : null, De = S != null ? c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(d.chatBody, d.chatDetails, de && d.chatDetailsThemeReaction, fe && d.chatDetailsThemeListNames, fe && d.chatDetailsThemeListNamesPadding, Y === "cart-product" && d.chatDetailsThemeCartProduct, Y === "select-dropdown-item" && d.chatDetailsThemeSelectDropdownItem, Y === "archive-panel" && d.chatDetailsThemeArchivePanel, Ce && d.chatDetailsThemeLinkedAccount), { children: S })) : null;
		return c.jsxs("div", babelHelpers.extends({
			"data-tab": K,
			ref: ie,
			tabIndex: j,
			"data-testid": X != null ? X : "cell-frame-container",
			"data-focusid": D,
			className: ve,
			onClick: w,
			onMouseDown: F,
			onMouseEnter: O,
			onMouseOver: W,
			onMouseLeave: B,
			onContextMenu: A,
			role: C,
			"aria-label": f != null && f !== "" ? f : void 0
		}, le && ne, { children: [
			c.jsx("div", babelHelpers.extends({}, s.props(d.image, (me || Y === "order-product") && d.imageThemeProduct, Y === "cart-product" && d.imageThemeCartProduct, Y === "collection-edit" && d.imageThemeCollectionEdit, Y === "media" && d.imageThemeMedia, Y === "product-out-of-stock" && d.imageThemeProductOutOfStock, Y === "community-tab-subgroup" && d.imageThemeCommunityTabSubgroup, Y === "view-all" && d.imageThemeCommunityTabViewAll, Y === "community-tab-activity-cell" && d.imageThemeCommunityTabActivityCell), { children: Se })),
			c.jsxs("div", babelHelpers.extends({}, s.props(d.chatBody, (Y === "cell-message" || Y === "cell-message-checkbox") && d.chatBodyThemeMessage, Y === "chat-search" && d.chatBodyThemeSearch, Y === "chat-info" && d.chatBodyThemeChatInfo, (Y === "subgroup" || Y === "subgroup-new") && d.chatBodyThemeSubgroup, Y === "community-home" && d.chatBodyThemeCommunityHome, Y === "identity" && d.chatBodyThemeIdentity, fe && d.chatBodyThemeListNames, Y === "add-item" && d.chatBodyThemeAddItem, Y === "add-item-placeholder" && d.chatBodyThemeAddItemPlaceholder, _e && d.chatBodyThemeLabel, Y === "label-selection-new-label" && d.chatBodyThemeNewLabel, (Y === "create-new-list-smb" || Y === "create-new-list-consumer") && d.chatBodyThemeLabelNewList, Y === "lists-assign-modal" && d.chatBodyThemeListsAssignModal, Y === "groups_v4_invite" && d.chatBodyGroupsV4Invite, Y === "sticker-pack" && d.chatBodyThemeStickerPack, Ce && d.chatBodyThemeLinkedAccount, Y === "linked-account-consumer" && d.chatBodyThemeLinkedAccountConsumer, Y === "menu-item" && d.chatBodyThemeMenuItem, Y === "ads-list" && d.adsListChatBody), { children: [
				M != null && c.jsxs("div", {
					className: "x6s0dn4 xhslqc4 x78zum5 x1f6kntn xd4r4e8 x1gslohp xvrgn94 x1yc453h",
					"data-testid": "cell-frame-label",
					children: [M, Le]
				}),
				c.jsxs("div", babelHelpers.extends({
					role: H,
					"aria-colindex": _
				}, {
					0: { className: "x6s0dn4 x78zum5 xggjnk3 x1yc453h" },
					2: { className: "x6s0dn4 x78zum5 xggjnk3 x1yc453h xaw7rza" },
					1: { className: "x6s0dn4 xggjnk3 x1yc453h x1kpc9vs x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5 x1lliihq x1qx5ct2 x1oysuqx" },
					3: { className: "x6s0dn4 xggjnk3 x1yc453h xaw7rza x1kpc9vs x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5 x1lliihq x1qx5ct2 x1oysuqx" }
				}[(Y === "list-names-no-delete") << 1 | (Y === "add-item-placeholder") << 0], { children: [c.jsxs("div", babelHelpers.extends({}, s.props(d.chatTitle, J === !0 && d.chatTitleUnread, d.chatTitleUnreadRegular, Y === "chat-search" && d.chatTitleThemeSearch, Y === "community-home" && d.chatTitleThemeCommunityHome, Y === "status-list-modal" && d.chatTitleThemeStatusListModal, Y === "identity" && d.chatTitleThemeIdentity, de && d.chatTitleThemeReaction, fe && d.chatTitleThemeListNames, Y === "add-order-item" && d.chatTitleThemeAddOrderItem, Y === "media" && d.chatTitleThemeMedia, M != null && d.chatTitleTallerCellWithLabel, i.tallerCellWithMemberLabel === !0 && d.chatTitleTallerCellWithMemberLabel, Y === "view-all" && d.chatTitleThemeCommunityTabViewAll, Y === "menu-item" && d.chatTitleThemeMenuItem, Y === "label-list-no-border" && d.chatTitlePrimaryLimitedWidth, Y === "linked-account-consumer" && d.chatTitleThemeLinkedAccountConsumer, (Y === "product" || Y === "product-out-of-stock") && $ === !0 && d.chatTitleProductIdle, Y === "product-out-of-stock" && d.chatTitleProductOutOfStock, he && d.chatTitleMember, ye && d.chatTitleDisabled, Y === "chat-checkbox-disabled" && d.chatTitleThemeCheckboxDisabled), {
					"data-testid": "cell-frame-title",
					children: [q, M != null && Ie]
				})), M == null && Le] })),
				ke,
				Te
			] })),
			De
		] }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
