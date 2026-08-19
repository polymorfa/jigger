__d("WAArmadilloMiTransportAdminMessage.pb", ["$InternalEnum", "WAProtoConst"], (function(t, n, r, o, a, i, l) {
	var e, s, u = (s = n("$InternalEnum"))({
		UNSET: 0,
		DISABLED: 1,
		ENABLED: 2
	}), c = s({
		UNSET: 0,
		CHANGED: 1,
		REMOVED: 2
	}), d = s({
		UNSET: 0,
		PINNED: 1,
		UNPINNED: 2
	}), m = s({
		UNSET: 0,
		ALL_MEMBERS: 1,
		ADMINS_ONLY: 2
	}), p = s({
		UNSET: 0,
		ADDED: 1,
		REMOVED: 2
	}), _ = s({
		UNSET: 0,
		ADDED: 1,
		REMOVED: 2
	}), f = {}, g = {}, h = {}, y = {}, C = {}, b = {}, v = {}, S = {}, R = {}, L = {}, E = {}, k = {}, I = {}, T = {}, D = {}, x = {}, $ = {}, P = {}, N = {}, M = {}, w = {}, A = {}, F = {}, O = {}, B = {}, W = {}, q = {}, U = {}, V = {}, H = {}, G = {}, z = {}, j = {}, K = {}, Q = {}, X = {}, Y = {}, J = {}, Z = {}, ee = {}, te = {}, ne = {}, re = {}, oe = {};
	f.name = "MiTransportAdminMessage", f.internalSpec = {
		skipBumpThread: [34, (e = o("WAProtoConst")).TYPES.BOOL],
		skipSnippetUpdate: [35, e.TYPES.BOOL],
		readonlyMetadataDataclass: [36, e.TYPES.STRING],
		chatThemeChanged: [
			1,
			e.TYPES.MESSAGE,
			oe
		],
		nicknameChanged: [
			2,
			e.TYPES.MESSAGE,
			re
		],
		groupParticipantChanged: [
			3,
			e.TYPES.MESSAGE,
			ne
		],
		groupAdminChanged: [
			4,
			e.TYPES.MESSAGE,
			te
		],
		groupNameChanged: [
			5,
			e.TYPES.MESSAGE,
			ee
		],
		groupMembershipAddModeChanged: [
			6,
			e.TYPES.MESSAGE,
			Z
		],
		messagePinned: [
			7,
			e.TYPES.MESSAGE,
			J
		],
		groupImageChanged: [
			8,
			e.TYPES.MESSAGE,
			Y
		],
		quickReactionChanged: [
			9,
			e.TYPES.MESSAGE,
			X
		],
		linkCta: [
			10,
			e.TYPES.MESSAGE,
			K
		],
		iconChanged: [
			11,
			e.TYPES.MESSAGE,
			j
		],
		disappearingSettingChanged: [
			12,
			e.TYPES.MESSAGE,
			z
		],
		limitSharingChanged: [
			13,
			e.TYPES.MESSAGE,
			G
		],
		xmatDisappearingSetting: [
			14,
			e.TYPES.MESSAGE,
			H
		],
		xmatFriendRequestConfirmedEncrypted: [
			15,
			e.TYPES.MESSAGE,
			V
		],
		xmatInstantGameEncryptedDynamicCustomUpdate: [
			16,
			e.TYPES.MESSAGE,
			U
		],
		xmatLinkCta: [
			17,
			e.TYPES.MESSAGE,
			q
		],
		xmatMagicWords: [
			18,
			e.TYPES.MESSAGE,
			W
		],
		xmatMessagingLimitSharing: [
			19,
			e.TYPES.MESSAGE,
			B
		],
		xmatMessengerQrCodeScanned: [
			20,
			e.TYPES.MESSAGE,
			O
		],
		xmatMessengerSharedAlbumAddition: [
			21,
			e.TYPES.MESSAGE,
			F
		],
		xmatMessengerSharedAlbumContentRemoval: [
			22,
			e.TYPES.MESSAGE,
			w
		],
		xmatMessengerSharedAlbumDeletion: [
			23,
			e.TYPES.MESSAGE,
			M
		],
		xmatMessengerSharedAlbumRename: [
			24,
			e.TYPES.MESSAGE,
			N
		],
		xmatMessengerSharedAlbum: [
			25,
			e.TYPES.MESSAGE,
			P
		],
		xmatThemeColor: [
			26,
			e.TYPES.MESSAGE,
			$
		],
		xmatThreadIcon: [
			27,
			e.TYPES.MESSAGE,
			x
		],
		xmatThreadNickname: [
			28,
			e.TYPES.MESSAGE,
			D
		],
		xmatThreadQuickReaction: [
			29,
			e.TYPES.MESSAGE,
			T
		],
		xmatUpdatePayments: [
			30,
			e.TYPES.MESSAGE,
			I
		],
		xmatPinMessageV2: [
			31,
			e.TYPES.MESSAGE,
			k
		],
		xmatUnpinMessageV2: [
			32,
			e.TYPES.MESSAGE,
			E
		],
		xmatGenaiTaskAdd: [
			33,
			e.TYPES.MESSAGE,
			L
		],
		xmatAddParticipants: [
			37,
			e.TYPES.MESSAGE,
			R
		],
		xmatRemoveParticipant: [
			38,
			e.TYPES.MESSAGE,
			S
		],
		xmatChangeThreadAdmins: [
			39,
			e.TYPES.MESSAGE,
			v
		],
		xmatChangeThreadName: [
			40,
			e.TYPES.MESSAGE,
			b
		],
		xmatGroupThreadCreated: [
			41,
			e.TYPES.MESSAGE,
			C
		],
		xmatSetParticipantUpdateMode: [
			42,
			e.TYPES.MESSAGE,
			y
		],
		xmatMessengerMessageReminderSet: [
			43,
			e.TYPES.MESSAGE,
			h
		],
		xmatMessengerMessageReminderTriggered: [
			44,
			e.TYPES.MESSAGE,
			g
		],
		__oneofs__: { content: [
			"chatThemeChanged",
			"nicknameChanged",
			"groupParticipantChanged",
			"groupAdminChanged",
			"groupNameChanged",
			"groupMembershipAddModeChanged",
			"messagePinned",
			"groupImageChanged",
			"quickReactionChanged",
			"linkCta",
			"iconChanged",
			"disappearingSettingChanged",
			"limitSharingChanged",
			"xmatDisappearingSetting",
			"xmatFriendRequestConfirmedEncrypted",
			"xmatInstantGameEncryptedDynamicCustomUpdate",
			"xmatLinkCta",
			"xmatMagicWords",
			"xmatMessagingLimitSharing",
			"xmatMessengerQrCodeScanned",
			"xmatMessengerSharedAlbumAddition",
			"xmatMessengerSharedAlbumContentRemoval",
			"xmatMessengerSharedAlbumDeletion",
			"xmatMessengerSharedAlbumRename",
			"xmatMessengerSharedAlbum",
			"xmatThemeColor",
			"xmatThreadIcon",
			"xmatThreadNickname",
			"xmatThreadQuickReaction",
			"xmatUpdatePayments",
			"xmatPinMessageV2",
			"xmatUnpinMessageV2",
			"xmatGenaiTaskAdd",
			"xmatAddParticipants",
			"xmatRemoveParticipant",
			"xmatChangeThreadAdmins",
			"xmatChangeThreadName",
			"xmatGroupThreadCreated",
			"xmatSetParticipantUpdateMode",
			"xmatMessengerMessageReminderSet",
			"xmatMessengerMessageReminderTriggered"
		] }
	}, g.name = "MiTransportAdminMessage$XmatMessengerMessageReminderTriggered", g.internalSpec = {
		offlineThreadingId: [1, e.TYPES.INT64],
		scheduledTime: [2, e.TYPES.INT64]
	}, h.name = "MiTransportAdminMessage$XmatMessengerMessageReminderSet", h.internalSpec = {
		offlineThreadingId: [1, e.TYPES.INT64],
		scheduledTime: [2, e.TYPES.INT64]
	}, y.name = "MiTransportAdminMessage$XmatSetParticipantUpdateMode", y.internalSpec = {
		participantUpdateMode: [1, e.TYPES.STRING],
		setterId: [2, e.TYPES.INT64],
		transportThreadFbid: [3, e.TYPES.INT64]
	}, C.name = "MiTransportAdminMessage$XmatGroupThreadCreated", C.internalSpec = { threadSubtype: [1, e.TYPES.STRING] }, b.name = "MiTransportAdminMessage$XmatChangeThreadName", b.internalSpec = { newThreadName: [1, e.TYPES.STRING] }, v.name = "MiTransportAdminMessage$XmatChangeThreadAdmins", v.internalSpec = {
		adminEvent: [1, e.TYPES.STRING],
		targetId: [2, e.TYPES.INT64],
		threadCategory: [3, e.TYPES.STRING],
		adminType: [4, e.TYPES.STRING]
	}, S.name = "MiTransportAdminMessage$XmatRemoveParticipant", S.internalSpec = { removedParticipantFbid: [1, e.TYPES.INT64] }, R.name = "MiTransportAdminMessage$XmatAddParticipants", R.internalSpec = {
		participantsAdded: [1, e.FLAGS.REPEATED | e.FLAGS.PACKED | e.TYPES.INT64],
		addedThroughJoinRequests: [2, e.TYPES.BOOL]
	}, L.name = "MiTransportAdminMessage$XmatGenAITaskAdd", L.internalSpec = { taskId: [1, e.TYPES.INT64] }, E.name = "MiTransportAdminMessage$XmatUnpinMessageV2", E.internalSpec = { pinnedMessageId: [1, e.TYPES.STRING] }, k.name = "MiTransportAdminMessage$XmatPinMessageV2", k.internalSpec = { pinnedMessageId: [1, e.TYPES.STRING] }, I.name = "MiTransportAdminMessage$XmatUpdatePayments", I.internalSpec = {
		receiverName: [1, e.TYPES.STRING],
		senderName: [2, e.TYPES.STRING],
		amount: [3, e.TYPES.FLOAT],
		transactionId: [4, e.TYPES.INT64],
		transactionStatus: [5, e.TYPES.INT32]
	}, T.name = "MiTransportAdminMessage$XmatThreadQuickReaction", T.internalSpec = {
		threadQuickReactionEmoji: [1, e.TYPES.STRING],
		threadQuickReactionInstructionKeyId: [2, e.TYPES.STRING]
	}, D.name = "MiTransportAdminMessage$XmatThreadNickname", D.internalSpec = {
		participantId: [1, e.TYPES.INT64],
		nickname: [2, e.TYPES.STRING]
	}, x.name = "MiTransportAdminMessage$XmatThreadIcon", x.internalSpec = { threadIcon: [1, e.TYPES.STRING] }, $.name = "MiTransportAdminMessage$XmatThemeColor", $.internalSpec = {
		themeId: [1, e.TYPES.STRING],
		themeColor: [2, e.TYPES.STRING],
		gradient: [3, e.FLAGS.REPEATED | e.TYPES.STRING],
		shouldShowIcon: [4, e.TYPES.BOOL],
		themeType: [5, e.TYPES.INT32],
		accessibilityLabel: [6, e.TYPES.STRING],
		themeNameWithSubtitle: [7, e.TYPES.STRING],
		themeEmoji: [8, e.TYPES.STRING]
	}, P.name = "MiTransportAdminMessage$XmatMessengerSharedAlbum", P.internalSpec = { xmaDataclass: [1, e.TYPES.STRING] }, N.name = "MiTransportAdminMessage$XmatMessengerSharedAlbumRename", N.internalSpec = {
		sharedAlbumId: [1, e.TYPES.INT64],
		oldAlbumTitle: [2, e.TYPES.STRING],
		newAlbumTitle: [3, e.TYPES.STRING]
	}, M.name = "MiTransportAdminMessage$XmatMessengerSharedAlbumDeletion", M.internalSpec = {
		sharedAlbumId: [1, e.TYPES.INT64],
		albumTitle: [2, e.TYPES.STRING]
	}, w.name = "MiTransportAdminMessage$XmatMessengerSharedAlbumContentRemoval", w.internalSpec = {
		sharedAlbumId: [1, e.TYPES.INT64],
		removedContentMap: [
			2,
			e.FLAGS.REPEATED | e.TYPES.MESSAGE,
			A
		],
		removedContentCount: [3, e.TYPES.INT64],
		albumTitle: [4, e.TYPES.STRING]
	}, A.name = "MiTransportAdminMessage$XmatMessengerSharedAlbumContentRemoval$RemovedContentTuple", A.internalSpec = {
		key: [1, e.TYPES.INT64],
		value: [2, e.TYPES.STRING]
	}, F.name = "MiTransportAdminMessage$XmatMessengerSharedAlbumAddition", F.internalSpec = {
		sharedAlbumId: [1, e.TYPES.INT64],
		albumTitle: [2, e.TYPES.STRING],
		numOfAttachments: [3, e.TYPES.INT64],
		isAlbumCreation: [4, e.TYPES.BOOL]
	}, O.name = "MiTransportAdminMessage$XmatMessengerQRCodeScanned", O.internalSpec = {
		receiverName: [1, e.TYPES.STRING],
		senderName: [2, e.TYPES.STRING]
	}, B.name = "MiTransportAdminMessage$XmatMessagingLimitSharing", B.internalSpec = {
		senderName: [1, e.TYPES.STRING],
		senderId: [2, e.TYPES.STRING],
		limitSharingType: [3, e.TYPES.STRING]
	}, W.name = "MiTransportAdminMessage$XmatMagicWords", W.internalSpec = {
		newMagicWordCount: [1, e.TYPES.INT64],
		removedMagicWordCount: [2, e.TYPES.INT64],
		magicWord: [3, e.TYPES.STRING],
		emojiEffect: [4, e.TYPES.STRING],
		isAllEdited: [5, e.TYPES.BOOL],
		themeName: [6, e.TYPES.STRING]
	}, q.name = "MiTransportAdminMessage$XmatLinkCTA", q.internalSpec = {
		linkCtaXmatPrimaryText: [1, e.TYPES.STRING],
		linkCtaXmatCtaText: [2, e.TYPES.STRING],
		linkCtaXmatCtaUrl: [3, e.TYPES.STRING],
		linkCtaXmatCtaIosUrl: [4, e.TYPES.STRING],
		androidUri: [5, e.TYPES.STRING],
		asyncUrl: [6, e.TYPES.STRING],
		wwwIsAsyncUrl: [7, e.TYPES.BOOL],
		msiteEnabled: [8, e.TYPES.BOOL],
		hideUriInFallback: [9, e.TYPES.BOOL],
		showConfirmationDialog: [10, e.TYPES.BOOL],
		graphPayload: [11, e.TYPES.STRING],
		identifierName: [12, e.TYPES.STRING],
		threadId: [13, e.TYPES.STRING],
		hideCtaInFallback: [14, e.TYPES.BOOL],
		ctxAdConversationStarterInfo: [15, e.TYPES.STRING],
		fbmUri: [16, e.TYPES.STRING],
		initiatorUserId: [17, e.TYPES.STRING]
	}, U.name = "MiTransportAdminMessage$XmatInstantGameEncryptedDynamicCustomUpdate", U.internalSpec = {
		senderName: [1, e.TYPES.STRING],
		muteManagementAdminTextType: [2, e.TYPES.STRING],
		gameName: [3, e.TYPES.STRING]
	}, V.name = "MiTransportAdminMessage$XmatFriendRequestConfirmedEncrypted", V.internalSpec = {
		otherUserName: [1, e.TYPES.STRING],
		isTurnOnCohort: [2, e.TYPES.STRING],
		userWhoAcceptedFriendRequest: [3, e.TYPES.STRING]
	}, H.name = "MiTransportAdminMessage$XmatDisappearingSetting", H.internalSpec = {
		disappearingSettingTime: [1, e.TYPES.INT64],
		oldDisappearingSettingTime: [2, e.TYPES.INT64],
		disappearingSettingActorFbid: [3, e.TYPES.INT64],
		newEphemeralityType: [4, e.TYPES.INT64],
		oldEphemeralityType: [5, e.TYPES.INT64]
	}, G.name = "MiTransportAdminMessage$LimitSharingChanged", G.internalSpec = { sharingType: [
		1,
		e.TYPES.ENUM,
		u
	] }, z.name = "MiTransportAdminMessage$DisappearingSettingChanged", z.internalSpec = {
		disappearingSettingDurationSeconds: [1, e.TYPES.INT32],
		oldDisappearingSettingDurationSeconds: [2, e.TYPES.INT32]
	}, j.name = "MiTransportAdminMessage$IconChanged", j.internalSpec = { threadIcon: [1, e.TYPES.STRING] }, K.name = "MiTransportAdminMessage$LinkCta", K.internalSpec = {
		ukOsaAdminText: [
			1,
			e.TYPES.MESSAGE,
			Q
		],
		__oneofs__: { content: ["ukOsaAdminText"] }
	}, Q.name = "MiTransportAdminMessage$LinkCta$UkOsaAdminText", Q.internalSpec = { initiatorUserId: [2, e.TYPES.STRING] }, X.name = "MiTransportAdminMessage$QuickReactionChanged", X.internalSpec = { emojiName: [1, e.TYPES.STRING] }, Y.name = "MiTransportAdminMessage$GroupImageChanged", Y.internalSpec = { action: [
		1,
		e.TYPES.ENUM,
		c
	] }, J.name = "MiTransportAdminMessage$MessagePinned", J.internalSpec = { action: [
		1,
		e.TYPES.ENUM,
		d
	] }, Z.name = "MiTransportAdminMessage$GroupMembershipAddModeChanged", Z.internalSpec = { mode: [
		1,
		e.TYPES.ENUM,
		m
	] }, ee.name = "MiTransportAdminMessage$GroupNameChanged", ee.internalSpec = { groupName: [1, e.TYPES.STRING] }, te.name = "MiTransportAdminMessage$GroupAdminChanged", te.internalSpec = {
		targetUserId: [1, e.FLAGS.REPEATED | e.TYPES.STRING],
		action: [
			2,
			e.TYPES.ENUM,
			p
		]
	}, ne.name = "MiTransportAdminMessage$GroupParticipantChanged", ne.internalSpec = {
		targetUserId: [1, e.FLAGS.REPEATED | e.TYPES.STRING],
		action: [
			2,
			e.TYPES.ENUM,
			_
		]
	}, re.name = "MiTransportAdminMessage$NicknameChanged", re.internalSpec = {
		targetUserId: [1, e.TYPES.STRING],
		nickname: [2, e.TYPES.STRING]
	}, oe.name = "MiTransportAdminMessage$ChatThemeChanged", oe.internalSpec = {
		themeName: [1, e.TYPES.STRING],
		themeEmoji: [2, e.TYPES.STRING],
		themeType: [3, e.TYPES.INT32]
	}, l.MiTransportAdminMessage$LimitSharingChanged$SharingType = u, l.MiTransportAdminMessage$GroupImageChanged$Action = c, l.MiTransportAdminMessage$MessagePinned$Action = d, l.MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode = m, l.MiTransportAdminMessage$GroupAdminChanged$Action = p, l.MiTransportAdminMessage$GroupParticipantChanged$Action = _, l.MiTransportAdminMessageSpec = f, l.MiTransportAdminMessage$XmatMessengerMessageReminderTriggeredSpec = g, l.MiTransportAdminMessage$XmatMessengerMessageReminderSetSpec = h, l.MiTransportAdminMessage$XmatSetParticipantUpdateModeSpec = y, l.MiTransportAdminMessage$XmatGroupThreadCreatedSpec = C, l.MiTransportAdminMessage$XmatChangeThreadNameSpec = b, l.MiTransportAdminMessage$XmatChangeThreadAdminsSpec = v, l.MiTransportAdminMessage$XmatRemoveParticipantSpec = S, l.MiTransportAdminMessage$XmatAddParticipantsSpec = R, l.MiTransportAdminMessage$XmatGenAITaskAddSpec = L, l.MiTransportAdminMessage$XmatUnpinMessageV2Spec = E, l.MiTransportAdminMessage$XmatPinMessageV2Spec = k, l.MiTransportAdminMessage$XmatUpdatePaymentsSpec = I, l.MiTransportAdminMessage$XmatThreadQuickReactionSpec = T, l.MiTransportAdminMessage$XmatThreadNicknameSpec = D, l.MiTransportAdminMessage$XmatThreadIconSpec = x, l.MiTransportAdminMessage$XmatThemeColorSpec = $, l.MiTransportAdminMessage$XmatMessengerSharedAlbumSpec = P, l.MiTransportAdminMessage$XmatMessengerSharedAlbumRenameSpec = N, l.MiTransportAdminMessage$XmatMessengerSharedAlbumDeletionSpec = M, l.MiTransportAdminMessage$XmatMessengerSharedAlbumContentRemovalSpec = w, l.MiTransportAdminMessage$XmatMessengerSharedAlbumContentRemoval$RemovedContentTupleSpec = A, l.MiTransportAdminMessage$XmatMessengerSharedAlbumAdditionSpec = F, l.MiTransportAdminMessage$XmatMessengerQRCodeScannedSpec = O, l.MiTransportAdminMessage$XmatMessagingLimitSharingSpec = B, l.MiTransportAdminMessage$XmatMagicWordsSpec = W, l.MiTransportAdminMessage$XmatLinkCTASpec = q, l.MiTransportAdminMessage$XmatInstantGameEncryptedDynamicCustomUpdateSpec = U, l.MiTransportAdminMessage$XmatFriendRequestConfirmedEncryptedSpec = V, l.MiTransportAdminMessage$XmatDisappearingSettingSpec = H, l.MiTransportAdminMessage$LimitSharingChangedSpec = G, l.MiTransportAdminMessage$DisappearingSettingChangedSpec = z, l.MiTransportAdminMessage$IconChangedSpec = j, l.MiTransportAdminMessage$LinkCtaSpec = K, l.MiTransportAdminMessage$LinkCta$UkOsaAdminTextSpec = Q, l.MiTransportAdminMessage$QuickReactionChangedSpec = X, l.MiTransportAdminMessage$GroupImageChangedSpec = Y, l.MiTransportAdminMessage$MessagePinnedSpec = J, l.MiTransportAdminMessage$GroupMembershipAddModeChangedSpec = Z, l.MiTransportAdminMessage$GroupNameChangedSpec = ee, l.MiTransportAdminMessage$GroupAdminChangedSpec = te, l.MiTransportAdminMessage$GroupParticipantChangedSpec = ne, l.MiTransportAdminMessage$NicknameChangedSpec = re, l.MiTransportAdminMessage$ChatThemeChangedSpec = oe;
}), 98);
