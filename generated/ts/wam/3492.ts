export const WamCommunityCreation = 3492 as const

export interface CommunityCreationEvent {
  /** field 1, wire `community_creation_action_count` */
  communityCreationActionCount?: number
  /** field 2, wire `community_creation_action_taken` */
  communityCreationActionTaken?: COMMUNITYCREATIONACTIONTAKENTYPE
  /** field 3, wire `community_creation_current_screen` */
  communityCreationCurrentScreen?: COMMUNITYCREATIONCURRENTSCREENTYPE
  /** field 4, wire `community_creation_session_id` */
  communityCreationSessionId?: string
  /** field 5, wire `community_creation_entrypoint` */
  communityCreationEntrypoint?: COMMUNITYCREATIONENTRYPOINTTYPE
  /** field 6, wire `community_id` */
  communityId?: string
}