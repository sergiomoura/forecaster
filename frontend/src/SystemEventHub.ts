import { Errors } from './Errors'

export enum EventTypes {

  formSubmitted = 'formSubmitted',

}

export type Event = { type: EventTypes }
export type OnFormSubmittedEvent = Event & { city: string }

type EventHandler = (evt: Event) => void

class SystemEventHubClass {

  private readonly listeners: Record<EventTypes, EventHandler[]>

  constructor () {

    this.listeners = {
      formSubmitted: []
    }

  }

  on (eventType: EventTypes, handler: EventHandler): EventHandler {

    this.listeners[eventType].push(handler)
    return handler

  }

  off (event: EventTypes, handler: EventHandler): EventHandler {

    const pos = this.listeners[event].indexOf(handler)
    if (pos === -1) { throw Errors.unexistentHandler }
    this.listeners[event].splice(pos, 1)
    return handler

  }

  emit (event: Event): void {

    this.listeners[event.type].forEach(
      handler => { handler(event) }
    )

  }

}

export const SystemEventHub = new SystemEventHubClass()
