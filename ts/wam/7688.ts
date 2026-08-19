export const WamPathfinderFrameworkHealth = 7688 as const

export interface PathfinderFrameworkHealthEvent {
  /** field 1, wire `pathfinder_health_event_data` */
  pathfinderHealthEventData?: string
  /** field 2, wire `pathfinder_health_event_type` */
  pathfinderHealthEventType?: PATHFINDERHEALTHEVENTTYPE
}